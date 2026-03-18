using Job.Domain.Entities;

namespace Job.Domain.Interfaces;

public interface IJobRepository
{
    Task<IEnumerable<JobPosition>> GetJobsAsync(
        string? search, 
        string? workModel, 
        string? location, 
        string? techStack, 
        string? area, 
        Guid? companyId);
        
    Task<JobPosition?> GetByIdAsync(Guid id);
    Task AddAsync(JobPosition job);
}
