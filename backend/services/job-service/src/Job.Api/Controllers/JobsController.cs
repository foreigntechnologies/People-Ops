using Job.Application.Queries;
using Job.Domain.Entities;
using Job.Domain.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Job.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class JobsController : ControllerBase
{
    private readonly IJobRepository _jobRepository;

    public JobsController(IJobRepository jobRepository)
    {
        _jobRepository = jobRepository;
    }

    [HttpGet]
    public async Task<IActionResult> Get([FromQuery] JobQueryParameters query)
    {
        var jobs = await _jobRepository.GetJobsAsync(
            query.Search, 
            query.WorkModel, 
            query.Location, 
            query.TechStack, 
            query.Area, 
            query.CompanyId);
            
        return Ok(jobs);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(Guid id)
    {
        var job = await _jobRepository.GetByIdAsync(id);
        if (job == null) return NotFound();
        return Ok(job);
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] JobPosition job)
    {
        job.Id = Guid.NewGuid();
        job.CreatedAt = DateTime.UtcNow;
        await _jobRepository.AddAsync(job);
        return CreatedAtAction(nameof(GetById), new { id = job.Id }, job);
    }
}
