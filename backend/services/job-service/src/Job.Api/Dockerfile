FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS base
WORKDIR /app
EXPOSE 8080

FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["src/Job.Api/Job.Api.csproj", "src/Job.Api/"]
COPY ["src/Job.Application/Job.Application.csproj", "src/Job.Application/"]
COPY ["src/Job.Domain/Job.Domain.csproj", "src/Job.Domain/"]
COPY ["src/Job.Infrastructure/Job.Infrastructure.csproj", "src/Job.Infrastructure/"]
RUN dotnet restore "src/Job.Api/Job.Api.csproj"
COPY . .
WORKDIR "/src/src/Job.Api"
RUN dotnet build "Job.Api.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "Job.Api.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Job.Api.dll"]
