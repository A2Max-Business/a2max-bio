"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Por padrão, o conteúdo é visível (Progressive Enhancement se o JS falhar)
  const [hasRevealed, setHasRevealed] = useState(true);
  const wasChecked = useRef(false);

  useEffect(() => {
    // Verifica se o usuário prefere reduzir o movimento. Se sim, não fazemos nada,
    // e o conteúdo permanece visível imediatamente e sem animação.
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Quando entra no viewport, revela (com o delay opcional para stagger)
          setTimeout(() => {
            setHasRevealed(true);
          }, delay);
          observer.disconnect();
        } else {
          // Se na PRIMEIRA checagem imediata ele NÃO estiver no viewport,
          // nós o escondemos para prepará-lo para a animação de scroll.
          // Como está fora do viewport, o usuário não verá o 'flash' de escondido.
          if (!wasChecked.current) {
            setHasRevealed(false);
          }
        }
        wasChecked.current = true;
      },
      {
        rootMargin: "0px 0px -40px 0px", // Aciona levemente antes de aparecer totalmente
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        hasRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className}`}
    >
      {children}
    </div>
  );
}
