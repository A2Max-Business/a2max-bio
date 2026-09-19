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
import { ActionDiagnosticCTA } from "@/components/action-phases/ActionDiagnosticCTA";
import { Icons } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Novo Ciclo / Next Step | Método A.C.T.I.O.N. | A2Max",
  description: "Conheça a fase de Novo Ciclo / Next Step do Método A.C.T.I.O.N. da A2Max.",
};

const phaseNAnalysisItems: AnalysisItem[] = [
  { icon: Icons.barChart, label: "Resultados\nalcançados" },
  { icon: Icons.document, label: "Aprendizados" },
  { icon: Icons.database, label: "Novos dados" },
  { icon: Icons.refreshCw, label: "Mudanças\nno cenário" },
  { icon: Icons.target, label: "Prioridades" },
  { icon: Icons.search, label: "Oportunidades" },
  { icon: Icons.arrowUpRight, label: "Novos\nobjetivos" },
  { icon: Icons.arrowRight, label: "Próximo\nmovimento" },
];

export default function ActionPhaseN() {
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
                06 / 06
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
                  letter="N"
                  title={"Novo Ciclo /\nNext Step"}
                  verb="AVANÇAMOS"
                />
              </Reveal>

              <Reveal delay={0.2}>
                <PhaseEditorialIntro 
                  headline={
                    <>Chegar até aqui<br/> não significa terminar.<br/> Significa estar preparado<br/> para o próximo nível.</>
                  }
                  content="Na fase N consolidamos o que aprendemos ao longo do ciclo e definimos qual deve ser o próximo movimento do negócio. Os resultados alcançados, os novos dados e as mudanças no cenário criam novas perguntas, prioridades e oportunidades. O objetivo não é simplesmente repetir o processo, mas avançar para um novo nível com mais clareza, estrutura e inteligência."
                />
              </Reveal>
            </div>

            {/* Right Column: Editorial Media */}
            <div className="w-[38%] sm:w-[35%] py-8">
              <Reveal delay={0.3} className="h-full w-full">
                <ActionEditorialMedia 
                  src="/images/action-n-editorial.png"
                  alt="Novo Ciclo Editorial"
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
              title="O que define o próximo nível"
              items={phaseNAnalysisItems}
            />
          </Reveal>

          <Reveal delay={0.5}>
            <InsightCards 
              leftTitle="O que decidimos"
              leftItems={["Onde estamos", "O que aprendemos", "Onde queremos chegar", "Qual é o próximo movimento"]}
              rightTitle="Resultado desta fase"
              rightText="Um novo direcionamento, com prioridades claras e um próximo nível a ser construído."
            />
          </Reveal>

          {/* Fechamento da Jornada A.C.T.I.O.N. */}
          <Reveal delay={0.6}>
            <div className="w-full bg-white rounded-[24px] p-8 sm:p-10 shadow-[0px_4px_24px_rgba(0,0,0,0.02)] border border-[#E5E2D9] flex flex-col items-center justify-center text-center mt-2">
              <p className="text-[14px] sm:text-[15px] text-azul-noite font-medium mb-6 leading-relaxed">
                Chegamos a um novo ponto.<br/>
                Agora definimos o próximo movimento.
              </p>
              
              <div className="flex flex-row items-center justify-center gap-1.5 sm:gap-2.5 flex-wrap">
                {['A', 'C', 'T', 'I', 'O', 'N'].map((letter, i) => (
                  <React.Fragment key={letter}>
                    <span className="text-[20px] sm:text-[24px] font-black text-azul-noite">{letter}</span>
                    <span className="text-laranja-energia text-[16px] sm:text-[18px]">→</span>
                  </React.Fragment>
                ))}
                <span className="text-[24px] sm:text-[28px] font-black text-laranja-energia tracking-widest ml-1">…</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.7} className="mt-2">
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
