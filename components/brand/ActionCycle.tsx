import * as React from "react";
import { Icons } from "@/components/ui/Icons";

export function ActionCycle() {
  const letters = ["A", "C", "T", "I", "O", "N"];
  
  return (
    <div className="flex flex-col items-center justify-center py-10 px-4">
      {/* Sequence A -> C -> T -> I -> O -> N -> ... */}
      <div className="flex items-center justify-center gap-1 sm:gap-2 mb-6 w-full max-w-sm" aria-label="Ciclo A.C.T.I.O.N.">
        {letters.map((letter, i) => (
          <React.Fragment key={letter}>
            <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-laranja-energia text-white text-xs sm:text-sm font-semibold shrink-0">
              {letter}
            </div>
            {i < letters.length - 1 && (
              <Icons.chevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-white/40 shrink-0" />
            )}
          </React.Fragment>
        ))}
        {/* The continuation "..." after N */}
        <Icons.chevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-white/40 shrink-0 ml-1" />
        <span className="text-white/40 font-bold text-sm sm:text-base shrink-0 tracking-widest leading-none">
          ...
        </span>
      </div>

      <p className="text-center text-sm text-white/70 max-w-xs leading-relaxed">
        O ciclo continua porque o mercado muda. Os clientes mudam.
        Os dados mudam. E novas oportunidades sempre surgem.
      </p>
    </div>
  );
}
