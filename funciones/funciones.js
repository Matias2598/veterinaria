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

/* editar producto (admin-producto-form) */
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

/* Contacto */
const formContacto = document.getElementById("formContacto");

if (formContacto) {

    const nombreContacto = document.getElementById("nombre");
    const correoContacto = document.getElementById("correo");
    const comentarioContacto = document.getElementById("comentario");

    const errorNombreContacto = document.getElementById("errorNombre");
    const errorCorreoContacto = document.getElementById("errorCorreo");
    const errorMensajeContacto = document.getElementById("errorMensaje");

    const mensajeContacto = document.getElementById("mensajeContacto");

    formContacto.addEventListener("submit", function (evento) {

        evento.preventDefault();

        errorNombreContacto.textContent = "";
        errorCorreoContacto.textContent = "";
        errorMensajeContacto.textContent = "";
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
        } else if (!correoTieneDominioValido(correoContacto.value)) {
            errorCorreoContacto.textContent = "Ingrese un correo @duoc.cl, @profesor.duoc.cl o @gmail.com.";
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
/* detalle-producto */
const detalleProducto = document.getElementById("detalleProducto");

if (detalleProducto) {

    const parametros = new URLSearchParams(window.location.search);
    const idProducto = Number(parametros.get("id"));

    const productoActual = productos.find(item => item.id === idProducto);

    const migaNombre = document.getElementById("migaNombre");
    const imagenProducto = document.getElementById("imagenProducto");
    const nombreProducto = document.getElementById("nombreProducto");
    const precioProducto = document.getElementById("precioProducto");
    const descripcionProducto = document.getElementById("descripcionProducto");

    const formAgregarCarrito = document.getElementById("formAgregarCarrito");
    const cantidadProducto = document.getElementById("cantidad");
    const mensajeAgregado = document.getElementById("mensajeAgregado");

    const listaRelacionados = document.getElementById("listaRelacionados");

    if (!productoActual) {

        detalleProducto.innerHTML = "<p>No encontramos el producto que buscas.</p>";

    } else {

        if (migaNombre) migaNombre.textContent = productoActual.nombre;

        imagenProducto.src = productoActual.imagen;
        imagenProducto.alt = productoActual.nombre;

        nombreProducto.textContent = productoActual.nombre;
        precioProducto.textContent = formatearPrecio(productoActual.precio);

        if (descripcionProducto) {
            descripcionProducto.textContent =
                productoActual.descripcion || "Producto de calidad para el cuidado de tu mascota.";
        }

        if (formAgregarCarrito) {

            formAgregarCarrito.addEventListener("submit", function (evento) {

                evento.preventDefault();

                const cantidadElegida = Number(cantidadProducto.value) || 1;

                for (let i = 0; i < cantidadElegida; i++) {
                    agregarAlCarrito(productoActual);
                }

                mensajeAgregado.textContent = "Producto añadido al carrito.";
                mensajeAgregado.style.color = "green";
            });
        }

        if (listaRelacionados) {

            productos
                .filter(item => item.id !== idProducto)
                .forEach(function (item) {

                    const elemento = document.createElement("li");
                    elemento.classList.add("producto-card");

                    elemento.innerHTML = `
                        <a href="detalle-producto.html?id=${item.id}">
                            <img src="${item.imagen}" alt="${item.nombre}">
                            <h3>${item.nombre}</h3>
                            <p class="precio">${formatearPrecio(item.precio)}</p>
                        </a>
                    `;

                    listaRelacionados.appendChild(elemento);
                });
        }
    }
}
/* carrito */
const tablaCarrito = document.getElementById("tablaCarrito");

if (tablaCarrito) {

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
                <td>${formatearPrecio(item.precio)}</td>
                <td>
                    <button type="button" class="restar" data-id="${item.id}">-</button>
                    <span>${item.cantidad}</span>
                    <button type="button" class="sumar" data-id="${item.id}">+</button>
                </td>
                <td>${formatearPrecio(item.precio * item.cantidad)}</td>
                <td><button type="button" class="eliminar" data-id="${item.id}">Eliminar</button></td>
            `;

            cuerpoTablaCarrito.appendChild(fila);
        });

        actualizarTotal(carrito);
    }

    function actualizarTotal(carrito) {

        const subtotal = calcularTotalCarrito(carrito);
        const total = subtotal - subtotal * descuentoAplicado;

        totalCarrito.textContent = formatearPrecio(Math.round(total));
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

        if (carrito.length === 0) {
            alert("Tu carrito está vacío.");
            return;
        }

        alert("¡Compra realizada con éxito! Gracias por tu preferencia.");

        guardarCarrito([]);
        descuentoAplicado = 0;
        cupon.value = "";
        mensajeCupon.textContent = "";

        renderizarCarrito();
    });

    renderizarCarrito();
}

/* admin-productos */
const PRODUCTOS_ADMIN_KEY = "productosAdmin";

function obtenerProductosAdmin() {

    const datos = localStorage.getItem(PRODUCTOS_ADMIN_KEY);

    if (datos) {
        return JSON.parse(datos);
    }

    localStorage.setItem(PRODUCTOS_ADMIN_KEY, JSON.stringify(productos));
    return productos;
}

function guardarProductosAdmin(lista) {
    localStorage.setItem(PRODUCTOS_ADMIN_KEY, JSON.stringify(lista));
}

const cuerpoProductosAdmin = document.getElementById("cuerpoProductosAdmin");

if (cuerpoProductosAdmin) {

    function renderizarTablaProductosAdmin() {

        const lista = obtenerProductosAdmin();

        cuerpoProductosAdmin.innerHTML = "";

        lista.forEach(function (item) {

            const fila = document.createElement("tr");

            fila.innerHTML = `
                <td>${item.codigo || item.id}</td>
                <td>${item.nombre}</td>
                <td>${formatearPrecio(item.precio)}</td>
                <td>${item.stock ?? "-"}</td>
                <td>${item.categoria || "-"}</td>
                <td>
                    <a href="admin-producto-form.html?id=${item.id}">Editar</a>
                    <button type="button" class="eliminar" data-id="${item.id}">Eliminar</button>
                </td>
            `;

            cuerpoProductosAdmin.appendChild(fila);
        });
    }

    cuerpoProductosAdmin.addEventListener("click", function (evento) {

        if (!evento.target.classList.contains("eliminar")) return;

        const id = Number(evento.target.dataset.id);

        if (!confirm("¿Eliminar este producto?")) return;

        guardarProductosAdmin(obtenerProductosAdmin().filter(item => item.id !== id));
        renderizarTablaProductosAdmin();
    });

    renderizarTablaProductosAdmin();
}

/*admin-usuarios*/
const USUARIOS_ADMIN_KEY = "usuariosAdmin";

function obtenerUsuariosAdmin() {
    const datos = localStorage.getItem(USUARIOS_ADMIN_KEY);
    return datos ? JSON.parse(datos) : [];
}

function guardarUsuariosAdmin(lista) {
    localStorage.setItem(USUARIOS_ADMIN_KEY, JSON.stringify(lista));
}

const cuerpoTablaUsuariosAdmin = document.getElementById("cuerpoTablaUsuariosAdmin");

if (cuerpoTablaUsuariosAdmin) {

    function renderizarTablaUsuariosAdmin() {

        const lista = obtenerUsuariosAdmin();

        cuerpoTablaUsuariosAdmin.innerHTML = "";

        lista.forEach(function (item) {

            const fila = document.createElement("tr");

            fila.innerHTML = `
                <td>${item.run}</td>
                <td>${item.nombre}</td>
                <td>${item.apellidos}</td>
                <td>${item.correo}</td>
                <td>${item.tipo}</td>
                <td>
                    <a href="admin-usuario-form.html?run=${item.run}">Editar</a>
                    <button type="button" class="eliminar" data-run="${item.run}">Eliminar</button>
                </td>
            `;

            cuerpoTablaUsuariosAdmin.appendChild(fila);
        });
    }

    cuerpoTablaUsuariosAdmin.addEventListener("click", function (evento) {

        if (!evento.target.classList.contains("eliminar")) return;

        const runSeleccionado = evento.target.dataset.run;

        if (!confirm("¿Eliminar este usuario?")) return;

        guardarUsuariosAdmin(obtenerUsuariosAdmin().filter(item => item.run !== runSeleccionado));
        renderizarTablaUsuariosAdmin();
    });

    renderizarTablaUsuariosAdmin();
}

//admin-usuario-form
const formUsuario = document.getElementById("formUsuario");

if (formUsuario) {

    const tituloFormularioUsuario = document.getElementById("tituloFormularioUsuario");

    const run = document.getElementById("run");
    const nombreUsuario = document.getElementById("nombreUsuario");
    const apellidos = document.getElementById("apellidos");
    const correoUsuario = document.getElementById("correoUsuario");
    const fechaNacimiento = document.getElementById("fechaNacimiento");
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

    regiones.forEach(function (item) {

        const opcion = document.createElement("option");
        opcion.value = item.nombre;
        opcion.textContent = item.nombre;

        region.appendChild(opcion);
    });

    function cargarComunas(nombreRegion) {

        comuna.innerHTML = '<option value="">Seleccione la comuna</option>';

        const regionEncontrada = regiones.find(item => item.nombre === nombreRegion);

        if (!regionEncontrada) return;

        regionEncontrada.comunas.forEach(function (nombreComuna) {

            const opcion = document.createElement("option");
            opcion.value = nombreComuna;
            opcion.textContent = nombreComuna;

            comuna.appendChild(opcion);
        });
    }

    region.addEventListener("change", function () {
        cargarComunas(region.value);
    });

    const parametrosUsuario = new URLSearchParams(window.location.search);
    const runEditar = parametrosUsuario.get("run");

    if (runEditar) {

        const usuarioExistente = obtenerUsuariosAdmin().find(item => item.run === runEditar);

        if (usuarioExistente) {

            if (tituloFormularioUsuario) tituloFormularioUsuario.textContent = "Editar usuario";

            run.value = usuarioExistente.run;
            run.readOnly = true;
            nombreUsuario.value = usuarioExistente.nombre;
            apellidos.value = usuarioExistente.apellidos;
            correoUsuario.value = usuarioExistente.correo;
            fechaNacimiento.value = usuarioExistente.fechaNacimiento || "";
            tipoUsuario.value = usuarioExistente.tipo;
            region.value = usuarioExistente.region;

            cargarComunas(usuarioExistente.region);
            comuna.value = usuarioExistente.comuna;

            direccion.value = usuarioExistente.direccion;
        }
    }

    formUsuario.addEventListener("submit", function (evento) {

        evento.preventDefault();

        [errorRun, errorNombreUsuario, errorApellidos, errorCorreoUsuario,
        errorTipoUsuario, errorRegion, errorComuna, errorDireccion]
            .forEach(elemento => elemento.textContent = "");

        mensajeUsuario.textContent = "";

        let valido = true;

        if (!validarRun(run.value)) {
            errorRun.textContent = "RUN inválido. Ingréselo sin puntos ni guion, ej: 19011022K.";
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

        if (correoUsuario.value.trim() === "" || correoUsuario.value.length > 100) {
            errorCorreoUsuario.textContent = "El correo es obligatorio (máx. 100 caracteres).";
            valido = false;
        } else if (!correoTieneDominioValido(correoUsuario.value)) {
            errorCorreoUsuario.textContent = "Solo se aceptan correos @duoc.cl, @profesor.duoc.cl o @gmail.com.";
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

        if (!valido) return;

        const lista = obtenerUsuariosAdmin();

        const usuarioGuardado = {
            run: run.value.toUpperCase().trim(),
            nombre: nombreUsuario.value.trim(),
            apellidos: apellidos.value.trim(),
            correo: correoUsuario.value.trim(),
            fechaNacimiento: fechaNacimiento.value || null,
            tipo: tipoUsuario.value,
            region: region.value,
            comuna: comuna.value,
            direccion: direccion.value.trim()
        };

        if (runEditar) {

            const indice = lista.findIndex(item => item.run === runEditar);
            lista[indice] = usuarioGuardado;

        } else {

            if (lista.some(item => item.run === usuarioGuardado.run)) {
                errorRun.textContent = "Ya existe un usuario registrado con ese RUN.";
                return;
            }

            lista.push(usuarioGuardado);
        }

        guardarUsuariosAdmin(lista);

        mensajeUsuario.textContent = "Usuario guardado correctamente.";
        mensajeUsuario.style.color = "green";

        setTimeout(function () {
            window.location.href = "admin-usuarios.html";
        }, 800);
    });
}

