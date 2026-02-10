
"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { SparklesCore } from "./sparkles";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { ChevronRight, ChevronLeft } from "lucide-react";

export const Compare = ({
  firstImage = "",
  secondImage = "",
  className,
  firstImageClassName,
  secondImageClassname,
  initialSliderPercentage = 50,
  slideMode = "hover",
  showHandlebar = true,
  autoplay = false,
  autoplayDuration = 5000,
}) => {
  const [sliderXPercent, setSliderXPercent] = useState(initialSliderPercentage);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const autoplayRef = useRef(null);

  const startAutoplay = useCallback(() => {
    if (!autoplay) return;
    const startTime = Date.now();
    const animate = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = (elapsedTime % (autoplayDuration * 2)) / autoplayDuration;
      const percentage = progress <= 1 ? progress * 100 : (2 - progress) * 100;
      setSliderXPercent(percentage);
      autoplayRef.current = setTimeout(animate, 16);
    };
    animate();
  }, [autoplay, autoplayDuration]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!isMouseOver) startAutoplay();
    return () => stopAutoplay();
  }, [isMouseOver, startAutoplay, stopAutoplay]);

  const handleMove = useCallback(
    (clientX) => {
      if (!sliderRef.current) return;
      const rect = sliderRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percent = (x / rect.width) * 100;
      requestAnimationFrame(() => {
        setSliderXPercent(Math.max(0, Math.min(100, percent)));
      });
    },
    []
  );

  return (
    <div
      ref={sliderRef}
      className={cn("relative overflow-hidden group", className)}
      style={{ cursor: slideMode === "drag" ? "grab" : "col-resize", touchAction: "none" }}
      onPointerDown={(e) => {
        e.preventDefault();
        (e.target as Element).setPointerCapture(e.pointerId);
        setIsMouseOver(true);
        setIsDragging(true);
        stopAutoplay();
        handleMove(e.clientX);
      }}
      onPointerMove={(e) => {
        if (e.pointerType === "mouse" || isDragging) {
          handleMove(e.clientX);
        }
      }}
      onPointerUp={() => {
        setIsDragging(false);
        setIsMouseOver(false);
      }}
      onPointerEnter={() => { setIsMouseOver(true); stopAutoplay(); }}
      onPointerLeave={(e) => {
        setIsMouseOver(false);
        setIsDragging(false);
        if (e.pointerType === "mouse" && slideMode === "hover") {
          setSliderXPercent(initialSliderPercentage);
        }
      }}
    >
      <AnimatePresence initial={false}>
        <motion.div
          className="h-full w-px absolute top-0 m-auto z-30 bg-gradient-to-b from-transparent via-purple-500 to-transparent"
          style={{ left: `${sliderXPercent}%`, zIndex: 40 }}
          transition={{ duration: 0 }}
        >
          <div className="w-20 h-full absolute top-1/2 -translate-y-1/2 left-0 bg-gradient-to-r from-purple-500/20 to-transparent z-20 opacity-50" />
          <div className="w-10 h-3/4 top-1/2 -translate-y-1/2 absolute -right-5">
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1.2}
              particleDensity={400}
              className="w-full h-full"
              particleColor="#A78BFA"
            />
          </div>
          {showHandlebar && (
            <div className="h-8 w-8 rounded-full top-1/2 -translate-y-1/2 bg-white text-black z-30 -right-4 absolute flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
              <ChevronLeft className="h-3 w-3 -mr-1" />
              <ChevronRight className="h-3 w-3 -ml-1" />
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="overflow-hidden w-full h-full relative z-20 pointer-events-none">
        <motion.div
          className={cn("absolute inset-0 z-20 w-full h-full select-none overflow-hidden", firstImageClassName)}
          style={{ clipPath: `inset(0 ${100 - sliderXPercent}% 0 0)` }}
          transition={{ duration: 0 }}
        >
          <img alt="Before" src={firstImage} className="absolute inset-0 w-full h-full object-cover" draggable={false} />
          <div className="absolute top-4 left-4 bg-black/50 backdrop-blur px-3 py-1 rounded text-xs text-white uppercase tracking-widest font-bold">Vorher</div>
        </motion.div>
      </div>

      <div className="absolute top-0 left-0 z-10 w-full h-full">
        <img alt="After" src={secondImage} className={cn("w-full h-full object-cover", secondImageClassname)} draggable={false} />
        <div className="absolute top-4 right-4 bg-purple-500/50 backdrop-blur px-3 py-1 rounded text-xs text-white uppercase tracking-widest font-bold">Nachher</div>
      </div>
    </div>
  );
};
