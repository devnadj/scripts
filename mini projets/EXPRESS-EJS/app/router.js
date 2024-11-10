import express from 'express';
import mainController  from './controllers/mainController.js';
import loginController from './controllers/loginController.js';
import testController from './controllers/testController.js';
import signupController from './controllers/signupController.js';
import passwordController from './controllers/passwordController.js';
import articleController from './controllers/articleController.js';
import notificationsController from './controllers/notificationsController.js';
import messagesController from './controllers/messagesController.js';

const router = express.Router();

router.get ('/', mainController.home);
router.get ('/account', mainController.account);
router.get ('/about', mainController.about)

router.get ('/logout', loginController.logout);
router.get ('/login',  loginController.login);
router.post('/login',  loginController.validation);

router.get ('/signup', signupController.signup);
router.post ('/signup', signupController.validation);

router.get  ('/password', passwordController.password);
router.post ('/password', passwordController.validation);
router.get  ('/forgot-password', passwordController.forgot);

router.get ('/article/:id', articleController.article);

router.get ('/notifications', notificationsController.notifications);
router.get ('/messages', messagesController.messages);

router.get ('/test', testController.test);

router.get ('*', mainController.notFound)


export default router;