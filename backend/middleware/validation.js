const Joi = require('joi');

// Validation schemas
const schemas = {
  contact: Joi.object({
    name: Joi.string().min(2).max(100).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().pattern(/^[0-9+\-\s()]+$/).allow(''),
    subject: Joi.string().min(5).max(200).required(),
    message: Joi.string().min(10).max(2000).required()
  }),

  admission: Joi.object({
    studentName: Joi.string().min(2).max(100).required(),
    parentName: Joi.string().min(2).max(100).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().pattern(/^[0-9+\-\s()]+$/).required(),
    classApplying: Joi.string().valid('Nursery', 'KG', 'Class I', 'Class II', 'Class III', 'Class IV', 'Class V', 'Class VI', 'Class VII', 'Class VIII', 'Class IX', 'Class X', 'Class XI', 'Class XII').required(),
    dateOfBirth: Joi.string().pattern(/^\d{4}-\d{2}-\d{2}$/).required(),
    address: Joi.string().min(10).max(500).required(),
    previousSchool: Joi.string().max(200).allow('')
  }),

  event: Joi.object({
    title: Joi.string().min(3).max(200).required(),
    date: Joi.string().required(),
    time: Joi.string().required(),
    venue: Joi.string().min(3).max(200).required(),
    description: Joi.string().min(10).max(1000).required(),
    category: Joi.string().valid('Academic', 'Cultural', 'Sports', 'Other').required(),
    image: Joi.string().uri().allow(''),
    isUpcoming: Joi.boolean()
  }),

  faculty: Joi.object({
    name: Joi.string().min(2).max(100).required(),
    role: Joi.string().min(3).max(100).required(),
    department: Joi.string().min(2).max(100).required(),
    qualification: Joi.string().min(5).max(200).required(),
    experience: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().allow(''),
    phone: Joi.string().pattern(/^[0-9+\-\s()]+$/).allow(''),
    image: Joi.string().uri().allow(''),
    bio: Joi.string().max(1000).allow('')
  }),

  login: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
  }),

  register: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().valid('admin', 'staff').default('admin')
  })
};

// Validation middleware
const validate = (schemaName) => {
  return (req, res, next) => {
    const schema = schemas[schemaName];
    if (!schema) {
      return res.status(500).json({ error: 'Invalid validation schema' });
    }

    const { error, value } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      const errors = error.details.map(detail => ({
        field: detail.path.join('.'),
        message: detail.message
      }));

      return res.status(400).json({
        error: 'Validation failed',
        details: errors
      });
    }

    req.body = value; // Use validated/sanitized data
    next();
  };
};

// Authentication middleware (placeholder)
const authenticate = (req, res, next) => {
  // In a real app, verify JWT token
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  // For now, just check if token exists
  const token = authHeader.substring(7);
  if (!token) {
    return res.status(401).json({ error: 'Invalid token' });
  }

  // In production, verify JWT here
  req.user = { id: 1, role: 'admin' }; // Mock user
  next();
};

// Admin only middleware
const requireAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Admin access required' });
  }
  next();
};

module.exports = {
  validate,
  authenticate,
  requireAdmin
};