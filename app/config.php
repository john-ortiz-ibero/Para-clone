<?php
// definición de constantes para URL
define('PORT', '8848');//puerto
define('BASEPATH','/Ejercicio/');//Nombre del archivo donde se encuentra el ejercicio
define('URL','http://127.0.0.1:'.BASEPATH);//url del ejercicio    se suprime .PORT antes de .BASEPATH es decir amtes estaba .PORT.BASEPATH

// Definición de constantes para folders

define('DS', DIRECTORY_SEPARATOR); // barra de separación
define('ROOT',getcwd().DS);//dirección de directorio
define('APP', ROOT.'app'.DS);//folder pp
define('INCLUDES', ROOT.'includes'.DS);//folder includes
define('VIEWS',ROOT.'views'.DS);//folder views


//constanres dinámicas de assets

define('ASSETS', URL.'assets/');
define('CSS', ASSETS.'css/');
define('CSS_DATATABLE', ASSETS.'css_datatable/');
define('IMG', ASSETS.'img/');
define('JS', ASSETS.'js/');

define('PLUGINS',ASSETS.'plugins/');


