---
title: "Reto de programación: Simplificar fracción"
published: true
image: assets/img/defaults/python_wall.jpg
---

Hace tiempo mientras me encontraba buscando ejercicios de programación, un compañero me mandó un ejercicio y el reto consistía en utilizar cualquier lenguaje de programación pero tenía que usar recursión.

El reto es el siguiente: 

{% highlight text %}
Con el proposito de evitarse el tedioso trabajo de corregir
los ejercicios sobre simplificación de quebrados a su expresión
mas sencilla, la profesora Elena Gonzáles transformó su calculadora
en una máquina de simplificar quebrados. 

Para cualquier quebrado n/m Elena puede introducir n y m en éste órden y 
obtener el numerador y denominador respectivamente de la fraccion simplificada. 

Por ejemplo si consideramos el quebrado 30/27 Elena introduce en su máquina 
un 30 y un 27 y obtiene como respuesta un 10 y un 9, lo que representa 
la expresión simplificada 10/9 del quebrado inicial, 
otro ejemplo sería el 666 y el 999 obtendría 2/3.

Haz un programa que realice el mismo trabajo que la maquina de simplificar
quebrados de Elena. Con recursividad en cualquier lenguaje.

{% endhighlight %}

### Resultado

El ejercicio lo realicé en `Python` y obtuve el siguiente resultado: 

{% assign simplificar_fraccion = "/assets/img/excercises/simplificar_fraccion_python.png" %}
<a href="{{ site.baseurl }}{{ simplificar_fraccion }}">
  <img class="img__responsive" src="{{ site.baseurl }}{{ simplificar_fraccion }}" alt="">
</a>

El código es el siguiente:

<code data-gist-id="75e6efd821d29f3fe4c6"></code>