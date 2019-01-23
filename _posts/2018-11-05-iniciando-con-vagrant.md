---
title: Iniciando con vagrant
curr_img_path: "/vagrant"
image: "/assets/img/vagrant/vagrant.png"
img_dir: "/assets/img/vagrant"
layout: layout_post
category: posts
publish_date: 2018-11-05 06:00:00 +0000
tags:
- vagrant
repository: ''
undefined: ''

---
Al tomar proyectos donde se necesitan herramientas y versiones específicas para esos desarrollos a veces se vuelve pesado, hace poco trabajé con Ruby 2.0.1 y la versión Rails 4, y tuve muchos dolores de cabeza por las versiones y las dependencias para las gemas que utilizaba el proyecto, ya que era un proyecto que no se le había dado mantenimiento durante unos dos años aproximadamente, pero ahora está vagrant.

## ¿Qué es vagrant?

Vagrant es una herramienta para crear entornos de desarrollo basado en máquinas virtuales, el cual ofrece una interfaz para crear servidores configurados e independientes del sistema operativo del desarrollador, además de ello elimina la necesidad de configuración por parte del desarrollador, es decir, inicialmente se crea la configuración que se va a tener para el desarrollo y las herramientas precisas que se utilizarán, el archivo de configuración se puede compartir con el
equipo de desarrollo, así cuando un desarrollador que le han compartido el archivo de configuración para levantar la máquina virtual, sólo tendrá que teclear unos cuantos comandos para poder comenzar a desarrollar si tener que preocuparse que si va a utilizar tal versión para cada cual...

Este archivo de configuración se puede agregar al repositorio, junto con los archivos de desarrollo utilizando Git.

## Instalación de Vagrant

La instalación la he hecho en mi sistema operativo Windows 10, para la instalación en este sistema operativo es una instalación típica de programas _siguiente_, _siguiente_...


## Uso de PuPHPet

Para la configuración de una máquina virtual puede resultar muy compleja, ya que se necesita conocer demasiados temas, se puede personalizar de acuerdo a las necesidades de cada desarrollo y quizás algunos sean bastante complejos, pero para desarrollos sin tanta configuración se puede utilizar una herramienta de nombre `PuPHPet` el cual es un sitio donde visualmente se genera la configuración y se descarga el archivo para sólo iniciar la máquina virtual con vagrant.

## Laravel y Vagrant

Últimamente me he enfocado en aprender el desarrollo utilizando Laravel, Laravel incentiva a los desarrolladores a trabajar con Vagrant para tener un ambiente de desarrollo listo y fácil de configurar y que la experiencia de desarrollo mejore con esto.

### Laravel homestead

Laravel homestead es una máquina virtual que viene lista para el desarrollo de proyectos con Laravel, permite ejecutar proyectos PHP sin necesidad de instalarlo nosotros mismos, ni MySQL, etc, es una caja lista con las herramientas necesarias.

### Agregar Box de Laravel Homestead

Para agregar la caja de homestead es necesario ejecutar el sigiente comando ya que se tiene instalado de forma correcta `VirtualBox` y `Vagrant`.

Comando: `vagrant box add laravel/homestead`

<a href="{{ site.baseurl }}{{ page.img_dir }}/agrega_box_laravel.JPG">
  <img class="img__responsive" src="{{ site.baseurl }}{{ page.img_dir}}/agrega_box_laravel.JPG" alt="Agrega el box de laravel" >
</a>


> Nota: El proceso tardará un rato, dependerá de la velocidad de la red...

### Comporobación que se ha instalado con exito

Comando: `vagrant box list`

<a href="{{ site.baseurl }}{{ page.img_dir }}/listar_boxes.JPG">
  <img class="img__responsive" src="{{ site.baseurl }}{{ page.img_dir}}/listar_boxes.JPG" alt="Lista los boxes que se han descargado" >
</a>

### Instalar Laravel Homestead en el directorio principal de Windows

Para instalar Laravel Homestead es necesario clonar su repositorio desde GitHub, indicando la versión deseada, en la página oficial de Laravel se indica que es recomendale clonar el repositorio en la carpeta principal, es decir, en la carpeta principal del usuario Windows, en mi carpeta en este caso.

Comando para clonar el repositorio: 

`git clone https://github.com/laravel/homestead.git ~/Homestead`

<a href="{{ site.baseurl }}{{ page.img_dir }}/clonacion_homestead.JPG">
  <img class="img__responsive" src="{{ site.baseurl }}{{ page.img_dir}}/clonacion_homestead.JPG" alt="Clonando  homestead en el directorio principal de windows" >
</a>


Ya clonado el repositorio, entramos en la carpeta y cambiamos a la rama de la versión que queremos utilizar en mi caso que estoy siguiendo la versión oficial de Laravel indica la versión de Homestead: `v7.18.0`, o también se puede trabajar con la versión por defecto en master del repositorio.

> Se pueden listar las versiones del repositorio usando el comando: `git tag`

Cambiando a la versión indicada usando el comando: `git checkout v7.18.0`

