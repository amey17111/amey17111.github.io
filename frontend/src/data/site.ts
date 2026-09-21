export const site = {
  name: "Amey",
  domain: "ameylabs.me",
  role: "Full-stack engineer for GenAI products and data platforms",
  line: "Python/FastAPI, React, Spark/Databricks, AWS & Azure.",
  email: "hello@ameylabs.me",
  linkedin: "https://www.linkedin.com/in/amey17111",
  github: "https://github.com/amey17111",
  resumeHref: "/resume.pdf",
  resumeReady: false,
  photoHref: "/amey.jpg",
} as const

export const systems = [
  { id: "ingest", label: "Ingest", stack: "Databricks" },
  { id: "transform", label: "Transform", stack: "PySpark" },
  { id: "serve", label: "Serve", stack: "FastAPI" },
  { id: "product", label: "Product", stack: "React" },
] as const

export const proofs = [
  { id: "p95", value: "p95 180ms", note: "API serving layer, placeholder" },
  { id: "job", value: "−40% job time", note: "Spark pipeline, placeholder" },
  { id: "eval", value: "+12% eval", note: "RAG accuracy, placeholder" },
] as const
