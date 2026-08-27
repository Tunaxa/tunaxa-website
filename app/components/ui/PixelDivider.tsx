import React from "react";

export default function PixelDivider({ className = "my-12" }: { className?: string }) {
  return (
    <div className={`w-full relative py-3 border-y border-[#d1d1d1] bg-[#f7f7f7] overflow-hidden ${className}`}>
      <div
        className="w-full h-3 opacity-60 bg-repeat-x bg-center"
        style={{
          backgroundImage: `url('https://framerusercontent.com/images/YQkeJnGRKgTO0lQ2V724YxSbrSg.png')`,
          backgroundSize: "contain",
        }}
      />
      <div className="absolute left-4 top-0 bottom-0 w-px bg-[#d1d1d1]" />
      <div className="absolute right-4 top-0 bottom-0 w-px bg-[#d1d1d1]" />
    </div>
  );
}
