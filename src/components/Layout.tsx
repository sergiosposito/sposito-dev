import { motion } from "motion/react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { profileData } from "../data/profile";

export function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = ["about", "experience", "projects"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: "Sobre", href: "#about" },
    { name: "Experiência", href: "#experience" },
    { name: "Projetos", href: "#projects" },
  ];

  return (
    <div 
      className="min-h-screen bg-[#0f172a] text-slate-400 font-sans selection:bg-teal-300 selection:text-teal-900 leading-relaxed"
      style={{
        // @ts-ignore
        "--x": `${mousePos.x}px`,
        "--y": `${mousePos.y}px`,
      } as React.CSSProperties}
    >
      {/* Background Spotlight */}
      <div className="fixed inset-0 pointer-events-none spotlight z-20" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-24">
          
          {/* Left Column: Fixed Header & Nav */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 py-12 z-30">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-200">
                <a href="/">{profileData.name}</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Especialista em Engenharia de Software
              </h2>
              <p className="mt-4 max-w-xs leading-normal">
                Construindo sistemas de alta carga, escaláveis e resilientes para ecossistemas digitais complexos.
              </p>

              <nav className="hidden lg:block mt-16 w-max">
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a 
                        href={link.href}
                        className={`group nav-link ${activeSection === link.href.slice(1) ? "nav-link-active" : ""}`}
                      >
                        <span className="nav-link-line" />
                        <span className="text-xs font-bold uppercase tracking-widest transition-all">
                          {link.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <ul className="ml-1 mt-8 flex items-center gap-5">
              <li>
                <a 
                  href={profileData.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-slate-400 hover:text-slate-200 transition-colors"
                >
                  <Github size={24} />
                </a>
              </li>
              <li>
                <a 
                  href={profileData.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-slate-400 hover:text-slate-200 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${profileData.email}`}
                  className="text-slate-400 hover:text-slate-200 transition-colors"
                >
                  <Mail size={24} />
                </a>
              </li>
            </ul>
          </header>

          {/* Right Column: Scrollable Content */}
          <main className="lg:w-1/2 lg:py-24 py-12 flex flex-col gap-24 md:gap-32 z-30">
            
            {/* About Section */}
            <section id="about" className="scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0f172a]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Sobre</h2>
              </div>
              <div>
                <p className="mb-4">
                  Há mais de uma década atuando no desenvolvimento de software, especializei-me na construção e evolução de plataformas de mídia de altíssimo tráfego, como <span className="text-slate-200 font-medium">CNN Brasil</span> e <span className="text-slate-200 font-medium">VEJA</span>. 
                </p>
                <p className="mb-4">
                  Meu foco principal hoje é a intersecção entre performance técnica extrema e resiliência arquitetural. Acredito que sistemas complexos exigem não apenas código limpo, mas uma compreensão profunda do domínio de negócio e das restrições de infraestrutura.
                </p>
                <p>
                  Quando não estou desenhando diagramas de arquitetura ou otimizando gargalos de performance, estou compartilhando conhecimento técnico com times seniores e ajudando a definir roadmaps de tecnologia de longo prazo.
                </p>
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0f172a]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experiência</h2>
              </div>
              <ol className="group/list flex flex-col gap-12">
                {profileData.experiences.map((exp) => (
                  <li key={`${exp.company}-${exp.role}`} className="mb-1">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                        {exp.period}
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <div>
                            <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-base">
                              {exp.role} · {exp.company}
                              <ExternalLink size={14} className="ml-1 inline-block shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                            </span>
                          </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          {exp.description}
                        </p>
                        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                          {exp.skills.map((skill) => (
                            <li key={skill} className="tech-badge">
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* Projects Section */}
            <section id="projects" className="scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0f172a]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projetos</h2>
              </div>
              <ul className="group/list flex flex-col gap-12">
                {profileData.projects.map((project) => (
                  <li key={project.title}>
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                      <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3>
                          <a 
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" 
                            href={project.link} 
                            target="_blank" 
                            rel="noreferrer"
                          >
                            <span className="absolute -inset-x-4 -inset-y-4 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                            <span>{project.title}</span>
                            <ExternalLink size={14} className="ml-1 inline-block shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          {project.description}
                        </p>
                        <ul className="mt-4 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <li key={tag} className="tech-badge">
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Footer */}
            <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
              <p>
                Construído com <span className="text-slate-400 font-medium whitespace-nowrap">React</span>, <span className="text-slate-400 font-medium whitespace-nowrap">Tailwind CSS</span> e <span className="text-slate-400 font-medium whitespace-nowrap">Lucide React</span>. Inspirado no design de Brittany Chiang.
              </p>
              <p className="mt-4">
                © {new Date().getFullYear()} Sérgio Sposito. Todos os direitos reservados.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
