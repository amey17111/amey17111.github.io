import { useEffect, useState } from 'react'

const projects = [
  {
    number: '01',
    type: 'GENAI PLATFORM',
    title: 'Knowledge systems that answer with evidence.',
    description:
      'RAG services that turn messy internal knowledge into fast, reliable product experiences.',
    tags: ['Python', 'FastAPI', 'LLM / RAG'],
    tone: 'amber',
  },
  {
    number: '02',
    type: 'DATA ENGINEERING',
    title: 'Pipelines built for the decisions after the dashboard.',
    description:
      'Production-grade lakehouse workflows that make high-volume data useful, observable, and on time.',
    tags: ['PySpark', 'Databricks', 'AWS'],
    tone: 'blue',
  },
  {
    number: '03',
    type: 'FULL-STACK PRODUCT',
    title: 'Interfaces for complex systems.',
    description:
      'Clear React products over powerful APIs — built to make technical workflows feel intuitive.',
    tags: ['React', 'TypeScript', 'APIs'],
    tone: 'violet',
  },
]

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4">
      <path d="M4 16 16 4M7 4h9v9" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function App() {
  const [paletteOpen, setPaletteOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setPaletteOpen((open) => !open)
      }
      if (event.key === 'Escape') setPaletteOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const goTo = (id: string) => {
    setPaletteOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#0d0d0c] text-[#f1f0ec]">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/[0.08] bg-[#0d0d0c]/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#top" className="flex items-center gap-3 text-sm font-semibold tracking-tight">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-[#e7a84b] text-xs font-bold text-[#17130d]">A</span>
            
          </a>
          <div className="hidden items-center gap-9 text-[11px] font-medium uppercase tracking-[0.16em] text-white/55 md:flex">
            <a className="transition hover:text-[#e7a84b]" href="#work">Selected work</a>
            <a className="transition hover:text-[#e7a84b]" href="#systems">Systems</a>
            <a className="transition hover:text-[#e7a84b]" href="#contact">Contact</a>
          </div>
          <button
            onClick={() => setPaletteOpen(true)}
            className="flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-[11px] text-white/55 transition hover:border-[#e7a84b]/60 hover:text-white"
          >
            <span className="hidden sm:inline">Explore</span><span>⌘</span><span>K</span>
          </button>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-7xl px-6 lg:px-10">
        <section className="relative flex min-h-[780px] flex-col justify-center pb-20 pt-36 lg:min-h-[860px]">
          <div className="pointer-events-none absolute -right-40 top-32 h-[580px] w-[580px] rounded-full bg-[#e7a84b]/[0.08] blur-[120px]" />
          <p className="mb-8 flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-[#e7a84b]">
            <span className="h-px w-8 bg-[#e7a84b]" /> Full-stack · GenAI · Data
          </p>
          <h1 className="max-w-5xl text-[clamp(3.5rem,9vw,8.5rem)] font-medium leading-[0.88] tracking-[-0.07em]">
            I build the
            <br />
            <span className="text-white/35">systems</span> behind
            <br />
            <em className="font-serif font-normal text-[#e7a84b]">better ideas.</em>
          </h1>
          <div className="mt-12 flex flex-col justify-between gap-8 border-t border-white/15 pt-6 sm:flex-row sm:items-start">
            <p className="max-w-sm text-base leading-relaxed text-white/55">
              Engineer focused on turning ambitious ideas into useful products — from data pipelines and APIs to intelligent interfaces.
            </p>
            <a href="#work" className="group flex items-center gap-3 text-sm font-medium">
              See selected work
              <span className="grid h-9 w-9 place-items-center rounded-full border border-white/25 transition group-hover:border-[#e7a84b] group-hover:bg-[#e7a84b] group-hover:text-[#17130d]"><ArrowUpRight /></span>
            </a>
          </div>
          <div className="absolute bottom-10 right-0 hidden items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/30 lg:flex">
            <span className="h-12 w-px bg-white/20" /> Scroll to explore
          </div>
        </section>

        <section id="systems" className="border-t border-white/15 py-24">
          <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row">
            <div>
              <p className="eyebrow">01 / The approach</p>
              <h2 className="mt-4 max-w-xl text-4xl leading-tight tracking-[-0.04em] md:text-5xl">From raw signal to real product.</h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/45">The best work lives at the intersection of strong infrastructure and thoughtful experience.</p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
            {[
              ['01', 'Ingest', 'APIs · Events · Cloud'],
              ['02', 'Transform', 'Spark · Databricks'],
              ['03', 'Intelligence', 'LLMs · RAG · Agents'],
              ['04', 'Experience', 'React · Products'],
            ].map(([number, title, text]) => (
              <div key={number} className="bg-[#121211] p-6 transition hover:bg-[#191815]">
                <span className="text-xs text-[#e7a84b]">{number}</span>
                <h3 className="mt-16 text-xl">{title}</h3>
                <p className="mt-2 text-xs text-white/40">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="border-t border-white/15 py-24">
          <div className="mb-14 flex items-end justify-between">
            <div>
              <p className="eyebrow">02 / Selected work</p>
              <h2 className="mt-4 text-4xl tracking-[-0.04em] md:text-5xl">Built with intent.</h2>
            </div>
            <span className="hidden text-xs text-white/35 sm:block">01 — 03</span>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.number} className={`project-card ${project.tone}`}>
                <div className="flex items-start justify-between text-[10px] uppercase tracking-[0.15em] text-white/45">
                  <span>{project.type}</span><span>{project.number}</span>
                </div>
                <div className="project-art" aria-hidden="true"><span /><span /><span /></div>
                <h3 className="max-w-xs text-2xl leading-tight tracking-[-0.03em]">{project.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/50">{project.description}</p>
                <div className="mt-7 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-white/15 py-24">
          <p className="eyebrow">03 / Toolkit</p>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <h2 className="max-w-lg text-4xl leading-[1.05] tracking-[-0.05em] md:text-6xl">The right tool for the actual problem.</h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-5 text-sm text-white/55 sm:grid-cols-3">
              {['Python', 'FastAPI', 'React / TS', 'PySpark', 'Databricks', 'AWS', 'Azure', 'Postgres', 'Docker', 'LLM APIs', 'RAG / Agents', 'CI / CD'].map((skill) => <span key={skill} className="border-b border-white/10 pb-3">{skill}</span>)}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/15 py-28">
          <p className="eyebrow">04 / Start a conversation</p>
          <h2 className="mt-6 max-w-3xl text-5xl leading-[0.95] tracking-[-0.06em] md:text-8xl">Have a hard problem?<br /><em className="font-serif font-normal text-[#e7a84b]">Let’s make it useful.</em></h2>
          <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center">
            <a href="mailto:hello@ameylabs.me" className="inline-flex w-fit items-center gap-3 rounded-full bg-[#e7a84b] px-6 py-3 text-sm font-semibold text-[#17130d] transition hover:bg-[#f2c272]">hello@ameylabs.me <ArrowUpRight /></a>
            <a href="https://github.com/amey17111" className="text-sm text-white/50 transition hover:text-white">GitHub ↗</a>
            <a href="https://www.linkedin.com" className="text-sm text-white/50 transition hover:text-white">LinkedIn ↗</a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-xs text-white/30 lg:px-10">
        <div className="mx-auto flex max-w-7xl justify-between"><span>© 2026 </span><span>Built for the next thing.</span></div>
      </footer>

      {paletteOpen && (
        <div className="fixed inset-0 z-50 grid place-items-start bg-black/70 px-5 pt-[18vh]" onClick={() => setPaletteOpen(false)}>
          <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-white/15 bg-[#181816] shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="border-b border-white/10 px-5 py-4 text-sm text-white/45">Jump to...</div>
            {[
              ['Selected work', 'work'],
              ['Systems & toolkit', 'systems'],
              ['Contact Amey', 'contact'],
            ].map(([label, id], index) => (
              <button key={id} onClick={() => goTo(id)} className="flex w-full items-center justify-between px-5 py-4 text-left text-sm transition hover:bg-white/10">
                <span><span className="mr-4 text-xs text-[#e7a84b]">0{index + 1}</span>{label}</span><span className="text-white/30">↵</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
