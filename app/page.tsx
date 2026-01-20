import { HeroSection } from "@/components/landing/hero-section"
import { PainSection } from "@/components/landing/pain-section"
import { SolutionSection } from "@/components/landing/solution-section"
import { ExperienceSection } from "@/components/landing/experience-section"
import { AuthorSection } from "@/components/landing/author-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { FAQSection } from "@/components/landing/faq-section"
import { FinalCTA } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <PainSection />
      <SolutionSection />
      <ExperienceSection />
      <AuthorSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
