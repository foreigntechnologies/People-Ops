# Frontend - People-Ops

Diretorio de micro frontends Angular do People-Ops.

Repositorio dedicado: `https://github.com/foreigntechnologies/People-Ops-frontend`

## MFEs

- `shell` (porta `4200`): app host e roteamento principal
- `mfe-auth` (porta `4201`): login, cadastro e autenticacao
- `mfe-jobs` (porta `4202`): vagas e listagens
- `mfe-dashboard` (porta `4203`): dashboards
- `mfe-candidates` (porta `4204`): fluxo de candidatos

## Requisitos

- Node.js LTS
- npm

## Execucao Local

Em cada MFE, execute:

```bash
npm install
npm start
```

Exemplo:

```bash
cd shell
npm install
npm start
```

## Build

Em qualquer MFE:

```bash
npm run build
```

## Testes

Quando configurado para o MFE:

```bash
npm test
```

## Observacoes

- Este frontend usa Native Federation.
- Em caso de erro de dependencia entre MFEs, alinhe versoes de Angular e plugins de federacao.
