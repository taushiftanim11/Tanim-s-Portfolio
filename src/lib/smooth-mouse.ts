const LERP = 0.5;

export const mouse = {
  raw: { x: 0, y: 0 },
  smooth: { x: 0, y: 0 },
};

let started = false;

export function startMouseTracking() {
  if (started || typeof window === "undefined") return;
  if (window.matchMedia("(hover: none)").matches) return;
  started = true;

  mouse.raw.x = window.innerWidth / 2;
  mouse.raw.y = window.innerHeight / 2;
  mouse.smooth.x = window.innerWidth / 2;
  mouse.smooth.y = window.innerHeight / 2;

  window.addEventListener("mousemove", (e) => {
    mouse.raw.x = e.clientX;
    mouse.raw.y = e.clientY;
  });

  const tick = () => {
    mouse.smooth.x += (mouse.raw.x - mouse.smooth.x) * LERP;
    mouse.smooth.y += (mouse.raw.y - mouse.smooth.y) * LERP;
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
