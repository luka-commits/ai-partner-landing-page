"use client";

import { Mic, PhoneOff } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { RetellWebClient } from "retell-client-js-sdk";

interface AIVoiceInputProps {
  onStart?: () => void;
  onStop?: (duration: number) => void;
  visualizerBars?: number;
  className?: string;
  listeningText?: string;
  clickToSpeakText?: string;
  connectingText?: string;
}

export function AIVoiceInput({
  onStart,
  onStop,
  visualizerBars = 48,
  className,
  listeningText = "Verbunden – sprich jetzt...",
  clickToSpeakText = "Zum Sprechen klicken",
  connectingText = "Verbinde...",
}: AIVoiceInputProps) {
  const [status, setStatus] = useState<"idle" | "connecting" | "active">(
    "idle"
  );
  const [time, setTime] = useState(0);
  const [barHeights, setBarHeights] = useState<number[]>(
    Array(visualizerBars).fill(5)
  );
  const retellClientRef = useRef<RetellWebClient | null>(null);
  const animFrameRef = useRef<number | null>(null);

  // Timer
  useEffect(() => {
    if (status !== "active") {
      setTime(0);
      return;
    }

    const intervalId = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [status]);

  // Visualizer animation when active
  useEffect(() => {
    if (status !== "active") {
      setBarHeights(Array(visualizerBars).fill(5));
      return;
    }

    let running = true;
    const animate = () => {
      if (!running) return;
      setBarHeights(
        Array(visualizerBars)
          .fill(0)
          .map(() => 10 + Math.random() * 90)
      );
      animFrameRef.current = requestAnimationFrame(() => {
        setTimeout(() => animate(), 100);
      });
    };
    animate();

    return () => {
      running = false;
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [status, visualizerBars]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const startCall = useCallback(async () => {
    setStatus("connecting");

    try {
      // Get access token from our serverless function
      const res = await fetch("/api/retell-token", { method: "POST" });
      if (!res.ok) throw new Error("Failed to get access token");
      const { access_token } = await res.json();

      // Create Retell client and start call
      const client = new RetellWebClient();
      retellClientRef.current = client;

      client.on("call_started", () => {
        setStatus("active");
        onStart?.();
      });

      client.on("call_ended", () => {
        setStatus("idle");
        onStop?.(time);
        retellClientRef.current = null;
      });

      client.on("error", (error) => {
        console.error("Retell error:", error);
        setStatus("idle");
        retellClientRef.current = null;
      });

      await client.startCall({ accessToken: access_token });
    } catch (error) {
      console.error("Failed to start call:", error);
      setStatus("idle");
    }
  }, [onStart, onStop, time]);

  const stopCall = useCallback(() => {
    if (retellClientRef.current) {
      retellClientRef.current.stopCall();
      retellClientRef.current = null;
    }
    onStop?.(time);
    setStatus("idle");
  }, [onStop, time]);

  const handleClick = () => {
    if (status === "idle") {
      startCall();
    } else if (status === "active") {
      stopCall();
    }
    // Do nothing while connecting
  };

  const statusText =
    status === "connecting"
      ? connectingText
      : status === "active"
        ? listeningText
        : clickToSpeakText;

  return (
    <div className={cn("w-full py-4", className)}>
      <div className="relative max-w-xl w-full mx-auto flex items-center flex-col gap-2">
        <button
          className={cn(
            "group w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300",
            status === "active"
              ? "animate-pulse-glow bg-gradient-to-br from-purple-600/30 to-cyan-500/20 ring-2 ring-purple-400/50"
              : status === "connecting"
                ? "bg-gradient-to-br from-purple-600/30 to-cyan-500/20 ring-2 ring-purple-400/30 animate-pulse"
                : "bg-gradient-to-br from-purple-600/30 to-cyan-500/20 ring-2 ring-purple-400/40 hover:from-purple-600/50 hover:to-cyan-500/35 hover:ring-purple-400/60 hover:scale-105 animate-pulse-glow"
          )}
          type="button"
          onClick={handleClick}
          disabled={status === "connecting"}
        >
          {status === "active" ? (
            <PhoneOff className="w-8 h-8 text-red-400" />
          ) : status === "connecting" ? (
            <div
              className="w-8 h-8 rounded-sm animate-spin bg-purple-400"
              style={{ animationDuration: "1s" }}
            />
          ) : (
            <Mic className="w-8 h-8 text-purple-300" />
          )}
        </button>

        <span
          className={cn(
            "font-mono text-sm transition-opacity duration-300",
            status === "active" ? "text-purple-300" : "text-purple-400/40"
          )}
        >
          {formatTime(time)}
        </span>

        <div className="h-4 w-64 flex items-center justify-center gap-0.5">
          {barHeights.map((h, i) => (
            <div
              key={i}
              className={cn(
                "w-0.5 rounded-full transition-all duration-150",
                status === "active"
                  ? "bg-purple-400/60"
                  : "bg-purple-400/20"
              )}
              style={{ height: status === "active" ? `${h}%` : "4px" }}
            />
          ))}
        </div>

        <p className="h-4 text-xs text-purple-300/70">{statusText}</p>
      </div>
    </div>
  );
}
