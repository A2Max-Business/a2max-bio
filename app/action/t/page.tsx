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
  title: "Tráfego e Tração | Método A.C.T.I.O.N. | A2Max",
  description: "Conheça a fase de Tráfego e Tração do Método A.C.T.I.O.N. da A2Max.",
};

const phaseTAnalysisItems: AnalysisItem[] = [
  { icon: Icons.target, label: "Mídia paga" },
  { icon: Icons.document, label: "Conteúdo" },
  { icon: Icons.search, label: "Google & SEO" },
  { icon: Icons.network, label: "Redes sociais" },
  { icon: Icons.whatsapp, label: "WhatsApp" },
  { icon: Icons.users, label: "Parcerias &\nInfluência" },
  { icon: Icons.arrowUpRight, label: "Prospecção" },
  { icon: Icons.refreshCw, label: "Base &\nRelacionamento" },
];

export default function ActionPhaseT() {
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
                03 / 06
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
                  letter="T"
                  title={"Tráfego e Tração"}
                  verb="MOVIMENTAMOS"
                />
              </Reveal>

              <Reveal delay={0.2}>
                <PhaseEditorialIntro 
                  headline={
                    <>Agora que a estrutura está pronta,<br/> é hora de colocar o negócio<br/> em movimento.</>
                  }
                  content="Na fase T colocamos energia no sistema. Utilizamos os canais mais adequados para levar pessoas qualificadas até a empresa e transformar atenção em movimento real para o negócio. O objetivo não é gerar tráfego por gerar, mas criar demanda, oportunidades e comportamento que possam produzir resultado."
                />
              </Reveal>
            </div>

            {/* Right Column: Editorial Media */}
            <div className="w-[38%] sm:w-[35%] py-8">
              <Reveal delay={0.3} className="h-full w-full">
                <ActionEditorialMedia 
                  src="/images/action-t-editorial.png"
                  alt="Tráfego e Tração Editorial"
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
              title="Como geramos movimento"
              items={phaseTAnalysisItems}
            />
          </Reveal>

          <Reveal delay={0.5}>
            <InsightCards 
              leftTitle="O que buscamos"
              leftItems={["Atenção qualificada", "Demanda", "Oportunidades", "Movimento real"]}
              rightTitle="Resultado desta fase"
              rightText="Pessoas entrando no sistema, oportunidades sendo geradas e comportamento real acontecendo."
            />
          </Reveal>

          <Reveal delay={0.6}>
            <NextPhaseNav 
              introText="Agora temos movimento. É hora de entender o que os dados estão dizendo."
              nextLetter="I"
              nextTitle="Inteligência de Dados"
              nextVerb="ENTENDEMOS"
              nextHref="/action/i"
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
