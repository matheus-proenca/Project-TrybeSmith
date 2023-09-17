import { RequestHandler } from 'express';
import ordersService from '../service/orders.service';

const getOrder:RequestHandler = async (_req, res) => {
  const { status, data } = await ordersService.getOrder();
  return res.status(status).json(data);
};

export default {
  getOrder,
};