<a href="{{ site.baseurl }}{{ page.img_dir }}/cambiando_rama.JPG">
  <img class="img__responsive" src="{{ site.baseurl }}{{ page.img_dir}}/cambiando_rama.JPG" alt="Cambiando a la versión indidcada de homestead" >
</a>

Ahora es necesario ejecutar el siguiente comando dentro de la carpeta de homestead para que cree el archivo de configuración:  `Homestead.yml`.

Comando a ejecutar: `bash init.sh`

Y simplemente se obtiene un mensaje como el siguiente:

<a href="{{ site.baseurl }}{{ page.img_dir }}/bash_init.JPG">
  <img class="img__responsive" src="{{ site.baseurl }}{{ page.img_dir}}/bash_init.JPG" alt="Iniciando homestead" >
</a>

### Configuración de homestead

Ya que se ha creado el archivo de configuración de homestead, se puede abrir dentro de la carpeta de homestead y editar el archivo, según las preferencias y necesidades del proyecto.

<a href="{{ site.baseurl }}{{ page.img_dir }}/configuracion_homestead.JPG">
  <img class="img__responsive" src="{{ site.baseurl }}{{ page.img_dir}}/configuracion_homestead.JPG" alt="Configuración de homestead" >
</a>

Para windows de preferencia se puede agregar la dirección y un dominio editando el archivo `hosts`.

<a href="{{ site.baseurl }}{{ page.img_dir }}/modificando_hosts.JPG">
  <img class="img__responsive" src="{{ site.baseurl }}{{ page.img_dir}}/modificando_hosts.JPG" alt="Modificando hosts" >
</a>

## Iniciar la máquina virtual

Para iniciar la máquina virtual es necesario posicionarnos en el directorio de homestead y levantar la máquina con el siguiente comando:

Comando: `vagrant up`

Esto iniciará nuestro proveedor que elegimos el inicio, en mi caso VirtualBox, e iniciará con la importación de la máquina virtual y sus configuraciones.

<a href="{{ site.baseurl }}{{ page.img_dir }}/iniciando_vb.JPG">
  <img class="img__responsive" src="{{ site.baseurl }}{{ page.img_dir}}/iniciando_vb.JPG" alt="Iniciando VirtualBox" >
</a>

Si se abre el VirtualBox se podrá ver ahora cómo la máquina virtual está corriendo.

<a href="{{ site.baseurl }}{{ page.img_dir }}/vagrant_corriendo.JPG">
  <img class="img__responsive" src="{{ site.baseurl }}{{ page.img_dir}}/vagrant_corriendo.JPG" alt="Vagrant corriendo" >
</a>

### Conectando al navegador

Ahora es posible entrar al navegador desde windows para probar que el sitio está arriba exitosamente.

<a href="{{ site.baseurl }}{{ page.img_dir }}/navegador_noinput.JPG">
  <img class="img__responsive" src="{{ site.baseurl }}{{ page.img_dir}}/navegador_noinput.JPG" alt="Navegador sin entrada" >
</a>

Se puede ver en la imagen que muestra un mensaje, "no input file specified", y eso es porque ya está la configuración de la máquina virtual, pero aún no se ha creado nungún proyecto.

## Iniciando una instalación de Laravel

Para iniciar un proyecto en laravel podemos ejecutar el siguiente comando:

Comando: `composer require laravel/homestead --dev`

Una vez instalado Laravel, hay que ejecutar la siguiente orden para generar un archivo `Vagrantfile` donde automáticamente se configurará el archivo `Homestead.yaml`.

Comando en Linux: `php vendor/bin/homestead make`

> En este punto yo tuve un incidente y no pude ejecutar el comando para linux a pesar de que estaba usando `bash` para windows, así es que lo recomendable en mi caso fue ejecutar el comando para windows desde un `CMD`.

Comando en windows: `vendor\\bin\\homestead make`

Cuando se tenga el archivo de configuración `Homestead.yaml` se podrán hacer las modificaciones necesarias, ahí se pueden hacer diferentes carpetas virtuales para que sean compartidas en nuestro directorio de windows y poder ejecutar el trabajo habitual de desarrollo.

Archivo `Homestead.yaml`

```yaml
ip: 192.168.10.10
memory: 2048
cpus: 2
provider: virtualbox
authorize: ~/.ssh/id_rsa.pub
keys:
    - ~/.ssh/id_rsa
folders:
    -
        map: 'C:\Users\Angel\GitHub\Php\firstapp'
        to: /home/vagrant/code
sites:
    -
        map: homestead.test
        to: /home/vagrant/code/firstapp/public
databases:
    - homestead
name: firstapp
hostname: firstapp
```

Dentro del arreglo de folders es donde se compartirán las carpetas virtuales del ambiente de desarrollo con las carpetas de desarrollo de nuestro sistema operativo anfitrión.

Cada que se necesite crear otro proyecto se tendrá que crear otra carpeta y que apunte a otro sitio, esto significa que el ambiente está compartido con otros proyectos que tenemos en ese box.

