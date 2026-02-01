const express = require('express');
const { db, run, query } = require('../database/db');
const { validate } = require('../middleware/validation');

const router = express.Router();

// GET /api/faculty - Get all faculty
router.get('/', async (req, res) => {
  try {
    const { department } = req.query;

    let sql = 'SELECT * FROM faculty WHERE 1=1';
    const params = [];

    if (department) {
      sql += ' AND department = ?';
      params.push(department);
    }

    sql += ' ORDER BY name ASC';

    const faculty = await query(sql, params);
    res.json(faculty);
  } catch (error) {
    console.error('Error fetching faculty:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/faculty/:id - Get specific faculty member
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const faculty = await query(
      'SELECT * FROM faculty WHERE id = ?',
      [id]
    );

    if (faculty.length === 0) {
      return res.status(404).json({ error: 'Faculty member not found' });
    }

    res.json(faculty[0]);
  } catch (error) {
    console.error('Error fetching faculty:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/faculty - Create new faculty member (admin only)
router.post('/', validate('faculty'), async (req, res) => {
  try {
    const { name, role, department, qualification, experience, email, phone, image, bio } = req.body;

    const result = await run(
      'INSERT INTO faculty (name, role, department, qualification, experience, email, phone, image, bio) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [name, role, department, qualification, experience, email || null, phone || null, image || null, bio || null]
    );

    res.status(201).json({
      message: 'Faculty member added successfully',
      id: result.id
    });

  } catch (error) {
    console.error('Faculty creation error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /api/faculty/:id - Update faculty member (admin only)
router.put('/:id', validate('faculty'), async (req, res) => {
  try {
    const { id } = req.params;
    const { name, role, department, qualification, experience, email, phone, image, bio } = req.body;

    const result = await run(
      'UPDATE faculty SET name = ?, role = ?, department = ?, qualification = ?, experience = ?, email = ?, phone = ?, image = ?, bio = ? WHERE id = ?',
      [name, role, department, qualification, experience, email || null, phone || null, image || null, bio || null, id]
    );

    if (result.changes === 0) {
      return res.status(404).json({ error: 'Faculty member not found' });
    }

    res.json({ message: 'Faculty member updated successfully' });
  } catch (error) {
    console.error('Error updating faculty:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE /api/faculty/:id - Delete faculty member (admin only)
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const result = await run(
      'DELETE FROM faculty WHERE id = ?',
      [id]
    );

    if (result.changes === 0) {
      return res.status(404).json({ error: 'Faculty member not found' });
    }

    res.json({ message: 'Faculty member deleted successfully' });
  } catch (error) {
    console.error('Error deleting faculty:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;