
"use client";
import { useScroll, useMotionValueEvent } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const BULLET_COLORS = [
  { bg: "bg-purple-500", border: "border-purple-400", pulse: "animate-pulse-dot-purple" },
  { bg: "bg-blue-500", border: "border-blue-400", pulse: "animate-pulse-dot-blue" },
  { bg: "bg-emerald-500", border: "border-emerald-400", pulse: "animate-pulse-dot-emerald" },
];

function computeSteppedHeight(progress, positions) {
  const n = positions.length;
  if (n === 0) return 0;

  const segmentSize = 1 / n;
  const transitionFrac = 0.2;

  for (let i = 0; i < n; i++) {
    const segStart = i * segmentSize;
    const transEnd = segStart + segmentSize * transitionFrac;
    const segEnd = (i + 1) * segmentSize;

    if (progress < segStart) {
      return i === 0 ? 0 : positions[i - 1];
    }

    if (progress <= transEnd) {
      const t = (progress - segStart) / (transEnd - segStart);
      const eased = t * t * (3 - 2 * t);
      const from = i === 0 ? 0 : positions[i - 1];
      return from + (positions[i] - from) * eased;
    }

    if (progress <= segEnd) {
      return positions[i];
    }
  }

  return positions[n - 1] || 0;
}

export const Timeline = ({ data, heading, description }: { data: any[]; heading?: string; description?: string }) => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const itemRefs = useRef([]);
  const bulletPosRef = useRef([]);
  const colorLineRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      bulletPosRef.current = itemRefs.current.map((ref) => {
        if (!ref) return 0;
        return ref.offsetTop + 20;
      });
    });
    return () => cancelAnimationFrame(frame);
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 90%"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    // Direct DOM update for line height — no useTransform needed
    const positions = bulletPosRef.current;
    const h = computeSteppedHeight(progress, positions);
    if (colorLineRef.current) {
      colorLineRef.current.style.height = h + "px";
      colorLineRef.current.style.opacity = String(Math.min(progress / 0.1, 1));
    }

    // Track active index
    const n = data.length;
    if (progress <= 0) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(Math.min(Math.floor(progress * n), n - 1));
    }
  });

  return (
    <div className="w-full bg-black/80 font-sans md:px-10 relative overflow-clip" ref={containerRef}>
      <div className="max-w-7xl mx-auto pt-20 pb-6 px-4 md:px-8 lg:px-10">
        {heading && <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-center">{heading}</h2>}
        {description && <p className="text-neutral-400 text-lg max-w-2xl mx-auto text-center">{description}</p>}
      </div>
      <div className="relative max-w-7xl mx-auto pb-20" ref={lineRef}>
        {data.map((item, index) => {
          const isActive = index === activeIndex;
          const colors = BULLET_COLORS[index] || BULLET_COLORS[0];

          return (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className="flex justify-start pt-10 md:pt-20 gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black border border-white/20 flex items-center justify-center">
                  <div
                    className={`h-4 w-4 rounded-full transition-colors duration-500 ${
                      isActive
                        ? `${colors.bg} ${colors.border} ${colors.pulse}`
                        : "bg-neutral-800 border border-white/20"
                    }`}
                  />
                </div>
                <h3
                  className="hidden md:block text-2xl md:pl-20 md:text-5xl font-bold"
                  style={{ color: item.titleColor || '#525252' }}
                >
                  {item.title}
                </h3>
              </div>
              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3
                  className="md:hidden block text-2xl mb-4 text-left font-bold"
                  style={{ color: item.titleColor || '#a855f7' }}
                >
                  {item.title}
                </h3>
                {item.content}
              </div>
            </div>
          );
        })}
        <div className="absolute md:left-8 left-8 top-0 overflow-hidden w-[3px] bg-gradient-to-b from-transparent via-neutral-500 to-transparent h-full z-30">
          <div
            ref={colorLineRef}
            style={{ height: 0, opacity: 0 }}
            className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-b from-purple-500 via-blue-500 to-emerald-500 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
