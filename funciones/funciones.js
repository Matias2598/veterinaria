//Registro del usuario
const registro = document.querySelector('#registro');

if(registro){
    const patronCorreo = /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;
    const contrasena = document.querySelector('#contrasena');
    const confirmarContrasena = document.querySelector('#confirmar-contrasena');
    const correo = document.querySelector('#correo');
    const confirmarCorreo = document.querySelector('#confirmarCorreo');
    const region = document.querySelector('#region');
    const confirmarRegion= document.querySelector('#confirmarRegion');

    //Ejemplos de comunas por region
    const comunasPorRegion = {
        metropolitana: ['Calera de Tango', 'San Bernardo', 'Santiago', 'Peñaflor'],
        los_lagos: ['Rio Negro', 'Osorno', 'Frutillar', 'Calbuco'],
        magallanes: ['Rio Verde', 'Laguna Blanca', 'Torres del Paine', 'Cabo de Hornos'],
    };

    region.addEventListener('change', function(){
        const opciones = comunasPorRegion[region.value];
        comunasPorRegion.innerHTML = '';

        if(!opciones){
            comunasPorRegion.innerHTML = '<option value="">No existen comunas para esta región</option>';
            return;
        }

        comuna.innerHTML = '<option value="">Selecciona una comuna</option>';
        opciones.forEach(function(nombreComuna){
            const opcion =  document.createElement('option');
            opcion.value = nombreComuna.toLowerCase();
            opcion.textContent = nombreComuna;
            comunasPorRegion.appendChild(opcion);
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
      correo.nextElementSibling.textContent = 'Correo inválido, debe ser @hotmail.com o @gmail.com';
      formularioValido = false;
    }

    if (confirmarCorreo.value.trim() !== '' && confirmarCorreo.value.trim() !== correo.value.trim()) {
      confirmarCorreo.classList.add('campo-error');
      confirmarCorreo.nextElementSibling.textContent = 'Los correos no coinciden';
      formularioValido = false;
    }

    if (contrasena.value !== '' && (contrasena.value.length < 10 || contrasena.value.length > 20)) {
      contrasena.classList.add('campo-error');
      contrasena.nextElementSibling.textContent = 'Debe tener entre 10 y 20 caracteres';
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