import { Request, RequestHandler, Response } from 'express';
import { ProductInputtableTypes } from '../database/models/product.model';
import productsSevice from '../service/products.service';

const createProduct = async (req: Request, res: Response): Promise<Response> => {
  const { name, price, orderId } = req.body;
  const { status, data } = await productsSevice
    .createProduct({ name, price, orderId } as ProductInputtableTypes);
  return res.status(status).json(data);
};

const getAll:RequestHandler = async (_req, res) => {
  const { status, data } = await productsSevice.getProduct();
  
  return res.status(status).json(data);
}; 

export default {
  createProduct,
  getAll,
};