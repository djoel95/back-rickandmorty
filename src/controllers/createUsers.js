let data = require('../utils/data');

//este controller recibe la informacion de un user y lo crea en la BDD
const createUsers = async ({name, email, username, password}) => {
    if (!name || !email || !username || !password) throw new Error('Faltan datos');
    const newUser = { name, email, username, password };
    data.push(newUser);
    return newUser;
};

module.exports = {createUsers};
