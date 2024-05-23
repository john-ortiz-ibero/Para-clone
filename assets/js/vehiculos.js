  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyBe_Pi-nSg74nIapFqjfiLUUN_KpwJ80zQ",
      authDomain: "proyecto-de-grado-241e6.firebaseapp.com",
      databaseURL: "https://proyecto-de-grado-241e6-default-rtdb.firebaseio.com",
      projectId: "proyecto-de-grado-241e6",
      storageBucket: "proyecto-de-grado-241e6.appspot.com",
      messagingSenderId: "1081006318787",
      appId: "1:1081006318787:web:6c017772eaa614c0e22e76"
  };
  // Initialize Firebase

  const openModal = document.getElementById('BtnRegisterModal'); //BTN MODAL GENERAL
  const modal = document.getElementById('Modal'); //MODAL GENERAL
  const updateModal = document.getElementById("Modal_updateC");
const updateForm = document.getElementById("updateFormC");

  const registerFormVehiculos = document.getElementById('register-vehiculo');
  const TableVehiculo = document.getElementById('vehiculos-table');
  


  firebase.initializeApp(firebaseConfig);


  const vehiculoRef = firebase.database().ref('vehiculos')

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
    firebase.database().ref(`vehiculos/${uid}`).remove();
  };
  
//   const traerUsuarios = (uid) => {
//     firebase.database().ref(`vehiculos/${uid}/Documento`).val();
//   };





  window.addEventListener('DOMContentLoaded', async(e) => {
      await vehiculoRef.on('value', (vehiculos) => {
          TableVehiculo.innerHTML = ``
          vehiculos.forEach(vehiculo => {
              let vehiculoData = vehiculo.val()
              TableVehiculo.innerHTML += `<tr>

    <th>#</th>
    <td>${vehiculoData.Placa}</td>
    <td>${vehiculoData.Modelo}</td>
    <td>${vehiculoData.Capacidad}</td>
    <td>${vehiculoData.ConductoresV}</td>
    <td>${vehiculoData.RutaA}</td>
    <td>${vehiculoData.ZonaA}</td>
   

  <td>

   <button class="boton_editar" data-id="${vehiculoData.Uid}">
  <i class="fas fa-pencil-alt" data-id="${vehiculoData.Uid}" > </i>
   </button>
   <button class="boton_eliminar" data-id="${vehiculoData.Uid}">
  <i class="fas fa-trash-alt " data-id="${vehiculoData.Uid}"> </i>
     </button>

  </td>
 </tr>`




 const actualizarVehiculo = document.querySelectorAll(".boton_editar");
 actualizarVehiculo.forEach((button) => {
   button.addEventListener("click", (e) => {
    
     ShowActualizarModal();
     firebase.database().ref(`vehiculos/${e.target.dataset.id}`).once("value")
       .then((vehiculo) => {
       
         const data = vehiculo.val();
         
         
         updateFormC['PlacaV'].value = data.Placa;
         updateFormC['Modelo'].value = data.Modelo;
         updateFormC['Capacidad'].value = data.Capacidad;
         updateFormC['ConductoresV'].value = data.ConductoresV;
         updateFormC['RutaA'].value = data.RutaA;
         updateFormC['ZonaA'].value = data.ZonaA;
       });

     const uid = e.target.dataset.id;
     updateFormC.addEventListener("submit", (e) => {
       e.preventDefault();
       const placa        = updateFormC['PlacaV'].value;
       const modelo       = updateFormC['Modelo'].value;
       const capacidad    = updateFormC['Capacidad'].value;
       const conductoresV = updateFormC['ConductoresV'].value;
       const rutaA        = updateFormC['RutaA'].value;
       const zonaA        = updateFormC['ZonaA'].value;
       if (
         placa == "" ||
         modelo == "" ||
         capacidad == "" ||
         conductoresV == "" ||
         rutaA == "" ||
         zonaA == ""
       ) {
         Swal.fire({
           title: "Oops...",
           text: "Existen campos vacios!",
         });
         return false;
       } else {
         firebase.database().ref(`vehiculos/${uid}`).update({
           Placa: placa,
           Modelo: modelo,
           Capacidad: capacidad,
           ConductoresV: conductoresV,
           RutaA: rutaA,
           ZonaA: zonaA
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



          })
      })
  })

  

  if (registerFormVehiculos) {
      registerFormVehiculos.addEventListener('submit', (e) => {

          e.preventDefault()
          const placa        = registerFormVehiculos['PlacaV'].value
          const modelo       = registerFormVehiculos['Modelo'].value
          const capacidad    = registerFormVehiculos['Capacidad'].value
          const conductoresV = registerFormVehiculos['ConductoresV'].value
          const rutaA        = registerFormVehiculos['RutaA'].value
          const zonaA        = registerFormVehiculos['ZonaA'].value

          const registerV = vehiculoRef.push()
          registerV.set({
              Uid: registerV.key,
              Placa: placa,
              Modelo: modelo,
              Capacidad: capacidad,
              ConductoresV: conductoresV,
              RutaA: rutaA,
              ZonaA: zonaA

          })
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Estudiante Guardado",
            showConfirmButton: false,
            timer: 1500,
          });
     
        // mensaje de guardado
     
          limpiarFormulario();
             
              
      })
         
      // ---------------------------------------------------------------
// limpiar los campos del formulario de modal
function limpiarFormulario() {
    document.getElementById("register-vehiculo").reset();
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
  }
  function verCorreo(){
    // var email = document.getElementById('email').value;
    $('#verCorreo').val('jhonfo2941@gmail.com');
  }
  verCorreo();