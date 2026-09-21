import { useCallback, useState } from "react"
import { Outlet } from "react-router"
import { ChatDrawer } from "./components/ChatDrawer"
import { CommandPalette } from "./components/CommandPalette"
import { Footer, Header } from "./components/Layout"

export default function App() {
  const [palette, setPalette] = useState(false)
  const [ask, setAsk] = useState(false)
  const openPalette = useCallback(() => setPalette(true), [])
  const openAsk = useCallback(() => setAsk(true), [])

  return (
    <div className="flex min-h-screen flex-col bg-ink text-paper">
      <Header onCommand={openPalette} onAsk={openAsk} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CommandPalette
        open={palette}
        onOpenChange={setPalette}
        onAsk={openAsk}
      />
      <ChatDrawer open={ask} onClose={() => setAsk(false)} />
    </div>
  )
}
