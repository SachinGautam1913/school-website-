const express = require('express');
const nodemailer = require('nodemailer');
const { db, run, query } = require('../database/db');
const { validate } = require('../middleware/validation');

const router = express.Router();

// POST /api/admissions - Submit admission application
router.post('/', validate('admission'), async (req, res) => {
  try {
    const { studentName, parentName, email, phone, classApplying, dateOfBirth, address, previousSchool } = req.body;

    // Insert into database
    const result = await run(
      'INSERT INTO admissions (student_name, parent_name, email, phone, class_applying, date_of_birth, address, previous_school) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [studentName, parentName, email, phone, classApplying, dateOfBirth, address, previousSchool || null]
    );

    // Send email notification
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: 'admissions@kirnajayvidyamandir.edu.in',
        subject: `New Admission Application: ${studentName}`,
        html: `
          <h2>New Admission Application</h2>
          <p><strong>Student Name:</strong> ${studentName}</p>
          <p><strong>Parent Name:</strong> ${parentName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Class Applying:</strong> ${classApplying}</p>
          <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>Previous School:</strong> ${previousSchool || 'Not provided'}</p>
          <hr>
          <p><small>Application ID: ${result.id} | Submitted at: ${new Date().toISOString()}</small></p>
        `,
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
    }

    res.status(201).json({
      message: 'Application submitted successfully',
      id: result.id
    });

  } catch (error) {
    console.error('Admission submission error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/admissions - Get all admissions (admin only)
router.get('/', async (req, res) => {
  try {
    const { status, class: classFilter } = req.query;

    let sql = 'SELECT * FROM admissions WHERE 1=1';
    const params = [];

    if (status) {
      sql += ' AND status = ?';
      params.push(status);
    }

    if (classFilter) {
      sql += ' AND class_applying = ?';
      params.push(classFilter);
    }

    sql += ' ORDER BY created_at DESC';

    const admissions = await query(sql, params);
    res.json(admissions);
  } catch (error) {
    console.error('Error fetching admissions:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/admissions/:id - Get specific admission
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const admission = await query(
      'SELECT * FROM admissions WHERE id = ?',
      [id]
    );

    if (admission.length === 0) {
      return res.status(404).json({ error: 'Admission not found' });
    }

    res.json(admission[0]);
  } catch (error) {
    console.error('Error fetching admission:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /api/admissions/:id/status - Update admission status (admin only)
router.put('/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['pending', 'approved', 'rejected'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    const result = await run(
      'UPDATE admissions SET status = ? WHERE id = ?',
      [status, id]
    );

    if (result.changes === 0) {
      return res.status(404).json({ error: 'Admission not found' });
    }

    res.json({ message: 'Status updated successfully' });
  } catch (error) {
    console.error('Error updating admission status:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE /api/admissions/:id - Delete admission (admin only)
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const result = await run(
      'DELETE FROM admissions WHERE id = ?',
      [id]
    );

    if (result.changes === 0) {
      return res.status(404).json({ error: 'Admission not found' });
    }

    res.json({ message: 'Admission deleted successfully' });
  } catch (error) {
    console.error('Error deleting admission:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;