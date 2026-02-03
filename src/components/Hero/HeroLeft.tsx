import Lottie from "lottie-react";
import Avatar from "../../assets/Avatar.json";

export default function HeroLeft() {

  return (
    <div className="flex justify-center items-center">
      <div
        className="
          w-[clamp(14rem,20vw,24rem)]
          h-[clamp(14rem,20vw,24rem)]
          rounded-full
          bg-white/5
          border border-white/10
          backdrop-blur-sm
          flex items-center justify-center
        "
      >
          <Lottie animationData={Avatar} loop={true} />
      </div>
    </div>
  );
}