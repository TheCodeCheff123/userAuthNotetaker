import jwt from 'jsonwebtoken';
import { AuthPayload } from '../interfaces/auth';

const SECRET_KEY = 'your-secret-key';

export const generateToken = (payload: AuthPayload): string => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
};