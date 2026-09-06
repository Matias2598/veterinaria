// ===== Registro del usuario =====
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

// ===== Formulario de producto admin =====
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