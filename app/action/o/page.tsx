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
  title: "Otimização Contínua | Método A.C.T.I.O.N. | A2Max",
  description: "Conheça a fase de Otimização Contínua do Método A.C.T.I.O.N. da A2Max.",
};

const phaseOAnalysisItems: AnalysisItem[] = [
  { icon: Icons.target, label: "Conversão" },
  { icon: Icons.messageCircle, label: "Atendimento" },
  { icon: Icons.settings, label: "Processos" },
  { icon: Icons.barChart, label: "Investimentos" },
  { icon: Icons.network, label: "Automação" },
  { icon: Icons.refreshCw, label: "Retenção" },
  { icon: Icons.trendingUp, label: "Produtividade" },
  { icon: Icons.users, label: "Experiência" },
];

export default function ActionPhaseO() {
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
                05 / 06
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
                  letter="O"
                  title={"Otimização\nContínua"}
                  verb="MELHORAMOS"
                />
              </Reveal>

              <Reveal delay={0.2}>
                <PhaseEditorialIntro 
                  headline={
                    <>Entender o que acontece<br/> não basta.<br/> Agora precisamos melhorar<br/> o que realmente importa.</>
                  }
                  content="Na fase O usamos aquilo que aprendemos para melhorar a operação. Identificamos o que está funcionando, corrigimos aquilo que limita o resultado e direcionamos recursos para onde existe maior potencial. Otimizar não é mudar por mudar: é testar, medir, aprender e tomar decisões melhores continuamente."
                />
              </Reveal>
            </div>

            {/* Right Column: Editorial Media */}
            <div className="w-[38%] sm:w-[35%] py-8">
              <Reveal delay={0.3} className="h-full w-full">
                <ActionEditorialMedia 
                  src="/images/action-o-editorial.png"
                  alt="Otimização Contínua Editorial"
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
              title="Onde podemos melhorar"
              items={phaseOAnalysisItems}
            />
          </Reveal>

          <Reveal delay={0.5}>
            <InsightCards 
              leftTitle="O que priorizamos"
              leftItems={["Impacto", "Esforço", "Urgência", "Evidências"]}
              rightTitle="Resultado desta fase"
              rightText="Mais eficiência, menos desperdício e melhor utilização dos recursos disponíveis."
            />
          </Reveal>

          <Reveal delay={0.6}>
            <NextPhaseNav 
              introText="Melhoramos o sistema. Agora precisamos decidir qual é o próximo nível."
              nextLetter="N"
              nextTitle="Novo Ciclo / Next Step"
              nextVerb="AVANÇAMOS"
              nextHref="/action/n"
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
