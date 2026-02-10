"use client";
import React, { useEffect, useRef } from "react";

export function ShootingStarsOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shootingStarsRef = useRef<Array<{
    x: number; y: number; angle: number; speed: number;
    tailLength: number; life: number; maxLife: number;
  }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let animationFrameId: number;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (shootingStarsRef.current.length < 3 && Math.random() < 0.00315) {
        shootingStarsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.6,
          angle: (210 + Math.random() * 30) * Math.PI / 180,
          speed: 4 + Math.random() * 4,
          tailLength: 60 + Math.random() * 60,
          life: 0,
          maxLife: 55 + Math.random() * 25,
        });
      }

      shootingStarsRef.current = shootingStarsRef.current.filter((s) => {
        s.life++;
        s.x += Math.cos(s.angle) * s.speed;
        s.y -= Math.sin(s.angle) * s.speed;

        const fadeOut = s.life > s.maxLife * 0.7
          ? 1 - (s.life - s.maxLife * 0.7) / (s.maxLife * 0.3)
          : 1;

        const tailX = s.x - Math.cos(s.angle) * s.tailLength;
        const tailY = s.y + Math.sin(s.angle) * s.tailLength;

        const grad = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${fadeOut * 0.9})`);
        grad.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        return s.life < s.maxLife;
      });

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}
