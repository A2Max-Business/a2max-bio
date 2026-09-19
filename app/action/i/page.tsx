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
import { AnalysisGrid, AnalysisItem } from "@/components/action-phases/AnalysisGrid";
import { InsightCards } from "@/components/action-phases/InsightCards";
import { NextPhaseNav } from "@/components/action-phases/NextPhaseNav";
import { ActionDiagnosticCTA } from "@/components/action-phases/ActionDiagnosticCTA";
import { Icons } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Inteligência de Dados | Método A.C.T.I.O.N. | A2Max",
  description: "Conheça a fase de Inteligência de Dados do Método A.C.T.I.O.N. da A2Max.",
};

const phaseIAnalysisItems: AnalysisItem[] = [
  { icon: Icons.network, label: "Origem dos\nresultados" },
  { icon: Icons.trendingUp, label: "Comportamento" },
  { icon: Icons.target, label: "Conversão" },
  { icon: Icons.barChart, label: "Custo &\nRetorno" },
  { icon: Icons.arrowRight, label: "Jornada do\ncliente" },
  { icon: Icons.filter, label: "Canais" },
  { icon: Icons.settings, label: "Operação" },
  { icon: Icons.refreshCw, label: "Retenção" },
];

export default function ActionPhaseI() {
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
                04 / 06
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
                  letter="I"
                  title={"Inteligência\nde Dados"}
                  verb="ENTENDEMOS"
                  opticalAdjustClassName="scale-x-[1.1] origin-left"
                />
              </Reveal>

              <Reveal delay={0.2}>
                <PhaseEditorialIntro 
                  headline={
                    <>Movimento gera dados.<br/> Agora precisamos entender<br/> o que eles estão dizendo.</>
                  }
                  content="Na fase I transformamos dados em entendimento. Observamos o que aconteceu depois que o sistema entrou em movimento, conectamos informações de diferentes pontos da operação e identificamos padrões que ajudam a explicar resultados, comportamentos e oportunidades. Dados só têm valor quando ajudam a tomar decisões."
                />
              </Reveal>
            </div>

            {/* Right Column: Editorial Media */}
            <div className="w-[38%] sm:w-[35%] py-8">
              <Reveal delay={0.3} className="h-full w-full">
                <ActionEditorialMedia 
                  src="/images/action-i-editorial.png"
                  alt="Inteligência de Dados Editorial"
                  hideText={true}
                  objectPosition="left center"
                />
              </Reveal>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[480px] mx-auto px-6 mt-5 flex flex-col gap-5 sm:gap-6 pb-8">
          <Reveal delay={0.4}>
            <AnalysisGrid 
              title="O que buscamos entender"
              items={phaseIAnalysisItems}
            />
          </Reveal>

          <Reveal delay={0.5}>
            <InsightCards 
              leftTitle="O que procuramos"
              leftItems={["Padrões", "Gargalos", "Eficiência", "Oportunidades"]}
              rightTitle="Resultado desta fase"
              rightText="Informação confiável para entender o que funciona, o que precisa mudar e onde estão as próximas oportunidades."
            />
          </Reveal>

          <Reveal delay={0.6}>
            <NextPhaseNav 
              introText="Agora entendemos o que está acontecendo. É hora de melhorar o que realmente importa."
              nextLetter="O"
              nextTitle="Otimização Contínua"
              nextVerb="MELHORAMOS"
              nextHref="/action/o"
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
