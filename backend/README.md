# Backend - People-Ops

Diretorio de microservicos .NET do People-Ops.

Repositorio dedicado: `https://github.com/foreigntechnologies/People-Ops-backend`

## Estrutura

- Gateway: `gateway/ApiGateway`
- Servicos: `services/*`
- Stack: `.NET 10`, `ASP.NET Core`, `YARP`, `PostgreSQL`

## Servicos

- `identity-service`: autenticacao, autorizacao e emissao de JWT
- `job-service`: vagas, filtros e catalogo de posicoes
- `company-service`: dominio de empresas
- `candidate-service`: dominio de candidatos
- `application-service`: fluxo de candidaturas

## Execucao Local

Suba o banco:

```bash
docker-compose up db -d
```

Suba os servicos principais em terminais separados:

```bash
cd gateway/ApiGateway && dotnet run
cd services/identity-service/src/Identity.Api && dotnet run
cd services/job-service/src/Job.Api && dotnet run
```

## Build e Testes

Build de um servico:

```bash
cd services/identity-service/src/Identity.Api
dotnet build
```

Testes (quando o projeto de testes existir):

```bash
dotnet test
```

## Observacoes

- Algumas solutions e projetos ainda estao em evolucao de integracao.
- Para orquestracao completa, use os arquivos Docker Compose no repositorio raiz/infra.
