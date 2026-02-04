import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IntroSection from "./IntroSection";
import MainSection from "./components/MainSection";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="relative h-screen bg-linear-to-b from-[#111318] to-[#0b0d10]">
      {/* Main Page */}
      {!showIntro &&
        <motion.div
          initial={{ opacity: 0, y: "10%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{
            duration: 0.9,
            ease: "easeOut"
          }}
          className="h-full absolute inset-0"
        >
          <MainSection />
        </motion.div>}

      <AnimatePresence>
        {showIntro &&
          <motion.div
            className="absolute inset-0 z-50"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <IntroSection onFinish={() => setShowIntro(false)} />
          </motion.div>}
      </AnimatePresence>
    </div>
  );
}
