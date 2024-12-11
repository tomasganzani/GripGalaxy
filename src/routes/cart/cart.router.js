import { Router } from "express";
import  { cartController }  from "../../controllers/cart.manager.js";
const cartRouter = Router();

cartRouter.post('/users/:_id/cart', async (req, res) => {
    try {
        const userId = req.params.userId;
        const cart = await cartController.createCart(userId);
        res.status(201).json({ message: 'Carrito creado y asociado', cart });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


export default cartRouter;
