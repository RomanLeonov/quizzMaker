
import express from 'express';
import cors from 'cors';
import { StatusCodes } from 'http-status-codes';

import routes from './routes/index';
import ApiError from './helpers/ApiError';

const app = express();

app.use(cors());
app.options('*', cors());

// app.use(express.static(`${process.env.PWD}/public`));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('API is working!');
});

app.use('/api', routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
    next(new ApiError(StatusCodes.NOT_FOUND, 'Not found'));
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});