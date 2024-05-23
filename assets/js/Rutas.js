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
var Arraydireccion =[];
var ArrayReferenciaRuta=[];

const studentsTable = document.getElementById("student-table"); //ESTUDIANTES

const rutaForm = document.getElementById("ruta-form");//formulario de rutas
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// carga de rutas
const rutaRef = firebase.database().ref("rutas"); //rutas
// carga de estudiantes a interfaz
const studentRef = firebase.database().ref("students"); //ESTUDIANTES
const selectStudents = (uid) => {
  firebase.database().ref(`students/${uid}/Direccion`);
};

// window.addEventListener("DOMContentLoaded", async (e) => {
//   studentsTable.innerHTML = ``;
//   await studentRef.on("value", (students) => {
//     let zonaSelect = $("#Zonas");
//    let jornadaSelect =$("#Jornada");
   

//    $("#btnJornada").on('click',function () {
//       studentsTable.innerHTML = ``;
//       students.forEach((student) => {
//         let studentData = student.val();        
//           // studentsTable.innerHTML = ``;
//           if (zonaSelect.val() == `${studentData.Zona}`&& jornadaSelect.val()==`${studentData.Jornada}`) {
          
//             studentsTable.innerHTML += `<tr>

//             <th>#</th>
//             <td>${studentData.Documento}</td>
//             <td>${studentData.Nombres}</td>
//             <td>${studentData.Zona}</td>
//             <td>${studentData.Direccion}</td>
//             <td>${studentData.Jornada}</td>
          
            

//             <td>

//             <button  style="margin-left:40px;" class="boton_seleccionar" data-id="${studentData.Uid} ${studentData.Direccion}">
//               <i class="fas fa-map-marker-alt "  data-id="${studentData.Uid} ${studentData.Direccion}"></i>
//           </button>
              
//               <input  style="margin-left:40px;" class="form-check-input" type="checkbox" value="${studentData.Direccion}" id="seleccionCheck">
 
         
              
//             </td>
            
//           </tr>`;
//           }
    
//       });

      
//       $('input[type=checkbox]').on('click', function(){
//         let checkbox = $(this);
//         let direccion = checkbox.val();
//         let waypoints = $('#waypoints');

//            if(checkbox.prop("checked")){
//             Arraydireccion.push(direccion)
            
           
//            }else{
//             Arraydireccion = eliminarElemento(Arraydireccion, direccion);

//            }

//            waypoints.val(Arraydireccion);          
//            console.log("array: ",waypoints.val());
//       });

//        let eliminarElemento=(arr ,item)=>{
//         //console.log("array eliminar elemento: ",item);
//          return arr.filter(elemento=>elemento !== item);
//        }
//     });
//   });

// });

// ---------------------------------------------------

var db= firebase.database();
var coleccionRutas = db.ref().child('students');
var dataSet = [];//array para guardar los valores de los campos inputs del form
    var table = $('#student-table').DataTable({
      language: {
        "decimal": "",
        "emptyTable": "No hay información",
        "info": "Mostrando _START_ a _END_ de _TOTAL_ Estudiantes",
        "infoEmpty": "Mostrando 0 to 0 of 0 Estudiantes",
        "infoFiltered": "(Filtrado de _MAX_ total Estudiantes)",
        "infoPostFix": "",
        "thousands": ",",
        "lengthMenu": "Mostrar _MENU_ Estudiantes",
        "loadingRecords": "Cargando...",
        "processing": "Procesando...",
        "search": "Buscar:",
        "zeroRecords": "Sin resultados encontrados",
        "paginate": {
            "first": "Primero",
            "last": "Ultimo",
            "next": "Siguiente",
            "previous": "Anterior"
        }
      },

                pageLength : 10,
                lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 'Todos']],
                data: dataSet,
                columnDefs: [
                    {
                        targets: [0], 
                        visible: false, //ocultamos la columna de ID que es la [0]                        
                    },
                    {
                        targets: -1,        
                        render: function (data, type, row, meta) {
                          return" <input onclick='clickAgregarDireccion(this)'  style='margin-left:40px;' class='form-check-input' type='checkbox' value='"+row[4]+"' id='seleccionCheck'/>"
                       } 
                    }

               
                ]	   
            });
           

    coleccionRutas.on("child_added", datos => {        
        dataSet = [datos.key, datos.child("Documento").val(), datos.child("Nombres").val(), datos.child("Zona").val(), datos.child("Direccion").val(), datos.child("Jornada").val()];
        table.rows.add([dataSet]).draw();
    });


   function clickAgregarDireccion(obj){
      
      let checkbox = $(obj);
      let direccion = checkbox.val();
      let waypoints = $('#waypoints');

         if(checkbox.prop("checked")){
          Arraydireccion.push(direccion)
          console.log(direccion);
         
         }else{
          Arraydireccion = eliminarElemento(Arraydireccion, direccion);

         }

         waypoints.val(Arraydireccion);          
         console.log("array: ",waypoints.val());
    };

     let eliminarElemento=(arr ,item)=>{
      //console.log("array eliminar elemento: ",item);
       return arr.filter(elemento=>elemento !== item);
     }
  





