import express from 'express';
import userRouter from './Routes/UserRouter';

const app = express();

app.use(express.json());

app.use('/users', userRouter);

export { app }