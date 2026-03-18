# Create root folders
mkdir backend\gateway -Force
mkdir backend\services\identity-service\src -Force
mkdir backend\services\job-service\src -Force
mkdir frontend\shell -Force
mkdir frontend\mfe-auth -Force
mkdir frontend\mfe-jobs -Force
mkdir docker -Force

# Scaffolding Identity Service
Set-Location backend\services\identity-service
dotnet new sln -n IdentityService
Set-Location src
dotnet new webapi -n Identity.Api
dotnet new classlib -n Identity.Application
dotnet new classlib -n Identity.Domain
dotnet new classlib -n Identity.Infrastructure
Set-Location ..
dotnet sln IdentityService.sln add src\Identity.Api\Identity.Api.csproj
dotnet sln IdentityService.sln add src\Identity.Application\Identity.Application.csproj
dotnet sln IdentityService.sln add src\Identity.Domain\Identity.Domain.csproj
dotnet sln IdentityService.sln add src\Identity.Infrastructure\Identity.Infrastructure.csproj
Set-Location ..\..\..

# Scaffolding Job Service
Set-Location backend\services\job-service
dotnet new sln -n JobService
Set-Location src
dotnet new webapi -n Job.Api
dotnet new classlib -n Job.Application
dotnet new classlib -n Job.Domain
dotnet new classlib -n Job.Infrastructure
Set-Location ..
dotnet sln JobService.sln add src\Job.Api\Job.Api.csproj
dotnet sln JobService.sln add src\Job.Application\Job.Application.csproj
dotnet sln JobService.sln add src\Job.Domain\Job.Domain.csproj
dotnet sln JobService.sln add src\Job.Infrastructure\Job.Infrastructure.csproj
Set-Location ..\..\..

# Scaffolding Gateway
Set-Location backend\gateway
dotnet new web -n ApiGateway
Set-Location ApiGateway
dotnet add package Yarp.ReverseProxy
Set-Location ..\..\..
