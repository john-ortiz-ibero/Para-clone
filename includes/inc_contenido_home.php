<!--Contenido home ================================================== -->
<div class="w-100" >
<div class="container-fluid my-3 mx-2" id="pruebita">

<!-- <p class="nav-link" style="font-size: 50px!important; cursor: pointer; text-align: center!important;  font: oblique bold 120% cursive;" href="#" onclick="mensajeInstructivo()"  >para que sirve y como usar el sistema?

</p> -->

<div class="row">
  <div class="col-lg-5   flex-wrap" style="border-radius: 25px; background-color:#A9CCE3 ; ">
   <h3 class="titulos">Rutas Creadas </h3>
    <div class="row">
   
      <div class="container-fluid">
        <table class="table table-striped table table-bordered table-hover" id="myTable" style="cursor: pointer;">
          <thead>
          <th>Id</th>
            <th data-toggle="modal" data-target="#exampleModal">Referencia de la ruta</th>
            <th>Nombre de la ruta</th>
            <th>Vehiculo Asignado</th>
            <th>Acciones</th>
            
          
          </thead>


          <tbody class="tablaRutas" id="myTable">
   

          </tbody>

        </table>
          <!-- end nort rout -->
          <br>



      </div>
 

    </div>
  </div>
<!-- Instructivo  -->
  <div class="col-lg-6 bg-light"  style="border-radius: 25px;  ">
    <div class="row">
 
    <div class="card" style="width: 18rem; margin-top: 10px;background-color: #D4D5D6;">
  <img src="<?php echo IMG .
      'Students.jpg'; ?>" class="card-img-top my-2" alt="...">
  <div class="card-body">
    <h5 class="card-title"> Paso 1 - Registrar estudiantes</h5>
    <p class="card-text">¿Como registrar estudiantes?</p>
    <a href="#"data-bs-toggle="modal" data-bs-target="#T1" class="btn btn-primary">Leer tutorial</a>
  </div>
</div>
<div class="card" style="width: 18rem; margin-top: 10px; background-color: #D4D5D6;">
  <img src="<?php echo IMG .
      'Conductor.jpg'; ?>" class="card-img-top my-2 " alt="...">
  <div class="card-body">
    <h5 class="card-title"> Paso 2 - Registrar conductores</h5>
    <p class="card-text">¿Como registrar Conductores?</p>
    <a href="#" data-bs-toggle="modal" data-bs-target="#T2" class="btn btn-primary">Leer tutorial</a>
  </div>
</div>
<div class="card" style="width: 18rem; margin-top: 10px; background-color: #D4D5D6;">
  <img src="<?php echo IMG .
      'Buses.jpg'; ?>" class="card-img-top my-2" alt="...">
  <div class="card-body">
    <h5 class="card-title"> Paso 3 -  Registrar  vehículos</h5>
    <p class="card-text">¿Como crear rutas?</p>
    <a href="#" data-bs-toggle="modal" data-bs-target="#T3" class="btn btn-primary">Leer tutorial</a>
  </div>
</div>
<div class="card" style="width: 18rem; margin-top: 10px; background-color: #D4D5D6;">
  <img style="height: 180px;" src="<?php echo IMG .
      'imgRuta.jpg'; ?>" class="card-img-top my-2" alt="...">
  <div class="card-body">
    <h5 class="card-title"> Paso 4 - Crear Rutas</h5>
    <p class="card-text">Que se crea una ruta?</p>
    <a href="#" data-bs-toggle="modal" data-bs-target="#T4" class="btn btn-primary">Leer tutorial</a>
  </div>
</div>
<div class="card" style="width: 18rem; margin-top: 10px; background-color: #D4D5D6;">
  <img src="<?php echo IMG .
      'Home.jpg'; ?>" class="card-img-top my-2" alt="...">
  <div class="card-body">
    <h5 class="card-title"> Paso 5 - Home</h5>
    <p class="card-text">Que puedo hacer en Home?</p>
    <a href="#" data-bs-toggle="modal" data-bs-target="#T5" class="btn btn-primary">Leer tutorial</a>
  </div>
</div>



    </div>
  </div>
  <!-- Fin instructivo -->

</div>



</div>



</div>



<!-- Modal Rutas -->
<div class="modal fade" id="modalRutas" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Imprimir ruta</h5>
     
    
      </div>
      <div class="modal-body">
      <table class="table table-striped table-hover">   
        <thead>
          
          <th >Rerefencia de ruta</th>
          <th class="table-secondary">Nombre de ruta</th>
          <th >Puntos de recogida</th>
          <th class="table-secondary">Vehiculo Asignado</th>

        </thead>
        <tbody id="tablaImrimirModal">

        </tbody  >
     
      </table>



      
      </div>
      <div class="modal-footer">
        <button type="button" onclick="cerrarModal()" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="button"  onclick=" impresionRuta()"  class="btn btn-primary">Imprimir</button>
      </div>
    </div>
  </div>
</div>

<!-- modal Tutorial 1 -->


<!-- modal rutas -->
 <!-- Modal T-->
 
 <div class="modal fade" id="T1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title" id="staticBackdropLabel">RUTA</h2>

      </div>
      <div class="modal-body">
