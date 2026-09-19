import * as React from "react";
import Image from "next/image";
import { Icons } from "@/components/ui/Icons";

export function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 pt-12 pb-4">
      <Image
        src="/brand/a2max-logo-dark.png"
        alt="A2Max Performance e Inteligência de Negócios"
        width={140}
        height={40}
        priority
        className="w-[120px] h-auto object-contain"
      />
      
      {/* Hamburger icon is visual only as requested */}
      <button 
        type="button" 
        className="text-white hover:text-laranja-energia transition-colors"
        aria-label="Abrir menu"
      >
        <Icons.hamburger className="w-8 h-8" />
      </button>
    </header>
  );
}
