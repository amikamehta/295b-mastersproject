const express = require('express');
const router = express.Router();
const db = require('../database');

// Get all profiles
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM manage_profile';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get profile by ID
router.get('/:id', (req, res) => {
  const profileId = req.params.id;
  const sql = 'SELECT * FROM manage_profile WHERE id = ?';
  db.query(sql, [profileId], (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      res.status(404).json({ error: 'Profile not found' });
    } else {
      res.json(result[0]);
    }
  });
});

// Create a new profile
router.post('/', (req, res) => {
  const { name, email, age, location, comments } = req.body;
  const sql = 'INSERT INTO manage_profile (name, email, age, location, comments) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [name, email, age, location, comments], (err, result) => {
    if (err) throw err;
    res.status(201).json({ id: result.insertId });
  });
});

// Update profile by ID
router.put('/:id', (req, res) => {
  const profileId = req.params.id;
  const { name, email, age, location, comments } = req.body;
  const sql = 'UPDATE manage_profile SET name = ?, email = ?, age = ?, location = ?, comments = ? WHERE id = ?';
  db.query(sql, [name, email, age, location, comments, profileId], (err) => {
    if (err) throw err;
    res.sendStatus(200);
  });
});

// Delete profile by ID
router.delete('/:id', (req, res) => {
  const profileId = req.params.id;
  const sql = 'DELETE FROM manage_profile WHERE id = ?';
  db.query(sql, [profileId], (err) => {
    if (err) throw err;
    res.sendStatus(204);
  });
});

module.exports = router;
