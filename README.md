# Meetups

## DESCRIPCIÓN

Portal web que muestra meetups por ciudad y temática y permite inscribirse a
estos

### USUARIOS ANÓNIMOS:

- Visualizar el listado de meetups ordenador por fecha más próxima (no
  aparecen los que ya han pasado). Solo debe aparecer título, foto,
  temática, localidad, fecha y hora y número de asistentes.

- Filtrar meetups por:

1. Ciudad
2. Temática

- Visualizar un meetup en detalle. Deben de aparecer los mismos datos que en listado, pero a mayores la descripción y el listado de asistentes
- Login (email y password)
- Registro (email, password, nombre, biografía y avatar)

### USUARIOS REGISTRADOS:

- Lo mismo que los anónimos
- Inscribirse o darse de baja de un meetup
- Publicación de meetups (título, descripción, foto, temática, localidad y
  fecha y hora).

## ENDPOINTS:

- **USUARIOS**

  - **GET** http://localhost:3000/users  
    Recupera un usuario pasando un token

  - **POST** http://localhost:3000/login  
    Login de un usuario pasando un body con email y password

  - **POST** http://localhost:3000/users  
    Registro de un usuario pasando un body con email, password, nombre, biografía y avatar

- **MEETUPS**

  - **GET** http://localhost:3000/meetups  
    Recupera todos los meetups ordenadas por fecha y hora,  
    (no aparecen las que ya han pasado)

  - **GET** http://localhost:3000/meetups/:id  
    Recupera un meetup por su id

  - **POST** http://localhost:3000/meetups  
    Crear una nueva meetup pasando un body con el título, descripción, foto, temática, localidad y fecha y hora,
    (se necesita token).

## Notas de uso

- Para usar el script `'npm run dev'` uso una nueva funcionalidad de node llamada `watch` que permite escuchar los cambios en el servidor y reiniciarlo automáticamente, (lo que se hacía con _nodemon_ antes).
  Pero para ello debes usar la versión de node 21.0.0 o superior.

- Para acceder como uno de los usuarios ya registrados usa: nombre_de_usuario@email.com
- Todas las passwords de los usuarios que hay registrados son 12345
