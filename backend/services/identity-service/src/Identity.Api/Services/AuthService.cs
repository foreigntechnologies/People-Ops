using System.Collections.Concurrent;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Identity.Api.Contracts;
using Identity.Api.Domain;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;

namespace Identity.Api.Services;

public sealed class AuthService : IAuthService
{
    private static readonly ConcurrentDictionary<string, IdentityUserRecord> UsersByEmail = new(StringComparer.OrdinalIgnoreCase);
    private readonly PasswordHasher<IdentityUserRecord> _passwordHasher = new();
    private readonly IConfiguration _configuration;

    public AuthService(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public Task<(bool Success, string? Error)> RegisterAsync(RegisterRequest request)
    {
        var userType = NormalizeUserType(request.UserType);
        if (userType is null)
        {
            return Task.FromResult((Success: false, Error: (string?)"Tipo de usuario invalido. Use candidate ou company."));
        }

        var email = request.Email.Trim().ToLowerInvariant();
        var name = request.Name.Trim();
        if (string.IsNullOrWhiteSpace(name) || string.IsNullOrWhiteSpace(email) || string.IsNullOrWhiteSpace(request.Password))
        {
            return Task.FromResult((Success: false, Error: (string?)"Nome, e-mail e senha sao obrigatorios."));
        }

        if (request.Password.Length < 6)
        {
            return Task.FromResult((Success: false, Error: (string?)"A senha deve ter no minimo 6 caracteres."));
        }

        if (UsersByEmail.ContainsKey(email))
        {
            return Task.FromResult((Success: false, Error: (string?)"Este e-mail ja esta cadastrado."));
        }

        var user = new IdentityUserRecord
        {
            Id = Guid.NewGuid(),
            Name = name,
            Email = email,
            UserType = userType,
            CreatedAtUtc = DateTime.UtcNow
        };

        user.PasswordHash = _passwordHasher.HashPassword(user, request.Password);

        if (!UsersByEmail.TryAdd(email, user))
        {
            return Task.FromResult((Success: false, Error: (string?)"Nao foi possivel concluir o cadastro."));
        }

        return Task.FromResult((true, (string?)null));
    }

    public Task<(bool Success, AuthResponse? Response, string? Error)> LoginAsync(LoginRequest request)
    {
        var userType = NormalizeUserType(request.UserType);
        if (userType is null)
        {
            return Task.FromResult((Success: false, Response: (AuthResponse?)null, Error: (string?)"Tipo de usuario invalido."));
        }

        var email = request.Email.Trim().ToLowerInvariant();
        if (!UsersByEmail.TryGetValue(email, out var user))
        {
            return Task.FromResult((Success: false, Response: (AuthResponse?)null, Error: (string?)"Credenciais invalidas."));
        }

        if (!string.Equals(user.UserType, userType, StringComparison.OrdinalIgnoreCase))
        {
            return Task.FromResult((Success: false, Response: (AuthResponse?)null, Error: (string?)"Credenciais invalidas para o tipo de usuario selecionado."));
        }

        var verification = _passwordHasher.VerifyHashedPassword(user, user.PasswordHash, request.Password);
        if (verification == PasswordVerificationResult.Failed)
        {
            return Task.FromResult((Success: false, Response: (AuthResponse?)null, Error: (string?)"Credenciais invalidas."));
        }

        var expiresAt = DateTime.UtcNow.AddHours(8);
        var response = new AuthResponse
        {
            Token = BuildToken(user, expiresAt),
            ExpiresAtUtc = expiresAt,
            UserType = user.UserType,
            Name = user.Name,
            Email = user.Email
        };

        return Task.FromResult((Success: true, Response: (AuthResponse?)response, Error: (string?)null));
    }

    private string BuildToken(IdentityUserRecord user, DateTime expiresAt)
    {
        var key = _configuration["Jwt:Key"] ?? "people-ops-dev-secret-key-change-in-production";
        var issuer = _configuration["Jwt:Issuer"] ?? "PeopleOps.Identity";
        var audience = _configuration["Jwt:Audience"] ?? "PeopleOps.Client";

        var credentials = new SigningCredentials(
            new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key)),
            SecurityAlgorithms.HmacSha256);

        var claims = new[]
        {
            new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
            new Claim(JwtRegisteredClaimNames.Email, user.Email),
            new Claim("name", user.Name),
            new Claim(ClaimTypes.Role, user.UserType),
            new Claim("user_type", user.UserType)
        };

        var token = new JwtSecurityToken(
            issuer: issuer,
            audience: audience,
            claims: claims,
            notBefore: DateTime.UtcNow,
            expires: expiresAt,
            signingCredentials: credentials);

        return new JwtSecurityTokenHandler().WriteToken(token);
    }

    private static string? NormalizeUserType(string rawUserType)
    {
        var normalized = rawUserType.Trim().ToLowerInvariant();
        if (normalized is "candidate" or "company")
        {
            return normalized;
        }

        return null;
    }
}
