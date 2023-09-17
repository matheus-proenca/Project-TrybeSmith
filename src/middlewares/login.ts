import { RequestHandler } from 'express';

const emailValidation:RequestHandler = (req, res, next) => {
  const { username } = req.body;
  if (!username || typeof username !== 'string') {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }
  next();
};

const passwordValidation: RequestHandler = (req, res, next) => {
  const { password } = req.body;
  if (!password || typeof password !== 'string') {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }
  next();
};

export default {
  passwordValidation,
  emailValidation,
};