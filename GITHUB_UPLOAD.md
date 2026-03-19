# Guia de Upload para o GitHub - People-Ops

Para subir o projeto **People-Ops** para o seu repositório no GitHub, siga as instruções abaixo para garantir que apenas os arquivos necessários sejam enviados.

## O que subir (Pastas e Arquivos Principais)

1. **`frontend/`**: Contém todos os Micro-frontends e o Shell.
   - `shell/`
   - `mfe-jobs/`
   - `mfe-auth/`
   - `mfe-dashboard/`
   - `mfe-candidates/`
2. **`backend/`**: Contém o Gateway e todos os Microsserviços.
   - `gateway/`
   - `services/`
3. **`docker-compose.yml`**: Configuração central da infraestrutura.
4. **`README.md`**: Documentação técnica do projeto.
5. **`COMO_EXECUTAR.md`**: Guia passo-a-passo para novos desenvolvedores.

## O que NÃO subir (Adicione ao `.gitignore`)

Certifique-se de que os seguintes diretórios **não** sejam enviados:

- `node_modules/` (Em todas as pastas do frontend)
- `dist/` e `.angular/`
- `bin/` e `obj/` (Em todas as pastas do backend .NET)
- `.vs/` e `.vscode/`
- Arquivos de segredos como `appsettings.Development.json` (se contiverem chaves reais)
- Volumes de dados do Docker (ex: pasta que você mapear para o Postgres localmente).

## Comandos Recomendados

```bash
# Inicializar o repositório
git init

# Adicionar todos os arquivos (o .gitignore cuidará do resto)
git add .

# Primeiro commit
git commit -m "feat: implement premium jobs landing page, multi-language support and microservices architecture"

# Adicionar o remoto e subir
git remote add origin https://github.com/SEU_USUARIO/People-Ops.git
git branch -M main
git push -u origin main
```
