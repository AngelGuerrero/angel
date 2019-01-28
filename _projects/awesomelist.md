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
published: false

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

Se pretende crear los servicios con [Express.js](http://expressjs.com/es/) por la facilidad que proporciona [Node.js](https://nodejs.org/es/).

#### Para la parte del frontend

Para consumir los servicios una aplicación web utilizando [Vue.js](https://vuejs.org/) y que con estas mismas tecnologías web del cliente, se puedan reutilizar en una aplicación de escritorio usando [Electron.js](https://electronjs.org/) o alguna otra aplicación quizás hecha en Java o C#, y una aplicación móvil usando [Flutter](https://flutter.io/).

Por el stack que quiero integrar, se pretende usar como manejador de base de datos [MongoDB](https://www.mongodb.com/).

## Desarrollo

Antes de comenzar a escribir una aplicación quiero estar seguro de qué es lo que tengo qué hacer, saber qué es lo que tengo que lograr para trazar un plan de cómo hacerlo, así es que primero comencé por crear un prototipo de la aplicación utilizando AdobeXD.

Lo primero que quería lograr es que la aplicación fuera _multiplataforma_, es decir que se pudiera ejecutar tanto como en un navegador como en una aplicación de escritorio, y para ello tenía que enfocar mi diseño, así es que comencé por escribir algunos prototipos.

![](/uploads/prototipo_mobil.JPG)

Como se ve en la imagen anterior, quería partir desde un enfoque _responsive_ comenzando con "_mobile first_".

Así se vería ésta aplicación, nada del otro mundo, una aplicación con un cuadro de texto para ingresar la nueva tarea, mostrar las tareas que están por hacer.

Para el menú de opciones:

![](/uploads/prototipo_mobil_menu.JPG)

Desde los tres puntitos del `navbar`, hasta ahora no tiene todas las opciones que me gustaría (voy despacio), pero si se ingresa a _settings_, entonces se mostraría la siguiente pantalla.

![](/uploads/prototipo_mobil_perfil.JPG)

¡Lo sé! Esa imagen de fondo parece conocida, sólo la tomé prestada.

Esas serían algunas de las opciones que me imaginé que tendría la aplicación, nada complejo por el momento.

Cuando se regresa a la página principal, y desde el menú se entra a la opción de `projects`, lanzaría la siguiente pantalla, lo que pretendo hacer es que algunas tareas estén ligadas a un proyecto en específico, para así tener organización.

![](/uploads/prototipo_mobil_projects.JPG)

Partiendo desde la pantalla principal, si se le diera `click` a los tres puntos de alguna de las tareas mostraría la siguiente pantalla, es que es una pantalla que muestra el detalle de la tarea en cuestión.

![](/uploads/prototipo_mobil_tarea_detalle.JPG)

Para cambiar la fecha de vencimiento de la tarea, agregaría otro menú que se vería de la siguiente forma:

![](/uploads/prototipo_mobil_tarea--cambiar-fecha.JPG)

Con las siguientes dos pantallas, para cambiar la fecha, y la hora.

![](/uploads/prototipo_mobil_tarea--reloj.JPG)

![](/uploads/prototipo_mobil_tarea--reloj-hora.JPG)

Y para el manejo de las notificaciones tendría ésta otra pantalla.

![](/uploads/prototipo_mobil_tarea--notificaciones.JPG)

## Implementación frontend

He comenzado por implementar primero la parte del frontend, simplemente porque me ha gustado más, y tuve un acercamiento de acuerdo al comportamiento que quiero lograr.

![](/uploads/app_mobile_home_list.JPG)

Como se puede observar en la imagen anterior, existe el navegador que deseaba, dentro un cuadro de texto y abajo de ello las listas por realizar, hasta éste punto no tiene funcionalidad, simplemente es el esqueleto para saber cómo podría quedar.

Del lado izquierdo se muestra un `aside`el cual contiene los nombres de los proyectos, la descripción de proyecto actual y algunas de las opciones que podría tener.

![](/uploads/app_mobile_home_asideleft.JPG)

La idea es que cuando se seleccione un proyecto en esta sección, se carguen las tareas que están relacionadas a éste proyecto, se puede notar un color blanco al fondo, y es que este fondo es cuando el usuario necesite cerrar el  `aside`, lo haga de una forma más _natural_.

También se puede ver que he implementado (aún sin funcionalidad) el menú desplegable que había diseñado, como se muestra en la siguiente imagen.

![](/uploads/app_mobile_home_menu-desplegable.JPG)