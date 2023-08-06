
docker ps -all
Write-Host "> Remove Docker instance named mydocker_frontend_01 " 
docker rm mydocker_frontend_01
docker ps -all
Write-Host "> ===================="