Write-Host "Installing dependencies for shell..."
Set-Location frontend\shell
npm install
npx ng add @angular-architects/module-federation --project shell --port 4200 --type dynamic-host --skip-confirmation
Set-Location ..\..

Write-Host "Installing dependencies for mfe-auth..."
Set-Location frontend\mfe-auth
npm install
npx ng add @angular-architects/module-federation --project mfe-auth --port 4201 --type remote --skip-confirmation
Set-Location ..\..

Write-Host "Installing dependencies for mfe-jobs..."
Set-Location frontend\mfe-jobs
npm install
npx ng add @angular-architects/module-federation --project mfe-jobs --port 4202 --type remote --skip-confirmation
Set-Location ..\..
