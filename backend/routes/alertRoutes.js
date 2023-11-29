const express = require('express');
const router = express.Router();
const db = require('../database');

// Get all alerts
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM alerts';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get alert by ID
router.get('/:id', (req, res) => {
  const alertId = req.params.id;
  const sql = 'SELECT * FROM alerts WHERE id = ?';
  db.query(sql, [alertId], (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      res.status(404).json({ error: 'Alert not found' });
    } else {
      res.json(result[0]);
    }
  });
});

// Create a new alert
router.post('/', (req, res) => {
  const { type, location, severity, status, comments } = req.body;
  const sql = 'INSERT INTO alerts (type, location, severity, status, comments) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [type, location, severity, status, comments], (err, result) => {
    if (err) throw err;
    res.status(201).json({ id: result.insertId });
  });
});

// Update alert by ID
router.put('/:id', (req, res) => {
  const alertId = req.params.id;
  const { type, location, severity, status, comments } = req.body;
  const sql = 'UPDATE alerts SET type = ?, location = ?, severity = ?, status = ?, comments = ? WHERE id = ?';
  db.query(sql, [type, location, severity, status, comments, alertId], (err) => {
    if (err) throw err;
    res.sendStatus(200);
  });
});

// Delete alert by ID
router.delete('/:id', (req, res) => {
  const alertId = req.params.id;
  const sql = 'DELETE FROM alerts WHERE id = ?';
  db.query(sql, [alertId], (err) => {
    if (err) throw err;
    res.sendStatus(204);
  });
});

module.exports = router;
