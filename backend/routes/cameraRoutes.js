const express = require('express');
const router = express.Router();
const db = require('../database');

// Get all cameras
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM camera';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get camera by ID
router.get('/:id', (req, res) => {
  const cameraId = req.params.id;
  const sql = 'SELECT * FROM camera WHERE id = ?';
  db.query(sql, [cameraId], (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      res.status(404).json({ error: 'Camera not found' });
    } else {
      res.json(result[0]);
    }
  });
});

// Create a new camera
router.post('/', (req, res) => {
  const { name, cost, image } = req.body;
  const sql = 'INSERT INTO camera (name, cost, image) VALUES (?, ?, ?)';
  db.query(sql, [name, cost, image], (err, result) => {
    if (err) throw err;
    res.status(201).json({ id: result.insertId });
  });
});

// Update camera by ID
router.put('/:id', (req, res) => {
  const cameraId = req.params.id;
  const { name, cost, image } = req.body;
  const sql = 'UPDATE camera SET name = ?, cost = ?, image = ? WHERE id = ?';
  db.query(sql, [name, cost, image, cameraId], (err) => {
    if (err) throw err;
    res.sendStatus(200);
  });
});

// Delete camera by ID
router.delete('/:id', (req, res) => {
  const cameraId = req.params.id;
  const sql = 'DELETE FROM camera WHERE id = ?';
  db.query(sql, [cameraId], (err) => {
    if (err) throw err;
    res.sendStatus(204);
  });
});

module.exports = router;
