import * as React from "react";
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
      <section className="relative w-full min-h-[68vh] flex flex-col justify-end px-6 pb-10 pt-32 overflow-hidden mb-0">
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
      <main className="relative z-20 px-6 pb-4 flex flex-col w-full">
        <div className="relative z-10 flex flex-col">
          {actionPhases.map((phase, index) => (
            <React.Fragment key={phase.id}>
              {index > 0 && (
                <div className="flex w-full h-5 sm:h-6" aria-hidden="true">
                  {/* ml-[47.5px] aligns perfectly with the center of the letter (24px padding + 24px half-width of w-12) */}
                  <div className="ml-[47.5px] w-px h-full bg-gradient-to-b from-transparent via-laranja-energia/30 to-transparent" />
                </div>
              )}
              <Reveal delay={index * 50}>
                <ActionPhaseCard phase={phase} />
              </Reveal>
            </React.Fragment>
          ))}
        </div>
      </main>

      <Reveal>
        <ActionCycle />
      </Reveal>

      <Reveal>
        <DiagnosticCTA />
      </Reveal>

      <div className="px-6 mb-12">
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
