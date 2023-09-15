import express from 'express';
import productController from './constroller/product.controller';

const app = express();

app.use(express.json());

app.post('/products', productController.createProduct);

export default app;
