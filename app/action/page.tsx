import { Metadata } from "next";
import Image from "next/image";
import { PageContainer } from "@/components/layout/PageContainer";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { InstitutionalCard } from "@/components/brand/InstitutionalCard";
import { Reveal } from "@/components/ui/Reveal";
import { ActionPhaseCard } from "@/components/ui/ActionPhaseCard";
import { ActionCycle } from "@/components/brand/ActionCycle";
import { DiagnosticCTA } from "@/components/ui/DiagnosticCTA";
import { actionPhases } from "@/config/action";

export const metadata: Metadata = {
  title: "Método A.C.T.I.O.N. | A2Max",
  description: "Apresentação institucional do Método A.C.T.I.O.N. da A2Max.",
};

export default function ActionPage() {
  return (
    <PageContainer>
      <Header variant="back" backHref="/" backLabel="Voltar" />

      {/* Hero Section */}
      <section className="relative w-full min-h-[68vh] flex flex-col justify-end px-6 pb-16 pt-32 overflow-hidden mb-6">
        {/* Background Image reused from index but repositioned with CSS */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/index-hero.png"
            alt="Atmosfera Método A.C.T.I.O.N."
            fill
            priority
            className="object-cover object-[center_20%] opacity-50 mix-blend-screen scale-105"
            sizes="(max-width: 480px) 100vw, 480px"
          />
          {/* Gradient overlay to ensure text readability and blend with dark background */}
          <div className="absolute inset-0 bg-gradient-to-t from-azul-noite via-azul-noite/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-azul-noite via-transparent to-transparent opacity-40" />
        </div>

        <div className="relative z-10 w-full">
          <Reveal>
            <div className="text-[11px] font-bold tracking-widest text-laranja-energia mb-5 uppercase">
              MÉTODO A.C.T.I.O.N.
            </div>
            <h1 className="text-[32px] md:text-4xl font-bold text-white mb-8 leading-[1.15]">
              Antes de oferecer uma solução, <br className="hidden sm:block" />
              precisamos entender <br />
              <span className="text-laranja-energia">o problema.</span>
            </h1>
            <p className="text-[17px] text-white/80 leading-relaxed max-w-[340px]">
              O A.C.T.I.O.N. é a nossa forma de pensar,
              diagnosticar e construir resultados reais
              para empresas e eventos.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Phases List */}
      <main className="relative z-20 px-6 pb-12 flex flex-col w-full">
        {/* Vertical subtle connector line behind cards */}
        <div className="absolute left-[72px] top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-laranja-energia/20 to-transparent z-0" aria-hidden="true" />
        
        <div className="relative z-10 flex flex-col gap-6">
          {actionPhases.map((phase, index) => (
            <Reveal key={phase.id} delay={index * 50}>
              <ActionPhaseCard phase={phase} />
            </Reveal>
          ))}
        </div>
      </main>

      <Reveal>
        <ActionCycle />
      </Reveal>

      <Reveal>
        <DiagnosticCTA />
      </Reveal>

      <div className="px-6 mb-16">
        <Reveal>
          <InstitutionalCard />
        </Reveal>
      </div>

      <Reveal>
        <Footer />
      </Reveal>
    </PageContainer>
  );
}
