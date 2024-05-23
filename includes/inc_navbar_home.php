<!--Navbar ================================================== -->

<body >

    <div class="w-100">
        <!-- Ancho de navbar  -->
        <div class="col-lg-12">
            <!--Total ancho de la sección-->
            <div class="bs-component">
                <nav class="navbar navbar-expand-lg navbar-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand fs-3 "  class="routing" href="../views/home.php"><img class="imgLogo" src="<?php echo IMG . 'Logo Routing azul.png' ?>"  alt="logo" class="img-fluid"> Routing Software</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarColor01">
                            <ul class="navbar-nav me-auto">
                                <li class="nav-item" >
                                    <a class="nav-link" href="../views/registro.php"  >Registrar usuario

                                    </a>
                                </li>
                                <li class="nav-item " >
                                    <a class="nav-link " onclick="espe()" href="../views/estudiantes.php">Estudiantes</a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link " href="../views/conductores.php">Conductores</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="../views/vehiculos.php">Vehiculos</a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link " href="../views/rutas.php">Crear Ruta</a>
                                </li>

                            </ul>
                         
                            <li class="nav ">
                                <a class="nav-link " href="../index.php">Cerrar sesión<span> <i class="fas fa-sign-out-alt"> </i></span></a>
                            </li>

                             <input type="text" name="verCorreo"  id="verCorreo"  >

                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    <!--End Navbar================================================== -->
    <!-- <script src="../assets/js/main.js"></script> -->
    