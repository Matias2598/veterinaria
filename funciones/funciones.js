//Registro del usuario
const formRegistro = document.querySelector('#form-registro');

if (formRegistro) {
  const patronCorreo = /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;
  const contrasena = document.querySelector('#contrasena');
  const confirmarContrasena = document.querySelector('#confirmar-contrasena');
  const correo = document.querySelector('#correo');
  const confirmarCorreo = document.querySelector('#confirmar-correo');
  const region = document.querySelector('#region');
  const comuna = document.querySelector('#comuna');

  const comunasPorRegion = {
    metropolitana: ['Calera de Tango', 'San Bernardo', 'Santiago', 'Peñaflor'],
    los_lagos: ['Rio Negro', 'Osorno', 'Frutillar', 'Calbuco'],
    magallanes: ['Rio Verde', 'Laguna Blanca', 'Torres del Paine', 'Cabo de Hornos'],
  };

  region.addEventListener('change', function () {
    const opciones = comunasPorRegion[region.value];
    comuna.innerHTML = '';

    if (!opciones) {
      comuna.innerHTML = '<option value="">No existen comunas para esta región</option>';
      return;
    }

    comuna.innerHTML = '<option value="">Selecciona una comuna</option>';
    opciones.forEach(function (nombreComuna) {
      const opcion = document.createElement('option');
      opcion.value = nombreComuna.toLowerCase();
      opcion.textContent = nombreComuna;
      comuna.appendChild(opcion);
    });
  });

  formRegistro.addEventListener('submit', function (e) {
    e.preventDefault();
    let formularioValido = true;

    const camposRequeridos = formRegistro.querySelectorAll('[required]');
    camposRequeridos.forEach(function (campo) {
      const errorSpan = campo.nextElementSibling;
      if (campo.value.trim() === '') {
        campo.classList.add('campo-error');
        errorSpan.textContent = 'Este campo es obligatorio';
        formularioValido = false;
      } else {
        campo.classList.remove('campo-error');
        errorSpan.textContent = '';
      }
    });

    if (correo.value.trim() !== '' && !patronCorreo.test(correo.value.trim())) {
      correo.classList.add('campo-error');
      correo.nextElementSibling.textContent = 'Correo inválido, debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com';
      formularioValido = false;
    }

    if (confirmarCorreo.value.trim() !== '' && confirmarCorreo.value.trim() !== correo.value.trim()) {
      confirmarCorreo.classList.add('campo-error');
      confirmarCorreo.nextElementSibling.textContent = 'Los correos no coinciden';
      formularioValido = false;
    }

    if (contrasena.value !== '' && (contrasena.value.length < 4 || contrasena.value.length > 10)) {
      contrasena.classList.add('campo-error');
      contrasena.nextElementSibling.textContent = 'Debe tener entre 4 y 10 caracteres';
      formularioValido = false;
    }

    if (confirmarContrasena.value !== '' && confirmarContrasena.value !== contrasena.value) {
      confirmarContrasena.classList.add('campo-error');
      confirmarContrasena.nextElementSibling.textContent = 'Las contraseñas no coinciden';
      formularioValido = false;
    }

    if (formularioValido) {
      document.querySelector('#mensaje-confirmacion').textContent = 'Se ha registrado';
    }
  });
}

//Formulario de producto admin
const formProducto = document.querySelector('#formulario-producto');

if (formProducto) {
  const precio = document.querySelector('#precio');
  const stock = document.querySelector('#stock');

  formProducto.addEventListener('submit', function (e) {
    e.preventDefault();
    let formularioValido = true;

    const camposRequeridos = formProducto.querySelectorAll('[required]');
    camposRequeridos.forEach(function (campo) {
      const errorSpan = campo.nextElementSibling;
      if (campo.value.trim() === '') {
        campo.classList.add('campo-error');
        errorSpan.textContent = 'Este campo es obligatorio';
        formularioValido = false;
      } else {
        campo.classList.remove('campo-error');
        errorSpan.textContent = '';
      }
    });

    if (precio.value !== '' && Number(precio.value) < 0) {
      precio.classList.add('campo-error');
      precio.nextElementSibling.textContent = 'Precio inválido';
      formularioValido = false;
    }

    if (stock.value !== '' && (Number(stock.value) < 0 || !Number.isInteger(Number(stock.value)))) {
      stock.classList.add('campo-error');
      stock.nextElementSibling.textContent = 'El stock debe ser sin decimales e igual o mayor a 0';
      formularioValido = false;
    }

    if (formularioValido) {
      document.querySelector('#mensaje-confirmacion').textContent = 'Producto guardado';
    }
  });
}
//-----------------------------------------------------------------------------------------------------------------

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

const productos = [

    {
        id: 1,
        nombre: "Alimento para Perros",
        precio: 18990,
        imagen: "imagenes/alimento-perro.jpg"
    },

    {
        id: 2,
        nombre: "Alimento para Gatos",
        precio: 15990,
        imagen: "imagenes/alimento-gato.jpg"
    },

    {
        id: 3,
        nombre: "Correa para Perros",
        precio: 7990,
        imagen: "imagenes/correa-perro.jpg"
    },

    {
        id: 4,
        nombre: "Juguete para Mascotas",
        precio: 4990,
        imagen: "imagenes/juguete.jpg"
    }

];


const listaProductos =
    document.getElementById("listaProductos");


function mostrarProductos() {

    productos.forEach(function (producto) {

        const tarjeta =
            document.createElement("article");

        tarjeta.classList.add("producto-card");


        tarjeta.innerHTML = `

            <img
                src="${producto.imagen}"
                alt="${producto.nombre}"
            >

            <h3>${producto.nombre}</h3>

            <p class="precio">
                $${producto.precio.toLocaleString("es-CL")}
            </p>

            <a
                href="detalle-producto.html?id=${producto.id}"
                class="boton"
            >
                Ver producto
            </a>

        `;


        listaProductos.appendChild(tarjeta);

    });

}


mostrarProductos();