"use client";

import { useInView } from "@/src/hooks/useInView";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`animate-reveal-up ${isInView ? "in-view" : ""} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
