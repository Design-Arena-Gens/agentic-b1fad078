const particles = [
  { top: "10%", left: "15%", size: 12, delay: "0s" },
  { top: "25%", left: "35%", size: 18, delay: "2s" },
  { top: "12%", left: "70%", size: 14, delay: "3s" },
  { top: "45%", left: "20%", size: 10, delay: "4s" },
  { top: "65%", left: "30%", size: 16, delay: "1s" },
  { top: "55%", left: "75%", size: 20, delay: "2.5s" },
  { top: "35%", left: "60%", size: 9, delay: "3.5s" },
  { top: "78%", left: "50%", size: 24, delay: "4.5s" },
  { top: "82%", left: "15%", size: 14, delay: "1.5s" },
  { top: "30%", left: "85%", size: 12, delay: "2.2s" },
  { top: "5%", left: "50%", size: 18, delay: "3.2s" },
  { top: "60%", left: "5%", size: 16, delay: "4.2s" },
];

export function FloatingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle, index) => (
        <span
          key={index}
          className="absolute rounded-full bg-amber-300/20 backdrop-blur-sm"
          style={{
            top: particle.top,
            left: particle.left,
            width: particle.size,
            height: particle.size,
            animation: `sparkle 6s ease-in-out infinite`,
            animationDelay: particle.delay,
            boxShadow: "0 0 18px rgba(237,191,76,0.45)",
          }}
        />
      ))}
    </div>
  );
}
