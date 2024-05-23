<?php
require_once('../app/config.php');
require_once('../includes/inc_header_home.php');
require_once('../includes/inc_navbar_home.php');
?>
<link rel="stylesheet" href="<?php echo CSS . 'rutas.css' ?>">

<body>



    <div class="container-fuid" style="width: 98%;">








        <div class="row ">

            <!-- container lista de estudiantes -->
            <div class="col-xl-7 bg-light  my-3" style="background-color: #D5D8DC!important ;">

                <div class="web-header ">
                    <h5 style="font-size:  40px; text-align: center; color: #000000;">Puntos de recogida</h5>


                </div>
                <style>
                    .table th {
                        width: 1px !important;
                    }
                </style>
                <table class="table table-striped table table-bordered "   id="student-table">
                  

                    <thead>
                        <tr>
                            <th></th>
                           
                            <th>Código estudiante</th>
                            <th>Nombre</th>
                            <th>Zona</th>
                            <th>Dirección</th>
                            <th>Jornada</th>
                            
                            

                        </tr>
                    </thead>

                    <tbody >


                    </tbody>


                </table>
                <div class="row ">
                    <div class="col-md-4">
                        <label for="exampleFormControlInput1 " style="color: #000000!important;" class="form-label">Punto de partida</label>
                        <select class="form-control  me-2  " id="start">
                            <option value="4.683955417279325, -74.15442457356735">Colegio Maria Auxiliadora</option>
                            <option value="4.679966185167474, -74.15171448764353">Colegio Nuestra Señora del Carmen</option>
                            <option value="4.683248992417085, -74.14771189920218">Liseo 23</option>

                        </select>
                    </div>
                    <div class="col-md-4">
                        <label for="exampleFormControlInput1 " style="color: #000000!important;" class="form-label">Punto de llegada</label>
                        <select class="form-control  me-2  " id="end">
                            <option value="4.683955417279325, -74.15442457356735">Colegio Maria Auxiliadora</option>
                            <option value="4.679966185167474, -74.15171448764353">Colegio Nuestra Señora del Carmen</option>
                            <option value="4.683248992417085, -74.14771189920218">Liseo 23</option>
                        </select>

                    </div>
                    <div class="col-md-4">
                        <button type="submit" id="submit" class="btn btn-secondary" i class="btn  " style="margin-top: 30px;">Enviar ruta</button>
                    </div>


                </div>
           
                <input type="hidden" name="waypoints" id="waypoints">



            </div>



            <div class="col-lg-5  my-3" style="background-color: #AED6F1 ;">

                <form class="row g-3 needs-validation" id="ruta-form" novalidate>
                    <div class="form-floating">
                        <textarea style="height: 530px;" class="form-control" name="Rutas" placeholder="Leave a comment here" id="directions-panel" style="height: 100px"></textarea>

                    </div>

                    <div class="col-md-4">
                        <label for="validationCustom02" class="form-label">Referencia de ruta</label>
                        <input type="text" class="form-control"  placeholder="Referencia de ruta" name="ReferenciaRuta" value="" required>

                    </div>




                    <div class="col-md-4">
                        <label for="validationCustom01" class="form-label">Nombre de ruta</label>
                        <input type="text" class="form-control" name="NombreRuta" value="" placeholder="Nombre de ruta" required>

                    </div>
                   
                    <div class="col-md-4">
                        <label for="validationCustom02" class="form-label">Bus asignado</label>
                        <input type="text" class="form-control" placeholder="AAA123" name="VehiculoRuta" value="" required>

                    </div>
                    <div class="col-md-4" style="margin-top: 10px;">
                        <button class="btn btn-primary" style="background-color: #003566;" type="submit">Guardar ruta</button>
                    </div>
                </form>

            </div>


        </div>

    </div>


    <div class="container-fuid" style="width: 99.5%; margin: 5px; height: 600px;" id="map"></div>






    <script src="https://www.gstatic.com/firebasejs/8.6.1/firebase.js "></script> <!-- conexión a firebase -->
    <script src="https://www.gstatic.com/firebasejs/8.6.1/firebase-database.js "></script> <!-- conexión a firebase -->

    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/v/bs5/dt-1.11.3/r-2.2.9/datatables.min.js"></script>
    <script src="<?php echo JS . 'Rutas.js' ?>"></script> <!-- estudiantes  -->
    <script src="<?php echo JS . 'main.js' ?> "></script> <!-- main.js -->
<!-- ----------------------- -->

<!-- ----------------------- -->





    <!-- js booststrap -->
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"></script>

    <script src="<?php echo PLUGINS . 'waitMe/waitMe.min.js' ?>"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <!-- appi maps -->
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD5lM-QSTLa9sHRnmbtyXCOVusadF8-znE&libraries=places&callback=initMap&libraries=&v=weekly" async></script>

</body>

</html>