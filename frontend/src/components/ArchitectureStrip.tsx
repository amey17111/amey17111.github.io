import { Link } from "react-router"
import type { ArchitectureLane } from "../data/projects"
import { systems } from "../data/site"

export function ArchitectureStrip({ lanes }: { lanes: ArchitectureLane[] }) {
  return (
    <ol className="grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-4">
      {lanes.map((lane, i) => (
        <li key={lane.id} className="bg-panel p-4">
          <p className="font-mono text-[11px] tracking-widest text-amber uppercase">
            {String(i + 1).padStart(2, "0")} {lane.label}
          </p>
          <p className="mt-2 text-sm text-paper/90">{lane.detail}</p>
        </li>
      ))}
    </ol>
  )
}

export function SystemsStrip() {
  return (
    <section id="stack" className="scroll-mt-24">
      <p className="font-mono text-[11px] tracking-[0.2em] text-mute uppercase">
        Systems
      </p>
      <div className="mt-4 grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-4">
        {systems.map((step, i) => (
          <div key={step.label} className="bg-ink-2 p-5">
            <p className="font-mono text-[11px] text-amber">
              {String(i + 1).padStart(2, "0")}
            </p>
            <p className="mt-3 text-lg text-paper">{step.label}</p>
            <p className="mt-1 font-mono text-sm text-mute">{step.stack}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function ProjectCard({
  slug,
  title,
  kind,
  summary,
  featured = false,
}: {
  slug: string
  title: string
  kind: string
  summary: string
  featured?: boolean
}) {
  return (
    <Link
      to={`/work/${slug}`}
      className={`group block border border-line bg-panel p-6 transition-colors duration-200 ease-[var(--ease-mech)] hover:border-copper ${
        featured ? "h-full sm:p-8" : ""
      }`}
    >
      <p className="font-mono text-[11px] tracking-widest text-amber uppercase">
        {featured ? "Featured · " : ""}
        {kind}
      </p>
      <h3
        className={`mt-3 font-medium tracking-tight text-paper group-hover:text-amber ${
          featured ? "text-3xl" : "text-xl"
        }`}
      >
        {title}
      </h3>
      <p className={`mt-3 max-w-prose text-mute ${featured ? "text-base" : "text-sm"}`}>
        {summary}
      </p>
      <p className="mt-6 font-mono text-[11px] text-copper">Open case →</p>
    </Link>
  )
}
