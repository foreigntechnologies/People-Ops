namespace Job.Domain.Entities;

public class JobPosition
{
    public Guid Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string WorkModel { get; set; } = string.Empty; // Remote, Hybrid, On-site
    public string Location { get; set; } = string.Empty; // City, State, Country
    public string TechStack { get; set; } = string.Empty; // e.g. "C#, Angular, PostgreSQL"
    public string Area { get; set; } = string.Empty; // e.g. "Back-end", "Front-end"
    public Guid CompanyId { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
