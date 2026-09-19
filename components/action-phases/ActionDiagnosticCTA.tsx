import * as React from "react";
import { Icons } from "@/components/ui/Icons";

export function ActionDiagnosticCTA() {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center p-6 sm:p-8 text-center bg-azul-noite border border-white/10 rounded-[20px] relative overflow-hidden shadow-xl">
        {/* Subtle orange accent glow */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-laranja-energia/10 blur-[40px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-laranja-energia/5 blur-[40px] rounded-full pointer-events-none" />
        
        <div className="bg-white/5 p-2.5 rounded-full mb-3 border border-white/5 relative z-10">
          <Icons.barChart className="w-5 h-5 text-laranja-energia" />
        </div>
        
        <h2 className="text-[18px] sm:text-[20px] font-semibold text-white mb-2 relative z-10 leading-tight">
          Quero fazer um diagnóstico
        </h2>
        <p className="text-[13px] sm:text-[14px] text-white/70 mb-5 max-w-[280px] leading-relaxed relative z-10">
          Descubra onde o seu negócio pode evoluir.
        </p>
        
        {/* Keeping destination unlinked for now as requested, acting as a visual CTA */}
        <button 
          type="button"
          className="bg-laranja-energia hover:bg-laranja-energia/90 text-white font-semibold py-3 px-6 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,138,0,0.15)] hover:shadow-[0_0_30px_rgba(255,138,0,0.3)] relative z-10 text-[14px] tracking-wide w-full sm:w-auto"
        >
          Iniciar Diagnóstico
        </button>
      </div>
    </div>
  );
}
