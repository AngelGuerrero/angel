---
title: "Relaciones usando Eloquent en Laravel"
published: false
repo: https://github.com/AngelGuerrero/laravel-example-blog
date: "2018-25-11 22:00:00 -0500"
---

Recientemente he comenzado a realizar prácticas con Laravel, pues tengo varios proyectos en mente que quiero implementar especialmente con Php, al contrario de lo que muchos desarrolladores comentan sobre "lo malo de Php", las nuevas versiones en especial la versión 7 de Php y junto con la popularidad de Laravel, ha hecho que Php "vuelva a ser popular".

Anteriormente había estado trabajando con Ruby en Rails, y bueno, tuve buenas y malas experiencias, pero creo que me quedé más con las malas experiencias que con las buenas, en parte por ignorar herramientas como vagrant o similares, tuve problemas principalmente con la ambientación para trabajar con las herramientas que se requerían "gemas", primero no se debe de trabajar con Windows pues porque si se quiere usar "rbenv" o "rvm" en Windows y utilizar una versión de Ruby pues puede ser que te salgan problemas con el proyecto y las gemas que intentas utilizar, así es que lo más recomendado es usar Linux, después usar una herramienta como las mencionadas para instalar la versión que el proyecto requiere de Ruby, y bueno si alguna gema que trae no funciona con la versión anterior y no especificaron qué versión es con la que se tiene que trabajar pues a moverle, y bueno es un tema que a mí me frustra mucho y me molesta en gran medida.

Mi primer acercamiento con Laravel fue en Windows, lo instalas con composer, usas XAMPP, levantas el servidor de desarrollo que trae Laravel por defecto y listo, ya tienes puedes comenzar a desarrollar, u otro camino puede ser usar una máquina virtual con Vagrant y Homestead y ya tienes un ambiente configurado con las herramientas necesarias que puedes compartir con tu equipo de trabajo, eso fue realmente fácil y satisfactorio.

Como había dicho, tengo muchos proyectos en mente para desarrollar, pero antes de ello quisiera dar pasos pequeños con este framework para irme familiarizando por lo tanto en este artículo describo como realizar un CRUD con Laravel.

# Modelo de Objetos

Para el ejemplo que haré un simple ejercicio del modelo de un blog, nada de autenticación ni demás cosas, sólo la creación de las relaciones de las tablas usando Eloquent y cómo se realiza un CRUD.

Entonces dado el siguiente modelo.

# Aquí va una imagen

En donde se puede observar que la entidad "User" extiende de la clase "Person", donde la entidad "User" tiene cero o muchos posts que a su vez le pertenecen a la persona, y muchos "Posts" pertenecen a la entidad "User".

A nivel de base de datos, en tablas relacionales quedarían las tablas de la siguiente manera, donde la tabla de "Users" tiene un campo "person\_id" para establecer una asociación de uno a uno con la tabla "People".

# Aquí va una imagen

# Migraciones

Sobre la configuración de la base de datos se dejará tal cual como está, ya que trabajaré sobre un entorno de desarrollo usando Homestead, el cual ya tiene las herramientas para rápidamente comenzar a trabajar.

Las migraciones son un sistema de control de versiones de para las bases de datos. Es decir, todos los cambios que se han realizado o que se pretenden realizar de acuerdo al diseño de la base de datos se realiza con las migraciones, estas se utilizan de forma conjunta con la herramienta de nombre _"Schema builder"_, que se utiliza para la gestión del esquema de la base de datos precisamente.

La forma en que funcionan las migraciones es describir en ficheros Php las acciones que se pretenden realizar, ya sea crear una tabla con las relaciones a otras tablas o modificar campos existentes o agregar nuevos campos a las tablas.

La herramienta de Artisan incluye comandos para crear migraciones, ejecutarlas y para hacer _rollback_ de las mismas.

# Modelos

Ahora que ya se entiende que son las migraciones, se procede a crear los modelos necesarios de acuerdo al diagrama de objetos que presenté anteriormente, y que se incluya junto con sus migraciones correspondientes.

Ahora estoy trabajando con un sistema de versionamiento (GIT) moveré mi proyecto a otra rama desde mi host anfitrión, es decir desde Windows para que cualquier cambio que realice pueda guardar el proyecto y las configuraciones con Vagrant.

# Aquí va una imagen

## Creación de modelo Person

Lo primero para escribir el modelo que se había planteado previamente es comenzar por los _"exteriores"_, es decir los que de ellos derivan otros modelos, en este casi sería el modelo de Persona, con el cual junto con él se hará una migración para crear una tabla para la base de datos que por convención Laravel llamará en plural _"People"_, conectado a la máquina virtual mediante vagrant ssh y dentro del directorio del proyecto ejecutar el siguiente comando para crear le modelo _"Person"_.

# Aquí va una imagen

Para crear el modelo necesario ejecutar el siguiente comando dentro del directorio del proyecto:

