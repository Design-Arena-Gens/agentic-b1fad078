import { AboutSection } from "@/components/about-section";
import { CTASection } from "@/components/cta-section";
import { ContactSection } from "@/components/contact-section";
import { DarshanSection } from "@/components/darshan-section";
import { Footer } from "@/components/footer";
import { GallerySection } from "@/components/gallery-section";
import { Hero } from "@/components/hero";
import { MiraclesSection } from "@/components/miracles-section";
import { ServicesSection } from "@/components/services-section";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-amber-500/15 blur-[120px]" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-red-500/10 blur-[140px]" />
        <div className="absolute bottom-0 left-1/2 h-80 w-[640px] -translate-x-1/2 rounded-full bg-amber-500/10 blur-[140px]" />
      </div>
      <main className="relative">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <DarshanSection />
        <MiraclesSection />
        <GallerySection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
