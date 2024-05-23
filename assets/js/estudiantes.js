// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBe_Pi-nSg74nIapFqjfiLUUN_KpwJ80zQ",
  authDomain: "proyecto-de-grado-241e6.firebaseapp.com",
  databaseURL: "https://proyecto-de-grado-241e6-default-rtdb.firebaseio.com",
  projectId: "proyecto-de-grado-241e6",
  storageBucket: "proyecto-de-grado-241e6.appspot.com",
  messagingSenderId: "1081006318787",
  appId: "1:1081006318787:web:6c017772eaa614c0e22e76",
};

var arrayDocumento=[];
const openModal = document.getElementById("BtnRegisterModal"); //BTN MODAL GENERAL
const modal = document.getElementById("Modal"); //MODAL GENERAL
const closeModal = document.getElementById("CerrarRegisterModal"); //GENERAL
const registerForm = document.getElementById("register-form"); //ESTUDIANTES
const studentsTable = document.getElementById("students-table"); //ESTUDIANTES
const updateModal = document.getElementById("Modal_update");
const updateForm = document.getElementById("updateForm");

firebase.initializeApp(firebaseConfig);

const studentRef = firebase.database().ref("students"); //ESTUDIANTES


// evento para abrir y cerrar modal
const ShowRegisterModal = () => {
  $("#Modal").modal("show");
};
// cerrar modal de actualizar
const cerrarmodal = () => {
  $("#Modal_update").modal("hide");
};
// modal actualizar
const ShowActualizarModal = () => {
  $("#Modal_update").modal("show");
};


const deleteStudents = (uid) => {
  firebase.database().ref(`students/${uid}`).remove();
};

// carga de estudiantes a interfaz
window.addEventListener("DOMContentLoaded", async (e) => {
  studentsTable.innerHTML = ``;
  await studentRef.on("value", (students) => {
    studentsTable.innerHTML = ``;
    students.forEach((student) => {
      let studentData = student.val();
      studentsTable.innerHTML += `<tr>

      <th>#</th>
      <td>${studentData.Documento}</td>
      <td>${studentData.Nombres}</td>
      <td>${studentData.Apellidos1}</td>
      <td>${studentData.Apellidos2}</td>
      <td>${studentData.Grado}</td>
      <td>${studentData.Jornada}</td>
      <td>${studentData.Rh}</td>
      <td>${studentData.Acudiente}</td>
    <td>${studentData.Direccion}</td>
      <td>${studentData.Zona}</td>

    <td>

     <button   class="boton_editar" data-id="${studentData.Uid}">
      <i class="fas fa-pencil-alt"data-id="${studentData.Uid}"></i>
      </button>
     <button   class="boton_eliminar" data-id="${studentData.Uid}">
      <i class="fas fa-trash-alt " data-id="${studentData.Uid}"></i>
      
       </button>

    </td>
   </tr>`;

      // actualizar usuarios
      const actualizarEstudiante = document.querySelectorAll(".boton_editar");
      actualizarEstudiante.forEach((button) => {
        button.addEventListener("click", (e) => {
          ShowActualizarModal();
          firebase
            .database()
            .ref(`students/${e.target.dataset.id}`)
            .once("value")
            .then((student) => {
              const data = student.val();
              updateForm["Documento"].value = data.Documento;
              updateForm["Nombres"].value = data.Nombres;
              updateForm["Apellido1"].value = data.Apellidos1;
              updateForm["Apellido2"].value = data.Apellidos2;
              updateForm["Grado"].value = data.Grado;
              updateForm["Jornada"].value = data.Jornada;
              updateForm["Rh"].value = data.Rh;
              updateForm["Acudiente"].value = data.Acudiente;
              updateForm["Direccion"].value = data.Direccion;
              updateForm["Zona"].value = data.Zona;
            });
          const uid = e.target.dataset.id;

          updateForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const documento = updateForm["Documento"].value;

            const nombres = updateForm["Nombres"].value;
            const apellido1 = updateForm["Apellido1"].value;
            const apellido2 = updateForm["Apellido2"].value;
            const grado = updateForm["Grado"].value;
            const jornada = updateForm["Jornada"].value;
            const rh = updateForm["Rh"].value;
            const acudiente = updateForm["Acudiente"].value;
            const direccion = updateForm["Direccion"].value;
            const zona = updateForm["Zona"].value;

            if (
              documento == "" || nombres == "" ||apellido1 == "" ||grado == "" ||jornada == "" ||rh == "" ||acudiente == "" ||direccion == "" ||zona == ""
            ) {
              Swal.fire({
                title: "Oops...",
                text: "Existen campos vacios!",
              });
              return false;
            } else {
              firebase.database().ref(`students/${uid}`).update({
                Documento: documento,
                Nombres: nombres,
                Apellidos1: apellido1,
                Apellidos2: apellido2,
                Grado: grado,
                Jornada: jornada,
                Rh: rh,
                Acudiente: acudiente,
                Direccion: direccion,
                Zona: zona,
              });
            }
            // mensaje de guardado
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Estudiante actualizado",
              showConfirmButton: false,
              timer: 1500,
            });
            // función limpiar campos
            cerrarmodal();
          });
        });
      });

      // fin  actualizar usuarios

      const deleteButtons = document.querySelectorAll(".boton_eliminar");
      deleteButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
          const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Estas seguro?',
            text: "Deseas eliminar estudiante?!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, Eliminarlo!',
            cancelButtonText: 'No, cancelar!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              deleteStudents(e.target.dataset.id);
              swalWithBootstrapButtons.fire(
                'Eliminado!',
                'Estudiante eliminado.',
                'success'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Eliminación cancelada',
                
             
              )
            }
          })
   
        });
      });
    });
  });
});

