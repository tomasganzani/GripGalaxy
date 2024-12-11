import { Router } from "express";
import userRouter from "./user/user.router.js";
const router = Router();

router.use("/api/users", userRouter)

router.get("/", (req, res) => {
    res.render("home");
});

export default router;