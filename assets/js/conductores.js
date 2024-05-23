var firebaseConfig = {
  apiKey: "AIzaSyBe_Pi-nSg74nIapFqjfiLUUN_KpwJ80zQ",
  authDomain: "proyecto-de-grado-241e6.firebaseapp.com",
  databaseURL: "https://proyecto-de-grado-241e6-default-rtdb.firebaseio.com",
  projectId: "proyecto-de-grado-241e6",
  storageBucket: "proyecto-de-grado-241e6.appspot.com",
  messagingSenderId: "1081006318787",
  appId: "1:1081006318787:web:6c017772eaa614c0e22e76",
};



var arrayDocumentoC=[];
const openModal = document.getElementById("BtnRegisterModal"); //BTN MODAL GENERAL
const modal = document.getElementById("Modal"); //MODAL GENERAL
const updateModal = document.getElementById("Modal_updateC");
const updateForm = document.getElementById("updateFormC");

var registerFormConductor = document.getElementById("register-conductor");
const TableConductor = document.getElementById("Conductor-table");

firebase.initializeApp(firebaseConfig);

const ConductortRef = firebase.database().ref("Conductor"); //Conductores

// evento para abrir y cerrar modal
const ShowRegisterModal = () => {
  $("#Modal").modal("show");
};
// cerrar modal de actualizar
const cerrarmodal = () => {
  $("#Modal_updateC").modal("hide");
};
// modal actualizar
const ShowActualizarModal = () => {
  $("#Modal_updateC").modal("show");
};

const deleteConductores = (uid) => {
  firebase.database().ref(`Conductor/${uid}`).remove();
};

const traerUsuarios = (uid) => {
  firebase.database().ref(`Conductor/${uid}/Documento`).val();
};



