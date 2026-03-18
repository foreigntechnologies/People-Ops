Write-Host "Fixing Shell vulnerabilities..."
Set-Location frontend\shell
npm audit fix --force

Write-Host "Fixing MFE-Jobs vulnerabilities..."
Set-Location ..\mfe-jobs
npm audit fix --force

Write-Host "Fixing MFE-Auth vulnerabilities..."
Set-Location ..\mfe-auth
npm audit fix --force

Write-Host "Fixing MFE-Dashboard vulnerabilities..."
Set-Location ..\mfe-dashboard
npm audit fix --force

Write-Host "Fixing MFE-Candidates vulnerabilities..."
Set-Location ..\mfe-candidates
npm audit fix --force

Write-Host "Done frontend audits."
