var usuarios = [
    {
        dni : "0203200234567",
        nombre : "Maria",
        apellido : "Juarez",
        usuario : "mjuarez@gmail.com",
        contrasenia : "1234"
    },
    {
        dni : "0203200234568",
        nombre : "Mario",
        apellido : "Alvarado",
        usuario : "malvarado@gmail.com",
        contrasenia : "1234"
    }
];

var mascotas = [
    {
        id : 1, 
        nombre : "Scooby",
        peso : 2.45,
        edad : 2,
        raza : "x",
        categoria : "PERRO",
        img : "img/perros/doggy1.jpg"
    },
    {
        id : 2, 
        nombre : "Figaro",
        peso : 2.45,
        edad : 2,
        raza : "x",
        categoria : "GATO",
        img : "img/gatos/gato1.jpg"
    },
    {
        id : 3, 
        nombre : "Blacky",
        peso : 2.45,
        edad : 2,
        raza : "x",
        categoria : "PERRO",
        img : "img/perros/doggy2.jpg"
    },
    {
        id : 4, 
        nombre : "Pitagoras",
        peso : 2.45,
        edad : 2,
        raza : "x",
        categoria : "GATO",
        img : "img/gatos/gato2.jpg"
    },
    {
        id : 5, 
        nombre : "Lacy",
        peso : 2.45,
        edad : 2,
        raza : "x",
        categoria : "PERRO",
        img : "img/perros/doggy3.jpg"
    },
    {
        id : 6, 
        nombre : "Tom",
        peso : 2.45,
        edad : 2,
        raza : "x",
        categoria : "GATO",
        img : "img/gatos/gato3.jpg"
    },
    {
        id : 7, 
        nombre : "Ranger",
        peso : 2.45,
        edad : 2,
        raza : "x",
        categoria : "PERRO",
        img : "img/perros/doggy4.jpg"
    },
    {
        id : 8, 
        nombre : "Angela",
        peso : 2.45,
        edad : 2,
        raza : "x",
        categoria : "GATO",
        img : "img/gatos/gato4.jpg"
    }
];


const datos = new URLSearchParams(window.location.search);
var usuario = datos.get('usuario');

const mostrarMascotas = () => {
    document.getElementById("contenedor-mascotas").innerHTML = '';
    mascotas.forEach(mascota => {
        document.getElementById("contenedor-mascotas").innerHTML += `
            <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-12 " id="mascota" >
                <div>
                    <img src="../src/${mascota.img}" alt="img mascota" class="card-img-top" >
                    <div id="nombre-mascota">${mascota.nombre}</div>
                </div>
                <div style="text-align: center;">
                    <button id="btn-adoptar">ADOPTAR</button> 
                </div>
            </div>
        `
    });
}

mostrarMascotas();