function guardarEstu() {
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // obtener el valor de los campo
      const documento = registerForm["Documento"].value;
      const nombres = registerForm["Nombres"].value;
      const apellido1 = registerForm["Apellido1"].value;
      const apellido2 = registerForm["Apellido2"].value;
      const grado = registerForm["Grado"].value;
      const jornada = registerForm["Jornada"].value;
      const rh = registerForm["Rh"].value;
      const acudiente = registerForm["Acudiente"].value;
      const direccion = registerForm["Direccion"].value;
      const zona = registerForm["Zona"].value;
      // validación de campos vacios
      if (
        documento == "" || nombres == "" ||apellido1 == "" ||grado == "" ||jornada == "" ||rh == "" ||acudiente == "" ||direccion == "" ||zona == ""
      ) {
        Swal.fire({
          title: "Oops...",
          text: "Existen campos vacios!",
        });
        return false;
      } else {
       
    
        // carga de usuario a db
     
        const registerStudent = studentRef.push(); 
       
        const ref = firebase.database().ref('students'); 
       
        ref.orderByChild('Documento').on('child_added', (snapshot) => {
        
          var a = snapshot.val().Documento; 
           let flag=false;
          arrayDocumento.push(a);
         
          
           console.log(arrayDocumento);
          
           for (let i= 0; i < arrayDocumento.length; i++) {
            console.log(i);
            if(arrayDocumento[i]==documento){
              console.log(arrayDocumento[i]);
              
              flag=true;
              
          
            }
           }
          
     

           if(flag){
         
           Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El estudiante ya está registrado!',
           
          })
        }//else{
        //   studentRef.push()
        //   if(studentRef){
        //     registerStudent.set({
        //       Uid: registerStudent.key,
        //       Documento: documento,
        //       Nombres: nombres,
        //       Apellidos1: apellido1,
        //       Apellidos2: apellido2,
        //       Grado: grado,
        //       Jornada: jornada,
        //       Rh: rh,
        //       Acudiente: acudiente,
        //       Direccion: direccion,
        //       Zona: zona,
        //     });
        //     Swal.fire({
        //       position: "top-end",
        //       icon: "success",
        //       title: "Usuario registrado con éxito",
        //       showConfirmButton: false,
        //       timer: 1500,
        //     });
        //     limpiarFormulario();
        //   }
           
        // }
       
        });
       
  
      }
      // mensaje de guardado
     
    });
  }
}
guardarEstu();
// limpiar los campos del formulario de modal
function limpiarFormulario() {
  document.getElementById("register-form").reset();
}

//   cerrar modal al enviar datos

$(document).ready(function () {
  $("#Modal").modal("show");
  if ($("#Modal").modal("show")) {
    $("#Modal").modal("hide");
  }

  $("#guardarNuevo").click(function () {
    $("#Modal").modal("show");
  });
  $("Modal").on("hidden.bs.modal", function () {});
});

// validación de estudiantes registrados (si existe

function validarEstudiante() {
  const formularioEstudiante = document.getElementById("register-form");
  formularioEstudiante.addEventListener(submit, async (e) => {
    e.preventDefault();
  });
}

var prueba;
function espe() {
 prueba = setTimeout(function () {
    $("#pruebita").waitMe({
      effect: "bounce",
      text: "",

      maxSize: "",
      waitTime: -1,
      textPos: "horizontal",
      fontSize: "",
      source: "",
    }),1500;
  });
}

function verCorreo(){
  // var email = document.getElementById('email').value;
  $('#verCorreo').val('jhonfo2941@gmail.com');
}
verCorreo();