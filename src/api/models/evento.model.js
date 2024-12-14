const pool = require("../../../utils/db");

const selectAll = async () => {
    const result = await pool.query("SELECT * FROM evento");
    return result;
};
const selectByEventName = async (nombre) => {
    const result = await pool.query("SELECT * FROM evento WHERE nombre = ?",[nombre]);
    return result[0];
};
const selectById = async (id) => {
    const result = await pool.query("SELECT * FROM evento WHERE id = ?", [id]);
    return result[0];
};

const insertEvent = async ({nombre, descripcion, fecha, ubicacion, tipoDeporte, organizador}) => {
    console.log("Intentando insertar evento:", {nombre, descripcion, fecha, ubicacion, tipoDeporte, organizador});
    try {
        const [result] = await pool.query("INSERT INTO evento (nombre, descripcion, fecha, ubicacion, tipoDeporte, organizador) VALUES (?,?,?,?,?,?)", [nombre, descripcion, fecha, ubicacion, tipoDeporte, organizador]);
        if (result.affectedRows === 0) {
            return -1;  // Si no se insertó, retorna -1
        }
        return result.insertId;
    } catch (error) {
        
    }
};

const deleteOneEvent = async (id) => {
    try {
        const [result] = await pool.query("DELETE FROM evento WHERE id = ?", [id]);
        return result;
    } catch (error) {
        
    }
};

const updateEvent = async (id, nombre, descripcion, fecha, ubicacion) => {
    try {
        const [result] = await pool.query(
            "UPDATE evento SET nombre = IFNULL(?, nombre), descripcion = IFNULL(?, descripcion), fecha = IFNULL(?, fecha), ubicacion = IFNULL(?, ubicacion) WHERE id = ?",
            [nombre, descripcion, fecha, ubicacion, id]
        );
        return result;
    } catch (error) {
        
    }
};

const searchDate = async (fechaActual) => {
    try {
        const [result] = await pool.query("SELECT * FROM evento WHERE fecha > ? ORDER BY fecha LIMIT 3",
      [fechaActual]);
        return result;
    } catch (error) {
        
    }
};

const searchType = async (tipoDeporte) => {
    const result = await pool.query("SELECT * FROM evento WHERE tipoDeporte = ?", [tipoDeporte]);
    return result[0];
};

const searchRangeDates = async (from, to) => {
    const result = await pool.query("SELECT * FROM evento WHERE fecha BETWEEN ? AND ? ORDER BY fecha",
            [from, to]
        );
    return result[0];
};

module.exports = {selectAll, selectByEventName, insertEvent, deleteOneEvent, selectById, updateEvent, searchDate, searchType, searchRangeDates}