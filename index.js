require('dotenv').config();
const server = require('./server');

const { PORT } = process.env;

server.listen(PORT, async () => {
   console.log(`Server raised in port:  + ${PORT}`);
});



