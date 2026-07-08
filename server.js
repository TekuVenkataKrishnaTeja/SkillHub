const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MySQL connection config
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'skillhub_db',
  port: process.env.DB_PORT || 3306
});

// Connect to database
db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.message);
    console.log('Ensure MySQL is running and database configuration matches schema.sql');
  } else {
    console.log('Connected to MySQL database skillhub_db.');
  }
});

// Authentication endpoints
app.post('/api/register', (req, res) => {
  const { name, email, phone, password } = req.body;
  if (!name || !email || !phone || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const userSql = 'INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)';
  db.query(userSql, [name, email, phone, password], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(400).json({ error: 'Email address already registered' });
      }
      return res.status(500).json({ error: err.message });
    }

    // Initialize tracking status for new user
    const trackSql = 'INSERT INTO tracking_status (email) VALUES (?)';
    db.query(trackSql, [email], (err) => {
      if (err) {
        console.error('Failed to initialize tracking status:', err.message);
      }
      res.status(201).json({ message: 'User registered successfully' });
    });
  });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  const sql = 'SELECT name, email, phone, password, image FROM users WHERE email = ?';
  db.query(sql, [email], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0 || results[0].password !== password) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const user = {
      name: results[0].name,
      email: results[0].email,
      phone: results[0].phone,
      image: results[0].image || ''
    };
    res.json({ message: 'Login successful', user });
  });
});

// Profile endpoints
app.get('/api/profile/:email', (req, res) => {
  const email = req.params.email;
  const sql = 'SELECT name, email, phone, image FROM users WHERE email = ?';
  db.query(sql, [email], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(results[0]);
  });
});

app.post('/api/profile/update', (req, res) => {
  const { email, name, phone, image } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const sql = 'UPDATE users SET name = ?, phone = ?, image = ? WHERE email = ?';
  db.query(sql, [name, phone, image, email], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Profile updated successfully' });
  });
});

// Tracking status endpoints
app.get('/api/tracking/:email', (req, res) => {
  const email = req.params.email;
  const sql = 'SELECT bsw26_status, nict_status_school, nict_status_college, nict_status_graduate FROM tracking_status WHERE email = ?';
  db.query(sql, [email], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.json({
        bsw26_status: 'not_started',
        nict_status_school: 'not_started',
        nict_status_college: 'not_started',
        nict_status_graduate: 'not_started'
      });
    }
    res.json(results[0]);
  });
});

app.post('/api/tracking/update', (req, res) => {
  const { email, program, status } = req.body;
  if (!email || !program || !status) {
    return res.status(400).json({ error: 'Email, program, and status are required' });
  }

  // Validate tracking program column name to prevent SQL injection
  const validPrograms = ['bsw26_status', 'nict_status_school', 'nict_status_college', 'nict_status_graduate'];
  if (!validPrograms.includes(program)) {
    return res.status(400).json({ error: 'Invalid program specification' });
  }

  const sql = `UPDATE tracking_status SET ${program} = ? WHERE email = ?`;
  db.query(sql, [status, email], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Tracking status updated successfully' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
