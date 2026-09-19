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
    <div className="flex flex-row items-start gap-3 sm:gap-4 pt-4 pb-6 w-full z-10">
      {/* Huge Letter */}
      <div className="flex-shrink-0 mt-1">
        <span className="text-[72px] sm:text-[90px] font-black text-laranja-energia leading-none select-none">
          {letter}
        </span>
      </div>
      
      {/* Title, Verb and Icon */}
      <div className="flex flex-col flex-1 pt-2">
        <div className="mb-2">
          {getIconForPhase(iconSlug, "w-8 h-8 sm:w-10 sm:h-10 text-laranja-energia/90")}
        </div>
        
        <h1 className="text-[20px] sm:text-[26px] font-bold text-azul-noite leading-tight tracking-tight mb-1">
          {title}
        </h1>
        
        <div className="text-[11px] sm:text-[13px] font-bold tracking-widest text-laranja-energia uppercase">
          {verb}
        </div>
      </div>
    </div>
  );
}
