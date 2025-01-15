import express from 'express';

const router = express.Router();

router.post('/', async (req, res) => {
    const { id } = req.params;
    try {
        const cart = await cart.findById(id)
        if (!cart) {
            return res.status(404).json({ message: 'Carrito no encontrado' });
        }
        const purchasedProducts = [];
        const failedProducts = [];
        for (const cartItem of cart.products) {
            const product = cartItem.product;
            const quantity = cartItem.quantity;
            if (product.stock >= quantity) {
                product.stock -= quantity;
                await product.save();
                purchasedProducts.push({
                    productId: product._id,
                    name: product.name,
                    quantity,
                });
            } else {
                failedProducts.push({
                    productId: product._id,
                    name: product.name,
                    requested: quantity,
                    available: product.stock,
                });
            }
        }
        cart.products = cart.products.filter(cartItem =>
            !purchasedProducts.find(p => p.productId.equals(cartItem.product._id))
        );
        await cart.save();
        res.json({
            message: 'Proceso de compra finalizado',
            purchasedProducts,
            failedProducts,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al procesar la compra', error });
    }
});

export default router;