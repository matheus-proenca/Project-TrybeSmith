import { RequestHandler } from 'express';
import loginService from '../service/login.service';

const login:RequestHandler = async (req, res) => {
  const { username, password } = req.body;

  const { status, data } = await loginService.login(username, password);

  return res.status(status).json(data);
};

export default {
  login,
};