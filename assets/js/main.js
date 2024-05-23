function Registrar() {

    var pass2 = document.getElementById('pass2').value;
    var Confipass = document.getElementById('Confipass').value;
    if (pass2 != Confipass) {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Las contraseñas no coinciden!',
           
          })
          limpiarCamposRegistro()

    } else {


        var email2 = document.getElementById('email2').value;
        var contraseña2 = document.getElementById('pass2').value;


        firebase.auth().createUserWithEmailAndPassword(email2, contraseña2)

        .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                // ...
                // relatedTarget
                 

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Usuario Registrado con exito!',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  
               
                 

            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Usuario ya existe o campos vacios! ',
                   
                  })
                  limpiarCamposRegistro()
                // ..
            });

    }
}

function limpiarCamposRegistro(){
    document.getElementById('email2').value="";
    document.getElementById('pass2').value="";
    document.getElementById('Confipass').value="";
}



function Ingreso() {
    var email = document.getElementById('email').value;
    var contraseña = document.getElementById('pass').value;

    firebase.auth().signInWithEmailAndPassword(email, contraseña)
        .then((userCredential) => {
            // Signed in
             
            var user = userCredential.user;

            Swal.fire({
                title: 'Este software permite la creación de rutas escolares. Para ello es obligatorio inicialmente el registro de Estudiantes, Conductores y Vehículos. En la sección derecha de ésta interfáz encontrarás el orden de los pasos para poder crear una ruta. ',
                width: 800,
                padding: '5em',
           
             
              
              })
            
            ver(); // con este metodo me logeo
           
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Usuario o contraseña incorrectos!',
                
              }).error.message

           
        });
}

function Observador() {
    // [START auth_state_listener]
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {

            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User

            var uid = user.uid;
            console.log("Existen Usuarios conectados")
            

        } else {
            // User is signed out
            console.log("No existen Usuarios conectados")
        }

    });
    // [END auth_state_listener]
}
Observador();



function ver() { //etodo que se llma despues desde login 
    
    window.location = "views/home.php";


  


}
function verCorreo(){
    // var email = document.getElementById('email').value;
    $('#verCorreo').val('jhonfo2941@gmail.com');
  }
  verCorreo();