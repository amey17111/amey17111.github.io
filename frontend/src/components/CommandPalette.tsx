import { useEffect, type ReactNode } from "react"
import { useLocation, useNavigate } from "react-router"
import { Command } from "cmdk"
import { featuredProject, projects } from "../data/projects"
import { site } from "../data/site"

type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
  onAsk: () => void
}

export function CommandPalette({ open, onOpenChange, onAsk }: Props) {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    onOpenChange(false)
  }, [location.pathname, location.hash, onOpenChange])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        onOpenChange(false)
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        onOpenChange(!open)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, onOpenChange])

  const featured = featuredProject()

  function go(to: string) {
    onOpenChange(false)
    void navigate(to)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-ink/70 p-4 pt-[15vh] backdrop-blur-sm">
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="Close command palette"
        onClick={() => onOpenChange(false)}
      />
      <Command
        label="Command palette"
        className="relative z-10 w-full max-w-lg overflow-hidden rounded-md border border-line bg-panel shadow-2xl"
      >
        <Command.Input
          placeholder="Jump to work, stack, résumé…"
          className="w-full border-b border-line bg-transparent px-4 py-3 font-mono text-sm text-paper outline-none placeholder:text-mute"
        />
        <Command.List className="max-h-80 overflow-auto p-2">
          <Command.Empty className="px-3 py-6 text-sm text-mute">
            No matches.
          </Command.Empty>
          <Group heading="Go">
            <Item onSelect={() => go("/")}>Home</Item>
            <Item onSelect={() => go("/work")}>Work</Item>
            <Item onSelect={() => go(`/work/${featured.slug}`)}>Featured case</Item>
            <Item onSelect={() => go("/contact")}>Contact</Item>
            <Item onSelect={() => go("/#stack")}>Stack / systems</Item>
          </Group>
          <Group heading="Cases">
            {projects.map((p) => (
              <Item key={p.slug} onSelect={() => go(`/work/${p.slug}`)}>
                {p.title}
              </Item>
            ))}
          </Group>
          <Group heading="Actions">
            <Item
              onSelect={() => {
                onOpenChange(false)
                onAsk()
              }}
            >
              Ask my work
            </Item>
            <Item
              onSelect={() => {
                window.open(site.resumeHref, "_blank")
              }}
            >
              {site.resumeReady ? "Résumé PDF" : "Résumé PDF (slot)"}
            </Item>
          </Group>
        </Command.List>
      </Command>
    </div>
  )
}

function Group({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <Command.Group
      heading={heading}
      className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:text-mute [&_[cmdk-group-heading]]:uppercase"
    >
      {children}
    </Command.Group>
  )
}

function Item({
  children,
  onSelect,
}: {
  children: string
  onSelect: () => void
}) {
  return (
    <Command.Item
      value={children}
      onSelect={onSelect}
      className="cursor-pointer rounded px-3 py-2 text-sm text-paper data-[selected=true]:bg-amber-dim data-[selected=true]:text-amber"
    >
      {children}
    </Command.Item>
  )
}
