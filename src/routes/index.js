import { Router } from 'express';
import { User, Character, Auth, Favorites } from '../controllers/index.js';
import { server } from '../bootstrap/index.js'

const router = Router();
router.get('/character/:id', Character.getCharById);
router.get('/login', Auth.login);
router.post('/fav', Favorites.postFav);
router.delete('/fav/:id', Favorites.deleteFav);

server.use('/api', router);
