"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { 
  MapPin, Mail, Linkedin, Download, Award, 
  Briefcase, GraduationCap, Code, Terminal, BookOpen, Github,
  FolderOpen, ExternalLink, FileText
} from "lucide-react";
import SplashScreen from "@/components/SplashScreen";

const projects = [
  {
    id: "genbind",
    title: "GenBind: AI-Driven Molecular Generation & Protein Binding Explorer",
    summary: "Created an AI-driven platform for molecular generation and protein binding prediction using deep learning models (VAE, GAN, BERT) with Flask and React.",
    github: "https://github.com/Shravani210" // 🔁 Replace with GenBind repo link when available
  },
  {
    id: "powerbi",
    title: "Power BI Dashboard – Global Population Trends Analysis",
    summary: "Built an interactive Power BI dashboard analyzing global population data from 200+ countries using SQL, DAX, and automated ETL pipelines to uncover demographic trends.",
    github: "https://github.com/Shravani210/Power-BI-dashboard-for-world-population-analysis-"
  },
  {
    id: "heartdisease",
    title: "Heart Disease Prediction Using Machine Learning",
    summary: "Developed a heart disease prediction model using Scikit-learn with feature engineering and hyperparameter tuning, achieving 85% accuracy.",
    github: "https://github.com/Shravani210/Heart-Disease-Prediction"
  }
];

const certifications = [
  {
    id: "webdev",
    title: "Web Development",
    file: "https://drive.google.com/file/d/1a8sjw97MbOuhihvpNH2_qp29cSqujOSz/preview"
  },
  {
    id: "deloitte",
    title: "Deloitte Data Analytics Job Simulation",
    file: "https://drive.google.com/file/d/1pnWJ9SCUYe23i3DToUONhuhaGXvsD3mb/preview"
  },
  {
    id: "Power BI",
    title: "Power BI",
    file: "https://drive.google.com/file/d/1azVEeu0KAVwpGnfp8U5vGxTm3vDo4DR2/view?usp=drive_link"
  }
];

export default function Portfolio() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "experience", "education", "Projects", "skills"];
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <SplashScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          {/* Bottom Nav */}
          <motion.nav
            initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 glass-panel rounded-full px-6 py-3 flex items-center gap-6 shadow-2xl border border-white/10"
          >
            {[
              { id: "hero", icon: Terminal, label: "About" },
              { id: "experience", icon: Briefcase, label: "Experience" },
              { id: "education", icon: GraduationCap, label: "Education" },
              { id: "Projects", icon: FolderOpen, label: "Projects" },
              { id: "skills", icon: Code, label: "Skills" }
            ].map((item) => (
              <a
                key={item.id} href={`#${item.id}`}
                className={`relative group p-2 rounded-full transition-all ${activeSection === item.id ? "text-cyan-400" : "text-slate-400 hover:text-white"}`}
              >
                <item.icon className="w-5 h-5" />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {item.label}
                </span>
                {activeSection === item.id && (
                  <motion.span layoutId="nav-indicator" className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full text-glow" />
                )}
              </a>
            ))}
          </motion.nav>

          <main className="relative z-10 max-w-5xl mx-auto px-6 py-20 pb-40 space-y-40">

            {/* Hero */}
            <section id="hero" className="min-h-[85vh] flex flex-col justify-center relative pt-10">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="space-y-8">

                <div className="space-y-4">
                  <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-white">
                    Shravani <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-glow">Deshmukh</span>
                  </h1>
                  <h2 className="text-xl md:text-3xl text-slate-400 font-light tracking-wide">Artificial Intelligence & Data Science Student</h2>
                </div>

                <p className="max-w-2xl text-slate-300 leading-relaxed text-lg md:text-xl font-light">
                  I'm a passionate and dedicated learner exploring the fields of AI,
                  Machine Learning, and Data Science. I enjoy understanding data,
                  learning new technologies, and improving my analytical skills.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a href="#experience" className="inline-flex justify-center items-center px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:-translate-y-1">
                    View Experience
                  </a>

                 <a href="https://drive.google.com/file/d/1h7xbI8bEsGUOTyPamHg5sU3bF3K1hi1K/view?usp=drive_link"
  target="_blank"
  rel="noreferrer"
  className="inline-flex justify-center items-center px-8 py-4 glass-card hover:bg-white/10 rounded-xl transition-all duration-300 font-medium hover:-translate-y-1"
