<?php
require_once('../app/config.php');
require_once('../includes/inc_header_home.php');
require_once('../includes/inc_navbar_home.php');
?>
<body>

    <!--AQUI TENGO EL CONTENIDO PRINCIPAL-->

    <div class="container-fuid" style="width: 98%;">

        <div class="row ">
            <div class="col-lg-2  my-3">
                <div class="row">
                    <h2 style="font-size: 19px; margin-bottom: 60px;">Opciones de búsqueda</h2>

                    <!--  document search-->
                    <form class="d-flex" style="margin-left: -3px;">
                        <input class="form-control  me-2" type="search" placeholder="Ingrese documento!important" aria-label="Search">
                        <button class="btn btn-outline-light"  type="submit">Buscar</button>
                    </form>
                    



                </div>

            </div>

            <!-- container lista de estudiantes -->
            <div class="col-xl-10 bg-light  my-3">

                <div class="web-header ">
                    <h2 style="font-size: 50px; text-align: center;">Vehiculos Registrados</h2>
                    <button type="button" class="btn btn-secondary" id="BtnRegisterModal" data-bs-toggle="modal" data-bs-target="#Modal" class="btn "><span><i class="fas fa-plus"> </i> </span>Nuevo Vehículo</button>

                </div>
                <style>
                    .table th {
                        width: 1px !important;
                    }
                </style>
                <table class="table table-striped table table-bordered ">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Placa</th>
                        <th>Modelo</th>
                        <th>Capacidad</th>
                        <th>Conductor asignado</th>
                        <th>Ruta asignada</th>
                        <th>Zona asignada</th>
                        <th>Acciones</th>

                    </tr>
                    </thead>

                    <tbody id="vehiculos-table">


                    </tbody>
                </table>


            </div>
        </div>



    </div>
<!-- modal registro nuevo bootstrapp -->
    <!-- Modal -->
    <div class="modal " id="Modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title" id="exampleModalLabel">Registro de vehiculos nuevos</h3>
                   
                </div>
                <div class="modal-body">
                    <section class="modal-card-body">
                        <!-- Content ... -->

                        <form class="row g-3 needs-validation" id="register-vehiculo" >
                            <div class="col-md-4">
                                <label for="validationCustom01" class="form-label">Placa de vehículo</label>
                                <input  type="text" class="form-control" name="PlacaV" placeholder="Placa vehiculo" maxlength="6" minlength="6" >

                            </div>

                            <div class="col-md-4">
                                <label for="validationCustom01" class="form-label">Modelo</label>
                                <input type="text" class="form-control" type="text" name="Modelo" placeholder="Modelo" >

                            </div>
                            <div class="col-md-4">
                                <label for="validationCustom01" class="form-label">Capacidad</label>
                                <input type="text" class="form-control" type="text"name="Capacidad" placeholder="Capacidad" >

                            </div>
                            
                            <div class="col-md-4">
                                <label for="validationCustom01" class="form-label">Conductor asignado</label>
                                <input type="text" class="form-control" type="text" name="ConductoresV" placeholder="Conductor asignado " >

                            </div>

                            <div class="col-md-4">
                                <label for="validationCustom01" class="form-label">Ruta asignada</label>
                                <input type="text" class="form-control" type="email" name="RutaA" placeholder="Ruta asignada " >

                            </div>
             
                            <div class="col-md-4 ">
                                <label for="validationCustom01" class="form-label">Zona</label>
                                <!-- zonas -->
                                <select class="form-control " name="ZonaA" aria-label="Default select example" required>
                                    <option selected></option>
                                    <option value="Oriente">Zona Oriente</option>
                                    <option value="Occidente">Zona Occidente</option>
                                    <option value="Norte">Zona Norte</option>
                                    <option value="Sur">Zona Sur</option>

                                </select>
                            </div>

                           
                
                    </section>
                </div>
                <footer  class="modal-footer" >
                    
                        <button type="submit" data-bs-toggle="close" data-bs-target="#Modal" id="guardarNuevo"   class="btn btn-success">
                            <i class="fas fa-save "> </i> <span>Guardar</span> </button>
                            <button type="button" class="btn-close" id="CerrarRegisterModal" data-bs-dismiss="modal" aria-label="Close"></button>
                        </form>
                    </footer>
                </div>
            </div>
        </div>
    
<!-- modal bootstrapp -->

<!-- modal update bootstrapp -->
    <!-- Modal -->
    <div class="modal " id="Modal_updateC" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title" id="exampleModalLabel">Actualizar Vehículo</h3>
                   
                </div>
                <div class="modal-body">
                    <section class="modal-card-body">
                        <!-- Content ... -->

                        <form class="row g-3 needs-validation" id="updateFormC" >
                            <div class="col-md-4">
                                <label for="validationCustom01" class="form-label">Placa de vehículo</label>
                                <input  type="text" class="form-control" name="PlacaV" placeholder="Placa vehiculo" maxlength="6" minlength="6" >

                            </div>

                            <div class="col-md-4">
                                <label for="validationCustom01" class="form-label">Modelo</label>
                                <input type="text" class="form-control" type="text" name="Modelo" placeholder="Modelo" >

                            </div>
                            <div class="col-md-4">
                                <label for="validationCustom01" class="form-label">Capacidad</label>
                                <input type="text" class="form-control" type="text"name="Capacidad" placeholder="Capacidad" >

                            </div>
                            
                            <div class="col-md-4">
                                <label for="validationCustom01" class="form-label">Conductor asignado</label>
                                <input type="text" class="form-control" type="text" name="ConductoresV" placeholder="Conductor asignado " >

                            </div>

                            <div class="col-md-4">
                                <label for="validationCustom01" class="form-label">Ruta asignada</label>
                                <input type="text" class="form-control" type="email" name="RutaA" placeholder="Ruta asignada " >

                            </div>
             
                            <div class="col-md-4 ">
                                <label for="validationCustom01" class="form-label">Zona</label>
                                <!-- zonas -->
                                <select class="form-control " name="ZonaA" aria-label="Default select example" required>
                                    <option selected></option>
                                    <option value="Oriente">Zona Oriente</option>
                                    <option value="Occidente">Zona Occidente</option>
                                    <option value="Norte">Zona Norte</option>
                                    <option value="Sur">Zona Sur</option>

                                </select>
                            </div>

                           
                
                    </section>
                </div>
                <footer  class="modal-footer" >
                    
                        <button type="submit" data-bs-toggle="close" data-bs-target="#Modal" id="guardarNuevo"   class="btn btn-success">
                            <i class="fas fa-save "> </i> <span>Actializar</span> </button>
                            <button type="button" class="btn-close" id="CerrarRegisterModal" data-bs-dismiss="modal" aria-label="Close"></button>
                        </form>
                    </footer>
                </div>
            </div>
        </div>
    
<!-- modal bootstrapp -->










<script src="https://www.gstatic.com/firebasejs/8.6.1/firebase.js "></script> <!-- conexión a firebase -->
    <script src="https://www.gstatic.com/firebasejs/8.6.1/firebase-database.js "></script> <!-- conexión a firebase -->
   
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="<?php echo JS . 'vehiculos.js' ?>"></script> <!-- estudiantes  -->
    <script src="<?php echo JS . 'main.js' ?> "></script> <!-- main.js -->
    <!-- js booststrap -->
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"></script>

    <script src="<?php echo PLUGINS . 'waitMe/waitMe.min.js' ?>"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
   
</body>

</html>