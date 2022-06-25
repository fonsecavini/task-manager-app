import UserModel from "../Models/UserModel";
import User from "../Interfaces/User-Interface";

export default class UserService {
    public userModel = new UserModel();

    public post = async (user: User): Promise<number> => {
        const newUser = await this.userModel.post(user);

        return newUser;
    }
}