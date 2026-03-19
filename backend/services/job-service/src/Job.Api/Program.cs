using Job.Domain.Interfaces;
using Job.Infrastructure.Data;
using Job.Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore;
using Scalar.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddAuthorization();
builder.Services.AddOpenApi();

// Configure DB Context 
builder.Services.AddDbContext<JobDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection") 
    ?? "Host=localhost;Database=peopleops_jobs;Username=postgres;Password=postgres")
           .UseSnakeCaseNamingConvention());

// Dependency Injection
builder.Services.AddScoped<IJobRepository, JobRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.MapScalarApiReference(options => {
        options.WithTitle("Job API")
               .WithTheme(ScalarTheme.Purple);
    });
}

// Ensure Database is created
using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<JobDbContext>();
    context.Database.EnsureCreated();
}

app.UseAuthorization();

app.MapControllers();

app.Run();
