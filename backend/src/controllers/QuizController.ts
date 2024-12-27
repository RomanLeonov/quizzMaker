import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import QuizService from '../services/QuizService';

import logger from '../config/logger';

class QuizController {
    quizService: QuizService;

    constructor() {
        // here we define services
        this.quizService = new QuizService();
    }

    createQuiz = async (req: Request, res: Response) => {
        try {
            const quiz = await this.quizService.createQuiz(req.body);
            let tokens = {};
            const { status } = quiz.response;

            const { message } = quiz.response;
            res.status(quiz.statusCode).send({ status: quiz.statusCode, message, data: {}, tokens });
        } catch (e) {
            logger.error(e);
            res.status(StatusCodes.BAD_GATEWAY).send(e);
        }
    };
}

export default QuizController;