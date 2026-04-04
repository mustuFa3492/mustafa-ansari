import Lottie from "lottie-react";
import { motion } from "framer-motion";
import Avatar from "../assets/Avatar.json";

export default function HeroLeft() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      className="flex justify-center items-center"
    >
      {/* Animated glow background */}
      <motion.div
        animate={{
          boxShadow: [
            "0 0 20px rgba(34, 211, 238, 0.3)",
            "0 0 40px rgba(34, 211, 238, 0.5)",
            "0 0 20px rgba(34, 211, 238, 0.3)"
          ]
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute w-[clamp(14rem,20vw,24rem)] h-[clamp(14rem,20vw,24rem)] rounded-full"
      />

      {/* Avatar container with floating animation */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <div
          className="
            w-[clamp(14rem,20vw,24rem)]
            h-[clamp(14rem,20vw,24rem)]
            rounded-full
            bg-gradient-to-br from-white/10 to-white/5
            border-2 border-cyan-500/30
            backdrop-blur-sm
            flex items-center justify-center
            shadow-2xl shadow-cyan-500/20
            hover:border-cyan-400/50 transition-all duration-300
          "
        >
          <Lottie animationData={Avatar} loop={true} />
        </div>
      </motion.div>
    </motion.div>
  );
}