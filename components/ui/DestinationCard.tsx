import * as React from "react";
import Link from "next/link";
import { Icons } from "@/components/ui/Icons";
import { Destination } from "@/config/destinations";

interface DestinationCardProps {
  destination: Destination;
}

export function DestinationCard({ destination }: DestinationCardProps) {
  const IconComponent = Icons[destination.id as keyof typeof Icons] || Icons.document;
  
  const content = (
    <div className={`flex items-center justify-between p-5 rounded-2xl border ${destination.isComingSoon ? 'border-[#1E2536] bg-[#0F1626]' : 'border-[#1E2536] bg-[#141B2D] hover:border-laranja-energia/50 hover:bg-[#1A2235] transition-all cursor-pointer'}`}>
      <div className="flex items-center gap-4">
        <div className={`flex-shrink-0 ${destination.isComingSoon ? 'text-gray-600' : 'text-laranja-energia'}`}>
          <IconComponent className="w-8 h-8" />
        </div>
        <div className="flex flex-col">
          <h3 className={`text-base font-semibold ${destination.isComingSoon ? 'text-gray-500' : 'text-white'}`}>
            {destination.label}
          </h3>
          <p className={`text-sm mt-1 leading-snug ${destination.isComingSoon ? 'text-gray-600' : 'text-gray-400'}`}>
            {destination.description}
          </p>
        </div>
      </div>
      
      <div className="flex-shrink-0 ml-4">
        {destination.isComingSoon ? (
          <span className="text-[10px] font-bold tracking-wider px-2 py-1 bg-[#1E2536] text-gray-400 rounded-full">
            EM BREVE
          </span>
        ) : (
          <Icons.chevronRight className="w-5 h-5 text-gray-500" />
        )}
      </div>
    </div>
  );

  // Se não estiver ativado ou não tiver link configurado, e não for "coming soon" renderizamos apenas a UI sem link (sem tags <a> para não ter link falso).
  // Se for "coming soon", também sem link.
  if (!destination.enabled || destination.isComingSoon || !destination.destination) {
    return (
      <div role="presentation" className="w-full">
        {content}
      </div>
    );
  }

  return (
    <Link href={destination.destination} className="block w-full outline-none focus-visible:ring-2 focus-visible:ring-laranja-energia rounded-2xl">
      {content}
    </Link>
  );
}
