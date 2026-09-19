import * as React from "react";
import { Icons } from "@/components/ui/Icons";
import { socialDestinations } from "@/config/destinations";

interface FooterProps {
  variant?: "default" | "light";
}

export function Footer({ variant = "default" }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const isLight = variant === "light";

  // Dynamic colors based on variant
  const iconBg = isLight ? "bg-white border border-gray-200 shadow-sm" : "bg-[#1A2235]";
  const iconColor = isLight ? "text-azul-noite/60 hover:text-laranja-energia" : "text-gray-400 hover:text-white";
  const iconColorDisabled = isLight ? "text-gray-300" : "text-gray-500";
  const brandColor = isLight ? "text-azul-noite" : "text-gray-300";
  const subtitleColor = isLight ? "text-azul-noite/50" : "text-gray-400";
  const copyrightColor = isLight ? "text-azul-noite/40" : "text-gray-500";

  // Helper to render social icon either as a link or a visual-only presentation element
  const renderSocialIcon = (id: keyof typeof socialDestinations, IconComp: React.FC<React.SVGProps<SVGSVGElement>>) => {
    const url = socialDestinations[id];
    
    if (url) {
      return (
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${iconBg} ${iconColor}`}
          aria-label={id}
        >
          <IconComp className="w-5 h-5" />
        </a>
      );
    }

    return (
      <span 
        role="presentation" 
        className={`w-10 h-10 rounded-full flex items-center justify-center cursor-default ${iconBg} ${iconColorDisabled}`}
        title={`${id} (em breve)`}
      >
        <IconComp className="w-5 h-5" />
      </span>
    );
  };

  return (
    <footer className="w-full flex flex-col items-center pb-12 pt-8 mt-4 px-6 text-center">
      <div className="flex items-center gap-4 mb-8">
        {renderSocialIcon("linkedin", Icons.linkedin)}
        {renderSocialIcon("instagram", Icons.instagram)}
        {renderSocialIcon("youtube", Icons.youtube)}
        {renderSocialIcon("spotify", Icons.spotify)}
      </div>

      <div className={`font-bold tracking-widest text-lg mb-2 ${brandColor}`}>
        A2MAX
      </div>
      <div className={`text-[10px] tracking-[0.2em] uppercase mb-8 ${subtitleColor}`}>
        Performance e Inteligência de Negócios
      </div>
      
      <div className={`text-xs ${copyrightColor}`}>
        &copy; {currentYear} A2Max. Todos os direitos reservados.
      </div>
    </footer>
  );
}
