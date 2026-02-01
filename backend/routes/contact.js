const express = require('express');
const nodemailer = require('nodemailer');
const { db, run, query } = require('../database/db');
const { validate } = require('../middleware/validation');

const router = express.Router();

// POST /api/contacts - Submit contact form
router.post('/', validate('contact'), async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Insert into database
    const result = await run(
      'INSERT INTO contacts (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)',
      [name, email, phone || null, subject, message]
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
        to: 'info@kirnajayvidyamandir.edu.in',
        subject: `New Contact Form Submission: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <hr>
          <p><small>Submitted at: ${new Date().toISOString()}</small></p>
        `,
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the request if email fails
    }

    res.status(201).json({
      message: 'Message sent successfully',
      id: result.id
    });

  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/contacts - Get all contacts (admin only)
router.get('/', async (req, res) => {
  try {
    const contacts = await query(
      'SELECT * FROM contacts ORDER BY created_at DESC'
    );

    res.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/contacts/:id - Get specific contact
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const contact = await query(
      'SELECT * FROM contacts WHERE id = ?',
      [id]
    );

    if (contact.length === 0) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    res.json(contact[0]);
  } catch (error) {
    console.error('Error fetching contact:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE /api/contacts/:id - Delete contact (admin only)
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const result = await run(
      'DELETE FROM contacts WHERE id = ?',
      [id]
    );

    if (result.changes === 0) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    res.json({ message: 'Contact deleted successfully' });
  } catch (error) {
    console.error('Error deleting contact:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;