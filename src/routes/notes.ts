import express,{Request, Response} from 'express';
import { Note } from '../interfaces/note';
import { validateNote } from '../middleware/validation';
import { authenticate } from '../middleware/auth';
import { logger } from '../middleware/logging';

const router = express.Router();
const notes: Note[] = [];


// Get notes by category ID
router.get('/categories/:categoryId', (req, res) => {
  const categoryId = req.params.categoryId;
  const filteredNotes = notes.filter(note => note.category.id === Number(categoryId));
  res.json(filteredNotes);
});

router.get('/', (req: Request, res: Response) => {
  res.json(notes);
})

// Update a note

router.put('/:id', validateNote, (req: Request, res: Response) => { 
  const noteId = req.params.id;
  const updatedNote: Note = req.body;
  const index = notes.findIndex(note => note.id === noteId);
  if (index === -1) {
    res.status(404).json({ error: 'Note not found' });
    return;
  }
  notes[index] = updatedNote;
  res.json(updatedNote);
});

export default router;