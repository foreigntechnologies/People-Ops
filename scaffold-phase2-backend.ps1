mkdir backend\services\company-service\src -Force
mkdir backend\services\candidate-service\src -Force
mkdir backend\services\application-service\src -Force

# Company Service
Set-Location backend\services\company-service
dotnet new sln -n CompanyService
Set-Location src
dotnet new webapi -n Company.Api
dotnet new classlib -n Company.Application
dotnet new classlib -n Company.Domain
dotnet new classlib -n Company.Infrastructure
Set-Location ..
dotnet sln CompanyService.sln add src\Company.Api\Company.Api.csproj
dotnet sln CompanyService.sln add src\Company.Application\Company.Application.csproj
dotnet sln CompanyService.sln add src\Company.Domain\Company.Domain.csproj
dotnet sln CompanyService.sln add src\Company.Infrastructure\Company.Infrastructure.csproj
Set-Location ..\..\..

# Candidate Service
Set-Location backend\services\candidate-service
dotnet new sln -n CandidateService
Set-Location src
dotnet new webapi -n Candidate.Api
dotnet new classlib -n Candidate.Application
dotnet new classlib -n Candidate.Domain
dotnet new classlib -n Candidate.Infrastructure
Set-Location ..
dotnet sln CandidateService.sln add src\Candidate.Api\Candidate.Api.csproj
dotnet sln CandidateService.sln add src\Candidate.Application\Candidate.Application.csproj
dotnet sln CandidateService.sln add src\Candidate.Domain\Candidate.Domain.csproj
dotnet sln CandidateService.sln add src\Candidate.Infrastructure\Candidate.Infrastructure.csproj
Set-Location ..\..\..

# Application Service
Set-Location backend\services\application-service
dotnet new sln -n ApplicationService
Set-Location src
dotnet new webapi -n Application.Api
dotnet new classlib -n Application.Application
dotnet new classlib -n Application.Domain
dotnet new classlib -n Application.Infrastructure
Set-Location ..
dotnet sln ApplicationService.sln add src\Application.Api\Application.Api.csproj
dotnet sln ApplicationService.sln add src\Application.Application\Application.Application.csproj
dotnet sln ApplicationService.sln add src\Application.Domain\Application.Domain.csproj
dotnet sln ApplicationService.sln add src\Application.Infrastructure\Application.Infrastructure.csproj
Set-Location ..\..\..
