const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { db, run, query, get } = require('../database/db');
const { validate } = require('../middleware/validation');

const router = express.Router();

// POST /api/auth/register - Register new user (admin only)
router.post('/register', validate('register'), async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // Check if user already exists
    const existingUser = await get(
      'SELECT id FROM users WHERE email = ?',
      [email]
    );

    if (existingUser) {
      return res.status(409).json({ error: 'User already exists' });
    }

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Insert user
    const result = await run(
      'INSERT INTO users (email, password, role) VALUES (?, ?, ?)',
      [email, hashedPassword, role]
    );

    res.status(201).json({
      message: 'User registered successfully',
      id: result.id
    });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/auth/login - Login user
router.post('/login', validate('login'), async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await get(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Check password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/auth/verify - Verify token
router.post('/verify', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const token = authHeader.substring(7);

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');

    // Get user details
    const user = await get(
      'SELECT id, email, role FROM users WHERE id = ?',
      [decoded.id]
    );

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    res.json({
      valid: true,
      user
    });

  } catch (error) {
    console.error('Token verification error:', error);
    res.status(401).json({ error: 'Invalid token' });
  }
});

// POST /api/auth/logout - Logout (client-side token removal)
router.post('/logout', (req, res) => {
  res.json({ message: 'Logged out successfully' });
});

module.exports = router;