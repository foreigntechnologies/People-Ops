Set-Location backend\services\job-service\src\Job.Infrastructure
dotnet add package Microsoft.EntityFrameworkCore
dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL

Set-Location ..\Job.Api
dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL

Set-Location ..\Job.Application
dotnet add reference ..\Job.Domain\Job.Domain.csproj

Set-Location ..\Job.Infrastructure
dotnet add reference ..\Job.Domain\Job.Domain.csproj
dotnet add reference ..\Job.Application\Job.Application.csproj

Set-Location ..\Job.Api
dotnet add reference ..\Job.Application\Job.Application.csproj
dotnet add reference ..\Job.Infrastructure\Job.Infrastructure.csproj
