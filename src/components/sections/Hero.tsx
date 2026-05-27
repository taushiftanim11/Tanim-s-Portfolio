import { FaXTwitter, FaFacebook, FaLinkedinIn, FaGithub, FaDribbble, FaInstagram } from "react-icons/fa6";

const socials = [
  { icon: FaXTwitter,    href: "#", label: "Twitter / X" },
  { icon: FaFacebook,    href: "#", label: "Facebook" },
  { icon: FaLinkedinIn,  href: "#", label: "LinkedIn" },
  { icon: FaGithub,      href: "#", label: "GitHub" },
  { icon: FaDribbble,    href: "#", label: "Dribbble" },
  { icon: FaInstagram,   href: "#", label: "Instagram" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-8 md:px-16 lg:px-24 pt-24"
    >
      {/* Left content */}
      <div className="flex-1 max-w-2xl">
        <h1
          className="text-4xl md:text-5xl lg:text-[3.6rem] font-black tracking-[0.18em] uppercase leading-tight mb-6"
          style={{ color: "#e879a0" }}
        >
          I'M TAUSHIF TANIM
        </h1>

        <p className="text-white/65 text-sm md:text-base leading-relaxed mb-3">
          Your friendly neighborhood frontend developer, creative coder, and UI enthusiast.
          I spend my days (and often nights) painting the Internet canvas with{" "}
          <strong className="text-white font-semibold">PROJECTS</strong>{" "}
          and lines of code, turning zeroes and ones into immersive, interactive experiences.
        </p>

        <p className="text-white/65 text-sm md:text-base leading-relaxed mb-10">
          Passionate about clean code and beautiful interfaces. I tread the path of minimalism,
          finding beauty in simplicity and order. When I'm not crafting beautiful web experiences,
          you can find me reading{" "}
          <strong className="text-white font-semibold">ARTICLES</strong>{" "}
          or exploring the latest in web tech. Anyways, you can{" "}
          <strong className="text-white font-semibold">CONTACT ME</strong>
        </p>

        <a
          href="#about"
          className="inline-flex items-center gap-3 text-white text-sm tracking-widest uppercase hover:gap-5 transition-all duration-300 mb-14 group"
        >
          See More About Me
          <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>

        {/* Social icons */}
        <div className="flex items-center gap-5">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-white/40 hover:text-white transition-colors duration-200"
            >
              <Icon size={17} strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>

      {/* Right — empty; cursor circle naturally floats here */}
      <div className="hidden lg:block flex-1" />

      {/* Watermark initials */}
      <div
        className="absolute bottom-4 left-8 md:left-16 lg:left-24 font-black leading-none select-none pointer-events-none"
        style={{
          fontSize: "clamp(6rem, 18vw, 14rem)",
          color: "rgba(255,255,255,0.035)",
          letterSpacing: "0.05em",
        }}
      >
        TT
      </div>
    </section>
  );
}