// ---------------------------------------------------






function initMap() {
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();
  /* const transitLayer = new google.maps.TransitLayer();
  transitLayer.setMap(map);  */
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: { lat: 4.60971, lng: -74.08175 },
  });
  directionsRenderer.setMap(map);
  document.getElementById("submit").addEventListener("click", () => {
    calculateAndDisplayRoute(directionsService, directionsRenderer);
  });
}


function calculateAndDisplayRoute(directionsService, directionsRenderer) {
  const waypts = [];  
  //const checkboxArray = document.getElementById("waypoints");
  let checkboxArray = Arraydireccion
     

  // for (let i = 0; i < checkboxArray.length; i++) {
  for (let i = 0; i < checkboxArray.length; i++) {
    if (checkboxArray[i]) {      
      waypts.push({
        location: checkboxArray[i],
        stopover: true,
      });
    }
  }
  console.log(waypts);
  directionsService.route(
    /* aqui lo correspondiente a waypoint */
    {
      origin: document.getElementById("start").value,
      destination: document.getElementById("end").value,
      waypoints: waypts,
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC,
    },
    (response, status) => {
      if (status === "OK" && response) {
        directionsRenderer.setDirections(response);
        const route = response.routes[0];
        const summaryPanel = document.getElementById("directions-panel");
        summaryPanel.innerHTML = "";

        // For each route, display summary information.
        for (let i = 0; i < route.legs.length; i++) {
          const routeSegment = i + 1;
          summaryPanel.innerHTML +=
            "\n Parada: " + routeSegment + "\n";
          summaryPanel.innerHTML += route.legs[i].start_address + " \n";
          summaryPanel.innerHTML += route.legs[i].end_address + "\n";
          summaryPanel.innerHTML += route.legs[i].distance.text + "\n";
        }
      } else {
        Swal.fire({
          title: "Oops...",
          text: "Una de las direcciones no está en el mapa o está incorrecta!",
        })+status;
        return false;
      }
    }
  );
}

function guardarRuta() {
  if (rutaForm) {
    rutaForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // obtener el valor de los campo
      const ruta = rutaForm["Rutas"].value;
      const nombreRuta = rutaForm["NombreRuta"].value;
      const referenciaRuta = rutaForm["ReferenciaRuta"].value;
      const vehiculoRuta = rutaForm["VehiculoRuta"].value;


      // validación de campos vacios
      if (
        ruta == "" || nombreRuta == "" || referenciaRuta == "" || vehiculoRuta==""
      ) {
        Swal.fire({
          title: "Oops...",
          text: "Ruta no establecida!",
        });
        return false;
      } else {
        // carga de usuario a db
        const rutaForm = rutaRef.push();

        const ref = firebase.database().ref('rutas');
        ref.on('child_added', (snapshot, prevChildKey) => {
        
          var a = snapshot.val(); 
           let flag=false;
          ArrayReferenciaRuta.push(a.ReferenciaRuta, a.VehiculoRuta, a.NombreRuta);
         
          
           console.log(ArrayReferenciaRuta);
           for (let i= 0; i < ArrayReferenciaRuta.length; i++) {
            console.log(i);
            if(ArrayReferenciaRuta[i]== referenciaRuta || ArrayReferenciaRuta[i]==vehiculoRuta || ArrayReferenciaRuta[i]==nombreRuta){
              console.log(ArrayReferenciaRuta[i]);
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
          rutaRef.push();
           if(rutaRef){
            rutaForm.set({
              Uid: rutaForm.key,
              Ruta: ruta,
              NombreRuta:nombreRuta,
              ReferenciaRuta: referenciaRuta,
              VehiculoRuta: vehiculoRuta
             
            });
               // mensaje de guardado
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Usuario registrado con éxito",
            showConfirmButton: false,
            timer: 1500,
          });
         
          limpiarFormulario()
           }
         

          
         }



        });


    

      }
   
    });
    
  }
}
guardarRuta()

function limpiarFormulario() {
  document.getElementById("ruta-form").reset();
}
function verCorreo(){
  // var email = document.getElementById('email').value;
  $('#verCorreo').val('jhonfo2941@gmail.com');
}
verCorreo();

