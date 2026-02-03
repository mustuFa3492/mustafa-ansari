import { useEffect, useState } from "react";
import Snowfall from "react-snowfall";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function HeroSection() {
  const [snowCount, setSnowCount] = useState(1);

  useEffect(() => {
    const delay = setTimeout(() => {
      const interval = setInterval(() => {
        setSnowCount(prev => Math.min(prev + 2, 20));
      }, 1200);

      return () => clearInterval(interval);
    }, 3000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-linear-to-b from-[#111318] to-[#0b0d10]">
      <Snowfall
        style={{ position: "absolute", inset: 0 }}
        color="#9fbcd1"
        snowflakeCount={snowCount}
      />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 min-h-screen items-center px-6 md:px-16 sm:px-10">
        <HeroLeft />
        <HeroRight />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,#000000_100%)] pointer-events-none" />
    </section>
  );
}