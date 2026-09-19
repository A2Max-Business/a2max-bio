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

export function NextPhaseNav({ introText, nextLetter, nextTitle, nextVerb, nextHref }: NextPhaseNavProps) {
  return (
    <Link 
      href={nextHref}
      className="group w-full bg-white rounded-[20px] p-5 sm:p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#E5E2D9] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 transition-colors hover:border-azul-noite/20"
    >
      <div className="text-[13px] sm:text-[14px] text-azul-noite/70 font-medium leading-relaxed max-w-[200px]">
        {introText}
      </div>

      <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto mt-2 sm:mt-0 pt-4 sm:pt-0 border-t border-dashed border-[#E5E2D9] sm:border-none justify-between sm:justify-start">
        <div className="hidden sm:block">
          <Icons.arrowRight className="w-5 h-5 text-laranja-energia transition-transform group-hover:translate-x-1" />
        </div>
        
        <div className="flex items-center gap-3">
          <span className="text-[32px] sm:text-[40px] font-black text-azul-noite leading-none">
            {nextLetter}
          </span>
          <div className="flex flex-col justify-center">
            <span className="text-[13px] sm:text-[14px] font-bold text-azul-noite leading-tight mb-0.5">
              {nextTitle}
            </span>
            <span className="text-[9px] sm:text-[10px] font-bold text-laranja-energia uppercase tracking-widest">
              {nextVerb}
            </span>
          </div>
        </div>

        <div className="ml-auto sm:hidden">
          <Icons.arrowRight className="w-5 h-5 text-laranja-energia transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
