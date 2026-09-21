import { Link, useParams } from "react-router"
import { motion } from "motion/react"
import { ArchitectureStrip } from "../components/ArchitectureStrip"
import { getProject } from "../data/projects"

export function CaseStudy() {
  const { slug } = useParams()
  const project = slug ? getProject(slug) : undefined

  if (!project) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-24">
        <p className="text-mute">No case with that slug.</p>
        <Link to="/work" className="mt-4 inline-block font-mono text-sm text-amber">
          Back to work
        </Link>
      </div>
    )
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
      className="mx-auto max-w-3xl px-5 py-14"
    >
      <Link to="/work" className="font-mono text-[11px] text-mute hover:text-amber">
        ← Work
      </Link>
      <p className="mt-6 font-mono text-[11px] tracking-[0.2em] text-amber uppercase">
        {project.kind} · {project.year}
      </p>
      <h1 className="mt-3 text-4xl tracking-tight text-paper sm:text-5xl">
        {project.title}
      </h1>
      <p className="mt-4 text-lg text-mute">{project.summary}</p>

      <section className="mt-12">
        <h2 className="font-mono text-[11px] tracking-widest text-copper uppercase">
          Problem
        </h2>
        <p className="mt-3 text-paper/90">{project.problem}</p>
      </section>

      <section className="mt-10">
        <h2 className="font-mono text-[11px] tracking-widest text-copper uppercase">
          What I owned
        </h2>
        <ul className="mt-3 space-y-2 text-paper/90">
          {project.owned.map((item) => (
            <li key={item} className="border-l border-line pl-4">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="mb-3 font-mono text-[11px] tracking-widest text-copper uppercase">
          Architecture
        </h2>
        <ArchitectureStrip lanes={project.architecture} />
      </section>

      <section className="mt-10">
        <h2 className="font-mono text-[11px] tracking-widest text-copper uppercase">
          Result
        </h2>
        <p className="mt-3 text-paper/90">{project.result}</p>
      </section>

      <section className="mt-10">
        <h2 className="font-mono text-[11px] tracking-widest text-copper uppercase">
          Stack
        </h2>
        <p className="mt-3 font-mono text-sm text-mute">{project.stack.join(" · ")}</p>
      </section>
    </motion.article>
  )
}
