// testing if my code is working

var daniel : string = " daniel"

console.log(daniel);


import express from 'express';
import notesRouter from './routes/notes';
import { logger } from './middleware/logging';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(logger);
app.use('/api/notes', notesRouter);
app.get('/', (req, res) => {
  res.send("Welcome to my notes app");
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});