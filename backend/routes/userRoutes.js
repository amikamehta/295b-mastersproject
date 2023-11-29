const express = require('express');
const router = express.Router();
const db = require('../database');

// Get all users
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get user by ID
router.get('/:id', (req, res) => {
  const userId = req.params.id;
  const sql = 'SELECT * FROM users WHERE id = ?';
  db.query(sql, [userId], (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json(result[0]);
    }
  });
});

// Create a new user
router.post('/', (req, res) => {
  const { name, email, location, type } = req.body;
  const sql = 'INSERT INTO users (name, email, location, type) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, email, location, type], (err, result) => {
    if (err) throw err;
    res.status(201).json({ id: result.insertId });
  });
});

// Update user by ID
router.put('/:id', (req, res) => {
  const userId = req.params.id;
  const { name, email, location, type } = req.body;
  const sql = 'UPDATE users SET name = ?, email = ?, location = ?, type = ? WHERE id = ?';
  db.query(sql, [name, email, location, type, userId], (err) => {
    if (err) throw err;
    res.sendStatus(200);
  });
});

// Delete user by ID
router.delete('/:id', (req, res) => {
  const userId = req.params.id;
  const sql = 'DELETE FROM users WHERE id = ?';
  db.query(sql, [userId], (err) => {
    if (err) throw err;
    res.sendStatus(204);
  });
});

module.exports = router;
