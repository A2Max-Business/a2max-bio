import * as React from "react";
import { Icons } from "@/components/ui/Icons";

export function InsightCards() {
  return (
    <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-6">
      {/* Left Card: O que procuramos */}
      <div className="flex-1 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E5E2D9] flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-laranja-energia/10 flex items-center justify-center text-laranja-energia">
            {/* Caution/Search concept icon */}
            <Icons.search className="w-5 h-5" />
          </div>
          <h3 className="text-[16px] sm:text-[18px] font-bold text-azul-noite">
            O que procuramos
          </h3>
        </div>
        
        <ul className="space-y-3 flex-1">
          {["Números", "Desperdícios", "Riscos", "Oportunidades"].map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-azul-noite/40" />
              <span className="text-[14px] sm:text-[15px] font-medium text-azul-noite/80">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Card: Resultado desta fase */}
      <div className="flex-1 bg-[#FDFCF9] rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E5E2D9] flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-laranja-energia flex items-center justify-center text-white">
            <Icons.barChart className="w-5 h-5" />
          </div>
          <h3 className="text-[16px] sm:text-[18px] font-bold text-azul-noite">
            Resultado desta fase
          </h3>
        </div>
        
        <p className="text-[14px] sm:text-[15px] text-azul-noite/80 leading-relaxed font-medium">
          Um diagnóstico claro da situação atual e das prioridades da empresa, com recomendações objetivas para os próximos passos.
        </p>
      </div>
    </div>
  );
}
