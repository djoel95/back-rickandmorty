require('dotenv').config();
const server = require('./server');
const { conn } = require('./src/DB_connection');

const { PORT } = process.env;

server.listen(PORT, async () => {
   await conn .sync({ force: true });
   console.log(`Server raised in port:  + ${PORT}`);
});



