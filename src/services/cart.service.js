import Services from "./service.manager.js";
import { cartDao } from "../dao/mongodb/cart.dao.js";

class CartService extends Services {
    constructor(){
        super(cartDao);
    }
}

export const cartService = new CartService();