export type ArchitectureLane = {
  id: string
  label: string
  detail: string
}

export type Project = {
  slug: string
  title: string
  kind: string
  year: string
  featured: boolean
  summary: string
  problem: string
  owned: string[]
  architecture: ArchitectureLane[]
  result: string
  stack: string[]
}

export const projects: Project[] = [
  {
    slug: "atlas-answers",
    title: "Atlas Answers",
    kind: "LLM API product",
    year: "2025",
    featured: true,
    summary:
      "Retrieval-backed answer service: FastAPI routes, eval harness, and a thin React console for operators.",
    problem:
      "Internal teams were pasting context into chat tools with no source control, no latency budget, and no way to measure whether answers were actually grounded.",
    owned: [
      "Service design and FastAPI surface (query, cite, feedback)",
      "Chunking + retrieval contract over project docs",
      "Operator UI: inspect traces, citations, and eval diffs",
      "p95 budget and failure modes (timeout, empty retrieve, refuse)",
    ],
    architecture: [
      { id: "api", label: "API", detail: "FastAPI /v1/ask, /v1/cite, SSE traces" },
      { id: "jobs", label: "Jobs", detail: "Nightly reindex + eval batch" },
      { id: "model", label: "Model", detail: "LiteLLM router, grounded-answer prompt" },
      { id: "ui", label: "UI", detail: "React console, citation drawer" },
    ],
    result:
      "Placeholder: p95 180ms on cached retrieve; eval groundedness +12pts vs. ungrounded baseline. Swap with your numbers.",
    stack: ["Python", "FastAPI", "pgvector", "LiteLLM", "React", "Azure"],
  },
  {
    slug: "ledger-spark",
    title: "Ledger Spark",
    kind: "Spark / Databricks pipeline",
    year: "2025",
    featured: false,
    summary:
      "Daily fact rebuild: ingest messy event dumps, Spark transforms, Databricks jobs, contract tables for downstream APIs.",
    problem:
      "Event dumps landed as raw JSON with drifting schemas. Downstream models and APIs were reading yesterday’s assumptions, not today’s tables.",
    owned: [
      "Ingest layout and Bronze → Silver → Gold contracts",
      "PySpark jobs, partition strategy, and late-arriving data rules",
      "Databricks job orchestration and failure paging",
      "Data quality checks the API team could actually trust",
    ],
    architecture: [
      { id: "api", label: "API", detail: "Read-only Gold views for serving" },
      { id: "jobs", label: "Jobs", detail: "Databricks workflow, PySpark stages" },
      { id: "model", label: "Model", detail: "Optional feature table for ranking" },
      { id: "ui", label: "UI", detail: "Job status strip in ops console" },
    ],
    result:
      "Placeholder: wall-clock job time −40% after partition rewrite and predicate pushdown. Swap with your numbers.",
    stack: ["PySpark", "Databricks", "Delta", "Python", "AWS"],
  },
  {
    slug: "relay-edge",
    title: "Relay Edge",
    kind: "Cloud-deployed service",
    year: "2024",
    featured: false,
    summary:
      "Containerized FastAPI gateway: auth, rate limits, health, and React admin — deployed on AWS and Azure for two tenants.",
    problem:
      "Two product surfaces needed the same backend contract but lived on different clouds. Copy-paste deploys were drifting and auth was inconsistent.",
    owned: [
      "Gateway API, auth, and idempotent write paths",
      "Docker image, health/readiness, structured logs",
      "AWS + Azure deploy parity (same artifact, two runtimes)",
      "Minimal React admin for keys, tenants, and traffic",
    ],
    architecture: [
      { id: "api", label: "API", detail: "FastAPI gateway, OpenAPI contract" },
      { id: "jobs", label: "Jobs", detail: "CI build → image → env promote" },
      { id: "model", label: "Model", detail: "Optional inference sidecar" },
      { id: "ui", label: "UI", detail: "React admin, key inventory" },
    ],
    result:
      "Placeholder: one image, two clouds; error budget held at 99.9% over a 30-day window. Swap with your numbers.",
    stack: ["FastAPI", "Docker", "AWS", "Azure", "React", "CI"],
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}

export function featuredProject() {
  return projects.find((p) => p.featured) ?? projects[0]
}