<p>3.3.	 Interfaz de Estudiantes: <br>
La interfaz de estudiantes está compuesta por dos secciones o bloques, en la primera sección se encuentran una 
lista de opciones de filtración de datos para realizar búsquedas específicas, la búsqueda se realizará dependiendo de las opciones escogidas, Estas opciones son: 
formulario para digitar la búsqueda con su respectivo botón de envío, <img style="width: 700px; height: 250;" src="<?php echo IMG .'tutorial1.png' ?>" alt=""> <br> un select con información de las zonas, un select con información de jornada y un select con información del grado en curso.
 En la segunda sección se encuentra un botón, el cual al presionar clic sobre él, despliega una ventana modal con un formulario que contiene unos campos, estos campos deben de estar llenos en su totalidad para ejecutar el registro de un nuevo estudiante, un botín de guardar, y un botón de cerrar modal (X), si al momento de registrar un usuario alguno de los campos están vacíos a excepción del campo Segundo apellido, se mostrará un mensaje de error el cual indica que existen campos vacíos, de lo contrario al presionar clic en guardar se registrará un nuevo usuario en la base de datos, y seguido del botón van apareciendo en una tabla los estudiantes que se han registrado, cada uno acompañado de un botón de editar y un botón de eliminar, el botón editar, permite las edición o actualización de la información registrada de un estudiante. El botón eliminar muestra un mensaje de confirmación para continuar o declinar la eliminación del estudiante. La aparición de los nuevos estudiantes en la tabla es automática dependiendo de los estudiantes registrados y siempre funciona en tiempo real.
 
 
</p>


<img style="width: 700px; height: 250;" src="<?php echo IMG .'tutorial1.5.png' ?>" alt="">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
       
      </div>
    </div>
  </div>
</div>

<!-- fin modal  -->
<!-- modal Tutorial 2 -->

 
 <div class="modal fade" id="T2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title" id="staticBackdropLabel">RUTA</h2>

      </div>
      <div class="modal-body">
     ...........
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
       
      </div>
    </div>
  </div>
</div>

<!-- fin modal  -->


<!-- modal Tutorial 3 -->

 
<div class="modal fade" id="T3" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title" id="staticBackdropLabel">RUTA</h2>

      </div>
      <div class="modal-body">
     ...........
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
       
      </div>
    </div>
  </div>
</div>

<!-- fin modal  -->

<!-- modal Tutorial 4 -->

 
<div class="modal fade" id="T4" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title" id="staticBackdropLabel">RUTA</h2>

      </div>
      <div class="modal-body">
     ...........
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
       
      </div>
    </div>
  </div>
</div>

<!-- fin modal  -->

<!-- modal Tutorial 5 -->

 
<div class="modal fade" id="T5" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title" id="staticBackdropLabel">RUTA</h2>

      </div>
      <div class="modal-body">
    <P>
   <b> Interfaz Home: </b> <br>
En la interfaz home está compuesta de la siguiente manera: <br> En la parte superior se encuentra una barra de navegación con diferentes opciones el cual dependiendo en cual se presione clic dirige a una interfaz específica <br> esta barra se encuentra en todas las interfaces y es exactamente la misma por ente solo se explica su funcionamiento en esta interfaz de home debido a que en las demás interfaces funciona de la misma manera.
 Posteriormente en la parte del cuerpo de la interfaz se encuentran dos columnas en la primera es una tabla el cual contiene las rutas que se han creado, cabe anotar que si no se han creado rutas o se han eliminado esta sección <br> aparecerá vacía.
cada ruta aparece con una referencia un nombre, un vehículo asignado, un botón de ver o editar y otro de eliminar. De acuerdo con lo anterior, para visualizar una ruta solo bastará con presionar clic el botón ver y se abrirá <br> una ventana modal que contiene los puntos de parada que se establecieron al momento de crear la ruta, acompañado de su información correspondiente.
Si se desea eliminar una ruta, se debe presionar clic en el botón eliminar, el sistema le muestra un mensaje de confirmación de la eliminación si la acción que desea es eliminar, entonces, se debe presionar el botón de <br> confirmar, de lo contrario se presiona en botón de cancelar.
 
En la segunda sección se encuentran unas opciones con instrucciones de uso del programa el cual le informará dependiendo de la que escoja sobre el funcionamiento del específico de una de las interfaces, esto se hace con <br> el fin de que el usuario tenga esa información siempre disponible. 

    </P> 
    <img style="width: 700px; height: 250;" src="<?php echo IMG .'tutorial5.png' ?>" alt="">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
     
      </div>
    </div>
  </div>
</div>

<!-- fin modal  -->



<script src="https://www.gstatic.com/firebasejs/8.6.1/firebase.js "></script> <!-- conexión a firebase -->
<script src="https://www.gstatic.com/firebasejs/8.6.1/firebase-database.js "></script> <!-- conexión a firebase -->
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>

<!-- datatables -->
 
<script type="text/javascript" src="https://cdn.datatables.net/v/bs5/dt-1.11.3/r-2.2.9/datatables.min.js"></script>

<!-- js booststrap -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"></script>

<script src="<?php echo PLUGINS . 'waitMe/waitMe.min.js'; ?>"></script>
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>

<script src="<?php echo JS . 'traerRutas.js'; ?>"></script>


</footer>
</div>
<!--End fotter -->
</body>

<!-- End Contenido home================================================== -->