# EVENTOS

## Ruta principal para los eventos

URL: (http://localhost:3500/events)

Para probar las rutas tanto con usuarios como administradores tenemos a los siguientes en la BBDD:
-Carla.user password: carla.user
-Pablo.user password: pablo.user
-Ivan.user password: ivan.user
-Luisa.user password: luisa.user
-Anjara.admin password: anjara.admin
-Paula.admin password: paula.admin

## Recuperación de todos los eventos

URL: (http://localhost:3500/events/searchEvents)
MÉTODO: GET

Respuesta:

- Un array con todos los eventos.

## Recuperación de eventos por el id

URL: (http://localhost:3500/events/searhEventBy/
MÉTODO: GET
LINK: TRAS EL ULTIMO / AÑADIR EL Nº DE ID DEL EVENTO QUE SE QUIERE VISUALIZAR

Respuesta:

- Un array con todos los datos del evento buscado.

## Crear un nuevo evento

URL: (http://localhost:3500/events/addEvent)
MÉTODO: POST
BODY: nombre, descripcion, fecha, ubicacion, tipoDeporte, organizador (el organizador debe ser un admin)
AUTH-BEARER: token (debe ser un admin para poder crear un evento)

Respuesta:

- Un array con todos los datos del evento creado y el token del usuario que crea el evento.

## Borrar un evento por id

URL: (http://localhost:3500/events/deleteEvent/)
MÉTODO: DELETE
LINK: TRAS EL ULTIMO / AÑADIR EL Nº DE ID DEL EVENTO QUE SE QUIERE VISUALIZAR
AUTH-BEARER: token (debe ser un admin para poder eliminar un evento)

Respuesta:

- Indica que se ha eliminado con exito y devuelve el token del administrador que lo ha borrado.

## Actualizar un evento ya existente por id

URL: (http://localhost:3500/events/updateEventBy/)
MÉTODO: PUT
BODY: id, nombre, descripcion, fecha, ubicacion, tipoDeporte (solo necesita el dato del nombre del evento o el id y lo que se quiera actualizar, no hace falta rellenar todo de nuevo)
AUTH-BEARER: token (debe ser un admin para poder actualizar un evento)

Respuesta:

- Indica que se ha actualizado con exito y devuelve el token del administrador que lo ha actualizado.


RUTAS AVANZADAS:

## Busqueda de eventos próximos por fecha

URL: (http://localhost:3500/events/upComing?)
MÉTODO: GET
QUERY PARAMETERS: parameter: fechaActual= value: fecha de hoy en formato año, mes, día

Respuesta:

- Un array con los tres proximos eventos.

## Busqueda por tipo de deporte

URL: (http://localhost:3500/events/event?)
MÉTODO: GET
QUERY PARAMETERS: parameter: tipoDeporte= value: el tipo de deporte que se quiera buscar

Respuesta:

- Un array con todos los resultados que incluyan ese tipo de deporte.

## Buscar por rango de fechas

URL: (http://localhost:3500/events/event?)
MÉTODO: GET
QUERY PARAMETERS: parameter: from= se inserta una fecha en formato año, mes, día  value: to= se inserta otra fecha en el mismo formato

Respuesta:

- Un array con todos los resultados de eventos que se encuentren entre las fechas indicadas.


