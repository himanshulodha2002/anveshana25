import { useEffect, useRef } from "react";

export default function SandParticles() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const particles: HTMLDivElement[] = [];
    const container = particlesRef.current;

    if (!container) return;

    function createParticle() {
      const particle = document.createElement("div");
      particle.className = "absolute w-1 h-1 bg-orange-300/20 rounded-full";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = "-10px";
      particle.style.transform = `scale(${Math.random()})`;
      container!.appendChild(particle);

      const speed = 2 + Math.random() * 2;
      const rotation = -15 + Math.random() * 30;
      let position = -10;

      function animate() {
        position += speed;
        particle.style.top = `${position}px`;
        particle.style.transform = `translate(${rotation}px, 0) scale(${Math.random()})`;

        if (position < window.innerHeight) {
          requestAnimationFrame(animate);
        } else {
          particle.remove();
          particles.splice(particles.indexOf(particle), 1);
        }
      }

      particles.push(particle);
      requestAnimationFrame(animate);
    }

    const interval = setInterval(createParticle, 100);

    return () => {
      clearInterval(interval);
      particles.forEach((particle) => particle.remove());
    };
  }, []);

  return <div ref={particlesRef} className="absolute inset-0" />;
}
