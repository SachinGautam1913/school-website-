# Kirnajay Vidya Mandir - Backend API

A Node.js/Express backend API for the Kirnajay Vidya Mandir school management system.

## Features

- **Contact Management**: Handle contact form submissions with email notifications
- **Admission System**: Process student admission applications
- **Events Management**: CRUD operations for school events
- **Faculty Directory**: Manage faculty member information
- **Authentication**: JWT-based user authentication
- **Validation**: Input validation using Joi
- **Security**: Helmet for security headers, CORS support
- **Database**: SQLite database with proper schema

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: SQLite3
- **Authentication**: JWT (jsonwebtoken)
- **Validation**: Joi
- **Email**: Nodemailer
- **Security**: Helmet, CORS
- **Logging**: Morgan

## Installation

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Copy `.env` file and update the values:
   ```bash
   cp .env .env.local
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Or start the production server:
   ```bash
   npm start
   ```

## Environment Variables

Create a `.env` file with the following variables:

```env
PORT=3001
NODE_ENV=development
DATABASE_URL=./data/school.db
JWT_SECRET=your-super-secret-jwt-key
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
ALLOWED_ORIGINS=http://localhost:3000
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/verify` - Verify JWT token
- `POST /api/auth/logout` - Logout

### Contacts
- `GET /api/contacts` - Get all contacts
- `GET /api/contacts/:id` - Get specific contact
- `POST /api/contacts` - Submit contact form
- `DELETE /api/contacts/:id` - Delete contact

### Admissions
- `GET /api/admissions` - Get all admissions (with filters)
- `GET /api/admissions/:id` - Get specific admission
- `POST /api/admissions` - Submit admission application
- `PUT /api/admissions/:id/status` - Update admission status
- `DELETE /api/admissions/:id` - Delete admission

### Events
- `GET /api/events` - Get all events (with filters)
- `GET /api/events/:id` - Get specific event
- `POST /api/events` - Create new event
- `PUT /api/events/:id` - Update event
- `DELETE /api/events/:id` - Delete event

### Faculty
- `GET /api/faculty` - Get all faculty (with filters)
- `GET /api/faculty/:id` - Get specific faculty member
- `POST /api/faculty` - Add new faculty member
- `PUT /api/faculty/:id` - Update faculty member
- `DELETE /api/faculty/:id` - Delete faculty member

### Health Check
- `GET /api/health` - Server health check

## Database Schema

The application uses SQLite with the following tables:
- `contacts` - Contact form submissions
- `admissions` - Student admission applications
- `events` - School events
- `faculty` - Faculty members
- `users` - System users for authentication

## Validation

All API endpoints include input validation using Joi schemas:
- Contact form validation
- Admission application validation
- Event data validation
- Faculty information validation
- Authentication data validation

## Security Features

- Helmet for security headers
- CORS configuration
- JWT token authentication
- Password hashing with bcrypt
- Input validation and sanitization
- SQL injection prevention with parameterized queries

## Development

The server auto-restarts on file changes when using `npm run dev` (requires nodemon).

## Production Deployment

1. Set `NODE_ENV=production` in environment variables
2. Use a process manager like PM2
3. Configure reverse proxy (nginx)
4. Set up proper SSL certificates
5. Use environment-specific configuration

## License

ISC