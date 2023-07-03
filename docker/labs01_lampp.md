- ![](../_images/circle_red_16.png) [ทดลองทำตาม  LabDocker-1](./docker/labs01_lampp.md)

- บันทึกนักพัฒนา: Docker Container 101 แล้วเราจะคิดถึงนายนะ WAMP, XAMPP, … (2018)
    - https://puuga.medium.com/%E0%B8%9A%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B6%E0%B8%81%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B8%B2-docker-conntainer-101-%E0%B9%81%E0%B8%A5%E0%B9%89%E0%B8%A7%E0%B9%80%E0%B8%A3%E0%B8%B2%E0%B8%88%E0%B8%B0%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B8%96%E0%B8%B6%E0%B8%87%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%99%E0%B8%B0-wamp-xampp-e4c4bbf869b1

--- 
```batch
C:\test\docker1>docker -v
Docker version 20.10.8, build 3967b7d
```

รัน  docker pull มันแจ้งว่า error ต้อง start docker desktop ก่อน

```batch
C:\test\docker1>docker pull php:7.2-apache
error during connect: This error may indicate that the docker daemon is not running.: Post "http://%2F%2F.%2Fpipe%2Fdocker_engine/v1.24/images/create?fromImage=php&tag=7.2-apache": open //./pipe/docker_engine: The system cannot find the file specified.
```
พบว่า service ไม่ start รันไม่ได้  
ต้อง uninstall docker , donwload , install ใหม่ 
Docker Desktop 4.21.1

```batch
C:\test\docker1>docker pull php:7.2-apache
7.2-apache: Pulling from library/php
6ec7b7d162b2: Downloading [==============================>                    ]  16.43MB/27.1MB
db606474d60c: Download complete
afb30f0cd8e0: Downloading [========>                                          ]  13.42MB/76.65MB
3bb2e8051594: Download complete
4c761b44e2cc: Downloading [===================>                               ]  7.416MB/18.68MB
c2199db96575: Waiting
1b9a9381eea8: Waiting
fd07bbc59d34: Waiting
72b73ab27698: Waiting
983308f4f0d6: Waiting
6c13f026e6da: Waiting
e5e6cd163689: Waiting
5c5516e56582: Waiting
154729f6ba86: Waiting
```

คล้ายๆว่า ถ้าจะดูช่องโหว่ ต้อง log in ไปที่ docker ก่อน 

```batch
What's Next?
  View summary of image vulnerabilities and recommendations → docker scout quickview php:7.2-apache

C:\test\docker1>docker scout quickview php:7.2-apache
INFO New version 0.17.0 available (installed version is 0.16.1)
level=error msg="Status: please login using Docker Desktop or 'docker login' command: no credential found for \"index.docker.io\", Code: 1"

C:\test\docker1>
```
ลองรัน คอนเทนเนอร์ 
```batch
docker run -p 80:80 --name hello-web01 php:7.2-apache
```
Windows 10 firewall , จะถามว่าอนุญาติไหม 

เข้า web brower ไปที่ 
> http://localhost/

จะได้ข้อความนี้ 

> Forbidden
You don't have permission to access this resource.
Apache/2.4.38 (Debian) Server at localhost Port 80

บน docker desktop จะมี container ชื่อ  hello-web01  

ดู docker ด้วย docker ps 
```batch
C:\test\docker1>docker ps
CONTAINER ID   IMAGE            COMMAND                  CREATED         STATUS         PORTS                NAMES
121983663fec   php:7.2-apache   "docker-php-entrypoi…"   6 minutes ago   Up 6 minutes   0.0.0.0:80->80/tcp   hello-web01
```


---
ลอง สร้าง phpinfo ที่ folder src
เพื่อสร้าง container ใหม่ ชื่อ hello-web02 ที่ port 80 เดิม 
เราต้อง หยุด hello-web01 ก่อน 
```batch
C:\test\docker1>docker stop hello-web01
hello-web01
C:\test\docker1>docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
```

รัน  docker 2  พร้อม แมพ folder

> docker run -p 80:80 -v "$PWD"/src:/var/www/html --name hello-web02 php:7.2-apache

แต่ คำสั่งนี้ จะใช้บน windows 11 ไม่ได้ ดังนี้  
> (คำสั่ง $PWD เป็นคำสั่งสำหรับ เครื่อง Linux )

```batch
C:\test\docker1>docker run -p 80:80 -v "$PWD"/src:/var/www/html --name hello-web02 php:7.2-apache
docker: Error response from daemon: create $PWD/src: "$PWD/src" includes invalid characters for a local volume name, only "[a-zA-Z0-9][a-zA-Z0-9_.-]" are allowed. If you intended to pass a host directory, use absolute path.
See 'docker run --help'.
```

ค้น google พบว่า URL นี้ บอกวิธีรัน บน windows ได้
> https://stackoverflow.com/questions/41485217/mount-current-directory-as-a-volume-in-docker-on-windows-10

