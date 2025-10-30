import React from "react";
import "../index.css";

export default function ConveyorBanner() {
  return (
    <div className="relative overflow-hidden w-full bg-white text-gray-900 ">
      <div className="flex whitespace-nowrap animate-scroll">
        {Array(10).fill(" Pearl Studio •").map((text, i) => (
          <span
            key={i}
            className="text-2xl md:text-4xl font-semibold  mx-2 opacity-80 tracking-wide"
          >
            {text}
            {/* <span className="text-xl md:text-2xl ms-4 ">
              <i className="fa-light fa-tooth text-xl md:text-2xl ms-4"></i>
            </span> */}
          </span>
        ))}
      </div>
    </div>
  );
}
