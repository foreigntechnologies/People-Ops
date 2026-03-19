FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS base
WORKDIR /app
EXPOSE 8080

FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["src/Application.Api/Application.Api.csproj", "src/Application.Api/"]
COPY ["src/Application.Application/Application.Application.csproj", "src/Application.Application/"]
COPY ["src/Application.Domain/Application.Domain.csproj", "src/Application.Domain/"]
COPY ["src/Application.Infrastructure/Application.Infrastructure.csproj", "src/Application.Infrastructure/"]
RUN dotnet restore "src/Application.Api/Application.Api.csproj"
COPY . .
WORKDIR "/src/src/Application.Api"
RUN dotnet build "Application.Api.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "Application.Api.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Application.Api.dll"]
