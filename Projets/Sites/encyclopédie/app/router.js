import express from 'express';
import mainController from './controllers/mainController.js';
import wordsController from './controllers/wordsController.js';

const router = express.Router();

router.get('/', mainController.home);
router.get('/login', mainController.login);
router.post('/login', mainController.validation);
router.get('/disconnect', mainController.disconnect);
router.get('/word/:word', wordsController.word);
router.get('/word', wordsController.word);
router.get('/add/vb', wordsController.addVerb)
router.get('*', mainController.notFound);


export default router;