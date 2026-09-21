import { motion } from "motion/react"
import { site } from "../data/site"

export function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
      className="mx-auto max-w-3xl px-5 py-14"
    >
      <p className="font-mono text-[11px] tracking-[0.22em] text-amber uppercase">
        Contact
      </p>
      <h1 className="mt-3 text-4xl tracking-tight text-paper">High-signal only</h1>
      <p className="mt-4 text-mute">
        Email, LinkedIn, and a résumé slot. Calendar comes later. Placeholders
        until you drop real links.
      </p>
      <ul className="mt-10 divide-y divide-line border-y border-line">
        <li className="flex items-center justify-between py-5">
          <span className="font-mono text-xs text-mute uppercase">Email</span>
          <a className="text-amber hover:underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </li>
        <li className="flex items-center justify-between py-5">
          <span className="font-mono text-xs text-mute uppercase">LinkedIn</span>
          <a
            className="text-amber hover:underline"
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            Profile
          </a>
        </li>
        <li className="flex items-center justify-between py-5">
          <span className="font-mono text-xs text-mute uppercase">Résumé</span>
          {site.resumeReady ? (
            <a className="text-amber hover:underline" href={site.resumeHref}>
              PDF
            </a>
          ) : (
            <span className="font-mono text-sm text-mute">
              Drop resume.pdf in public/
            </span>
          )}
        </li>
      </ul>
    </motion.div>
  )
}
