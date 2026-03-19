using Identity.Api.Contracts;
using Identity.Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace Identity.Api.Controllers;

[ApiController]
[Route("api/identity/auth")]
public sealed class AuthController : ControllerBase
{
    private readonly IAuthService _authService;

    public AuthController(IAuthService authService)
    {
        _authService = authService;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterRequest request)
    {
        var (success, error) = await _authService.RegisterAsync(request);
        if (!success)
        {
            return BadRequest(new { message = error });
        }

        return Ok(new { message = "Cadastro realizado com sucesso." });
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequest request)
    {
        var (success, response, error) = await _authService.LoginAsync(request);
        if (!success || response is null)
        {
            return Unauthorized(new { message = error ?? "Credenciais invalidas." });
        }

        return Ok(response);
    }
}
