import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import CredibilitySection from '@/components/CredibilitySection'
import ServiceHighlights from '@/components/ServiceHighlights'
import WhyChooseUs from '@/components/WhyChooseUs'
import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CredibilitySection />
      <ServiceHighlights />
      <WhyChooseUs />
      <CallToAction />
      <Footer />
    </main>
  )
}
