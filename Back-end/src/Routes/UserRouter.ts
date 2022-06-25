import express from 'express';
import UserController from '../Controllers/UserController';

const router = express.Router();

const userController = new UserController();

router.post('/', userController.post);

export default router;