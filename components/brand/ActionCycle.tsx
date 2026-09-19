import * as React from "react";
import { Icons } from "@/components/ui/Icons";

export function ActionCycle() {
  const letters = ["A", "C", "T", "I", "O", "N"];
  
  return (
    <div className="flex flex-col items-center justify-center pt-12 pb-12 px-4">
      {/* Sequence A -> C -> T -> I -> O -> N -> ... */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-3 mb-8 w-full max-w-md" aria-label="Ciclo A.C.T.I.O.N.">
        {letters.map((letter, i) => (
          <React.Fragment key={letter}>
            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-laranja-energia/80 bg-laranja-energia/5 text-white text-sm sm:text-base font-bold shrink-0 shadow-sm shadow-laranja-energia/10">
              {letter}
            </div>
            {i < letters.length - 1 && (
              <Icons.chevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/40 shrink-0" />
            )}
          </React.Fragment>
        ))}
        {/* The continuation "..." after N */}
        <Icons.chevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/40 shrink-0 ml-1" />
        <span className="text-white/40 font-bold text-lg sm:text-xl shrink-0 tracking-widest leading-none translate-y-[-2px]">
          ...
        </span>
      </div>

      <p className="text-center text-[15px] text-white/80 max-w-sm leading-relaxed font-medium">
        O ciclo continua porque o mercado muda. Os clientes mudam.
        Os dados mudam. E novas oportunidades sempre surgem.
      </p>
    </div>
  );
}
