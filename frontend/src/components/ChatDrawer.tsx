import { useState, type FormEvent } from "react"
import { matchFaq } from "../data/faq"

type Msg = { role: "you" | "lab"; text: string }

const seed: Msg[] = [
  {
    role: "lab",
    text: "Ask about stack, Atlas Answers, Ledger Spark, Relay Edge, or contact. Answers are mocked until FastAPI + RAG is wired.",
  },
]

export function ChatDrawer({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const [messages, setMessages] = useState<Msg[]>(seed)
  const [input, setInput] = useState("")

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fromForm = String(new FormData(e.currentTarget).get("q") ?? "").trim()
    const q = fromForm || input.trim()
    if (!q) return
    const hit = matchFaq(q)
    setMessages((m) => [
      ...m,
      { role: "you", text: q },
      { role: "lab", text: hit.a },
    ])
    setInput("")
  }

  return (
    <div
      className={`fixed inset-0 z-40 ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      {open ? (
        <button
          type="button"
          className="absolute inset-0 bg-ink/50"
          onClick={onClose}
          aria-label="Close ask drawer"
        />
      ) : null}
      <aside
        inert={!open}
        className={`absolute inset-y-0 right-0 flex w-full max-w-md flex-col border-l border-line bg-ink-2 shadow-2xl transition-transform duration-200 ease-[var(--ease-mech)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between border-b border-line px-5 py-4">
          <div>
            <p className="font-mono text-[11px] tracking-widest text-amber uppercase">
              Ask my work
            </p>
            <p className="mt-1 text-sm text-mute">Mocked until FastAPI + RAG</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="font-mono text-xs text-mute hover:text-amber"
          >
            Close
          </button>
        </header>
        <div className="flex-1 space-y-3 overflow-auto p-5">
          {messages.map((m, i) => (
            <p
              key={`${m.role}-${i}`}
              className={`max-w-[90%] rounded-md px-3 py-2 text-sm ${
                m.role === "you"
                  ? "ml-auto bg-amber-dim text-paper"
                  : "border border-line bg-panel text-paper/90"
              }`}
            >
              {m.text}
            </p>
          ))}
        </div>
        <form onSubmit={onSubmit} className="flex gap-2 border-t border-line p-4">
          <input
            name="q"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g. What is the stack?"
            className="min-w-0 flex-1 rounded-md border border-line bg-ink px-3 py-2 font-mono text-sm text-paper outline-none placeholder:text-mute focus:border-copper"
          />
          <button
            type="submit"
            className="rounded-sm bg-amber px-3 py-2 font-mono text-[11px] tracking-wide text-ink uppercase"
          >
            Send
          </button>
        </form>
      </aside>
    </div>
  )
}
