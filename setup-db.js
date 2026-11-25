import { Database } from 'node:sqlite';

const db = new Database('./database.sqlite');

db.exec(`
  CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    course TEXT NOT NULL,
    grade TEXT
  );
`);

const count = db.prepare('SELECT COUNT(*) AS c FROM students').get().c;

if (count === 0) {
  const insert = db.prepare(
    'INSERT INTO students (name, email, course, grade) VALUES (?, ?, ?, ?)'
  );
  insert.run('Alice Johnson', 'alice@example.com', 'Computer Science', 'A');
  insert.run('Bob Smith', 'bob@example.com', 'Mathematics', 'B');
  insert.run('Carol Davis', 'carol@example.com', 'Physics', 'A');
  insert.run('David Wilson', 'david@example.com', 'Chemistry', 'C');
  insert.run('Eva Martinez', 'eva@example.com', 'Biology', 'B');
}

console.log('Database ready.');
console.log('Students:', db.prepare('SELECT * FROM students').all());

db.close();