แก้ไข คำสั่ง บน cmd.exe 
> docker run -p 80:80 -v %cd%/src:/var/www/html --name hello-web02 php:7.2-apache

กรณีเป็น powershell ใช้ (คำสั่งนี้ใช้บน linux ได้ด้วย)
> docker run -p 80:80 -v ${PWD}/src:/var/www/html --name hello-web02 php:7.2-apache

รันบน cmd.exe 
```batch
C:\test\docker1>docker run -p 80:80 -v %cd%/src:/var/www/html --name hello-web02 php:7.2-apache
AH00558: apache2: Could not reliably determine the server's fully qualified domain name, using 172.17.0.2. Set the 'ServerName' directive globally to suppress this message
AH00558: apache2: Could not reliably determine the server's fully qualified domain name, using 172.17.0.2. Set the 'ServerName' directive globally to suppress this message
[Mon Jul 03 17:41:31.361259 2023] [mpm_prefork:notice] [pid 1] AH00163: Apache/2.4.38 (Debian) PHP/7.2.34 configured -- resuming normal operations
[Mon Jul 03 17:41:31.361410 2023] [core:notice] [pid 1] AH00094: Command line: 'apache2 -D FOREGROUND'
```

สร้าง info.php
```batch 
PS C:\test\docker1> cd src
PS C:\test\docker1\src> dir
PS C:\test\docker1\src> dir
PS C:\test\docker1\src> notepad info.php
PS C:\test\docker1\src> cat info.php
<?php
phpinfo();
PS C:\test\docker1\src>
```

เปิด  URL 
http://localhost/info.php
จะพบว่า มี  ข้อมูล php info ทำงานได้ 

แก้ไข info.php ดังนี้ 
```batch
PS C:\test\docker1\src> notepad info.php
PS C:\test\docker1\src> cat info.php
<?php
for($i = 1;$i <20 ; $i ++){
    echo "$i ,";
}
echo "<br><br>";
phpinfo();
PS C:\test\docker1\src>
```
จะพบว่า เว็บเพจแสดง ข้อความ
> 1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,12 ,13 ,14 ,15 ,16 ,17 ,18 ,19 ,
> ก่อนแสดง phpinfo 
>
และเราสามารถนำไฟล์ต่างๆ มาใส่ไว้ที่ / แก้ไขไฟล์ไฟล์ ที่   
> C:\test\docker1\src> 

และจะมีผลกระทบกับหน้าเว็บ ทันที เมื่อ refresh 

สร้างไฟล์ hello.php  เพื่อทดสอบ 

```batch
PS C:\test\docker1\src> notepad hello.php
PS C:\test\docker1\src> cat hello.php
<?php
echo "Hello PHP ... 3";
?>
PS C:\test\docker1\src>
```
จะพบว่าเข้า url http://localhost/hello.php ได้ 
และมี ข้อความ 
> Hello PHP ... 3 

ที่เพจ 

---
#### Install mysql 

> หยุดการทำงาน docker อันที่ 2 ก่อน 

- สร้าง Dockerfile 
```dockerfile
FROM php:7.2.5-apache
RUN docker-php-ext-install mysqli
```

```batch
C:\test\docker1>notepad Dockerfile

C:\test\docker1>type Dockerfile
FROM php:7.2.5-apache
RUN docker-php-ext-install mysqli
C:\test\docker1>
```

