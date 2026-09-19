import * as React from "react";
import Link from "next/link";
import { Icons } from "@/components/ui/Icons";

interface NextPhaseNavProps {
  introText: string;
  nextLetter: string;
  nextTitle: string;
  nextVerb: string;
  nextHref: string;
}

export function NextPhaseNav({
  introText,
  nextLetter,
  nextTitle,
  nextVerb,
  nextHref
}: NextPhaseNavProps) {
  return (
    <div className="w-full mt-12">
      <Link 
        href={nextHref}
        className="group flex flex-col sm:flex-row sm:items-center sm:justify-between w-full bg-[#FDFCF9] rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E5E2D9] transition-all hover:shadow-md hover:border-laranja-energia/30 focus:outline-none focus:ring-2 focus:ring-laranja-energia focus:ring-offset-4 focus:ring-offset-[#F5F3EC]"
      >
        <div className="flex items-center gap-4 sm:gap-6 mb-4 sm:mb-0">
          <p className="text-[13px] sm:text-[14px] font-medium text-azul-noite/70 max-w-[200px]">
            {introText}
          </p>
          <div className="hidden sm:flex text-laranja-energia/50 group-hover:text-laranja-energia transition-colors group-hover:translate-x-1">
            <Icons.chevronRight className="w-6 h-6" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[32px] sm:text-[40px] font-black text-azul-noite group-hover:text-laranja-energia transition-colors leading-none">
            {nextLetter}
          </span>
          <div className="flex flex-col">
            <span className="text-[13px] sm:text-[14px] font-bold text-azul-noite/90 leading-tight">
              {nextTitle}
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-laranja-energia uppercase mt-0.5">
              {nextVerb}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
