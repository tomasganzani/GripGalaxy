import Controllers from "./controller.manager.js";
import { cartService } from '../services/cart.service.js';

class CartController extends Controllers {
    constructor() {
        super(cartService)
    }
};


export const cartController = new CartController();

