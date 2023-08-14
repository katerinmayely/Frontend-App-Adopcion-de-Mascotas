var usuarios;
var mascotas;
var gatos;
var perros;
var usuarioAutenticado;
const datos = new URLSearchParams(window.location.search);
var correoUsuario = datos.get('usuario');
console.log(correoUsuario);

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("http://192.168.0.101:8000/usuarios/obtener", requestOptions)
    .then(response => response.json())
    .then(result => {
        usuarios = result; 

        console.log(usuarios); 
        usuarios.usuarios.forEach(usuario => {
            if(correoUsuario == usuario.email){
                usuarioAutenticado = usuario;
                console.log(usuarioAutenticado);
            }
        })

       obtenerMascotas();

    })
    .catch(error => console.log('error', error));

const cambiarCategoria = () => {
    let categoria = document.getElementById("seleccionar-categoria").value;
    if(categoria == "perros"){
        obtenerPerros();
    }else if(categoria == "gatos"){
        obtenerGatos();
    }else{
        obtenerMascotas();
    }
}
    

function obtenerMascotas(){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("http://192.168.0.101:8000/mascotas", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            mascotas = result;
            mostrarMascotas();
        })
        .catch(error => console.log('error', error));
}

function mostrarMascotas(){
    document.getElementById("contenedor-mascotas").innerHTML = '';
    mascotas.mascotas.forEach(mascota => {
        document.getElementById("contenedor-mascotas").innerHTML += `
            <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-12 " id="mascota" >
                <div>
                    <img src="../src/${mascota.img}" alt="img mascota" class="card-img-top" >
                    <div id="nombre-mascota">${mascota.nombre}</div>
                </div>
                <div style="text-align: center;">
                    <button id="btn-adoptar" onclick="adoptar(${mascota.id_mascota})">ADOPTAR</button> 
                </div>
            </div>
        `
    });
}


mostrarMascotas();

const mostrarGatos = () => {
    document.getElementById("contenedor-mascotas").innerHTML = '';
    gatos.forEach(gato => {
        document.getElementById("contenedor-mascotas").innerHTML += `
            <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-12 " id="mascota" >
                    <div>
                        <img src="../src/${gato.img}" alt="img mascota" class="card-img-top" >
                        <div id="nombre-mascota">${gato.nombre}</div>
                    </div>
                    <div style="text-align: center;">
                        <button id="btn-adoptar" onclick="adoptar(${gato.id_mascota})">ADOPTAR</button> 
                    </div>
            </div>
        `
    });
}

var mascotasCliente;


function mostrarMascotasCliente(){
    const modal = new bootstrap.Modal(document.getElementById('modal-mascotas-user'));

    document.getElementById("contenedor-mascotas-user").innerHTML = '';
    mascotasCliente.mascotas.forEach(mascota => {
        document.getElementById("contenedor-mascotas-user").innerHTML += `
            <div class=" " id="mascota" >
                <div>
                    <img src="../src/${mascota.img}" alt="Icono App" class="card-img-top" >
                    <div id="nombre-mascota">${mascota.nombre}</div>
                </div>
            </div>
        `
    })

    modal.show();
}

function obtenerMascotasCliente() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(`http://192.168.0.101:8000/usuarios/obtener/mascotas/${usuarioAutenticado.idusuario}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            mascotasCliente = result;
            console.log(mascotasCliente);
            mostrarMascotasCliente();
        })
        .catch(error => console.log('error', error));
}

function adoptar(idMascota){

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "id_usuario": usuarioAutenticado.idusuario,
    "id_mascota": idMascota
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("http://192.168.0.101:8000/mascotas/adoptar", requestOptions)
    .then(response => response.text())
    .then(result => {
        alert("Transacción exitosa. Muchas Gracias.")
        console.log(result);
    })
    .catch(error => console.log('error', error));

    
}

function obtenerGatos(){
    var requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };

    fetch("http://192.168.0.101:8000/mascotas/obtener/gatos", requestOptions)
    .then(response => response.json())
    .then(result => {
        gatos =  result;
        console.log(result);
        mostrarGatos();
    })
    .catch(error => console.log('error', error));
}

const mostrarPerros = () => {
    document.getElementById("contenedor-mascotas").innerHTML = '';
    perros.forEach(perro => {
        document.getElementById("contenedor-mascotas").innerHTML += `
                <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-12 " id="mascota" >
                    <div>
                        <img src="../src/${perro.img}" alt="img mascota" class="card-img-top" >
                        <div id="nombre-mascota">${perro.nombre}</div>
                    </div>
                    <div style="text-align: center;">
                        <button id="btn-adoptar" onclick="adoptar(${perro.id_mascota})">ADOPTAR</button> 
                    </div>
                </div>
         `
    });
}

function obtenerPerros(){
    var requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };

    fetch("http://192.168.0.101:8000/mascotas/obtener/perros", requestOptions)
    .then(response => response.json())
    .then(result => {
        perros =  result.mascotas;
        console.log(perros);
        mostrarPerros();
    })
    .catch(error => console.log('error', error));
}
