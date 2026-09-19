import * as React from "react";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function PageContainer({ children, className = "" }: PageContainerProps) {
  return (
    <div className="min-h-screen bg-azul-noite w-full flex justify-center">
      <div className={`w-full max-w-[480px] bg-azul-noite min-h-screen relative shadow-2xl ${className}`}>
        {children}
      </div>
    </div>
  );
}
