export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center px-[clamp(1rem,4vw,4rem)] py-[clamp(4rem,10vw,8rem)] bg-linear-to-b from-[#111318] to-[#0b0d10]">
      <div className="max-w-5xl w-full space-y-[clamp(2rem,6vw,4rem)]">
        
        {/* Header */}
        <div className="text-center md:text-left space-y-[clamp(0.5rem,1.5vw,1rem)]">
          <h2 className="font-semibold text-white text-[clamp(1.8rem,4.5vw,2.8rem)]">
            About Me
          </h2>
          <p className="text-slate-400 text-[clamp(0.9rem,2.5vw,1.1rem)]">
            A little bit about who I am and how I work
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(1.5rem,5vw,3rem)] items-start">
          
          {/* Left: Story */}
          <div className="space-y-[clamp(1rem,3vw,1.5rem)] text-slate-300 leading-relaxed text-[clamp(0.95rem,2.8vw,1.05rem)]">
            <p>
              I’m a frontend-focused full stack developer working on production
              systems in a healthcare environment. My day-to-day work involves
              building clean interfaces, simplifying complex workflows, and
              making sure the software people use is reliable and easy to
              understand.
            </p>

            <p>
              I enjoy working with React and modern web tools, and I care a lot
              about UI polish, maintainable code, and real-world usability. I’m
              most comfortable turning requirements into practical solutions
              that teams can actually depend on.
            </p>
          </div>

          {/* Right: Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[clamp(0.8rem,3vw,1.2rem)]">
            
            {[
              {
                title: "What I focus on",
                desc: "Clean UI, responsive layouts, and simple, reliable logic.",
              },
              {
                title: "What I build",
                desc: "Real-world web applications used by actual teams.",
              },
              {
                title: "How I work",
                desc: "Clear requirements, clean code, and steady iteration.",
              },
              {
                title: "Current role",
                desc: "Working on enterprise systems in a healthcare environment.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="
                  rounded-xl
                  bg-white/5
                  border border-white/10
                  backdrop-blur-sm
                  p-[clamp(0.9rem,3vw,1.4rem)]
                "
              >
                <h3 className="text-white font-medium mb-[clamp(0.3rem,1vw,0.5rem)] text-[clamp(1rem,3vw,1.1rem)]">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-[clamp(0.85rem,2.5vw,0.95rem)]">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
