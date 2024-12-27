const logError = (err: any) => {
    console.error(err);
};

const returnError = (statusCode: number, message: string) => {
    return {
        statusCode,
        response: {
            status: false,
            code: statusCode,
            message,
        },
    };
};

const returnSuccess = (statusCode: number, message: string, data = {}) => {
    return {
        statusCode,
        response: {
            status: true,
            code: statusCode,
            message,
            data,
        },
    };
};

export default {
    logError,
    returnError,
    returnSuccess,
};