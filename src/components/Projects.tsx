import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Vehicle Management System",
      description:
        "Streamlined fleet tracking and maintenance system for hospital operations. Reduced administrative overhead and improved vehicle utilization.",
      impact: "80% efficiency improvement",
      tech: ["React.js", "ASP.NET Core", "SQL Server", "Tailwind CSS"],
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "ROIS Task Tracking",
      description:
        "Comprehensive task management platform that eliminated manual follow-ups and streamlined workflow coordination across hospital departments.",
      impact: "100% manual follow-up elimination",
      tech: ["React.js", "Node.js", "MongoDB", "Bootstrap"],
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "OPD Appointment System",
      description:
        "Intelligent patient scheduling system that reduces crowding and wait times. Improved patient experience and clinic efficiency.",
      impact: "50-60% patient crowding reduction",
      tech: ["React.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
      github: "#",
      live: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-[clamp(1rem,4vw,4rem)] py-[clamp(4rem,10vw,8rem)] bg-linear-to-b from-[#0b0d10] to-[#111318]">
      <div className="max-w-6xl w-full space-y-[clamp(3rem,8vw,5rem)]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-[clamp(0.5rem,1.5vw,1rem)]"
        >
          <h2 className="font-semibold text-white text-[clamp(2rem,5vw,3.2rem)]">
            Featured Projects
          </h2>
          <div className="flex items-center gap-3">
            <div className="h-1 w-[clamp(2rem,10vw,4rem)] bg-linear-to-r from-cyan-500 to-transparent" />
            <p className="text-slate-400 text-[clamp(0.9rem,2.5vw,1.1rem)]">
              Real-world solutions with measurable impact
            </p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[clamp(1.5rem,4vw,2rem)]"
        >
          {projects.map(project =>
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative h-full rounded-xl bg-linear-to-br from-white/5 to-white/2 border border-white/10 p-[clamp(1.5rem,4vw,2rem)] hover:border-cyan-500/50 hover:from-white/10 hover:to-white/5 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-300 pointer-events-none" />

              <div className="relative z-10 space-y-[clamp(1rem,3vw,1.5rem)] h-full flex flex-col">
                {/* Title */}
                <h3 className="text-white font-semibold text-[clamp(1.1rem,2.5vw,1.3rem)] line-clamp-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-[clamp(0.9rem,2vw,0.95rem)] leading-relaxed grow">
                  {project.description}
                </p>

                {/* Impact Badge */}
                <div className="flex items-center gap-2">
                  <div className="h-1 w-2 rounded-full bg-linear-to-r from-cyan-400 to-blue-500" />
                  <p className="text-cyan-400 text-[clamp(0.85rem,2vw,0.9rem)] font-medium">
                    {project.impact}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech =>
                    <span
                      key={tech}
                      className="px-2 py-1 text-[clamp(0.75rem,1.5vw,0.8rem)] rounded-md bg-slate-800/40 text-slate-300 border border-slate-700/50 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 group-hover:text-cyan-300 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/50 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400 transition-all duration-200 text-[clamp(0.85rem,2vw,0.9rem)]"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-linear-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 text-cyan-300 hover:text-cyan-100 transition-all duration-200 text-[clamp(0.85rem,2vw,0.9rem)]"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
