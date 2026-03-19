# People-Ops

Plataforma de People Ops com arquitetura baseada em microservicos (.NET) e micro frontends (Angular + Native Federation).

## Repositorios Separados

Este workspace continua funcional como base unificada, mas o projeto foi separado em tres repositorios dedicados:

- Backend: `https://github.com/foreigntechnologies/People-Ops-backend`
- Frontend: `https://github.com/foreigntechnologies/People-Ops-frontend`
- Infra: `https://github.com/foreigntechnologies/People-Ops-infra`

## Arquitetura

- Frontend (Angular): `shell`, `mfe-auth`, `mfe-jobs`, `mfe-dashboard`, `mfe-candidates`
- Backend (.NET 10): `gateway`, `identity-service`, `job-service`, `company-service`, `candidate-service`, `application-service`
- Infra: Docker Compose, scripts PowerShell e configuracoes de orquestracao

## Como Rodar

### Opcao 1: Full Stack com Docker

```bash
docker-compose up -d
```

Acesso principal: `http://localhost:4200`

### Opcao 2: Desenvolvimento Hibrido

Subir banco:

```bash
docker-compose up db -d
```

Subir backend (um terminal por servico):

```bash
cd backend/gateway/ApiGateway && dotnet run
cd backend/services/identity-service/src/Identity.Api && dotnet run
cd backend/services/job-service/src/Job.Api && dotnet run
```

Subir frontend (um terminal por MFE):

```bash
cd frontend/shell && npm install && npm start
cd frontend/mfe-auth && npm install && npm start
cd frontend/mfe-jobs && npm install && npm start
```

## Parar Servicos

- Docker: `docker-compose down`
- Processos locais: `Ctrl + C`

## Documentacao Adicional

- Guia de execucao e testes: `COMO_EXECUTAR.md`
- Backend: `backend/README.md`
- Frontend: `frontend/README.md`
