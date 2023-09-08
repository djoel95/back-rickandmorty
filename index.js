import { config } from 'dotenv'
import { server } from './src/index.js'

config()

const { PORT } = process.env;

server.listen(PORT, async () => {
   console.log(`Server raised in port: ${PORT}`);
});