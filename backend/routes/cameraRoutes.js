const express = require('express');
const router = express.Router();
const db = require('../database');

// Get all cameras
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM camera';
  db.query(sql, (err, result) => {
      if (err) throw err;
      res.status(200).json(result);
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
  const { location, camera_type, ip_address, nickname, comments } = req.body;
  console.log(req.body);
    const sql = 'INSERT INTO camera (location, camera_type, ip_address, nickname, comments) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [location, camera_type, ip_address, nickname, comments], (err, result) => {
        if (err) throw err;
        res.status(201).send(`Camera added with ID: ${result.insertId}`);
    });
});

// Update camera by ID
router.put('/:id', (req, res) => {
  const { location, camera_type, ip_address, nickname, comments } = req.body;
    const sql = `UPDATE camera SET location = ?, camera_type = ?, ip_address = ?, nickname = ?, comments = ? WHERE id = ${req.params.id}`;
    db.query(sql, [location, camera_type, ip_address, nickname, comments], (err) => {
        if (err) throw err;
        res.status(200).send(`Camera updated with ID: ${req.params.id}`);
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
