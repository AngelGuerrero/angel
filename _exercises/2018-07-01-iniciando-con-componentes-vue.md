---
title: "Iniciando con componentes en Vue"
image: assets/img/vue/components.png
published: true
date: "2018-07-01 04:00:00 -0500"
---

Últimamente me he inclinado más por la programación de lado del `fron-end`, y es que he visto algo de `Vue.js` pero muy poco, no me había dedicado a estudiarlo detalladamente, y ahora que lo veo, de verdad que cumple con la elegancia y la simpleza. 

Estoy comenzando a ver los componentes, los cuales son parte fundamental del desarrollo `front-end`.

A continuación muestro un ejercicio que realicé para aprender sobre los componentes y aunque la documentación de Vue.js está muy detallada en este tema, siempre me gusta experimentar y hacer mis ejercicios.

Yo entiendo a los componentes como funciones, funciones que realizan un proceso, y estas aceptan argumentos para que de acuerdo a ellos la función pueda realizar algo, así mismo imagino a los componentes, por ejemplo una instancia de Vue de la siguiente manera:

En el archivo `HTML`
```html
<div id="#app">
    <label for="in_name">{{ name }}</label><br>
    <input name="in_name" id="in_name" v-model="name">
</div>
```

En el archivo `Javascript`
```javascript
var vue = new Vue({
    el: '#app',

    data: {
        name: ''
    }
})
```

Donde simplemente se tiene enlazado o _bindeado_ la variable **name** de la instancia Vue con el formulario de control de entrada _input_ y al cambiar el contenido de éste, cambia el contenido en el _label_, pues es el valor que se está mostrando de la variable **name**.

Qué pasa ahora si yo necesito reutilizar esta funcionalidad en varias partes de mi sitio, y no sólo eso, agregar funcionalidad específica para cada componente, pues quiero que de acuerdo a ciertos _"parámetros"_ que yo le pase, funcione de diferente forma, pues ahí es donde entran los componentes.

El anterior código se podría utilizar entonces de la siguiente manera.

Comenzando con el archivo `Javascript` quedaría de la siguiente forma:

```javascript
Vue.component('mi-componente', {
    template: `<h1>Hola, desde mi componente 1</h1>`
})
```

Y para llamar a este componente desde el archivo `HTML` se llamaría por el nombre que le hemos dado al componente, que en este caso sería `mi-componente`, siempre dentro de la etiqueta donde se monta la aplicación o la instancia de Vue, en este caso el id `app`.

```html
<div id="app">
    <mi-componente></mi-componente>
</div>
```

Cabe mencionar que al declarar el componente fuera de la instancia Vue, es un componente global, es decir que se puede llamar dentro de cualquier otro componente de la aplicación.

## Reutilizar el componente

Aunque en el ejemplo anterior aún no se estaba escribiendo la funcionalidad que se requería al inicio, es que para ello al componente se tiene que declarar los `props` los cuáles son _"parámetros"_ que recibe el componente, antes de ello un ejemplo de cómo reutilizar el componente que se tiene de ejemplo.

Primero en el archivo `javascript`, componente sin props.

```javascript
Vue.component('mi-componente', {
    template: `<div>
                <label for="in_name">{{ name }}</label><br>
                <input name="in_name" id="in_name" v-model="name">
             </div>`,

    data () {
        return {
            name: ''
        }
    }
})
```

En el archivo `html` ahora se puede mandar llamar al componente cuantas veces se desee y será una instancia independiente de los otros componentes.

```html
<div id="app">
    <mi-componente></mi-componente>
    <mi-componente></mi-componente>
    <mi-componente></mi-componente>
</div>
```

## Componentes con props

Ahora sí, escribiendo la funcionalidad inicial pero con props, variará un poco, pues al componente cuando se haga una instanciación se le tiene que asignar un valor a alguna variable props que se esté pidiendo, en este caso sólo se mostrará un mensaje de bienvenida.

En el archivo `javascript`
```javascript
Vue.component('componente-mensaje', {
    props: ['msg'],
    
    template: `<div>
                <label for="in_name">{{ msg }} {{ name }}</label><br>
                <input type="text" name="in_name" id="in_name" v-model="name">
               </div>`,
    
    data () {
        return {
            name: ''
        }
    }
})
```

Para instanciar este componente quedaría de la siguiente forma en el archivo `html`

```html
<div id="#app">
    <componente-mensaje msg="Hola,"></componente-mensaje>
</div>
```

Hay que notar que se le está pasando el valor para `msg` desde la instanciación del componente, en este caso sería el valor de: `Hola,`.

## Bindear props con instancia principal
Otro caso que se puede aplicar es cuando se necesita que el valor para el prop del componente esté ligado a otra instancia u otro valor, para este caso se tendría que bindear precisamente de la siguiente manera:

```html
  <!-- NOTE: Con esta configuración se le está pasando un valor a la propiedad
              que está "ligado" a la variable myName -->
  <div id="app2">
    <my-com-with-props v-bind:name="myName"></my-com-with-props>
</div>
```

```javascript
var app = new Vue({
  el: '#app2',

  data: {
    myName: "Ángel"
  }
});
```

## Ejemplos

A continuación se muestra un ejemplo de los conceptos descritos sobre los componentes en Vue.js.

Archivo `index.html`

<code data-gist-id="714d0e099f7b040b7c564ccdd95c3860" data-gist-file="index.html">

Archivo `script.js`

<code data-gist-id="714d0e099f7b040b7c564ccdd95c3860" data-gist-file="script.js">

## En vivo

<p data-height="382" data-theme-id="light" data-slug-hash="zMYQJd" data-default-tab="html,result" data-user="AngelGuerrero" data-pen-title="componentes-vue" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/AngelGuerrero/pen/zMYQJd/">componentes-vue</a> by Ángel Guerrero (<a href="https://codepen.io/AngelGuerrero">@AngelGuerrero</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>