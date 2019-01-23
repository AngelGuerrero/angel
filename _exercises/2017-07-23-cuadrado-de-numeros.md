---
title: 'Reto de programación: ''Cuadrado de números'''
image: assets/img/defaults/codes-computer.jpg
layout: layout_post
category: exercises
date: 2017-07-23 05:00:00 +0000
tags:
- C++
- Challenge
- Math
repository: ''
images_directory: ''

---
Otro reto de programación que me pareció interesante fue el siguiente.

```text
   RETO DE PROGRAMACIÓN

  Flota de camiones. El propietario de la compañia de transportes "La tortuga"
  es un matemático amateur. Después de comprar una flota nueva de camiones, 
  decidió identificar a cada vehículo, pintando sobre su cabina un número menor
  que 500. Sólo para ser diferente, escogió todos aquellos números cuyos cuadrados
  terminaran en el número en cuestión. Así uno de los camiones se marcó con el 
  número 25 ya que 25^2 = 625
  
  ¿Cuántos camiones formaban la flota de la compañía?
  
  ¿Cuáles eran sus números?
```

El programa lo realicé en `C++` y el resultado fue el siguiente, cabe mencionar que el programa lo realicé usando recursividad.

{% assign img_path = "/assets/img/excercises/programa_camiones.png" %}
<a href="{{ site.baseurl }}{{ img_path }}"><img class="img__responsive" src="{{ site.baseurl}}{{ img_path }}" alt="Imagen de programa de camiones"></a>

El código es el siguiente:

<code data-gist-id="192dd8fcc187f4e21386"></code>