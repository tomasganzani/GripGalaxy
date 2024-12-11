import MongoDao from "./mongo.dao.js";
import { CartModel } from '../models/cart.model.js';

class CartsDaoMongo extends MongoDao {
    constructor(){
        super(CartModel);
    }
};

export const cartDao = new CartsDaoMongo();

