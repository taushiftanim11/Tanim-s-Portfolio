"use client";

import dynamic from "next/dynamic";

const AuroraBackground = dynamic(() => import("./aurora-background"), {
  ssr: false,
  loading: () => null,
});

const CursorCircle = dynamic(() => import("./cursor-circle"), {
  ssr: false,
  loading: () => null,
});

export default function ClientEffects() {
  return (
    <>
      <AuroraBackground />
      <div className="fixed inset-0 -z-8 pointer-events-none [@media(hover:none)]:hidden">
        <CursorCircle />
      </div>
    </>
  );
}