window.addEventListener("DOMContentLoaded", async (e) => {
  TableConductor.innerHTML = "";
  await ConductortRef.on("value", (Conductor) => {
    TableConductor.innerHTML = ``;
    Conductor.forEach((Conduct) => {
      let ConductorData = Conduct.val();
      TableConductor.innerHTML += `<tr>

    <th>#</th>
    <td>${ConductorData.Documento}</td>
    <td>${ConductorData.Nombres}</td>
    <td>${ConductorData.Apellidos}</td>
    <td>${ConductorData.Celular}</td>
    <td>${ConductorData.Email}</td>
    <td>${ConductorData.Vehiculo}</td>
   

  <td>

  <button   class="boton_editar" data-id="${ConductorData.Uid}">
  <i class="fas fa-pencil-alt"data-id="${ConductorData.Uid}"></i>
  </button>
 <button   class="boton_eliminar" data-id="${ConductorData.Uid}">
  <i class="fas fa-trash-alt " data-id="${ConductorData.Uid}"></i>
  
   </button>
  </td>
 </tr>`;
      // -----------------------------------
      // actualizar usuarios
 
      const actualizarConductor = document.querySelectorAll(".boton_editar");
      actualizarConductor.forEach((button) => {
        button.addEventListener("click", (e) => {
         
          ShowActualizarModal();
          firebase.database().ref(`Conductor/${e.target.dataset.id}`).once("value")
            .then((conductor) => {
            
              const data = conductor.val();
              updateFormC["DocumentoC"].value = data.Documento;
              
              updateFormC["NombresC"].value = data.Nombres;
              updateFormC["ApellidoC"].value = data.Apellidos;
              updateFormC["Celular"].value = data.Celular;
              updateFormC["Email"].value = data.Email;
              updateFormC["VehiculoC"].value = data.Vehiculo;
            });

          const uid = e.target.dataset.id;
          updateFormC.addEventListener("submit", (e) => {
            e.preventDefault();
            const documentoC = updateFormC["DocumentoC"].value;
            const nombresC = updateFormC["NombresC"].value;
            const apellidoC = updateFormC["ApellidoC"].value;
            const celular = updateFormC["Celular"].value;
            const email = updateFormC["Email"].value;
            const vehiAsig = updateFormC["VehiculoC"].value;
            if (
              documentoC == "" ||
              nombresC == "" ||
              apellidoC == "" ||
              celular == "" ||
              email == "" ||
              vehiAsig == ""
            ) {
              Swal.fire({
                title: "Oops...",
                text: "Existen campos vacios!",
              });
              return false;
            } else {
              firebase.database().ref(`Conductor/${uid}`).update({
                Documento: documentoC,
                Nombres: nombresC,
                Apellidos: apellidoC,
                Celular: celular,
                Email: email,
                Vehiculo: vehiAsig,
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
      


       

    
      // -----------------------------------

      const deleteButtons = document.querySelectorAll(".boton_eliminar");
      deleteButtons.forEach((button) => {

        button.addEventListener("click", (e) => {
      
          Swal.fire({
            title: "Está seguro que desea eliminar el estudiante?",
            showDenyButton: true,

            showCancelButton: true,
            confirmButtonText: "Eliminar",
            denyButtonText: `No eliminar`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              deleteConductores(e.target.dataset.id);
              Swal.fire("Eliminar!", "", "success");
            } else if (result.isDenied) {
              Swal.fire("Eliminación cancelada", "", "info");
            }
          });
        });
      });
    });
  });
});
// -----------------------------------------------------------




function GuardarConductor(){
  if (registerFormConductor) {
  registerFormConductor.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const documentoC = registerFormConductor["DocumentoC"].value;
    const nombresC = registerFormConductor["NombresC"].value;
    const apellidoC = registerFormConductor["ApellidoC"].value;
    const celular = registerFormConductor["Celular"].value;
    const email = registerFormConductor["Email"].value;
    const vehiAsig = registerFormConductor["VehiculoC"].value;
         
  
    

//  validación de campos vacios
    if (documentoC == "" ||nombresC == "" ||apellidoC == "" ||celular == "" ||email == "" ||vehiAsig == "" 
    ) {
      Swal.fire({
        title: "Oops...",
        text: "Existen campos vacios!",
      });
      return false;
     
    }else{
     
    const registerC = ConductortRef.push();
    const ref = firebase.database().ref('Conductor');

    ref.orderByChild('Documento').on('child_added', (snapshot) => {
        
      var a = snapshot.val().Documento; 
       let flag=false;
      arrayDocumentoC.push(a);
     
      
       console.log(arrayDocumentoC);

       for (let i= 0; i < arrayDocumentoC.length; i++) {
        console.log(i);
        if(arrayDocumentoC[i]== documentoC){
          console.log(arrayDocumentoC[i]);
          flag=true;
      
        }
       }
       if(flag){
         
        Swal.fire({
         icon: 'error',
         title: 'Oops...',
         text: 'El estudiante ya está registrado!',
        
       })
     }else{
       ConductortRef.push();
       if(ConductortRef){
        registerC.set({
      
          Uid: registerC.key,
          Documento: documentoC,
          Nombres: nombresC,
          Apellidos: apellidoC,
          Celular: celular,
          Email: email,
          Vehiculo: vehiAsig,
          
        });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Estudiante Guardado",
          showConfirmButton: false,
          timer: 1500,
        });
    
      // mensaje de guardado
    
        limpiarFormulario();
       

       }

     }
  

       
    });
    
   
  
  }
  
  });


 }

}
  GuardarConductor();

 
// ---------------------------------------------------------------
// limpiar los campos del formulario de modal
function limpiarFormulario() {
  document.getElementById("register-conductor").reset();
}
//   cerrar modal
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

// validar documento
// function validarDocumento() {
  
  
//   registerFormConductor.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const uid = e.target.dataset.id;
//     const usuarioR= firebase .database().ref(`Conductor/${uid}/${Documento}`)
//     usuarioR.once("value").then((conductor) => {

//         const data = conductor.val();
//         registerFormConductor["DocumentoC"].value = data.Documento;
//       });
    
//     updateFormC.addEventListener("submit", (e) => {
//       e.preventDefault();
//       const documentoC = registerFormConductor["DocumentoC"].value;
//       if(usuarioR>0 && usuarioR===documentoC){
//         Swal.fire({
//           title: "Oops...",
//           text: "Usuario ya existe!",
//         });
//         return false;
//       }
      
//     });
//   });
// }
function verCorreo(){
  // var email = document.getElementById('email').value;
  document.getElementById('verCorreo');
  $('#verCorreo').val('jhonfo2941@gmail.com');
}
verCorreo();