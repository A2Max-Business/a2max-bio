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
  title: "Construção da Estrutura | Método A.C.T.I.O.N. | A2Max",
  description: "Conheça a fase de Construção da Estrutura do Método A.C.T.I.O.N. da A2Max.",
};

const phaseCAnalysisItems: AnalysisItem[] = [
  { icon: Icons.settings, label: "Processos" },
  { icon: Icons.filter, label: "CRM & Funil" },
  { icon: Icons.messageCircle, label: "Atendimento" },
  { icon: Icons.refreshCw, label: "Automação & IA" },
  { icon: Icons.network, label: "Integrações" },
  { icon: Icons.database, label: "Dados & Tracking" },
  { icon: Icons.target, label: "Marketing &\nMensuração" },
  { icon: Icons.users, label: "Pessoas &\nResponsabilidades" },
];

export default function ActionPhaseC() {
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
                02 / 06
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
                  letter="C"
                  title={"Construção\nda Estrutura"}
                  verb="ESTRUTURAMOS"
                />
              </Reveal>

              <Reveal delay={0.2}>
                <PhaseEditorialIntro 
                  headline={
                    <>Depois de descobrir o problema,<br/> precisamos preparar a empresa<br/> para resolvê-lo.</>
                  }
                  content="A fase C transforma diagnóstico em estrutura. Organizamos aquilo que precisa existir para que marketing, vendas, atendimento, processos, tecnologia e dados funcionem de maneira integrada. Não existe uma estrutura igual para todas as empresas: é o diagnóstico que determina o que precisa ser corrigido, organizado ou construído."
                />
              </Reveal>
            </div>

            {/* Right Column: Editorial Media */}
            <div className="w-[38%] sm:w-[35%] py-8">
              <Reveal delay={0.3} className="h-full w-full">
                <ActionEditorialMedia 
                  src="/images/action-c-editorial.png"
                  alt="Construção da Estrutura Editorial"
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
              title="O que podemos estruturar"
              items={phaseCAnalysisItems}
            />
          </Reveal>

          <Reveal delay={0.5}>
            <InsightCards 
              leftTitle="O que organizamos"
              leftItems={["Caminho do cliente", "Processos", "Responsabilidades", "Informação"]}
              rightTitle="Resultado desta fase"
              rightText="Uma operação preparada para receber movimento e produzir informações confiáveis."
            />
          </Reveal>

          <Reveal delay={0.6}>
            <NextPhaseNav 
              introText="Com a casa organizada, é hora de colocar o negócio em movimento."
              nextLetter="T"
              nextTitle="Tráfego e Tração"
              nextVerb="MOVIMENTAMOS"
              nextHref="/action/t"
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
