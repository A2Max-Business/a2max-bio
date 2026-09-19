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
      className="group relative flex flex-col gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 transition-all hover:bg-white/10 overflow-hidden"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          {/* Big Letter background accent or just big text */}
          <span className="text-4xl font-bold text-white/20 select-none">
            {phase.letter}
          </span>
          <div className="bg-laranja-energia/10 p-3 rounded-full">
            {getIconForPhase(phase.slug)}
          </div>
        </div>
        <Icons.chevronRight className="w-5 h-5 text-white/40 group-hover:text-laranja-energia transition-colors mt-2" />
      </div>
      
      <div>
        <div className="text-xs font-semibold tracking-wider text-laranja-energia mb-1">
          {phase.verb}
        </div>
        <h3 className="text-xl font-medium text-white mb-2">
          {phase.title}
        </h3>
        <p className="text-sm text-white/70 leading-relaxed">
          {phase.description}
        </p>
      </div>
    </Link>
  );
}
