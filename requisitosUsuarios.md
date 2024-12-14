# Usuarios

## Ruta principal para los usuarios

URL: http://localhost:3500/user

Para probar las rutas tanto con usuarios como administradores tenemos a los siguientes en la BBDD:
-Carla.user password: carla.user
-Pablo.user password: pablo.user
-Ivan.user password: ivan.user
-Luisa.user password: luisa.user
-Anjara.admin password: anjara.admin
-Paula.admin password: paula.admin

## Registro de un nuevo usuario

URL: (http://localhost:3500/user/register)
MÉTODO: POST
BODY: username, password, role

Respuesta:

- Responde con los datos del nuevo usuario registrado, incluido el id y la contraseña encriptada.

## Realizar login para devolver el token

URL: (http://localhost:3500/user/login)
MÉTODO: POST
BODY: username, password

Respuesta:

- Responde con el token generado para el usuario.

## Recuperar la información del usuario autenticado

URL: (http://localhost:3500/user/profile)
MÉTODO: GET
AUTH-BEARER: token

Respuesta:

- Un array con todos los datos del usuario.




