import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroRight() {
  const [isTouch, setisTouch] = useState(false);

  useEffect(() => {
    setisTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  return (
    <div className="text-slate-200 text-center md:text-left space-y-6 flex flex-col justify-center h-full">
      {/* Greeting */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-[clamp(1.5rem,2vw,2.5rem)] tracking-widest text-slate-400"
      >
        Hey there!
      </motion.p>

      {/* Main Headline */}
      <div className="space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-semibold tracking-tight text-[clamp(2.2rem,4vw,3.8rem)] leading-tight"
        >
          It&apos;s{" "}
          <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text">
            Mustufa
          </span>
        </motion.h1>

        {/* Decorative accent line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-transparent rounded-full max-w-xs"
        />
      </div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-slate-300 max-w-md mx-auto md:mx-0 text-[clamp(0.95rem,2vw,1.05rem)] leading-relaxed"
      >
        I build software that people actually use — clean interfaces, real-world
        impact, transforming healthcare workflows
      </motion.p>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="pt-6"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-slate-500 text-sm">
            {isTouch ? "Swipe" : "Scroll"} to explore
          </span>
          <ChevronDown size={20} className="text-slate-500" />
        </motion.div>
      </motion.div>
    </div>
  );
}
