import bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import UserModel from '../database/models/user.model';

type Login = { token: string };

type ServiceError = {
  status: number,
  data: { message: string }
};

type ServiceSucesseful<T> = {
  status: number,
  data: T
};

type ServiceStatus<T> = ServiceError | ServiceSucesseful<T>;

const login = async (username:string, password:string): Promise<ServiceStatus<Login>> => {
  const user = await UserModel.findOne({
    where: { username },
  });
  if (!user) {
    return { status: 401, data: { message: 'Username or password invalid' } };
  }

  const isValid = await bcrypt.compare(password, user.dataValues.password);

  if (!isValid) {
    return { status: 401, data: { message: 'Username or password invalid' } };
  }

  const token = jwt.sign({
    username: user.dataValues.username,
  }, process.env.JWT_SECRET || 'SEGREDO');

  return { status: 200, data: { token } };
};

export default {
  login,
};