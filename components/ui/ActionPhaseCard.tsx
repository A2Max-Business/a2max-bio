import * as React from "react";
import Link from "next/link";
import { ActionPhase } from "@/config/action";
import { Icons } from "@/components/ui/Icons";

interface ActionPhaseCardProps {
  phase: ActionPhase;
}

const getIconForPhase = (slug: string) => {
  switch (slug) {
    case "a": return <Icons.search className="w-6 h-6 text-laranja-energia" />;
    case "c": return <Icons.settings className="w-6 h-6 text-laranja-energia" />;
    case "t": return <Icons.trendingUp className="w-6 h-6 text-laranja-energia" />;
    case "i": return <Icons.barChart className="w-6 h-6 text-laranja-energia" />;
    case "o": return <Icons.refreshCw className="w-6 h-6 text-laranja-energia" />;
    case "n": return <Icons.arrowUpRight className="w-6 h-6 text-laranja-energia" />;
    default: return <Icons.document className="w-6 h-6 text-laranja-energia" />;
  }
};

export function ActionPhaseCard({ phase }: ActionPhaseCardProps) {
  return (
    <Link 
      href={phase.href}
      className="group relative flex gap-5 bg-white/[0.03] border border-white/10 rounded-2xl p-6 transition-all hover:bg-white/5 hover:border-white/20 hover:shadow-lg hover:shadow-black/20 overflow-hidden"
    >
      {/* Left Column: Letter + Icon */}
      <div className="flex flex-col items-center w-12 shrink-0 z-10">
        <span className="text-[42px] font-bold text-white/60 select-none leading-none mb-4 group-hover:text-white/80 transition-colors">
          {phase.letter}
        </span>
        <div className="bg-azul-noite border border-laranja-energia/30 p-2.5 rounded-full group-hover:border-laranja-energia/60 group-hover:bg-laranja-energia/10 transition-colors">
          {getIconForPhase(phase.slug)}
        </div>
      </div>
      
      {/* Right Column: Text Content */}
      <div className="flex-1 flex flex-col pt-1">
        <div className="flex justify-between items-start w-full mb-1">
          <div className="text-[11px] font-bold tracking-widest text-laranja-energia uppercase">
            {phase.verb}
          </div>
          <Icons.chevronRight className="w-5 h-5 text-white/30 group-hover:text-laranja-energia group-hover:translate-x-1 transition-all" />
        </div>
        
        <h3 className="text-[22px] font-semibold text-white mb-2 leading-tight group-hover:text-laranja-energia transition-colors">
          {phase.title}
        </h3>
        
        <p className="text-sm text-white/60 leading-relaxed pr-2">
          {phase.description}
        </p>
      </div>
    </Link>
  );
}
