import { PageContainer } from "@/components/layout/PageContainer";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/brand/HeroSection";
import { DestinationCard } from "@/components/ui/DestinationCard";
import { InstitutionalCard } from "@/components/brand/InstitutionalCard";
import { Footer } from "@/components/layout/Footer";
import { destinations } from "@/config/destinations";

export default function Home() {
  return (
    <PageContainer>
      <Header />
      
      <HeroSection />

      {/* Destinations List */}
      <main className="px-6 flex flex-col gap-4 mt-8">
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </main>

      <InstitutionalCard />
      
      <Footer />
    </PageContainer>
  );
}
