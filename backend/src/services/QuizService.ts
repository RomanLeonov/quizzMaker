import { StatusCodes } from 'http-status-codes';
import responseHandler from '../helpers/responseHandler';
import logger from '../config/logger';

class QuizService {
    /**
     * Create a quiz
     * @param {Object} userBody
     * @returns {Object}
     */
    createQuiz = async (userBody: Object) => {
        try {
            console.log('CREATE QUIZ:', userBody);

            return responseHandler.returnSuccess(StatusCodes.CREATED, "Created", { body: {}});
        } catch (e) {
            logger.error(e);
            return responseHandler.returnError(StatusCodes.BAD_REQUEST, 'Something went wrong!');
        }
    };
}

export default QuizService;