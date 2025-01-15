import persistence from "../persistence";
const { productDao } = persistence;

import ProductReqDTO from "../dtos/product/product.req.dto.js";

class ProductRepository {
    async create(product) {
        const productReqDto = new ProductReqDTO(product);
        return await productDao.create(productReqDto);
    }
    async update(id, product) {
        const productReqDto = new ProductReqDTO(product);
        return await productDao.update(id, productReqDto);
    }
    async delete(id) {
        return await productDao.delete(id);
    }
    async getAll() {
        return await productDao.getAll();
    }
    async getById(id) {
        return await productDao.getById(id);
    }
}

export const productRepository = new ProductRepository();