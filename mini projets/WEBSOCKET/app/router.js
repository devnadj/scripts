import mainController from './controllers/mainController.js';
import express from 'express';

const router = express.Router();

router.get ('/', mainController.home);



export default router;