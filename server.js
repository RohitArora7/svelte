import express from 'express';
import { Database } from 'node:sqlite';
import path from 'path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

const db = new Database('./database.sqlite');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/api/students', (_req, res) => {
  const rows = db.prepare('SELECT * FROM students ORDER BY id').all();
  res.json(rows);
});

app.get(/.*/, (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
