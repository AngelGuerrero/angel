---
layout: layout_post
category: exercises
title: Métodos de ordenación y búsqueda
date: 2018-02-18 06:00:00 +0000
image: "/uploads/contactos_ordenados.png"
repository: https://github.com/AngelGuerrero/uni-ordenacion-busqueda
tags:
- Java
- Netbeans
- Algoritmos
- POO
images_directory: "/assets/img/java/ordenacion_busqueda"

---
Como parte de un ejercicio escolar, me han pedido realice un programa para aprender los métodos de ordenación y búsqueda.

Me pidieron que realizara un programa de cualquier tipo con la condición de que debía tener arreglos unidimensionales y bidimensionales, con ordenamiento y búsqueda en una clase.

## Agenda de contactos

Finalmente me decidí a realizar una agenda de contactos, primero realicé la estructura de una clase `Contacto`, y otra estructura `Libro (Book)`, la cual es la agenda principal que ordenará y buscará a los contactos solicitados o creará nuevos grupos para categorizar a los contactos.

Para crear la estructura completa, traté de pensar en una agenda de la siguiente manera:

![]({{ site.baseurl }}{{ page.images_directory }}/tabla_contactos.png)

Una agenda la cual contiene grupos ya sea de colegas, amigos o familiares y que a su vez tienen contactos en sus grupos respectivamente.

En la siguiente imagen se muestra que primero creo un grupo llamado `Amigos`, y se agregan contactos a este grupo, cuando se intenta agregar un contacto a un grupo inexistente, este contacto no se agregará ni se creará un nuevo grupo, se tiene que especificar la creación de un grupo.

![]({{ site.baseurl }}{{ page.images_directory }}/ingreso_de_contactos.png)

Y al último se muestran los contactos que he agregado.

![]({{ site.baseurl }}{{ page.images_directory }}/contactos_guardados.png)

## Búsqueda

Para la búsqueda de un contacto se puede utilizar un método para buscarlo por medio de su nombre, de la siguiente manera:

![]({{ site.baseurl }}{{ page.images_directory }}/buscar_por_nombre.png)

Y muestra la siguiente salida:

![]({{ site.baseurl }}{{ page.images_directory }}/salida_busqueda.png)

Si se trata de buscar un contacto que no exista, mostrará el siguiente mensaje:

![]({{ site.baseurl }}{{ page.images_directory }}/busqueda_extrano.png)

![]({{ site.baseurl }}{{ page.images_directory }}/noexiste_extrano.png)

## Ordenación

Para ordenar los contactos se me ocurrió crear una tabla, un arreglo bidimensional para almacenar el índice de la categoría y el segundo índice contiene únicamente el nombre del contacto.

![]({{ site.baseurl }}{{ page.images_directory }}/arreglo_tabla.png)

De esta manera cuando se necesite un contacto, busca el nombre en la variable `table`, también como buscar todos los contactos que sean de un grupo en específico.

Para ordenar los contactos se tiene qué indicar qué grupo de contactos se pretende ordenar, no ordena a todos los contactos por defecto, por ejemplo, se tiene la lista de contactos del grupo de amigos actualmente desordenados, llamando al método `book.showTable()`.

![]({{ site.baseurl }}{{ page.images_directory }}/contactos_en_tabla.png)

Cuando se pide que se ordenen los contactos de este grupo:

![]({{ site.baseurl }}{{ page.images_directory }}/peticion_ordenacion.png)

Entonces muestra el siguiente resultado:

![]({{ site.baseurl }}{{ page.images_directory }}/contactos_ordenados.png)

Al igual para otro grupo, por ejemplo el grupo _familia_:

![]({{ site.baseurl }}{{ page.images_directory }}/familia_ordenada.png)

## Ventajas y desventajas

En la implementación de este programa realicé algoritmos muy rudimentarios, es decir con poca eficiencia, me parece que realicé demasiados bucles y algunos quizás innecesarios, con un gran volumen de datos definitivamente éste no es el enfoque, pero para ejercicio escolar creo que sirve como un inicio.