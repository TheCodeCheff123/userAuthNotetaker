import express,{Request, Response} from 'express';
import { Note } from '../interfaces/note';
import { validateNote } from '../middleware/validation';
import { logger } from '../middleware/logging';

const router = express.Router();
const notes: Note[] = [{
  id: '1',
  title: 'First Note',
  content: 'This is the content of the first note.',
  category: { id: '101', name: 'Personal' }
},
{
  id: '2',
  title: 'Second Note',
  content: 'This is the content of the second note.',
  category: { id: '102', name: 'Work' }
},
{
  id: '3',
  title: 'Third Note',
  content: 'This is the content of the third note.',
  category: { id: '101', name: 'Personal' }
}];


// Get notes by category ID
router.get('/categories/:categoryId', (req, res) => {
  const categoryId = req.params.categoryId;
  const filteredNotes = notes.filter(note => note.category.id === categoryId);
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