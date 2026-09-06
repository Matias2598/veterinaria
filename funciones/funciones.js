//Registro del usuario
const registro = document.querySelector('#registro');

if(registro){
    const patronCorreo = /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;
    const contraseña = document.querySelector('#contrasena');
    const confirmarContraseña = document.querySelector('#confirmar-contrasena');
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
        opciones.forEach(funcrion(nombreComuna){
            const opcion =  document.createElement('option');
            opcion.value = nombreComuna.toLowerCase();
            opcion.textContent = nombreComuna;
            comunasPorRegion.appendChild(opcion);
        });
    });

    formRegistro.addEventListener('submit', function(e)){
        e.preventDefault();
        let formularioValido = true;
    }
    
}