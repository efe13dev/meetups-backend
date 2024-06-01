# Meetups

[![Alt text](https://img.youtube.com/vi/n9YUwfJ52zU/0.jpg)](https://www.youtube.com/watch?v=n9YUwfJ52zU)

## DESCRIPCIÓN

### Backend de la app Meetups:

- API que se encarga de escuchar las peticiones del cliente y devolver una respuesta

- Esta API se conecta a una base de datos de MySQL donde se guarda toda la información.

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

- **INSCRIPCIONES**

  - **POST** http://localhost:3000/inscription/:id  
    Inscribirse a un meetup pasando el token del usuario y id del meetup

  - **DELETE** http://localhost:3000/inscription/:id  
    Darse de baja de un meetup pasando el token del usuario y id del meetup

## Notas de uso

- Para arrancar el servidor usar el script `'npm run dev'`, uso una nueva funcionalidad de node llamada `watch` que permite escuchar los cambios en el servidor y reiniciarlo automáticamente, (lo que se hacía con _nodemon_ antes).
  Pero para ello debes **usar la versión de node 21.0.0 o superior**.
