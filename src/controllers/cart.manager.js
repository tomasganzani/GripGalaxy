import Controllers from "./controller.manager.js";
import { cartService } from '../services/cart.service.js';

class CartController extends Controllers {
    constructor() {
        super(cartService)
    }
    async createCart(_id) {
        try {
            const newCart = await Cart.create({ items: [] });
            await User.findByIdAndUpdate(_id, { cart: newCart._id });
            return newCart;
        } catch (error) {
            throw new Error("Error al crear el carrito");
        }
    }

    async getCartByUser(_id) {
        try {
            const user = await user.findById(_id).populate('cartId');
            return user.cartId;
        } catch (error) {
            throw new Error('Error al obtener el carrito: ' + error.message);
        }
    }
};

export const cartController = new CartController();

