import express from 'express';
import productController from './controller/product.controller';
import orderController from './controller/order.controller';
import login from './middlewares/login';
import loginController from './controller/login.controller';

const app = express();

app.use(express.json());

app.post('/products', productController.createProduct);
app.get('/products', productController.getAll);
app.get('/orders', orderController.getOrder);
app.post('/login', login.emailValidation, login.passwordValidation, loginController.login);

export default app;
