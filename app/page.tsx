import { PageContainer } from "@/components/layout/PageContainer";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/brand/HeroSection";
import { DestinationCard } from "@/components/ui/DestinationCard";
import { InstitutionalCard } from "@/components/brand/InstitutionalCard";
import { ConceptualBar } from "@/components/brand/ConceptualBar";
import { Footer } from "@/components/layout/Footer";
import { destinations } from "@/config/destinations";
import { Reveal } from "@/components/ui/Reveal";

export default function Home() {
  return (
    <PageContainer>
      <Header />
      
      <HeroSection />

      <Reveal delay={100}>
        <ConceptualBar />
      </Reveal>

      {/* Destinations List - Spacing adjusted to connect smoothly with Hero */}
      <main className="px-6 flex flex-col gap-3 mt-1 relative z-20 mb-8">
        {destinations.map((destination, index) => (
          <Reveal key={destination.id} delay={index * 50}>
            <DestinationCard destination={destination} />
          </Reveal>
        ))}
      </main>

      <Reveal>
        <InstitutionalCard />
      </Reveal>
      
      <Reveal>
        <Footer />
      </Reveal>
    </PageContainer>
  );
}
