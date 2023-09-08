import { users } from '../../utils/index.js'

export const postUser = (req, res) => {
    const { name, email, username, password } = req.body;
    if (!name || !email || !username || !password) throw new Error('Faltan datos');
    const newUser = { name, email, username, password };
    users.push(newUser);
    return newUser;
}
