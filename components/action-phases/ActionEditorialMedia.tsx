import * as React from "react";
import Image from "next/image";

interface ActionEditorialMediaProps {
  src?: string;
  alt?: string;
}

export function ActionEditorialMedia({ src, alt }: ActionEditorialMediaProps) {
  return (
    <div className="relative w-full h-full min-h-[400px] sm:min-h-[500px] bg-azul-noite rounded-l-3xl overflow-hidden shadow-2xl flex flex-col justify-end p-6 border-l border-white/10 ml-auto">
      {/* If an image is provided, we show it */}
      {src && (
        <Image
          src={src}
          alt={alt || "Imagem editorial da fase"}
          fill
          className="object-cover object-center opacity-80"
          sizes="(max-width: 480px) 40vw, 300px"
        />
      )}

      {/* If no image, we show the elegant placeholder */}
      {!src && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-azul-noite/80 via-azul-noite/40 to-laranja-energia/20 z-0" />
          <div className="absolute inset-0 bg-[url('/brand/a2max-logo-dark.png')] bg-repeat bg-[length:100px] opacity-[0.02] mix-blend-overlay z-0" />
        </>
      )}

      {/* Persistent gradient for text readability and elegance */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050811]/90 via-[#050811]/20 to-transparent z-10" />

      <div className="relative z-20 mt-auto">
        <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.15em] text-white/90 leading-[1.6]">
          CLAREZA<br />
          ANTES<br />
          <span className="text-laranja-energia">DE QUALQUER</span><br />
          MOVIMENTO.
        </p>
      </div>
    </div>
  );
}
