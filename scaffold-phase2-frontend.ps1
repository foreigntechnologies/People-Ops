ng new mfe-dashboard --directory frontend/mfe-dashboard --style css --routing --ssr false --skip-git --skip-install --defaults
ng new mfe-candidates --directory frontend/mfe-candidates --style css --routing --ssr false --skip-git --skip-install --defaults

Write-Host "Configuring mfe-dashboard..."
Set-Location frontend\mfe-dashboard
npx ng add @angular-architects/native-federation@latest --project mfe-dashboard --port 4203 --type remote --skip-confirmation
Set-Location ..\..

Write-Host "Configuring mfe-candidates..."
Set-Location frontend\mfe-candidates
npx ng add @angular-architects/native-federation@latest --project mfe-candidates --port 4204 --type remote --skip-confirmation
Set-Location ..\..
