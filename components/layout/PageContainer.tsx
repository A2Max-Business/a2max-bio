import * as React from "react";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function PageContainer({ children, className = "" }: PageContainerProps) {
  const hasBgClass = className.includes('bg-');
  const outerBg = hasBgClass ? '' : 'bg-azul-noite';
  const innerBg = hasBgClass ? className : `bg-azul-noite ${className}`;

  return (
    <div className={`min-h-screen w-full flex justify-center ${outerBg}`}>
      <div className={`w-full max-w-[480px] min-h-screen relative shadow-2xl ${innerBg}`}>
        {children}
      </div>
    </div>
  );
}
