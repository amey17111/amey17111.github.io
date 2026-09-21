import { copyFileSync } from "node:fs"
import { resolve } from "node:path"
import { defineConfig } from "vite"
import type { Plugin } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

function spaFallback(): Plugin {
  return {
    name: "spa-github-pages-404",
    closeBundle() {
      const docs = resolve(import.meta.dirname, "../docs")
      copyFileSync(resolve(docs, "index.html"), resolve(docs, "404.html"))
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), spaFallback()],
  build: {
    outDir: "../docs",
    emptyOutDir: true,
  },
})
