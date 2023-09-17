import express from 'express';
import productController from './controller/product.controller';
import orderController from './controller/order.controller';

const app = express();

app.use(express.json());

app.post('/products', productController.createProduct);
app.get('/products', productController.getAll);
app.get('/orders', orderController.getOrder);

export default app;
