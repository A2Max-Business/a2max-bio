import * as React from "react";
import { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";

// Phase specific components
import { PhaseIdentity } from "@/components/action-phases/PhaseIdentity";
import { PhaseEditorialIntro } from "@/components/action-phases/PhaseEditorialIntro";
import { ActionEditorialMedia } from "@/components/action-phases/ActionEditorialMedia";
import { AnalysisGrid } from "@/components/action-phases/AnalysisGrid";
import { InsightCards } from "@/components/action-phases/InsightCards";
import { NextPhaseNav } from "@/components/action-phases/NextPhaseNav";
import { ActionDiagnosticCTA } from "@/components/action-phases/ActionDiagnosticCTA";

export const metadata: Metadata = {
  title: "Auditoria e Análise | Método A.C.T.I.O.N. | A2Max",
  description: "Conheça a fase de Auditoria e Análise do Método A.C.T.I.O.N. da A2Max.",
};

export default function ActionPhaseA() {
  return (
    <PageContainer className="bg-[#F5F3EC]">
      <Header variant="light" backHref="/action" backLabel="Método" />

      <main className="w-full flex-1 flex flex-col pt-32 pb-4">
        {/* Top Indicator */}
        <div className="w-full px-6">
          <Reveal>
            <div className="flex justify-between items-center w-full max-w-[480px] mx-auto pb-4 border-b border-[#E5E2D9]">
              <span className="text-[10px] tracking-widest text-azul-noite/50 font-bold uppercase">
                Método A.C.T.I.O.N.
              </span>
              <span className="text-[10px] tracking-widest text-azul-noite/50 font-bold">
                01 / 06
              </span>
            </div>
          </Reveal>
        </div>

        {/* Phase Editorial Top Section */}
        <div className="w-full px-6 mt-4">
          <div className="w-full max-w-[480px] mx-auto flex flex-row items-stretch justify-between gap-2 sm:gap-4">
            
            {/* Left Column: Text */}
            <div className="flex flex-col w-[58%] sm:w-[60%]">
              <Reveal delay={0.1}>
                <PhaseIdentity 
                  letter="A"
                  iconSlug="a"
                  title={"Auditoria\ne Análise"}
                  verb="DESCOBRIMOS"
                />
              </Reveal>

              <Reveal delay={0.2}>
                <PhaseEditorialIntro 
                  headline={
                    <>Antes de mudar qualquer coisa, <br/> precisamos entender o que <br/> está acontecendo.</>
                  }
                  content="Na primeira fase do A.C.T.I.O.N. analisamos o seu negócio de forma completa e isenta. Investigamos dados, processos, pessoas, tecnologia, marketing, vendas, atendimento e os principais números da operação para identificar gargalos, desperdícios, riscos e oportunidades reais."
                />
              </Reveal>
            </div>

            {/* Right Column: Editorial Media */}
            <div className="w-[38%] sm:w-[35%] py-8">
              <Reveal delay={0.3} className="h-full w-full">
                <ActionEditorialMedia />
              </Reveal>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[480px] mx-auto px-6 mt-6 flex flex-col gap-6">
          <Reveal delay={0.4}>
            <AnalysisGrid />
          </Reveal>

          <Reveal delay={0.5}>
            <InsightCards />
          </Reveal>

          <Reveal delay={0.6}>
            <NextPhaseNav 
              introText="Depois de entender, precisamos estruturar."
              nextLetter="C"
              nextTitle="Construção da Estrutura"
              nextVerb="ESTRUTURAMOS"
              nextHref="/action/c"
            />
          </Reveal>

          <Reveal delay={0.7}>
            <ActionDiagnosticCTA />
          </Reveal>
        </div>
      </main>

      <Reveal delay={0.8} className="w-full">
        <Footer variant="light" />
      </Reveal>
    </PageContainer>
  );
}
