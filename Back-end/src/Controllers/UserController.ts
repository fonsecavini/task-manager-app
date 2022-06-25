import { RequestHandler } from 'express';
import UserService from '../Services/UserService';

export default class UserController {
    public userService = new UserService();

    public post: RequestHandler = async (req, res) => {
        const user = req.body;

        const userId = await this.userService.post(user);
        res.status(201).json({ newUser: { id: userId, ...user } })
    }
}