FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS base
WORKDIR /app
EXPOSE 8080

FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["src/Candidate.Api/Candidate.Api.csproj", "src/Candidate.Api/"]
COPY ["src/Candidate.Application/Candidate.Application.csproj", "src/Candidate.Application/"]
COPY ["src/Candidate.Domain/Candidate.Domain.csproj", "src/Candidate.Domain/"]
COPY ["src/Candidate.Infrastructure/Candidate.Infrastructure.csproj", "src/Candidate.Infrastructure/"]
RUN dotnet restore "src/Candidate.Api/Candidate.Api.csproj"
COPY . .
WORKDIR "/src/src/Candidate.Api"
RUN dotnet build "Candidate.Api.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "Candidate.Api.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Candidate.Api.dll"]
