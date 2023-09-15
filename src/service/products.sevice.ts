import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';

type Product = {
  id: number,
  name: string,
  price: string,
};

type ServiceError = {
  status: number,
  data:{ message:string }
};

type ServiceSucesseful<T> = {
  status: number,
  data: T
};

type ServiceStatus<T> = ServiceError | ServiceSucesseful<T>;

const findProduct = async (id:number): Promise<Product | null> => {
  const find = await ProductModel.findByPk(id, { attributes: { exclude: ['orderId'] } });
  return find?.dataValues || null;
};

const createProduct = async (product:ProductInputtableTypes): Promise<ServiceStatus<Product>> => {
  const create = await ProductModel.create(product);
  const find = await findProduct(create.dataValues.id);
  if (find === null) {
    return { status: 400, data: { message: 'orderId ja existente' } };
  }
  return { status: 201, data: create.dataValues };
};

export default {
  createProduct,
  findProduct,
};