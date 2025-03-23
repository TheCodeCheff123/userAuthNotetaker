import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AuthPayload } from '../interfaces/auth';

const SECRET_KEY = 'your-secret-key';

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY) as AuthPayload;
    req.user = decoded; // Attach user payload to the request
    next();
  } catch (err) {
    res.status(400).json({ error: 'Invalid token.' });
  }
};