# Script para subir o ambiente e mostrar os links
Write-Host "🚀 Subindo ambiente People-Ops via Docker Compose..." -ForegroundColor Cyan

docker-compose up -d --build

Write-Host "`n✅ Ambiente subindo com sucesso!" -ForegroundColor Green
Write-Host "----------------------------------------------------"
Write-Host "🔗 LINKS DE ACESSO:" -ForegroundColor Yellow
Write-Host "----------------------------------------------------"
Write-Host "🏠 App Principal (Shell):  http://localhost:4200"
Write-Host "🔐 MFE Auth:               http://localhost:4201"
Write-Host "💼 MFE Jobs:               http://localhost:4202"
Write-Host "📊 MFE Dashboard:          http://localhost:4203"
Write-Host "👥 MFE Candidates:         http://localhost:4204"
Write-Host "----------------------------------------------------"
Write-Host "🛰️ API Gateway:            http://localhost:5000"
Write-Host "🔑 Identity API:           http://localhost:5001"
Write-Host "🛠️ Job API:                http://localhost:5002"
Write-Host "🏢 Company API:            http://localhost:5003"
Write-Host "📝 Application API:        http://localhost:5004"
Write-Host "👤 Candidate API:          http://localhost:5005"
Write-Host "----------------------------------------------------"
Write-Host "🐘 PostgreSQL:             localhost:5432"
Write-Host "----------------------------------------------------"
Write-Host "`n💡 Dica: Verifique os logs com 'docker-compose logs -f' se necessário."