## Crear un ambiente de desarrollo independiente

Lo más común es crear un ambiente de desarrollo independiente donde se pueda compartir el archivo Vagrant para que se pueda compartir entre el equipo de desarrollo.

Entonces para ello debemos de colocarnos en un directorio donde deseemos trabajar y ejecutar el siguiente comando:

En mi caso hice una carpeta de nombre: `firstapp` y ejecuté el siguiente comando.

Comando: `composer require laravel/homestead --dev`

<a href="{{ site.baseurl }}{{ page.img_dir }}/independiente_resultado.JPG">
  <img class="img__responsive" src="{{ site.baseurl }}{{ page.img_dir}}/independiente_resultado.JPG" alt="Resultado de crear un box por aplicación" >
</a>

Ahora es necesario generar el archivo `Vagrantfile`, ejecutando el comando para windows en mi caso.

Comando: `vendor\\bin\\homestead make`

<a href="{{ site.baseurl }}{{ page.img_dir }}/generando_vagrantfile.JPG">
  <img class="img__responsive" src="{{ site.baseurl }}{{ page.img_dir}}/generando_vagrantfile.JPG" alt="Generanto el archivo vagrantfile" >
</a>


Ahora podemos iniciar la máquina para después conectarnos mediante `SSH`.

Comando: `vagrant up`

<a href="{{ site.baseurl }}{{ page.img_dir }}/importando_box.JPG">
  <img class="img__responsive" src="{{ site.baseurl }}{{ page.img_dir}}/importando_box.JPG" alt="Importando box" >
</a>

Cuando se abre VirtualBox se puede ver cómo se ha importado el box y se ha iniciado la ejecución de la máquina virtual.

<a href="{{ site.baseurl }}{{ page.img_dir }}/importando_box_2.JPG">
  <img class="img__responsive" src="{{ site.baseurl }}{{ page.img_dir}}/importando_box_2.JPG" alt="Importando box" >
</a>

Para conectarnos a la máquina virtual simplemente es necesario ejecutar el siguiente comando:

Comando: `vagrant ssh`

Vagrant hace _magia_ y se conecta automáticamente con las llaves que tenemos previamente generadas en nuestro sistema anfitrión.

<a href="{{ site.baseurl }}{{ page.img_dir }}/conexion_ssh.JPG">
  <img class="img__responsive" src="{{ site.baseurl }}{{ page.img_dir}}/conexion_ssh.JPG" alt="Conexión mediante ssh" >
</a>


Ahora sí es es posible instalar Laravel ejecutando el siguiente comando dentro de la carpeta `code`, justo como está en la configuración inicial de `Homestead.yaml`:

Comando: `laravel new firstapp`

<a href="{{ site.baseurl }}{{ page.img_dir }}/instalando_laravel.JPG">
  <img class="img__responsive" src="{{ site.baseurl }}{{ page.img_dir}}/instalando_laravel.JPG" alt="Instalación de Laravel" >
</a>

Al momento de probar en este punto entrando al navegador, veo que me aparece un mensaje de `No input file specified`, y es que hasta este punto para la creación de un ambiente por proyecto, no he editado ni configurado el archivo `Homestead.yml`, por lo cual me debería de quedar de la siguiente manera como lo tengo en mi máquina virtual.

```yaml
ip: 192.168.10.10
memory: 2048
cpus: 1
provider: virtualbox
authorize: ~/.ssh/id_rsa.pub
keys:
    - ~/.ssh/id_rsa
folders:
    -
        map: 'C:\Users\Angel\GitHub\Php\firstapp'
        to: /home/vagrant/code
sites:
    -
        map: homestead.test
        to: /home/vagrant/code/firstapp/public
databases:
    - homestead
name: firstapp
hostname: firstapp
```

> Nota, para este caso también es importante configurar el archivo  `hosts` para registrar el dominio.

Ahora es necesario reiniciar la máquina virtual para que tome la nueva configuración y después probar el resultado.

Pero en mi caso apagaré primero la máquina y después la iniciaré con el siguiente comando:

Apagar la máquina virtual: `vagrant halt`

> ¡Importante! Es importante iniciar la máquina virtual con los siguientes parámetros para que inicie los servicios necesarios en la máquina virtual.

Iniciar la máquina: `vagrant up --provision`


Finalmente probar entrando al navegador y se podrá ver que Laravel está instalado y corriendo.

<a href="{{ site.baseurl }}{{ page.img_dir }}/laravel_up.JPG">
  <img class="img__responsive" src="{{ site.baseurl }}{{ page.img_dir}}/laravel_up.JPG" alt="Laravel corriendo" >
</a>

## Conclusión

En conclusión este tipo de ambientes para el desarrollo son muy útiles cuando se necesita trabajar con alguna versión en específico y que actualemente no tenga soporte, por ejemplo versiones antiguas de Ruby o Python, aunque el proceso para formar una máquina virtual con todas las herramientas necesarias es algo pesado y tedioso, pero con esto se simplifica un poco más, pero aún tiene sus limitaciones.