import { NextFunction, Request, Response } from 'express';
import { User } from '../interfaces/user';
import { hashPassword } from '../utils/hashPasswords';
import { generateToken } from '../utils/generateTokens';
import { comparePassword } from '../utils/hashPasswords';

let users: User[] = [];

export const register = async (req: Request, res: Response, next:NextFunction): Promise<Response | void> => {
    try {
        // Your login logic here
        return res.status(200).json({ message: 'Login successful' });
      } catch (error) {
        next(error); // Pass errors to the error-handling middleware
      }
    
  const { username, password } = req.body;

  const hashedPassword = await hashPassword(password);
  const newUser: User = {
    id: Date.now().toString(),
    username,
    password: hashedPassword,
  };

  users.push(newUser);
  res.status(201).json({ message: 'User registered successfully.' });
};

// Login User
export const login = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;
  
    const user = users.find((u) => u.username === username);
    if (!user) {
      return res.status(400).json({ error: 'Invalid username or password.' });
    }
  
    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid username or password.' });
    }
  
    const token = generateToken({ userId: user.id, username: user.username });
    res.json({ token });
  };