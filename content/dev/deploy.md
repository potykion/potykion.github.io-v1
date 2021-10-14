---
title: Деплой
description: Разворачиваем приложухи, лишь коммитя код в репозиторий  
---

Деплой (развертывание, доставка) - магия, которая позволяет любому пользователю воспользоваться твоим приложением 
(напр. выложить сайтик на хостинг, выложить приложуху в гугл-плей)

В данном случае поговорим про деплой серверов и сайтиков

## Бекенд

Допустим, у тя есть серверочек / апишка на какой-нибудь Django / Flask / FastAPI и хочется сделать так, чтобы она была доступна в сети, чтобы отдать ее например мобильным или фронтенд разрабам

Тут надо задать себе вопрос, а где будем разворачиваться? Есть различные варианты: IAAS, PAAS, Serverless . 

IAAS - infrastructure as a service.


PAAS - platform as a service - это, как следует из названия, сервис, который предоставляет платформу для твоего приложения. 
Это значит, что тебе нужно лишь залить туда свой код, а дальше произойдет магия, и сервера, машинки, где будет крутиться твое приложение, сами запустятся, сами будут масштабироваться 
и не нужно особо ничего настраивать (хотя можно), ты сосредочен только на коде. Примеры - Google App Engine, Heroku - то есть в России пока такого нет, но надеемся, что Яндекс и Мейл такое завезут.


PAAS предоставляет всякие доп-сервисы, типа очередей, кронов, бд, ... 

Docker + PAAS





Нам хочется чтобы развертывание происходило в идеале само, сразу после пуша в репозиторий




А вообще можно писать веб и мобильные приложения без серва, не юзая всякие там Питоны, Го, Шарпы. Можно юзать BAAS.

### Gunicorn

### Docker

### Fabric

### Jenkins

## Фронтенд

### И снова Docker

### Github Pages

https://nuxtjs.org/deployments/github-pages

## Все вместе

### Nginx

### Docker Compose

### И снова Jenkins


## Ссылочки


python 3.x - Running Flask application without nginx - Stack Overflow
https://stackoverflow.com/questions/62169352/running-flask-application-without-nginx?rq=1

python - Are a WSGI server and HTTP server required to serve a Flask app? - Stack Overflow
https://stackoverflow.com/questions/38982807/are-a-wsgi-server-and-http-server-required-to-serve-a-flask-app

Standalone WSGI Containers — Flask Documentation (2.0.x)
https://flask.palletsprojects.com/en/2.0.x/deploying/wsgi-standalone/

Welcome to Flask — Flask Documentation (2.0.x)
https://flask.palletsprojects.com/en/2.0.x/

python - Difference between WSGI utilities and Web Servers - Stack Overflow
https://stackoverflow.com/questions/21058742/difference-between-wsgi-utilities-and-web-servers

Введение в WSGI-серверы: Часть первая / Хабр
https://habr.com/ru/post/426957/

What are the benefits of using NGINX Unit? - Octopus Deploy
https://octopus.com/blog/why-use-nginx-unit

Web Applications & Frameworks — The Hitchhiker's Guide to Python
https://docs.python-guide.org/scenarios/web/

Nginx - Full Stack Python
https://www.fullstackpython.com/nginx.html

Web Servers - Full Stack Python
https://www.fullstackpython.com/web-servers.html

Deployment - Full Stack Python
https://www.fullstackpython.com/deployment.html

WSGI Servers - Full Stack Python
https://www.fullstackpython.com/wsgi-servers.html

Deploying a Python application - Nginx - Passenger Library
https://www.phusionpassenger.com/library/deploy/nginx/deploy/python/

Make Python Faster with NGINX: Web Serving & Caching
https://www.nginx.com/blog/maximizing-python-performance-with-nginx-parti-web-serving-and-caching/

How to Deploy Python WSGI Apps Using Gunicorn HTTP Server Behind Nginx | DigitalOcean
https://www.digitalocean.com/community/tutorials/how-to-deploy-python-wsgi-apps-using-gunicorn-http-server-behind-nginx


https://www.youtube.com/watch?v=uEVmD6n8Il0&list=LL&index=65