>
  <Download className="w-5 h-5 mr-2" /> Download Resume
</a>
                </div>

                <div className="flex flex-wrap gap-6 pt-10 text-slate-400">
                  <div className="flex items-center gap-2 text-sm glass-panel px-4 py-2 rounded-lg"><MapPin className="w-4 h-4 text-cyan-500" /> Pune, Maharashtra, India</div>
                  <a href="mailto:shravani.deshmukh5577@gmail.com" className="flex items-center gap-2 text-sm glass-panel px-4 py-2 rounded-lg hover:text-cyan-400 hover:border-cyan-500/30 transition-all"><Mail className="w-4 h-4 text-cyan-500" /> shravani.deshmukh5577@gmail.com</a>
                  <a href="https://www.linkedin.com/in/shravani-deshmukh-ai" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm glass-panel px-4 py-2 rounded-lg hover:text-cyan-400 hover:border-cyan-500/30 transition-all"><Linkedin className="w-4 h-4 text-cyan-500" /> LinkedIn</a>
                  <a href="https://github.com/Shravani210" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm glass-panel px-4 py-2 rounded-lg hover:text-cyan-400 hover:border-cyan-500/30 transition-all"><Github className="w-4 h-4 text-cyan-500" /> GitHub</a>
                </div>
              </motion.div>
            </section>

            {/* Experience */}
            <section id="experience" className="scroll-mt-32">
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
                <h3 className="text-3xl md:text-4xl font-bold flex items-center gap-4 mb-10"><div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20"><Briefcase className="w-6 h-6 text-cyan-400" /></div> Experience</h3>
                <div className="relative border-l border-slate-700/50 ml-6 md:ml-8 pl-8 md:pl-12 py-4 space-y-8">
                  <div className="relative group">
                    <div className="absolute -left-[41px] md:-left-[57px] top-1 w-5 h-5 bg-slate-950 border-2 border-cyan-500 rounded-full group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-300" />
                    <div className="glass-card rounded-2xl p-6 md:p-8 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-1">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-4">
                        <div>
                          <h4 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">Data Science Intern</h4>
                          <p className="text-lg text-slate-400 mt-1 font-medium">Prodigy InfoTech</p>
                        </div>
                        <div className="inline-flex items-center justify-center text-cyan-400 font-mono text-sm bg-cyan-500/10 px-4 py-2 rounded-lg border border-cyan-500/20 whitespace-nowrap">July 2025 - July 2025</div>
                      </div>
                      <p className="text-slate-300 leading-relaxed text-lg">Executed data science workflows, model building, and analytical problem-solving to extract actionable insights from complex datasets.</p>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute -left-[41px] md:-left-[57px] top-1 w-5 h-5 bg-slate-950 border-2 border-cyan-500 rounded-full group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-300" />
                    <div className="glass-card rounded-2xl p-6 md:p-8 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-1">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-4">
                        <div>
                          <h4 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">UI/UX Intern</h4>
                          <p className="text-lg text-slate-400 mt-1 font-medium">Freelance</p>
                        </div>
                        <div className="inline-flex items-center justify-center text-cyan-400 font-mono text-sm bg-cyan-500/10 px-4 py-2 rounded-lg border border-cyan-500/20 whitespace-nowrap">Jan 2025 - March 2025</div>
                      </div>
                      <p className="text-slate-300 leading-relaxed text-lg">Applied user-centered design principles to build responsive UI prototypes and deliver high-quality website mockups.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Education */}
            <section id="education" className="scroll-mt-32">
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
                <h3 className="text-3xl md:text-4xl font-bold flex items-center gap-4 mb-10"><div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20"><GraduationCap className="w-6 h-6 text-cyan-400" /></div> Education</h3>
                <div className="glass-card rounded-2xl p-6 md:p-8 hover:border-cyan-500/30 transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-cyan-500/10 transition-colors" />
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 relative z-10">
                    <div>
                      <h4 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">AISSMS Institute of Information Technology</h4>
                      <p className="text-lg text-slate-300 mt-2 font-medium">B tech, Artificial Intelligence and Data Science</p>
                    </div>
                    <div className="inline-flex items-center justify-center text-slate-300 font-mono text-sm bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700 whitespace-nowrap">2022 - 2026</div>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Projects — click opens GitHub */}
            <section id="Projects" className="scroll-mt-32">
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
                <h3 className="text-3xl md:text-4xl font-bold flex items-center gap-4 mb-2">
                  <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20"><FolderOpen className="w-6 h-6 text-cyan-400" /></div> Projects
                </h3>
                
                <div className="relative border-l border-slate-700/50 ml-6 md:ml-8 pl-8 md:pl-12 py-4 space-y-6">
                  {projects.map((project) => (
                    <div key={project.id} className="relative group">
                      <div className="absolute -left-[41px] md:-left-[57px] top-1 w-5 h-5 bg-slate-950 border-2 border-cyan-500 rounded-full group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-300" />
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="block glass-card rounded-2xl p-6 md:p-8 hover:border-cyan-500/40 transition-all duration-500 hover:-translate-y-1 cursor-pointer"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {project.title}
                          </h4>
                          <div className="shrink-0 mt-1 flex items-center gap-1 text-slate-400 group-hover:text-cyan-400 transition-colors">
                            <Github className="w-5 h-5" />
                            <ExternalLink className="w-4 h-4" />
                          </div>
                        </div>
                        <p className="text-slate-400 leading-relaxed mt-2 text-base">{project.summary}</p>
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Achievements */}
            <section id="skills" className="scroll-mt-32">
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
                <h3 className="text-3xl md:text-4xl font-bold flex items-center gap-4 mb-10">
                  <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20"><Code className="w-6 h-6 text-cyan-400" /></div> Achievements
                </h3>

                <div className="space-y-6">

                  {/* Certifications — click opens certificate on Google Drive */}
                  <div className="glass-card rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300">
                    <h4 className="text-xl font-bold text-white flex items-center gap-2 mb-2"><Award className="w-5 h-5 text-cyan-500" /> Certifications</h4>
                    
                    <ul className="space-y-3">
                      {certifications.map((cert) => (
                        <li key={cert.id}>
                          <a
                            href={cert.file}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-between gap-4 p-3 glass-panel rounded-lg hover:border-cyan-500/30 transition-all duration-300 group"
                          >
                            <div className="flex items-center gap-4">
                              <div className="w-2 h-2 rounded-full bg-cyan-500 shrink-0 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all" />
                              <span className="text-slate-200 font-medium text-lg group-hover:text-cyan-400 transition-colors">{cert.title}</span>
                            </div>
                            <div className="flex items-center gap-1 text-slate-400 group-hover:text-cyan-400 transition-colors shrink-0">
                              <FileText className="w-4 h-4" />
                              <ExternalLink className="w-3 h-3" />
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Publications — click opens PDF on Google Drive */}
                  <a
                    href="https://drive.google.com/file/d/1jUuUrAVkeMYjlCD0p2aqDucIk0I9vNve/preview"
                    target="_blank"
                    rel="noreferrer"
                    className="block glass-card rounded-2xl p-8 hover:border-indigo-500/40 transition-all duration-300 relative overflow-hidden group cursor-pointer"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="flex items-start justify-between relative z-10 mb-4">
                      <h4 className="text-xl font-bold text-white flex items-center gap-2 group-hover:text-indigo-300 transition-colors">
                        <BookOpen className="w-5 h-5 text-indigo-400" /> Publications
                      </h4>
                      <div className="flex items-center gap-1 text-slate-400 group-hover:text-indigo-300 transition-colors shrink-0">
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="relative z-10">
                      <h5 className="text-lg font-bold text-indigo-300 mb-2">GenBind</h5>
                      <p className="text-slate-300 leading-relaxed">AI-driven molecular generation and protein binding explorer.</p>
                    </div>
                  </a>

                </div>
              </motion.div>
            </section>

          </main>
        </>
      )}
    </>
  );
}