import * as React from "react";

export function DiagnosticCTA() {
  return (
    <div className="flex flex-col items-center justify-center py-8 px-6 text-center bg-white/5 border-y border-white/10 mt-8 mb-12">
      <h2 className="text-xl font-medium text-white mb-2">
        Descubra onde o seu negócio pode evoluir.
      </h2>
      <p className="text-sm text-white/70 mb-6 max-w-sm">
        O primeiro passo para o crescimento é entender o seu cenário atual com precisão.
      </p>
      
      {/* 
        Destination not yet defined.
        Using a button without functional navigation as requested:
        "O CTA deve continuar SEM URL inventada... preservar o CTA visualmente, mas não criar navegação falsa. Não usar href='#'."
      */}
      <button 
        type="button"
        className="bg-laranja-energia text-white font-medium py-3 px-8 rounded-full transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-laranja-energia/20"
      >
        Quero fazer um diagnóstico
      </button>
    </div>
  );
}
