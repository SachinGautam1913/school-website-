import { BookOpen, Users, Trophy, Lightbulb, Heart, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: BookOpen,
    title: "Quality Education",
    description:
      "Comprehensive curriculum designed to nurture academic excellence and critical thinking skills.",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description:
      "Highly qualified and experienced teachers dedicated to bringing out the best in every student.",
  },
  {
    icon: Trophy,
    title: "Holistic Development",
    description:
      "Focus on sports, arts, and extracurricular activities alongside academics.",
  },
  {
    icon: Lightbulb,
    title: "Modern Infrastructure",
    description:
      "State-of-the-art facilities including smart classrooms, labs, and sports amenities.",
  },
  {
    icon: Heart,
    title: "Value-Based Learning",
    description:
      "Instilling moral values and ethics to develop responsible citizens of tomorrow.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description:
      "Preparing students for success in an interconnected world with diverse opportunities.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
            Why Choose Us
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Excellence in Every Aspect
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            At Kirnajay Vidya Mandir, we believe in providing a well-rounded education that
            prepares students for success in all walks of life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group hover:shadow-lg transition-shadow duration-300 border-border"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
