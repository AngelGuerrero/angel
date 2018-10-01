---
title: "Subir imágenes con Vue y Php"
image: assets/img/defaults/keyboard.jpg
published: true
repo: https://github.com/AngelGuerrero/upload-images-php
date: "2018-09-30 22:42:58 -0500"
---

Hace poco tiempo me pidieron ayuda con un ejercicio en Php para subir imágenes al servidor, y con gusto ayudé, sólo ayudé a modificar el código en Php, pero después quise hacer mi propia versión implementando [Vue.js](https://vuejs.org/) para que tuviera más "dinamismo", no fue la gran cosa, pero me gustaría mostrar este ejercicio ya que siempre encuentro algo nuevo qué aprender con cada práctica.

## Estructura de archivos
Aunque fue sólo un ejercicio, me pareció correcto crear una buena estructura de archivos del proyecto desde el inicio, ya que he visto en algunas ocasiones que, cuando no se hace esto, puede ser difícil saber qué modificar.

Mi estructura de archivos es la siguiente para el servidor:

```text
- server/
  - modules/
    - upload/
      - create.php
      - read.php
  - system/
    - common.php
```

#### common.php
En la carpeta de `system` hice un archivo llamado `common.php` el cual contiene los [CORS](https://es.wikipedia.org/wiki/Intercambio_de_recursos_de_origen_cruzado).
<code data-gist-id="580082a73050f953c418d499272e0f59" data-gist-file="common.php"></code>

#### create.php
El archivo `create.php` contiene el código que deberá subir la imagen al servidor o no, de acuerdo a ello, mandará un mensaje de error o de éxito, respectivamente.
<code data-gist-id="580082a73050f953c418d499272e0f59" data-gist-file="create.php"></code>

#### read.php
Al mismo nivel del archivo `create.php` he creado un archivo `read.php` que servirá para leer las imágenes que están en el servidor y responder al `font-end` con las rutas de las imágenes en un formato `json`.
<code data-gist-id="580082a73050f953c418d499272e0f59" data-gist-file="read.php"></code>

Cabe mencionar que lo que he realizado para nada tiene que ver con una arquitectura REST, ya que no estoy manejando los verbos que comúnmente se usan en esta arquitectura.

## Cliente con Vue.js
Ya que se tiene el código para poder subir las imágenes al servidor, hice un nuevo proyecto de Vue.js con la ayuda del CLI, y dentro de la carpeta `src` tengo los siguientes archivos que son los que trabajé.

```text
- src/
  - assets/
  - components/
    - ListImages.vue
    - UploadTo.vue
    - event-bue.js
  - App.vue
  - main.js
```

#### App.vue
En el archivo `App.vue` se realizan los registros de los componentes que se usarán.

Además de ello escribí un simple código, donde está una variable que contiene la URL del servidor local y remoto, y cambia éste valor de acuerdo al ambiente donde estoy desarrollando.

El archivo `App.vue` también contiene la estructura de la aplicación, como se puede mostrar en el código `pug`.

<code data-gist-id="580082a73050f953c418d499272e0f59" data-gist-file="App.vue"></code>

#### UploadTo component
El componente de nombre `UploadTo` es el encargado de, por medio de un botón cargar la imagen y mostrarla, para que el usuario sepa qué imagen va a cargar al servidor.

Este componente recibe como parámetro la ruta para hacer la petición y mandar el archivo, ya sea de forma local o de forma remota, que ha decidido el archivo `App.vue`.

<code data-gist-id="580082a73050f953c418d499272e0f59" data-gist-file="UploadTo.vue"></code>

Es importante notar la siguiente línea del código, el cual emite un evento a través de un bus de comunicación.

<code data-gist-id="580082a73050f953c418d499272e0f59" data-gist-file="UploadTo.vue" data-gist-line="50"></code>

Esto es para que el componente `ListImages` esté pendiente, y cuando escuche este evento realice una acción, la cual mostraré más adelante.

#### ListImages component
El componente ListImages es el encargado de mostrar las imágenes, que el servidor manda en forma de `Json`, manda únicamente las rutas de las imágenes y el componente las dibuja en el navegador.

Este componente recibe como parámetros la ruta de donde se llamará para obtener la lista de imágenes, y la ruta en donde están las imágenes, son dos cosas diferentes, una se refiere a la carpeta de las imágenes: `uploads`, y el otro parámetro es el archivo `php` que se llamará para que retorne la lista de las imágenes con las rutas específicas de cada una de ellas.

<code data-gist-id="580082a73050f953c418d499272e0f59" data-gist-file="ListImages.vue"></code>

Como en el componente anterior, en este se debe de notar que una vez que el componente está creado, se pone a la escucha, con el nombre: `upload-image`, como se puede ver en la línea 20 del siguiente código.

<code data-gist-id="580082a73050f953c418d499272e0f59" data-gist-file="ListImages.vue" data-gist-line="28"></code>

## Demo
En el siguiente enlace se puede ver un demo del ejercicio de la aplicación. [Demo](https://stoic-pasteur-7d3397.netlify.com/).
