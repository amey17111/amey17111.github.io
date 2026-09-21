import { Command, MessageCircle } from "lucide-react"
import { NavLink } from "react-router"
import { site } from "../data/site"

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `font-mono text-xs tracking-wide uppercase transition-colors duration-200 ${
    isActive ? "text-amber" : "text-mute hover:text-paper"
  }`

export function Header({
  onCommand,
  onAsk,
}: {
  onCommand: () => void
  onAsk: () => void
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <NavLink to="/" end className="font-mono text-sm tracking-tight text-paper">
          {site.name}
          <span className="ml-2 text-mute">/ lab</span>
        </NavLink>
        <nav className="flex items-center gap-5">
          <NavLink to="/work" className={linkClass}>
            Work
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
          <button
            type="button"
            onClick={onCommand}
            className="inline-flex items-center gap-1.5 rounded border border-line px-2 py-1 font-mono text-[11px] text-mute hover:border-copper hover:text-amber"
          >
            <Command size={12} />
            <span className="hidden sm:inline">K</span>
          </button>
          <button
            type="button"
            onClick={onAsk}
            className="inline-flex items-center gap-1.5 rounded-sm bg-amber px-3 py-1.5 font-mono text-[11px] tracking-wide text-ink uppercase"
          >
            <MessageCircle size={12} />
            Ask
          </button>
        </nav>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[11px] text-mute">
          {site.domain} · systems studio
        </p>
        <div className="flex gap-5 font-mono text-xs">
          <a className="text-mute hover:text-amber" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a
            className="text-mute hover:text-amber"
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-mute hover:text-amber"
            href={site.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
