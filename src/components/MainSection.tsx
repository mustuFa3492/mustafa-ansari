import { useEffect, useRef, useState } from "react";
import { AnimatePresence,motion } from "framer-motion";
import Hero from "./HeroSection";
import OtherSections from "./OtherSections";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const isAnimating = useRef(false);
  const touchStartY = useRef<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const finishIntro = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setShowIntro(false);

    setTimeout(() => {
      isAnimating.current = false;
    }, 900);
  };

  const backToHero = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setShowIntro(true);

    setTimeout(() => {
      isAnimating.current = false;
    }, 900);
  };

  // Scroll between hero and other sections
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (isAnimating.current) return;
      if (showIntro && e.deltaY > 50) finishIntro();
      if (!showIntro && e.deltaY < -50) {
        // Only allow scrolling back to hero if at the top of OtherSections
        if (scrollContainerRef.current && scrollContainerRef.current.scrollTop === 0) {
          backToHero();
        }
      }
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, [showIntro]);

  // Touch scroll between hero and other sections
  useEffect(() => {
    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (touchStartY.current === null || isAnimating.current) return;

      const delta = touchStartY.current - e.changedTouches[0].clientY;

      if (showIntro && delta > 60) finishIntro();
      if (!showIntro && delta < -60) {
        // Only allow scrolling back to hero if at the top of OtherSections
        if (scrollContainerRef.current && scrollContainerRef.current.scrollTop === 0) {
          backToHero();
        }
      }
      touchStartY.current = null;
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [showIntro]);

  return (
  <>
    <AnimatePresence mode="wait">
      {showIntro ? (
        <motion.div
          key="hero"
          className="h-screen"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -80 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Hero />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div ref={scrollContainerRef} className="h-screen overflow-y-auto">
            <OtherSections />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </>
);

}