Build Docker image 
```batch 
C:\test\docker1>docker build -t docker101 .
[+] Building 15.4s (3/5)                                                                                 docker:default
 => [internal] load build definition from Dockerfile                                                               0.2s
 => => transferring dockerfile: 93B                                                                                0.0s
 => [internal] load .dockerignore                                                                                  0.2s
 => => transferring context: 2B                                                                                    0.0s
 => [internal] load metadata for docker.io/library/php:7.2.5-apache                                                5.8s
 => [1/2] FROM docker.io/library/php:7.2.5-apache@sha256:7aa036157f858ce0c57a2a18ad35d4a389238b9b78aec4a54ff0be55  9.4s
 => => resolve docker.io/library/php:7.2.5-apache@sha256:7aa036157f858ce0c57a2a18ad35d4a389238b9b78aec4a54ff0be55  0.1s
 => => sha256:c136420cac7316a8c5588f9db218ea9b6fbd31d5ad6efa3dbf26d331d833af48 3.45kB / 3.45kB                     0.0s
 => => sha256:e403623639d72e22683894a435a964add8d6646cdf686d87ac3bd208dd097707 12.74kB / 12.74kB                   0.0s
 => => sha256:f2aa67a397c49232112953088506d02074a1fe577f65dc2052f158a3e5da52e8 22.50MB / 22.50MB                   5.9s
 => => sha256:c533bdb78a46d6fc7392f5fd59496af8e95cd2eb52072c5bd9e262d8a9943e5b 228B / 228B                         0.6s
 => => sha256:65a7293804ac541b4e9fb51a61f31aba124f3f97a40712be982f7a3cdaa84426 50.33MB / 67.46MB                   9.3s
 => => sha256:7aa036157f858ce0c57a2a18ad35d4a389238b9b78aec4a54ff0be55fddf5949 2.06kB / 2.06kB                     0.0s
 => => sha256:35a9c1f94aea2473a0dc8c23d711525935ef414c4744c0845e0f945501c788ca 183B / 183B                         1.2s
 => => sha256:651774c607cca74adfe7a9212a81ab061593db09d6c491f9b18927db5d9749ce 17.13MB / 17.13MB                   8.0s
 => => extracting sha256:f2aa67a397c49232112953088506d02074a1fe577f65dc2052f158a3e5da52e8                          3.4s
 => => sha256:7c01fbe5ed3defb0d94eaea342c661eb0ab582896e108019c23bc88e596c75fc 1.25kB / 1.25kB                     7.0s
 => => sha256:9ff29ed84bfc2323b6fc07a71aa1cb1e466bf44127aab741109032b8d019755c 429B / 429B                         7.6s
 => => sha256:647feb0f63551e55427f222eb4e3b033b4a2b36291b5f43d560ed1eb1184ce50 229B / 229B                         8.3s
 => => sha256:0b9d1c5408630a920da8d987ff97a3dc1cfcf362a31d3cd1a310011bd46971cf 484B / 484B                         8.6s
 => => sha256:3416ab5471ed0a38488a9d3a3b76184995422f3fd5a39a973179b9831baf4d2e 1.05MB / 12.38MB                    9.3s
 => => sha256:246c5fc29b1acd89868c9c2bffc56a62713b578069fab727aed201b45414063b 498B / 498B                         9.2s
 => => sha256:98923ca5a50aff1df07a987fe31b185af92e20e8dedffe7b5b32aa071
 ```

 ```batch
  => => extracting sha256:fb2e6680ec4023c05d6e4fe498f04082acdbe8d7346af72243b9c7c1055de923                          0.0s
 => => extracting sha256:36c71eb6672c6991e7305115b74abc40797e1cff2d24ef5f2f6d0b70a06d0a1f                          0.0s
 => [2/2] RUN docker-php-ext-install mysqli                                                                       18.7s
 => exporting to image                                                                                             0.1s
 => => exporting layers                                                                                            0.1s
 => => writing image sha256:b21638df7c45064104cbf7a21a32b22c7c8c87b0f1bc81d3e6fc323f338f7077                       0.0s
 => => naming to docker.io/library/docker101                                                                       0.0s
 ```

List docker image 
 ```batch
C:\test\docker1>docker images
REPOSITORY   TAG          IMAGE ID       CREATED              SIZE
docker101    latest       b21638df7c45   About a minute ago   377MB
php          7.2-apache   c61d277263e1   2 years ago          410MB

C:\test\docker1>
 ```

พบว่า มี image ใหม่แล้ว ชื่อ docker101

รัน docker พร้อม map drive  
ทดสอบบน powershell 

>docker run -p 80:80 -v "$PWD"/src:/var/www/html --name hello-web03 docker101:latest

 ```powershell
PS C:\test\docker1> docker run -p 80:80 -v ${PWD}/src:/var/www/html --name hello-web03 docker101:latest
AH00558: apache2: Could not reliably determine the server's fully qualified domain name, using 172.17.0.2. Set the 'ServerName' directive globally to suppress this message
AH00558: apache2: Could not reliably determine the server's fully qualified domain name, using 172.17.0.2. Set the 'ServerName' directive globally to suppress this message
[Mon Jul 03 18:03:55.469169 2023] [mpm_prefork:notice] [pid 1] AH00163: Apache/2.4.25 (Debian) PHP/7.2.5 configured -- resuming normal operations
[Mon Jul 03 18:03:55.469266 2023] [core:notice] [pid 1] AH00094: Command line: 'apache2 -D FOREGROUND'

 ```

จะพบว่า เข้าใช้  url  
> http://localhost/info.php
> http://localhost/hello.php

เหล่านี้ได้

---
ส่วนคำสั่ง COPY จะยังไม่ใช้
> COPY src/ /var/www/html 

ในการ Deploy Production 
เคยเห็น คนที่ทำงานจริง เขาก็ MapDrive แทน 
เพราะ ต้องแก้โค้ด และ ทำการปรับแต่ Code บ่อยๆ อาจพัฒนาโปรแกรมหลายเดือน จึง ใช้ Map Folder แบบข้างต้นแทน 
รวมทั้ง Data File ต่างๆ ก็ map folder 
เพื่อให้ง่ายในการ backup ข้อมูล 

แต่เรา สามารถ เพิ่ม component ต่างๆ เข้าใน Dockerfile ได้อีก 
แล้ว build ซ้ำแล้วเลือกรัน docker run ได้ 

---
