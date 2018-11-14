---
title: Lista de tareas con JavaFX
date: 2018-02-01 18:40:49 +0000
current: /lista-tareas-javafx
image: assets/img/java/lista-tareas-javafx/portada.PNG
dir: /assets/img/java
repo: https://github.com/AngelGuerrero/lista-tareas-javafx
published: true
---

Recientemente me han dejado un ejercicio de la materia de _"estructura de datos"_, donde debo de utilizar las listas enlazadas simples en Java y como un plus usar una librería para interfaz gráfica, investigué y decidí utilizar JavaFX por lo simple que es.

No sólo es simple el uso de JavaFx también me pareció muy bonito y personalizable, lo que más me llamó la atención de la librería es que se pueden utilizar hojas de estilo `CSS` para personalizar la aplicación. Además de que cuenta con algunos componentes para ordenar los elementos en forma de grilla verticalmente u horizontalmente.

## Listas enlazadas simples

El ejercicio principal que me dejaron es realizar un programa donde se utilicen las listas enlazadas simples, yo decidí hacer una lista de tareas de la siguiente forma:

<a href="{{ site.baseurl }}{{ page.dir }}{{ page.current }}/aplicacion.PNG">
  <img class="img__responsive" src="{{ site.baseurl }}{{ page.dir }}{{ page.current }}/aplicacion.PNG" alt="" srcset="">
</a>

El programa no es complicado, simplemente es la implementación de las operaciones de una lista enlazada simple.

En la aplicación se puede realizar un `CRUD` (Create Read Update Delete) pero sin la persistencia de datos, ya que no cuenta con una conexión a base de datos.

En la siguiente imagen se puede ver cómo se edita una tarea y sólo es necesario dar `enter` para que se actualice el item.

<a href="{{ site.baseurl }}{{ page.dir }}{{ page.current }}/edicion.PNG">
  <img class="img__responsive" src="{{ site.baseurl }}{{ page.dir }}{{ page.current }}/edicion.PNG" alt="" srcset="">
</a>

## Información del programa

<a href="{{ site.baseurl }}{{ page.dir }}{{ page.current }}/info.PNG">
  <img class="img__responsive" style="max-width: 350px" src="{{ site.baseurl }}{{ page.dir }}{{ page.current }}/info.PNG" alt="" srcset="">
</a>
