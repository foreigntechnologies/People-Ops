# 🛠️ Backend - People-Ops

Este é o diretório raiz do **Backend** do sistema revisto arquitetado em Microserviços utilizando **.NET (C#)**.

## O que foi construído e implementado até agora

O backend foi segmentado em múltiplas frentes de domínio, seguindo os princípios de *Clean Architecture* (Domain, Application, Infrastructure e Api) para manter a independência e escalabilidade:

### 🚀 Serviços Consolidados (Fase 1)
* **Identity Service (`identity-service`):** Responsável por lidar com a autenticação e autorização dos usuários. Protege as rotas e valida as credenciais.
* **Job Service (`job-service`):** Focado no gerenciamento das vagas (Jobs), permitindo a criação, leitura e gerenciamento direto de oportunidades de emprego.

### 🚧 Serviços em Desenvolvimento (Fase 2 - Refatoração / Scaffolded)
Os seguintes serviços já contem sua base gerada (Controller, Entities, Repositories), no entanto encontram-se atualmente desconectados das `.slnx` e da rede Docker:
* `application-service`: Gerenciará os pedidos de aplicação para as vagas.
* `candidate-service`: Perfil do candidato.
* `company-service`: Perfil e ações referentes as empresas.

### 🚪 API Gateway
* Um gateway (`ApiGateway`) unifica as requisições do frontend, servindo como o único ponto de entrada para comunicação com todos os microsserviços do cluster. (*Aguardando configuração completa de roteamento Ocelot/YARP*).

## Estado dos Testes Unitários e Integrados
Neste instante, os testes executados diretamente sobre a solução global (`.slnx`) ou nas pastas não são autodescobertos devido à configuração vazia das *Solutions*. É necessário reconectar os projetos de testes (`.csproj`) nas respectivas soluções para que o `dotnet test` valide integralmente os domínios.

Para rodar manualmente, navegue até a pasta de algum projeto de testes com sufixo `.Tests` (se disponível) e execute `dotnet test`.
