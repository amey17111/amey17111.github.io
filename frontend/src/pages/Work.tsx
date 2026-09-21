import { motion } from "motion/react"
import { ProjectCard } from "../components/ArchitectureStrip"
import { projects } from "../data/projects"

export function Work() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
      className="mx-auto max-w-6xl px-5 py-14"
    >
      <p className="font-mono text-[11px] tracking-[0.22em] text-amber uppercase">
        Work
      </p>
      <h1 className="mt-3 text-4xl tracking-tight text-paper">Case studies</h1>
      <p className="mt-3 max-w-xl text-mute">
        Three builds. Same template every time: problem, ownership, architecture,
        result, stack. Names and numbers are placeholders until you swap them.
      </p>
      <div className="mt-10 grid gap-px overflow-hidden rounded-md border border-line bg-line">
        {projects.map((p) => (
          <ProjectCard
            key={p.slug}
            featured={p.featured}
            slug={p.slug}
            title={p.title}
            kind={p.kind}
            summary={p.summary}
          />
        ))}
      </div>
    </motion.div>
  )
}
