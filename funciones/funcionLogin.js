const formLogin = document.getElementById("formLogin");

const correo = document.getElementById("correo");
const password = document.getElementById("password");

const errorCorreo = document.getElementById("errorCorreo");
const errorPassword = document.getElementById("errorPassword");

const mensajeLogin = document.getElementById("mensajeLogin");


formLogin.addEventListener("submit", function (evento) {

    evento.preventDefault();

    errorCorreo.textContent = "";
    errorPassword.textContent = "";
    mensajeLogin.textContent = "";

    let formularioValido = true;


    const dominiosPermitidos = [
        "@duoc.cl",
        "@profesor.duoc.cl",
        "@gmail.com",
        "@hotmail.com",
        "@yahoo.com",
        "@outlook.com",
        "@icloud.com",
        "@gmail.cl",
        "@hotmail.cl",
        "@yahoo.cl",
        "@outlook.cl",
        "@icloud.cl"
    
    ];


    if (correo.value.trim() === "") {

        errorCorreo.textContent =
            "El correo electrónico es obligatorio.";

        formularioValido = false;

    } else if (correo.value.length > 100) {

        errorCorreo.textContent =
            "El correo no puede superar los 100 caracteres.";

        formularioValido = false;

    } else {

        const correoValido = dominiosPermitidos.some(
            dominio => correo.value.endsWith(dominio)
        );

        if (!correoValido) {

            errorCorreo.textContent =
                "Ingrese un correo @duoc.cl, @profesor.duoc.cl o @gmail.com.";

            formularioValido = false;
        }
    }


    if (password.value.trim() === "") {

        errorPassword.textContent =
            "La contraseña es obligatoria.";

        formularioValido = false;

    } else if (
        password.value.length < 4 ||
        password.value.length > 10
    ) {

        errorPassword.textContent =
            "La contraseña debe tener entre 4 y 10 caracteres.";

        formularioValido = false;
    }


    if (formularioValido) {

        mensajeLogin.textContent =
            "Inicio de sesión validado correctamente.";

        mensajeLogin.style.color = "green";

        formLogin.reset();
    }

});

