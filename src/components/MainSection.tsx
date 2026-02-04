import { useState, useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import HeroSection from "./HeroSection";
import OtherSections from "./OtherSections";

type Section = "hero" | "other";

export default function MainSection() {
  const [section, setSection] = useState<Section>("hero");
  const isAnimating = useRef(false);
  const touchStartY = useRef<number | null>(null);

  const goTo = (next: Section) => {
    if (isAnimating.current || section === next) return;

    isAnimating.current = true;
    setSection(next);

    // unlock after animation
    setTimeout(() => {
      isAnimating.current = false;
    }, 900);
  };
  //scroll detection
  useEffect(
    () => {
      const onWheel = (e: WheelEvent) => {
        if (isAnimating.current) return;

        if (e.deltaY > 50 && section === "hero") {
          goTo("other");
        }

        if (e.deltaY < -50 && section === "other") {
          goTo("hero");
        }
      };

      window.addEventListener("wheel", onWheel, { passive: true });
      return () => window.removeEventListener("wheel", onWheel);
    },
    [section]
  );

  //swipe detection
  useEffect(
    () => {
      const onTouchStart = (e: TouchEvent) => {
        touchStartY.current = e.touches[0].clientY;
      };

      const onTouchEnd = (e: TouchEvent) => {
        if (touchStartY.current === null || isAnimating.current) return;

        const touchEndY = e.changedTouches[0].clientY;
        const delta = touchStartY.current - touchEndY;

        // swipe up
        if (delta > 60 && section === "hero") {
          goTo("other");
        }

        // swipe down
        if (delta < -60 && section === "other") {
          goTo("hero");
        }

        touchStartY.current = null;
      };

      window.addEventListener("touchstart", onTouchStart, { passive: true });
      window.addEventListener("touchend", onTouchEnd, { passive: true });
      return () => {
        window.removeEventListener("touchstart", onTouchStart);
        window.removeEventListener("touchend", onTouchEnd);
      };
    },
    [section]
  );
  return (
    <div className="h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {section === "hero" && <HeroSection key="hero" />}
        {section === "other" && <OtherSections key="other" />}
      </AnimatePresence>
    </div>
  );
}
