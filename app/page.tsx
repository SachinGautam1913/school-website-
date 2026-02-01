import { HeroSection } from "@/components/home/hero-section"
import { FeaturesSection } from "@/components/home/features-section"
import { AboutPreview } from "@/components/home/about-preview"
import { StatsSection } from "@/components/home/stats-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AboutPreview />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
