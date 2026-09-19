import * as React from "react";
import { Icons } from "@/components/ui/Icons";
import { socialDestinations } from "@/config/destinations";

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Helper to render social icon either as a link or a visual-only presentation element
  const renderSocialIcon = (id: keyof typeof socialDestinations, IconComp: React.FC<React.SVGProps<SVGSVGElement>>) => {
    const url = socialDestinations[id];
    
    if (url) {
      return (
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-10 h-10 rounded-full bg-[#1A2235] flex items-center justify-center text-gray-400 hover:text-white transition-colors"
          aria-label={id}
        >
          <IconComp className="w-5 h-5" />
        </a>
      );
    }

    return (
      <span 
        role="presentation" 
        className="w-10 h-10 rounded-full bg-[#1A2235] flex items-center justify-center text-gray-500 cursor-default"
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

      <div className="text-gray-300 font-bold tracking-widest text-lg mb-2">
        A2MAX
      </div>
      <div className="text-[10px] tracking-[0.2em] text-gray-400 uppercase mb-8">
        Performance e Inteligência de Negócios
      </div>
      
      <div className="text-xs text-gray-500">
        &copy; {currentYear} A2Max. Todos os direitos reservados.
      </div>
    </footer>
  );
}
