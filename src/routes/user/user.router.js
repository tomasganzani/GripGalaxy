import { Router } from "express";
import { passportCall } from "../../passport/passportCall.js";
import { userController } from "../../controllers/user.manager.js";
const userRouter = Router();

userRouter.post("/login", userController.login)

userRouter.post("/register", userController.register)

userRouter.get("/current", [passportCall('jwtCookies')], userController.info)

export default userRouter