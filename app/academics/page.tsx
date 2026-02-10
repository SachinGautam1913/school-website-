"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  GraduationCap,
  Lightbulb,
  Users,
  Clock,
  Award,
  FileText,
  Calendar,
} from "lucide-react";

const programs = [
  {
    id: "primary",
    title: "Primary School",
    grades: "Classes I - V",
    description:
      "Our primary school program focuses on building strong foundational skills in literacy, numeracy, and critical thinking while nurturing curiosity and creativity.",
    subjects: [
      "English Language & Literature",
      "Hindi",
      "Mathematics",
      "Environmental Science",
      "General Knowledge",
      "Computer Basics",
      "Art & Craft",
      "Physical Education",
      "Games & Sports",
    ],
    highlights: [
      "Activity-based learning approach",
      "Focus on reading and communication skills",
      "Introduction to digital literacy",
      "Regular creative activities",
    ],
  },
  {
    id: "middle",
    title: "Middle School",
    grades: "Classes VI - VIII",
    description:
      "The middle school curriculum builds on primary education with deeper subject knowledge, analytical skills, and prepares students for higher academic challenges.",
    subjects: [
      "English",
      "Hindi",
      "Sanskrit",
      "Mathematics",
      "Science",
      "Social Studies",
      "Computer Science",
      "Physical Education",
      "Moral Science",
      "Environmental Science",
      "General Knowledge",
      "Games & Sports",
    ],
    highlights: [
      "Subject-specific specialized teaching",
      "Laboratory-based science education",
      "Project-based learning",
      "Career guidance introduction",
    ],
  },
  {
    id: "secondary",
    title: "Secondary School",
    grades: "Classes IX - X",
    description:
      "Our secondary program prepares students for board examinations with comprehensive curriculum coverage, exam strategies, and skill development.",
    subjects: [
      "English",
      "Hindi",
      "Mathematics",
      "Science (Physics, Chemistry, Biology)",
      "Social Science",
      "Computer Applications",
      "Physical Education",
      "co-Curricular Activities",
      "commarce Studies (for Commerce stream students)",
      "Arts (for Humanities stream students)",
    ],
    highlights: [
      "Board examination preparation",
      "Regular practice tests and assessments",
      "Career counseling sessions",
      "Remedial classes for weak students",
    ],
  },
  {
    id: "senior",
    title: "Senior Secondary",
    grades: "Classes XI - XII",
    description:
      "Senior secondary education offers specialized streams with focused preparation for competitive examinations and higher education.",
    subjects: [
      "Science Stream: Physics, Chemistry, Mathematics/Biology",
      "Commerce Stream: Accountancy, Business Studies, Economics",
      "Humanities Stream: History, Political Science, Geography",
      "Common: English, Physical Education",
    ],
    highlights: [
      "Stream-specific expert faculty",
      "Competitive exam preparation (JEE, NEET, etc.)",
      "Practical laboratory sessions",
      "University admission guidance",
    ],
  },
];

const methodologies = [
  {
    icon: Lightbulb,
    title: "Interactive Learning",
    description:
      "We use interactive teaching methods including discussions, demonstrations, and hands-on activities to make learning engaging.",
  },
  {
    icon: Users,
    title: "Collaborative Projects",
    description:
      "Students work together on projects that develop teamwork, communication, and problem-solving skills.",
  },
  {
    icon: BookOpen,
    title: "Technology Integration",
    description:
      "Smart classrooms and digital resources enhance the learning experience and prepare students for the digital age.",
  },
  {
    icon: Award,
    title: "Continuous Assessment",
    description:
      "Regular assessments help track progress and identify areas where students need additional support.",
  },
];

export default function AcademicsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Academic Programs
            </h1>
            <p className="text-lg opacity-90">
              Comprehensive education from primary to senior secondary, designed to nurture 
              academic excellence and holistic development.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Tabs */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="primary" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              {programs.map((program) => (
                <TabsTrigger key={program.id} value={program.id} className="text-sm">
                  {program.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {programs.map((program) => (
              <TabsContent key={program.id} value={program.id}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="font-serif text-2xl">{program.title}</CardTitle>
                        <p className="text-primary font-medium">{program.grades}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{program.description}</p>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <FileText className="w-4 h-4 text-primary" />
                          Subjects Offered
                        </h4>
                        <ul className="space-y-2">
                          {program.subjects.map((subject, index) => (
                            <li key={index} className="text-muted-foreground flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                              {subject}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Award className="w-4 h-4 text-primary" />
                          Program Highlights
                        </h4>
                        <ul className="space-y-2">
                          {program.highlights.map((highlight, index) => (
                            <li key={index} className="text-muted-foreground flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Our Teaching Approach
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We employ modern, student-centered teaching methodologies that make learning 
              effective and enjoyable.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologies.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <method.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar & Timings */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* School Timings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-serif">
                  <Clock className="w-5 h-5 text-primary" />
                  School Timings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-muted-foreground">Primary (I-V)</span>
                    <span className="font-medium">8:00 AM - 12:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-muted-foreground">Middle (VI-VIII)</span>
                    <span className="font-medium">8:00 AM - 2:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-muted-foreground">Secondary (IX-X)</span>
                    <span className="font-medium">8:00 AM - 2:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground">Senior Secondary (XI-XII)</span>
                    <span className="font-medium">8:00 AM - 2:30 PM</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  * Summer timings may vary. Parents will be notified in advance.
                </p>
              </CardContent>
            </Card>

            {/* Academic Calendar */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-serif">
                  <Calendar className="w-5 h-5 text-primary" />
                  Academic Calendar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-muted-foreground">Session Begins</span>
                    <span className="font-medium">April 1st</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-muted-foreground">First Term Exams</span>
                    <span className="font-medium">September</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-muted-foreground">Winter Break</span>
                    <span className="font-medium">December 25 - January 7</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-muted-foreground">Final Examinations</span>
                    <span className="font-medium">February - March</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground">Summer Vacation</span>
                    <span className="font-medium">May 15 - June 30</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Classroom Image */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-72 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/classroom.jpg"
                alt="Modern classroom at Kirnajay Vidya Mandir"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Modern Learning Environment
              </h2>
              <p className="text-muted-foreground mb-4">
                Our classrooms are equipped with modern teaching aids including smart boards, 
                projectors, and audio-visual equipment. We believe that a conducive learning 
                environment plays a crucial role in effective education.
              </p>
              <ul className="space-y-3">
                {[
                  "Smart classrooms with interactive displays",
                  "Well-ventilated and naturally lit spaces",
                  "Ergonomic furniture for student comfort",
                  "Digital resources and e-learning tools",
                  "Dedicated science and computer labs",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
