---
title: Ejemplo usando Vue-Router

published: true

description: Recientemente comencé a utilizar Vue.js, y quería saber cómo integrar Vue con cualquier sistema backend, pero para ello he tenido qué realizar varios ejercicios para comprender el funcionamiento de los componentes que lo integran.

image: /assets/img/vue/home-vue-router-example.png
curr_img_path: /assets/img/vue
---

En este ejercicio comparto cómo comenzar a utilizar la librería de [Vue-Router](https://router.vuejs.org/).

## Crear proyecto
El primer paso es crear el proyecto, yo lo he creado con la ayuda de CLI de Vue ejecutando el siguiente comando:

**Comando:** `vue init webpack vue-router-example`

![vue-cli]({{ site.baseurl }}{{ site.img_dir }}/vue/vue-cli.png)

Cuando ya se tiene el proyecto se puede ejecutar el siguiente comando para verificar que funciona correctamente, Vue levanta un servidor el cual es Hot Reload, es decir, monitorea los cambios que se realizan en el código para aplicar los nuevos cambios.

**Comando:** `npm run start`

Una vez que se verifica que todo funciona correctamente se quita el código que viene por defecto y se crean los siguientes componentes dentro de la carpeta de `src/componentes`.

> Es recomendable que primero se cree el componente `NotFound.vue` para saber cuando una página no se encuentra y poder obtener información acerca de ello.

#### Componente NotFound.vue
<script src="https://gist.github.com/AngelGuerrero/fed6e7bd0e51d388889e264566c9ef58.js"></script>

#### Componente Welcome.vue
<script src="https://gist.github.com/AngelGuerrero/e8e611715b098278c5732158437c543f.js"></script>

#### Componente Post.vue
<script src="https://gist.github.com/AngelGuerrero/3980a8df32503ce471d5bf08fa5b0287.js"></script>

> Es importante notar el comodín que corresponde al componente `NotFound`, éste debe de ir al último de las rutas, ya que se lee de una forma secuencial funcionando como si fuese un `switch-case`. Además notar también que la ruta para los post tiene un slash al inicio, si se llegara a omitir lanzaría un error 404 ya que no estaría bien formada esa ruta.

En el momento en que se crea el componente manda a llamar a la función `getPost` para obtener la información de dicho post, después de ello el componente ya no se vuelve a dibujar, ya que para Vue.js sería inneficiente, así es que es importante decirle al objeto `watch` que _"mire"_ esa función para cuando se vuelva a llamar, si no se estableciera con el objeto `watch` simplemente al volver a entrar a la ruta o al recargar la página no llamaría a la función `getPost` y no traería datos.

#### Etiquetas en la aplicación
Por último, es necesario implementar dónde irán los enlaces que llamaran y cargarán a los respectivos componentes, de tal forma que el archivo `App.vue` quedaría de la siguiente forma ya con la aplicación de algunos estilos.

<script src="https://gist.github.com/AngelGuerrero/cab1791e28b710612f176173dda76929.js"></script>

Con este código ya se tendría una pequeña aplicación funcional.

### Demo
Se puede ver una **demostración** en el siguiente enlace: [Vue Router Ejemplo](https://vue-spa-example.firebaseapp.com/).

<a href="{{ site.baseurl }}{{ page.curr_img_path }}/home-vue-router-example.png">
  <img src="{{ site.baseurl }}{{ page.curr_img_path }}/home-vue-router-example.png">
</a>

