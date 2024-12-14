const {selectAll, selectByEventName, insertEvent, deleteOneEvent, selectById, updateEvent, searchDate, searchType, searchRangeDates} = require("../models/evento.model");
const {createToken} = require("../../../utils/jwt");
const {checkAdmin} = require("../../../utils/middleware");

const getAll = async (req,res) => {
    try {
        const result = await selectAll();
        return res.json(result[0]);

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Hubo un error al obtener los eventos' }); // Manejo de errores
    }
};

const getById = async (req, res) => {
    const { id } = req.params;  // Extraer el id desde los parámetros de la URL (por ejemplo, /events/:id)
    
    try {
        // Llamar a la función selectById con el id correcto
        const result = await selectById(id);

        if (result.length === 0) {
            
            return res.status(404).json({ error: 'Evento no encontrado' }); // Si no se encuentra el evento
        }

        return res.json(result); // Devolver el evento en formato JSON
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Hubo un error al obtener el evento' });
    }
};

const createEvent = async (req, res) => {
    try {
        if(checkAdmin(req.user.role)){
        const token = createToken(req.user);
        const data = req.body;
        
        // Verificar si ya existe un evento con el mismo nombre
        const selectedEvent = await selectByEventName(data.nombre);
        
        if (selectedEvent.length !== 0) {
            return res.status(400).json({ msg: "El evento ya existe" });
        }

        // Insertar el evento en la base de datos
        const insertedEvent = await insertEvent(data);
        if (insertedEvent === -1) {
            return res.status(400).json({ msg: "No se realizó el insert" });
        }

        // Obtener el evento creado desde la base de datos
        const eventCreated = await selectById(insertedEvent);
        return res.status(200).json({ success: true, data: eventCreated, token });
    } else {
        // Si el usuario no es administrador
        return res.status(403).json({ msg: "Acceso denegado: debe ser administrador" });
    }
    } catch (error) {
        return res.status(500).json({ msg: "Error en el servidor" });
    }
};

const deleteEvent = async (req, res) => {
    try {
        if(checkAdmin(req.user.role)){
           const token = createToken(req.user);
           const result = await deleteOneEvent(req.params.id);
           if(result.affectedRows === 0){
            return res.status(400).json({msg:"No pudo eliminarse"});
           }
           return res.status(200).json({msg:"Eliminado con éxito", token});
    } else {

        return res.status(403).json({ msg: "Acceso denegado: debe ser administrador" });
    }
    } catch (error) {
        return res.status(500).json({ msg: "Error en el servidor" });
    }
};

const putById = async (req, res) => {
    try {
        if (checkAdmin(req.user.role)) {
            const token = createToken(req.user);
            const { nombre, descripcion, fecha, ubicacion } = req.body; // Extraer los datos del cuerpo de la solicitud
            const result = await updateEvent(req.params.id, nombre, descripcion, fecha, ubicacion);
            if (result.affectedRows === 0) {
                return res.status(400).json({ msg: "No pudo actualizarse" });
            }
            return res.status(200).json({ msg: "Actualizado con éxito", token });
        } else {
            return res.status(403).json({ msg: "Acceso denegado: debe ser administrador" });
        }
    } catch (error) {
        return res.status(500).json({ msg: "Error en el servidor" });
    }
};

const upComing = async (req, res) => {
    const { fechaActual } = req.query;
    if (!fechaActual) {
        return res.status(400).json({ error: 'Falta el parámetro de fecha' });
    }
    try {
        const result = await searchDate(fechaActual);
        if (result.length === 0) {
            
            return res.status(404).json({ error: 'No se encontraron eventos después de la fecha proporcionada' }); 
        }
        return res.json(result); // Devolver los 3 eventos siguientes en formato JSON
    } catch (error) {
    
        return res.status(500).json({ error: 'Hubo un error al obtener el evento' });
    }
};

const searchByType = async (req, res) => {
    const {tipoDeporte} = req.query;
    if (!tipoDeporte) {
        return res.status(400).json({ error: 'Falta el parámetro de tipo de deporte' });
    }
    try {
        const result = await searchType(tipoDeporte);
        if (result.length === 0) {
                
            return res.status(404).json({ error: 'No se encontraron eventos de ese tipo' }); 
        }
        return res.json(result); // Devolver los eventos del tipo seleccionado en formato JSON
    } catch (error) {
        return res.status(500).json({ error: 'Hubo un error al obtener el evento' });
    }

};

const searchByDates = async (req, res) => {
    const {from, to} = req.query;
    if (!from || !to) {
        return res.status(400).json({ error: 'Falta el parámetro de rango de fechas' });
    }
    try {
        const result = await searchRangeDates(from, to);
        if (result.length === 0) {
                
            return res.status(404).json({ error: 'No se encontraron eventos en ese rango de fechas' }); 
        }
        return res.json(result); // Devolver los eventos de las fechas seleccionadas en formato JSON
    } catch (error) {
        return res.status(500).json({ error: 'Hubo un error al obtener el evento' });
    }
};

module.exports = {getAll, getById, createEvent, deleteEvent, putById, upComing, searchByType, searchByDates};