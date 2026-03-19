namespace Identity.Api.Domain;

public sealed class IdentityUserRecord
{
    public Guid Id { get; init; }
    public string Name { get; init; } = string.Empty;
    public string Email { get; init; } = string.Empty;
    public string PasswordHash { get; set; } = string.Empty;
    public string UserType { get; init; } = string.Empty;
    public DateTime CreatedAtUtc { get; init; }
}
