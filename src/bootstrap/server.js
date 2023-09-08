//Importacion de paquetes nodejs utilizando ES6
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const server = express();

server.use(morgan('dev'));

server.use(cors());

server.use(express.json());

server.get('/', (req, res) => {
    res.json({ message: 'Hello Rick And Morty' });
})

//Exportar de forma predeterminada la variable, funcion, objeto o clase
export default server