import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router"
import "./index.css"
import App from "./App.tsx"
import { CaseStudy } from "./pages/CaseStudy.tsx"
import { Contact } from "./pages/Contact.tsx"
import { Home } from "./pages/Home.tsx"
import { Work } from "./pages/Work.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "work", element: <Work /> },
      { path: "work/:slug", element: <CaseStudy /> },
      { path: "contact", element: <Contact /> },
    ],
  },
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
