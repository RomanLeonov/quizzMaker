import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

const transformFn = (info: any) => {
    if (info.message instanceof Error) {
        info.message = {
            message: info.message.message,
            stack: info.message.stack,
            ...info.message,
        };
    }

    if (info instanceof Error) {
        return { stack: info.stack, ...info };
    }

    return info;
};

const enumerateErrorFormat = winston.format(transformFn);

const transport = new DailyRotateFile({
    filename: '.logs/' + '.app-log.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '3',
});

transport.on('rotate', (oldFilename, newFilename) => {
    // call function like upload to s3 or on cloud
});

const logger = winston.createLogger({
    format: winston.format.combine(enumerateErrorFormat(), winston.format.json()),
    transports: [
        transport,
        new winston.transports.Console({
            level: 'info',
        }),
    ],
});

export default logger;