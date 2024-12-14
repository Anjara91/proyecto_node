const pool = require("../../../utils/db");

const selectByUserName = async (username) => {
    const result = await pool.query("SELECT * FROM usuario where username = ?",[username]);
    console.log(result);
    return result[0];
};

const insertUser = async ({username, password, role}) => {
    const [result] = await pool.query("INSERT INTO usuario (username, password, role) VALUES (?,?,?)", [username, password, role]);
    if(result.affectedRows === 0){
        return -1;
    }
    return result.insertId;
};

const selectById = async (id) => {
    const result = await pool.query("SELECT * FROM usuario WHERE id = ?", [id]);
    console.log(result);
    return result [0];
    
}

module.exports = {selectByUserName, insertUser, selectById}