import { FaXTwitter, FaFacebook, FaLinkedinIn, FaGithub, FaBehance, FaInstagram } from "react-icons/fa6";
import SphereVisual from "@/components/ui/sphere-visual";

const socials = [
  { icon: FaXTwitter,   href: "https://x.com/taushiftanim11",              label: "Twitter / X" },
  { icon: FaFacebook,   href: "https://facebook.com/taushiftanim11",        label: "Facebook" },
  { icon: FaLinkedinIn, href: "https://linkedin.com/in/taushiftanim11",     label: "LinkedIn" },
  { icon: FaGithub,     href: "https://github.com/taushiftanim11",          label: "GitHub" },
  { icon: FaBehance,    href: "https://behance.net/taushiftanim11",          label: "Behance" },
  { icon: FaInstagram,  href: "https://instagram.com/taushiftanim11",       label: "Instagram" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24"
    >
      <div className="max-w-[1200px] mx-auto px-6 w-full flex items-center">
      <div className="flex-1 max-w-2xl">
        <h1
          className="text-4xl md:text-5xl lg:text-[3.6rem] font-black tracking-[0.18em] uppercase leading-tight mb-6"
          style={{ color: "#818cf8" }}
        >
          I'M TAUSHIF TANIM
        </h1>

        <p className="dark:text-white/65 text-gray-600 text-sm md:text-base leading-relaxed mb-3">
          Entrepreneur by nature, explorer by choice. I build{" "}
          <strong className="dark:text-white text-gray-900 font-semibold">VENTURES</strong>{" "}
          and chase ideas that sit at the intersection of business and possibility — always
          looking for what's next before the world catches up.
        </p>

        <p className="dark:text-white/65 text-gray-600 text-sm md:text-base leading-relaxed mb-10">
          Tech isn't my profession — it's one of the tools I pick up when curiosity demands it.
          When I'm not working on something new, you'll find me deep in{" "}
          <strong className="dark:text-white text-gray-900 font-semibold">RESEARCH</strong>{" "}
          or having conversations that matter. Feel free to{" "}
          <strong className="dark:text-white text-gray-900 font-semibold">REACH OUT</strong>
        </p>

        <a
          href="#about"
          className="inline-flex items-center gap-3 dark:text-white text-gray-900 text-sm tracking-widest uppercase hover:gap-5 transition-all duration-300 mb-14 group"
        >
          See More About Me
          <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>

        <div className="flex items-center gap-5">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-white/40 dark:hover:text-white text-gray-400 hover:text-gray-700 transition-colors duration-200"
            >
              <Icon size={17} strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>

      <div className="hidden lg:flex flex-1 items-center justify-end pr-4">
        <SphereVisual />
      </div>
      </div>

      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-[1200px] px-6 font-black leading-none select-none pointer-events-none"
        style={{
          fontSize: "clamp(6rem, 18vw, 14rem)",
          color: "var(--watermark-color)",
          letterSpacing: "0.05em",
        }}
      >
        TT
      </div>
    </section>
  );
}
