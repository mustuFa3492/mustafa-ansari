import { LayoutTextFlip } from "../ui/layout-text-flip";

export default function HeroRight() {
  return (
    <div className="text-slate-200 space-y-4 text-center md:text-left">

      <h1 className="
        text-3xl
        sm:text-4xl
        md:text-5xl
        lg:text-6xl
        font-semibold
        tracking-tight
      ">
        Hey there, It's Mustufa
      </h1>

      <LayoutTextFlip
          text="Full-stack developer focused on "
          words={["React", "ASP.Net core", "SQL server", "Node", "Tailwind CSS"]}
        />

    </div>
  );
}
