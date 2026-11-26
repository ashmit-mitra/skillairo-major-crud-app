const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const db = new sqlite3.Database('./tasks.db');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Create table in SQLite database
db.run(`CREATE TABLE IF NOT EXISTS tasks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  status TEXT NOT NULL
)`);

// READ all records
app.get('/api/tasks', (req, res) => {
  db.all('SELECT * FROM tasks ORDER BY id DESC', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// CREATE a record
app.post('/api/tasks', (req, res) => {
  const { title, category, status } = req.body;
  db.run(
    'INSERT INTO tasks (title, category, status) VALUES (?, ?, ?)',
    [title, category, status],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID, title, category, status });
    }
  );
});

// UPDATE a record
app.put('/api/tasks/:id', (req, res) => {
  const { title, category, status } = req.body;
  db.run(
    'UPDATE tasks SET title = ?, category = ?, status = ? WHERE id = ?',
    [title, category, status, req.params.id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ updated: this.changes });
    }
  );
});

// DELETE a record
app.delete('/api/tasks/:id', (req, res) => {
  db.run('DELETE FROM tasks WHERE id = ?', [req.params.id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ deleted: this.changes });
  });
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));