import React from "react";

// Corner Cross Decorator Component matching our-products
export function CornerBrackets({ className = "text-black" }: { className?: string }) {
  return (
    <>
      {/* Top Left */}
      <div className={`absolute top-0 left-0 w-3 h-3 pointer-events-none z-10 ${className}`}>
        <div className="absolute top-0 left-0 w-3 h-[1.5px] bg-current" />
        <div className="absolute top-0 left-0 w-[1.5px] h-3 bg-current" />
      </div>
      {/* Top Right */}
      <div className={`absolute top-0 right-0 w-3 h-3 pointer-events-none z-10 ${className}`}>
        <div className="absolute top-0 right-0 w-3 h-[1.5px] bg-current" />
        <div className="absolute top-0 right-0 w-[1.5px] h-3 bg-current" />
      </div>
      {/* Bottom Right */}
      <div className={`absolute bottom-0 right-0 w-3 h-3 pointer-events-none z-10 ${className}`}>
        <div className="absolute bottom-0 right-0 w-3 h-[1.5px] bg-current" />
        <div className="absolute bottom-0 right-0 w-[1.5px] h-3 bg-current" />
      </div>
      {/* Bottom Left */}
      <div className={`absolute bottom-0 left-0 w-3 h-3 pointer-events-none z-10 ${className}`}>
        <div className="absolute bottom-0 left-0 w-3 h-[1.5px] bg-current" />
        <div className="absolute bottom-0 left-0 w-[1.5px] h-3 bg-current" />
      </div>
    </>
  );
}

export default function Card({
  children,
  className = "",
  showCorners = true,
}: {
  children: React.ReactNode;
  className?: string;
  showCorners?: boolean;
}) {
  return (
    <div
      className={`relative border border-[#d1d1d1] bg-[#f7f7f7] p-6 md:p-8 transition-all duration-300 hover:shadow-lg ${className}`}
    >
      {showCorners && <CornerBrackets />}
      {children}
    </div>
  );
}
