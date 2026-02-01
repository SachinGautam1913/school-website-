"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Award, Users, BookOpen } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Integrity",
    description: "We uphold honesty and strong moral principles in all our actions.",
  },
  {
    icon: Users,
    title: "Respect",
    description: "We value every individual and treat everyone with dignity and kindness.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest standards in academics and character development.",
  },
  {
    icon: BookOpen,
    title: "Lifelong Learning",
    description: "We foster curiosity and a passion for continuous growth and discovery.",
  },
];

const milestones = [
  { year: "****", event: "School founded with 50 students" },
  { year: "****", event: "Expanded to include senior secondary classes" },
  { year: "****", event: "State-of-the-art science laboratories inaugurated" },
  { year: "****", event: "Achieved 100% pass rate in board examinations" },
  { year: "****", event: "Celebrated 30 years of educational excellence" },
  { year: "****", event: "Digital learning infrastructure implemented" },
  { year: "****", event: "Recognized as one of the top schools in the region" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              About Kirnajay Vidya Mandir
            </h1>
            <p className="text-lg opacity-90">
              For nearly four decades, we have been nurturing young minds and shaping futures 
              through quality education and holistic development.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Kirnajay Vidya Mandir was established in 1985 with a vision to provide quality 
                  education that combines academic excellence with strong moral values. What began 
                  as a small school with just 50 students has grown into a premier educational 
                  institution serving thousands of families.
                </p>
                <p>
                  Our founders believed that education should nurture not just the mind, but also 
                  the heart and soul. This philosophy continues to guide us as we prepare students 
                  to become responsible citizens and future leaders.
                </p>
                <p>
                  Over the years, we have consistently evolved our teaching methodologies, 
                  infrastructure, and curriculum to meet the changing needs of education while 
                  staying true to our core values of integrity, respect, and excellence.
                </p>
              </div>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/campus-life.jpg"
                alt="Students at Kirnajay Vidya Mandir"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-muted-foreground">
                  To provide a nurturing and stimulating environment where every child can discover 
                  their potential, develop critical thinking skills, and grow into confident, 
                  compassionate individuals ready to contribute positively to society.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground">
                  To be recognized as a center of excellence that inspires lifelong learning, 
                  fosters innovation, and produces well-rounded individuals who excel in their 
                  chosen fields while upholding the highest ethical standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These values form the foundation of everything we do at Kirnajay Vidya Mandir.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key milestones that have shaped our institution over the years.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-1/2" />
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center gap-6 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="hidden md:block md:w-1/2" />
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 z-10" />
                    <Card className="ml-10 md:ml-0 md:w-1/2">
                      <CardContent className="p-4">
                        <span className="text-primary font-bold">{milestone.year}</span>
                        <p className="text-muted-foreground">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
