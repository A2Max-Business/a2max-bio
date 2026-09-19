import * as React from "react";

export function InstitutionalCard() {
  return (
    <div className="mx-6 mb-8 mt-12 rounded-2xl border border-[#1E2536] bg-gradient-to-br from-[#0D1526] to-[#0A101C] overflow-hidden relative">
      <div className="p-8 relative z-10">
        <p className="text-lg text-white font-medium mb-1">
          Inteligência move decisões.
        </p>
        <p className="text-lg text-white font-medium flex items-center">
          Performance entrega resultados<span className="text-laranja-energia font-bold ml-1">.</span>
        </p>
      </div>

      {/* Decorative Wave SVG avoiding image cuts as instructed */}
      <svg
        className="absolute bottom-0 right-0 w-[80%] h-auto opacity-30 text-laranja-energia"
        viewBox="0 0 300 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,100 C100,20 200,-20 300,50"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M0,100 C150,50 200,10 300,70"
          stroke="currentColor"
          strokeWidth="0.5"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M50,100 C180,60 250,30 300,80"
          stroke="currentColor"
          strokeWidth="0.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
