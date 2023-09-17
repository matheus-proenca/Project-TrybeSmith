import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';

type Orders = {
  id: number,
  userId: number,
  productIds?: number[];
};

type ServiceError = {
  status: number,
  data: { message: string }
};

type ServiceSucesseful<T> = {
  status: number,
  data: T
};

type ServiceStatus<T> = ServiceError | ServiceSucesseful<T>;

const getOrder = async (): Promise<ServiceStatus<Orders[]>> => {
  const order = await OrderModel.findAll({
    include: [{ model: ProductModel, as: 'productIds', attributes: ['id'] }],
  });
  const orderJson = order.map((element) => element.toJSON());
  const productArray = orderJson.map((element) => element.productIds?.map((e) => e.id));
  const orderArray = orderJson.map((element, i) => (
    { id: element.id, userId: element.userId, productIds: productArray[i] }
  ));
  return { status: 200, data: orderArray };
};

export default {
  getOrder,
};