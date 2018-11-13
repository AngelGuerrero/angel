---
title: Conversion de expresion infija a postfija
date: 2018-11-13 18:40
published: false

---
Como ejercicio escolar me han dejado que desarrolle la evaluación de una expresión infija y convertirla a postfija específicamente en Java.

![](assets/img/aplicacion.PNG)

# ¿Qué es una expresión infija?

Esta es una notación común de fórmulas aritméticas y lógicas, la notación postfija es una evaluación de expresiones aritméticas mediante pilas.

De acuerdo a las operaciones que se necesitan implementar no se utilizan del todo "pilas", mi solución fue utilizar dos pilas para mostrar el resultado, y dos listas enlazadas simples.

![](assets/img/variables.PNG)

En la imagen de arriba se puede observar que he declarado una pila para obtner el resultado final, y una lista doblemente enlazada para listar los operadores que pudiera tener la expresión.

Además de definir las letras con las que se puede trabajar, sus operadores y la definición de separadores de apertura y cierre, así se tiene un mejor control de qué se está evaluando.

![](assets/img/variables_2.PNG)

Antes de comenzar a realizar el procedimiento es necesario definir la prioridad de los operadores existentes, en mi caso lo he dejado de la siguiente manera:

![](assets/img/prioridad_de_operadores.PNG)

A la función anterior que le he llamado `compare` se le pasa como parámetro un carácter y ésta decide cuál es su valor de acuerdo a la lógica que le he establecido.

Se inicia recorriendo la expresión carácter por carácter y de acuerdo a este carácter se realiza una serie de condicionales para saber cuál es la que cumple dicho carácter.

* Si el carácter es una letra o una literal, se agrega directamente a la pila de salida,  `stackOutput.`
* Si no, si el carácter es un separador de apertura o más bien, éste está dentro de la lista de caracteres que he definido, entonces, se agrega también directamente a la pila final `stackOutput`, esto lo hago con el fin de tener un "comodín" y saber dónde comienza o cierra ciertos operadores de la expresión.
* Si no, entonces el caracter es un operador, aquí se realiza unas condicionales anidadas.
  * Verifiaca si la lista está vacía, si no es así, agrega el operador a la lista de operadores, cabe decir que si el operador es un operador de apertura tamibén se agrega a  la lista, sólo que al momento de salir estos simplemente se ignoran, como dije se tienen únicamente de referencia.
  * Si la lista no está vacía pues entonces comienza a realizar comparaciones. Aquí es donde viene la parte clave del algoritmo.
  * La regla dice que si los operadores de la lista tienen mayor prioridad o misma prioridad que el operador que se está evaluando actualmente, entonces todos estos se sacan de la lista a menos que se encuentren un operador de apertura en la lista, y al final se agrega el operador que actualmente se está evaluando a la lista. Para estas operaciones utilicé una lista auxiliar para poder mover los elementos de la lista y realizar el recorrido de la misma, como si fuese una torre de Hanoi.
* Por último, si el ciclo llega al final entonces se vuelca toda la lista de los operadores en la pila donde se almacena el resultado final y simplemente se muestra de  la forma correcta, yo utilicé una pila más como pila auxiliar para mostar los datos correctamente.