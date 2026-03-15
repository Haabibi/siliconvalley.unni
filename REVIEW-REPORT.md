# COMPREHENSIVE REVIEW: siliconvalley.unni System Design Cards

> Reviewed by 4 specialized agents: Card News Designer, Viral Content Strategist, Tech Visionary Educator, Senior Staff Engineer

---

## Table of Contents

1. [Card News Designer — Design & Structure](#1-card-news-designer--design--structure)
2. [Viral Content Strategist — Growth Strategy](#2-viral-content-strategist--growth-strategy)
3. [Tech Visionary Educator — Depth & Vision](#3-tech-visionary-educator--depth--vision)
4. [Senior Staff Engineer — Technical Rigor](#4-senior-staff-engineer--technical-rigor)
5. [Unified Action Plan](#5-unified-action-plan)

---

## 1. Card News Designer — Design & Structure

### Card Structure: Restructure from 10 to 6-7 slides for Instagram

The current 10-slide format (hook, problem, concepts, how, example, guide, practices, pitfalls, action, summary) works great as a web modal but is too long for Instagram (40-50% completion rate vs 70-80% for 6 slides). Recommended structure:

| Slide | Purpose |
|-------|---------|
| 1. HOOK | Single bold statement + 1-2 shocking stats. Max 15 words headline. |
| 2. PROBLEM | One concrete failure scenario, short code or "before" example |
| 3. CORE IDEA | 3-4 labeled concepts, one line each. Most save-worthy slide. |
| 4. HOW IT WORKS | One diagram, code snippet, or before/after. No prose. |
| 5. REAL EXAMPLE | Brand name + 2-3 outcome bullets. |
| 6. DO THIS NOW | 3 numbered action items + one metric to track |
| 7. SAVE THIS | 3-4 take-home rules. Design for screenshots. |

### Key Design Recommendations

- **Use the memoji** — it's completely absent from cards. Put it on hook slides (surprised expression), pitfall slides (facepalm), and summary slides (pointing). Never on code slides.
- **Assign accent colors by section** (not card number) so saved collections look coherent
- **Remove quality scores** from summary slides — replace with CTA and creator handle
- **Rewrite every hook title** — current ones are descriptive, not provocative

### Hook Rewrites (examples)

| Current | Better |
|---------|--------|
| "The Role Shift Is Already Here" | "AI wrote 10,000 lines of your codebase. Do you understand what it built?" |
| "Speed Is Money" | "Amazon lost $1M in 2 hours from a 100ms slowdown." |
| "Everything Fails. Plan for It." | "Your 99.99% SLA still allows 52 minutes of downtime/year." |
| "Understanding the Building Blocks" | "MCP: the protocol that lets AI agents use your tools without writing a single integration." |

### Missing Topics (6)

1. Database migrations & zero-downtime schema evolution
2. Authorization patterns (RBAC/ABAC/ReBAC)
3. Distributed tracing deep dive (OpenTelemetry, sampling strategies)
4. API versioning strategies
5. Multi-tenancy architecture
6. Testing strategy for distributed systems

### Merge Candidates

- Claude Agent SDK (#31) + OpenAI Agents SDK (#32) — too structurally similar for two 10-slide entries. Consider a single "Agent SDK Comparison" card.
- SRE in AI Era (#89) + SLO Design (#92) — overlap on SLO/SLA material
- Vibe Coding Best Practices (#99) partially restates material from Topic #1

### Content Sequencing Issues

- **MCP series (15-24)**: Reads like a specification document. Reorder: MCP intro first, then "Building Your First MCP Server" (most practical), then architecture/advanced cards.
- **AI Infrastructure (69-78)**: Swap Inference Optimization (#71) to lead the section — it's more immediately actionable than GPU Orchestration (#69).
- **Classic CS (104-114)**: Rename to "The Foundations Library" and rewrite hooks to tie to vibe coding frame ("Why your rate limiter breaks when AI writes your retry logic").

### Visual Design Notes

- The dark-mode design with Inter + JetBrains Mono is strong
- Stat blocks (dd-stats) are the strongest visual element — make them larger and dominant on hook slides
- Code blocks longer than 10 lines should be shortened for card format
- For Instagram square (1080x1080) or portrait (1080x1350) export, layout needs different treatment than the web modal

---

## 2. Viral Content Strategist — Growth Strategy

### Positioning

**"The insider guide to Silicon Valley — what it takes to build at scale, and what it's like to live here."**

The vlog humanizes the technical content; the technical content gives the vlog authority. No one else owns this intersection on Instagram.

### Brand Voice

"Your smartest friend at a top-tier tech company" — opinionated, mildly irreverent toward cargo-culted knowledge, never talks down.

**It sounds like this:**
- "Nobody explains CQRS correctly. Here's what it actually means in production."
- "I used MCP for the first time last week. Here's what surprised me."
- "The CAP theorem interview answer everyone gives is technically correct and practically useless."

**It does NOT sound like this:**
- "In today's post we will be exploring..."
- "System design is an important skill for software engineers..."

### Differentiation From Competitors

| Account Type | Their Gap | Your Edge |
|---|---|---|
| @bytebytego | No human face, pure diagrams | You have vlog authenticity and SV context |
| Generic SWE edu accounts | Beginner-only, no AI depth | You cover cutting-edge AI infra, MCP, agents |
| SV lifestyle vloggers | No technical substance | You have 114 deep-dive cards with real depth |
| LeetCode/interview prep | Transactional, no culture | You teach culture AND craft |

### Content Calendar — First 30 Days

| Week | Posts | Rationale |
|------|-------|-----------|
| Week 1 | Vibe Coding (#99-103), one/day for 5 days | Maximum trend-capture at launch |
| Week 2 | MCP intro (#15) + deep dive (#16) + vlog "Why I'm excited about MCP" | Capture MCP audience |
| Week 3 | AI Agents (#25, 26) + Architecture (#45) + vlog | Balance trending + evergreen |
| Week 4 | LLM Engineering (#37, 38) + Classic fundamental (#104) + collab push | Broaden range |

### Posting Rhythm

| Day | Format | Theme |
|---|---|---|
| Monday | Card News Carousel | "Architecture Monday" — system design fundamentals or advanced patterns |
| Tuesday | Reel (30-60 sec) | Quick take on a trending tech story or a 60-second card summary |
| Wednesday | Card News Carousel | "AI Wednesday" — MCP, agents, vibe coding, LLM engineering |
| Thursday | Reel or Story poll | "Hot take Thursday" or SV life snippet |
| Friday | Vlog or Vlog + Card | Life in SV, behind-the-scenes, paired with a complementary card |
| Saturday | (Optional) | Saved/evergreen card — classic fundamentals for weekend study sessions |

### 10 Hook Templates That Drive Saves

1. **The Wrong Answer:** "Everyone explains [X] wrong. Here's what it actually does."
2. **The Scale Shock:** "[Company] handles [X billion] per day. Here's how."
3. **The Bad Decision:** "When to use [A] vs [B]. Most engineers choose wrong."
4. **The Relevance Trigger:** "If your company uses [tech], you need to understand [topic]."
5. **The Interview Trap:** "The [topic] question that trips up senior engineers."
6. **The New Thing:** "[New tech] is changing how we [do thing]. Here's what you need to know."
7. **The Honest Admission:** "I didn't understand [topic] until I saw this one diagram."
8. **The Hidden Cost:** "[Tech] will scale your system. It will also cost you $[X] if you do it wrong."
9. **The Personal Experience:** "I used [new tech] for the first time last week. Here's what I didn't expect."
10. **The Challenge:** "If you can't answer these 5 questions about [topic], you don't understand it yet."

### Priority Posting Order (by virality)

| Priority | Category | Cards | Action |
|---|---|---|---|
| Launch Now | Vibe Coding | 99-103 | 5-post series, week 1 |
| Launch Now | MCP | 15-24 | 10-post series, weeks 1-3 |
| Launch Now | AI Agents | 25-36 | 12-post series, weeks 2-5 |
| Month 1 | LLM Engineering | 37-44 | 2x/week, weeks 3-6 |
| Month 1 | AI Infrastructure | 69-78 | 2x/week, weeks 4-8 |
| Ongoing | Classic Fundamentals | 104-114 | 1-2x/week, indefinitely |
| Ongoing | Architecture Patterns | 45-54 | 1-2x/week, indefinitely |
| Month 2+ | Cloud Infra | 55-62 | After initial momentum |
| Month 2+ | APIs & Frontend | 79-88 | After initial momentum |
| Month 2+ | SRE & FinOps | 89-98 | After initial momentum |

### Growth Milestones

| Phase | Timeline | Target | Focus |
|---|---|---|---|
| Foundation | Month 1-2 | 500-1,000 followers | Posting consistency, find best formats |
| Signal | Month 3-4 | 1,000-3,000 | Double down on highest save-rate content |
| Compounding | Month 5-6 | 3,000-10,000 | Reels flywheel activates, organic reach grows |
| Velocity | Month 7-12 | 10,000-50,000+ | Algorithm rewards proven engagement quality |

### Key Metrics to Track Weekly

| Metric | Why It Matters | Target |
|---|---|---|
| Save rate (saves / reach) | Primary algorithm signal for edu content | Above 3% strong; above 5% excellent |
| Reach per post | How many non-followers see you | Track trend, not absolute |
| Follower growth rate | Week-over-week percentage | Consistent upward trend |
| Story reply rate | Community engagement depth | Above 2% of story viewers |
| Reel play rate | First 3-second retention | Above 40% is strong |
| Profile visits per post | Hook compelling enough to drive visit | Above 5% of reach |

### Hashtag Strategy

**Account-Level (use on everything):** #siliconvalleyunni

| Category | Hashtags |
|---|---|
| Core System Design | #systemdesign #softwareengineering #techeducation #codinginterview #swe #distributedsystems #backendengineering |
| MCP & AI Agents | #mcpprotocol #aiagents #anthropic #claudeai #llmengineering #aitools #agenticsystems |
| Vibe Coding | #vibecoding #aiassistedcoding #cursored #aitools #codinglife #futureofcoding |
| LLM & AI Engineering | #llmengineering #promptengineering #ragarchitecture #aiinfrastructure #generativeai |
| Cloud & Infra | #kubernetes #cloudengineering #devops #gitops #serverless #dataengineering #platformengineering |
| SV Life Vlogs | #siliconvalley #techlife #softwareengineer #svlife #techjobs #sanfrancisco #techcareer |

### Reels Strategy (2-3/week)

| Format | Description | Duration |
|---|---|---|
| 60-Second Summary | Card trailer — drives to full carousel | 60s |
| "I Tried X" Clip | Vlog cut with text overlays | 30-45s |
| Hot Take | One debatable opinion, ask for comments | 30s |
| Diagram Animation | Animate a static card diagram | 30-45s |
| "What This Means" | Trending news → personal relevance | 45s |

### Cross-Content: Vlog <-> Cards

| Pattern | How It Works |
|---|---|
| "This Week I Learned" | Vlog about something from work → point to the card that deep-dives it |
| "Story Behind the Card" | Release card Monday, tell the human story Friday in a vlog |
| "Ask Me Anything" | Story poll → vlog reacting to results → card on the winning topic |

### Vlog Topics That Drive Card Engagement

| Vlog Topic | Paired Card |
|---|---|
| "My first week working with AI agents at my job" | Cards 25-36: AI Agents series |
| "The tool every SV engineer is using right now" | Cards 15-24: MCP series |
| "I tried vibe coding for a week. Here's what happened." | Cards 99-103: Vibe Coding |
| "How our team decides microservices vs monolith" | Cards 45-54: Architecture Patterns |
| "The most expensive mistake I've seen in my codebase" | Cards 89-98: FinOps & Cost |
| "What a system design interview looks like at a FAANG" | Cards 1-14: Core System Design |
| "A day in my life as a SWE in San Francisco" | Any card — general engagement driver |

### Collaboration Strategy

**Tier 1 — Direct targets:**
- Tech education creators (5K-50K range) — propose card swaps
- CS students with audiences (Stanford/CMU/MIT accounts) — collab Reels on "what CS school doesn't teach"
- SV life adjacent creators (H-1B journey, new grad SWE life)

**Tier 2 — One-way amplification:**
- Quote and respond to tech Twitter/X discourse in Reels
- Reference popular tech creators in captions naturally
- Leave substantive comments on large tech education posts (5x/day for first 60 days)

**Tier 3 — Aspirational (Month 6+):**
- Dev newsletter features (TLDR Tech, ByteByteGo)
- Bootcamp instructor partnerships
- Tech podcast cross-promotions

### Engagement Tactics

- **Last slide CTA:** "Save this for your next system design interview."
- **Swipe-back CTA:** "Swipe back to slide 3 when you need this in production."
- **Comment trigger:** "Which of these patterns is your team using?"
- **DM trigger:** "DM me 'SYSTEM' and I'll send you the full breakdown."
- **Weekly AMA:** Story question box → answer in next card/vlog
- **"Wrong Answer" trap:** Post misconception card → ask "What did you think [X] meant?"
- **First 90 days:** Respond to every comment within 2 hours

### Story Highlights Structure

- "System Design"
- "AI/MCP"
- "SV Life"
- "Vibe Coding"

### Bio Link (Linktree/Beacons)

1. "Study the full system design library"
2. "Watch Silicon Valley vlogs"
3. "DM me your toughest system design question"

---

## 3. Tech Visionary Educator — Depth & Vision

### Biggest Strategic Gap

**AI and traditional system design are treated as separate domains.** The collection has system design topics (1-14) and AI topics (25-78), but doesn't show how AI *reshapes* traditional system design itself:

- **Load balancing** fails with 2-30s LLM inference requests (not 50ms)
- **Caching** now has a semantic similarity dimension
- **Database selection** includes "do I need vectors?" as first-class
- **API design** must handle streaming, long-running, non-deterministic outputs
- **Observability** needs token usage, quality metrics, cost-per-request

> A crosscutting topic "How AI Rewrites the Rules of System Design" would be the most differentiated piece in the entire collection.

### Technical Accuracy Issues Found

| Topic | Issue |
|---|---|
| Topic 1 ("AI Writes Code") | "70% of code AI-assisted by 2027" misattributed — Gartner said 80% of engineers *using* AI tools by 2028 |
| Topic 12 (CAP Theorem) | "Pick 2 of 3" is the known oversimplification. Brewer clarified: P isn't optional, so it's C vs A during partitions |
| Topic 20 (MCP Transports) | SSE transport is deprecated as of 2025-03-26 spec — flag remaining SSE references |
| Topic 29 (Swarm Intelligence) | Conflates OpenAI's "Swarm" framework with actual swarm intelligence (emergent behavior). These are fundamentally different. |
| Topic 58 (eBPF) | "Available on all modern Linux kernels" needs caveat — pre-5.8 kernels have limited BPF features |
| Topic 62 (Vector DBs) | Landscape shifted: pgvector is sufficient for most workloads <10M vectors. Standalone vector DB is increasingly premature optimization. |
| Topic 72 (Semantic Caching) | Overhypes the approach — semantic similarity introduces false positive rate that delivers *wrong* answers. Works for narrow distributions only. |
| Topic 112 (Sidecar Pattern) | "90% of service meshes use sidecar proxies" is outdated — Istio ambient mode, Cilium eBPF mesh, Linkerd all moving away |
| Topic 113 (Durable Execution) | Cloudflare Durable Objects ≠ Temporal/Inngest paradigm. Durable Objects are stateful actors, not workflow engines. |

### Depth Assessment by Category

| Category | Grade | Key Gap |
|----------|-------|---------|
| Core System Design (#1-14) | B+ | DB selection needs decision frameworks, not just descriptions. API design missing "design for AI consumption" angle. |
| MCP (#15-24) | A- | Missing ecosystem dynamics — "Should I bet on MCP or is this another SOAP?" |
| AI Agents (#25-36) | B | Doesn't address the core problem: agents are *unreliable*. Missing cost economics ($5-50 per complex task), agent vs workflow distinction. |
| LLM Engineering (#37-44) | B+ | RAG needs advanced techniques (reranking, hybrid search, agentic RAG, contextual retrieval). |
| Architecture (#45-54) | A- | Strongest category. Needs more "when NOT to use" each pattern. |
| Infrastructure (#55-62) | B+ | Edge computing needs contrarian take (most apps don't need it). Serverless/container boundary is collapsing. |
| Data Engineering (#63-68) | B | Missing the "modern data stack collapse" story (Snowflake economics, DuckDB replacing Spark, Iceberg replacing proprietary formats). |
| AI Infra & Security (#69-78) | A- | Model poisoning risks from HuggingFace not addressed in supply chain security topic. |

### Missing Contrarian Takes

The content is generally "too affirming" — explains how to use technologies but doesn't push back hard enough on when *not* to use them. The most trusted engineering voices say "you probably don't need this" with conviction.

- "Most RAG systems should be replaced by longer context windows" — as windows hit 1M+ tokens, retrieval becomes unnecessary for many use cases
- "Agents are overhyped; workflows are underhyped" — most reliable AI systems in production are deterministic workflows with LLM steps
- "The best architecture is the one your team can operate at 3am"
- Kubernetes is overkill for most startups (Kamal, Docker Compose, Railway are fine)
- Most organizations don't need a service mesh (gRPC built-in retry/deadline covers 80% of use cases)
- Modular monoliths are coming back (Shopify, 37signals)

### Missing Silicon Valley Reality

- **AI is restructuring eng orgs:** Companies reducing junior headcount, expecting seniors to produce 3-5x with AI tools. The biggest workforce shift since outsourcing.
- **"AI wrapper" vs "AI-native" distinction:** Most AI apps are thin API wrappers. Genuinely AI-native architectures need different system design (fallbacks for non-determinism, prompt-level A/B testing, eval-driven development).
- **LLM inference costs dropping 10x/year:** Changes every ROI calculation. Things too expensive 12 months ago are now feasible. Build for time-dependent cost thresholds.

### 10 Suggested New Topics

1. **"Compound AI Systems: The Architecture That's Winning"** — Multiple models + retrievers + tools as a unified system. Reference Berkeley BAIR paper.
2. **"Context Engineering > Prompt Engineering"** — The shift from crafting prompts to designing systems that curate the right context.
3. **"Model Routing and Cascading"** — Cheap models for easy requests, expensive for hard. How Notion and Perplexity do this.
4. **"The Modular Monolith: Why Big Tech Is Going Back"** — Shopify, 37signals demonstrating well-structured monoliths beat microservices for most team sizes.
5. **"Designing with Non-Deterministic Components"** — The fundamental AI system design challenge. Fallback strategies, output validation, graceful degradation.
6. **"The Economics of AI Infrastructure"** — GPU cost curves, inference pricing trends, build vs buy, when to fine-tune vs API.
7. **"Auth for AI Agents"** — OAuth scopes, delegated permissions, audit trails, emerging Agent Protocol standards.
8. **"Database Design for AI Applications"** — pgvector vs separate vector DB, conversation history schemas, hybrid search schemas.
9. **"Reliability Engineering for LLM Features"** — SLOs for non-deterministic systems, quality metrics, "quality budgets" analogous to error budgets.
10. **"What Does My Career Look Like in 3 Years?"** — The engagement topic every engineer thinks about but nobody gives a straight answer on. Would get the most shares.

---

## 4. Senior Staff Engineer — Technical Rigor

### Critical Errors (Must Fix)

| # | Issue | Location | Problem |
|---|-------|----------|---------|
| 1 | DynamoDB ≠ Dynamo paper | Topic 12, ~line 1753 | "Amazon's Dynamo (the paper behind DynamoDB)" is incorrect. DynamoDB does NOT use vector clocks. It's a fundamentally different system than the 2007 Dynamo paper. |
| 2 | Cell Router uses modulo, calls it "consistent hashing" | Topic 51, ~line 8618 | `hash % cells.length` is modulo hashing, not consistent hashing. Consistent hashing specifically avoids `% N` because adding/removing cells remaps most users. |
| 3 | Netflix 2011 claim | Topic 4, ~line 531 | "Netflix survived an entire AWS region going down in 2011" is misleading. Netflix was significantly impacted. Multi-region active-active came in 2012-2013. |
| 4 | "100ms = 1% revenue" source | Topic 3, ~line 320 | Attributed to "Amazon, 'The Economics of Performance', AWS re:Invent 2023" — this talk doesn't exist. Original is a 2006 Greg Linden Stanford presentation. |

### High Priority (Misleading or Outdated)

| # | Issue | Problem |
|---|-------|---------|
| 5 | "70% of code AI-assisted by 2027" | Gartner actually said 80% of *engineers using AI tools* by 2028 — different claim |
| 6 | "Don't use MongoDB for transactions" | MongoDB has had multi-document ACID since 2018 (v4.0). Should say "consider performance tradeoffs" |
| 7 | RAG "90%+ hallucination reduction" | Unsourced and too strong. Real benchmarks show 30-70%. Soften to "significant" or "up to 90% in targeted domains" |
| 8 | "$2.5M double-charge incident cost" | Unverifiable — appears fabricated. Source or remove. |
| 9 | CAP "2/3" Venn diagram stat | Brewer himself clarified: P isn't optional, so it's C vs A during partitions |
| 10 | eBPF "40% of Linux outages" | Unsourced. Remove or find a citation. |
| 11 | Claude Agent SDK package name | `anthropic-agents` / `@anthropic/agent-sdk` may not match actual published packages. Verify. |

### Code Example Issues

| Topic | Issue | Fix |
|---|---|---|
| Topic 4 (Circuit Breaker) | References `this.fallback()`, `this.reset()`, `this.trip()` but never defines them | Include full implementation or comment that methods are omitted |
| Topic 49 (Outbox Relay) | Race condition: process crash between publish and status update causes re-publish | Add comment acknowledging at-least-once semantics |
| Topic 48 (Saga) | Compensation loop doesn't handle compensation failures | Add try/catch in compensation loop or note simplification |
| Topic 62 (Vector DB) | Mixes Python and JavaScript syntax in same card | Pick one language per card or clearly label |
| Topic 51 (Cell Router) | `consistentHash(userId)` then `% cells.length` — contradicts the name | Use proper consistent hash ring or rename to "modulo-based routing" |

### Advice That Needs Nuance

| Current Advice | Better Advice |
|---|---|
| "Never let AI decide your database schema or API boundaries" | "Always review AI-generated schemas against your domain model and scaling requirements" |
| "Database choice should be swappable without rewriting logic" | "Isolate database access behind a boundary, but don't build fake abstraction layers you'll never swap" |
| "Banking/payments usually need CP" | "Financial systems need correctness — achievable through strong consistency OR eventual consistency + reconciliation" |
| "Use bcrypt with cost 12+" | "Use Argon2id (current OWASP recommendation). bcrypt is still acceptable." |
| "Don't use MongoDB for complex transactions" | "Consider the performance tradeoffs of MongoDB transactions vs. native relational support" |

### Verified Stats (These Are Fine)

| Claim | Verdict |
|---|---|
| "$4.5M average cost of data breach" | Correct — IBM 2024 says $4.88M |
| "277 days average breach detection" | Correct per IBM 2024 |
| "99.99% uptime = 52 min downtime/year" | Mathematically correct |
| "53% of mobile users leave after 3s" | Sourced from Google/Think, widely cited |

### Strongest Content (Preserve as-is)

The architecture patterns section is outstanding: CQRS (#46), Saga (#48), Transactional Outbox (#49), Event Sourcing (#47), Strangler Fig (#50), Cell-Based (#51). Also excellent: Bloom Filters (#111), Idempotency (#104), Durable Execution (#113), eBPF (#58), Consensus Algorithms (#110).

### Content Gaps for Future Enhancement

- Vector DB: missing quantization techniques (scalar, product, binary) and in-memory vs disk-based index distinction
- Data Mesh: missing the backlash / "when NOT to use data mesh" perspective
- Security (#7): needs senior-level depth (supply chain security, runtime security, mTLS)
- SDK topics (#31-34): perishable content — add version/date stamps prominently
- Lakehouse: missing Apache XTable for format interoperability and open catalogs (Nessie, Polaris)
- Consensus: missing EPaxos/Generalized Paxos for multi-leader, and consensus vs atomic broadcast distinction

---

## 5. Unified Action Plan

### Phase 1: Fix Critical Issues (Immediate)

1. Fix the 4 factual errors (DynamoDB/Dynamo, cell router hash, Netflix 2011, Amazon latency source)
2. Correct or soften the 7 misleading stats/claims (Gartner misquote, MongoDB transactions, RAG hallucination %, double-charge cost, CAP framing, eBPF stat, SDK package names)
3. Add nuance to 5 overly absolute advice points
4. Fix code examples (circuit breaker methods, outbox race condition comment, saga compensation, vector DB language mixing)

### Phase 2: Restructure for Instagram (Design)

5. Create 6-7 slide Instagram export versions of each topic
6. Rewrite all 114 hook titles using provocative hook templates
7. Integrate memoji into hook, warning, and summary slides
8. Assign accent colors by section (not card number)
9. Remove quality scores from summary slides, replace with CTA + handle
10. Move pitfall content earlier (slide 2) — anti-patterns are the most shareable content

### Phase 3: Content Gaps (New Topics)

11. Add crosscutting topic: "How AI Rewrites the Rules of System Design"
12. Add "Compound AI Systems" topic
13. Add "Context Engineering > Prompt Engineering" topic
14. Add "Model Routing and Cascading" topic
15. Add "The Modular Monolith" topic
16. Add "Designing with Non-Deterministic Components" topic
17. Add "Economics of AI Infrastructure" topic
18. Add "Auth for AI Agents" topic
19. Add "Database Design for AI Apps" topic
20. Add "Reliability Engineering for LLM Features" topic
21. Add "What Does My Career Look Like in 3 Years?" topic
22. Add 6 missing topics: DB migrations, authorization patterns, distributed tracing, API versioning, multi-tenancy, testing distributed systems
23. Add contrarian takes and "when NOT to use" sections across existing topics

### Phase 4: Launch Strategy (Execution)

24. Launch with Vibe Coding week: 5 cards in 5 days
25. Follow with MCP series + paired vlogs (weeks 2-3)
26. Establish "Architecture Monday / AI Wednesday" rhythm
27. Post 2-3 Reels per week from day one
28. Use branded hashtag #siliconvalleyunni on everything
29. Set up Story Highlights: "System Design", "AI/MCP", "SV Life", "Vibe Coding"
30. Respond to every comment within 2 hours for first 90 days
31. Comment on 5 large tech education posts per day for first 60 days
32. Track save rate per post weekly — cut formats below 2%
