import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/components/ui/Icons";

interface HeaderProps {
  variant?: "default" | "back" | "light";
  backHref?: string;
  backLabel?: string;
}

export function Header({ variant = "default", backHref = "/", backLabel = "Voltar" }: HeaderProps) {
  const isLight = variant === "light";
  
  // Decide the logo based on the variant
  const logoSrc = isLight ? "/brand/a2max-logo-light.png" : "/brand/a2max-logo-dark.png";
  
  return (
    <header className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 pt-10 pb-0">
      <Image
        src={logoSrc}
        alt="A2Max Performance e Inteligência de Negócios"
        width={96}
        height={28}
        priority
        className="w-[96px] h-auto object-contain"
      />
      
      {variant === "default" ? (
        <button 
          type="button" 
          className="text-white hover:text-laranja-energia transition-colors"
          aria-label="Abrir menu"
        >
          <Icons.hamburger className="w-[28px] h-[28px]" />
        </button>
      ) : (
        <Link 
          href={backHref}
          className={`${isLight ? "text-azul-noite/80 hover:text-laranja-energia" : "text-white/80 hover:text-white"} transition-colors text-sm font-medium flex items-center gap-2`}
        >
          <span aria-hidden="true">&larr;</span> {backLabel}
        </Link>
      )}
    </header>
  );
}
