

<!DOCTYPE html>
<html lang="en">
<head>

<?php
require_once '../app/config.php';
require_once '../includes/inc_header_home.php';
require_once '../includes/inc_navbar_home.php';
?>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro de Usuario</title>
</head>
<body>
    
        <!-- Registro -->
       <div class="container " style="width: 600px; background-color: #D3D9D7  ;   font-family: Times New Roman, Times, serif; margin-top: 80px; border-radius: 20px;" >
       <div class="modal-header">
                        <h5 class="modal-title" style="font-size: 40px;" id="exampleModalLabel">Registro de Usuario</h5>
                       
                    </div>
                    <div class="modal-body">


                       <form >
                       <div class="mb-3 row">

<div class="col-sm-10">

    <input type="email" id="email2" placeholder="Ingrese su Correo" minlength="10" class="form-control">
</div>

</div>

<div class="mb-3 row">

<div class="col-sm-10">

    <input type="password" id="pass2" class="form-control" placeholder="Ingrese su contraseña">
</div>
</div>

<div class="mb-3 row">

<div class="col-sm-10">

    <input type="password" id="Confipass" class="form-control" placeholder="Confirmar contraseña">
</div>
</div>

</div>



<div class="mb-3 row">

<button onclick="Registrar()" type="button" data-bs-dismiss="modal" class="btn btn-primary" style="font-size: 20px;">Registrarse</button>
<!--Utilizo la clase data-bs-dismiss="modal" para que al registrar o loguearse desaparesca el modal-->
</div>
                       </form>

                       
          
       </div>
                   


       <script src="https://www.gstatic.com/firebasejs/8.6.1/firebase.js "></script> <!-- conexión a firebase -->
  <script src="https://www.gstatic.com/firebasejs/8.6.1/firebase-database.js "></script> <!-- conexión a firebase -->
 
  <!-- js booststrap -->
  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
  <script src="<?php echo PLUGINS . 'waitMe/waitMe.min.js' ?>"></script>
  <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  <script src="<?php echo JS . 'traerRutas.js' ?>"></script> <!-- estudiantes  -->
  <script src="<?php echo JS . 'main.js' ?> "></script> <!-- main.js -->
</body>
</html>