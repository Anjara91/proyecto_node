const router = require("express").Router();

router.use("/user", require("./api/usuario.router"));
router.use("/events", require("./api/evento.router"));

module.exports = router;