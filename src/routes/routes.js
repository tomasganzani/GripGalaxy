import { Router } from "express";
import userRouter from "./user/user.router.js";
import cartRouter from "./cart/cart.router.js";

const router = Router();

router.use("/api/users", userRouter)
router.use("/api/carts", cartRouter)
router.get("/", (req, res) => {
    res.render("home");
});

export default router;