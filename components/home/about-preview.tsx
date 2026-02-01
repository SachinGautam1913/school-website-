import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const highlights = [
  "UP Board  Affiliated School",
  "Experienced & Qualified Teachers",
  "Smart Classrooms & Modern Labs",
  "Safe & Nurturing Environment",
  "Sports & Cultural Activities",
  "Transport Facility Available",
]

export function AboutPreview() {
  return (
    <section className="py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/campus-life.jpg"
                alt="Students engaged in campus activities"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-lg shadow-lg hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground font-serif font-bold text-2xl">
                  15+
                </div>
                <div>
                  <p className="font-semibold text-foreground">Years of</p>
                  <p className="text-muted-foreground">Excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
              About Our School
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
              A Legacy of Educational Excellence Since 1995
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Kirnajay Vidya Mandir has been a beacon of quality education for over two decades.
              Our mission is to provide holistic education that nurtures the intellectual,
              physical, emotional, and spiritual growth of every child.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We believe that every child is unique and has the potential to achieve greatness.
              Our dedicated team of educators works tirelessly to bring out the best in each
              student through innovative teaching methods and personalized attention.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Button asChild>
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
