import * as React from "react";

interface PhaseEditorialIntroProps {
  headline: React.ReactNode;
  content: string;
}

export function PhaseEditorialIntro({ headline, content }: PhaseEditorialIntroProps) {
  return (
    <div className="flex flex-col gap-4 w-full max-w-[280px] sm:max-w-sm pb-8 z-10">
      <h2 className="text-[17px] sm:text-[20px] font-bold text-azul-noite leading-[1.25] tracking-tight pr-2">
        {headline}
      </h2>
      
      <p className="text-[13px] sm:text-[14px] text-azul-noite/80 leading-relaxed font-medium pr-2">
        {content}
      </p>
    </div>
  );
}
