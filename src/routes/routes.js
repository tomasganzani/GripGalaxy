import { Router } from "express";
import userRouter from "./user/user.router.js";
import cartRouter from "./cart/cart.router.js";
import productRouter from "./product/product.router.js";
import emailRouter from "./email.routes.js"
const router = Router();
router.use("/api/products", productRouter)
router.use("/api/users", userRouter)
router.use("/api/carts", cartRouter)
router.use("/api/email", emailRouter)
router.get("/", (req, res) => {
    res.render("home");
});

export default router;