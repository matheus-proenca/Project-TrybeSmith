import express from 'express';
import productController from './constroller/product.controller';

const app = express();

app.use(express.json());

app.post('/products', productController.createProduct);
app.get('/products', productController.getAll);

export default app;
