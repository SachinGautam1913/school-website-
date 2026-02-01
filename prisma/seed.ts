import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Seed events
  const events = [
    {
      title: "Annual Day Celebration 2025",
      date: "March 15, 2025",
      time: "5:00 PM onwards",
      venue: "School Auditorium",
      description: "A grand celebration showcasing student talents through cultural performances, drama, and music.",
      category: "Cultural",
      isUpcoming: true,
    },
    {
      title: "Parent-Teacher Meeting",
      date: "February 20, 2025",
      time: "9:00 AM - 1:00 PM",
      venue: "Respective Classrooms",
      description: "Discuss student progress and academic performance with teachers.",
      category: "Academic",
      isUpcoming: true,
    },
    {
      title: "Science Exhibition",
      date: "February 28, 2025",
      time: "10:00 AM - 4:00 PM",
      venue: "School Campus",
      description: "Students showcase their innovative science projects and working models.",
      category: "Academic",
      isUpcoming: true,
    },
    {
      title: "Inter-House Sports Competition",
      date: "March 5-7, 2025",
      time: "8:00 AM onwards",
      venue: "Sports Ground",
      description: "Annual sports competition featuring athletics, team sports, and individual events.",
      category: "Sports",
      isUpcoming: true,
    },
    {
      title: "Independence Day Celebration",
      date: "August 15, 2024",
      image: "/images/hero-school.jpg",
      description: "Flag hoisting ceremony followed by cultural programs celebrating our nation.",
      category: "Cultural",
      isUpcoming: false,
    },
  ]

  for (const event of events) {
    await prisma.event.create({
      data: event,
    })
  }

  // Seed faculty
  const faculty = [
    {
      name: "Mrs. Meena Sharma",
      role: "Head of English Department",
      department: "Languages",
      qualification: "M.A. English, B.Ed.",
      experience: "15 years",
      email: "meena.sharma@kirnajayvidyamandir.edu.in",
    },
    {
      name: "Mr. Rajesh Kumar",
      role: "Mathematics Teacher",
      department: "Mathematics",
      qualification: "M.Sc. Mathematics, B.Ed.",
      experience: "12 years",
      email: "rajesh.kumar@kirnajayvidyamandir.edu.in",
    },
    {
      name: "Mrs. Priya Singh",
      role: "Science Teacher",
      department: "Sciences",
      qualification: "M.Sc. Physics, B.Ed.",
      experience: "10 years",
      email: "priya.singh@kirnajayvidyamandir.edu.in",
    },
  ]

  for (const member of faculty) {
    await prisma.faculty.create({
      data: member,
    })
  }

  console.log('Database seeded successfully')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })