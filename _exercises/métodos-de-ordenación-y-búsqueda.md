---
layout: layout_post
category: exercises
title: Métodos de ordenación y búsqueda
date: 2018-02-18 06:00:00 +0000
image: ''
repository: ''
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

![](/uploads/tabla_contactos.png)

Una agenda la cual contiene grupos ya sea de colegas, amigos o familiares y que a su vez tienen contactos en sus grupos respectivamente.

En la siguiente imagen se muestra que primero creo un grupo llamado `Amigos`, y se agregan contactos a este grupo, cuando se intenta agregar un contacto a un grupo inexistente, este contacto no se agregará ni se creará un nuevo grupo, se tiene que especificar la creación de un grupo.

![](/uploads/ingreso_de_contactos.png)

Y al último se muestran los contactos que he agregado.

![](/uploads/contactos_guardados.png)

## Búsqueda

Para la búsqueda de un contacto se puede utilizar un método para buscarlo por medio de su nombre, de la siguiente manera:

![](/uploads/buscar_por_nombre.png)

Y muestra la siguiente salida:

![](/uploads/salida_busqueda.png)

Si se trata de buscar un contacto que no exista, mostrará el siguiente mensaje:

![](/uploads/busqueda_extrano.png)

![](/uploads/noexiste_extrano.png)

## Ordenación

Para ordenar los contactos se me ocurrió crear una tabla, un arreglo bidimensional para almacenar el índice de la categoría y el segundo índice contiene únicamente el nombre del contacto.