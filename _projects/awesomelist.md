---
layout: layout_post
category: projects
title: Awesomelist
date: 2018-08-29 05:00:00 +0000
image: "/uploads/prototipo_enlaces.JPG"
repository: https://github.com/AngelGuerrero/awesomelist
tags:
- Vue.js
- Node.js
- MySQL
- Sequelize.js
- ORM
- API-REST
- Frontend
- Backend
images_directory: "/assets/img/vue"

---
Personalmente me gusta aprender cosas de modo en que pueda ver o realizar un ejemplo en el _mundo real_. Quise hacer una _lista de tareas_, pero no quería hacer una lista de tareas así de simple, quería algo más completo, que conllevara desde la autenticación del usuario y la configuración de la aplicación, y quizás hasta funciones en tiempo real e integración con otros servicios.

Así es que me decidí por crear ésta lista de tareas basándome un poco en la aplicación _wunderlist_, la cual uso mucho y me gusta mucho.

## Definición del proyecto

Awesomelist es una simple aplicación de lista de tareas.

### Características

Este proyecto pretende ser una simple aplicación para administrar tareas, pero con algunas características a destacar.

#### Proveedor de API

Se pretende que a través de un servidor proporcione una API para que se pueda consumir desde otra aplicación, ya sea una cliente de escritorio un cliente móvil.

#### Registro de usuarios

A través de la API que se proporcionará, debe de contar con métodos para poder registrar y autenticar usuarios para poder obtener la información del usuario en cuestión.

#### Estructura

Se pretende que inicialmente tenga una estructura simple pero con la oportunidad de agregar más características a la aplicación, no sólo una _lista de tareas_ sino también:

* Crear proyectos y agrupar las tareas.
* Colaboración en proyectos con otros usuarios registrados.
* Integración de otras API's para compartir documentos (Dropbox, Google Drive, OneDrive).

### Tecnologías

#### Para la parte del backend

Se pretende crear los servicios con \[Express.js\]([http://expressjs.com/es/](http://expressjs.com/es/ "http://expressjs.com/es/")) por la facilidad que proporciona \[Node.js\]([https://nodejs.org/es/](https://nodejs.org/es/ "https://nodejs.org/es/")).

#### Para la parte del frontend

Para consumir los servicios una aplicación web utilizando \[Vue.js\]([https://vuejs.org/](https://vuejs.org/ "https://vuejs.org/")) y que con estas mismas tecnologías web del cliente, se puedan reutilizar en una aplicación de escritorio usando \[Electron.js\]([https://electronjs.org/](https://electronjs.org/ "https://electronjs.org/")) o una aplicación móvil usando \[Flutter\]([https://flutter.io/](https://flutter.io/ "https://flutter.io/")).

Por el stack que quiero integrar, se pretende usar como manejador de base de datos \[MongoDB\]([https://www.mongodb.com/](https://www.mongodb.com/ "https://www.mongodb.com/")).