import { Note } from '../interfaces/note';
import { Request, Response } from 'express'; // Ensure proper typing for Request and Response

let notes: Note[] = [];

export const getNotesByCategory = (req: Request, res: Response) => {
  const categoryId = parseInt(req.params.categoryId, 10); // Convert to number
  if (!req.user) {
    return res.status(401).json({ error: 'Unauthorized access.' });
  }
  if (!req.user) {
    return res.status(401).json({ error: 'Unauthorized access.' });
  }
  if (!req.user) {
    return res.status(401).json({ error: 'Unauthorized access.' });
  }
  if (!req.user) {
    return res.status(401).json({ error: 'Unauthorized access.' });
  }
  if (!req.user) {
    return res.status(401).json({ error: 'Unauthorized access.' });
  }
  const userId = req.user.userId; // Authenticated user ID

  const filteredNotes = notes.filter(
    (note) => note.category.id === categoryId && note.userId === userId
  );
  res.json(filteredNotes);
};

export const updateNote = (req: Request, res: Response) => {
  const noteId = parseInt(req.params.id, 10); // Convert to number
  const updatedNote: Note = req.body;

    if (!req.user) {
        return res.status(401).json({ error: 'Unauthorized access.' });
    }

  const userId = req.user.userId; // Authenticated user ID

  const index = notes.findIndex(
    (note) => parseInt(note.id, 10) === noteId && note.userId === userId
  );
  if (index === -1) {
    return res.status(404).json({ error: 'Note not found.' });
  }

  res.status(200).json(updatedNote); // Explicitly set status and send JSON response
  res.json(updatedNote);
};