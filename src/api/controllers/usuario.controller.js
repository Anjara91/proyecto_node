const {selectByUserName, insertUser, selectById} = require("../models/usuario.model");
const bcrypt = require("bcrypt");
const {createToken} = require("../../../utils/jwt");

const registerUser = async (req, res) => {
    try {
        const data = req.body;
        const selectedUsername = await selectByUserName(data.username);
        if(selectedUsername.length !==0){
            return res.status(400).json({msg: "El usuario ya existe"});
        }

        data.password = await bcrypt.hash(data.password, 10);
                const insertedUser = await insertUser(data);

        if(insertedUser === -1)
            return res.status(400).json({msg: "No se realizo el insert"});

        const userCreated = await selectById(insertedUser);
        return res.status(200).json({ success: true, data: userCreated });
    } catch (error) {
        return res.status(500).json({ msg: "Error interno del servidor" });
    }
};

const login = async (req, res) => {
    try {
        const {username, password} = req.body;
        const userSelected = await selectByUserName(username);

        if(userSelected.length === 0){
            return res.status(404).json({msg: "El usuario no existe"});
        }

        const same = await bcrypt.compare(password, userSelected[0].password);
        if(!same){
            return res.status(400).json({msg: "La contraseña es incorrecta"});
        }

        return res.status(200).json({token: createToken(userSelected[0])});

    } catch (error) {
        return res.status(500).json(error);
    }
};

const perfil = async (req, res) => {
    try {
        // Verificar si hay un usuario en req.user
        const user = req.user;

        if (!user) {
            return res.status(404).json({ msg: "Usuario no encontrado" });
        }

        // Devuelve la información completa del usuario
        return res.status(200).json({
            success: true,
            data: user // Devolver los datos completos del usuario almacenados en `req.user`
        });

    } catch (error) {
        return res.status(500).json({ msg: "Error en el servidor", error });
    }
};

module.exports = {registerUser, login, perfil};