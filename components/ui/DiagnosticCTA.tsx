import * as React from "react";
import { Icons } from "@/components/ui/Icons";

export function DiagnosticCTA() {
  return (
    <div className="px-6 mb-10 w-full">
      <div className="flex flex-col items-center justify-center p-8 sm:p-10 text-center bg-white/[0.02] border border-white/10 rounded-[24px] relative overflow-hidden shadow-2xl">
        {/* Subtle orange accent glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-laranja-energia/10 blur-[50px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-azul-noite/50 blur-[50px] rounded-full pointer-events-none" />
        
        <div className="bg-white/5 p-3 rounded-full mb-5 border border-white/5 relative z-10">
          <Icons.search className="w-6 h-6 text-laranja-energia" />
        </div>
        
        <h2 className="text-[22px] font-semibold text-white mb-3 relative z-10 leading-tight">
          Descubra onde o seu negócio <br className="hidden sm:block" /> pode evoluir.
        </h2>
        <p className="text-[15px] text-white/60 mb-8 max-w-[300px] leading-relaxed relative z-10">
          O primeiro passo para o crescimento é entender o seu cenário atual com precisão.
        </p>
        
        <button 
          type="button"
          className="bg-laranja-energia hover:bg-laranja-energia/90 text-white font-semibold py-3.5 px-8 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,138,0,0.15)] hover:shadow-[0_0_30px_rgba(255,138,0,0.3)] relative z-10 text-[15px] tracking-wide"
        >
          Quero fazer um diagnóstico
        </button>
      </div>
    </div>
  );
}
