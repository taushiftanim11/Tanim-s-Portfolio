"use client";

import { useEffect, useRef } from "react";
import { mouse, startMouseTracking } from "@/lib/smooth-mouse";
import { useTheme } from "next-themes";

const R = 36;

export default function CursorCircle() {
  const dotRef    = useRef<HTMLDivElement>(null);
  const circleRef = useRef<SVGCircleElement | null>(null);
  const rafRef    = useRef<number | undefined>(undefined);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (circleRef.current) {
      circleRef.current.setAttribute(
        "stroke",
        resolvedTheme === "light" ? "rgba(0,0,0,0.35)" : "rgba(255,255,255,0.55)"
      );
    }
  }, [resolvedTheme]);

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
            <circle
              ref={circleRef}
              r={R}
              fill="none"
              stroke="rgba(255,255,255,0.55)"
              strokeWidth="1.2"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
