"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validation_1 = require("../middleware/validation");
const router = express_1.default.Router();
const notes = [];
// Get notes by category ID
router.get('/categories/:categoryId', (req, res) => {
    const categoryId = req.params.categoryId;
    const filteredNotes = notes.filter(note => note.category.id === categoryId);
    res.json(filteredNotes);
});
router.get('/', (req, res) => {
    res.json(notes);
});
// Update a note
router.put('/:id', validation_1.validateNote, (req, res) => {
    const noteId = req.params.id;
    const updatedNote = req.body;
    const index = notes.findIndex(note => note.id === noteId);
    if (index === -1) {
        res.status(404).json({ error: 'Note not found' });
        return;
    }
    notes[index] = updatedNote;
    res.json(updatedNote);
});
exports.default = router;
