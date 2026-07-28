import React from 'react';
import { motion } from 'motion/react';

export const ParticleBackground: React.FC = () => {
  // Generate deterministic floating circles
  const particles = Array.from({ length: 14 }).map((_, i) => ({
    id: i,
    size: Math.floor(Math.random() * 280) + 120,
    x: Math.floor(Math.random() * 90) + 5,
    y: Math.floor(Math.random() * 90) + 5,
    duration: Math.floor(Math.random() * 20) + 15,
    delay: Math.random() * 5,
    color: i % 3 === 0 ? 'rgba(37, 99, 235, 0.08)' : i % 3 === 1 ? 'rgba(6, 182, 212, 0.07)' : 'rgba(139, 92, 246, 0.06)'
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Professional Polish Global Glass Background Effect */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vh] min-w-[400px] min-h-[400px] rounded-full bg-blue-600/10 blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vh] min-w-[400px] min-h-[400px] rounded-full bg-cyan-600/10 blur-[120px]" />
      <div className="absolute top-[40%] right-[10%] w-[35vw] h-[35vh] rounded-full bg-purple-600/10 blur-[130px]" />

      {/* Floating Shapes & Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full filter blur-[60px]"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: p.color
          }}
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.15, 0.9, 1]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Subtle Grid Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:opacity-40 opacity-60" 
      />
    </div>
  );
};
