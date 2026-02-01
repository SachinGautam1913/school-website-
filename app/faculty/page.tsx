import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, BookOpen, Heart, GraduationCap } from "lucide-react";

const departments = [
  {
    name: "Languages",
    subjects: ["English", "Hindi", "Sanskrit"],
    teachers: 12,
  },
  {
    name: "Mathematics",
    subjects: ["Mathematics", "Applied Mathematics"],
    teachers: 10,
  },
  {
    name: "Sciences",
    subjects: ["Physics", "Chemistry", "Biology"],
    teachers: 15,
  },
  {
    name: "Social Sciences",
    subjects: ["History", "Geography", "Political Science", "Economics"],
    teachers: 12,
  },
  {
    name: "Commerce",
    subjects: ["Accountancy", "Business Studies"],
    teachers: 6,
  },
  {
    name: "Computer Science",
    subjects: ["Computer Science", "Informatics Practices"],
    teachers: 5,
  },
  {
    name: "Physical Education",
    subjects: ["Physical Education", "Sports"],
    teachers: 4,
  },
  {
    name: "Arts & Music",
    subjects: ["Fine Arts", "Music", "Dance"],
    teachers: 4,
  },
];

const featuredFaculty = [
  {
    name: "Mrs. Meena Sharma",
    role: "Head of English Department",
    qualification: "M.A. English, B.Ed.",
    experience: "20+ years",
    description: "Dedicated to fostering a love for literature and communication skills.",
  },
  {
    name: "Mr. Suresh Kumar",
    role: "Head of Mathematics",
    qualification: "M.Sc. Mathematics, B.Ed.",
    experience: "18+ years",
    description: "Known for making complex concepts simple and building strong foundations.",
  },
  {
    name: "Dr. Priya Singh",
    role: "Head of Science",
    qualification: "Ph.D. Physics, B.Ed.",
    experience: "15+ years",
    description: "Passionate about experimental learning and scientific inquiry.",
  },
  {
    name: "Mr. Ramesh Verma",
    role: "Head of Social Sciences",
    qualification: "M.A. History, B.Ed.",
    experience: "22+ years",
    description: "Expert in making history come alive through storytelling and analysis.",
  },
  {
    name: "Mrs. Anita Gupta",
    role: "Head of Commerce",
    qualification: "M.Com., CA (Inter), B.Ed.",
    experience: "12+ years",
    description: "Brings real-world business insights to classroom teaching.",
  },
  {
    name: "Mr. Vikram Singh",
    role: "Physical Education Head",
    qualification: "M.P.Ed., National Level Athlete",
    experience: "15+ years",
    description: "Committed to developing sportsmanship and physical fitness.",
  },
];

const values = [
  {
    icon: GraduationCap,
    title: "Qualified & Experienced",
    description: "Our teachers hold advanced degrees and undergo regular training to stay updated.",
  },
  {
    icon: Heart,
    title: "Student-Centered",
    description: "Every teacher is committed to understanding and nurturing individual student needs.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Faculty regularly participate in workshops and professional development programs.",
  },
  {
    icon: Award,
    title: "Award-Winning",
    description: "Many of our teachers have been recognized for excellence in teaching at various levels.",
  },
];

export default function FacultyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Our Faculty
            </h1>
            <p className="text-lg opacity-90">
              Meet our dedicated team of educators who are committed to shaping the 
              future of every student through quality education and personal mentorship.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Stats */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-4xl font-bold">70+</p>
              <p className="text-sm opacity-90">Teaching Staff</p>
            </div>
            <div>
              <p className="text-4xl font-bold">15+</p>
              <p className="text-sm opacity-90">Ph.D. Holders</p>
            </div>
            <div>
              <p className="text-4xl font-bold">100%</p>
              <p className="text-sm opacity-90">Qualified Teachers</p>
            </div>
            <div>
              <p className="text-4xl font-bold">12+</p>
              <p className="text-sm opacity-90">Avg. Experience (Years)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              What Sets Our Faculty Apart
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our teachers are not just educators; they are mentors, guides, and 
              role models who inspire students to achieve their best.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Faculty */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Department Heads
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experienced leaders who guide their departments with expertise and dedication.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredFaculty.map((teacher, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">
                      {teacher.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg">{teacher.name}</h3>
                  <p className="text-primary font-medium text-sm">{teacher.role}</p>
                  <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                    <p>{teacher.qualification}</p>
                    <p>Experience: {teacher.experience}</p>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground italic">
                    &ldquo;{teacher.description}&rdquo;
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Academic Departments
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our well-organized departments ensure specialized attention to each subject area.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold">{dept.name}</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">
                      {dept.subjects.join(", ")}
                    </p>
                    <p className="text-primary font-medium">
                      {dept.teachers} Teachers
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Join Our Team
            </h2>
            <p className="text-muted-foreground mb-6">
              We are always looking for passionate educators who share our commitment 
              to excellence in education. If you are interested in joining Kirnajay 
              Vidya Mandir as a teacher, please visit our careers page.
            </p>
            <a
              href="/career"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              View Career Opportunities
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
