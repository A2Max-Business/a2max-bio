import * as React from "react";
import { Icons } from "@/components/ui/Icons";

interface InsightCardsProps {
  leftTitle?: string;
  leftItems?: string[];
  rightTitle?: string;
  rightText?: string;
}

const defaultLeftItems = ["Números", "Desperdícios", "Riscos", "Oportunidades"];

export function InsightCards({ 
  leftTitle = "O que procuramos", 
  leftItems = defaultLeftItems,
  rightTitle = "Resultado desta fase",
  rightText = "Um diagnóstico claro da situação atual e das prioridades da empresa, com recomendações objetivas para os próximos passos."
}: InsightCardsProps) {
  return (
    <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-5">
      {/* Left Card: O que procuramos / organizamos */}
      <div className="flex-1 bg-white rounded-[20px] p-5 sm:p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#E5E2D9] flex flex-col">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 rounded-full bg-laranja-energia/10 flex items-center justify-center text-laranja-energia">
            {/* Caution/Search concept icon */}
            <Icons.search className="w-4 h-4" />
          </div>
          <h3 className="text-[15px] sm:text-[16px] font-bold text-azul-noite">
            {leftTitle}
          </h3>
        </div>
        
        <ul className="space-y-2.5 flex-1">
          {leftItems.map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-azul-noite/40" />
              <span className="text-[13px] sm:text-[14px] font-medium text-azul-noite/80">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Card: Resultado desta fase */}
      <div className="flex-1 bg-[#FDFCF9] rounded-[20px] p-5 sm:p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#E5E2D9] flex flex-col">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 rounded-full bg-laranja-energia flex items-center justify-center text-white">
            <Icons.barChart className="w-4 h-4" />
          </div>
          <h3 className="text-[15px] sm:text-[16px] font-bold text-azul-noite">
            {rightTitle}
          </h3>
        </div>
        
        <p className="text-[13px] sm:text-[14px] text-azul-noite/80 leading-relaxed font-medium">
          {rightText}
        </p>
      </div>
    </div>
  );
}
