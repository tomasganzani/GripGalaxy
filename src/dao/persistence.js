import { userDao } from "./mongodb/user.dao.js";
import { prodDao } from "./mongodb/product.dao.js";
import { cartDao } from "./mongodb/cart.dao.js";
import { initMongoDB } from "../db/db.connection.js";
import "dotenv/config";

let userBase = null;
let productBase = null;
let cartBase = null;
let persistence = process.env.DATA_BASE;

switch (persistence) {
    case "mongodb": {
        initMongoDB()
            .then(() => console.log("coenctado a mongodb"))
            .catch((error) => console.log(error));
        userBase = userDao;
        productBase = prodDao;
        cartBase = cartDao;
    } default: {
        console.log("No se pudo conectar a la base de datos");
    }
}

export default { userBase, productBase, cartBase };