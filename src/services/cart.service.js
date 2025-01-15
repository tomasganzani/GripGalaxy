import Services from "./service.manager.js";
import persistence from "../dao/persistence.js"

class CartService extends Services {
    constructor(){
        super(persistence.cartBase);
    }
}

export const cartService = new CartService();