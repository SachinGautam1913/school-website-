# Kirnajay Vidya Mandir

A comprehensive school website built with Next.js and Node.js, featuring modern UI components and a robust backend API.

## Features

- **Modern Frontend**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with shadcn/ui components
- **Backend API**: Node.js server with Express.js and Prisma ORM
- **Database**: PostgreSQL with Prisma migrations
- **Pages**: Home, About, Academics, Admissions, Achievements, Career, Contact, Director Message, Events, Faculty, Infrastructure
- **API Endpoints**: Admissions, Contact, Events, Faculty management

## Tech Stack

### Frontend
- Next.js 14
- TypeScript
- Tailwind CSS
- shadcn/ui components
- React Hook Form
- Lucide Icons

### Backend
- Node.js
- Express.js
- Prisma ORM
- PostgreSQL
- CORS
- Input validation middleware

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm
- PostgreSQL

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd KirnajayVidyaMandir
```

2. Install dependencies:
```bash
# Install frontend dependencies
pnpm install

# Install backend dependencies
cd backend
pnpm install
cd ..
```

3. Set up the database:
```bash
# Configure your PostgreSQL connection in prisma/schema.prisma
# Run migrations
npx prisma migrate dev

# Seed the database (optional)
node prisma/seed.js
```

4. Start the development servers:
```bash
# Start frontend (from root)
pnpm dev

# Start backend (from backend directory)
cd backend
node server.js
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── backend/               # Node.js backend
│   ├── routes/            # API route handlers
│   ├── middleware/        # Custom middleware
│   ├── data/              # Data files
│   └── server.js          # Main server file
├── components/            # Reusable React components
├── lib/                   # Utility functions and configurations
├── prisma/                # Database schema and migrations
└── public/                # Static assets
```

## API Endpoints

- `POST /api/admissions` - Submit admission inquiry
- `POST /api/contact` - Send contact message
- `GET /api/events` - Get school events
- `GET /api/faculty` - Get faculty information

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.