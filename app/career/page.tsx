"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  CheckCircle,
  Send,
  Heart,
  Award,
  BookOpen,
  Coffee,
} from "lucide-react";

const openPositions = [
  {
    title: "PGT - Physics",
    department: "Science",
    type: "Full-time",
    experience: "3-5 years",
    qualification: "M.Sc. Physics with B.Ed.",
    deadline: "February 28, 2025",
  },
  {
    title: "TGT - Mathematics",
    department: "Mathematics",
    type: "Full-time",
    experience: "2-4 years",
    qualification: "B.Sc. Mathematics with B.Ed.",
    deadline: "February 28, 2025",
  },
  {
    title: "Primary Teacher",
    department: "Primary Section",
    type: "Full-time",
    experience: "1-3 years",
    qualification: "Graduation with D.El.Ed/B.El.Ed",
    deadline: "March 15, 2025",
  },
  {
    title: "Computer Science Teacher",
    department: "Computer Science",
    type: "Full-time",
    experience: "2-4 years",
    qualification: "B.Tech/MCA with B.Ed.",
    deadline: "March 15, 2025",
  },
  {
    title: "Sports Coach",
    department: "Physical Education",
    type: "Full-time",
    experience: "3+ years",
    qualification: "M.P.Ed with Sports Background",
    deadline: "March 31, 2025",
  },
  {
    title: "Administrative Assistant",
    department: "Administration",
    type: "Full-time",
    experience: "2+ years",
    qualification: "Graduate with computer proficiency",
    deadline: "March 31, 2025",
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Health Insurance",
    description: "Comprehensive health coverage for you and your family.",
  },
  {
    icon: Award,
    title: "Professional Growth",
    description: "Regular training programs and career advancement opportunities.",
  },
  {
    icon: BookOpen,
    title: "Education Support",
    description: "Fee concession for children of staff members.",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Supportive environment with reasonable working hours.",
  },
];

const hiringProcess = [
  {
    step: 1,
    title: "Application",
    description: "Submit your application with resume and required documents.",
  },
  {
    step: 2,
    title: "Screening",
    description: "Our HR team reviews applications and shortlists candidates.",
  },
  {
    step: 3,
    title: "Demo Class/Interview",
    description: "Teaching demonstration followed by panel interview.",
  },
  {
    step: 4,
    title: "Selection",
    description: "Final selection and offer letter to successful candidates.",
  },
];

export default function CareerPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Career Opportunities
            </h1>
            <p className="text-lg opacity-90">
              Join our team of dedicated educators and help shape the future of 
              young minds at Kirnajay Vidya Mandir.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Why Join Kirnajay Vidya Mandir?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer more than just a job - we offer a fulfilling career in education 
              with excellent benefits and growth opportunities.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Current Openings
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our current job openings and find the right opportunity for you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="font-serif text-lg">{position.title}</CardTitle>
                    <Badge>{position.type}</Badge>
                  </div>
                  <p className="text-sm text-primary">{position.department}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Briefcase className="w-4 h-4" />
                      <span>{position.experience} experience</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <BookOpen className="w-4 h-4" />
                      <span>{position.qualification}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>Apply by: {position.deadline}</span>
                    </div>
                  </div>
                  <Button className="w-full" size="sm">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Our Hiring Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A transparent and straightforward process to join our team.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {hiringProcess.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl flex items-center gap-3">
                  <Send className="w-6 h-6 text-primary" />
                  How to Apply
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Interested candidates can apply by submitting the following documents:
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Updated Resume/CV",
                    "Cover Letter expressing interest and suitability",
                    "Copies of educational certificates and degrees",
                    "Experience certificates from previous employers",
                    "Two passport-size photographs",
                    "Copy of Aadhar Card",
                  ].map((doc, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{doc}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm mb-2">
                    <strong>Submit your application to:</strong>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Email: careers@kirnajayvidyamandir.edu.in<br />
                    Or submit in person at the school office during working hours.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact for Queries */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
              Have Questions?
            </h2>
            <p className="text-muted-foreground mb-6">
              For any queries regarding career opportunities, please contact our HR department.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>School Campus, Main Road, Near OMAX City New</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                <span>Mon-Sat: 9:00 AM - 3:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
