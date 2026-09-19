import * as React from "react";

interface PhaseIdentityProps {
  letter: string;
  title: string;
  verb: string;
  iconSlug?: string;
  opticalAdjustClassName?: string;
}

export function PhaseIdentity({ letter, title, verb, opticalAdjustClassName = "" }: PhaseIdentityProps) {
  return (
    <div className="flex flex-row items-center gap-4 sm:gap-5 pt-4 pb-5 w-full z-10">
      {/* Huge Letter */}
      <div className={`flex-shrink-0 flex items-center justify-center ${letter === 'I' ? 'w-[60px] sm:w-[75px]' : ''}`}>
        <span className={`text-[76px] sm:text-[96px] font-black text-laranja-energia leading-none select-none tracking-tighter ${opticalAdjustClassName}`}>
          {letter}
        </span>
      </div>
      
      {/* Title and Verb */}
      <div className="flex flex-col flex-1">
        <h1 className="text-[19px] sm:text-[24px] font-bold text-azul-noite leading-[1.1] tracking-tight mb-0.5">
          {title}
        </h1>
        
        <div className="text-[10px] sm:text-[12px] font-bold tracking-widest text-laranja-energia uppercase mt-1">
          {verb}
        </div>
      </div>
    </div>
  );
}
