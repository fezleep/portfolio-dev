// app/page.tsx

"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Server,
  Cpu,
  Workflow,
  Cloud,
  Database,
  ArrowUpRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 60, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const core = [
  {
    icon: Server,
    title: "Backend",
    text: "APIs, services and system logic.",
  },
  {
    icon: Cpu,
    title: "Fullstack",
    text: "Interfaces connected to real workflows.",
  },
  {
    icon: Workflow,
    title: "Automation",
    text: "AI-assisted processes and integrations.",
  },
  {
    icon: Cloud,
    title: "Cloud",
    text: "Deployments, environments and infrastructure.",
  },
];

const stack = [
  "Python",
  "FastAPI",
  "Flask",
  "Node.js",
  "React",
  "SQL",
  "AWS",
  "GCP",
  "Docker",
  "OpenAI",
];

const projects = [
  {
    title: "CloseZap AI",
    desc: "AI sales assistant for WhatsApp.",
    detail: "FastAPI backend, React dashboard, lead qualification and automation workflows.",
    stack: ["FastAPI", "React", "OpenAI", "WhatsApp API"],
    link: "https://github.com/fezleep/closezap-ai",
    featured: true,
  },
  {
    title: "TMDB Movie API",
    desc: "Movie search API using external data.",
    detail: "Flask API consuming TMDb data and returning structured JSON responses.",
    stack: ["Python", "Flask", "REST API"],
    link: "https://github.com/fezleep/API-Consulta-Filmes-TMDB",
    featured: false,
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(130,72,255,.35),transparent_28%),radial-gradient(circle_at_80%_40%,rgba(168,85,247,.18),transparent_30%),linear-gradient(to_bottom,#020008,#000)]" />
      <div className="fixed inset-0 -z-10 bg-grid opacity-25" />
      <div className="live-line pointer-events-none fixed left-1/2 top-0 z-0 hidden h-full w-px origin-center bg-gradient-to-b from-transparent via-purple-500/30 to-transparent md:block" />

      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="text-lg font-bold tracking-tight">
            Felipe<span className="text-purple-400">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
            <a href="#core" className="hover:text-white">Core</a>
            <a href="#lab" className="hover:text-white">Lab</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#about" className="hover:text-white">About</a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-purple-400/40 px-5 py-2 text-sm text-purple-200 transition hover:bg-purple-500/20"
          >
            Contact
          </a>
        </nav>
      </header>

      <section className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-16 px-6 pt-32 lg:grid-cols-[1.1fr_.9fr]">
  <motion.div
    initial="hidden"
    animate="visible"
    variants={fadeUp}
    transition={{ duration: 0.8 }}
  >
    <div className="mb-6 inline-flex rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-200 shadow-[0_0_40px_rgba(168,85,247,.25)]">
      Software Engineer
    </div>

    <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.06em] md:text-7xl lg:text-8xl">
      Backend, fullstack and cloud systems.
    </h1>

    <p className="mt-8 max-w-xl text-lg leading-8 text-white/55">
      Web developer at a non-profit, working with backend solutions,
      APIs and automation.
      <br /><br />
      Experience with Python, Node.js, cloud environments and data-driven systems.
    </p>

    <div className="mt-10 flex flex-wrap gap-4">
      <a
        href="#projects"
        className="group rounded-2xl bg-white px-6 py-4 font-bold text-black transition hover:scale-105 hover:shadow-[0_0_60px_rgba(168,85,247,.55)]"
      >
        View Projects
        <ArrowUpRight className="ml-2 inline h-5 w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
      </a>

      <a
        href="#about"
        className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 font-bold text-white backdrop-blur transition hover:border-purple-400/60 hover:bg-purple-500/10"
      >
        About Me
      </a>

      <a
        href="/Felipe_Virginio_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-2xl border border-purple-400/40 px-6 py-4 font-bold text-purple-200 transition hover:bg-purple-500/20"
      >
        Download CV
      </a>
    </div>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, scale: 0.9, rotateX: 18 }}
    animate={{ opacity: 1, scale: 1, rotateX: 0 }}
    transition={{ duration: 1 }}
    className="relative"
  >
    <div className="absolute -inset-6 rounded-[2rem] bg-purple-500/20 blur-3xl" />

    <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl backdrop-blur-xl">
      <div className="rounded-[1.5rem] border border-white/10 bg-black/70 p-5">
        <div className="mb-5 flex gap-2">
          <span className="h-3 w-3 rounded-full bg-white/30" />
          <span className="h-3 w-3 rounded-full bg-white/20" />
          <span className="h-3 w-3 rounded-full bg-purple-400" />
        </div>

        <div className="space-y-4 font-mono text-sm text-white/70">
          <p><span className="text-purple-400">$</span> system.profile()</p>
          <p className="text-white">→ backend services</p>
          <p className="text-white">→ fullstack workflows</p>
          <p className="text-white">→ cloud environments</p>
          <p className="text-white">→ data layer ready</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <MiniPanel label="Role" value="engineer" />
        <MiniPanel label="Focus" value="systems" />
        <MiniPanel label="Stack" value="fullstack" />
        <MiniPanel label="Mode" value="build" />
      </div>
    </div>
  </motion.div>
