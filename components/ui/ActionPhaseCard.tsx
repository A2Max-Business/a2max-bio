import * as React from "react";
import Link from "next/link";
import { ActionPhase } from "@/config/action";
import { Icons } from "@/components/ui/Icons";

interface ActionPhaseCardProps {
  phase: ActionPhase;
}

const getIconForPhase = (slug: string, className: string = "w-6 h-6 text-laranja-energia") => {
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

export function ActionPhaseCard({ phase }: ActionPhaseCardProps) {
  return (
    <Link 
      href={phase.href}
      className="group relative flex gap-6 bg-white/[0.03] border border-white/10 rounded-[20px] p-6 transition-all hover:bg-white/5 hover:border-white/20 hover:shadow-lg hover:shadow-black/20 overflow-hidden items-start"
    >
      {/* Background Icon Texture */}
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 opacity-[0.08] text-laranja-energia pointer-events-none group-hover:opacity-[0.12] transition-opacity duration-500">
        {getIconForPhase(phase.slug, "w-48 h-48 sm:w-56 sm:h-56")}
      </div>

      {/* Left Column: Letter Only */}
      <div className="flex flex-col items-center justify-start w-12 shrink-0 z-10 pt-1">
        <span className="text-[48px] sm:text-[56px] font-bold text-white/90 select-none leading-none">
          {phase.letter}
        </span>
      </div>
      
      {/* Right Column: Text Content */}
      <div className="flex-1 flex flex-col z-10 pr-6 relative">
        {/* Chevron absolutely positioned to the far right inside the card */}
        <Icons.chevronRight className="absolute right-0 top-1 w-5 h-5 text-white/30 group-hover:text-laranja-energia group-hover:translate-x-1 transition-all" />
        
        <h3 className="text-[20px] sm:text-[22px] font-bold text-white mb-1.5 leading-tight pr-4">
          {phase.title}
        </h3>
        
        <div className="text-[11px] sm:text-[12px] font-bold tracking-widest text-laranja-energia uppercase mb-3">
          {phase.verb}
        </div>
        
        <p className="text-[14px] sm:text-[15px] text-white/70 leading-relaxed max-w-[280px]">
          {phase.description}
        </p>
      </div>
    </Link>
  );
}
