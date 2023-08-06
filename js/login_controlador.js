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

const validarUsuario = () => {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); 

        const datos = new FormData(event.target); 

        const correo = datos.get("correo");
        const contrasenia = datos.get("contrasenia");
      
        usuarios.forEach(usuario => {
            if(correo == usuario.usuario){
                if(contrasenia == usuario.contrasenia){
                    window.location.href = `./aplicacion.html?usuario=${encodeURIComponent(correo)}`
                }
            }
        });
    });  
}