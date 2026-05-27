"use client";

import dynamic from "next/dynamic";

const CursorCircle = dynamic(() => import("./cursor-circle"), {
  ssr: false,
  loading: () => null,
});

export default function ClientEffects() {
  return (
    <div className="fixed inset-0 -z-8 pointer-events-none [@media(hover:none)]:hidden">
      <CursorCircle />
    </div>
  );
}
