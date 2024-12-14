const router = require("express").Router();
const {getAll, getById, createEvent, deleteEvent, putById, upComing, searchByType, searchByDates} = require("../../controllers/evento.controller")
const {checkToken} = require("../../../../utils/middleware");

router.get("/searchEvents", getAll); //buscar todos los eventos
router.get("/searhEventBy/:id", getById); //buscar evento por id
router.post("/addEvent", checkToken, createEvent); //crear un nuevo evento
router.delete("/deleteEvent/:id", checkToken, deleteEvent); //borrar un evento por id
router.put("/updateEventBy/:id", checkToken, putById); //actualizar evento por id

//busquedas avanzadas
router.get("/upComing?", upComing); //busqueda de eventos próximos por fecha
router.get("/event?", searchByType); // buscar por tipo de evento
router.get("/date?", searchByDates); // buscar por rango de fechas
module.exports = router;