</section>

      <Section id="core" title="Core">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {core.map((item) => (
            <RevealCard key={item.title}>
              <item.icon className="mb-6 h-8 w-8 text-purple-300" />
              <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
              <p className="text-white/55">{item.text}</p>
            </RevealCard>
          ))}
        </div>
      </Section>

      <Section id="lab" title="Technical Scope">
        <div className="grid gap-6 lg:grid-cols-3">
          <RevealCard>
            <CodeTitle title="APIs" code="GET /services" />
            <p className="mt-5 text-white/55">
              REST endpoints, integrations and structured responses.
            </p>
          </RevealCard>

          <RevealCard>
            <CodeTitle title="Automation" code="POST /workflows" />
            <p className="mt-5 text-white/55">
              AI-assisted flows, validation and process logic.
            </p>
          </RevealCard>

          <RevealCard>
            <CodeTitle title="Cloud & Data" code="deploy --cloud" />
            <p className="mt-5 text-white/55">
              Environments, SQL and production-ready structure.
            </p>
          </RevealCard>
        </div>
      </Section>

      <Section id="projects" title="Selected Work">
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -12, scale: 1.015 }}
              className={[
                "group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl transition",
                "hover:border-purple-400/60 hover:bg-purple-500/[0.08]",
                project.featured ? "min-h-[360px] lg:col-span-2" : "min-h-[360px]",
              ].join(" ")}
            >
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
                <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-purple-400 to-transparent" />
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-purple-500/25 blur-3xl" />
              </div>

              <div className="relative flex h-full flex-col justify-between">
                <div>
                  {project.featured && (
                    <span className="mb-6 inline-flex rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-purple-200">
                      Featured
                    </span>
                  )}

                  <h3 className="mb-4 text-3xl font-black tracking-[-0.04em] md:text-5xl">
                    {project.title}
                  </h3>

                  <p className="max-w-xl text-lg text-white/70">
                    {project.desc}
                  </p>

                  <p className="mt-3 max-w-xl text-white/40">
                    {project.detail}
                  </p>
                </div>

                <div>
                  <div className="mb-6 mt-10 flex flex-wrap gap-2">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-purple-400/30 bg-black/40 px-3 py-1 text-sm text-purple-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-2 text-sm font-bold text-purple-300 transition group-hover:text-white">
                    View repository
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </Section>

      <Section id="about" title="About">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:p-12"
        >
          <p className="max-w-4xl text-2xl font-semibold leading-relaxed tracking-tight text-white/80 md:text-4xl">
            I'm a software engineer working mainly with backend systems, APIs and automation.
          </p>

          <p className="mt-6 max-w-3xl text-white/60 leading-relaxed">
            Today I work as a web developer at a non-profit, where I deal with real problems — 
            building APIs, handling data, automating processes and making things actually work in production.
            <br /><br />
            I also work across frontend when needed, connecting interfaces to the backend and making sure everything flows correctly.
            <br /><br />
            Right now I'm expanding into cloud (AWS, GCP) and data, aiming to build more complete and scalable systems.
            <br /><br />
            I'm looking for environments where I can keep building, solving real problems and growing as an engineer.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-200"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </Section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-32">
        <div className="rounded-[2.5rem] border border-purple-400/20 bg-purple-500/10 p-10 text-center shadow-[0_0_120px_rgba(168,85,247,.18)] backdrop-blur-xl md:p-16">
          <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">
            Available for development roles.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-white/60">
            Software engineering, data, automation and cloud-focused opportunities.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Social href="mailto:virginio.9001@gmail.com" icon={Mail} label="Email" />
            <Social href="https://github.com/fezleep" icon={CodeIcon} label="GitHub" />
            <Social href="https://linkedin.com/in/fezleep" icon={NetworkIcon} label="LinkedIn" />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/40">
        © 2026 Felipe Virginio. Built with Next.js.
      </footer>
    </main>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-6 py-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        transition={{ duration: 0.7 }}
        className="mb-10"
      >
        <p className="mb-3 text-sm uppercase tracking-[0.4em] text-purple-300">
          / {id}
        </p>
        <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">
          {title}
        </h2>
      </motion.div>

      {children}
    </section>
  );
}

function RevealCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-purple-500/10 opacity-0 transition group-hover:opacity-100" />
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl opacity-0 transition group-hover:opacity-100" />
      <div className="relative">{children}</div>
    </motion.div>
  );
}

function CodeTitle({ title, code }: { title: string; code: string }) {
  return (
    <>
      <h3 className="mb-4 text-2xl font-bold">{title}</h3>
      <code className="rounded-xl border border-purple-400/20 bg-black/50 px-4 py-3 text-sm text-purple-200">
        {code}
      </code>
    </>
  );
}

function MiniPanel({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <p className="text-xs uppercase tracking-[0.25em] text-white/35">
        {label}
      </p>
      <p className="mt-2 font-mono text-purple-200">{value}</p>
    </div>
  );
}

function Social({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: any;
  label: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-6 py-4 font-bold transition hover:border-purple-400/50 hover:bg-purple-500/15"
    >
      <Icon className="h-5 w-5 text-purple-300 transition group-hover:scale-110" />
      {label}
    </a>
  );
}

function CodeIcon({ className }: { className?: string }) {
  return <span className={className}>{"</>"}</span>;
}

function NetworkIcon({ className }: { className?: string }) {
  return <span className={className}>in</span>;
}