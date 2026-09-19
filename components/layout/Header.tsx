import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/components/ui/Icons";

interface HeaderProps {
  variant?: "default" | "back";
  backHref?: string;
  backLabel?: string;
}

export function Header({ variant = "default", backHref = "/", backLabel = "Voltar" }: HeaderProps) {
  return (
    <header className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 pt-10 pb-0">
      <Image
        src="/brand/a2max-logo-dark.png"
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
          className="text-white/80 hover:text-white transition-colors text-sm font-medium flex items-center gap-2"
        >
          <span aria-hidden="true">&larr;</span> {backLabel}
        </Link>
      )}
    </header>
  );
}
