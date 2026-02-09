
"use client";
import { useScroll, useTransform, motion, useMotionValueEvent, useMotionValue } from "framer-motion";
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
  const transitionFraction = 0.2;

  for (let i = 0; i < n; i++) {
    const segmentStart = i * segmentSize;
    const transitionEnd = segmentStart + segmentSize * transitionFraction;
    const segmentEnd = (i + 1) * segmentSize;

    if (progress < segmentStart) {
      return i === 0 ? 0 : positions[i - 1];
    }

    if (progress <= transitionEnd) {
      const t = (progress - segmentStart) / (transitionEnd - segmentStart);
      const eased = t * t * (3 - 2 * t);
      const from = i === 0 ? 0 : positions[i - 1];
      const to = positions[i];
      return from + (to - from) * eased;
    }

    if (progress <= segmentEnd) {
      return positions[i];
    }
  }

  return positions[n - 1] || 0;
}

export const Timeline = ({ data }) => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const itemRefs = useRef([]);
  const bulletPosRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  const animatedHeight = useMotionValue(0);

  useEffect(() => {
    bulletPosRef.current = itemRefs.current.map((ref) => {
      if (!ref) return 0;
      return ref.offsetTop + 20;
    });
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 90%"],
  });

  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    // Update line height
    const positions = bulletPosRef.current;
    const h = computeSteppedHeight(progress, positions);
    animatedHeight.set(h);

    // Update active index
    const n = data.length;
    if (progress <= 0) {
      setActiveIndex(-1);
    } else {
      const newIndex = Math.min(Math.floor(progress * n), n - 1);
      setActiveIndex(newIndex);
    }
  });

  return (
    <div className="w-full bg-black/80 font-sans md:px-10 scroll-mt-24 relative overflow-clip" id="services" ref={containerRef}>
      <div className="max-w-7xl mx-auto pt-20 pb-6 px-4 md:px-8 lg:px-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Vom Verstehen zum Umsetzen</h2>
        <p className="text-neutral-400 text-lg max-w-2xl">
          Ob Workshop, Audit oder volle Implementierung, wir holen dich dort ab, wo du gerade stehst und bringen dich zum nächsten Level.
        </p>
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
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black border border-white/10 flex items-center justify-center">
                  <div
                    className={`h-4 w-4 rounded-full transition-colors duration-500 ${
                      isActive
                        ? `${colors.bg} ${colors.border} ${colors.pulse}`
                        : "bg-neutral-800 border border-purple-500/50"
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
        <div className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-neutral-800 to-transparent h-full">
          <motion.div
            style={{ height: animatedHeight, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-purple-500 via-blue-500 to-emerald-500 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
