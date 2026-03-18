Write-Host "Configuring shell..."
Set-Location frontend\shell
"y" | npx ng add @angular-architects/module-federation --project shell --port 4200 --type dynamic-host --stack module-federation-webpack --skip-confirmation
Set-Location ..\..

Write-Host "Configuring mfe-auth..."
Set-Location frontend\mfe-auth
"y" | npx ng add @angular-architects/module-federation --project mfe-auth --port 4201 --type remote --stack module-federation-webpack --skip-confirmation
Set-Location ..\..

Write-Host "Configuring mfe-jobs..."
Set-Location frontend\mfe-jobs
"y" | npx ng add @angular-architects/module-federation --project mfe-jobs --port 4202 --type remote --stack module-federation-webpack --skip-confirmation
Set-Location ..\..
