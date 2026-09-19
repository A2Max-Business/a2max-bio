import * as React from "react";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="relative w-full h-[55vh] min-h-[480px] max-h-[600px] flex flex-col justify-end overflow-hidden pb-8 animate-hero-bg">
      {/* Background Image with Object Fit */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/index-hero.png"
          alt="Visão de crescimento e evolução empresarial"
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 480px) 100vw, 480px"
        />
        {/* Gradient Overlay to blend into background and ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-azul-noite/30 via-azul-noite/50 to-azul-noite" />
        <div className="absolute inset-0 bg-gradient-to-t from-azul-noite via-transparent to-transparent opacity-90" />
      </div>

      {/* Content over Hero */}
      <div className="relative z-10 px-6 mt-auto">
        <div className="flex justify-end mb-6 animate-hero-microcopy">
          <div className="text-right flex flex-col items-end">
            <span className="text-[10px] tracking-[0.15em] text-gray-300 font-medium mb-1">ESTRATÉGIA</span>
            <span className="text-[10px] tracking-[0.15em] text-gray-300 font-medium mb-1">DADOS</span>
            <span className="text-[10px] tracking-[0.15em] text-gray-300 font-medium mb-1">EXECUÇÃO</span>
            <span className="text-[10px] tracking-[0.15em] text-gray-300 font-medium">RESULTADOS</span>
          </div>
        </div>

        <h1 className="text-[32px] sm:text-[34px] leading-[1.15] font-semibold text-white mb-4 pr-2 animate-hero-h1">
          Negócios <br />
          mais preparados <br />
          para o <span className="text-laranja-energia">próximo nível.</span>
        </h1>

        <p className="text-sm leading-relaxed text-gray-300 font-light pr-6 animate-hero-sub">
          Diagnóstico. Estrutura. Tração. Inteligência.<br />
          Otimização. Novo ciclo.
        </p>
      </div>
    </div>
  );
}
