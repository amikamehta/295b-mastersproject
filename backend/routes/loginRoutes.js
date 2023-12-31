const express = require('express');
const router = express.Router();
const db = require('../database');

// Get all login entries
router.post('/user/', (req, res) => {

  const email = req.body.email;
  const password = req.body.password;
  console.log('login')
  console.log(email)
  console.log(password)
  console.log('login')
  const sql = 'SELECT * FROM login where email=? and password=?';
  db.query(sql,[email,password], (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      res.json({ error: 'Login entry not found' });
    } else {
      res.json(result[0]);
    }
  });
});

// Get login entry by ID
/*
router.get('/:id', (req, res) => {
  const loginId = req.params.id;
  const sql = 'SELECT * FROM login WHERE id = ?';
  db.query(sql, [loginId], (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      res.status(404).json({ error: 'Login entry not found' });
    } else {
      res.json(result[0]);
    }
  });
});*/

// Create a new login entry
router.post('/', (req, res) => {
  console.log(req.body)
  const { email, password } = req.body;
  const sql = 'INSERT INTO login (email, password) VALUES (?, ?)';
  db.query(sql, [email, password], (err, result) => {
    if (err) throw err;
    res.status(201).json({ id: result.insertId });
  });
});

// Update login entry by ID
router.put('/:id', (req, res) => {
  const loginId = req.params.id;
  const { email, password } = req.body;
  const sql = 'UPDATE login SET email = ?, password = ? WHERE id = ?';
  db.query(sql, [email, password, loginId], (err) => {
    if (err) throw err;
    res.sendStatus(200);
  });
});

// Delete login entry by ID
router.delete('/:id', (req, res) => {
  const loginId = req.params.id;
  const sql = 'DELETE FROM login WHERE id = ?';
  db.query(sql, [loginId], (err) => {
    if (err) throw err;
    res.sendStatus(204);
  });
});

module.exports = router;