phpartisanmake:modelPerson−m

El flag de −m
 representa que se escribirá también la migración correspondiente para crear la tabla de _"People"_.

# Aquí va una imagen

Laravel nos da un código prescrito y con algunos ejemplos, así me puedo guiar para escribir los campos que necesita la tabla de People
.

# Aquí va una imagen

En la función up se llama al método estático create
 de la clase Schema el cual recibe dos argumentos, uno es el nombre de la tabla que se va a crear en éste caso people, y además recibe una función la cual por medio de la clase Blueprint, creará los campos necesarios para la tabla.

Además tiene otra función la cual es down, y este método se encarga de deshacer las migraciones en la base datos, es lo contrario de la acción que se está ejecutando, en este caso, sería eliminar la tabla de nombre people.

## Creación del modelo User

Para la creación modelo user
 y su relación de uno a uno con la entidad person, es necesario agregar en la migración para la crear la tabla user una llave foránea.

Antes de ello es necesario borrar la migración y el modelo que viene prescrito en Laravel como ejemplo, si no, no se podrá crear otro modelo.

Creando la migración con el siguiente comando:

phpartisanmake:modelUser−m

# Aquí va una imagen

Para la relación de uno a uno se le crea la llave foránea para la tabla de users
, de la siguiente forma:

# Aquí va una imagen

Como se puede ver en el código anterior, se agrega el campo para la llave foránea el cual por convención se usa el id
 de la tabla que ahora se llama people, la función de onDelete, significa que cuando se elimine a una persona, se eliminará con él las referencias que tiene con él, es decir al borrar a un registro de People también se eliminará su usuario correspondiente.

Pero con esto no es suficiente, dentro de los modelos Person y User, se tiene que describir que la persona tiene un usuario y un usuario pertenece a una persona, de la siguiente forma.

Para el modelo de Person.

# Aquí va una imagen

En el código anterior se le asigna por medio de la función user
, y la función hasOne que tiene un usuario.

Y para el modelo User la descripción para que identifique que pertenece a una persona, de la siguiente forma:

# Aquí va una imagen

Ahora que se tienen los dos modelos y las descripciones de las tablas, es necesario realizar las migraciones usando el siguiente comando.

# Aquí va una imagen

Y para probar que todo funciona se puede utilizar a tinker
 el cual es una herramienta que viene instalada junto con Laravel.

Comando: phpartisantinker

Se puede tratar de crear un nuevo usuario pero al guardarlo mostrará un error ya que se requiere que primero exista una persona para asociarlo a ese usuario.

# Aquí va una imagen

Es necesario crear entonces primero a una persona para poder asociarlo.

# Aquí va una imagen

Ahora que la persona existe, se puede crear al usuario llenando la clave foránea.

# Aquí va una imagen

Si se quisiera hacer una consulta, se haría de la siguiente forma y se podría ver la relación que existe.

# Aquí va una imagen

Laravel da la facilidad de recorrer por los atributos de las asociaciones de los modelos, o entidades, por ejemplo para saber cuál es el nombre de la persona que tiene el usuario se podría realizar de la siguiente forma:

# Aquí va una imagen

## Creación del modelo Post

Para la creación del post es lo mismo que se ha hecho con los anteriores modelos, sólo que aquí es una asociación de unoamuchos
, un usuario tiene varios posts y varios posts le pertenecen a un usuario, por lo tanto se debe de crear en la tabla Posts una llave foránea y en el modelo Post lo correspondiente para el modelo de User y Post de la siguiente manera.

Creando el modelo con la migración, comando: phpartisanmake:modelPost−m

# Aquí va una imagen

El código para la migración del Post
 quedaría de la siguiente forma:

# Aquí va una imagen

El código para el modelo de User
 sería el siguiente.

# Aquí va una imagen

Código de modelo Post

# Aquí va una imagen

Realización de las migraciones

# Aquí va una imagen

Para probar que realmente existen las relaciones correctas, se pueden crear los registros correspondientes.

Al igual que con el usuario si se trata de crear un nuevo post sin la asociación de un usuario, mostrará un error.

# Aquí va una imagen

# Aquí va una imagen

Ahora sí el post se creó con éxito y se le asignó un usuario. Para ver la información asociada a éste post se puede realizar lo siguiente.

# Aquí va una imagen

# Mostrando los datos en el navegador

Para mostrar los datos escritos que existen en la base de datos es necesario simplemente modificar el documento welcome.blade.php
 por ahora y dejarlo de la siguiente manera.

# Aquí va una imagen

Además de ello se debe de recuperar en este caso la variable que estamos utilizando, en este caso la variable $posts
, por el momento no utilizaré un controlador, sólo para fines demostrativos lo haré desde el archivo de rutas de la siguiente manera:

# Aquí va una imagen

Para ver el resultado es necesario volver a acceder desde el navegador para ver el resultado.

# Aquí va una imagen

