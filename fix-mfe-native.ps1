Write-Host "Configuring shell..."
Set-Location frontend\shell
npx ng add @angular-architects/native-federation@latest --project shell --port 4200 --type dynamic-host --skip-confirmation
Set-Location ..\..

Write-Host "Configuring mfe-auth..."
Set-Location frontend\mfe-auth
npx ng add @angular-architects/native-federation@latest --project mfe-auth --port 4201 --type remote --skip-confirmation
Set-Location ..\..

Write-Host "Configuring mfe-jobs..."
Set-Location frontend\mfe-jobs
npx ng add @angular-architects/native-federation@latest --project mfe-jobs --port 4202 --type remote --skip-confirmation
Set-Location ..\..
