---
title: Plantillas de componentes en Vue
image: assets/img/vue/vue.jpeg
date: 2018-07-05 21:50:58 -0500
layout: layout_post
category: exercises
repository: https://github.com/AngelGuerrero/learn-vue/tree/master/2_component-template
tags:
- Vue.js
- Templates
- Components
- Frontend
- JavaScript

---
Vue es tan variante que permite realizar una tarea de distintas maneras, te da la oportunidad de realizarlas en base a tus necesidades y en este caso con las `template components`.

## Qué son las plantillas de componentes

Las _plantillas de componentes_ se componen de la parte estructural del HTML de cada componente, y ésta estructura puede ser declarada de distintas maneras.

## Plantillas dentro del componente

El atributo `template` del componente (la parte estructural), puede declararse dentro del componente de la siguiente manera:

```javascript
Vue.component('mi-componente', {
    template: `<h1>Hola, desde mi componente</h1>`
})
```

Hay algunas cosas que se deben notar aquí, primero este tipo de estructura puede funcionar más cuando **no** se necesite renderizar demasiados nodos HTML, ya que se vuelve un poco pesado escribir dentro de las comillas, y otra es que ahora es un sólo nodo HTML, pero habrá veces en que necesitemos más nodos, y para ello siempre debe de existir un `root element`, es decir un único nodo padre, para que todos los demás elementos que necesitemos se vuelvan hijos de éste `root element`, de la siguiente manera:

```javascript
Vue.component('mi-componente', {
    template: `<div>
                <h1>Hola, desde mi componente</h1>
              </div>`
})
```

Así, sin problemas podemos ir agregando más nodos, ya que si no se hiciera de esta forma Vue lanzará un mensaje de error, esto para la versión 2 y anteriores.

## Plantillas in-line

Para este caso, puede ser que el componente no se vaya a reutilizar más y sólo se necesita que se renderice una vez, y no exista problema de escribirlo en el archivo HTML.

La plantilla _"in-line"_ se debe de escribir el nombre del componente al que pertenece, junto con un atributo extra importante: `inline-template`, para decirle a Vue que ese componente está utilizando una plantilla in-line.

En el archivo html

```html
  <div id="app">
    <!-- Inline template -->
    <mi-componente :usuario="nombre" inline-template>
        <h4>Usuario: <span v-text="usuario"></span></h4>
    </mi-componente>
  </div>
```

En el archivo javascript

```javascript
Vue.component('mi-componente', {
  props: ['usuario']
})

var vue = new Vue({
  el: "#app",

  data: {
    nombre: "Wendy Argente"
  }
})
```

## Con etiqueta 'script'

Existe la posibilidad también de sacar el la estructura del HTML del componente y ponerla en una etiqueta `script`, sólo con unas pocas diferencias, véase los siguientes ejemplos.

Archivo javascript

```javascript
Vue.component('mi-componente', {
  props: ['usuario'],
  template: "#mainTemplate",
})

var vue = new Vue({
  el: "#app",

  data: {
    nombre: "Wendy Argente"
  }
})
```

> Nota: Se debe notar que al atributo  `template` se le está diciendo que busque la etiqueta con el __id__ `#mainTemplate`, el cual está declarado en el archivo HTML, de la siguiente forma.

```html
<div id="app">
    <mi-componente :usuario="nombre"></mi-componente>
</div>

<!-- Script que tomará el componente-->
<script type="text/template" id="mainTemplate">
    <h4>Usuario: <span v-text="usuario"></span></h4>
</script>
```

Como se puede apreciar en el ejemplo anterior, a la etiqueta `script` se le ha asignado un id, y se le ha dicho también que sea del tipo: `text/template`, con esto hecho el componente se puede instanciar dentro de la etiqueta con el id `#app` sin problema.

## Usando etiqueta template

Similar al anterior ejemplo, pero usando una etiqueta de nombre `template`, es una etiqueta que los navegadores no conocen y la omitirán pero estará ahí para Vue.

Usando el mismo código que se tiene en el archivo javascrpt.

```javascript
Vue.component('mi-componente', {
  props: ['usuario'],
  template: "#mainTemplate",
})

var vue = new Vue({
  el: "#app",

  data: {
    nombre: "Wendy Argente"
  }
})
```

Sólo que con la diferencia que se utilizará la plantilla de la siguiente forma.

```html
  <div id="app">
    <mi-componente :usuario="nombre"></mi-componente>
  </div>

  <template id="mainTemplate">
      <h4>Usuario: {{ usuario }}</h4>
  </template>
```

> Nota: Mirar que también se le ha asignado un id, esto para que el componente lo pueda identificar.

## Código

En el repositorio de prácticas puedes obtener los diferentes ejemplos que he mostrado aquí.

[Repositorio de ejemplos]({{ page.repo }})