# 🚀 Como Executar o Projeto (People-Ops)

Este documento descreve como preparar o ambiente, rodar o banco de dados via Docker, os serviços de Backend (.NET) e os Micro Frontends (Angular).

## 🐋 1. Banco de Dados (PostgreSQL via Docker)
A infraestrutura principal de banco de dados e outros serviços unificados encontram-se no `docker-compose.yml` na raiz do projeto.
Para inicializar o banco de dados PostgreSQL na porta `5432`:

```bash
docker-compose up db -d
```
**(Opcional):** Se desejar rodar toda a stack via Docker, execute apenas `docker-compose up -d`.

---

## ⚙️ 2. Executando o Backend (.NET)
O backend da aplicação é composto por Microserviços e um Gateway. No momento, estão operacionais o `identity-service` e o `job-service`, roteados potencialmente pelo `gateway`.

### Pre-requisitos
* **.NET 8.0/9.0 SDK**
* A string de conexão apontará por padrão para o PostgreSQL recém-subido no Docker (`localhost:5432`).

### Rodar cada Microserviço:
Abra terminais independentes ou rode em background:

**Identity Service (Porta 5001 no docker, mas no Kestrel local pode variar):**
```bash
cd backend/services/identity-service/src/Identity.Api
dotnet run
```

**Job Service (Porta 5002 no docker):**
```bash
cd backend/services/job-service/src/Job.Api
dotnet run
```

**API Gateway (Porta 5000 no docker):**
```bash
cd backend/gateway/ApiGateway
dotnet run
```

---

## 🌐 3. Executando o Frontend (Micro Frontends - Angular)
A aplicação de frente usa Module Federation. O Angular cli / Node devem estar instalados (`Node.js LTS` sugerido, Angular `21.x`).

### Instalando as dependências
```bash
# Na raiz, se existir um package.json principal ou instale individualmente:
cd frontend/shell && npm install
cd ../mfe-auth && npm install
cd ../mfe-jobs && npm install
```

### Rodando o ambiente
Para que os MFEs se comuniquem, você deve subir o App-Shell e os Micro Frontends Auth e Jobs juntos:

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

*Nota: Acesse `http://localhost:4200` para entrar no projeto. O roteamento no Shell irá consumir o MFE de Auth e Jobs baseado no Module Federation.*

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
