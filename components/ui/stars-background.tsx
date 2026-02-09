
"use client";
import { cn } from "../../lib/utils";
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";

export const StarsBackground = ({
  starDensity = 0.00030,
  allStarsTwinkle = true,
  twinkleProbability = 0.8,
  minTwinkleSpeed = 0.3,
  maxTwinkleSpeed = 1.0,
  className = "",
}) => {
  const [stars, setStars] = useState([]);
  const canvasRef = useRef(null);
  const generateStars = useCallback(
    (width, height) => {
      const area = width * height;
      const numStars = Math.floor(area * starDensity);
      return Array.from({ length: numStars }, () => {
        const shouldTwinkle = allStarsTwinkle || Math.random() < twinkleProbability;
        const isFlashStar = Math.random() < 0.05; // 5% are slightly brighter flash stars
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          radius: isFlashStar
            ? Math.random() * 0.8 + 0.8   // Flash stars: 0.8–1.6
            : Math.random() * 1.0 + 0.4,  // Normal stars: 0.4–1.4
          baseOpacity: Math.random() * 0.5 + 0.3,
          twinkleSpeed: shouldTwinkle
            ? isFlashStar
              ? 0.15 + Math.random() * 0.2  // Flash stars blink faster (0.15–0.35)
              : minTwinkleSpeed + Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)
            : null,
          phase: Math.random() * Math.PI * 2,
          isFlashStar,
        };
      });
    },
    [starDensity, allStarsTwinkle, twinkleProbability, minTwinkleSpeed, maxTwinkleSpeed]
  );

  useEffect(() => {
    const updateStars = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        const { width, height } = canvas.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
        setStars(generateStars(width, height));
      }
    };
    updateStars();
    const resizeObserver = new ResizeObserver(updateStars);
    if (canvasRef.current) {
      resizeObserver.observe(canvasRef.current);
    }
    return () => {
      if (canvasRef.current) {
        resizeObserver.unobserve(canvasRef.current);
      }
    };
  }, [generateStars]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animationFrameId;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const now = Date.now() * 0.001;

      stars.forEach((star) => {
        let opacity = star.baseOpacity;

        if (star.twinkleSpeed !== null) {
          const raw = Math.sin(now / star.twinkleSpeed + star.phase);
          // Sharper blink than pure sine via pow
          const sharp = Math.pow(Math.abs(raw), 0.5);
          opacity = 0.12 + sharp * 0.78; // Range: 0.12 – 0.9
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [stars]);

  return <canvas ref={canvasRef} className={cn("h-full w-full absolute inset-0 pointer-events-none z-0", className)} />;
};
