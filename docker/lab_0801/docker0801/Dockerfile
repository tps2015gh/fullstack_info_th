# https://www.analyticsvidhya.com/blog/2022/06/writing-dockerfile-is-simple/#:~:text=Creating%20Image%20%26%20Container%20Using%20Docker%20file%E2%80%8A%E2%80%94%E2%80%8AExample%202,docker%20build%20.%203%203.%20Run%20Container%E2%80%8A%E2%80%94%E2%80%8Adocker%20run
#==================================
# docker build -t myhttpd:0.3
#==================================


#A simple web app served by hhtpd

#FROM httpd:2.4


#FROM ubuntu:20.04 
FROM ubuntu:22.04 

#=======================================================
# https://stackoverflow.com/questions/61388002/how-to-avoid-question-during-the-docker-build
#=======================================================
ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get -y update
RUN apt-get -y upgrade


#==================================
# https://www.digitalocean.com/community/tutorials/how-to-install-the-apache-web-server-on-ubuntu-20-04
#==================================
RUN  apt-get install -y apache2

#========================================================
# https://linuxize.com/post/how-to-install-php-on-ubuntu-20-04/#:~:text=If%20you%E2%80%99re%20using%20Apache%20as%20your%20web%20server%2C,module%20to%20get%20loaded%3A%20sudo%20systemctl%20restart%20apache2
# https://packages.ubuntu.com/hu/jammy/ppc64el/libapache2-mod-php8.1
# https://installati.one/install-libapache2-mod-php8.1-ubuntu-22-04/
#========================================================
# RUN apt install -y php libapache2-mod-php
RUN apt install -y php libapache2-mod-php8.1
RUN apt install -y php-fpm
RUN apt install -y php-mysql php-gd 


#RUN ufw app list
#RUN ufw allow 'Apache'
#RUN  ufw status

RUN apt-get -y install git
RUN apt-get -y install wget
RUN apt-get -y install nano

#RUN  systemctl status apache2

#===================================
# https://www.cyberciti.biz/faq/star-stop-restart-apache2-webserver/
#===================================
RUN /etc/init.d/apache2 restart
RUN service apache2 restart
RUN service apache2 start

#====
# install mysql   
# https://www.digitalocean.com/community/tutorials/how-to-install-mariadb-on-ubuntu-20-04
#====
RUN  apt install -y mariadb-server
# RUN mysql_secure_installation
# RUN systemctl start mariadb.service


LABEL AUTHOR=user@example.com
LABEL VERSION=0.1
# COPY mypage.html /usr/local/apache2/htdocs/mypage.html
#WORKDIR /usr/local/apache2
COPY mypage.html htdocs/mypage.html
COPY mypage.html /var/www/html/mypage.html
COPY mypage.html /var/www/html/index2.html
COPY apache-start.sh  /

#======================================================
# install php8.1
# https://cloudcone.com/docs/article/how-to-install-php-8-1-on-ubuntu-20-04-22-04/
#======================================================
#RUN apt install -y ca-certificates apt-transport-https software-properties-common
#RUN add-apt-repository ppa:ondrej/php -y
#RUN grep -rhE ^deb /etc/apt/sources.list* | grep -i ondrej
#RUN apt update -y
#RUN apt install php8.1 -y
#RUN service apache2 restart

#====================================
# https://www.bing.com/search?pglt=41&q=docker+start+apache2&cvid=5d568eecd7de43b9ad4a96edba3ec526&aqs=edge.0.0j69i64.4427j0j1&FORM=ANAB01&PC=LCTS
#====================================
#ENTRYPOINT ["/usr/sbin/apache2", "-k", "start"]

#ENV APACHE_RUN_USER www-data
#ENV APACHE_RUN_GROUP www-data
#ENV APACHE_LOG_DIR /var/log/apache2

EXPOSE 80
#CMD ["apachectl", "-D", 	"FOREGROUND"]
#CMD apachectl -D FOREGROUND
CMD ["systemctl" ,"restart","apache2"]

#========== 
# docker build . -t my-httd:0.1

#==========
# Map port - https://docs.docker.com/network/
#==========
# docker run -it -p 8080:80 --name http01 my-httpd:0.1  
#
# docker run -it -p 8004:80 -v .\app:/var/www/html/app --name http04b my-httd:0.4
