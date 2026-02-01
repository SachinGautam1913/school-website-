import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Star, Award, GraduationCap, Users } from "lucide-react";

const boardResults = [
  { year: "2024", class: "Class X", passRate: "100%", distinction: "45%", firstDiv: "75%" },
  { year: "2024", class: "Class XII", passRate: "100%", distinction: "38%", firstDiv: "70%" },
  { year: "2023", class: "Class X", passRate: "100%", distinction: "42%", firstDiv: "72%" },
  { year: "2023", class: "Class XII", passRate: "99%", distinction: "35%", firstDiv: "68%" },
];

const toppers = [
  { name: "Piya Sharma", class: "Class XII Science", percentage: "98.4%", year: "2024" },
  { name: "Rahul Kumar", class: "Class XII Commerce", percentage: "97.2%", year: "2024" },
  { name: "Ananya Singh", class: "Class X", percentage: "99.0%", year: "2024" },
  { name: "Vikash Gupta", class: "Class XII Science", percentage: "97.8%", year: "2023" },
  { name: "Neha Verma", class: "Class X", percentage: "98.6%", year: "2023" },
  { name: "Amit Patel", class: "Class XII Commerce", percentage: "96.4%", year: "2023" },
];

const competitionAchievements = [
  {
    category: "Academic",
    achievements: [
      "State-level Science Olympiad - 3 Gold Medals (2024)",
      "National Mathematics Olympiad - 2 Silver Medals (2024)",
      "Inter-School Quiz Competition - Champions (2024)",
      "District-level Essay Writing - 1st Prize (2024)",
      "State Science Exhibition - Best Project Award (2023)",
    ],
  },
  {
    category: "Sports",
    achievements: [
      "District Athletics Championship - Team Champions (2024)",
      "State-level Cricket Tournament - Runners Up (2024)",
      "Inter-School Basketball - Champions (2024)",
      "District Badminton - 2 Gold, 1 Silver (2024)",
      "State Swimming Championship - Bronze Medal (2023)",
    ],
  },
  {
    category: "Cultural",
    achievements: [
      "State Youth Festival - Best Folk Dance (2024)",
      "Inter-School Drama Competition - 1st Prize (2024)",
      "District Singing Competition - Gold Medal (2024)",
      "Art Competition - Multiple Awards (2024)",
      "State-level Debate - 2nd Prize (2023)",
    ],
  },
];

const institutionalAwards = [
  {
    title: "Best School Award",
    year: "2024",
    body: "District Education Department",
    description: "Recognized for excellence in academic performance and infrastructure.",
  },
  {
    title: "Green School Certification",
    year: "2023",
    body: "Environment Ministry",
    description: "Awarded for environmental initiatives and sustainable practices.",
  },
  {
    title: "Digital Learning Excellence",
    year: "2023",
    body: "EdTech Foundation",
    description: "Recognized for outstanding implementation of digital learning tools.",
  },
  {
    title: "Community Service Award",
    year: "2022",
    body: "District Administration",
    description: "Honored for student-led community service and outreach programs.",
  },
];

export default function AchievementsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Achievements & Awards
            </h1>
            <p className="text-lg opacity-90">
              Celebrating the outstanding accomplishments of our students and institution 
              in academics, sports, and extracurricular activities.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <Trophy className="w-8 h-8 mx-auto mb-2" />
              <p className="text-3xl font-bold">50+</p>
              <p className="text-sm opacity-90">Awards in 2024</p>
            </div>
            <div>
              <Medal className="w-8 h-8 mx-auto mb-2" />
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm opacity-90">Board Pass Rate</p>
            </div>
            <div>
              <Star className="w-8 h-8 mx-auto mb-2" />
              <p className="text-3xl font-bold">25+</p>
              <p className="text-sm opacity-90">District Toppers</p>
            </div>
            <div>
              <Award className="w-8 h-8 mx-auto mb-2" />
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm opacity-90">State-level Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Board Results */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Board Examination Results
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Consistent excellence in board examinations year after year.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto">
              <thead>
                <tr className="bg-accent text-accent-foreground">
                  <th className="p-4 text-left font-semibold">Year</th>
                  <th className="p-4 text-center font-semibold">Class</th>
                  <th className="p-4 text-center font-semibold">Pass Rate</th>
                  <th className="p-4 text-center font-semibold">Distinction</th>
                  <th className="p-4 text-center font-semibold">First Division</th>
                </tr>
              </thead>
              <tbody>
                {boardResults.map((result, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-4 font-medium">{result.year}</td>
                    <td className="p-4 text-center">{result.class}</td>
                    <td className="p-4 text-center">
                      <Badge variant="default">{result.passRate}</Badge>
                    </td>
                    <td className="p-4 text-center text-muted-foreground">{result.distinction}</td>
                    <td className="p-4 text-center text-muted-foreground">{result.firstDiv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Toppers */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Our Star Performers
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Students who have achieved outstanding results in board examinations.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {toppers.map((topper, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{topper.name}</h3>
                  <p className="text-sm text-muted-foreground">{topper.class}</p>
                  <p className="text-2xl font-bold text-primary mt-2">{topper.percentage}</p>
                  <Badge variant="outline" className="mt-2">{topper.year}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Competition Achievements */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Competition Achievements
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our students excel in various inter-school and state-level competitions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {competitionAchievements.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 font-serif">
                    <Trophy className="w-5 h-5 text-primary" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Medal className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Awards */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Institutional Recognition
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Awards and certifications received by our institution.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {institutionalAwards.map((award, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{award.title}</h3>
                      <p className="text-sm text-primary">{award.body} - {award.year}</p>
                      <p className="text-sm text-muted-foreground mt-2">{award.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Success */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Users className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Alumni Success Stories
            </h2>
            <p className="text-muted-foreground mb-8">
              Our alumni have gone on to achieve remarkable success in various fields. 
              From IIT graduates to successful entrepreneurs, doctors, and civil servants, 
              Kirnajay Vidya Mandir alumni are making their mark across the nation and beyond.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { count: "50+", label: "IIT/NIT Admissions" },
                { count: "30+", label: "Medical Professionals" },
                { count: "20+", label: "Civil Servants" },
                { count: "100+", label: "Engineers & Scientists" },
              ].map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-4 text-center">
                    <p className="text-2xl font-bold text-primary">{stat.count}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
