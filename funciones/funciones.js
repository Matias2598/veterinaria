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

if(formLogin) {
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

}
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

if (listaProductos) {
    mostrarProductos();
}

//====================================Esteban
//Formulario de usuario admin
const formUsuario = document.getElementById("formUsuario");

if (formUsuario) {

    const run = document.getElementById("run");
    const nombreUsuario = document.getElementById("nombreUsuario");
    const apellidos = document.getElementById("apellidos");
    const correoUsuario = document.getElementById("correoUsuario");
    const tipoUsuario = document.getElementById("tipoUsuario");
    const region = document.getElementById("region");
    const comuna = document.getElementById("comuna");
    const direccion = document.getElementById("direccion");

    const errorRun = document.getElementById("errorRun");
    const errorNombreUsuario = document.getElementById("errorNombreUsuario");
    const errorApellidos = document.getElementById("errorApellidos");
    const errorCorreoUsuario = document.getElementById("errorCorreoUsuario");
    const errorTipoUsuario = document.getElementById("errorTipoUsuario");
    const errorRegion = document.getElementById("errorRegion");
    const errorComuna = document.getElementById("errorComuna");
    const errorDireccion = document.getElementById("errorDireccion");

    const mensajeUsuario = document.getElementById("mensajeUsuario");

    const comunasPorRegion = {
        Metropolitana: ["Santiago", "San Bernardo", "Puente Alto", "Maipú"],
        Valparaíso: ["Valparaíso", "Viña del Mar", "Quilpué"],
        Biobío: ["Concepción", "Talcahuano", "Los Ángeles"]
    };

        Object.keys(comunasPorRegion).forEach(function (nombreRegion) {
        const opcion = document.createElement("option");
        opcion.value = nombreRegion;
        opcion.textContent = nombreRegion;
        region.appendChild(opcion);
    });

    region.addEventListener("change", function () {

        const opciones = comunasPorRegion[region.value];

        comuna.innerHTML = '<option value="">Seleccione la comuna</option>';

        if (!opciones) return;

        opciones.forEach(function (nombreComuna) {
            const opcion = document.createElement("option");
            opcion.value = nombreComuna;
            opcion.textContent = nombreComuna;
            comuna.appendChild(opcion);
        });
    });

    function validarRun(valor) {

        const limpio = valor.toUpperCase().trim();

        if (!/^[0-9]{6,8}[0-9K]$/.test(limpio)) return false;

        const cuerpo = limpio.slice(0, -1);
        const dv = limpio.slice(-1);

        let suma = 0;
        let multiplicador = 2;

        for (let i = cuerpo.length - 1; i >= 0; i--) {
            suma += Number(cuerpo[i]) * multiplicador;
            multiplicador = multiplicador < 7 ? multiplicador + 1 : 2;
        }

        const resto = 11 - (suma % 11);
        const dvEsperado = resto === 11 ? "0" : resto === 10 ? "K" : String(resto);

        return dv === dvEsperado;
    }

    formUsuario.addEventListener("submit", function (evento) {

        evento.preventDefault();

        [errorRun, errorNombreUsuario, errorApellidos, errorCorreoUsuario,
        errorTipoUsuario, errorRegion, errorComuna, errorDireccion]
            .forEach(el => el.textContent = "");

        mensajeUsuario.textContent = "";

        let valido = true;

        if (!validarRun(run.value)) {
            errorRun.textContent = "RUN inválido. Sin puntos ni guion, ej: 19011022K.";
            valido = false;
        }

        if (nombreUsuario.value.trim() === "" || nombreUsuario.value.length > 50) {
            errorNombreUsuario.textContent = "El nombre es obligatorio (máx. 50 caracteres).";
            valido = false;
        }

        if (apellidos.value.trim() === "" || apellidos.value.length > 100) {
            errorApellidos.textContent = "Los apellidos son obligatorios (máx. 100 caracteres).";
            valido = false;
        }

        if (correoUsuario.value.trim() === "") {
            errorCorreoUsuario.textContent = "El correo es obligatorio.";
            valido = false;
        }

        if (tipoUsuario.value === "") {
            errorTipoUsuario.textContent = "Seleccione un tipo de usuario.";
            valido = false;
        }

        if (region.value === "") {
            errorRegion.textContent = "Seleccione una región.";
            valido = false;
        }

        if (comuna.value === "") {
            errorComuna.textContent = "Seleccione una comuna.";
            valido = false;
        }

        if (direccion.value.trim() === "" || direccion.value.length > 300) {
            errorDireccion.textContent = "La dirección es obligatoria (máx. 300 caracteres).";
            valido = false;
        }

        if (valido) {
            mensajeUsuario.textContent = "Usuario guardado correctamente.";
            mensajeUsuario.style.color = "green";
            formUsuario.reset();
        }
    });
}

/* funciones del carrito, compartidas */

function obtenerCarrito() {
    const datos = localStorage.getItem("carritoVeterinaria");
    return datos ? JSON.parse(datos) : [];
}

function guardarCarrito(carrito) {
    localStorage.setItem("carritoVeterinaria", JSON.stringify(carrito));
}

function agregarAlCarrito(producto) {

    const carrito = obtenerCarrito();
    const existente = carrito.find(item => item.id === producto.id);

    if (existente) {
        existente.cantidad += 1;
    } else {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen,
            cantidad: 1
        });
    }

    guardarCarrito(carrito);
}

/* carrito de compras */

const tablaCarrito = document.getElementById("tablaCarrito");

