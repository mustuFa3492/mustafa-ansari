export default function HeroRight() {
  return (
    <div className="text-slate-200 text-center md:text-left space-y-2">
      
      <p className="text-[clamp(1.5rem,2vw,2.5rem)] tracking-widest text-slate-400">
        Hey there!
      </p>

      <h1 className="font-semibold tracking-tight text-[clamp(2.2rem,4vw,3.8rem)]">
        It&apos;s <span className="text-white">Mustufa</span>
      </h1>

      <p className="text-slate-400 max-w-md mx-auto md:mx-0">
        I build software that people actually use —  
        with a strong focus on clean UI and real-world impact.
      </p>

      <div className="pt-4">
        <span className="text-slate-500 text-sm">
          Scroll to explore ↓
        </span>
      </div>

    </div>
  );
}