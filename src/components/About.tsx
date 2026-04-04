import { motion } from "framer-motion";

export default function About() {
  const workExperience = [
    {
      role: "Full-stack Developer",
      company: "Tata Memorial Hospital",
      period: "06/2024 - Present",
      achievements: [
        "Vehicle Management System: 80% efficiency improvement",
        "ROIS Task Tracking: Eliminated manual follow-ups",
        "OPD Appointments: 50-60% reduced patient crowding"
      ]
    },
    {
      role: "Intern",
      company: "Tata Memorial Centre",
      period: "03/2024 - 06/2024",
      achievements: [
        "Hospital web applications using C#",
        "Database operations & form validations",
        "Bug fixes and module enhancements"
      ]
    }
  ];

  const skillsCategories = [
    {
      label: "Frontend",
      skills: ["React.js", "TypeScript", "Tailwind CSS", "Bootstrap"]
    },
    {
      label: "Backend",
      skills: ["ASP.NET Core", "Node.js", "Express.js", "RESTful API"]
    },
    {
      label: "Databases",
      skills: ["SQL Server", "MongoDB", "DB2", "PostgreSQL"]
    },
    { label: "Tools", skills: ["Git", "Postman", "Azure", "Gitlab"] }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-[clamp(1rem,4vw,4rem)] py-[clamp(4rem,10vw,8rem)] bg-linear-to-b from-[#111318] to-[#0b0d10]">
      <div className="max-w-6xl w-full space-y-[clamp(3rem,8vw,5rem)]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-[clamp(0.5rem,1.5vw,1rem)]"
        >
          <h2 className="font-semibold text-white text-[clamp(2rem,5vw,3.2rem)]">
            About Me
          </h2>
          <div className="flex items-center gap-3">
            <div className="h-1 w-[clamp(2rem,10vw,4rem)] bg-gradient-to-r from-cyan-500 to-transparent" />
            <p className="text-slate-400 text-[clamp(0.9rem,2.5vw,1.1rem)]">
              Full Stack Developer | 2 Years Experience
            </p>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-300 leading-relaxed text-[clamp(0.95rem,2.5vw,1.05rem)] max-w-3xl"
        >
          I build scalable, user-focused applications that solve real-world
          problems. With 2 years in healthcare tech, I specialize in
          transforming complex workflows into clean, intuitive interfaces. My
          passion lies in writing maintainable code and delivering solutions
          teams can depend on.
        </motion.p>

        {/* Work Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="space-y-[clamp(1.5rem,4vw,2rem)]"
        >
          <h3 className="text-white font-semibold text-[clamp(1.3rem,3vw,1.8rem)]">
            Experience
          </h3>
          <div className="space-y-[clamp(1rem,3vw,1.5rem)]">
            {workExperience.map((job, idx) =>
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative pl-[clamp(1.5rem,5vw,2.5rem)] border-l border-slate-600 hover:border-cyan-500 transition-colors duration-300"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1.5 rounded-full bg-cyan-500 group-hover:scale-125 transition-transform duration-300 shadow-lg shadow-cyan-500/50" />

                <div className="space-y-[clamp(0.3rem,1vw,0.5rem)]">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h4 className="text-white font-semibold text-[clamp(1rem,2.5vw,1.2rem)]">
                        {job.role}
                      </h4>
                      <p className="text-cyan-400 text-[clamp(0.9rem,2vw,1rem)]">
                        {job.company}
                      </p>
                    </div>
                    <p className="text-slate-500 text-[clamp(0.85rem,2vw,0.95rem)] md:text-right">
                      {job.period}
                    </p>
                  </div>
                  <ul className="space-y-1 text-slate-300 text-[clamp(0.9rem,2vw,0.95rem)]">
                    {job.achievements.map((achievement, i) =>
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">▪</span>
                        <span>
                          {achievement}
                        </span>
                      </li>
                    )}
                  </ul>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="space-y-[clamp(1.5rem,4vw,2rem)]"
        >
          <h3 className="text-white font-semibold text-[clamp(1.3rem,3vw,1.8rem)]">
            Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[clamp(1rem,3vw,1.5rem)]">
            {skillsCategories.map((category, idx) =>
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative rounded-lg bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-[clamp(1rem,3vw,1.5rem)] hover:border-cyan-500/50 hover:bg-white/[0.08] transition-all duration-300"
              >
                <h4 className="text-cyan-400 font-semibold text-[clamp(0.95rem,2.5vw,1.1rem)] mb-[clamp(0.75rem,2vw,1rem)]">
                  {category.label}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill =>
                    <span
                      key={skill}
                      className="px-2 py-1 text-[clamp(0.8rem,2vw,0.9rem)] rounded bg-slate-800/40 text-slate-300 hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 sm:grid-cols-3 gap-[clamp(1rem,3vw,1.5rem)]"
        >
          {[
            { number: "2+", label: "Years Experience" },
            { number: "50+", label: "Staff Trained" },
            { number: "90%", label: "Manual Work Reduced" }
          ].map((metric, idx) =>
            <motion.div
              key={idx}
              variants={itemVariants}
              className="text-center p-[clamp(1.5rem,4vw,2rem)] rounded-lg border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-transparent hover:border-cyan-400 transition-all duration-300"
            >
              <div className="text-[clamp(2rem,6vw,3.5rem)] font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
                {metric.number}
              </div>
              <p className="text-slate-400 text-[clamp(0.9rem,2.5vw,1rem)] mt-2">
                {metric.label}
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