if (tablaCarrito) {

    const mensajePago = document.getElementById("mensajePago");
    const cuerpoTablaCarrito = document.getElementById("cuerpoTablaCarrito");
    const mensajeVacio = document.getElementById("mensajeVacio");
    const totalCarrito = document.getElementById("totalCarrito");

    const formCupon = document.getElementById("formCupon");
    const cupon = document.getElementById("cupon");
    const mensajeCupon = document.getElementById("mensajeCupon");

    const botonPagar = document.getElementById("botonPagar");

    const cuponesValidos = { MASCOTA10: 0.10, VETSANMARCOS: 0.15 };

    let descuentoAplicado = 0;

    function renderizarCarrito() {

        const carrito = obtenerCarrito();

        cuerpoTablaCarrito.innerHTML = "";

        if (carrito.length === 0) {

            tablaCarrito.hidden = true;
            mensajeVacio.hidden = false;

            actualizarTotal(carrito);
            return;
        }

        tablaCarrito.hidden = false;
        mensajeVacio.hidden = true;

        carrito.forEach(function (item) {

            const fila = document.createElement("tr");

            fila.innerHTML = `
                <td>${item.nombre}</td>
                <td>$${item.precio.toLocaleString("es-CL")}</td>
                <td>
                    <button type="button" class="restar" data-id="${item.id}">-</button>
                    <span>${item.cantidad}</span>
                    <button type="button" class="sumar" data-id="${item.id}">+</button>
                </td>
                <td>$${(item.precio * item.cantidad).toLocaleString("es-CL")}</td>
                <td><button type="button" class="eliminar" data-id="${item.id}">Eliminar</button></td>
            `;

            cuerpoTablaCarrito.appendChild(fila);
        });

        actualizarTotal(carrito);
    }

    function actualizarTotal(carrito) {

        const subtotal = carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
        const total = subtotal - subtotal * descuentoAplicado;

        totalCarrito.textContent = "$" + Math.round(total).toLocaleString("es-CL");
    }

    cuerpoTablaCarrito.addEventListener("click", function (evento) {

        const boton = evento.target;
        const id = Number(boton.dataset.id);

        if (!id) return;

        const carrito = obtenerCarrito();
        const item = carrito.find(producto => producto.id === id);

        if (!item) return;

        if (boton.classList.contains("sumar")) {

            item.cantidad += 1;

        } else if (boton.classList.contains("restar")) {

            item.cantidad -= 1;

            if (item.cantidad <= 0) {
                carrito.splice(carrito.indexOf(item), 1);
            }

        } else if (boton.classList.contains("eliminar")) {

            carrito.splice(carrito.indexOf(item), 1);
        }

        guardarCarrito(carrito);
        renderizarCarrito();
    });

    formCupon.addEventListener("submit", function (evento) {

        evento.preventDefault();

        mensajeCupon.textContent = "";

        const codigo = cupon.value.trim().toUpperCase();

        if (codigo === "") {
            mensajeCupon.textContent = "Ingresa un código de cupón.";
            return;
        }

        if (cuponesValidos[codigo] === undefined) {

            descuentoAplicado = 0;
            mensajeCupon.textContent = "El cupón ingresado no es válido.";

        } else {

            descuentoAplicado = cuponesValidos[codigo];
            mensajeCupon.style.color = "green";
            mensajeCupon.textContent = `Cupón aplicado: ${descuentoAplicado * 100}% de descuento.`;
        }

        actualizarTotal(obtenerCarrito());
    });


    botonPagar.addEventListener("click", function () {

        const carrito = obtenerCarrito();

        mensajePago.textContent = "";

        if (carrito.length === 0) {

            mensajePago.textContent = "Tu carrito está vacío.";
            mensajePago.style.color = "red";
            return;
        }

        mensajePago.textContent = "¡Compra realizada con éxito! Gracias por tu preferencia.";
        mensajePago.style.color = "green";

        guardarCarrito([]);
        descuentoAplicado = 0;
        cupon.value = "";
        mensajeCupon.textContent = "";

        renderizarCarrito();
    });

    renderizarCarrito();
}

/* contacto */

const formContacto = document.getElementById("formContacto");

if (formContacto) {

    const nombreContacto = document.getElementById("nombre");
    const correoContacto = document.getElementById("correo");
    const comentarioContacto = document.getElementById("comentario");

    const errorNombreContacto = document.getElementById("errorNombre");
    const errorCorreoContacto = document.getElementById("errorCorreo");
    const errorComentarioContacto = document.getElementById("errorComentario");

    const mensajeContacto = document.getElementById("mensajeContacto");

    formContacto.addEventListener("submit", function (evento) {

        evento.preventDefault();

        errorNombreContacto.textContent = "";
        errorCorreoContacto.textContent = "";
        errorComentarioContacto.textContent = "";
        mensajeContacto.textContent = "";

        let valido = true;

        if (nombreContacto.value.trim() === "") {
            errorNombreContacto.textContent = "El nombre es obligatorio.";
            valido = false;
        } else if (nombreContacto.value.length > 100) {
            errorNombreContacto.textContent = "Máximo 100 caracteres.";
            valido = false;
        }

        if (correoContacto.value.trim() === "") {
            errorCorreoContacto.textContent = "El correo es obligatorio.";
            valido = false;
        } else if (correoContacto.value.length > 100) {
            errorCorreoContacto.textContent = "Máximo 100 caracteres.";
            valido = false;
        }

        if (comentarioContacto.value.trim() === "") {
            errorComentarioContacto.textContent = "El comentario es obligatorio.";
            valido = false;
        } else if (comentarioContacto.value.length > 500) {
            errorComentarioContacto.textContent = "Máximo 500 caracteres.";
            valido = false;
        }

        if (valido) {
            mensajeContacto.textContent = "Tu mensaje fue enviado correctamente.";
            mensajeContacto.style.color = "green";
            formContacto.reset();
        }
    });
}