---
layout: page2
title: Conexión a MySQL con Php
date: "2017-11-15 22:30:10"
note: true
categories: notas
published: true
description: Realización de una conexión a base de datos MySQL con Php.
---


Para una conexión a base de datos con Php es necesario crear una clase para obtener una instancia de ésta.

``` php

global $config;

$config = include(dirname(__FILE__).'/../config/Database.php');

class Database
{
    private $mysqli;

    public function __construct()
    {
    }


    public function connect()
    {
        $val = false;

        global $config;

        try {
            $this->mysqli = new mysqli(
                $config['hostname'],
                $config['username'],
                $config['password'],
                $config['database']
            );

            if ($this->mysqli->connect_error) {
                printer("No se ha posido establecer la conexión a la base de datos");
            } else {
                printer("Conexión establecida con la base de datos");
                $val = true;
                return $this->mysqli;
            }
        } catch (Exception $e) {
            die("<br>Error en la conexión de base de datos: " . $e->getMessage()."<br>");
        }

        return $val;
    }

    public function close()
    {
        $val = false;

        if (isset($this->mysqli)) {
            $this->mysqli->close();
            $val = true;
        }

        return $val;
    }
}
```

La variable que se está declarando explícitamente como global, de nombre **config**, se está declarando de esta manera porque los datos para la conexión se están 'importando' desde un archivo llamado **Database** pero dentro de otra carpeta en mi ordenador y está de la siguiente manera.

```php
/*
 * ------------------------------------------------------
 * CONFIGURACIÓN DE LA BASE DE DATOS
 * ------------------------------------------------------
 *
 * Las siguientes variables, son para establecer la
 * conexión con la base de datos.
 */
return $config = array(
  'hostname' => 'localhost',
  'username' => 'root',
  'password' => 'master',
  'database' => 'biblioteca'
);
```

Esta variable **config** se tiene que declarar de forma global cuando se está importando y nuevamente, antes de ser utilizada dentro de la clase, si no se hiciera así, el compilador lanzaría un error de variable no definida.

Para crear una instancia, o una conexión a la base de datos simplemente basta con la realización del siguiente código.
```php
$db = new Database();
$db->connect();
```
