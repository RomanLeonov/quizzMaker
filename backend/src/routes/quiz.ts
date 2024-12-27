import { Router } from 'express';

import QuizController from '../controllers/QuizController'
// const UserValidator = require('../validator/UserValidator');

const router = Router();
// const auth = require('../middlewares/auth');

const quizController = new QuizController();
// const userValidator = new UserValidator();

router.post('/', (req, res, next) => next(), quizController.createQuiz);

export default router;