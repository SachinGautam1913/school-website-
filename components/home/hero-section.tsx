import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-school.jpg"
          alt="Kirnajay Vidya Mandir Campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <p className="text-primary-foreground/90 font-medium mb-4 tracking-wide uppercase text-sm">
            Welcome to Kirnajay Vidya Mandir
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight text-balance">
            Nurturing Young Minds for a Brighter Tomorrow
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl">
            We are committed to providing quality education that develops intellectual curiosity,
            strong moral values, and the skills needed to succeed in a rapidly changing world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/admissions">
                Apply for Admission
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              asChild
            >
              <Link href="/about">
                <Play className="mr-2 h-5 w-5" />
                Virtual Tour
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary-foreground rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
