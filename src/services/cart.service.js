import Services from "./service.manager.js";
import { prodDao } from "../daos/mongodb/product.dao.js";

class CartService extends Services {
    constructor(){
        super(prodDao);
    }
}

export const cartService = new CartService();