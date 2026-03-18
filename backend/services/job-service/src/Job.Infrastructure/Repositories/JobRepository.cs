using Job.Domain.Entities;
using Job.Domain.Interfaces;
using Job.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Job.Infrastructure.Repositories;

public class JobRepository : IJobRepository
{
    private readonly JobDbContext _context;

    public JobRepository(JobDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<JobPosition>> GetJobsAsync(string? search, string? workModel, string? location, string? techStack, string? area, Guid? companyId)
    {
        var query = _context.JobPositions.AsQueryable();

        if (!string.IsNullOrWhiteSpace(search))
        {
            var searchLower = search.ToLower();
            query = query.Where(j => j.Title.ToLower().Contains(searchLower) || j.Description.ToLower().Contains(searchLower));
        }

        if (!string.IsNullOrWhiteSpace(workModel))
            query = query.Where(j => j.WorkModel == workModel);

        if (!string.IsNullOrWhiteSpace(location))
            query = query.Where(j => j.Location.ToLower().Contains(location.ToLower()));

        if (!string.IsNullOrWhiteSpace(techStack))
            query = query.Where(j => j.TechStack.ToLower().Contains(techStack.ToLower()));

        if (!string.IsNullOrWhiteSpace(area))
            query = query.Where(j => j.Area == area);

        if (companyId.HasValue && companyId.Value != Guid.Empty)
            query = query.Where(j => j.CompanyId == companyId.Value);

        return await query.OrderByDescending(j => j.CreatedAt).ToListAsync();
    }

    public async Task<JobPosition?> GetByIdAsync(Guid id)
    {
        return await _context.JobPositions.FindAsync(id);
    }

    public async Task AddAsync(JobPosition job)
    {
        await _context.JobPositions.AddAsync(job);
        await _context.SaveChangesAsync();
    }
}
