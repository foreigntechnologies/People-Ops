# 🎨 Frontend - People-Ops

Esta é a raiz do **Frontend** do projeto, desenvolvido usando **Angular** e a arquitetura de **Micro Frontends (Module Federation)**.

## O que foi construído e implementado até agora

A camada de visualização foi rigorosamente dividida para escalar de maneira independente, distribuindo os domínios corporativos em módulos separados que são encapsulados pelo App Shell.

### 🚀 MFEs Consolidados (Fase 1)
* **Shell (`shell`):** Hospeda o ecossistema e unifica os MFEs. É o ponto de entrada principal (`localhost:4200`), onde a navegação, layout geral, menu e o roteamento via federação ocorrem.
* **MFE Auth (`mfe-auth`):** Contém as telas e funcionalidades de autenticação (Login, Registro, Recuperação).
* **MFE Jobs (`mfe-jobs`):** Um micro frontend focado em exibir a listagem e os detalhes de vagas e lidar com as operações dos recrutadores.

### 🚧 MFEs em Desenvolvimento (Fase 2)
Os seguintes repassaram por um scaffolding, mas enfrentam conflitos atuais de dependências (divergência entre *Angular 20* e *21*). Uma vez adequados, comporão a experiência final:
* **MFE Candidates (`mfe-candidates`):** Telas de visualização e perfil de candidatos.
* **MFE Dashboard (`mfe-dashboard`):** Painéis e relatórios para recrutadores e empresas.

## Estado dos Testes Unitários
Durante a execução automatizada, o comando `ng test` encontrou erros de "Schema Validation" devido à falta da configuração obrigatória de `buildTarget` no `angular.json` dos projetos sob a égide do *@angular-architects/native-federation* ou de plugins auxiliares. O ecossistema está preparado para ter suítes em Vitest/Jasmine, porém requer ajuste no arquiteto de construtor do pacote de testes em todos os MFEs operacionais (`shell`, `auth`, `jobs`).
