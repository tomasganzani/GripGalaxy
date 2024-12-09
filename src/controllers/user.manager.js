import Controllers from "./controller.manager.js";
import { userService } from '../services/user.services.js';

class UserController extends Controllers {
    constructor() {
        super(userService)
    }

    register = async (req, res, next) => {
        try {
            const user = await this.service.register(req.body);
            res.json(user);
        } catch (error) {
            next(error);
        }
    };

    login = async (req, res, next) => {
        try {
            const token = await this.service.login(req.body);
            res.cookie('token', token, { httpOnly: true }).json({ message: 'Logeado con exito!'});
        } catch (error) {
            next(error);
        }
    };

    info = (req, res, next) => {
        try {
            if (!req.user)
                throw new Error("Error info, no se puede acceder");
            res.json({
                user: req.user,
            });
        } catch (error) {
            next(error);
        }
    };
};


export const userController = new UserController();

