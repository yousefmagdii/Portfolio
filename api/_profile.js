// What the "Ask my AI" assistant knows. Keep it to facts already public on the
// site. Files in /api that start with "_" are not deployed as endpoints.
export const PROFILE = `
Name: Yousef Magdy
Headline: Software & AI Engineer building LLM platforms and fast web apps.
Location: Cairo, Egypt. Open to remote, hybrid and on-site roles in Egypt and the GCC.
Contact: email yousef0magdi1@gmail.com, LinkedIn linkedin.com/in/yousef-magdii, GitHub github.com/yousefmagdii.
Phone and WhatsApp are on the Contact section of this site. Three CVs can be downloaded from the "Download CV" menu:
AI Application Engineer, Frontend Developer (React), Technical Support Engineer.

EXPERIENCE
1) Software and AI Engineer, Al-Andalus Group LTD for Islamic Translation (UK, remote from Cairo), 06/2026 to present.
   Building a production LLM translation platform: a multi-agent LangGraph pipeline, tenant-scoped RAG and a
   five-service deployment on GCP Cloud Run (Next.js front end, .NET 8 API, FastAPI AI service, embedding service,
   workers) on PostgreSQL.
   - LangGraph pipeline of 28 agents (translation, review, QC, transcription, dubbing) across OpenAI, Claude, Gemini and Ollama.
   - Raised short Bible verse recall from 23.6% to 80.4% with zero false positives across 5,899 test cases, and cut detection latency from 75 ms to 22 ms.
   - Tenant-scoped RAG with bge-m3 embeddings and an HNSW index on PostgreSQL with pgvector.
   - Layout-preserving DOCX, PDF and InDesign translation.
   - Moved a five-minute PDF export to a job queue, cutting job pickup from 97 s to 1.9 s.
   - Stripe billing (Checkout, webhooks, subscriptions); CI/CD with GitHub Actions and Cloud Build.
   Stack: LangGraph, Python, FastAPI, .NET 8, Next.js, PostgreSQL, pgvector, GCP Cloud Run, GitHub Actions, Stripe.
2) Technical Support Specialist, Teleperformance (TP), Cairo, 10/2025 to 06/2026.
   English Tier 1 technical support for a major telecom client; CRM case documentation; SLA KPIs (AHT, FCR, CSAT).
3) Freelance Web Developer, self-employed, remote, 03/2025 to 10/2025.
   Freelance web projects while completing the Data Analyst Bootcamp by Alex the Analyst (React, SQL, Power BI, Tableau, Excel).
4) Front-End Developer, VODO (Riyadh, remote from Cairo), 01/2024 to 03/2025.
   React apps for ERP, e-commerce and event platforms in a microfrontend architecture; designed and consumed REST API
   contracts (schemas, pagination, filtering, error states); Agile sprints.
   Projects: LEAP event platform (large-scale booking with QR codes), ERP Warehouse module (built solo; also POS and HR),
   Klar platform (booking and e-commerce with online payment), Layers kiosk SPA (touch kiosk for in-store booking).
   Stack: React, Redux Toolkit, Tailwind CSS, Ant Design, Firebase, Supabase, Stripe.

SKILLS
AI & LLM: LangGraph, RAG, agent pipelines, embeddings (bge-m3), pgvector, OpenAI, Anthropic Claude, Gemini, Ollama.
Languages: Python, C#, TypeScript, JavaScript, SQL.
Backend & data: .NET 8, ASP.NET Core, FastAPI, Node.js, Express, REST API design, PostgreSQL, MySQL, MongoDB.
Frontend: React, Next.js, Redux Toolkit, Tailwind CSS, Ant Design, micro frontends, HTML5, CSS3.
Cloud & DevOps: GCP Cloud Run, Cloud SQL, Cloud Build, GitHub Actions, CI/CD, Git, Vercel.
Integrations & data: Stripe, OAuth & JWT, Firebase, Supabase, Power BI, Tableau, Excel.

PERSONAL PROJECTS (live demos and code on the Projects section)
Film Fever (React, movie API), La Dolce Vita Pizzas, The Wild Oasis (React Query, Supabase, charts),
usePopcorn (custom hooks), Fast React Pizza (Redux).

EDUCATION
BSc Computer Science, Higher Technological Institute, 10th of Ramadan, 2018 to 2021, grade Very Good, excellent graduation project.
Courses: Data Analyst Bootcamp (Alex the Analyst, 2025), Modern React with Redux, JavaScript, HTML5, CSS3,
Responsive Web Design, MEAN Stack Development Diploma.

ABOUT THIS SITE
Built by Yousef with React 19, Vite, Tailwind CSS and Framer Motion, deployed on Vercel. This assistant runs on a
serverless function that calls Google Gemini.
`.trim();
