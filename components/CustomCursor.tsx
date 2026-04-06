"use client";

import { useState, useEffect, useCallback } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHoveringProduct, setIsHoveringProduct] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    if (!isVisible) setIsVisible(true);
  }, [isVisible]);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [handleMouseMove, handleMouseLeave, handleMouseEnter]);

  // Detect hover over product images
  useEffect(() => {
    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isProduct =
        target.closest("[data-cursor='view']") !== null;
      setIsHoveringProduct(isProduct);
    };

    document.addEventListener("mouseover", handleOver);
    return () => document.removeEventListener("mouseover", handleOver);
  }, []);

  // Don't render on touch devices
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Dot cursor */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed z-[10000]"
        style={{
          left: position.x,
          top: position.y,
          width: isHoveringProduct ? 64 : 8,
          height: isHoveringProduct ? 64 : 8,
          borderRadius: "50%",
          background: isHoveringProduct ? "var(--color-fg)" : "var(--color-fg)",
          transform: "translate(-50%, -50%)",
          transition: "width 0.3s ease, height 0.3s ease, opacity 0.3s ease",
          opacity: isVisible ? 1 : 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mixBlendMode: "difference",
        }}
      >
        {isHoveringProduct && (
          <span
            style={{
              color: "#FFFFFF",
              fontSize: "9px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              fontFamily: "var(--font-sans)",
              whiteSpace: "nowrap",
            }}
          >
            Gör
          </span>
        )}
      </div>
    </>
  );
}
