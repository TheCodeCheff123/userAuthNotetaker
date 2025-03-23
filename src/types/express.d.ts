import { AuthPayload } from '../interfaces/auth'; 

declare global {
  namespace Express {
    interface Request {
      user?: AuthPayload; // Add the user property
    }
  }
}
