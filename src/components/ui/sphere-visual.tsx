"use client";

import { useEffect, useRef } from "react";
import { mouse, startMouseTracking } from "@/lib/smooth-mouse";

const DENSITY = 10;
const PARALLAX = 28;

const rings = Array.from({ length: DENSITY }, (_, i) => {
  const step = 90 / (DENSITY / 2);
  const angle = i * step;
  return (
    <div
      key={i}
      className="wireframe-line"
      aria-hidden="true"
      style={{ transform: i % 2 === 0 ? `rotateY(${angle}deg)` : `rotateX(${angle}deg)` }}
    />
  );
});

export default function SphereVisual() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const rafRef  = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    startMouseTracking();

    const loop = () => {
      if (wrapRef.current) {
        const x = mouse.smooth.x / window.innerWidth  * 2 - 1;
        const y = mouse.smooth.y / window.innerHeight * 2 - 1;
        wrapRef.current.style.transform =
          `translate3d(${x * PARALLAX}px, ${y * PARALLAX}px, 0)`;
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  return (
    <div className="relative flex items-center justify-center w-[420px] h-[420px]">
      {/* ambient glow */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(129,140,248,0.18) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* core light */}
      <div
        className="core-light absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: "180px",
          height: "180px",
          background: "radial-gradient(circle, rgba(99,102,241,0.5) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* sphere rings with parallax wrapper */}
      <div ref={wrapRef} className="absolute inset-0 flex items-center justify-center">
        <div className="sphere-container w-full h-full">
          <div className="sphere-rotation w-full h-full relative">
            {rings}
          </div>
        </div>
      </div>
    </div>
  );
}
