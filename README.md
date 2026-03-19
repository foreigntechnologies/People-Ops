# 🚀 People-Ops

Sistema de Gestão de Pessoas (People-Ops) com## Architecture Overview

People-Ops is built on a modern **Micro-frontends** and **Microservices** architecture, ensuring scalability, independent deployments, and technology flexibility.

### Frontend: Micro-frontends (Angular 21 + Native Federation)

- **Shell (Orchestrator)**: The main entry point. It manages the global layout (Premium Navbar & Footer), user authentication state, and multi-language routing.
- **MFE-Jobs**: Dedicated to the Jobs Landing Page and position catalog. Inspired by premium platforms like InHire.
- **MFE-Auth**: Handles the entire authentication flow, providing specialized Login and Registration for both Companies and Candidates, including Social Login integration.
- **MFE-Dashboard**: Central hub for users to view metrics, active applications, and profile summaries.
- **MFE-Candidates**: Specialized module for candidate-specific features like resume management and application tracking.

### Backend: Microservices (.NET 10.0 + PostgreSQL)

- **API Gateway (YARP)**: The unified entry point for all frontend requests. Handles routing, CORS policies, and basic security.
- **Job Service**: Manages job positions, requirements, and categories. Uses `EFCore.NamingConventions` for snake_case PostgreSQL compatibility.
- **Identity Service**: Responsible for user management, JWT token issuance, and social login abstraction.
- **Company Service**: Manages company profiles, branding, and job postings.
- **Candidate Service**: Handles candidate profiles, professional experience, and preferences.
- **Application Service**: Orchestrates the job application process between candidates and positions.

### Infrastructure

- **Docker & Docker Compose**: Orchestrates all 12+ containers (services, databases, and frontends).
- **PostgreSQL**: Distributed data persistence for each microservice.
- **Scalar**: Premium API documentation UI accessible via the Gateway.
ços (.NET) e Micro Frontends (Angular).

## 🛠️ Modos de Execução

Você pode rodar este projeto de duas formas principais:

### 1. 🐋 Opção 1: Tudo via Docker (Full Stack)
Ideal para ver o projeto funcionando rapidamente sem precisar configurar o ambiente local de desenvolvimento para cada serviço.

**Comando:**
```bash
docker-compose up -d
```
*Isso irá subir o PostgreSQL, o Gateway, todos os microserviços e todos os micro frontends.*

**Acesso:** `http://localhost:4200`

---

### 2. ⚙️ Opção 2: Híbrido / Desenvolvimento (Separado)
Ideal para quem está desenvolvendo e precisa de hot-reload ou quer debugar um serviço específico.

#### A. Banco de Dados (Docker)
Sempre suba o banco primeiro:
```bash
docker-compose up db -d
```

#### B. Backend (.NET)
Execute cada serviço em um terminal separado (ou use o gerenciador de múltiplos projetos do VS/Rider):
```bash
# API Gateway
cd backend/gateway/ApiGateway && dotnet run

# Identity Service
cd backend/services/identity-service/src/Identity.Api && dotnet run

# Job Service
cd backend/services/job-service/src/Job.Api && dotnet run
```

#### C. Frontend (Micro Frontends)
Certifique-se de rodar `npm install` em cada pasta antes da primeira execução.
```bash
# Shell (Porta 4200)
cd frontend/shell && npm start

# MFE Auth (Porta 4201)
cd frontend/mfe-auth && npm start

# MFE Jobs (Porta 4202)
cd frontend/mfe-jobs && npm start
```

---

## 🛑 Parando os Serviços

- **Para o Docker:** `docker-compose down`
- **Para os serviços locais:** Pressione `Ctrl + C` no terminal correspondente.

---

## 🧪 Testes e Qualidade
Veja o arquivo [COMO_EXECUTAR.md](COMO_EXECUTAR.md) para detalhes sobre como rodar testes unitários e de integração.
