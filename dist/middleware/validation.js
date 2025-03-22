"use strict";
/*
import { Request, Response, NextFunction } from 'express';
import { Note } from '../interfaces/note';


export const validateNote = (req: Request, res: Response, next: NextFunction) => {
  const note: Note = req.body;
  if (!note.title || !note.content || !note.category) {
    return res.status(400).json({ error: 'Invalid note format' });
  }
  next();
};
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateNote = void 0;
const validateNote = (req, res, next) => {
    const note = req.body;
    if (!note.title || !note.content || !note.category) {
        // Send a response and stop further processing
        res.status(400).json({ error: 'Invalid note format' });
        return; // Stop execution
    }
    next(); // Proceed to the next middleware or route handler
};
exports.validateNote = validateNote;
