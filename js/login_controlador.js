var usuarios = [];

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("http://192.168.0.101:8000/usuarios/obtener", requestOptions)
    .then(response => response.json())
    .then(result => {
        usuarios = result;
    })
    .catch(error => console.log('error', error));

const validarUsuario = () => {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); 

        const datos = new FormData(event.target); 

        const correo = datos.get("correo");
        const contrasenia = datos.get("contrasenia");
      
        usuarios.usuarios.forEach(usuario => {
            if(correo == usuario.email){
                if(contrasenia == usuario.contrasenia){
                    window.location.href = `./aplicacion.html?usuario=${encodeURIComponent(correo)}`
                }
            }
        });
    });  
}