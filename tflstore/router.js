const express = require('express');
const router = express.Router();

const flowersController = require('./controllers/flowerscontroller');
const shoppingCartController = require('./controllers/shoppingcartcontroller');
const productsController = require('./controllers/productscontroller');

// Define Routes
router.route('/products')
    .get(productsController.getAllProducts)
    .post(productsController.createProduct);

router.route('/products/:id')
    .get(productsController.getProductById)
    .put(productsController.updateProduct)
    .delete(productsController.deleteProduct);

router.route('/flowers')
    .get(flowersController.getAll)
    .post(flowersController.insert);

router.route('/flowers/:flowerid')
    .put(flowersController.update)
    .get(flowersController.getById)
    .delete(flowersController.delete);

router.route('/cart')
    .get(shoppingCartController.get)
    .post(shoppingCartController.post);

router.route('/cart/:itemid')
    .put(shoppingCartController.put)
    .get(shoppingCartController.getById)
    .delete(shoppingCartController.delete);

module.exports = router; // Export router
