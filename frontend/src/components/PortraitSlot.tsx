import { useState } from "react"
import { site } from "../data/site"

export function PortraitSlot({
  className = "",
}: {
  className?: string
}) {
  const [missing, setMissing] = useState(false)

  return (
    <figure
      className={`overflow-hidden border border-line bg-panel ${className}`}
    >
      <div className="relative aspect-[3/4] bg-ink-2">
        <img
          src={`${site.photoHref}?v=1`}
          alt={site.name}
          className={`h-full w-full object-cover object-[center_20%] ${missing ? "hidden" : "block"}`}
          onError={() => setMissing(true)}
          onLoad={() => setMissing(false)}
        />
        {missing ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center">
            <p className="font-mono text-[11px] tracking-widest text-amber uppercase">
              Portrait
            </p>
            <p className="text-sm text-mute">
              Drop <span className="font-mono text-paper">amey.jpg</span> in{" "}
              <span className="font-mono text-paper">frontend/public/</span>
            </p>
          </div>
        ) : null}
      </div>
      <figcaption className="flex items-center justify-between border-t border-line px-3 py-2 font-mono text-[11px] tracking-widest text-mute uppercase">
        <span>{site.name}</span>
        <span className="text-amber">01</span>
      </figcaption>
    </figure>
  )
}
