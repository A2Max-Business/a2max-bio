import * as React from "react";

export function ConceptualBar() {
  return (
    <div className="w-full border-y border-[#1E2536]/60 bg-[#0B1220]/40 backdrop-blur-sm py-3.5 mb-2 mt-2 flex justify-center items-center overflow-hidden">
      <div className="flex items-center justify-center gap-[6px] sm:gap-[12px] text-[9.5px] sm:text-[10.5px] tracking-[0.12em] sm:tracking-[0.18em] text-gray-400 font-medium uppercase whitespace-nowrap px-4 w-full">
        <span>Estratégia</span>
        <span className="text-laranja-energia/60 text-[14px] leading-none mb-0.5">·</span>
        <span>Dados</span>
        <span className="text-laranja-energia/60 text-[14px] leading-none mb-0.5">·</span>
        <span>Execução</span>
        <span className="text-laranja-energia/60 text-[14px] leading-none mb-0.5">·</span>
        <span>Resultados</span>
      </div>
    </div>
  );
}
