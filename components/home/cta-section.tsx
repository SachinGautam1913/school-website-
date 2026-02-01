import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-accent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-accent-foreground mb-4 text-balance">
            Ready to Give Your Child the Best Education?
          </h2>
          <p className="text-accent-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Admissions are now open for the upcoming academic session. Join our community of
            learners and let your child thrive in a supportive and stimulating environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/admissions">
                Apply for Admission
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 bg-transparent"
              asChild
            >
              <a href="tel:+91**********10">
                <Phone className="mr-2 h-5 w-5" />
                Call Us: +91 **********10
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
