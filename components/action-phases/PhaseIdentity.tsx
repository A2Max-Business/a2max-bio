import * as React from "react";
import { Icons } from "@/components/ui/Icons";

interface PhaseIdentityProps {
  letter: string;
  title: string;
  verb: string;
  iconSlug: string;
}

const getIconForPhase = (slug: string, className: string = "w-8 h-8 text-laranja-energia") => {
  switch (slug) {
    case "a": return <Icons.search className={className} />;
    case "c": return <Icons.settings className={className} />;
    case "t": return <Icons.trendingUp className={className} />;
    case "i": return <Icons.barChart className={className} />;
    case "o": return <Icons.refreshCw className={className} />;
    case "n": return <Icons.arrowUpRight className={className} />;
    default: return <Icons.document className={className} />;
  }
};

export function PhaseIdentity({ letter, title, verb, iconSlug }: PhaseIdentityProps) {
  return (
    <div className="flex flex-row items-start gap-4 sm:gap-5 pt-4 pb-5 w-full z-10">
      {/* Huge Letter */}
      <div className="flex-shrink-0 mt-0 sm:mt-1">
        <span className="text-[64px] sm:text-[80px] font-black text-laranja-energia leading-none select-none tracking-tighter">
          {letter}
        </span>
      </div>
      
      {/* Title, Verb and Icon */}
      <div className="flex flex-col flex-1 pt-1.5 sm:pt-2">
        <div className="mb-1.5 sm:mb-2 opacity-60">
          {getIconForPhase(iconSlug, "w-5 h-5 sm:w-6 sm:h-6 text-laranja-energia")}
        </div>
        
        <h1 className="text-[19px] sm:text-[24px] font-bold text-azul-noite leading-[1.1] tracking-tight mb-1">
          {title}
        </h1>
        
        <div className="text-[10px] sm:text-[12px] font-bold tracking-widest text-laranja-energia uppercase mt-0.5">
          {verb}
        </div>
      </div>
    </div>
  );
}
