& ".\remove.ps1"
Write-Host ">   =================================================" 
Write-Host "> Run mydocker tag 0.1 with name as mydocker01 , then enter bash and display bash" 
Write-Host ">   this host map port 80 in container to host windows port 8000" .
Write-Host ">   before view page you must start apache with !!! .. " 
Write-Host ">   # cat /setup/apache-start.txt  "
Write-Host ">   # cat /setup/setup_mysql.txt "
Write-Host ">   # wget http://localhost:80 " 
Write-Host ">   =================================================" 
Write-Host ">   you can view page with "
Write-Host ">      http://localhost:8001"  
Write-Host ">      http://localhost:8001/mypage.html"
Write-Host ">      http://localhost:8001/app	" 
Write-Host ">   =================================================" 

# OK with map port  
# docker run -it -p 8001:80 --name mydocker01 mydocker:0.1 bash

# with map port and map volumns , with deamon process 
#docker run -it -d -p 8001:80 -v .\app:/var/www/html/app --name mydocker01 mydocker:0.1 bash

# with map port and map volumns , show bash shell 
docker run -it -p 8002:80 -v .\app:/var/www/html/app -v .\src:/src -v .\setup:/setup --name mydocker_frontend_01 mydocker_frontend:0.1 bash

 
