const express = require('express');
const { db, run, query } = require('../database/db');
const { validate } = require('../middleware/validation');

const router = express.Router();

// GET /api/events - Get all events
router.get('/', async (req, res) => {
  try {
    const { upcoming, category } = req.query;

    let sql = 'SELECT * FROM events WHERE 1=1';
    const params = [];

    if (upcoming !== undefined) {
      sql += ' AND is_upcoming = ?';
      params.push(upcoming === 'true' ? 1 : 0);
    }

    if (category) {
      sql += ' AND category = ?';
      params.push(category);
    }

    sql += ' ORDER BY created_at DESC';

    const events = await query(sql, params);
    res.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/events/:id - Get specific event
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const event = await query(
      'SELECT * FROM events WHERE id = ?',
      [id]
    );

    if (event.length === 0) {
      return res.status(404).json({ error: 'Event not found' });
    }

    res.json(event[0]);
  } catch (error) {
    console.error('Error fetching event:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/events - Create new event (admin only)
router.post('/', validate('event'), async (req, res) => {
  try {
    const { title, date, time, venue, description, category, image, isUpcoming } = req.body;

    const result = await run(
      'INSERT INTO events (title, date, time, venue, description, category, image, is_upcoming) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [title, date, time, venue, description, category, image || null, isUpcoming ? 1 : 0]
    );

    res.status(201).json({
      message: 'Event created successfully',
      id: result.id
    });

  } catch (error) {
    console.error('Event creation error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /api/events/:id - Update event (admin only)
router.put('/:id', validate('event'), async (req, res) => {
  try {
    const { id } = req.params;
    const { title, date, time, venue, description, category, image, isUpcoming } = req.body;

    const result = await run(
      'UPDATE events SET title = ?, date = ?, time = ?, venue = ?, description = ?, category = ?, image = ?, is_upcoming = ? WHERE id = ?',
      [title, date, time, venue, description, category, image || null, isUpcoming ? 1 : 0, id]
    );

    if (result.changes === 0) {
      return res.status(404).json({ error: 'Event not found' });
    }

    res.json({ message: 'Event updated successfully' });
  } catch (error) {
    console.error('Error updating event:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE /api/events/:id - Delete event (admin only)
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const result = await run(
      'DELETE FROM events WHERE id = ?',
      [id]
    );

    if (result.changes === 0) {
      return res.status(404).json({ error: 'Event not found' });
    }

    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;