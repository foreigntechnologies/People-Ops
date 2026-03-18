Set-Location backend\services\job-service
dotnet new xunit -n Job.Tests -o tests\Job.Tests
dotnet sln JobService.sln add tests\Job.Tests\Job.Tests.csproj
Set-Location tests\Job.Tests
dotnet add reference ..\..\src\Job.Domain\Job.Domain.csproj
dotnet add reference ..\..\src\Job.Application\Job.Application.csproj
dotnet add package Moq
dotnet add package FluentAssertions
Set-Location ..\..\..\..\..\
