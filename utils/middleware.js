const jwt = require("jsonwebtoken");
const {selectByUserName} = require("../src/api/models/usuario.model");

//validar el token y el rol

 const checkToken = async (req, res, next) => {
//validar que el token que me envias es correcto
    if(!req.headers["authorization"]){
        return res.json({msg: "Debe incluir el token"})
    }
    const token = req.headers["authorization"];
    let data;
    try {
        const tokenVe = token.split(' ')[1];
        data = jwt.verify(tokenVe, process.env.SECRET_KEY_JWT);
    } catch (error) {
        return res.json({msg: "el token es incorrecto"});
    }    
//buscar en la bd el usuario del token
    const user = await selectByUserName(data.user_username);
    if (user.length === 0){
        return res.json({msg: "el usuario no existe"});
    }
req.user= user[0];
next();
};

const checkAdmin = (role)=>{
    if(role !== "a"){
        return res.status(403).json({msg: "Debe ser administrador para acceder a esta ruta"});
    }
    return true;
};
   
module.exports = {checkToken, checkAdmin};