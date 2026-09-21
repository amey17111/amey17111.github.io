export type FaqItem = {
  id: string
  q: string
  a: string
  keywords: string[]
}

export const faq: FaqItem[] = [
  {
    id: "who",
    q: "Who is Amey?",
    a: "Full-stack engineer for GenAI products and data platforms — Python/FastAPI, React, Spark/Databricks, AWS and Azure. This site is the lab + product view of that work.",
    keywords: ["who", "amey", "about", "background", "role"],
  },
  {
    id: "stack",
    q: "What is the stack?",
    a: "Ingest on Databricks, transform with PySpark, serve with FastAPI, product in React. Cloud is AWS and Azure depending on the tenant. GenAI pieces typically LiteLLM + a retrieval store.",
    keywords: ["stack", "skills", "python", "fastapi", "react", "spark", "databricks", "aws", "azure"],
  },
  {
    id: "atlas",
    q: "What is Atlas Answers?",
    a: "Placeholder LLM API product: FastAPI ask/cite routes, nightly reindex + eval, React operator console. Claimed result is p95 180ms on cached retrieve and +12 eval vs ungrounded chat.",
    keywords: ["atlas", "llm", "rag", "chat", "answers", "genai"],
  },
  {
    id: "ledger",
    q: "What is Ledger Spark?",
    a: "Placeholder Databricks pipeline: Bronze/Silver/Gold contracts, PySpark jobs, quality checks the API can trust. Claimed result is −40% job wall-clock after partition rewrite.",
    keywords: ["ledger", "spark", "databricks", "pipeline", "data"],
  },
  {
    id: "relay",
    q: "What is Relay Edge?",
    a: "Placeholder cloud gateway: one FastAPI image on AWS and Azure, React admin for keys and tenants. Claimed result is deploy parity and a 99.9% error-budget hold.",
    keywords: ["relay", "cloud", "aws", "azure", "gateway", "deploy"],
  },
  {
    id: "hire",
    q: "How do I get in touch?",
    a: "Email hello@ameylabs.me, LinkedIn, or drop a résumé request from Contact. Calendar and a real PDF go in once those files exist.",
    keywords: ["contact", "email", "hire", "linkedin", "resume", "résumé"],
  },
]

export function matchFaq(query: string): FaqItem {
  const q = query.toLowerCase()
  const scored = faq
    .map((item) => ({
      item,
      score: item.keywords.reduce((n, k) => (q.includes(k) ? n + 1 : n), 0),
    }))
    .sort((a, b) => b.score - a.score)

  if (scored[0].score > 0) return scored[0].item
  return {
    id: "fallback",
    q: query,
    a: "I only have static notes on this build — Atlas Answers, Ledger Spark, Relay Edge, stack, and contact. Wire FastAPI + RAG later for real answers. Try “stack” or “Atlas”.",
    keywords: [],
  }
}
