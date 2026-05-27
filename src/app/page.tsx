export const dynamic = "force-dynamic";

import DotGrid from "@/components/ui/dot-grid";
import ClientEffects from "@/components/ui/client-effects";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";

export default function Page() {
  return (
    <div className="relative h-screen overflow-hidden text-white">
      <DotGrid />
      <ClientEffects />
      <Navbar />
      <Hero />
    </div>
  );
}
