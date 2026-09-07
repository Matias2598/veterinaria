# Veterinaria San Marcos

Tienda online desarrollada como Evaluación Parcial 1 del ramo **Desarrollo Fullstack II (DSY1104)** — Duoc UC.

El sitio consiste en una tienda de productos para mascotas (vista pública) y un panel de administración (vista protegida) para gestionar productos y usuarios, construidos con HTML5, CSS y JavaScript.

## Integrantes

- Matías Araya Venegas
- Natanael Valenzuela
- Esteban Acuña

## Cómo abrir el sitio

Este proyecto es frontend estático (sin backend ni instalación de dependencias). Para verlo:

1. Clona o descarga el repositorio.
2. Abre el archivo `index.html` directamente en tu navegador (doble clic, o clic derecho → "Abrir con" tu navegador preferido).

No requiere servidor local, aunque también puedes usar la extensión **Live Server** de VS Code si prefieres verlo con recarga automática.

## Estructura del proyecto

```
veterinaria/
├── index.html              # Página de inicio
├── nosotros.html
├── productos.html
├── detalle-producto.html
├── carrito.html
├── contacto.html
├── login.html
├── registro.html
├── blogs.html
├── detalle-blog-1.html
├── detalle-blog-2.html
├── admin-home.html          # Panel administrador
├── admin-productos.html
├── admin-producto-form.html
├── admin-usuarios.html
├── admin-usuario-form.html
├── css/
│   └── style.css            # Una única hoja de estilos para todo el sitio
├── funciones/
│   └── funciones.js         # Un único archivo JS para todo el sitio
└── imagenes/
```

## Tecnologías

- HTML5 semántico
- CSS3 (un solo archivo compartido)
- JavaScript vanilla (un solo archivo compartido, con validación de formularios y `localStorage` para carrito/productos/usuarios del admin)
- Git / GitHub para el trabajo colaborativo

