import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  BookOpen,
  FlaskConical,
  Monitor,
  Dumbbell,
  Music,
  Utensils,
  Bus,
  Shield,
  Wifi,
} from "lucide-react";

const facilities = [
  {
    icon: Building2,
    title: "Modern Classrooms",
    description:
      "Spacious, well-ventilated classrooms equipped with smart boards, projectors, and comfortable furniture for effective learning.",
    image: "/images/classroom.jpg",
  },
  {
    icon: BookOpen,
    title: "Library",
    description:
      "A well-stocked library with over 10,000 books, journals, and digital resources. Quiet reading spaces and computer terminals available.",
    image: "/images/library.jpg",
  },
  {
    icon: FlaskConical,
    title: "Science Laboratories",
    description:
      "Separate, fully-equipped laboratories for Physics, Chemistry, and Biology with modern apparatus for practical learning.",
    image: "/images/science-lab.jpg",
  },
  {
    icon: Monitor,
    title: "Computer Lab",
    description:
      "State-of-the-art computer lab with 50+ systems, high-speed internet, and latest software for digital education.",
    image: "/images/computer-lab.jpg",
  },
  {
    icon: Dumbbell,
    title: "Sports Facilities",
    description:
      "Expansive sports grounds for cricket, football, basketball, and volleyball. Indoor facilities for table tennis and chess.",
    image: "/images/sports-field.jpg",
  },
];

const otherFacilities = [
  {
    icon: Music,
    title: "Music & Dance Room",
    description: "Dedicated space for music and dance classes with professional equipment and instruments.",
  },
  {
    icon: Utensils,
    title: "Cafeteria",
    description: "Hygienic cafeteria serving nutritious meals and snacks prepared under strict quality standards.",
  },
  {
    icon: Bus,
    title: "Transportation",
    description: "Safe and comfortable school buses covering major routes with GPS tracking for parent peace of mind.",
  },
  {
    icon: Shield,
    title: "Security",
    description: "24/7 CCTV surveillance, trained security personnel, and controlled access points for student safety.",
  },
  {
    icon: Wifi,
    title: "Wi-Fi Campus",
    description: "Complete Wi-Fi coverage across the campus enabling digital learning and research activities.",
  },
];

export default function InfrastructurePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Infrastructure & Facilities
            </h1>
            <p className="text-lg opacity-90">
              World-class infrastructure designed to provide students with the best 
              learning environment and resources for all-round development.
            </p>
          </div>
        </div>
      </section>

      {/* Main Facilities */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <facility.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold">{facility.title}</h2>
                  </div>
                  <p className="text-muted-foreground text-lg">{facility.description}</p>
                </div>
                <div className={`relative h-64 md:h-80 rounded-lg overflow-hidden shadow-xl ${
                  index % 2 === 1 ? "md:order-1" : ""
                }`}>
                  <Image
                    src={facility.image || "/placeholder.svg"}
                    alt={facility.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Facilities Grid */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Additional Facilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Beyond academics, we provide comprehensive facilities to support student 
              wellbeing and extracurricular development.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherFacilities.map((facility, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <facility.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{facility.title}</h3>
                  <p className="text-sm text-muted-foreground">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Campus at a Glance
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "5", label: "Acre Campus" },
              { number: "60+", label: "Classrooms" },
              { number: "3", label: "Science Labs" },
              { number: "2", label: "Computer Labs" },
              { number: "1", label: "Library" },
              { number: "15", label: "School Buses" },
              { number: "50+", label: "CCTV Cameras" },
              { number: "24/7", label: "Security" },
            ].map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <p className="text-3xl md:text-4xl font-bold text-primary">{stat.number}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Measures */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Safety First
            </h2>
            <p className="text-muted-foreground mb-8">
              The safety and security of our students is our top priority. We have implemented 
              comprehensive measures to ensure a safe learning environment.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {[
                "CCTV surveillance throughout campus",
                "Trained security personnel at all entry points",
                "Fire safety equipment and regular drills",
                "First aid facilities and school nurse",
                "GPS-enabled school buses",
                "Strict visitor management system",
                "Regular safety audits and upgrades",
                "Emergency response protocols",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
