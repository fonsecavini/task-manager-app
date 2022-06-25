import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import User from '../Interfaces/User-Interface';

export default class UserModel {
    public post = async (user: User) => {
        const [newUser] = await connection
        .execute<ResultSetHeader>(
            'INSERT INTO TaskManager.User (username, password, email) VALUES (?, ?, ?)',
            [user.username, user.password, user.email],
        );

        return newUser.insertId;
    }
}