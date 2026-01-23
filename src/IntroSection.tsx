import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

type IntroSectionProps = {
  onFinish: () => void;
};

const words = [
  "Hello",
  "Hola",
  "नमस्ते",
  "سلام",
  "Bonjour",
  "નમસ્તે",
  "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
  "مرحبا",
  "こんにちは",
];

const WORD_INTERVAL = 200;

export default function IntroSection({ onFinish }: IntroSectionProps) {
  const [index, setIndex] = useState(0);
  const controls = useAnimation();

  // First word fade-in
  useEffect(() => {
    controls.set({ opacity: 0 });

    controls.start({
      opacity: 1,
      transition: { duration: 0.9, ease: "easeOut" },
    });
  }, []);

  useEffect(() => {
    if (index === words.length - 1) {
      const endTimer = setTimeout(onFinish, WORD_INTERVAL);
      return () => clearTimeout(endTimer);
    }

    const timer = setTimeout(() => {
      setIndex(prev => prev + 1);
    }, index===0 ? 500 : WORD_INTERVAL);

    return () => clearTimeout(timer);
  }, [index, onFinish]);

  return (
    <div className="h-screen bg-neutral-900 flex items-center justify-center">
      <motion.h1
        animate={controls}
        className="text-white text-6xl font-bold tracking-wider"
      >
        {words[index]}
      </motion.h1>
    </div>
  );
}
