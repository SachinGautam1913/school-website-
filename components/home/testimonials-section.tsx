import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Kirnajay Vidya Mandir has transformed my child's learning experience. The teachers are exceptionally dedicated and the environment is nurturing.",
    author: "Mrs. Priya Sharma",
    role: "Parent of Class 8 Student",
  },
  {
    quote:
      "The school's focus on holistic development has helped my son excel not just in academics but also in sports and cultural activities.",
    author: "Mr. Rajesh Kumar",
    role: "Parent of Class 10 Student",
  },
  {
    quote:
      "As an alumnus, I can confidently say that KVM gave me the foundation for success. The values instilled here stay with you for life.",
    author: "Dr. Anita Patel",
    role: "Alumnus, Batch 2010",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Parents & Alumni Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Hear from our community about their experiences with Kirnajay Vidya Mandir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="border-border">
              <CardContent className="p-6">
                <Quote className="h-10 w-10 text-primary/20 mb-4" />
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
