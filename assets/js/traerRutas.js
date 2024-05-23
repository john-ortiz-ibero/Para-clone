var firebaseConfig = {
  apiKey: "AIzaSyBe_Pi-nSg74nIapFqjfiLUUN_KpwJ80zQ",
  authDomain: "proyecto-de-grado-241e6.firebaseapp.com",
  databaseURL: "https://proyecto-de-grado-241e6-default-rtdb.firebaseio.com",
  projectId: "proyecto-de-grado-241e6",
  storageBucket: "proyecto-de-grado-241e6.appspot.com",
  messagingSenderId: "1081006318787",
  appId: "1:1081006318787:web:6c017772eaa614c0e22e76",
};

var Arraydireccion = [];
const tableRuta = document.getElementById("tablaImrimirModal"); //formulario de rutas
let rutasDiv = document.getElementById("myTable");
firebase.initializeApp(firebaseConfig);
const rutaRef = firebase.database().ref("rutas"); //rutas
const selectStudents = (uid) => {
  firebase.database().ref(`rutas/${uid}`);
};

const seleccionarRutaCreada = (uid) => {
  firebase.database().ref(`rutas/${uid}`).select();
};

// funcion para cargar las rutas al home
function imprimirRuta() {
  window.addEventListener("DOMContentLoaded", async (e) => {
    tableRuta.innerHTML = ``;
    await rutaRef.on("value", (rutas) => {
      tableRuta.innerHTML = ``;
      rutas.forEach((Rutas) => {
        let studentData = Rutas.val();
      
          tableRuta.innerHTML += `<tr> 
          <td>${studentData.ReferenciaRuta}</td>
         
            <td class="table-primary">${studentData.NombreRuta}</td>
            <td class="table-success">${studentData.Ruta}</td>
            <td  class="table-warning">${studentData.VehiculoRuta}</td>
  
            
            </tr>`;
        
    
      });
    });
  });
}
imprimirRuta();

function verCorreo(){
  // var email = document.getElementById('email').value;
  $('#verCorreo').val('jhonfo2941@gmail.com');
}
verCorreo();

// Función de data table
var db= firebase.database();
var coleccionRutas = db.ref().child('rutas');
var dataSet = [];//array para guardar los valores de los campos inputs del form
    var table = $('#myTable').DataTable({
      language: {
        "decimal": "",
        "emptyTable": "No hay información",
        "info": "Mostrando _START_ a _END_ de _TOTAL_ Rutas",
        "infoEmpty": "Mostrando 0 to 0 of 0 Rutas",
        "infoFiltered": "(Filtrado de _MAX_ total Rutas)",
        "infoPostFix": "",
        "thousands": ",",
        "lengthMenu": "Mostrar _MENU_ Rutas",
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
                        defaultContent: "<div class='wrapper text-center'><div class='btn-group'><button  onclick='probar()'  class='boton_editar' data-id='${rutaData.Uid}'><i class='fas fa-eye'></i></button><button  class='boton_editar' data-id='${rutaData.Uid}'><i class='fas fa-pencil-alt'data-id='${rutaData.Uid}'></i></button> </button> <button   class='boton_eliminar' data-id='${rutaDataUid}'><i class='fas fa-trash-alt ' data-id='${rutaData.Uid'><i></button></div></div>"  
                    }
                ]	   
            });

    coleccionRutas.on("child_added", datos => {        
        dataSet = [datos.key, datos.child("ReferenciaRuta").val(), datos.child("NombreRuta").val(), datos.child("VehiculoRuta").val()];
        table.rows.add([dataSet]).draw();
    });
    // 
    function probar(){
      $('#modalRutas').modal('show')
        console.log('si entra');
      
    }

    function cerrarModal(){
      $('#modalRutas').modal('hide')
    }

    
    function impresionRuta(){
     window.print();
    }
    
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
            seleccionarRutaCreada(e.target.dataset.id);
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

    function mensajeInstructivo(){
      
      Swal.fire({
        title: 'Este software permite la creación de rutas escolares. Para ello es obligatorio inicialmente el registro de Estudiantes, Conductores y Vehículos. En la sección derecha de ésta interfáz encontrarás el orden de los pasos para poder crear una ruta. ',
        width: 800,
        padding: '5em',
   
     
      
      })
    }
    function verCorreo(){
      // var email = document.getElementById('email').value;
      $('#verCorreo').val('jhonfo2941@gmail.com');
    }
    verCorreo();
   