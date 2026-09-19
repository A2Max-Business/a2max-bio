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
    <div className="w-full bg-white rounded-[20px] p-5 sm:p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#E5E2D9]">
      <h3 className="text-[15px] sm:text-[16px] font-bold text-azul-noite mb-4">
        O que analisamos
      </h3>
      
      {/* 2 columns on very small screens, 4 columns on larger mobile/desktop */}
      <div className="grid grid-cols-2 min-[400px]:grid-cols-4 gap-y-4 gap-x-2 sm:gap-4">
        {analysisItems.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-2">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F5F3EC] flex items-center justify-center text-azul-noite/70">
              <item.icon className="w-4 h-4 sm:w-[18px] sm:h-[18px] stroke-[1.5]" />
            </div>
            <span className="text-[10px] sm:text-[11px] font-medium text-azul-noite/80 leading-[1.1] whitespace-pre-line tracking-tight px-1">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
