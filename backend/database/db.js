const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Database file path
const dbPath = process.env.DATABASE_URL || path.join(__dirname, '..', 'data', 'school.db');

// Create database connection
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database');
    initializeTables();
  }
});

// Initialize tables
function initializeTables() {
  const tables = [
    `CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      subject TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`,
    `CREATE TABLE IF NOT EXISTS admissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      student_name TEXT NOT NULL,
      parent_name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      class_applying TEXT NOT NULL,
      date_of_birth TEXT NOT NULL,
      address TEXT NOT NULL,
      previous_school TEXT,
      documents TEXT,
      status TEXT DEFAULT 'pending',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`,
    `CREATE TABLE IF NOT EXISTS events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      date TEXT NOT NULL,
      time TEXT NOT NULL,
      venue TEXT NOT NULL,
      description TEXT NOT NULL,
      category TEXT NOT NULL,
      image TEXT,
      is_upcoming BOOLEAN DEFAULT 1,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`,
    `CREATE TABLE IF NOT EXISTS faculty (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      role TEXT NOT NULL,
      department TEXT NOT NULL,
      qualification TEXT NOT NULL,
      experience TEXT NOT NULL,
      email TEXT,
      phone TEXT,
      image TEXT,
      bio TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`,
    `CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      role TEXT DEFAULT 'admin',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`
  ];

  let completed = 0;
  const total = tables.length;

  tables.forEach(sql => {
    db.run(sql, (err) => {
      if (err) {
        console.error('Error creating table:', err.message);
      } else {
        completed++;
        if (completed === total) {
          // All tables created, now seed data
          seedData();
        }
      }
    });
  });
}

// Seed initial data
function seedData() {
  // Check if events table is empty
  db.get("SELECT COUNT(*) as count FROM events", [], (err, row) => {
    if (err) {
      console.error('Error checking events:', err.message);
      return;
    }

    if (row.count === 0) {
      const events = [
        {
          title: "Annual Day Celebration 2025",
          date: "March 15, 2025",
          time: "5:00 PM onwards",
          venue: "School Auditorium",
          description: "A grand celebration showcasing student talents through cultural performances, drama, and music.",
          category: "Cultural",
          is_upcoming: 1
        },
        {
          title: "Parent-Teacher Meeting",
          date: "February 20, 2025",
          time: "9:00 AM - 1:00 PM",
          venue: "Respective Classrooms",
          description: "Discuss student progress and academic performance with teachers.",
          category: "Academic",
          is_upcoming: 1
        },
        {
          title: "Science Exhibition",
          date: "February 28, 2025",
          time: "10:00 AM - 4:00 PM",
          venue: "School Campus",
          description: "Students showcase their innovative science projects and working models.",
          category: "Academic",
          is_upcoming: 1
        }
      ];

      const stmt = db.prepare(`
        INSERT INTO events (title, date, time, venue, description, category, is_upcoming)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `);

      events.forEach(event => {
        stmt.run(event.title, event.date, event.time, event.venue, event.description, event.category, event.is_upcoming);
      });

      stmt.finalize();
      console.log('Seeded initial events');
    }
  });

  // Check if faculty table is empty
  db.get("SELECT COUNT(*) as count FROM faculty", [], (err, row) => {
    if (err) {
      console.error('Error checking faculty:', err.message);
      return;
    }

    if (row.count === 0) {
      const faculty = [
        {
          name: "Mrs. Meena Sharma",
          role: "Head of English Department",
          department: "Languages",
          qualification: "M.A. English, B.Ed.",
          experience: "15 years",
          email: "meena.sharma@kirnajayvidyamandir.edu.in"
        },
        {
          name: "Mr. Rajesh Kumar",
          role: "Mathematics Teacher",
          department: "Mathematics",
          qualification: "M.Sc. Mathematics, B.Ed.",
          experience: "12 years",
          email: "rajesh.kumar@kirnajayvidyamandir.edu.in"
        }
      ];

      const stmt = db.prepare(`
        INSERT INTO faculty (name, role, department, qualification, experience, email)
        VALUES (?, ?, ?, ?, ?, ?)
      `);

      faculty.forEach(member => {
        stmt.run(member.name, member.role, member.department, member.qualification, member.experience, member.email);
      });

      stmt.finalize();
      console.log('Seeded initial faculty');
    }
  });
}

// Helper functions for database operations
const dbHelpers = {
  // Generic query function
  query: (sql, params = []) => {
    return new Promise((resolve, reject) => {
      db.all(sql, params, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  },

  // Generic run function for INSERT, UPDATE, DELETE
  run: (sql, params = []) => {
    return new Promise((resolve, reject) => {
      db.run(sql, params, function(err) {
        if (err) {
          reject(err);
        } else {
          resolve({ id: this.lastID, changes: this.changes });
        }
      });
    });
  },

  // Get single row
  get: (sql, params = []) => {
    return new Promise((resolve, reject) => {
      db.get(sql, params, (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }
};

module.exports = { db, ...dbHelpers };