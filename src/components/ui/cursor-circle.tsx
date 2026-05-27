"use client";

import { useEffect, useRef } from "react";
import { mouse, startMouseTracking } from "@/lib/smooth-mouse";

const R = 36;

export default function CursorCircle() {
  const dotRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    startMouseTracking();

    const loop = () => {
      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${mouse.smooth.x - R - 10}px, ${mouse.smooth.y - R - 10}px)`;
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafRef.current !== undefined) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div ref={dotRef} className="absolute top-0 left-0">
        <svg width={R * 2 + 20} height={R * 2 + 20} style={{ overflow: "visible" }}>
          <g transform={`translate(${R + 10}, ${R + 10})`}>
            <circle r={R} fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" />
          </g>
        </svg>
      </div>
    </div>
  );
}
