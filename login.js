
function login(e)
{
    e.preventDefault()

    let user = document.getElementById("usuario").value;
    let contrasena = document.getElementById("password").value;
    let registros = JSON.parse(localStorage.getItem("registros")) || [];

    let usuarioEncontrado = registros.find(registro => registro.usuario === user && registro.contrasena === contrasena);

    if (usuarioEncontrado) {
        window.location.href="/bienvenida.html"
        console.log("¡Bienvenido, " + usuarioEncontrado.nombre + "!");
    } else {
       
        alert("Usuario no encontrado.");
    }
    
}


function guardarRegistro(e) 
{
    e.preventDefault()
    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("password").value;
    let edad = document.getElementById("age").value;
    let email = document.getElementById("email").value;

    // Crear un objeto con los datos
    let registro = {
        usuario: "user",
        contrasena: 1234,
        edad: 22,
        email: "johnDoe@email.com"
    };
    

    if (edad >= 18) {
        registro = {
            usuario: usuario,
            contrasena: contrasena,
            edad: edad,
            email: email
        };
    }
    else
    {
        alert("El Usuario no cumple con la edad requerida.");
    }
    

    // Obtener registros existentes o inicializar un array vacío
    let registros = JSON.parse(localStorage.getItem("registros")) || [];
    
    // Agregar el nuevo registro
    registros.push(registro);
    
    // Guardar de nuevo en Local Storage
    localStorage.setItem("registros", JSON.stringify(registros));

    console.log("Registro guardado:", registro);
}