import { useEffect } from "react"
import { Link, useLocation } from "react-router"
import { motion } from "motion/react"
import { ArchitectureStrip, ProjectCard, SystemsStrip } from "../components/ArchitectureStrip"
import { PortraitSlot } from "../components/PortraitSlot"
import { featuredProject, projects } from "../data/projects"
import { proofs, site } from "../data/site"

const fade = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.2, ease: [0.2, 0.8, 0.2, 1] as const },
}

export function Home() {
  const featured = featuredProject()
  const rest = projects.filter((p) => p.slug !== featured.slug)
  const location = useLocation()

  useEffect(() => {
    if (location.hash !== "#stack") return
    document.getElementById("stack")?.scrollIntoView({ behavior: "smooth" })
  }, [location.hash])

  return (
    <motion.div {...fade} className="mx-auto max-w-6xl px-5 py-14">
      <div className="grid grid-cols-1 items-start gap-10 min-[540px]:grid-cols-[minmax(0,1fr)_14.5rem]">
        <div>
          <p className="font-mono text-[11px] tracking-[0.22em] text-amber uppercase">
            Systems studio
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.1] font-medium tracking-tight text-paper sm:text-6xl">
            {site.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-mute">
            {site.role} — {site.line}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to={`/work/${featured.slug}`}
              className="rounded-sm bg-amber px-4 py-2 font-mono text-xs tracking-wide text-ink uppercase"
            >
              Featured case
            </Link>
            <Link
              to="/work"
              className="rounded-sm border border-line px-4 py-2 font-mono text-xs tracking-wide text-paper uppercase hover:border-copper"
            >
              All work
            </Link>
          </div>
        </div>
        <PortraitSlot className="w-full max-w-[14.5rem] min-[540px]:justify-self-end min-[540px]:max-w-none" />
      </div>

      <div className="mt-16 grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2">
        <ProjectCard
          featured
          slug={featured.slug}
          title={featured.title}
          kind={featured.kind}
          summary={featured.summary}
        />
        <div className="flex flex-col gap-px bg-line">
          {rest.map((p) => (
            <ProjectCard
              key={p.slug}
              slug={p.slug}
              title={p.title}
              kind={p.kind}
              summary={p.summary}
            />
          ))}
        </div>
      </div>

      <div className="mt-16">
        <SystemsStrip />
      </div>

      <section className="mt-16">
        <p className="font-mono text-[11px] tracking-[0.2em] text-mute uppercase">
          Proof
        </p>
        <div className="mt-4 grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-3">
          {proofs.map((p) => (
            <div key={p.id} className="bg-panel p-5">
              <p className="text-2xl tracking-tight text-amber">{p.value}</p>
              <p className="mt-2 text-sm text-mute">{p.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <p className="font-mono text-[11px] tracking-[0.2em] text-mute uppercase">
          Architecture of the featured case
        </p>
        <div className="mt-4">
          <ArchitectureStrip lanes={featured.architecture} />
        </div>
      </section>
    </motion.div>
  )
}
