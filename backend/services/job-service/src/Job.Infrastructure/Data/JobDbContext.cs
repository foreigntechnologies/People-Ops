using Job.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Job.Infrastructure.Data;

public class JobDbContext : DbContext
{
    public JobDbContext(DbContextOptions<JobDbContext> options) : base(options)
    {
    }

    public DbSet<JobPosition> JobPositions { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        
        modelBuilder.Entity<JobPosition>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Title).IsRequired().HasMaxLength(200);
            entity.Property(e => e.WorkModel).HasMaxLength(50);
            entity.Property(e => e.Location).HasMaxLength(200);
            entity.Property(e => e.TechStack).HasMaxLength(500);
            entity.Property(e => e.Area).HasMaxLength(100);
        });
    }
}
