const router = require("express").Router();
const {registerUser, login, perfil} = require("../../controllers/usuario.controller");
const {checkToken} = require("../../../../utils/middleware");

router.post("/register", registerUser); //añadir nuevo usuario
router.post("/login", login); // devuelve el token para utilizarlo en rutas autorizadas
router.get("/profile", checkToken, perfil); //info del usuario logado
module.exports = router;