import * as React from "react";
import { Icons } from "@/components/ui/Icons";

interface AnalysisItem {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
}

const analysisItems: AnalysisItem[] = [
  { icon: Icons.barChart, label: "Números\ne resultados" },
  { icon: Icons.users, label: "Pessoas\ne equipe" },
  { icon: Icons.settings, label: "Processos\ne operação" },
  { icon: Icons.database, label: "Tecnologia\ne sistemas" },
  { icon: Icons.target, label: "Marketing\ne aquisição" },
  { icon: Icons.filter, label: "Vendas\ne conversão" },
  { icon: Icons.messageCircle, label: "Atendimento\ne experiência" },
  { icon: Icons.refreshCw, label: "Retenção\ne recompra" },
];

export function AnalysisGrid() {
  return (
    <div className="w-full bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E5E2D9]">
      <h3 className="text-[16px] sm:text-[18px] font-bold text-azul-noite mb-6">
        O que analisamos
      </h3>
      
      {/* 2 columns on very small screens, 4 columns on larger mobile/desktop */}
      <div className="grid grid-cols-2 xs:grid-cols-4 gap-4 sm:gap-6">
        {analysisItems.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#F5F3EC] flex items-center justify-center text-azul-noite/70">
              <item.icon className="w-5 h-5 stroke-[1.5]" />
            </div>
            <span className="text-[11px] sm:text-[12px] font-medium text-azul-noite/80 leading-tight whitespace-pre-line">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
