# 🚀 Como Executar o Projeto (People-Ops)

Este documento descreve as duas formas de rodar a stack completa do People-Ops.

---

## 🐋 OPÇÃO 1: Tudo via Docker (Full Stack)

Você pode rodar todo o ambiente em dois modos: **Desenvolvimento** (com Swagger habilitado) ou **Produção** (otimizado).

### Modo Desenvolvimento (Default)
Neste modo, o backend habilita o Swagger e o frontend pode ser construído com configurações de debug.
```bash
# Para construir e subir
docker-compose up -d --build

# Para apenas subir
docker-compose up -d
```

### Modo Produção
Neste modo, o ambiente é configurado para máxima performance e o Swagger é desabilitado por segurança.
```bash
# Para construir e subir
docker-compose -f docker-compose.prod.yml up -d --build

# Para apenas subir
docker-compose -f docker-compose.prod.yml up -d
```

## 🚀 Como Executar (Modo Rápido)

Para facilitar, criei um script que sobe tudo e já mostra os links no seu terminal:

1. **Abra o PowerShell** na raiz do projeto.
2. **Execute o script:**
   ```powershell
   .\up.ps1
   ```

Este comando irá compilar todas as imagens (Backend 10.0 e Angular 21), subir os containers e exibir uma tabela com todos os links de acesso.

---

## 🐳 OPÇÃO 1: Docker Compose (Manual)
Ideal para rodar o ambiente completo.
## 🔗 Links de Acesso (Modo Docker)

    'São Paulo, Brasil', 
    'Angular 21, .NET 10, PostgreSQL', 
    'Engenharia de Software', 
    gen_random_uuid(), 
    NOW()
);
```

#### Consultar as Vagas
```sql
SELECT * FROM "JobPositions";
```

> [!TIP]
> Você pode usar a extensão "PostgreSQL" no VS Code ou o software DBeaver para gerenciar esses dados de forma visual.
3. **Parar tudo:**
   ```bash
   docker-compose down
   ```

---

## ⚙️ OPÇÃO 2: Híbrido / Separado (Desenvolvimento Local)
Ideal para desenvolvimento individual de serviços.

### 1. Banco de Dados (via Docker)
É necessário ter o PostgreSQL rodando para que os serviços de backend funcionem.
```bash
docker-compose up db -d
```

### 2. Executando o Backend (.NET)
Abra terminais independentes para cada serviço:

**API Gateway (Porta 5000):**
```bash
cd backend/gateway/ApiGateway
dotnet run
```

**Identity Service (Porta 5001):**
```bash
cd backend/services/identity-service/src/Identity.Api
dotnet run
```

**Job Service (Porta 5002):**
```bash
cd backend/services/job-service/src/Job.Api
dotnet run
```

### 3. Executando o Frontend (Micro Frontends)
Certifique-se de que as dependências foram instaladas (`npm install`).

**Shell (Porta 4200):**
```bash
cd frontend/shell
npm start
```

**MFE Auth (Porta 4201):**
```bash
cd frontend/mfe-auth
npm start
```

**MFE Jobs (Porta 4202):**
```bash
cd frontend/mfe-jobs
npm start
```

*Nota: Acesse `http://localhost:4200` para entrar no projeto.*

---


## 🧪 4. Como rodar os Testes (Unitários e Integração)

### Backend
Para testar os serviços (isso executará xUnit ou NUnit/MSTest onde estiverem configurados):
```bash
# Identity Service
cd backend/services/identity-service
dotnet test

# Job Service
cd backend/services/job-service
dotnet test
```

### Frontend
Para rodar os testes unitários via Angular CLI / Vitest:
```bash
cd frontend/shell
npm test -- --watch=false

cd frontend/mfe-auth
npm test -- --watch=false

cd frontend/mfe-jobs
npm test -- --watch=false
```
