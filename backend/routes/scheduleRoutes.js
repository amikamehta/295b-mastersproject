const express = require('express');
const router = express.Router();
const db = require('../database');

// Get all schedules
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM schedule';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get schedule by ID
router.get('/:id', (req, res) => {
  const scheduleId = req.params.id;
  const sql = 'SELECT * FROM schedule WHERE id = ?';
  db.query(sql, [scheduleId], (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      res.status(404).json({ error: 'Schedule not found' });
    } else {
      res.json(result[0]);
    }
  });
});

// Create a new schedule
router.post('/', (req, res) => {
  const { camera_number, severity, status, comments, assignee, location } = req.body;
  const sql = 'INSERT INTO schedule (camera_number, severity, status, comments, assignee, location) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(sql, [camera_number, severity, status, comments, assignee, location], (err, result) => {
    if (err) throw err;
    res.status(201).json({ id: result.insertId });
  });
});

// Update schedule by ID
router.put('/:id', (req, res) => {
  const scheduleId = req.params.id;
  const { camera_number, severity, status, comments, assignee , location } = req.body;
  const sql = 'UPDATE schedule SET camera_number = ?, severity = ?, status = ?, comments = ?, assignee = ?, location = ? WHERE id = ?';
  db.query(sql, [camera_number, severity, status, comments, assignee, location ,scheduleId], (err) => {
    if (err) throw err;
    res.sendStatus(200);
  });
});

// Delete schedule by ID
router.delete('/:id', (req, res) => {
  const scheduleId = req.params.id;
  const sql = 'DELETE FROM schedule WHERE id = ?';
  db.query(sql, [scheduleId], (err) => {
    if (err) throw err;
    res.sendStatus(204);
  });
});

module.exports = router;
