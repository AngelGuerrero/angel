---
layout: layout_post
category: exercises
title: 'Estructura de datos: cola'
date: 2018-02-07 06:00:00 +0000
image: "/uploads/java.png"
repository: https://github.com/AngelGuerrero/uni-estructura-datos-cola
tags:
- Java
- JavaFX
- EstructuraDeDatos
- Universidad
images_directory: "/assets/img/java/hamburguesas"
published: false

---
Para la materia de estructura de datos me han pedido que realice un programa que emula las peticiones de una _tienda de hamburguesas_, siguiendo el concepto de atender a quien primero llegó.

La aplicación la realicé usando JavaFX, y se ve de la siguiente manera.

![](/uploads/programa_hamburguesas.png)

Principalmente se muestran dos botones los cuales son para generar una nueva orden y procesar orden respectivamente. Si se realiza la petición de generar una nueva orden se muestra otra ventana en modo _“modal”_ para ingresar los datos de la nueva orden, si se presiona el botón de procesar orden, simplemente se elimina de la lista de _“pedidos por atender”_, y el primer elemento que se atiende es el primero que se agregó, así sucesivamente.

![](/uploads/realizando_peticion.png)

En las imágenes quizás no se pueda apreciar, pero cuando se realiza un cambio por ejemplo en la solicitud de algún producto, el total y el subtotal realizan un cambio en sus valores, están a la escucha de cambios de los componentes respectivos.