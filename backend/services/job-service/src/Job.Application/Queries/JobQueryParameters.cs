namespace Job.Application.Queries;

public class JobQueryParameters
{
    public string? Search { get; set; }
    public string? WorkModel { get; set; }
    public string? Location { get; set; }
    public string? TechStack { get; set; }
    public string? Area { get; set; }
    public Guid? CompanyId { get; set; }
}
