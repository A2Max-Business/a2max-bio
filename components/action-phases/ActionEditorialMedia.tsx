import * as React from "react";
import Image from "next/image";

interface ActionEditorialMediaProps {
  src?: string;
  alt?: string;
  hideText?: boolean;
  objectPosition?: string;
}

export function ActionEditorialMedia({ 
  src = "/images/action-a-editorial.png", 
  alt = "Auditoria e Análise Editorial", 
  hideText = false,
  objectPosition = "center 30%"
}: ActionEditorialMediaProps) {
  return (
    <div className="relative w-full h-full min-h-[400px] sm:min-h-[500px] bg-[#111] rounded-l-3xl overflow-hidden shadow-2xl flex flex-col justify-start p-5 sm:p-6 border-l border-white/10 ml-auto">
      {/* Editorial Image */}
      {src && (
        <Image
          src={src}
          alt={alt}
          fill
          priority
          style={{ objectPosition }}
          className="object-cover"
          sizes="(max-width: 480px) 45vw, 300px"
        />
      )}

      {/* Persistent gradient just for the text area (top left usually cleaner in these photos) */}
      {!hideText && (
        <div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-[#0B1220]/80 via-[#0B1220]/30 to-transparent z-10" />
      )}

      {!hideText && (
        <div className="relative z-20 mt-2 sm:mt-4">
          <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.15em] text-white/90 leading-[1.6]">
            CLAREZA<br />
            ANTES<br />
            <span className="text-laranja-energia">DE QUALQUER</span><br />
            MOVIMENTO.
          </p>
        </div>
      )}
    </div>
  );
}
