/* login */
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

/* producto */
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

/* editar producto */
const formProducto = document.getElementById("formProducto");

const codigo = document.getElementById("codigo");
const nombre = document.getElementById("nombre");
const descripcion = document.getElementById("descripcion");
const precio = document.getElementById("precio");
const stock = document.getElementById("stock");
const stockCritico = document.getElementById("stockCritico");
const categoria = document.getElementById("categoria");

const errorCodigo = document.getElementById("errorCodigo");
const errorNombre = document.getElementById("errorNombre");
const errorDescripcion = document.getElementById("errorDescripcion");
const errorPrecio = document.getElementById("errorPrecio");
const errorStock = document.getElementById("errorStock");
const errorStockCritico = document.getElementById("errorStockCritico");
const errorCategoria = document.getElementById("errorCategoria");

const mensajeProducto =
    document.getElementById("mensajeProducto");


formProducto.addEventListener("submit", function (evento) {

    evento.preventDefault();

    errorCodigo.textContent = "";
    errorNombre.textContent = "";
    errorDescripcion.textContent = "";
    errorPrecio.textContent = "";
    errorStock.textContent = "";
    errorStockCritico.textContent = "";
    errorCategoria.textContent = "";
    mensajeProducto.textContent = "";

    let valido = true;


    // CÓDIGO

    if (codigo.value.trim() === "") {

        errorCodigo.textContent =
            "El código del producto es obligatorio.";

        valido = false;

    } else if (codigo.value.trim().length < 3) {

        errorCodigo.textContent =
            "El código debe tener al menos 3 caracteres.";

        valido = false;
    }


    // NOMBRE

    if (nombre.value.trim() === "") {

        errorNombre.textContent =
            "El nombre del producto es obligatorio.";

        valido = false;

    } else if (nombre.value.trim().length > 100) {

        errorNombre.textContent =
            "El nombre no puede superar los 100 caracteres.";

        valido = false;
    }


    // DESCRIPCIÓN

    if (descripcion.value.trim().length > 500) {

        errorDescripcion.textContent =
            "La descripción no puede superar los 500 caracteres.";

        valido = false;
    }


    // PRECIO

    if (precio.value === "") {

        errorPrecio.textContent =
            "El precio es obligatorio.";

        valido = false;

    } else if (Number(precio.value) < 0) {

        errorPrecio.textContent =
            "El precio debe ser mayor o igual a 0.";

        valido = false;
    }


    // STOCK

    if (stock.value === "") {

        errorStock.textContent =
            "El stock es obligatorio.";

        valido = false;

    } else if (Number(stock.value) < 0) {

        errorStock.textContent =
            "El stock debe ser mayor o igual a 0.";

        valido = false;
    }


    // STOCK CRÍTICO

    if (
        stockCritico.value !== "" &&
        Number(stockCritico.value) < 0
    ) {

        errorStockCritico.textContent =
            "El stock crítico debe ser mayor o igual a 0.";

        valido = false;
    }


    // CATEGORÍA

    if (categoria.value === "") {

        errorCategoria.textContent =
            "Debe seleccionar una categoría.";

        valido = false;
    }


    // RESULTADO

    if (valido) {

        mensajeProducto.textContent =
            "Producto actualizado correctamente.";

    }

});

/* nuevo usuario*/
const formularioUsuario = document.getElementById("formUsuario");

const campoNombre = document.getElementById("nombre");
const campoCorreo = document.getElementById("correo");
const campoPassword = document.getElementById("password");
const campoConfirmarPassword = document.getElementById("confirmarPassword");
const campoRol = document.getElementById("rol");

const mensajeErrorNombre = document.getElementById("errorNombre");
const mensajeErrorCorreo = document.getElementById("errorCorreo");
const mensajeErrorPassword = document.getElementById("errorPassword");
const mensajeErrorConfirmarPassword = document.getElementById("errorConfirmarPassword");
const mensajeErrorRol = document.getElementById("errorRol");

const mensajeUsuario = document.getElementById("mensajeUsuario");


formularioUsuario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    // Limpiar mensajes anteriores
    mensajeErrorNombre.textContent = "";
    mensajeErrorCorreo.textContent = "";
    mensajeErrorPassword.textContent = "";
    mensajeErrorConfirmarPassword.textContent = "";
    mensajeErrorRol.textContent = "";
    mensajeUsuario.textContent = "";

    let formularioValido = true;


    // VALIDAR NOMBRE

    if (campoNombre.value.trim() === "") {

        mensajeErrorNombre.textContent =
            "El nombre es obligatorio.";

        formularioValido = false;

    } else if (campoNombre.value.trim().length < 3) {

        mensajeErrorNombre.textContent =
            "El nombre debe tener al menos 3 caracteres.";

        formularioValido = false;
    }


    // VALIDAR CORREO

    if (campoCorreo.value.trim() === "") {

        mensajeErrorCorreo.textContent =
            "El correo es obligatorio.";

        formularioValido = false;

    } else if (!campoCorreo.value.includes("@")) {

        mensajeErrorCorreo.textContent =
            "Ingrese un correo electrónico válido.";

        formularioValido = false;
    }


    // VALIDAR CONTRASEÑA

    if (campoPassword.value === "") {

        mensajeErrorPassword.textContent =
            "La contraseña es obligatoria.";

        formularioValido = false;

    } else if (campoPassword.value.length < 6) {

        mensajeErrorPassword.textContent =
            "La contraseña debe tener al menos 6 caracteres.";

        formularioValido = false;
    }


    // VALIDAR CONFIRMACIÓN DE CONTRASEÑA

    if (campoConfirmarPassword.value === "") {

        mensajeErrorConfirmarPassword.textContent =
            "Debe confirmar la contraseña.";

        formularioValido = false;

    } else if (
        campoPassword.value !== campoConfirmarPassword.value
    ) {

        mensajeErrorConfirmarPassword.textContent =
            "Las contraseñas no coinciden.";

        formularioValido = false;
    }


    // VALIDAR ROL

    if (campoRol.value === "") {

        mensajeErrorRol.textContent =
            "Debe seleccionar un rol.";

        formularioValido = false;
    }


    // RESULTADO

    if (formularioValido) {

        mensajeUsuario.textContent =
            "Usuario creado correctamente.";

        formularioUsuario.reset();
    }

});