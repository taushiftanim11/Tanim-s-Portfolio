"use client";

import React, { useRef, useEffect } from "react";
import { mouse, startMouseTracking } from "@/lib/smooth-mouse";
import { useTheme } from "next-themes";

const DotGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef    = useRef<number | undefined>(undefined);
  const dotColorRef   = useRef("71, 85, 105");
  const dotOpacityRef = useRef(1.0);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const isLight = resolvedTheme === "light";
    dotColorRef.current   = isLight ? "100, 116, 139" : "71, 85, 105";
    dotOpacityRef.current = isLight ? 0.45 : 1.0;
  }, [resolvedTheme]);

  useEffect(() => {
    startMouseTracking();

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isMobile       = window.matchMedia("(hover: none)").matches;
    const SPACING        = isMobile ? 38 : 22;
    const ATTRACT_RADIUS = isMobile ? 0  : 140;
    const SPHERE_RADIUS  = 260;
    const SPHERE_DEPTH   = 35;
    const DRIFT_SPEED    = 0.0009;

    interface Dot { x: number; y: number; phase: number; }
    let dots: Dot[] = [];
    let time = 0;

    const init = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      dots = [];
      const cols = Math.ceil(canvas.width  / SPACING) + 1;
      const rows = Math.ceil(canvas.height / SPACING) + 1;
      for (let c = 0; c < cols; c++)
        for (let r = 0; r < rows; r++)
          dots.push({ x: c * SPACING, y: r * SPACING, phase: Math.random() * Math.PI * 2 });
    };

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += DRIFT_SPEED;

      const mx = mouse.smooth.x;
      const my = mouse.smooth.y;

      const cx = canvas.width  / 2;
      const cy = canvas.height / 2;
      const normX = (mx - cx) / cx;
      const normY = (my - cy) / cy;
      const sx = cx + normX * SPHERE_DEPTH;
      const sy = cy + normY * SPHERE_DEPTH;

      for (const d of dots) {
        const wave        = Math.sin(time + d.phase);
        const baseSize    = 1.0 + (wave * 0.5 + 0.5) * 0.6;
        const baseOpacity = 0.35 + (wave * 0.5 + 0.5) * 0.18;

        const cdx  = d.x - mx;
        const cdy  = d.y - my;
        const cdist = Math.sqrt(cdx * cdx + cdy * cdy);
        const cursorProx = cdist < ATTRACT_RADIUS ? 1 - cdist / ATTRACT_RADIUS : 0;

        const sdx   = d.x - sx;
        const sdy   = d.y - sy;
        const sdist = Math.sqrt(sdx * sdx + sdy * sdy);
        const sphereProx = sdist < SPHERE_RADIUS ? (1 - sdist / SPHERE_RADIUS) * 0.6 : 0;

        const size    = baseSize    + cursorProx * 1.8  + sphereProx * 0.5;
        const opacity = baseOpacity + cursorProx * 0.45 + sphereProx * 0.25;

        ctx.beginPath();
        ctx.arc(d.x, d.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dotColorRef.current}, ${Math.min(opacity * dotOpacityRef.current, 0.92).toFixed(3)})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    const onResize = () => init();
    window.addEventListener("resize", onResize);
    init();
    loop();

    return () => {
      window.removeEventListener("resize", onResize);
      if (rafRef.current !== undefined) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
};

export default function BackgroundNoise() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  const isDark = !mounted || resolvedTheme !== "light";

  return (
    <div className={`fixed inset-0 -z-10 transition-colors duration-500 ${isDark ? "bg-black" : "bg-white"}`}>
      <div className={`absolute inset-0 ${
        isDark
          ? "bg-[radial-gradient(circle_520px_at_35%_240px,#3b82f640,transparent)]"
          : "bg-[radial-gradient(circle_520px_at_35%_240px,#3b82f618,transparent)]"
      }`} />
      <div className={`absolute inset-0 ${
        isDark
          ? "bg-[radial-gradient(circle_520px_at_70%_540px,#a855f740,transparent)]"
          : "bg-[radial-gradient(circle_520px_at_70%_540px,#a855f718,transparent)]"
      }`} />
      <DotGrid />
    </div>
  );
}
