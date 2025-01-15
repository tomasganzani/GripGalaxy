import Services from "./service.manager.js";
import persistence from "../dao/persistence.js";
import ProductReqDTO from "../dao/dtos/product/product.req.dto.js";

class ProductService extends Services {
    constructor(){
        super(persistence.productBase);
        console.log("Service", persistence.productBase);
    }
    async createProd(obj){
        try{
            const prodDTO = new ProductReqDTO(obj);
            return await this.dao.create(prodDTO);
        }catch(error){
            throw new Error(error)
        }
    }
}
export const prodService = new ProductService();