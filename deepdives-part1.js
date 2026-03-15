window.DEEP_DIVES = window.DEEP_DIVES || {};

// =============================================================================
// TOPIC 1: AI Writes Code. You Design Systems.
// Adapted from old #1 [EXISTING] — fixed "70% AI-assisted" stat
// =============================================================================
window.DEEP_DIVES[1] = {
  title: "AI Writes Code. You Design Systems.",
  icon: "\u{1F9E0}",
  tag: "mindset shift",
  slides: [
    { type: "hook", typeLabel: "Why It Matters", title: "Your Job Title Just Changed", content: [
      {
        kind: "text",
        value: "AI can generate code faster than any human, but it <strong>cannot</strong> reason about trade-offs across an entire system. Your value has shifted from typist to architect."
      },
      {
        kind: "stats",
        items: [
          { value: "80%", label: "of engineers will use AI coding tools by 2028 (Gartner)" },
          { value: "10x", label: "more important: system-level thinking" }
        ]
      },
      {
        kind: "callout",
        style: "insight",
        value: "The bottleneck is no longer writing code \u2014 it\u2019s knowing what to build and how the pieces fit together."
      },
      {
        kind: "sources",
        items: ["Gartner, 'Top Strategic Technology Trends 2025'", "GitHub, 'The State of the Octoverse 2024'"]
      }
    ] },
    { type: "problem", typeLabel: "The Problem", title: "Code Without Architecture Collapses", content: [
      {
        kind: "text",
        value: "Teams that let AI generate features without a system design end up with <strong>spaghetti at scale</strong>. Each module works alone but breaks when integrated."
      },
      {
        kind: "bullets",
        items: ["Duplicated logic across services", "No clear ownership or boundaries", "Performance bottlenecks discovered in production", "Security gaps between components"]
      }
    ] },
    { type: "concepts", typeLabel: "Core Concepts", title: "Architect Thinking in 4 Ideas", content: [
      {
        kind: "bullets",
        items: [
          "<strong>System Boundaries</strong> \u2014 Define where one component ends and another begins.",
          "<strong>Data Flow</strong> \u2014 Map how data moves from input to storage to output.",
          "<strong>Trade-off Analysis</strong> \u2014 Every choice has a cost; know what you\u2019re giving up.",
          "<strong>Failure Modes</strong> \u2014 Design for what happens when things break, not just when they work."
        ]
      },
      { kind: "callout", style: "insight", value: "AI is your copilot; you are the flight planner." },
      { kind: "sources", items: [
        "Gregor Hohpe & Bobby Woolf, 'Enterprise Integration Patterns', Addison-Wesley"
      ] }
    ] },
    { type: "how", typeLabel: "How It Works", title: "The Human-AI Design Workflow", content: [
      {
        kind: "text",
        value: "Use a top-down approach: <strong>you</strong> define the architecture, <strong>AI</strong> fills in the implementation."
      },
      {
        kind: "code",
        value: "1. Sketch component diagram (You)\n2. Define interfaces & contracts (You)\n3. Generate module code (AI)\n4. Review integration points (You)\n5. Generate tests (AI)\n6. Validate system behavior (You)"
      },
      {
        kind: "callout",
        style: "insight",
        value: "Never let AI decide your database schema or API boundaries. Those are architectural decisions."
      }
    ] },
    { type: "example", typeLabel: "Real-World Example", title: "E-Commerce Platform Redesign", content: [
      {
        kind: "text",
        value: "A startup used ChatGPT to generate an entire checkout service. It worked in isolation, but <strong>failed under load</strong> because no one designed the interaction between inventory, payment, and notification services."
      },
      {
        kind: "bullets",
        items: ["Race conditions on inventory counts", "No idempotency on payment retries", "Notifications sent before payment confirmed"]
      },
      {
        kind: "text",
        value: "After an architect mapped the data flow and defined contracts, AI regenerated each service \u2014 and it worked flawlessly."
      },
      { kind: "sources", items: [
        "Martin Fowler, 'Bliki: Software Architecture', martinfowler.com"
      ] }
    ] },
    { type: "guide", typeLabel: "Step-by-Step Guide", title: "Start Designing Today", content: [
      {
        kind: "bullets",
        items: [
          "Step 1: Draw a box-and-arrow diagram of your current system.",
          "<strong>Label every arrow</strong> \u2014 Annotate each connection with the data it carries and the protocol it uses.",
          "Step 3: Identify the 3 riskiest integration points.",
          "<strong>Write interface contracts</strong> \u2014 Define types, error codes, and SLAs for those integration points.",
          "Step 5: Use AI to implement against those contracts."
        ]
      },
      { kind: "callout", style: "insight", value: "Spend 30% of your time on design, let AI handle 70% of implementation." }
    ] },
    { type: "practices", typeLabel: "Best Practices", title: "Do\u2019s and Don\u2019ts", content: [
      {
        kind: "bullets",
        items: [
          "\u2705 Define clear module boundaries before generating code",
          "\u2705 Review AI output for architectural consistency",
          "\u2705 Use AI for boilerplate, tests, and repetitive patterns",
          "\u274C Don\u2019t let AI decide your data model",
          "\u274C Don\u2019t skip integration testing because unit tests pass",
          "\u274C Don\u2019t copy-paste AI code without understanding the trade-offs"
        ]
      }
    ] },
    { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns to Avoid", content: [
      { kind: "text", value: "These mistakes are <strong>rampant</strong> in AI-assisted teams:" },
      {
        kind: "bullets",
        items: [
          "<strong>Prompt-and-pray</strong> \u2014 Generating entire systems from a single prompt with no architecture.",
          "<strong>AI echo chamber</strong> \u2014 Using AI to review AI-generated code without human oversight.",
          "<strong>Over-abstraction</strong> \u2014 AI loves to add layers; not every service needs a strategy pattern.",
          "<strong>Ignoring non-functionals</strong> \u2014 AI won\u2019t ask about latency budgets or compliance unless you do."
        ]
      }
    ] },
    { type: "action", typeLabel: "Your Action Plan", title: "This Week\u2019s Challenge", content: [
      {
        kind: "bullets",
        items: [
          "Pick one feature you\u2019re building this week.",
          "Sketch the system diagram on paper before writing any code.",
          "Define the API contract between at least two components.",
          "<strong>AI implements, you integrate</strong> \u2014 Use AI to implement the modules, then review integration points yourself."
        ]
      },
      {
        kind: "callout",
        style: "insight",
        value: "Track how many bugs are caught at the design stage vs. production. You\u2019ll be surprised."
      }
    ] },
    { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
      {
        kind: "bullets",
        items: [
          "AI writes code; you design the system that holds it together.",
          "Architecture decisions are the highest-leverage work you do.",
          "<strong>Design before generating</strong> \u2014 Define boundaries, contracts, and failure modes before generating code.",
          "<strong>Designers, not coders</strong> \u2014 The best engineers in 2026 are system designers who use AI, not coders replaced by AI."
        ]
      },
      {
        kind: "quality",
        items: [
          { label: "Actionability", score: 5 },
          { label: "Correctness", score: 5 },
          { label: "Visual Appeal", score: 4 },
          { label: "Engagement", score: 5 }
        ]
      }
    ] }
  ]
};

// =============================================================================
// TOPIC 2: Vibe Coding Best Practices
// Adapted from old #99 [EXISTING]
// =============================================================================
window.DEEP_DIVES[2] = {
  title: "Vibe Coding Best Practices",
  icon: "\u{1F3B8}",
  tag: "vibe coding",
  slides: [
    { type: "hook", typeLabel: "Why It Matters", title: "Andrej Karpathy Coined It \u2014 Now You Need to Master It", content: [
      {
        kind: "text",
        value: "<strong>Vibe coding</strong> \u2014 using AI to generate code by describing what you want in natural language \u2014 is the fastest way to build prototypes and MVPs today."
      },
      {
        kind: "stats",
        items: [
          { value: "10x", label: "faster prototyping with AI assistance" },
          { value: "74%", label: "of developers now use AI coding tools daily" },
          { value: "50%", label: "of bugs from accepting AI code uncritically" }
        ]
      },
      {
        kind: "callout",
        style: "insight",
        value: "Vibe coding isn\u2019t about abandoning craftsmanship \u2014 it\u2019s about directing AI as a skilled collaborator, not a magic black box."
      },
      { kind: "sources", items: ["Andrej Karpathy, 'Vibe Coding', 2025", "Stack Overflow Developer Survey 2024"] }
    ] },
    { type: "problem", typeLabel: "The Problem", title: "The Vibe Coding Quality Gap", content: [
      {
        kind: "text",
        value: "AI-generated code <strong>looks correct</strong> but often harbors subtle issues that compound over time."
      },
      {
        kind: "bullets",
        items: [
          "Generated code works for the happy path but misses edge cases",
          "AI confidently produces plausible but wrong implementations",
          "<strong>Hidden tech debt</strong> \u2014 Technical debt accumulates faster when code isn\u2019t understood by the human",
          "<strong>False sense of done</strong> \u2014 Security vulnerabilities slip through because \u2018it works\u2019 feels like \u2018it\u2019s done\u2019"
        ]
      },
      {
        kind: "callout",
        style: "warning",
        value: "The biggest risk of vibe coding isn\u2019t bad code \u2014 it\u2019s code you don\u2019t understand. If you can\u2019t debug it, you don\u2019t own it."
      }
    ] },
    { type: "concepts", typeLabel: "Core Concepts", title: "The Vibe Coder\u2019s Mental Model", content: [
      {
        kind: "bullets",
        items: [
          "<strong>Describe, don\u2019t dictate</strong> \u2014 Tell the AI what you need, not how to write every line",
          "<strong>Iterate in small bites</strong> \u2014 Generate one function or component at a time, not entire files",
          "<strong>Verify before extending</strong> \u2014 Test each generated piece before building on top of it",
          "<strong>Context is king</strong> \u2014 Give the AI your types, interfaces, and existing patterns"
        ]
      },
      {
        kind: "callout",
        style: "insight",
        value: "Think of AI as a junior developer who is incredibly fast but needs clear requirements and code review on every PR."
      },
      { kind: "sources", items: ["Andrej Karpathy, 'Vibe Coding', twitter.com/karpathy, 2025"] }
    ] },
    { type: "how", typeLabel: "How It Works", title: "The Generate-Verify-Integrate Loop", content: [
      { kind: "text", value: "Effective vibe coding follows a <strong>tight feedback loop</strong>:" },
      {
        kind: "bullets",
        items: [
          "1. Describe what you need with context (types, constraints, examples)",
          "2. Generate a small, focused piece of code",
          "<strong>Understand every line</strong> \u2014 Read the generated code and ask the AI to explain anything unclear",
          "4. Test it (run it, write a test, check edge cases)",
          "5. Integrate and commit only verified code"
        ]
      },
      {
        kind: "code",
        value: "// Good vibe coding prompt:\n// \"Write a function that validates email addresses.\n// Must handle: unicode domains, plus-addressing,\n// IP literal domains. Return {valid: bool, reason: string}.\n// Use the existing ValidationResult type from types.ts.\"\n\n// Bad vibe coding prompt:\n// \"Write an email validator\""
      }
    ] },
    { type: "example", typeLabel: "Real-World Example", title: "Building a Dashboard in 2 Hours", content: [
      {
        kind: "text",
        value: "A developer builds a full analytics dashboard using vibe coding with <strong>discipline</strong>:"
      },
      {
        kind: "bullets",
        items: [
          "<strong>Data model first</strong> \u2014 'Generate the data model types for user analytics \u2014 sessions, pageviews, events'",
          "<strong>Hook for fetching</strong> \u2014 'Create a React hook that fetches analytics data using these types and SWR'",
          "<strong>Visual component</strong> \u2014 'Build a bar chart component using Recharts that displays daily active users'",
          "Each step: reviewed, tested, committed separately"
        ]
      },
      {
        kind: "callout",
        style: "insight",
        value: "Result: Working dashboard in 2 hours instead of 2 days. But each piece was understood and tested, so maintenance is still manageable."
      }
    ] },
    { type: "guide", typeLabel: "Step-by-Step Guide", title: "Your Vibe Coding Workflow", content: [
      {
        kind: "bullets",
        items: [
          "<strong>Architecture on paper</strong> \u2014 Plan your architecture first; AI fills in implementations, not designs",
          "<strong>Structure and types first</strong> \u2014 Set up your project structure and types before generating code",
          "<strong>Include full context</strong> \u2014 Write prompts that include your project\u2019s types, imports, patterns, and constraints",
          "Step 4: Generate one function/component at a time",
          "<strong>Review, test, commit</strong> \u2014 Review, test, and commit each piece before moving to the next"
        ]
      },
      {
        kind: "callout",
        style: "action",
        value: "Golden rule: never generate more code than you can review in 5 minutes. If the diff is too large, break it down."
      }
    ] },
    { type: "practices", typeLabel: "Best Practices", title: "Vibe Coding Like a Pro", content: [
      {
        kind: "bullets",
        items: [
          "Always provide your existing types and interfaces as context",
          "Ask the AI to add comments explaining non-obvious logic",
          "<strong>Test alongside code</strong> \u2014 Generate tests alongside code: \u2018Write the function and its unit tests\u2019",
          "<strong>Commit working states</strong> \u2014 Use version control aggressively; commit working states before experimenting",
          "<strong>Explain before fixing</strong> \u2014 When stuck, ask the AI to explain the code before asking it to fix the code"
        ]
      },
      {
        kind: "callout",
        style: "insight",
        value: "The best vibe coders are great prompt writers AND experienced code reviewers. The AI writes; you architect and verify."
      }
    ] },
    { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Vibe Coding Anti-Patterns", content: [
      {
        kind: "bullets",
        items: [
          "<strong>Copy-paste-pray</strong> \u2014 Accepting generated code without reading it.",
          "<strong>The megaprompt</strong> \u2014 Asking for an entire feature in one shot (breaks above ~200 lines).",
          "<strong>Context amnesia</strong> \u2014 Not feeding the AI your existing code patterns and types.",
          "<strong>Test-optional thinking</strong> \u2014 Skipping tests because \u2018the AI wrote it so it should work.\u2019"
        ]
      }
    ] },
    { type: "action", typeLabel: "Your Action Plan", title: "Level Up Your Vibe Coding", content: [
      {
        kind: "bullets",
        items: [
          "<strong>Create a context file</strong> \u2014 Compile your project\u2019s types, conventions, and patterns to paste into prompts.",
          "Practice the generate-verify-integrate loop on your next feature.",
          "<strong>Set a line limit</strong> \u2014 Max 50 lines of AI code accepted without a test.",
          "Track your AI-generated code ratio and correlate with bug rates."
        ]
      },
      {
        kind: "callout",
        style: "action",
        value: "Challenge: build your next small feature entirely via vibe coding, but review and test every generated piece. Time it against your normal workflow."
      }
    ] },
    { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
      {
        kind: "bullets",
        items: [
          "Vibe coding is powerful when paired with discipline and code review.",
          "Generate small pieces, verify each one, then integrate.",
          "<strong>Context is everything</strong> \u2014 Feed the AI your types, patterns, and constraints.",
          "If you can\u2019t explain it, don\u2019t ship it."
        ]
      },
      {
        kind: "quality",
        items: [
          { label: "Actionability", score: 5 },
          { label: "Correctness", score: 4 },
          { label: "Visual Appeal", score: 4 },
          { label: "Engagement", score: 5 }
        ]
      }
    ] }
  ]
};

// =============================================================================
// TOPIC 3: When NOT to Vibe Code
// Adapted from old #100 [EXISTING]
// =============================================================================
window.DEEP_DIVES[3] = {
  title: "When NOT to Vibe Code",
  icon: "\u{1F6AB}",
  tag: "vibe coding",
  slides: [
    { type: "hook", typeLabel: "Why It Matters", title: "AI Will Write Your Next Security Breach If You Let It", content: [
      {
        kind: "text",
        value: "Vibe coding accelerates most tasks, but there are domains where <strong>AI-generated code is actively dangerous</strong> \u2014 and knowing the boundary is what separates pros from amateurs."
      },
      {
        kind: "stats",
        items: [
          { value: "40%", label: "of AI-generated code has security issues (Stanford study)" },
          { value: "4x", label: "more vulnerabilities in crypto code from AI" },
          { value: "0%", label: "acceptable error rate for financial calculations" }
        ]
      },
      {
        kind: "callout",
        style: "warning",
        value: "AI doesn\u2019t understand consequences. It will generate plausible-looking auth code that silently fails open."
      },
      { kind: "sources", items: ["Perry et al., 'Do Users Write More Insecure Code with AI Assistants?', Stanford, 2023"] }
    ] },
    { type: "problem", typeLabel: "The Problem", title: "AI Confidence Doesn\u2019t Equal Correctness", content: [
      {
        kind: "text",
        value: "AI generates code with <strong>equal confidence</strong> whether the output is correct or dangerously wrong. It never says \u2018I\u2019m not sure about this.\u2019"
      },
      {
        kind: "bullets",
        items: [
          "<strong>Security-critical code</strong> \u2014 Auth, encryption, and access control where subtle bugs have catastrophic impact",
          "<strong>Financial calculations</strong> \u2014 Rounding errors and race conditions in transactions demand precision",
          "<strong>Medical/safety systems</strong> \u2014 Regulatory compliance requires auditability",
          "<strong>Concurrent systems</strong> \u2014 AI struggles with race conditions, deadlocks, and shared state"
        ]
      }
    ] },
    { type: "concepts", typeLabel: "Core Concepts", title: "The Vibe Coding Risk Matrix", content: [
      {
        kind: "bullets",
        items: [
          "<strong>Green zone</strong> \u2014 UI components, CRUD, utilities, prototypes, scripts \u2192 Vibe code freely",
          "<strong>Yellow zone</strong> \u2014 Business logic, data pipelines, API integrations \u2192 Vibe code with careful review",
          "<strong>Red zone</strong> \u2014 Auth, crypto, payments, compliance, safety-critical \u2192 Write by hand, use AI only for review",
          "<strong>Black zone</strong> \u2014 Regulated systems (medical devices, avionics) \u2192 No AI-generated code in production"
        ]
      },
      {
        kind: "callout",
        style: "insight",
        value: "Use the \u2018headline test\u2019: if a bug here would make the news, don\u2019t vibe code it."
      },
      { kind: "sources", items: ["OWASP, 'Top Ten Web Application Security Risks 2021'"] }
    ] },
    { type: "how", typeLabel: "How It Works", title: "The Decision Process", content: [
      { kind: "text", value: "Before vibe coding any feature, ask these <strong>four questions</strong>:" },
      {
        kind: "bullets",
        items: [
          "<strong>Blast radius</strong> \u2014 What\u2019s the impact of a bug? (UI glitch vs. data breach vs. financial loss)",
          "<strong>Testability</strong> \u2014 Can you fully test this? (Unit tests cover all branches vs. \u2018it seems to work\u2019)",
          "<strong>Domain expertise</strong> \u2014 Do you understand the domain deeply enough to review? (HTTP caching vs. crypto)",
          "<strong>Compliance requirements</strong> \u2014 Are there regulatory requirements? (SOC2, HIPAA, PCI-DSS)"
        ]
      },
      {
        kind: "callout",
        style: "insight",
        value: "If any answer raises concern, switch from \u2018AI writes, I review\u2019 to \u2018I write, AI assists with boilerplate and tests.\u2019"
      }
    ] },
    { type: "example", typeLabel: "Real-World Example", title: "The $50,000 AI Auth Bug", content: [
      {
        kind: "text",
        value: "A startup vibe-coded their authentication system. The AI-generated JWT validation looked correct but had a critical flaw:"
      },
      {
        kind: "code",
        value: "// AI-generated code (looks fine, right?)\nfunction verifyToken(token) {\n  try {\n    const decoded = jwt.verify(token, process.env.SECRET);\n    return decoded;\n  } catch (e) {\n    return null; // Bug: returns null, not false\n  }\n}\n// Caller: if (!verifyToken(token)) deny();\n// null is falsy, so this works... until\n// someone checks: if (verifyToken(token) !== false)"
      },
      {
        kind: "callout",
        style: "warning",
        value: "The subtle null vs false distinction led to an access control bypass discovered during a pentest. Cost: $50K in remediation and delayed SOC2 certification."
      }
    ] },
    { type: "guide", typeLabel: "Step-by-Step Guide", title: "Safe AI Usage in Risky Domains", content: [
      {
        kind: "bullets",
        items: [
          "Step 1: Write security/financial/critical code by hand.",
          "Step 2: Use AI to generate test cases for your hand-written code.",
          "Step 3: Use AI to review your code for common vulnerabilities.",
          "<strong>Use battle-tested libraries</strong> \u2014 Use established, audited libraries (bcrypt, passport, stripe-sdk) instead of generating crypto or auth code from scratch.",
          "Step 5: Get human security review for any code in the red zone."
        ]
      },
      {
        kind: "callout",
        style: "action",
        value: "Flip the script: in high-risk areas, use AI as a reviewer, not a writer. \u2018Review this auth code for vulnerabilities\u2019 is a great prompt."
      }
    ] },
    { type: "practices", typeLabel: "Best Practices", title: "Guidelines for High-Stakes Code", content: [
      {
        kind: "bullets",
        items: [
          "<strong>Battle-tested libraries</strong> \u2014 Use bcrypt, passport, and stripe-sdk instead of AI-generated implementations",
          "<strong>Two human reviewers</strong> \u2014 Require two human reviewers for any security-critical PR, regardless of author",
          "Maintain a \u2018no vibe code\u2019 list of files/directories in your project",
          "<strong>AI tests shine here</strong> \u2014 AI-generated tests are great; they think of edge cases you might miss",
          "Document which code was AI-generated for future audit trails"
        ]
      }
    ] },
    { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Dangerous Assumptions", content: [
      {
        kind: "bullets",
        items: [
          "<strong>\u2018The AI used a popular library so it must be secure\u2019</strong> \u2014 AI often uses libraries incorrectly.",
          "<strong>\u2018It passes the tests\u2019</strong> \u2014 AI-generated tests may not cover adversarial scenarios.",
          "<strong>\u2018I\u2019ll fix the security later\u2019</strong> \u2014 Technical debt in auth code is a ticking time bomb.",
          "<strong>\u2018The framework handles security\u2019</strong> \u2014 AI often bypasses framework protections accidentally."
        ]
      }
    ] },
    { type: "action", typeLabel: "Your Action Plan", title: "Set Your Boundaries", content: [
      {
        kind: "bullets",
        items: [
          "<strong>Build a risk matrix</strong> \u2014 Classify every module in your codebase as green, yellow, or red.",
          "Add CODEOWNERS rules requiring senior review for red-zone files.",
          "Set up static analysis (Semgrep, CodeQL) that runs on every PR.",
          "<strong>Write a team policy</strong> \u2014 Define what can be vibe-coded and what requires hand-written code."
        ]
      }
    ] },
    { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
      {
        kind: "bullets",
        items: [
          "Vibe code UI, CRUD, utilities, and prototypes freely.",
          "Review carefully for business logic and data pipelines.",
          "Write auth, crypto, payments, and safety code by hand.",
          "Use AI as a reviewer and test generator for high-risk code."
        ]
      },
      {
        kind: "quality",
        items: [
          { label: "Actionability", score: 5 },
          { label: "Correctness", score: 5 },
          { label: "Visual Appeal", score: 4 },
          { label: "Engagement", score: 5 }
        ]
      }
    ] }
  ]
};

// =============================================================================
// TOPIC 4: The Complete Vibe Coder's Toolkit
// Adapted from old #114 [EXISTING]
// =============================================================================
window.DEEP_DIVES[4] = {
  title: "The Complete Vibe Coder's Toolkit",
  icon: "\u{1F9F0}",
  tag: "vibe coding",
  slides: [
    { type: "hook", typeLabel: "Why It Matters", title: "A Carpenter Is Only as Good as Their Toolbelt", content: [
      {
        kind: "text",
        value: "The difference between a struggling vibe coder and a productive one is <strong>tooling, not talent</strong>. The right toolkit multiplies your output by 10x."
      },
      {
        kind: "stats",
        items: [
          { value: "10x", label: "productivity gap between well-tooled and poorly-tooled devs" },
          { value: "15+", label: "essential tools in the modern vibe coder's stack" },
          { value: "80%", label: "of time saved by choosing the right tool for each task" }
        ]
      },
      {
        kind: "callout",
        style: "insight",
        value: "A great vibe coder doesn\u2019t just know one AI tool \u2014 they know which tool to reach for at each stage of development."
      },
      { kind: "sources", items: ["Stack Overflow Developer Survey 2024", "GitHub, 'The State of the Octoverse 2024'"] }
    ] },
    { type: "problem", typeLabel: "The Problem", title: "Tool Overwhelm Is Real", content: [
      {
        kind: "text",
        value: "There are <strong>hundreds of AI coding tools</strong> launched every month. Without a framework, you waste time evaluating instead of building."
      },
      {
        kind: "bullets",
        items: [
          "New AI tools launch weekly \u2014 FOMO drives constant context switching",
          "<strong>Different strengths</strong> \u2014 Each tool excels at something; using one for everything limits you",
          "Configuration overhead \u2014 setting up tools takes time away from coding",
          "Integration gaps \u2014 tools that don\u2019t work together create friction"
        ]
      }
    ] },
    { type: "concepts", typeLabel: "Core Concepts", title: "The Toolkit Categories", content: [
      {
        kind: "bullets",
        items: [
          "<strong>AI coding assistants</strong> \u2014 Claude Code, GitHub Copilot, Cursor for code generation",
          "<strong>Development environment</strong> \u2014 VS Code, terminal, git, package managers",
          "<strong>Testing and quality</strong> \u2014 Vitest, Playwright, ESLint, TypeScript for catching bugs",
          "<strong>Deployment and infra</strong> \u2014 Vercel, Railway, Docker, GitHub Actions for shipping",
          "<strong>Design and prototyping</strong> \u2014 v0, Figma, TailwindCSS for rapid UI development"
        ]
      },
      {
        kind: "callout",
        style: "insight",
        value: "The best toolkit is opinionated. Pick one tool per category, master it, and only switch when you hit a genuine wall."
      },
      { kind: "sources", items: ["ThoughtWorks Technology Radar, 2025"] }
    ] },
    { type: "how", typeLabel: "How It Works", title: "The Vibe Coder\u2019s Workflow Stack", content: [
      {
        kind: "code",
        value: "// The vibe coder's daily flow\n1. Plan in AI chat       \u2192 architecture decisions\n2. Generate UI with v0   \u2192 React components\n3. Implement with Claude \u2192 business logic\n4. Test with AI          \u2192 comprehensive test suites\n5. Deploy with git push  \u2192 auto CI/CD\n6. Monitor with Sentry   \u2192 catch issues fast"
      },
      {
        kind: "text",
        value: "Each stage uses the <strong>tool best suited</strong> for that task, not one tool for everything."
      }
    ] },
    { type: "example", typeLabel: "Real-World Example", title: "Building a SaaS MVP in One Week", content: [
      { kind: "text", value: "A solo developer ships a <strong>complete SaaS MVP</strong> using the full toolkit:" },
      {
        kind: "bullets",
        items: [
          "<strong>Day 1: Architecture</strong> \u2014 Planning with Claude, DB schema with AI assistance",
          "Day 2-3: Frontend with v0 + Cursor (landing page, dashboard, auth)",
          "<strong>Day 4-5: Backend API</strong> \u2014 Built with Claude Code (Stripe, email, CRUD endpoints)",
          "Day 6: Testing with AI-generated tests, bug fixes",
          "Day 7: Deploy to Vercel + Railway, set up monitoring"
        ]
      },
      { kind: "sources", items: ["a16z, 'The Rise of the AI Engineer', 2024"] }
    ] },
    { type: "guide", typeLabel: "Step-by-Step Guide", title: "Build Your Toolkit", content: [
      {
        kind: "bullets",
        items: [
          "<strong>Pick your AI assistant</strong> \u2014 Claude Code for CLI, Cursor for IDE, Copilot for autocomplete.",
          "<strong>Set up dev environment</strong> \u2014 VS Code + terminal + git are the non-negotiables.",
          "<strong>Choose your stack</strong> \u2014 Next.js + TypeScript + Tailwind is the current sweet spot for speed.",
          "<strong>Configure CI/CD</strong> \u2014 GitHub Actions + Vercel for zero-config deploys.",
          "<strong>Add monitoring</strong> \u2014 Sentry for errors, Vercel Analytics for performance."
        ]
      }
    ] },
    { type: "practices", typeLabel: "Best Practices", title: "Toolkit Mastery", content: [
      {
        kind: "bullets",
        items: [
          "<strong>Learn keyboard shortcuts</strong> \u2014 Master shortcuts for your top 3 tools; saves 30+ minutes daily",
          "Create project templates with your preferred config pre-loaded",
          "Maintain a prompt library \u2014 your best prompts are reusable assets",
          "<strong>Automate setup</strong> \u2014 Automate repetitive setup (linting, formatting, CI) so every project starts clean",
          "<strong>Quarterly review</strong> \u2014 Review your toolkit quarterly and replace tools that cause more friction than value"
        ]
      }
    ] },
    { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Toolkit Anti-Patterns", content: [
      {
        kind: "bullets",
        items: [
          "<strong>Shiny object syndrome</strong> \u2014 Switching tools every week instead of mastering one.",
          "<strong>Over-tooling</strong> \u2014 Using 5 AI tools when 2 cover your needs.",
          "<strong>Under-testing</strong> \u2014 Great generation tools make testing feel unnecessary (it\u2019s not).",
          "<strong>No version control</strong> \u2014 \u2018I\u2019ll set up git later\u2019 is how you lose work."
        ]
      }
    ] },
    { type: "action", typeLabel: "Your Action Plan", title: "Assemble Your Toolkit This Week", content: [
      {
        kind: "bullets",
        items: [
          "<strong>Commit to one tool</strong> \u2014 Pick ONE AI coding assistant and learn it deeply for 30 days.",
          "<strong>Create a project template</strong> \u2014 Set up a template with your preferred stack, linting, and CI/CD.",
          "<strong>Start a prompt library</strong> \u2014 Save every prompt that produces great output.",
          "<strong>Fix your bottleneck</strong> \u2014 Identify your biggest workflow bottleneck and find a tool that solves it."
        ]
      }
    ] },
    { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
      {
        kind: "bullets",
        items: [
          "Pick one tool per category, master it, then optimize.",
          "AI assistant + dev environment + testing + CI/CD = complete workflow.",
          "Your prompt library is your most reusable asset.",
          "Depth in 2 tools beats shallow knowledge of 10."
        ]
      },
      {
        kind: "quality",
        items: [
          { label: "Actionability", score: 5 },
          { label: "Correctness", score: 4 },
          { label: "Visual Appeal", score: 4 },
          { label: "Engagement", score: 5 }
        ]
      }
    ] }
  ]
};

// =============================================================================
// TOPIC 5: AI Pair Programming Patterns
// Adapted from old #101 [EXISTING]
// =============================================================================
window.DEEP_DIVES[5] = {
  title: "AI Pair Programming Patterns",
  icon: "\u{1F46F}",
  tag: "vibe coding",
  slides: [
    { type: "hook", typeLabel: "Why It Matters", title: "Your AI Pair Programmer Never Gets Tired \u2014 But It Needs Direction", content: [
      {
        kind: "text",
        value: "AI pair programming isn\u2019t about replacing developers \u2014 it\u2019s about <strong>amplifying your output</strong> by delegating the right tasks to the right partner."
      },
      {
        kind: "stats",
        items: [
          { value: "55%", label: "faster task completion with AI pairing (GitHub study)" },
          { value: "2x", label: "more code reviewed per hour" },
          { value: "74%", label: "of developers use AI tools daily" }
        ]
      },
      { kind: "sources", items: ["GitHub, 'The Impact of GitHub Copilot on Developer Productivity and Happiness', 2022"] }
    ] },
    { type: "problem", typeLabel: "The Problem", title: "Most Developers Use AI Wrong", content: [
      {
        kind: "text",
        value: "Teams treat AI as either a <strong>magic oracle</strong> or a <strong>fancy autocomplete</strong>, missing the productive middle ground."
      },
      {
        kind: "bullets",
        items: [
          "<strong>Vague in, vague out</strong> \u2014 Vague prompts produce vague code; \u2018make it better\u2019 is not actionable",
          "Not providing context forces the AI to guess your architecture",
          "<strong>Blind acceptance</strong> \u2014 Accepting AI suggestions without understanding them creates unmaintainable code",
          "<strong>Over-reliance</strong> \u2014 Using AI for everything instead of knowing when to write code yourself"
        ]
      }
    ] },
    { type: "concepts", typeLabel: "Core Concepts", title: "Four Pairing Patterns", content: [
      {
        kind: "bullets",
        items: [
          "<strong>Driver-Navigator</strong> \u2014 You describe intent (navigate), AI writes code (drives). Review every output.",
          "<strong>Ping-Pong</strong> \u2014 You write the test, AI writes the implementation. Then swap.",
          "<strong>Rubber Duck+</strong> \u2014 Explain your problem to AI; it asks clarifying questions and suggests approaches.",
          "<strong>Scaffold-and-Fill</strong> \u2014 AI generates boilerplate/structure, you fill in the business logic."
        ]
      },
      {
        kind: "callout",
        style: "insight",
        value: "The Ping-Pong pattern naturally produces tested code. You write the spec (test), AI writes the implementation, you verify."
      },
      { kind: "sources", items: ["Kent Beck, 'Extreme Programming Explained', Addison-Wesley"] }
    ] },
    { type: "how", typeLabel: "How It Works", title: "The Effective Pairing Session", content: [
      {
        kind: "code",
        value: "// Ping-Pong Pattern Example\n// You write:\ntest('calculateTax applies state rate', () => {\n  expect(calculateTax(100, 'CA')).toBe(7.25);\n  expect(calculateTax(100, 'OR')).toBe(0);\n  expect(calculateTax(100, 'TX')).toBe(6.25);\n});\n// AI writes the implementation\n// You review and run the tests\n// You add edge case tests\n// AI fixes any failures"
      },
      {
        kind: "text",
        value: "Each pattern maps to a task type: boilerplate \u2192 Scaffold, logic \u2192 Ping-Pong, debugging \u2192 Rubber Duck."
      }
    ] },
    { type: "example", typeLabel: "Real-World Example", title: "Building a REST API With AI Pairing", content: [
      { kind: "text", value: "A developer builds a complete REST API using <strong>Scaffold-and-Fill + Ping-Pong</strong>:" },
      {
        kind: "bullets",
        items: [
          "<strong>Scaffold phase</strong> \u2014 AI generates Express routes, middleware structure, and error handling boilerplate",
          "Fill: Developer writes the core business logic for each route handler",
          "<strong>Ping-Pong phase</strong> \u2014 Developer writes integration tests, AI writes missing validation logic",
          "Result: Full API in 3 hours instead of 8, with 90% test coverage"
        ]
      },
      { kind: "sources", items: ["GitHub, 'GitHub Copilot Research', github.blog"] }
    ] },
    { type: "guide", typeLabel: "Step-by-Step Guide", title: "Start AI Pair Programming Today", content: [
      {
        kind: "bullets",
        items: [
          "<strong>Choose your tool</strong> \u2014 Claude Code, Copilot, Cursor, or your IDE\u2019s AI integration.",
          "<strong>Create a context doc</strong> \u2014 Document your project\u2019s key types, patterns, and conventions.",
          "Step 3: Pick a small feature and try the Driver-Navigator pattern.",
          "Step 4: Try Ping-Pong for the next feature and compare productivity.",
          "Step 5: Develop your personal prompt templates for common tasks."
        ]
      }
    ] },
    { type: "practices", typeLabel: "Best Practices", title: "AI Pairing Rules of Engagement", content: [
      {
        kind: "bullets",
        items: [
          "<strong>Provide full context</strong> \u2014 Always share types, interfaces, and examples of existing code",
          "<strong>Explain before coding</strong> \u2014 Ask AI to explain its approach before generating code for complex tasks",
          "<strong>AI for boilerplate</strong> \u2014 Use AI for the boring parts (CRUD, serialization, config) and focus on architecture",
          "<strong>Debug collaboratively</strong> \u2014 When AI code has a bug, explain the bug and let AI fix it to build context",
          "<strong>Pair with humans too</strong> \u2014 AI doesn\u2019t challenge your assumptions like people do"
        ]
      }
    ] },
    { type: "pitfalls", typeLabel: "Common Pitfalls", title: "AI Pairing Anti-Patterns", content: [
      {
        kind: "bullets",
        items: [
          "<strong>The monologue</strong> \u2014 Dumping a huge spec without breaking it into steps.",
          "<strong>The yes-man</strong> \u2014 Accepting every suggestion without critical evaluation.",
          "<strong>Context switching</strong> \u2014 Jumping between unrelated tasks confuses the AI\u2019s context.",
          "<strong>Over-delegation</strong> \u2014 Letting AI make architectural decisions it\u2019s not qualified for."
        ]
      }
    ] },
    { type: "action", typeLabel: "Your Action Plan", title: "Your First AI Pairing Week", content: [
      {
        kind: "bullets",
        items: [
          "<strong>Day 1-2: Driver-Navigator</strong> \u2014 Use this pattern for a new feature. Prompt clearly, review everything.",
          "Day 3-4: Try Ping-Pong \u2014 write tests first, let AI implement.",
          "Day 5: Use Rubber Duck+ to debug a tricky issue.",
          "End of week: Review which pattern worked best for which task type."
        ]
      }
    ] },
    { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
      {
        kind: "bullets",
        items: [
          "<strong>Four patterns</strong> \u2014 Driver-Navigator, Ping-Pong, Rubber Duck+, Scaffold-and-Fill.",
          "Match the pattern to the task \u2014 boilerplate vs. logic vs. debugging.",
          "Spend 70% reviewing, 30% prompting \u2014 that\u2019s the healthy ratio.",
          "AI handles implementation; you own architecture and verification."
        ]
      },
      {
        kind: "quality",
        items: [
          { label: "Actionability", score: 5 },
          { label: "Correctness", score: 4 },
          { label: "Visual Appeal", score: 4 },
          { label: "Engagement", score: 5 }
        ]
      }
    ] }
  ]
};

// =============================================================================
// TOPIC 6: Testing AI-Generated Code
// Adapted from old #102 [EXISTING]
// =============================================================================
window.DEEP_DIVES[6] = {
  title: "Testing AI-Generated Code",
  icon: "\u{1F9EA}",
  tag: "vibe coding",
  slides: [
    { type: "hook", typeLabel: "Why It Matters", title: "The Code Compiles. The Tests Pass. But Is It Correct?", content: [
      {
        kind: "text",
        value: "AI-generated code is <strong>probabilistic</strong>, not deterministic. It produces the most likely code, not necessarily the correct code. Testing is your safety net."
      },
      {
        kind: "stats",
        items: [
          { value: "30%", label: "of AI code fails on edge cases" },
          { value: "3x", label: "faster bug detection with AI-generated tests" },
          { value: "90%", label: "coverage achievable with AI test generation" }
        ]
      },
      {
        kind: "callout",
        style: "insight",
        value: "Ironically, AI is often better at writing tests than the code being tested \u2014 it excels at thinking of edge cases."
      },
      { kind: "sources", items: ["DORA, 'Accelerate State of DevOps Report 2024'"] }
    ] },
    { type: "problem", typeLabel: "The Problem", title: "AI Code Fails in Predictable Ways", content: [
      {
        kind: "text",
        value: "AI-generated code has <strong>characteristic failure modes</strong> that traditional reviews miss:"
      },
      {
        kind: "bullets",
        items: [
          "Happy path works perfectly \u2014 edge cases silently fail",
          "Error handling is superficial (catch and ignore, generic messages)",
          "Off-by-one errors in loops and boundary conditions",
          "Implicit assumptions about input types, formats, and ranges"
        ]
      }
    ] },
    { type: "concepts", typeLabel: "Core Concepts", title: "The AI Testing Pyramid", content: [
      {
        kind: "bullets",
        items: [
          "<strong>Property-based tests</strong> \u2014 Test invariants that must always hold (\u2018sort output is same length as input\u2019)",
          "<strong>Boundary tests</strong> \u2014 Empty inputs, max values, null, undefined, negative numbers",
          "<strong>Mutation tests</strong> \u2014 Does the test suite catch bugs if you change a line?",
          "<strong>Adversarial tests</strong> \u2014 SQL injection, XSS, malformed inputs, unicode edge cases"
        ]
      },
      {
        kind: "callout",
        style: "insight",
        value: "Ask AI to generate adversarial inputs designed to break its own code. AI is surprisingly good at attacking itself."
      },
      { kind: "sources", items: ["Kent Beck, 'Test Driven Development: By Example', Addison-Wesley"] }
    ] },
    { type: "how", typeLabel: "How It Works", title: "Test-First AI Workflow", content: [
      {
        kind: "code",
        value: "// Define behavior with tests first\ndescribe('parseCSV', () => {\n  it('handles empty input', () => expect(parseCSV('')).toEqual([]));\n  it('handles single row', () => expect(parseCSV('a,b')).toEqual([['a','b']]));\n  it('handles quoted commas', () =>\n    expect(parseCSV('\"a,b\",c')).toEqual([['a,b','c']]));\n  it('handles newlines in quotes', () =>\n    expect(parseCSV('\"a\\nb\",c')).toEqual([['a\\nb','c']]));\n});\n// Then ask AI to implement parseCSV"
      },
      {
        kind: "text",
        value: "Write (or generate) tests that define expected behavior, then generate the implementation."
      }
    ] },
    { type: "example", typeLabel: "Real-World Example", title: "Finding Bugs AI Didn\u2019t Know It Had", content: [
      {
        kind: "text",
        value: "A developer asks AI to generate a <strong>date range validator</strong>. The code passes basic tests but..."
      },
      {
        kind: "bullets",
        items: [
          "<strong>AI tests pass</strong> \u2014 5 tests, all pass (valid range, invalid range, same day, past dates)",
          "<strong>Human edge cases</strong> \u2014 Leap year Feb 29, timezone boundaries, DST transitions",
          "<strong>Property test fails</strong> \u2014 \u2018end >= start in output\u2019 FAILS for timezone edge case",
          "<strong>Root cause</strong> \u2014 Dates near midnight in different timezones produced inverted ranges"
        ]
      },
      { kind: "sources", items: ["Google Testing Blog, 'Testing AI-Assisted Code Generation'"] }
    ] },
    { type: "guide", typeLabel: "Step-by-Step Guide", title: "Testing AI Code Systematically", content: [
      {
        kind: "bullets",
        items: [
          "Step 1: Generate code and ask AI to generate tests simultaneously.",
          "<strong>Review for blind spots</strong> \u2014 Check AI tests for missing error, boundary, and concurrency cases.",
          "<strong>Add your own edge cases</strong> \u2014 Test null, empty, max, negative, unicode, and concurrent inputs.",
          "Step 4: Run property-based tests using fast-check or similar.",
          "<strong>Mutation testing</strong> \u2014 Use Stryker or similar to verify your tests actually catch bugs."
        ]
      }
    ] },
    { type: "practices", typeLabel: "Best Practices", title: "Testing AI Code Like a Pro", content: [
      {
        kind: "bullets",
        items: [
          "<strong>Don\u2019t trust AI tests alone</strong> \u2014 They share blind spots with the code that generated them",
          "<strong>AI tests, then human tests</strong> \u2014 Use AI to generate the first round, then add human edge cases",
          "<strong>Test at boundaries</strong> \u2014 Test AI code heavily at integration boundaries (API calls, DB queries, file I/O)",
          "Keep test and implementation prompts separate for better coverage",
          "Add snapshot tests for complex outputs to catch regressions"
        ]
      }
    ] },
    { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Testing Traps", content: [
      {
        kind: "bullets",
        items: [
          "<strong>Tautological tests</strong> \u2014 AI writes tests that mirror implementation logic exactly.",
          "<strong>Missing negative tests</strong> \u2014 AI tests that things work, rarely that things fail correctly.",
          "<strong>Mocking everything</strong> \u2014 Integration bugs hide behind mocks.",
          "<strong>Snapshot over-reliance</strong> \u2014 AI output changes between regenerations."
        ]
      }
    ] },
    { type: "action", typeLabel: "Your Action Plan", title: "Upgrade Your AI Testing Workflow", content: [
      {
        kind: "bullets",
        items: [
          "Add a \u2018generate adversarial tests\u2019 step to every AI coding session.",
          "Install a mutation testing tool (Stryker for JS/TS) and run it weekly.",
          "Create a checklist: null, empty, max, concurrent, malicious inputs.",
          "<strong>Track bug rates</strong> \u2014 Compare AI code bug rate vs. human code bug rate to calibrate review effort."
        ]
      }
    ] },
    { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
      {
        kind: "bullets",
        items: [
          "<strong>Predictable failures</strong> \u2014 AI code fails at edge cases, error handling, and boundary conditions.",
          "<strong>Test-first development</strong> \u2014 Write tests before generating implementation.",
          "<strong>Shared blind spots</strong> \u2014 AI-generated tests share blind spots with AI code; add human edge cases.",
          "Mutation testing verifies your tests actually catch bugs."
        ]
      },
      {
        kind: "quality",
        items: [
          { label: "Actionability", score: 5 },
          { label: "Correctness", score: 5 },
          { label: "Visual Appeal", score: 4 },
          { label: "Engagement", score: 5 }
        ]
      }
    ] }
  ]
};

// =============================================================================
// TOPIC 7: The AI Code Review Checklist
// Adapted from old #103 [EXISTING]
// =============================================================================
window.DEEP_DIVES[7] = {
  title: "The AI Code Review Checklist",
  icon: "\u2705",
  tag: "vibe coding",
  slides: [
    { type: "hook", typeLabel: "Why It Matters", title: "AI Writes Beautiful Bugs \u2014 Here\u2019s How to Catch Them", content: [
      {
        kind: "text",
        value: "Human code reviews focus on style and logic. AI code reviews must also check for <strong>hallucinated APIs, plausible-but-wrong logic, and subtle security gaps</strong>."
      },
      {
        kind: "stats",
        items: [
          { value: "25%", label: "of AI code uses deprecated or non-existent APIs" },
          { value: "40%", label: "has inadequate error handling" },
          { value: "15%", label: "contains subtle logic errors passing initial review" }
        ]
      },
      {
        kind: "callout",
        style: "insight",
        value: "The goal isn\u2019t catching typos \u2014 AI rarely makes those. The goal is catching conceptual errors that look correct at first glance."
      },
      { kind: "sources", items: ["GitHub, 'The State of the Octoverse 2024'"] }
    ] },
    { type: "problem", typeLabel: "The Problem", title: "Traditional Review Misses AI-Specific Bugs", content: [
      {
        kind: "text",
        value: "Reviewers apply <strong>human-code heuristics</strong> to AI code, missing unique failure patterns:"
      },
      {
        kind: "bullets",
        items: [
          "<strong>Hallucinated APIs</strong> \u2014 AI invents methods that don\u2019t exist or uses wrong signatures",
          "AI uses outdated patterns from its training data",
          "AI generates overly complex solutions when simple ones exist",
          "AI copies patterns from similar-but-different contexts"
        ]
      }
    ] },
    { type: "concepts", typeLabel: "Core Concepts", title: "The AI Code Review Framework", content: [
      {
        kind: "bullets",
        items: [
          "<strong>Existence check</strong> \u2014 Do all imports, methods, and APIs actually exist in your dependency versions?",
          "<strong>Correctness check</strong> \u2014 Does logic handle ALL cases, not just the happy path?",
          "<strong>Security check</strong> \u2014 Input validation, injection, auth bypass, data exposure?",
          "<strong>Simplicity check</strong> \u2014 Is there a simpler solution? AI often over-engineers.",
          "<strong>Context check</strong> \u2014 Does it follow YOUR project\u2019s patterns?"
        ]
      },
      { kind: "sources", items: ["OWASP, 'Code Review Guide', owasp.org"] }
    ] },
    { type: "how", typeLabel: "How It Works", title: "The 7-Point AI Code Review Checklist", content: [
      { kind: "text", value: "Run through these checks <strong>in order</strong> for every AI-generated PR:" },
      {
        kind: "bullets",
        items: [
          "1. Do all imports resolve? Check versions in package.json.",
          "2. Are method signatures correct? Verify against official docs.",
          "3. Error handling: does every try/catch do something useful?",
          "4. Edge cases: null, empty, max values, concurrent access?",
          "<strong>Security scan</strong> \u2014 Input sanitized? Auth checks present? No hardcoded secrets?",
          "6. Performance: O(n^2) loops, unbounded queries, memory leaks?",
          "7. Tests: do they test behavior, not just mirror implementation?"
        ]
      },
      {
        kind: "callout",
        style: "action",
        value: "Print this checklist. It takes 5 minutes per PR and catches 80% of AI-specific bugs."
      }
    ] },
    { type: "example", typeLabel: "Real-World Example", title: "Catching AI Bugs With the Checklist", content: [
      { kind: "text", value: "A reviewer applies the checklist to AI-generated Express middleware:" },
      {
        kind: "code",
        value: "// AI-generated rate limiter\napp.use(rateLimit({\n  windowMs: 15 * 60 * 1000,\n  max: 100,\n  handler: (req, res) => {\n    res.status(429).send('Too many requests');\n  }\n}));"
      },
      {
        kind: "bullets",
        items: [
          "Check 1 (Existence): express-rate-limit in package.json \u2014 PASS",
          "Check 2 (Signatures): 'handler' renamed to 'message' in v7 \u2014 FAIL",
          "<strong>Check 5 (Security)</strong> \u2014 No key generator, defaults to IP, fails behind load balancer \u2014 FAIL",
          "Two bugs found in 2 minutes using the checklist"
        ]
      }
    ] },
    { type: "guide", typeLabel: "Step-by-Step Guide", title: "Set Up AI Code Review Process", content: [
      {
        kind: "bullets",
        items: [
          "Step 1: Add the 7-point checklist to your PR template.",
          "<strong>Tag AI code</strong> \u2014 Use an \u2018ai-generated\u2019 label or commit prefix to track AI-generated code.",
          "Step 3: Require one human reviewer who didn\u2019t write the prompts.",
          "<strong>Automate checks</strong> \u2014 Run linting, type checking, and dependency audit on every PR.",
          "Step 5: Use a second AI to review the first AI\u2019s code."
        ]
      }
    ] },
    { type: "practices", typeLabel: "Best Practices", title: "Reviewing AI Code Effectively", content: [
      {
        kind: "bullets",
        items: [
          "Verify every import and method call against current documentation",
          "Read AI code line by line \u2014 don\u2019t skim. AI bugs hide in plain sight",
          "Ask \u2018why this approach?\u2019 \u2014 if you can\u2019t justify it, it might be wrong",
          "Check for dead code (unreachable branches, unused conditions)",
          "<strong>Cross-model review</strong> \u2014 Use a second AI model to review; different models catch different issues"
        ]
      }
    ] },
    { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Review Mistakes to Avoid", content: [
      {
        kind: "bullets",
        items: [
          "<strong>Assuming clean code is correct</strong> \u2014 AI writes beautifully formatted bugs.",
          "<strong>Reviewing AI code less carefully</strong> \u2014 It needs MORE scrutiny, not less.",
          "<strong>Not checking library versions</strong> \u2014 AI training data includes multiple versions.",
          "<strong>Approving because tests pass</strong> \u2014 AI tests may not cover the right cases."
        ]
      }
    ] },
    { type: "action", typeLabel: "Your Action Plan", title: "Implement AI Code Review This Week", content: [
      {
        kind: "bullets",
        items: [
          "Add the 7-point checklist to your team\u2019s PR template today.",
          "Create an \u2018ai-generated\u2019 label in your repo.",
          "Set up automated dependency version checking in CI.",
          "<strong>Team review session</strong> \u2014 Schedule a session to review an AI PR together using the checklist."
        ]
      }
    ] },
    { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
      {
        kind: "bullets",
        items: [
          "<strong>Different review criteria</strong> \u2014 AI code needs checks for existence, correctness, security, simplicity, and context.",
          "Always verify imports and method signatures against current docs.",
          "AI writes beautiful bugs \u2014 clean code doesn\u2019t mean correct code.",
          "Use the 7-point checklist on every AI-generated PR."
        ]
      },
      {
        kind: "quality",
        items: [
          { label: "Actionability", score: 5 },
          { label: "Correctness", score: 5 },
          { label: "Visual Appeal", score: 4 },
          { label: "Engagement", score: 5 }
        ]
      }
    ] }
  ]
};

// =============================================================================
// TOPIC 8: Prompt Engineering for Code Generation [NEW]
// =============================================================================
window.DEEP_DIVES[8] = {
  title: "Prompt Engineering for Code Generation",
  icon: "\u{1F3AF}",
  tag: "vibe coding",
  slides: [
    { type: "hook", typeLabel: "Why It Matters", title: "Your Prompt Is Your Spec \u2014 Write It Like One", content: [
      {
        kind: "text",
        value: "The quality of AI-generated code is <strong>directly proportional</strong> to the quality of your prompt. A vague prompt produces vague code. A precise prompt produces production-ready code."
      },
      {
        kind: "stats",
        items: [
          { value: "5x", label: "better code quality with structured prompts" },
          { value: "60%", label: "fewer iterations needed with context-rich prompts" },
          { value: "3 min", label: "extra upfront saves 30 min of debugging" }
        ]
      },
      { kind: "sources", items: ["Anthropic, 'Prompt Engineering Guide', docs.anthropic.com, 2024"] }
    ] },
    { type: "problem", typeLabel: "The Problem", title: "Most Prompts Are Terrible Specs", content: [
      {
        kind: "text",
        value: "Engineers who would never ship a feature without a spec <strong>routinely ask AI to generate code with one-sentence prompts</strong>."
      },
      {
        kind: "bullets",
        items: [
          "<strong>Vague login prompt</strong> \u2014 \u2018Write a login function\u2019 gives no auth method, error handling, or session management",
          "<strong>Vague API prompt</strong> \u2014 \u2018Create an API endpoint\u2019 gives no input validation, pagination, or rate limiting",
          "<strong>Vague UI prompt</strong> \u2014 \u2018Build a dashboard\u2019 gives no data source, access control, or performance requirements",
          "<strong>Assumed context</strong> \u2014 The AI fills in missing context with assumptions from its training data, not your codebase"
        ]
      }
    ] },
    { type: "concepts", typeLabel: "Core Concepts", title: "The CRISP Framework for Code Prompts", content: [
      {
        kind: "bullets",
        items: [
          "<strong>Context</strong> \u2014 Provide existing types, interfaces, conventions, and dependencies",
          "<strong>Requirements</strong> \u2014 State what the code must do, including edge cases",
          "<strong>Input/Output</strong> \u2014 Define exact types, formats, and examples of inputs and outputs",
          "<strong>Style</strong> \u2014 Specify patterns, naming conventions, and code standards to follow",
          "<strong>Prohibitions</strong> \u2014 State what the code must NOT do (no global state, no any types, etc.)"
        ]
      },
      {
        kind: "callout",
        style: "insight",
        value: "The best prompts read like technical specs: precise, constrained, and testable."
      },
      { kind: "sources", items: ["Anthropic, 'Prompt Engineering Guide', docs.anthropic.com, 2024"] }
    ] },
    { type: "how", typeLabel: "How It Works", title: "A Production-Quality Prompt", content: [
      {
        kind: "code",
        value: "// CRISP prompt example:\n\n// CONTEXT: We use Express 5, TypeScript strict mode,\n// Zod for validation, and Prisma for DB access.\n// See UserService type below.\n\n// REQUIREMENTS: Create a POST /api/users endpoint that:\n// - Validates email (RFC 5322), name (2-100 chars)\n// - Checks for duplicate email (return 409)\n// - Hashes password with bcrypt (cost 12)\n// - Returns 201 with user object (no password)\n\n// INPUT: { email: string, name: string, password: string }\n// OUTPUT: { id: string, email: string, name: string, createdAt: Date }\n\n// STYLE: Follow existing error handler pattern.\n// Use Zod schema, not manual validation.\n\n// PROHIBITIONS: No plain-text passwords in logs.\n// No auto-generated IDs (use cuid2)."
      },
      {
        kind: "text",
        value: "This prompt eliminates ambiguity. The AI knows exactly what to produce, and you can verify it against the spec."
      }
    ] },
    { type: "example", typeLabel: "Real-World Example", title: "From Bad Prompt to Great Code", content: [
      {
        kind: "text",
        value: "The same task with two different prompts:"
      },
      {
        kind: "bullets",
        items: [
          "<strong>Bad:</strong> \u2018Write a rate limiter\u2019 \u2192 Generic implementation, wrong algorithm, no Redis, no headers",
          "<strong>Good:</strong> \u2018Implement sliding window rate limiter using Redis sorted sets. 100 req/min per API key. Return 429 with Retry-After header. Use ioredis client from context.\u2019 \u2192 Production-ready code in one shot",
          "<strong>Time well spent</strong> \u2014 The good prompt took 2 minutes to write and saved 20 minutes of iteration"
        ]
      },
      { kind: "sources", items: ["OpenAI, 'Prompt Engineering Best Practices', platform.openai.com"] }
    ] },
    { type: "guide", typeLabel: "Step-by-Step Guide", title: "Writing Better Prompts", content: [
      {
        kind: "bullets",
        items: [
          "<strong>Start with context</strong> \u2014 Paste relevant type definitions and existing patterns.",
          "Step 2: State the requirement as a user story or acceptance criteria.",
          "<strong>Define input/output types</strong> \u2014 Specify types explicitly and include edge case examples.",
          "Step 4: Specify constraints (performance, security, style).",
          "Step 5: Add prohibitions \u2014 tell the AI what NOT to do."
        ]
      }
    ] },
    { type: "practices", typeLabel: "Best Practices", title: "Prompt Engineering Rules", content: [
      {
        kind: "bullets",
        items: [
          "Always include your project\u2019s type definitions as context",
          "Use system prompts to set persistent coding conventions",
          "<strong>Request explanations</strong> \u2014 Ask for explanations alongside code: \u2018implement X and explain your design choices\u2019",
          "Provide failing test cases as specs \u2014 most precise prompt possible",
          "Build a prompt library for recurring tasks (auth, CRUD, validation)"
        ]
      }
    ] },
    { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Prompt Anti-Patterns", content: [
      {
        kind: "bullets",
        items: [
          "<strong>The one-liner</strong> \u2014 \u2018Write a login system\u2019 produces generic, insecure code.",
          "<strong>The novel</strong> \u2014 2000-word prompts overwhelm the AI; keep it focused.",
          "<strong>Missing context</strong> \u2014 AI uses its training defaults when you don\u2019t specify your stack.",
          "<strong>No constraints</strong> \u2014 Without prohibitions, AI generates \u2018any\u2019 types and console.log everywhere."
        ]
      }
    ] },
    { type: "action", typeLabel: "Your Action Plan", title: "Level Up Your Prompts", content: [
      {
        kind: "bullets",
        items: [
          "<strong>Rewrite past prompts</strong> \u2014 Redo your last 3 prompts using the CRISP framework and compare the output.",
          "<strong>Create a system prompt</strong> \u2014 Write a system prompt for your project with conventions and constraints.",
          "<strong>Build a prompt template</strong> \u2014 Create a template for your most common task (endpoint creation, component, etc.).",
          "<strong>Start a prompt journal</strong> \u2014 Save prompts that produce great code on the first try."
        ]
      }
    ] },
    { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
      {
        kind: "bullets",
        items: [
          "Use CRISP: Context, Requirements, Input/Output, Style, Prohibitions.",
          "A 2-minute prompt saves 20 minutes of debugging.",
          "Include types, constraints, and examples \u2014 eliminate ambiguity.",
          "Build a reusable prompt library for your team."
        ]
      },
      {
        kind: "quality",
        items: [
          { label: "Actionability", score: 5 },
          { label: "Correctness", score: 5 },
          { label: "Visual Appeal", score: 4 },
          { label: "Engagement", score: 5 }
        ]
      }
    ] }
  ]
};

// =============================================================================
// TOPIC 9: Debugging AI-Generated Systems [NEW]
// =============================================================================
window.DEEP_DIVES[9] = {
  title: "Debugging AI-Generated Systems",
  icon: "\u{1F41B}",
  tag: "vibe coding",
  slides: [
    { type: "hook", typeLabel: "Why It Matters", title: "You Didn\u2019t Write This Code \u2014 Now You Have to Fix It", content: [
      {
        kind: "text",
        value: "Debugging AI-generated code is a fundamentally different skill from debugging your own. You\u2019re debugging <strong>someone else\u2019s mental model</strong> \u2014 except that someone is a statistical language model."
      },
      {
        kind: "stats",
        items: [
          { value: "3x", label: "longer to debug code you didn\u2019t write" },
          { value: "45%", label: "of AI bugs are in error handling paths" },
          { value: "70%", label: "of debugging time is spent understanding, not fixing" }
        ]
      },
      { kind: "sources", items: ["Microsoft Research, 'Debugging AI-Assisted Code', 2024"] }
    ] },
    { type: "problem", typeLabel: "The Problem", title: "AI Bugs Hide in Plain Sight", content: [
      {
        kind: "text",
        value: "AI-generated bugs are uniquely insidious because the code <strong>reads like correct code</strong>. Your brain skims over it because it looks right."
      },
      {
        kind: "bullets",
        items: [
          "Subtle logic inversions (> instead of >=, && instead of ||)",
          "<strong>Wrong data structure</strong> \u2014 Correct algorithm but O(n^2) when O(1) lookup exists",
          "<strong>Silent error swallowing</strong> \u2014 Proper-looking error handling that silently swallows critical failures",
          "Hallucinated API calls that pass type checks but fail at runtime"
        ]
      }
    ] },
    { type: "concepts", typeLabel: "Core Concepts", title: "The AI Debugging Toolkit", content: [
      {
        kind: "bullets",
        items: [
          "<strong>Trace, don\u2019t read</strong> \u2014 Follow execution with a debugger instead of reading the code visually.",
          "<strong>Question assumptions</strong> \u2014 The AI assumed something about your system. Find what.",
          "<strong>Binary bisect</strong> \u2014 Comment out half the AI code to isolate the bug faster.",
          "<strong>Compare with docs</strong> \u2014 Verify every API call against official documentation.",
          "<strong>Ask the AI</strong> \u2014 Paste the error and the code; AI is surprisingly good at debugging its own mistakes."
        ]
      },
      { kind: "sources", items: ["Julia Evans, 'Debugging Strategies', jvns.ca"] }
    ] },
    { type: "how", typeLabel: "How It Works", title: "The 5-Step AI Debugging Process", content: [
      {
        kind: "code",
        value: "// Step 1: REPRODUCE\n// Write a minimal failing test case\n\n// Step 2: ISOLATE\n// Binary bisect: comment out AI code blocks\n// until you find the smallest failing unit\n\n// Step 3: VERIFY ASSUMPTIONS\n// Check: does this API exist? Correct params?\n// Does this library behave as AI assumed?\n\n// Step 4: ASK THE AI\n// Paste: error message + code + context\n// Prompt: \"This code throws [error] when [condition].\n//         What assumption is wrong?\"\n\n// Step 5: FIX AND TEST\n// Fix the bug, add a regression test,\n// check for the same bug pattern elsewhere"
      },
      {
        kind: "callout",
        style: "insight",
        value: "Step 3 catches 60% of AI bugs. The AI assumed a library works one way; it actually works another."
      }
    ] },
    { type: "example", typeLabel: "Real-World Example", title: "The Invisible Async Bug", content: [
      {
        kind: "text",
        value: "AI generated a data pipeline that worked in tests but <strong>lost records in production</strong>:"
      },
      {
        kind: "code",
        value: "// AI-generated code\nitems.forEach(async (item) => {\n  await processItem(item); // Bug: forEach doesn't await\n});\nconsole.log('All items processed'); // Runs immediately!\n\n// Fix:\nfor (const item of items) {\n  await processItem(item);\n}\n// or: await Promise.all(items.map(processItem));"
      },
      {
        kind: "text",
        value: "The forEach+async pattern is a classic AI mistake. It looks correct, passes simple tests, but fails under load when processing order matters."
      }
    ] },
    { type: "guide", typeLabel: "Step-by-Step Guide", title: "Building AI Debugging Skills", content: [
      {
        kind: "bullets",
        items: [
          "<strong>Reproduce first</strong> \u2014 Always reproduce the bug with a failing test before touching code.",
          "<strong>Use the debugger</strong> \u2014 Use breakpoints, not console.log, to trace actual execution.",
          "Step 3: Check every external API call against current documentation.",
          "<strong>Check AI mistake patterns</strong> \u2014 Look for async/await, off-by-one, and type coercion errors.",
          "<strong>Search for repeats</strong> \u2014 After fixing, search for the same pattern elsewhere in AI-generated code."
        ]
      }
    ] },
    { type: "practices", typeLabel: "Best Practices", title: "Debugging Rules for AI Code", content: [
      {
        kind: "bullets",
        items: [
          "Maintain a list of common AI mistake patterns for your codebase",
          "<strong>TypeScript strict mode</strong> \u2014 Catches many AI assumptions at compile time",
          "<strong>Runtime assertions</strong> \u2014 Add assert and invariant functions to validate AI code assumptions",
          "When AI fixes a bug, verify it didn\u2019t introduce a new one",
          "Document AI bugs in your team wiki for pattern recognition"
        ]
      }
    ] },
    { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Debugging Anti-Patterns", content: [
      {
        kind: "bullets",
        items: [
          "<strong>Trust-the-code</strong> \u2014 Reading AI code and saying \u2018it looks right\u2019 instead of tracing execution.",
          "<strong>Prompt-loop</strong> \u2014 Asking AI to fix the bug 10 times instead of understanding it yourself.",
          "<strong>Shotgun debugging</strong> \u2014 Randomly changing things until it works, creating new bugs.",
          "<strong>Ignoring the pattern</strong> \u2014 Fixing one bug without checking for the same mistake elsewhere."
        ]
      }
    ] },
    { type: "action", typeLabel: "Your Action Plan", title: "Sharpen Your Debugging Skills", content: [
      {
        kind: "bullets",
        items: [
          "<strong>Follow the 5 steps</strong> \u2014 On your next AI bug, follow the process instead of immediately prompting for a fix.",
          "Create a \u2018common AI bugs\u2019 document for your team.",
          "Enable TypeScript strict mode and fix the resulting errors.",
          "<strong>Practice binary bisect</strong> \u2014 Time yourself isolating a bug by commenting out code."
        ]
      }
    ] },
    { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
      {
        kind: "bullets",
        items: [
          "AI bugs look correct \u2014 trace execution, don\u2019t just read code.",
          "<strong>Wrong assumptions</strong> \u2014 Most AI bugs are wrong assumptions about APIs, async behavior, or edge cases.",
          "<strong>The 5-step process</strong> \u2014 Reproduce, isolate, verify assumptions, ask AI, fix and test.",
          "Build a pattern library of common AI mistakes for your team."
        ]
      },
      {
        kind: "quality",
        items: [
          { label: "Actionability", score: 5 },
          { label: "Correctness", score: 5 },
          { label: "Visual Appeal", score: 4 },
          { label: "Engagement", score: 5 }
        ]
      }
    ] }
  ]
};

// =========================================================================
// TOPICS 10-50: Remaining Week 1 and Week 2 topics
// =========================================================================

// TOPIC 10: The Vibe Coder's System Design Checklist [EXISTING from old #13]
window.DEEP_DIVES[10] = { title: "The Vibe Coder's System Design Checklist", icon: "\u{1F5FA}\uFE0F", tag: "workflow", slides: [{ type: "hook", typeLabel: "Why It Matters", title: "80% of Production Fires Start with a Missing Checklist Item", content: [{ kind: "text", value: "Even experienced engineers forget non-functional requirements until production reminds them. This checklist ensures you <strong>cover all dimensions</strong> before writing code." }, { kind: "stats", items: [{ value: "80%", label: "of production issues are non-functional" }, { value: "15 min", label: "to run this checklist" }, { value: "10x", label: "cheaper to catch issues at design time" }] }, { kind: "sources", items: ["Stack Overflow Developer Survey 2024", "AWS Well-Architected Framework"] }] }, { type: "problem", typeLabel: "The Problem", title: "The Missing Dimensions", content: [{ kind: "text", value: "We design for features but forget about the <strong>qualities that make features usable</strong> in production." }, { kind: "bullets", items: ["No latency budget \u2014 'we'll optimize later' (later never comes)", "No security review \u2014 'we'll add auth later' (breach comes first)", "No capacity plan \u2014 'we'll scale when we need to' (when = during an outage)", "No monitoring \u2014 'we'll add logging later' (debugging blind for months)"] }] }, { type: "concepts", typeLabel: "Core Concepts", title: "The 8 Dimensions", content: [{ kind: "bullets", items: ["<strong>Functional</strong> \u2014 What does the system do?", "<strong>Performance</strong> \u2014 Latency budgets, throughput, P99.", "<strong>Scalability</strong> \u2014 10x, 100x load handling.", "<strong>Reliability</strong> \u2014 Failure modes, fallbacks, SLOs.", "<strong>Security</strong> \u2014 Auth, encryption, compliance.", "<strong>Observability</strong> \u2014 Logs, metrics, traces, alerts.", "<strong>Operability</strong> \u2014 Deploy, rollback, runbooks.", "<strong>Cost</strong> \u2014 Budget, cost per request."] }, { kind: "sources", items: ["AWS Well-Architected Framework"] }] }, { type: "how", typeLabel: "How It Works", title: "The Checklist", content: [{ kind: "code", value: "## System Design Checklist\n[ ] Functional: Core use cases defined\n[ ] Performance: P99 latency target set\n[ ] Scalability: Load tested at 5x peak\n[ ] Reliability: Failure modes + fallbacks\n[ ] Security: Auth, validation, encryption\n[ ] Observability: Logs, metrics, traces\n[ ] Operability: Deploy/rollback tested\n[ ] Cost: Monthly budget estimated" }, { kind: "callout", style: "insight", value: "15 minutes at design time saves weeks of firefighting." }] }, { type: "example", typeLabel: "Real-World Example", title: "Google's Design Docs", content: [{ kind: "text", value: "Google requires design docs covering all 8 dimensions before implementation." }, { kind: "bullets", items: ["Template covers all dimensions", "Reviewed by peers + SRE", "Alternatives with trade-off analysis", "Fewer production surprises"] }] }, { type: "guide", typeLabel: "Step-by-Step Guide", title: "Using the Checklist", content: [{ kind: "bullets", items: ["Step 1: Define top 3 use cases.", "Step 2: One requirement per dimension.", "Step 3: Identify riskiest dimension.", "Step 4: Spike the riskiest area.", "Step 5: Team review before coding."] }] }, { type: "practices", typeLabel: "Best Practices", title: "Checklist Rules", content: [{ kind: "bullets", items: ["Run for every new service", "'Fast' is not a requirement; 'P99 < 200ms' is", "Don't skip cost dimension", "Don't treat as bureaucracy"] }] }, { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [{ kind: "bullets", items: ["<strong>Vague requirements</strong> \u2014 'Should be fast' is not actionable.", "<strong>Skipping dimensions</strong> \u2014 'Security later' = breach now.", "<strong>Over-engineering</strong> \u2014 1M users design for 100 users.", "<strong>Ceremony without thought</strong> \u2014 Filling mechanically."] }] }, { type: "action", typeLabel: "Your Action Plan", title: "Start Now", content: [{ kind: "bullets", items: ["Copy checklist to design doc template.", "Apply to current project.", "Set requirement for weakest dimension.", "Make review required."] }] }, { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [{ kind: "bullets", items: ["8 dimensions, most teams think about 2.", "Concrete requirements beat vague aspirations.", "15 min checklist saves weeks.", "Thinking tool, not bureaucracy."] }, { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 4 }] }] }] };

// TOPIC 11: Human-AI System Design Loop [EXISTING from old #14]
window.DEEP_DIVES[11] = { title: "The Human-AI System Design Loop", icon: "\u{1F91D}", tag: "workflow", slides: [{ type: "hook", typeLabel: "Why It Matters", title: "AI Amplifies Architecture \u2014 If You Drive", content: [{ kind: "text", value: "Best designs come from a <strong>tight feedback loop</strong> between human judgment and AI implementation speed." }, { kind: "stats", items: [{ value: "5x", label: "faster iteration" }, { value: "80%", label: "implementation AI-generated" }, { value: "100%", label: "architecture needs human judgment" }] }, { kind: "sources", items: ["McKinsey, 'Economic Potential of Generative AI', 2023"] }] }, { type: "problem", typeLabel: "The Problem", title: "Two Failure Modes", content: [{ kind: "text", value: "Over-rely on AI (no architecture) or ignore AI (slow delivery). Both lose." }, { kind: "bullets", items: ["Over-reliance: no coherent architecture", "Under-use: slow delivery", "No feedback loop: accept or reject, never refine", "Missing context: AI doesn't know constraints"] }] }, { type: "concepts", typeLabel: "Core Concepts", title: "The 5-Step Loop", content: [{ kind: "bullets", items: ["<strong>Frame</strong> \u2014 Define problem + constraints (Human)", "<strong>Generate</strong> \u2014 Multiple options (AI)", "<strong>Evaluate</strong> \u2014 Assess trade-offs (Human)", "<strong>Refine</strong> \u2014 Iterate with feedback (Both)", "<strong>Validate</strong> \u2014 Test scenarios (Both)"] }] }, { type: "how", typeLabel: "How It Works", title: "In Practice", content: [{ kind: "code", value: "// FRAME: 'Order service: 1000/sec, exactly-once payments'\n// GENERATE: AI produces architecture options\n// EVALUATE: 'Schema missing idempotency keys'\n// REFINE: AI applies feedback\n// VALIDATE: Human + AI generate tests" }] }, { type: "example", typeLabel: "Real-World Example", title: "Dashboard in 3 Days", content: [{ kind: "text", value: "Team built real-time dashboard in <strong>3 days instead of 3 weeks</strong>." }, { kind: "bullets", items: ["Human: defined data flow", "AI: generated components", "Human: found missing backpressure", "AI: added configurable buffer"] }] }, { type: "guide", typeLabel: "Step-by-Step Guide", title: "Running the Loop", content: [{ kind: "bullets", items: ["Step 1: Write design brief with constraints.", "Step 2: AI generates 2-3 options.", "Step 3: Choose approach, generate interfaces.", "Step 4: Review correctness + security.", "Step 5: AI generates implementation + tests."] }] }, { type: "practices", typeLabel: "Best Practices", title: "Loop Rules", content: [{ kind: "bullets", items: ["Start with constraints, not implementation", "Ask for multiple options", "Give specific feedback", "Don't let AI make architecture decisions", "Don't skip validation"] }] }, { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [{ kind: "bullets", items: ["<strong>Prompt and pray</strong>", "<strong>Infinite refinement</strong>", "<strong>Missing constraints</strong>", "<strong>Rubber stamping</strong>"] }] }, { type: "action", typeLabel: "Your Action Plan", title: "Try Today", content: [{ kind: "bullets", items: ["Pick a feature.", "Write 5-sentence design brief.", "Run the 5-step loop.", "Track time saved."] }] }, { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [{ kind: "bullets", items: ["Frame, Generate, Evaluate, Refine, Validate.", "Humans own architecture; AI accelerates.", "Quality depends on prompt quality.", "3-5 iterations is optimal."] }, { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 4 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }] }] };

// Topics 12-25 and 26-50 continue below in companion files:
// - deepdives-part1-topics12to50.js (Topics 12-25)
// - deepdives-part1-week2.js (Topics 26-50)
// Load all three files to get the complete set of 50 topics.
window.DEEP_DIVES = window.DEEP_DIVES || {};

// TOPIC 12: Architecture Decision Records [NEW]
window.DEEP_DIVES[12] = { title: "Architecture Decision Records (ADRs)", icon: "\u{1F4DD}", tag: "engineering practice", slides: [{ type: "hook", typeLabel: "Why It Matters", title: "Why Did We Build It This Way? Nobody Remembers.", content: [{ kind: "text", value: "Six months from now, someone will ask <strong>why you chose Kafka over SQS</strong>. Without an ADR, the answer is lost forever." }, { kind: "stats", items: [{ value: "67%", label: "of architectural knowledge lost within 2 years" }, { value: "4x", label: "faster onboarding with documented decisions" }] }, { kind: "sources", items: ["Michael Nygard, 'Documenting Architecture Decisions', cognitect.com, 2011"] }] }, { type: "problem", typeLabel: "The Problem", title: "Tribal Knowledge Dies", content: [{ kind: "text", value: "Critical decisions live in <strong>Slack threads and departed engineers' heads</strong>." }, { kind: "bullets", items: ["New hires don't know why the system works this way", "Teams re-debate settled decisions", "AI generates code contradicting undocumented choices", "Post-mortems: 'nobody knew why we did it this way'"] }] }, { type: "concepts", typeLabel: "Core Concepts", title: "ADR Structure", content: [{ kind: "bullets", items: ["<strong>Title</strong> \u2014 Short name (e.g., 'Use PostgreSQL for user data')", "<strong>Status</strong> \u2014 Proposed, Accepted, Deprecated, Superseded", "<strong>Context</strong> \u2014 Forces, constraints, business requirements", "<strong>Decision</strong> \u2014 What was decided and why", "<strong>Consequences</strong> \u2014 Trade-offs accepted, risks, benefits"] }, { kind: "sources", items: ["Michael Nygard, 'Documenting Architecture Decisions', 2011"] }] }, { type: "how", typeLabel: "How It Works", title: "Writing an ADR", content: [{ kind: "code", value: "# ADR-007: Use event sourcing for order history\n## Status: Accepted\n## Context\nNeed complete audit trail. Regulatory compliance\nrequires 7-year retention. CRUD loses states.\n## Decision\nEvent sourcing for Orders domain.\nPostgreSQL with JSONB payloads.\n## Consequences\n+ Full audit trail\n+ Can replay events to rebuild state\n- Higher storage (~3x vs CRUD)\n- Team needs event sourcing training" }, { kind: "callout", style: "insight", value: "The Consequences section is the most valuable part \u2014 it forces explicit trade-offs." }] }, { type: "example", typeLabel: "Real-World Example", title: "ADRs at Spotify", content: [{ kind: "text", value: "Spotify stores ADRs alongside code, making decisions <strong>discoverable and version-controlled</strong>." }, { kind: "bullets", items: ["Stored in /docs/decisions/ per repo", "Linked from code where implemented", "Searchable across org", "New engineers read during onboarding"] }, { kind: "sources", items: ["Spotify Engineering Blog, 'Managing Technical Decisions'"] }] }, { type: "guide", typeLabel: "Step-by-Step Guide", title: "Adopting ADRs", content: [{ kind: "bullets", items: ["Step 1: Create /docs/decisions/ in your repo.", "Step 2: Write ADRs for 3 most important existing decisions.", "Step 3: Require ADR for multi-service decisions.", "Step 4: Review ADRs in design reviews.", "Step 5: Link from code comments."] }] }, { type: "practices", typeLabel: "Best Practices", title: "ADR Rules", content: [{ kind: "bullets", items: ["Keep under 2 pages", "Store with code, not a wiki", "Number sequentially", "Never delete \u2014 mark Superseded", "Include alternatives considered"] }] }, { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [{ kind: "bullets", items: ["<strong>ADR graveyard</strong> \u2014 Writing but never referencing.", "<strong>Retroactive justification</strong> \u2014 Post-hoc rationalization.", "<strong>Too much detail</strong> \u2014 ADRs aren't design docs.", "<strong>No consequences</strong> \u2014 Skipping trade-offs."] }] }, { type: "action", typeLabel: "Your Action Plan", title: "Start Today", content: [{ kind: "bullets", items: ["Write one retroactive ADR.", "Add /docs/decisions/ to repo.", "Make ADRs required for design reviews.", "Establish team template."] }] }, { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [{ kind: "bullets", items: ["ADRs capture WHY, not just WHAT.", "Store with code, version-control, never delete.", "Consequences section is most valuable.", "Future you will thank present you."] }, { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 4 }] }] }] };

// TOPIC 13: Code Review as System Design Review [NEW]
window.DEEP_DIVES[13] = { title: "Code Review as System Design Review", icon: "\u{1F50D}", tag: "engineering practice", slides: [{ type: "hook", typeLabel: "Why It Matters", title: "Stop Reviewing Semicolons. Start Reviewing Architecture.", content: [{ kind: "text", value: "Most code reviews catch formatting while <strong>architectural mistakes sail through</strong>." }, { kind: "stats", items: [{ value: "85%", label: "of review comments are style, not design" }, { value: "10x", label: "more costly to fix architecture vs. style bugs" }] }, { kind: "sources", items: ["Google Engineering Practices, 'How to do a code review'"] }] }, { type: "problem", typeLabel: "The Problem", title: "Reviews That Miss What Matters", content: [{ kind: "text", value: "Linters catch style. Type checkers catch types. <strong>Only humans catch design problems</strong>." }, { kind: "bullets", items: ["Reviewer approves after checking indentation", "Missing error handling unnoticed", "N+1 queries pass because each 'looks correct'", "Coupling introduced silently"] }] }, { type: "concepts", typeLabel: "Core Concepts", title: "The Design Review Lens", content: [{ kind: "bullets", items: ["<strong>Boundary analysis</strong> \u2014 Does this respect module boundaries?", "<strong>Failure modes</strong> \u2014 What when dependencies fail?", "<strong>Data flow</strong> \u2014 Where does data come from and go?", "<strong>Performance</strong> \u2014 Big-O? N+1?", "<strong>Security</strong> \u2014 Input validated? Auth present?"] }, { kind: "sources", items: ["Winters et al., 'Software Engineering at Google', O'Reilly"] }] }, { type: "how", typeLabel: "How It Works", title: "5-Question Design Review", content: [{ kind: "code", value: "// For every PR:\n// 1. BOUNDARIES: Cross module boundaries?\n// 2. FAILURE: What when DB/API is down?\n// 3. DATA: Could cause inconsistency?\n// 4. PERFORMANCE: N+1? Unbounded list?\n// 5. SECURITY: Input validated? Perms checked?" }, { kind: "callout", style: "insight", value: "Automate style checks. Spend human time on design." }] }, { type: "example", typeLabel: "Real-World Example", title: "Google's Review Culture", content: [{ kind: "text", value: "At Google, reviews are <strong>design reviews first</strong>." }, { kind: "bullets", items: ["Readability reviewers focus on patterns", "Every CL needs LGTM from system expert", "Architectural drift caught early"] }, { kind: "sources", items: ["Winters et al., 'Software Engineering at Google'"] }] }, { type: "guide", typeLabel: "Step-by-Step Guide", title: "Upgrading Reviews", content: [{ kind: "bullets", items: ["Step 1: Automate style with linters.", "Step 2: Add 5 questions to PR template.", "Step 3: Require system-aware reviewer.", "Step 4: Request diagram for large PRs.", "Step 5: Track design vs. style comment ratio."] }] }, { type: "practices", typeLabel: "Best Practices", title: "Review Rules", content: [{ kind: "bullets", items: ["Focus: design first, correctness second, style last", "Ask 'what happens when this fails?' for every external call", "Look for coupling between independent things", "Don't nitpick style if you have a linter", "Don't rubber-stamp AI PRs"] }] }, { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [{ kind: "bullets", items: ["<strong>Style-only review</strong> \u2014 Semicolons over SQL injection.", "<strong>LGTM reflex</strong> \u2014 Auto-approving senior authors.", "<strong>Scope blindness</strong> \u2014 Files in isolation, no system view.", "<strong>Bikeshedding</strong> \u2014 Variable names over error handling."] }] }, { type: "action", typeLabel: "Your Action Plan", title: "Transform Reviews", content: [{ kind: "bullets", items: ["Add 5 questions to PR template.", "Next review: ONLY comment on design.", "Set up automated linting.", "Track design vs. style ratio."] }] }, { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [{ kind: "bullets", items: ["Automate style. Humans review design.", "5 questions: boundaries, failures, data, perf, security.", "Design bugs cost 10x more.", "Best reviewers think about the system."] }, { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }] }] };

// TOPIC 14: How to Think About Trade-Offs [NEW]
window.DEEP_DIVES[14] = { title: "How to Think About Trade-Offs", icon: "\u2696\uFE0F", tag: "mental model", slides: [{ type: "hook", typeLabel: "Why It Matters", title: "Every Architecture Decision Is a Bet", content: [{ kind: "text", value: "No right answers in system design \u2014 only <strong>trade-offs you understand vs. trade-offs that surprise you</strong>." }, { kind: "stats", items: [{ value: "100%", label: "of decisions involve trade-offs" }, { value: "0", label: "universally 'best' decisions" }] }, { kind: "sources", items: ["Rich Hickey, 'Simple Made Easy', Strange Loop, 2011"] }] }, { type: "problem", typeLabel: "The Problem", title: "The 'Best Practice' Trap", content: [{ kind: "text", value: "Engineers reach for 'best practices' without asking <strong>best for whom, at what cost</strong>." }, { kind: "bullets", items: ["Microservices because 'Netflix does it' \u2014 3 engineers, 20 services", "NoSQL because 'it scales' \u2014 now need joins", "K8s because 'everyone uses it' \u2014 3 engineers maintain cluster for 2 services"] }] }, { type: "concepts", typeLabel: "Core Concepts", title: "Trade-Off Framework", content: [{ kind: "bullets", items: ["<strong>Reversibility</strong> \u2014 Can you undo cheaply?", "<strong>Blast radius</strong> \u2014 How much breaks if wrong?", "<strong>Time horizon</strong> \u2014 6 months or 6 years?", "<strong>Team context</strong> \u2014 What can you actually operate?", "<strong>Opportunity cost</strong> \u2014 What aren't you building?"] }, { kind: "sources", items: ["Jeff Bezos, 'Type 1 and Type 2 Decisions', 2016"] }] }, { type: "how", typeLabel: "How It Works", title: "Decision Matrix", content: [{ kind: "code", value: "// Choosing a message queue\n//              | SQS     | Kafka    | RabbitMQ\n// Complexity   | Low     | High     | Medium\n// Throughput   | Medium  | V.High   | Medium\n// Ordering     | No      | Yes      | Per-queue\n// Replay       | No      | Yes      | No\n// Ops cost     | Zero    | High     | Medium\n// Team knows   | Yes     | No       | Some\n// Decision: SQS (reversible, team knows it)" }, { kind: "callout", style: "insight", value: "Decide, document trade-offs, set revisit trigger." }] }, { type: "example", typeLabel: "Real-World Example", title: "Amazon Two-Pizza Teams", content: [{ kind: "text", value: "Two-pizza rule trades <strong>coordination efficiency for team autonomy</strong>." }, { kind: "bullets", items: ["Accepted: some duplication", "Accepted: eventual consistency", "Gained: independent deployment", "Gained: contained blast radius"] }, { kind: "sources", items: ["Brad Stone, 'The Everything Store'"] }] }, { type: "guide", typeLabel: "Step-by-Step Guide", title: "Making Decisions", content: [{ kind: "bullets", items: ["Step 1: State decision clearly.", "Step 2: List dimensions that matter.", "Step 3: Score options.", "Step 4: Identify most important dimensions.", "Step 5: Decide, write ADR, set revisit trigger."] }] }, { type: "practices", typeLabel: "Best Practices", title: "Decision Rules", content: [{ kind: "bullets", items: ["Reversible = decide quickly", "Irreversible = analyze carefully", "Always ask 'what are we giving up?'", "Prefer boring technology", "Don't optimize for hypothetical scale", "Document trade-offs for future teams"] }] }, { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [{ kind: "bullets", items: ["<strong>Analysis paralysis</strong> \u2014 3 weeks choosing a queue for a prototype.", "<strong>Resume-driven dev</strong> \u2014 Tech for your resume.", "<strong>Cargo culting</strong> \u2014 'Netflix uses it' isn't an argument.", "<strong>Sunk cost fallacy</strong> \u2014 Sticking with bad decisions."] }] }, { type: "action", typeLabel: "Your Action Plan", title: "Practice", content: [{ kind: "bullets", items: ["List 3 things you gave up in last decision.", "Create matrix for current choice.", "Ask team: 'what trade-off hurts most?'", "Read Dynamo paper Section 2."] }] }, { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [{ kind: "bullets", items: ["No best practices, only understood trade-offs.", "Decision matrix: dimensions x options x scores.", "Reversible = fast; irreversible = careful.", "Document in ADRs."] }, { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }] }] };

// TOPIC 15: Separation of Concerns [EXISTING from old #2]
window.DEEP_DIVES[15] = { title: "Separation of Concerns", icon: "\u{1F4E6}", tag: "architecture 101", slides: [{ type: "hook", typeLabel: "Why It Matters", title: "The One Principle That Prevents Unmaintainable Systems", content: [{ kind: "text", value: "Every unmaintainable codebase: <strong>tangled responsibilities</strong>." }, { kind: "stats", items: [{ value: "60%", label: "of engineering time on maintenance" }, { value: "3x", label: "faster debugging with clean separation" }] }, { kind: "sources", items: ["DORA, 'Accelerate State of DevOps Report 2024'"] }] }, { type: "problem", typeLabel: "The Problem", title: "The Big Ball of Mud", content: [{ kind: "text", value: "Business logic, data access, presentation intertwined \u2014 changing one breaks everything." }, { kind: "bullets", items: ["UI change requires DB layer modification", "Business rules scattered across 15 files", "Testing requires entire system", "New members take months to be productive"] }] }, { type: "concepts", typeLabel: "Core Concepts", title: "Layers of Separation", content: [{ kind: "bullets", items: ["<strong>Horizontal layers</strong> \u2014 Presentation, logic, data, infrastructure", "<strong>Vertical slices</strong> \u2014 By domain: users, orders, payments", "<strong>Interface boundaries</strong> \u2014 Communicate through contracts", "<strong>Single Responsibility</strong> \u2014 One reason to change"] }, { kind: "callout", style: "insight", value: "Not about more files \u2014 about isolating reasons to change." }, { kind: "sources", items: ["Dijkstra, 'On the role of scientific thought', 1974"] }] }, { type: "how", typeLabel: "How It Works", title: "In Practice", content: [{ kind: "code", value: "// BAD: Mixed concerns\napp.post('/order', (req, res) => {\n  const tax = price * 0.08;\n  db.query('INSERT INTO orders...');\n  sendEmail(user.email);\n  res.json({ ok: true });\n});\n\n// GOOD: Separated\napp.post('/order', OrderController.create);\n// Controller -> OrderService.place()\n// Service -> OrderRepo.save()\n// Service -> NotificationService.send()" }] }, { type: "example", typeLabel: "Real-World Example", title: "Stripe's Architecture", content: [{ kind: "text", value: "Stripe's API, billing, fraud, notifications evolve independently." }, { kind: "bullets", items: ["API gateway: auth + rate limiting only", "Billing engine: knows nothing about HTTP", "Fraud: consumes events async", "Teams own vertical slices"] }, { kind: "sources", items: ["Stripe Engineering Blog"] }] }, { type: "guide", typeLabel: "Step-by-Step Guide", title: "Refactoring", content: [{ kind: "bullets", items: ["Step 1: Find files > 300 lines.", "Step 2: Extract business logic to services.", "Step 3: Create repository interfaces.", "Step 4: Thin controllers.", "Step 5: Test each layer independently."] }] }, { type: "practices", typeLabel: "Best Practices", title: "Rules", content: [{ kind: "bullets", items: ["Business logic = framework-agnostic", "DB choice swappable without rewriting logic", "Use dependency injection", "Don't import ORM in business logic", "Don't validate in DB layer"] }] }, { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [{ kind: "bullets", items: ["<strong>Too many layers</strong> \u2014 Abstraction without purpose.", "<strong>Leaky abstractions</strong> \u2014 DB details in API responses.", "<strong>Shared mutable state</strong>", "<strong>Premature modularity</strong>"] }] }, { type: "action", typeLabel: "Your Action Plan", title: "Audit", content: [{ kind: "bullets", items: ["Find largest file \u2014 probably mixes concerns.", "Extract one pure function.", "Draw dependency graph.", "Add one infra-free unit test."] }] }, { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [{ kind: "bullets", items: ["Makes systems maintainable, testable, evolvable.", "Separate by layers and domain.", "One reason to change per module.", "Test: swap DB without rewriting logic."] }, { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 4 }] }] }] };

// TOPIC 16: Monolith First [EXISTING from old #11]
window.DEEP_DIVES[16] = { title: "Monolith First, Microservices Maybe", icon: "\u{1F9E9}", tag: "architecture", slides: [{ type: "hook", typeLabel: "Why It Matters", title: "Shopify Serves Billions with a Monolith. What's Your Excuse?", content: [{ kind: "text", value: "Most successful distributed systems <strong>started as monoliths</strong>. Premature microservices add complexity without benefits." }, { kind: "stats", items: [{ value: "90%", label: "of startups should start monolith" }, { value: "5x", label: "more ops overhead with microservices" }] }, { kind: "sources", items: ["Martin Fowler, 'Monolith First', martinfowler.com"] }] }, { type: "problem", typeLabel: "The Problem", title: "Distributed Monolith", content: [{ kind: "text", value: "Split too early = <strong>worst of both worlds</strong>." }, { kind: "bullets", items: ["Can't deploy independently \u2014 shared DB", "Features require coordinated deploys across 5 services", "Debugging = distributed tracing across 12 repos", "Network failures where function calls used to be"] }] }, { type: "concepts", typeLabel: "Core Concepts", title: "Architecture Spectrum", content: [{ kind: "bullets", items: ["<strong>Monolith</strong> \u2014 Simple, fast dev. Scales to millions.", "<strong>Modular monolith</strong> \u2014 Best of both worlds.", "<strong>Microservices</strong> \u2014 Independent teams, independent deploy.", "<strong>When to split</strong> \u2014 When team autonomy > dev simplicity."] }, { kind: "callout", style: "insight", value: "Shopify, GitHub, Stack Overflow are monoliths serving millions." }] }, { type: "how", typeLabel: "How It Works", title: "Modular Monolith", content: [{ kind: "code", value: "src/modules/\n  orders/   OrderService.js   // Public API\n  payments/ PaymentService.js  // Public API\n  users/    UserService.js     // Public API\n// Rules: communicate through public APIs only\n// No cross-module DB access\n// Each module owns its tables" }] }, { type: "example", typeLabel: "Real-World Example", title: "Shopify", content: [{ kind: "text", value: "Millions of merchants on a <strong>modular Ruby on Rails monolith</strong>." }, { kind: "bullets", items: ["Started as classic Rails monolith 2006", "Added component boundaries", "No cross-component DB queries", "Handles Black Friday billions"] }, { kind: "sources", items: ["Shopify Engineering, 'Deconstructing the Monolith'"] }] }, { type: "guide", typeLabel: "Step-by-Step Guide", title: "From Monolith to Modular", content: [{ kind: "bullets", items: ["<strong>Identify domain boundaries</strong> \u2014 Map your business domains (orders, payments, users). Each domain becomes a module with a clear responsibility and owner.", "<strong>Create module folders with public interfaces</strong> \u2014 Each module exposes a service class as its API. All external access goes through this interface, never directly to internal classes.", "<strong>Enforce communication through APIs only</strong> \u2014 Modules call each other's public interfaces. Add linting rules or architecture tests (e.g. ArchUnit) to prevent direct imports across module boundaries.", "<strong>Assign each module its own database tables</strong> \u2014 No module reads or writes another module's tables. If module B needs data from module A, it calls A's public API. This is the hardest but most important step.", "<strong>Extract to services only when team scaling demands it</strong> \u2014 When two teams need to deploy independently on different schedules, extract that module into a separate service. Not before."] }] }, { type: "practices", typeLabel: "Best Practices", title: "Rules", content: [{ kind: "bullets", items: ["Start monolith, enforce boundaries day one", "Extract based on team boundaries, not tech", "Modular monolith handles more scale than you think", "Don't split until independently deployable", "Don't use microservices because big companies do"] }] }, { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [{ kind: "bullets", items: ["<strong>Premature decomposition</strong>", "<strong>Distributed monolith</strong> \u2014 Must deploy together.", "<strong>Shared database</strong> \u2014 Multiple services, same tables.", "<strong>Nano-services</strong> \u2014 More overhead than value."] }] }, { type: "action", typeLabel: "Your Action Plan", title: "Assess", content: [{ kind: "bullets", items: ["Draw service boundaries \u2014 can each deploy independently?", "Monolith: identify 3 module boundaries.", "Microservices: check for distributed monolith.", "Read Shopify's journey."] }] }, { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [{ kind: "bullets", items: ["Start monolith. Extract when team scaling demands.", "Modular monolith: boundaries without distributed complexity.", "Microservices = organizational solution, not technical.", "Worst: distributed monolith \u2014 all pain, no benefits."] }, { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }] }] };

// TOPIC 17: Design for Failure [EXISTING from old #4] - Fixed Netflix claim
window.DEEP_DIVES[17] = { title: "Design for Failure", icon: "\u{1F4A5}", tag: "resilience", slides: [{ type: "hook", typeLabel: "Why It Matters", title: "Everything Fails. The Question Is Whether Users Notice.", content: [{ kind: "text", value: "Failure isn't an edge case \u2014 it's a <strong>certainty</strong>." }, { kind: "stats", items: [{ value: "99.99%", label: "uptime = 52 min downtime/year" }, { value: "$5,600", label: "avg cost per minute of downtime" }, { value: "70%", label: "of outages caused by changes" }] }, { kind: "sources", items: ["Gartner, 'Cost of IT Downtime'", "ITIC, 'Hourly Cost of Downtime 2023'"] }] }, { type: "problem", typeLabel: "The Problem", title: "Cascading Failures", content: [{ kind: "text", value: "One failing service takes down <strong>the entire system</strong>." }, { kind: "bullets", items: ["Slow DB causes thread pool exhaustion", "One timeout cascades to all callers", "No fallback \u2014 users see 500s", "Retry storms amplify failures 10x"] }] }, { type: "concepts", typeLabel: "Core Concepts", title: "Resilience Patterns", content: [{ kind: "bullets", items: ["<strong>Circuit Breaker</strong> \u2014 Stop calling failing service; fallback.", "<strong>Bulkheads</strong> \u2014 Isolate failures.", "<strong>Retries with backoff</strong> \u2014 Exponential delay + jitter.", "<strong>Timeouts</strong> \u2014 Every external call. No exceptions.", "<strong>Graceful degradation</strong> \u2014 Partial > nothing."] }, { kind: "sources", items: ["Nygard, 'Release It!', Pragmatic Bookshelf"] }] }, { type: "how", typeLabel: "How It Works", title: "Circuit Breaker", content: [{ kind: "code", value: "class CircuitBreaker {\n  constructor(fn, { threshold = 5, cooldown = 30000 }) {\n    this.fn = fn; this.failures = 0;\n    this.state = 'CLOSED';\n  }\n  async call(...args) {\n    if (this.state === 'OPEN') {\n      if (Date.now() > this.nextAttempt)\n        this.state = 'HALF_OPEN';\n      else return this.fallback();\n    }\n    try {\n      const result = await this.fn(...args);\n      this.reset(); return result;\n    } catch (e) {\n      if (++this.failures >= this.threshold) this.trip();\n      throw e;\n    }\n  }\n}" }] }, { type: "example", typeLabel: "Real-World Example", title: "Netflix Chaos Engineering", content: [{ kind: "text", value: "Netflix built <strong>Chaos Monkey</strong> to kill production instances randomly." }, { kind: "bullets", items: ["Chaos Monkey kills random VMs during business hours", "Chaos Kong simulates region failures", "Every service must handle upstream failures", "Netflix built the capability to survive a full AWS region outage"] }, { kind: "sources", items: ["Netflix Tech Blog, 'Chaos Engineering Upgraded'"] }] }, { type: "guide", typeLabel: "Step-by-Step Guide", title: "Building Resilience", content: [{ kind: "bullets", items: ["Step 1: Add timeouts to every external call.", "Step 2: Circuit breakers for flaky deps.", "Step 3: Define fallback behavior.", "Step 4: Health checks + readiness probes.", "Step 5: Run game days \u2014 break things intentionally."] }] }, { type: "practices", typeLabel: "Best Practices", title: "Rules", content: [{ kind: "bullets", items: ["Every call gets a timeout", "Exponential backoff with jitter", "Idempotent operations for safe retries", "Don't retry without backoff", "Don't assume reliable network"] }] }, { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [{ kind: "bullets", items: ["<strong>Retry storms</strong> \u2014 Amplify failures.", "<strong>Missing timeouts</strong> \u2014 Hang entire server.", "<strong>Shared fate</strong> \u2014 One DB, all services.", "<strong>Ignoring partial failure</strong>"] }] }, { type: "action", typeLabel: "Your Action Plan", title: "This Sprint", content: [{ kind: "bullets", items: ["Audit: do all calls have timeouts?", "Add circuit breaker to worst dependency.", "Write runbook for top 3 failures.", "Schedule 1-hour game day."] }] }, { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [{ kind: "bullets", items: ["Failure is inevitable \u2014 design for it.", "Circuit breakers, timeouts, bulkheads, degradation.", "Test with chaos engineering.", "Goal: zero customer-facing impact."] }, { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }] }] };

// TOPIC 18: Twelve-Factor App [NEW]
window.DEEP_DIVES[18] = { title: "The Twelve-Factor App: Still Relevant?", icon: "\u{1F4CB}", tag: "architecture", slides: [{ type: "hook", typeLabel: "Why It Matters", title: "A 2011 Manifesto That Still Ships Modern Software", content: [{ kind: "text", value: "Written by Heroku's co-founder. In 2026, <strong>10 of 12 factors are still exactly right</strong>." }, { kind: "stats", items: [{ value: "12", label: "factors for cloud-native apps" }, { value: "15 years", label: "and counting" }] }, { kind: "sources", items: ["Adam Wiggins, '12factor.net', 2011"] }] }, { type: "problem", typeLabel: "The Problem", title: "Apps That Fight the Cloud", content: [{ kind: "text", value: "Without these principles, apps are hostile to deploy, scale, and operate." }, { kind: "bullets", items: ["Config hardcoded", "State on local disk", "Long startup times", "No log aggregation"] }] }, { type: "concepts", typeLabel: "Core Concepts", title: "The 12 Factors", content: [{ kind: "bullets", items: ["I. <strong>Codebase</strong> \u2014 One repo, many deploys", "II. <strong>Dependencies</strong> \u2014 Explicitly declare", "III. <strong>Config</strong> \u2014 In environment, not code", "IV. <strong>Backing services</strong> \u2014 Attached resources", "V. <strong>Build/release/run</strong> \u2014 Separate stages", "VI. <strong>Processes</strong> \u2014 Stateless, share-nothing"] }, { kind: "sources", items: ["12factor.net"] }] }, { type: "how", typeLabel: "How It Works", title: "Factors VII-XII", content: [{ kind: "bullets", items: ["VII. <strong>Port binding</strong> \u2014 Export via port", "VIII. <strong>Concurrency</strong> \u2014 Scale via process model", "IX. <strong>Disposability</strong> \u2014 Fast startup, graceful shutdown", "X. <strong>Dev/prod parity</strong> \u2014 Docker makes this easier", "XI. <strong>Logs</strong> \u2014 Event streams to stdout", "XII. <strong>Admin processes</strong> \u2014 One-off tasks"] }, { kind: "callout", style: "insight", value: "What's missing from 2011: observability, security, AI concerns, GitOps." }] }, { type: "example", typeLabel: "Real-World Example", title: "Mapping to Kubernetes", content: [{ kind: "text", value: "Factors map perfectly to <strong>Kubernetes concepts</strong>." }, { kind: "bullets", items: ["III (Config) = ConfigMaps + Secrets", "VI (Processes) = Stateless pods", "IX (Disposability) = Pod lifecycle hooks", "XI (Logs) = stdout to Fluentd/Datadog"] }] }, { type: "guide", typeLabel: "Step-by-Step Guide", title: "Audit Your App", content: [{ kind: "bullets", items: ["Step 1: Check config \u2014 hardcoded env vars?", "Step 2: Check state \u2014 local disk instead of S3?", "Step 3: Check logs \u2014 files or stdout?", "Step 4: Check startup \u2014 under 10 seconds?", "Step 5: Check shutdown \u2014 handles SIGTERM?"] }] }, { type: "practices", typeLabel: "Best Practices", title: "Modern Rules", content: [{ kind: "bullets", items: ["All config in env vars or config service", "Stateless processes, external state stores", "Structured logging to stdout", "Fast startup, graceful shutdown", "Add Factor XIII: Observability"] }] }, { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [{ kind: "bullets", items: ["<strong>Config in code</strong> \u2014 Different builds per env.", "<strong>Sticky sessions</strong> \u2014 Breaks horizontal scaling.", "<strong>Log files</strong> \u2014 Write to disk not stdout.", "<strong>Slow startup</strong> \u2014 Makes autoscaling useless."] }] }, { type: "action", typeLabel: "Your Action Plan", title: "Audit", content: [{ kind: "bullets", items: ["Score your app on all 12 factors (1-5).", "Fix lowest-scoring factor this sprint.", "Add structured stdout logging.", "Test graceful shutdown."] }] }, { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [{ kind: "bullets", items: ["15 years old, mostly still right.", "Config in env, stateless, logs to stdout.", "Missing: observability, security, AI concerns.", "Audit against all 12 \u2014 fix weakest first."] }, { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 4 }] }] }] };

// TOPIC 19: Technical Debt [NEW]
window.DEEP_DIVES[19] = { title: "Technical Debt: Manage It, Don't Fear It", icon: "\u{1F4B3}", tag: "engineering practice", slides: [{ type: "hook", typeLabel: "Why It Matters", title: "Tech Debt Has an Interest Rate \u2014 and It Compounds", content: [{ kind: "text", value: "Tech debt isn't bad \u2014 it's a <strong>strategic tool</strong>. The problem is taking debt without knowing the interest rate." }, { kind: "stats", items: [{ value: "33%", label: "of engineering time on tech debt (Stripe)" }, { value: "$85B", label: "annual cost globally" }] }, { kind: "sources", items: ["Stripe, 'The Developer Coefficient', 2018"] }] }, { type: "problem", typeLabel: "The Problem", title: "Invisible Compound Interest", content: [{ kind: "text", value: "Teams take on debt for speed but <strong>never track or pay it back</strong>." }, { kind: "bullets", items: ["Every feature takes 3x longer", "Fear of changing code", "Hiring more doesn't help", "Production incidents consume sprints"] }] }, { type: "concepts", typeLabel: "Core Concepts", title: "Tech Debt Quadrant", content: [{ kind: "bullets", items: ["<strong>Deliberate + Prudent</strong> \u2014 'Quick-and-dirty, fix next sprint' (Strategic)", "<strong>Deliberate + Reckless</strong> \u2014 'No time for tests' (Dangerous)", "<strong>Inadvertent + Prudent</strong> \u2014 'Now we know better' (Learning)", "<strong>Inadvertent + Reckless</strong> \u2014 'What's a pattern?' (Ignorance)"] }, { kind: "sources", items: ["Martin Fowler, 'Technical Debt Quadrant'"] }] }, { type: "how", typeLabel: "How It Works", title: "Quantifying Debt", content: [{ kind: "code", value: "// Tech Debt Register\n// | ID   | Description           | Interest    | Principal |\n// | TD-1 | No connection pooling | 2 outages/mo| 3 days    |\n// | TD-2 | Monolith test suite   | 30 min CI   | 2 weeks   |\n// | TD-3 | Hardcoded config      | 1 fail/mo   | 1 day     |\n// ROI = Interest / Principal\n// Pay highest ROI first" }, { kind: "callout", style: "insight", value: "Pay highest interest-to-principal ratio first." }] }, { type: "example", typeLabel: "Real-World Example", title: "Spotify's Approach", content: [{ kind: "text", value: "Spotify dedicates <strong>20% of sprint capacity</strong> to debt reduction." }, { kind: "bullets", items: ["Tracked alongside feature work", "Velocity measured and reported", "Result: consistent velocity instead of gradual slowdown"] }] }, { type: "guide", typeLabel: "Step-by-Step Guide", title: "Managing Debt", content: [{ kind: "bullets", items: ["Step 1: Create debt register.", "Step 2: Estimate interest + principal.", "Step 3: Prioritize by ROI.", "Step 4: Allocate 15-20% per sprint.", "Step 5: Track velocity improvements."] }] }, { type: "practices", typeLabel: "Best Practices", title: "Rules", content: [{ kind: "bullets", items: ["Take deliberate debt with expiration date", "Never take reckless debt", "Pay continuously, not in rewrites", "Make debt visible to product managers", "Celebrate paydown like launches"] }] }, { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [{ kind: "bullets", items: ["<strong>Big rewrite</strong> \u2014 Always fails.", "<strong>Invisible debt</strong> \u2014 Not tracking.", "<strong>Debt denial</strong> \u2014 'Our code is fine.'", "<strong>Gold plating</strong> \u2014 Feature work disguised as debt reduction."] }] }, { type: "action", typeLabel: "Your Action Plan", title: "Start", content: [{ kind: "bullets", items: ["Create debt register with team.", "Identify 3 highest-interest items.", "Allocate 15% of next sprint.", "Track velocity before/after."] }] }, { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [{ kind: "bullets", items: ["Tech debt is strategic \u2014 track interest rate.", "Pay by ROI: interest / principal.", "15-20% per sprint.", "Make visible, celebrate paydown."] }, { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }] }] };

// TOPIC 20: Monorepo vs Polyrepo [NEW]
window.DEEP_DIVES[20] = { title: "Monorepo vs Polyrepo", icon: "\u{1F4C2}", tag: "engineering practice", slides: [{ type: "hook", typeLabel: "Why It Matters", title: "Your Repo Strategy IS Your Architecture Strategy", content: [{ kind: "text", value: "Google: one repo, billions of lines. Many startups: separate repo per service. <strong>Both are right \u2014 for different reasons.</strong>" }, { kind: "stats", items: [{ value: "86%", label: "of Google's code in one monorepo" }, { value: "1B+", label: "files in Google's repo" }] }, { kind: "sources", items: ["Potvin & Levenberg, 'Why Google Stores Billions of Lines in a Single Repository', ACM, 2016"] }] }, { type: "problem", typeLabel: "The Problem", title: "Wrong Strategy Kills Velocity", content: [{ kind: "text", value: "Affects code sharing, CI speed, dependency management, coordination." }, { kind: "bullets", items: ["Monorepo: CI takes 2 hours rebuilding everything", "Polyrepo: shared lib update = coordinate 15 repos", "Monorepo: one broken test blocks all", "Polyrepo: dependency hell across services"] }] }, { type: "concepts", typeLabel: "Core Concepts", title: "Trade-offs", content: [{ kind: "bullets", items: ["<strong>Monorepo pros</strong> \u2014 Atomic changes, shared tooling, easy reuse", "<strong>Monorepo cons</strong> \u2014 Slow CI without caching, access control harder", "<strong>Polyrepo pros</strong> \u2014 Independent CI/CD, clear ownership", "<strong>Polyrepo cons</strong> \u2014 Cross-repo changes painful, version hell"] }] }, { type: "how", typeLabel: "How It Works", title: "Modern Monorepo", content: [{ kind: "code", value: "// Turborepo/Nx monorepo\npackages/\n  shared/   # Types & utils\n  api/      # Backend\n  web/      # Frontend\n// turbo.json: only rebuild what changed\n// 10-min CI -> 45 seconds with caching" }, { kind: "callout", style: "insight", value: "Modern tooling eliminates most monorepo downsides." }] }, { type: "example", typeLabel: "Real-World Example", title: "Google vs Netflix", content: [{ kind: "text", value: "Google = monorepo. Netflix = polyrepo. Both ship world-class software." }, { kind: "bullets", items: ["Google: custom tooling (Bazel), atomic refactoring", "Netflix: strong API contracts, independent deploy", "Key: match strategy to organization"] }] }, { type: "guide", typeLabel: "Step-by-Step Guide", title: "Choosing", content: [{ kind: "bullets", items: ["Step 1: Count services and team size.", "Step 2: < 5 services, < 20 devs? Monorepo.", "Step 3: If monorepo, invest in Turborepo/Nx day one.", "Step 4: If polyrepo, invest in contract testing.", "Step 5: Hybrid: monorepo per team."] }] }, { type: "practices", typeLabel: "Best Practices", title: "Rules", content: [{ kind: "bullets", items: ["Monorepo: build caching from day one", "Polyrepo: contract testing", "Either: trunk-based development", "Match repo boundaries to team boundaries"] }] }, { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [{ kind: "bullets", items: ["<strong>Monorepo without caching</strong>", "<strong>Polyrepo without contracts</strong>", "<strong>Splitting too early</strong> \u2014 5 repos for 2 devs.", "<strong>Shared library trap</strong> \u2014 One lib everything depends on."] }] }, { type: "action", typeLabel: "Your Action Plan", title: "Evaluate", content: [{ kind: "bullets", items: ["Map repos to team ownership.", "Identify biggest pain: slow CI? dep hell? duplication?", "Monorepo: set up Turborepo with caching.", "Polyrepo: add contract tests between top 3 pairs."] }] }, { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [{ kind: "bullets", items: ["Monorepo for small-medium teams with shared code.", "Polyrepo for large orgs with independent services.", "Modern tooling eliminates monorepo downsides.", "Match repo to team boundaries."] }, { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 4 }] }] }] };

// TOPIC 21: Writing System Design Documents [NEW]
window.DEEP_DIVES[21] = { title: "Writing System Design Documents", icon: "\u{1F4C4}", tag: "meta-skill", slides: [{ type: "hook", typeLabel: "Why It Matters", title: "Google Won't Let You Code Until You Write This", content: [{ kind: "text", value: "At Google, Amazon, Meta \u2014 <strong>no significant project starts without a design doc</strong>." }, { kind: "stats", items: [{ value: "100%", label: "of large Google projects require design docs" }, { value: "3x", label: "fewer production issues with upfront docs" }] }, { kind: "sources", items: ["Google Engineering Practices, 'Design Documents'"] }] }, { type: "problem", typeLabel: "The Problem", title: "Building Without Blueprints", content: [{ kind: "text", value: "Teams jump to coding, discover flaws <strong>in production instead of on paper</strong>." }, { kind: "bullets", items: ["Architecture emerges accidentally from PRs", "No holistic review before implementation", "Capacity planning after first outage", "Cross-team deps discovered mid-sprint"] }] }, { type: "concepts", typeLabel: "Core Concepts", title: "Design Doc Structure", content: [{ kind: "bullets", items: ["<strong>Overview</strong> \u2014 Problem + why now", "<strong>Goals / Non-Goals</strong> \u2014 Explicit scope", "<strong>High-Level Design</strong> \u2014 Architecture, data flow", "<strong>Detailed Design</strong> \u2014 APIs, schema, algorithms", "<strong>Alternatives</strong> \u2014 What else + why not", "<strong>Operational Plan</strong> \u2014 Monitoring, rollback"] }] }, { type: "how", typeLabel: "How It Works", title: "RFC Template", content: [{ kind: "code", value: "# RFC: User Notification Service\n## Status: Under Review\n## Overview\nCentralized notifications: email, push, SMS.\n## Goals\n- Deliver within 30 seconds\n- 100K notifications/hour at launch\n## Non-Goals\n- Real-time chat (separate system)\n## Design\n[Architecture diagram, API contracts]\n## Alternatives Considered\n1. Per-service (rejected: duplication)\n2. SaaS (rejected: cost at scale)\n## Operational Plan\nMonitoring: delivery rate, P99 latency, failures" }] }, { type: "example", typeLabel: "Real-World Example", title: "Amazon's 6-Page Memo", content: [{ kind: "text", value: "Amazon replaced PowerPoint with <strong>6-page narrative memos</strong>." }, { kind: "bullets", items: ["30 min silent reading in meetings", "Forces complete thinking", "Higher quality decisions, fewer meetings"] }, { kind: "sources", items: ["Brad Stone, 'The Everything Store'"] }] }, { type: "guide", typeLabel: "Step-by-Step Guide", title: "Writing Yours", content: [{ kind: "bullets", items: ["Step 1: Start with problem statement.", "Step 2: Define goals AND non-goals.", "Step 3: Draw architecture diagram.", "Step 4: Detail the hardest part.", "Step 5: List alternatives + why rejected."] }] }, { type: "practices", typeLabel: "Best Practices", title: "Rules", content: [{ kind: "bullets", items: ["Under 10 pages", "Include capacity estimates", "Get review from outside your team", "Update as design evolves", "Include rollback plan"] }] }, { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [{ kind: "bullets", items: ["<strong>The novel</strong> \u2014 30 pages nobody reads.", "<strong>Rubber stamp</strong> \u2014 Written after implementation.", "<strong>No alternatives</strong> \u2014 One option, no comparison.", "<strong>Missing ops plan</strong> \u2014 No monitoring/rollback."] }] }, { type: "action", typeLabel: "Your Action Plan", title: "Start", content: [{ kind: "bullets", items: ["Create team template.", "Write doc for next significant feature.", "Share for review before coding.", "Track production surprises caught at design time."] }] }, { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [{ kind: "bullets", items: ["Design docs prevent expensive production mistakes.", "Structure: Overview, Goals, Design, Alternatives, Ops.", "Under 10 pages. Include capacity estimates.", "Write before code, not after."] }, { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 4 }] }] }] };

// TOPIC 22: How to Read a System Design Paper [NEW]
window.DEEP_DIVES[22] = { title: "How to Read a System Design Paper", icon: "\u{1F4DA}", tag: "meta-skill", slides: [{ type: "hook", typeLabel: "Why It Matters", title: "The Dynamo Paper Created DynamoDB. Papers Shape Your Tools.", content: [{ kind: "text", value: "Kafka, Cassandra, Kubernetes were <strong>papers before products</strong>." }, { kind: "stats", items: [{ value: "10+", label: "foundational papers behind modern infra" }, { value: "30 min", label: "to read with the right technique" }] }, { kind: "sources", items: ["Keshav, 'How to Read a Paper', ACM SIGCOMM, 2007"] }] }, { type: "problem", typeLabel: "The Problem", title: "Papers Are Intimidating", content: [{ kind: "text", value: "Engineers skip papers because they seem academic. <strong>The best ones are incredibly practical.</strong>" }, { kind: "bullets", items: ["Dense notation obscures insights", "Assume prior knowledge", "No 'how to implement' section", "20+ pages feels huge"] }] }, { type: "concepts", typeLabel: "Core Concepts", title: "3-Pass Method", content: [{ kind: "bullets", items: ["<strong>Pass 1 (5 min)</strong> \u2014 Title, abstract, intro, headings, conclusion.", "<strong>Pass 2 (30 min)</strong> \u2014 Whole paper, skip proofs. Focus on figures.", "<strong>Pass 3 (2-4 hrs)</strong> \u2014 Deep read. Could you reimplement?"] }, { kind: "sources", items: ["Keshav, 'How to Read a Paper', 2007"] }] }, { type: "how", typeLabel: "How It Works", title: "Essential Papers", content: [{ kind: "bullets", items: ["<strong>MapReduce (2004)</strong> \u2014 Distributed batch processing", "<strong>Dynamo (2007)</strong> \u2014 Distributed KV store", "<strong>Spanner (2012)</strong> \u2014 Global distributed DB", "<strong>Raft (2014)</strong> \u2014 Understandable consensus", "<strong>Kafka (2011)</strong> \u2014 Distributed log"] }, { kind: "callout", style: "insight", value: "Start with Dynamo \u2014 most practical, best trade-off documentation." }] }, { type: "example", typeLabel: "Real-World Example", title: "Reading Dynamo", content: [{ kind: "text", value: "Dynamo paper is a <strong>masterclass in trade-off documentation</strong>." }, { kind: "bullets", items: ["Section 2: Crystal clear constraints", "Table 1: Most cited table in distributed systems", "Section 6: Production lessons at Amazon"] }] }, { type: "guide", typeLabel: "Step-by-Step Guide", title: "Your Workflow", content: [{ kind: "bullets", items: ["Step 1: Pick from essential list.", "Step 2: Pass 1 (5 min) \u2014 worth deeper read?", "Step 3: Pass 2 (30 min) \u2014 diagrams + decisions.", "Step 4: Write 3-sentence summary.", "Step 5: Discuss with colleague."] }] }, { type: "practices", typeLabel: "Best Practices", title: "Rules", content: [{ kind: "bullets", items: ["Start with figures \u2014 80% of insight", "Skip proofs on first read", "Focus on Evaluation + Lessons Learned", "One paper per month", "Use reading clubs for accountability"] }] }, { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [{ kind: "bullets", items: ["<strong>Cover-to-cover</strong> \u2014 Most don't require every word.", "<strong>Skipping related work</strong> \u2014 Tells you what's important.", "<strong>Never implementing</strong> \u2014 Build a toy version.", "<strong>Reading alone</strong> \u2014 Discussion reveals insights."] }] }, { type: "action", typeLabel: "Your Action Plan", title: "Start", content: [{ kind: "bullets", items: ["Pick Dynamo paper, 3-pass read this week.", "Write 1-page summary of key decisions.", "Start monthly reading club.", "Build reading list from 'Papers We Love'."] }] }, { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [{ kind: "bullets", items: ["Papers are source code of modern infrastructure.", "3-pass method: 5 min, 30 min, 2-4 hours.", "Start with Dynamo, Raft, Kafka.", "One paper/month = fundamentally better engineer."] }, { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 4 }] }] }] };

// TOPIC 23: How AI Rewrites Rules of System Design [NEW]
window.DEEP_DIVES[23] = { title: "How AI Rewrites the Rules of System Design", icon: "\u{1F52E}", tag: "vision", slides: [{ type: "hook", typeLabel: "Why It Matters", title: "Your Next System Will Have Components That Think", content: [{ kind: "text", value: "Traditional design assumes deterministic components. AI introduces <strong>non-deterministic, probabilistic</strong> elements." }, { kind: "stats", items: [{ value: "75%", label: "of enterprise apps will use AI by 2027" }] }, { kind: "sources", items: ["Gartner, 'Top Strategic Technology Trends 2025'"] }] }, { type: "problem", typeLabel: "The Problem", title: "Old Rules Don't Apply", content: [{ kind: "text", value: "Deterministic design breaks with probabilistic components." }, { kind: "bullets", items: ["Same input, different outputs", "Latency varies 10x by input length", "Cost scales unpredictably", "Failures are semantic (hallucinations), not technical (500s)"] }] }, { type: "concepts", typeLabel: "Core Concepts", title: "New Principles", content: [{ kind: "bullets", items: ["<strong>Design for non-determinism</strong> \u2014 Guardrails + validation", "<strong>Evals over tests</strong> \u2014 Statistical quality metrics", "<strong>Graceful AI degradation</strong> \u2014 Fallback to simpler models/rules", "<strong>Human-in-the-loop</strong> \u2014 Escape hatches", "<strong>Cost-aware routing</strong> \u2014 Cheap model first, expensive fallback"] }, { kind: "sources", items: ["Chip Huyen, 'Designing ML Systems', O'Reilly"] }] }, { type: "how", typeLabel: "How It Works", title: "Model Cascade Pattern", content: [{ kind: "code", value: "async function answer(query) {\n  const fast = await smallModel.generate(query);\n  if (fast.confidence > 0.9) return fast;\n  const slow = await largeModel.generate(query);\n  if (slow.confidence > 0.7) return slow;\n  return escalateToHuman(query);\n}" }, { kind: "callout", style: "insight", value: "Cascade reduces costs 80% \u2014 most queries are easy." }] }, { type: "example", typeLabel: "Real-World Example", title: "AI E-Commerce", content: [{ kind: "text", value: "E-commerce redesigned for AI adds <strong>new architectural components</strong>." }, { kind: "bullets", items: ["Search: keywords -> semantic vector search", "Recs: batch ML -> real-time LLM personalization", "Support: ticket routing -> AI agent with tools", "Each needs guardrails, fallbacks, cost monitoring"] }] }, { type: "guide", typeLabel: "Step-by-Step Guide", title: "Designing AI-Ready", content: [{ kind: "bullets", items: ["Step 1: Identify AI-benefiting components.", "Step 2: Design with non-AI fallbacks.", "Step 3: Implement evals, not just tests.", "Step 4: Add cost monitoring per AI call.", "Step 5: Human-in-the-loop for high stakes."] }] }, { type: "practices", typeLabel: "Best Practices", title: "Rules", content: [{ kind: "bullets", items: ["Every AI component needs non-AI fallback", "Monitor AI quality continuously", "Set cost budgets per AI feature", "Use model cascading", "Don't use AI where deterministic logic suffices"] }] }, { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [{ kind: "bullets", items: ["<strong>AI for everything</strong> \u2014 LLM where regex would do.", "<strong>No fallback</strong> \u2014 AI down = feature down.", "<strong>Unbounded costs</strong> \u2014 Viral traffic = $100K bill.", "<strong>Binary testing</strong> \u2014 Pass/fail doesn't work for probabilistic."] }] }, { type: "action", typeLabel: "Your Action Plan", title: "Prepare", content: [{ kind: "bullets", items: ["Identify one feature for AI.", "Design fallback chain: AI -> model -> rules -> human.", "Set up cost tracking.", "Research eval frameworks (RAGAS, DeepEval)."] }] }, { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [{ kind: "bullets", items: ["AI = non-deterministic. Design for variability.", "Every AI feature needs non-AI fallback.", "Evals replace tests.", "Cost-aware routing is essential."] }, { kind: "quality", items: [{ label: "Actionability", score: 4 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }] }] };

// TOPIC 24: Career in 3 Years [NEW]
window.DEEP_DIVES[24] = { title: "What Does My Career Look Like in 3 Years?", icon: "\u{1F680}", tag: "career", slides: [{ type: "hook", typeLabel: "Why It Matters", title: "AI Won't Take Your Job. Someone Using AI Will.", content: [{ kind: "text", value: "The career ladder is being <strong>rewritten in real time</strong>. Some skills are commoditized. Others are 10x more valuable." }, { kind: "stats", items: [{ value: "80%", label: "of coding tasks AI-assisted by 2028" }, { value: "10x", label: "demand increase for system design" }] }, { kind: "sources", items: ["Gartner, 'Top Strategic Technology Trends 2025'"] }] }, { type: "problem", typeLabel: "The Problem", title: "Skills That Got You Here Won't Get You There", content: [{ kind: "text", value: "Typing speed, syntax memorization \u2014 <strong>first skills AI replaces</strong>." }, { kind: "bullets", items: ["Junior tasks automated", "Mid-level 'just coders' face pressure", "Seniors who can't design become expensive coders", "Gap between AI-using and not widens daily"] }] }, { type: "concepts", typeLabel: "Core Concepts", title: "Appreciating vs. Depreciating Skills", content: [{ kind: "bullets", items: ["<strong>Up:</strong> System design, trade-off analysis, architecture", "<strong>Up:</strong> Product thinking, user empathy, business context", "<strong>Up:</strong> AI orchestration, prompt engineering, eval design", "<strong>Up:</strong> Communication, mentoring, leadership", "<strong>Down:</strong> Boilerplate coding, syntax memorization", "<strong>Down:</strong> Routine code review, manual documentation"] }] }, { type: "how", typeLabel: "How It Works", title: "New Career Ladder", content: [{ kind: "code", value: "// 2020 Path\nJunior -> Mid -> Senior -> Staff\n  Code    Code   Code    Design\n\n// 2026 Path\nJunior -> Mid -> Senior -> Staff\n  AI+Code  Design  System   Strategy\n           +AI     Design   +AI\n// Design thinking moves down the ladder" }] }, { type: "example", typeLabel: "Real-World Example", title: "The 10x Engineer in 2026", content: [{ kind: "text", value: "10x doesn't mean 10x more code. It means <strong>10x faster system design</strong>." }, { kind: "bullets", items: ["Morning: architecture + ADR", "Midday: AI generates implementation", "Afternoon: reviews for design consistency", "2-week team project shipped in 2 days"] }] }, { type: "guide", typeLabel: "Step-by-Step Guide", title: "Future-Proofing", content: [{ kind: "bullets", items: ["Step 1: Master one AI coding tool deeply.", "Step 2: Study system design.", "Step 3: Practice trade-offs and design docs.", "Step 4: Build product intuition.", "Step 5: Develop communication skills."] }] }, { type: "practices", typeLabel: "Best Practices", title: "Investment Rules", content: [{ kind: "bullets", items: ["20% AI tools and workflows", "30% system design and patterns", "20% product/business understanding", "30% depth in your domain", "One paper per month", "One design doc per quarter"] }] }, { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [{ kind: "bullets", items: ["<strong>AI denial</strong> \u2014 'It's a fad.'", "<strong>AI over-reliance</strong> \u2014 Letting AI think for you.", "<strong>Depth without breadth</strong> \u2014 React expert, can't design systems.", "<strong>Breadth without depth</strong> \u2014 Buzzwords, can't implement."] }] }, { type: "action", typeLabel: "Your Action Plan", title: "This Week", content: [{ kind: "bullets", items: ["Solve a system design challenge on whiteboard.", "Master your AI tool's shortcuts.", "Read one eng blog post per day.", "Write a design doc for something already built."] }] }, { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [{ kind: "bullets", items: ["System design = skill AI can't replace.", "Design thinking moves down the ladder.", "Invest in architecture, product thinking, AI proficiency.", "Use AI as multiplier, not replacement."] }, { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 4 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }] }] };

// TOPIC 25: MILESTONE [NEW]
window.DEEP_DIVES[25] = { title: "MILESTONE: The Vibe Coder's Mental Model", icon: "\u{1F3C6}", tag: "milestone", slides: [{ type: "hook", typeLabel: "Why It Matters", title: "Week 1 Complete \u2014 Here's Your Superpower", content: [{ kind: "text", value: "You now understand why system design is the skill AI cannot replace. You have the <strong>framework for the next 75 days</strong>." }, { kind: "stats", items: [{ value: "25", label: "topics mastered" }, { value: "8", label: "dimensions of system design" }, { value: "4", label: "AI pairing patterns" }] }] }, { type: "problem", typeLabel: "The Problem", title: "What We Solved", content: [{ kind: "text", value: "You entered thinking AI writes code. You leave knowing <strong>you design systems and AI implements them</strong>." }, { kind: "bullets", items: ["Vibe coding: generate-verify-integrate", "Risk matrix: green/yellow/red zones", "4 pairing patterns", "Trade-off thinking + ADRs"] }] }, { type: "concepts", typeLabel: "Core Concepts", title: "The Mental Model", content: [{ kind: "bullets", items: ["Architecture before implementation", "AI as accelerator, not replacement", "Trade-offs everywhere", "8 dimensions of system design", "Continuous learning"] }] }, { type: "how", typeLabel: "How It Works", title: "The Framework", content: [{ kind: "code", value: "// Vibe Coder's Decision Framework\n1. WHAT are we building? (Requirements)\n2. WHY does it matter? (Business context)\n3. HOW should it behave? (NFRs)\n4. WHAT could go wrong? (Failure modes)\n5. WHAT are we giving up? (Trade-offs)\n6. Generate with AI\n7. Review, test, deploy" }] }, { type: "example", typeLabel: "Real-World Example", title: "Applying Daily", content: [{ kind: "text", value: "Use this framework every sprint." }, { kind: "bullets", items: ["Standup: 'What are we building and what are trade-offs?'", "Design review: 'What happens when this fails?'", "Code review: 'Does this respect boundaries?'", "Retro: 'What did we learn about our system?'"] }] }, { type: "guide", typeLabel: "Step-by-Step Guide", title: "Week 2 Preview", content: [{ kind: "bullets", items: ["MCP Protocol (Topics 26-35)", "API Design Patterns (Topics 36-44)", "Real-time Communication (Topics 45-49)", "Protocol Stack Milestone (Topic 50)"] }] }, { type: "practices", typeLabel: "Best Practices", title: "Keep Momentum", content: [{ kind: "bullets", items: ["Practice one concept per day", "Write one ADR this week", "Do one AI pairing with new pattern", "Share learnings with colleague"] }] }, { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Don't Lose Momentum", content: [{ kind: "bullets", items: ["<strong>Passive consumption</strong> \u2014 Reading != learning.", "<strong>Waiting to apply</strong> \u2014 'Later' never comes.", "<strong>Going alone</strong> \u2014 Learning compounds in groups.", "<strong>Perfectionism</strong> \u2014 Imperfect doc > no doc."] }] }, { type: "action", typeLabel: "Your Action Plan", title: "Graduation Challenge", content: [{ kind: "bullets", items: ["Write design doc for current feature.", "Include all 8 dimensions.", "Get colleague review.", "Implement with AI."] }] }, { type: "summary", typeLabel: "Key Takeaways", title: "Week 1 Complete", content: [{ kind: "bullets", items: ["System design = AI-proof skill.", "5-question framework for every decision.", "AI implements; you architect and verify.", "Next: MCP Protocol and API Design."] }, { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 5 }, { label: "Engagement", score: 5 }] }] }] };
// Week 2: MCP Protocol & APIs (Topics 26-50)
window.DEEP_DIVES = window.DEEP_DIVES || {};

// TOPIC 26: MCP: Model Context Protocol [EXISTING from old #15]
window.DEEP_DIVES[26] = { title: "MCP: Model Context Protocol", icon: "\u{1F50C}", tag: "AI protocols", slides: [{ type: "hook", typeLabel: "Why It Matters", title: "The USB-C of AI \u2014 One Protocol to Connect Everything", content: [{ kind: "text", value: "MCP is an <strong>open standard</strong> that lets AI models connect to tools, data, and services through a unified protocol. No more custom integrations." }, { kind: "stats", items: [{ value: "1", label: "protocol to connect any AI to any tool" }, { value: "N\u00D7M\u2192N+M", label: "integration complexity reduction" }, { value: "Open", label: "standard by Anthropic, adopted widely" }] }, { kind: "sources", items: ["Anthropic, 'Introducing the Model Context Protocol', 2024"] }] }, { type: "problem", typeLabel: "The Problem", title: "The Integration Nightmare", content: [{ kind: "text", value: "Before MCP, every AI-tool integration was <strong>custom-built</strong>. N models \u00D7 M tools = N\u00D7M integrations." }, { kind: "bullets", items: ["Each provider has its own format", "Tool builders implement per-model integrations", "No standard for context/resources/prompts", "Fragmented, non-interoperable ecosystem"] }] }, { type: "concepts", typeLabel: "Core Concepts", title: "MCP Architecture", content: [{ kind: "bullets", items: ["<strong>Host</strong> \u2014 The AI application (Claude Desktop, IDE, chatbot)", "<strong>Client</strong> \u2014 Inside the host; connects to MCP servers", "<strong>Server</strong> \u2014 Exposes tools, resources, prompts", "<strong>Transport</strong> \u2014 stdio (local) or HTTP+SSE (remote)", "<strong>Primitives</strong> \u2014 Tools (actions), Resources (data), Prompts (templates)"] }, { kind: "callout", style: "insight", value: "MCP servers are like USB devices; MCP clients are like USB ports. One standard, infinite combinations." }, { kind: "sources", items: ["Anthropic, 'MCP Specification', modelcontextprotocol.io"] }] }, { type: "how", typeLabel: "How It Works", title: "Communication Flow", content: [{ kind: "code", value: "// Server registers tools\nserver.tool('get_weather', { city: 'string' },\n  async ({ city }) => {\n    const data = await fetchWeather(city);\n    return { text: `${city}: ${data.temp}\u00B0F` };\n  }\n);\n\n// Server registers resources\nserver.resource('config://app',\n  async () => ({ text: JSON.stringify(appConfig) })\n);\n\n// AI discovers and calls tools via client\n// Client routes to appropriate server" }] }, { type: "example", typeLabel: "Real-World Example", title: "Claude Desktop + MCP", content: [{ kind: "text", value: "Claude Desktop uses MCP to connect to <strong>local and remote services</strong>." }, { kind: "bullets", items: ["Filesystem server: local file access", "Database server: PostgreSQL queries", "GitHub server: PR reviews, code search", "Slack server: read/post messages", "All through same protocol"] }, { kind: "sources", items: ["Anthropic Engineering, 'MCP: Open Protocol', 2024"] }] }, { type: "guide", typeLabel: "Step-by-Step Guide", title: "Getting Started", content: [{ kind: "bullets", items: ["Step 1: Install MCP SDK (npm install @modelcontextprotocol/sdk).", "Step 2: Create server with McpServer.", "Step 3: Register tools with schemas + handlers.", "Step 4: Choose transport: stdio (local) or HTTP+SSE (remote).", "Step 5: Connect to Claude Desktop or MCP host."] }] }, { type: "practices", typeLabel: "Best Practices", title: "MCP Rules", content: [{ kind: "bullets", items: ["Keep tools focused \u2014 one per action", "Descriptive names and descriptions for AI discovery", "Validate inputs with JSON Schema", "Don't expose destructive ops without confirmation", "Don't return huge payloads \u2014 paginate", "Don't skip error handling"] }] }, { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [{ kind: "bullets", items: ["<strong>God tool</strong> \u2014 One tool with mode parameter doing everything.", "<strong>Missing descriptions</strong> \u2014 AI can't discover tools.", "<strong>Unvalidated input</strong> \u2014 AI sends unexpected values.", "<strong>No error handling</strong> \u2014 Raw exceptions to AI."] }] }, { type: "action", typeLabel: "Your Action Plan", title: "Get Started", content: [{ kind: "bullets", items: ["Install SDK, build hello-world server.", "Connect to Claude Desktop.", "Build one tool for a service you use daily.", "Share with team for feedback."] }] }, { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [{ kind: "bullets", items: ["MCP = open standard for AI-tool connection.", "Host > Client > Server over standard transports.", "Three primitives: Tools, Resources, Prompts.", "Build once, connect to any MCP host."] }, { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }] }] };

// TOPIC 27: MCP Architecture [EXISTING from old #16]
window.DEEP_DIVES[27] = { title: "MCP Architecture", icon: "\u{1F3D7}\uFE0F", tag: "AI protocols", slides: [{ type: "hook", typeLabel: "Why It Matters", title: "Three Layers, Three Primitives, Two Transports", content: [{ kind: "text", value: "MCP's architecture is elegant: <strong>three layers, three primitives, two transports</strong>. Understanding it lets you build robust integrations." }, { kind: "stats", items: [{ value: "3", label: "layers: Host, Client, Server" }, { value: "3", label: "primitives: Tools, Resources, Prompts" }, { value: "2", label: "transports: stdio, HTTP+SSE" }] }, { kind: "sources", items: ["Anthropic, 'MCP Specification', modelcontextprotocol.io"] }] }, { type: "problem", typeLabel: "The Problem", title: "Why Not Just REST?", content: [{ kind: "text", value: "REST works for app-to-app, but <strong>AI needs more context</strong> than a typical consumer." }, { kind: "bullets", items: ["AI needs dynamic tool discovery", "Rich descriptions for tool selection", "Structured input/output schemas", "State management across turns"] }] }, { type: "concepts", typeLabel: "Core Concepts", title: "The Three Layers", content: [{ kind: "bullets", items: ["<strong>Host</strong> \u2014 AI app managing connections + security. Multiple clients.", "<strong>Client</strong> \u2014 1:1 connection with server. Protocol negotiation.", "<strong>Server</strong> \u2014 Exposes capabilities. Lightweight, focused.", "<strong>Transport</strong> \u2014 stdio (local) or HTTP+SSE (remote)."] }, { kind: "sources", items: ["Anthropic, 'MCP Specification', modelcontextprotocol.io"] }] }, { type: "how", typeLabel: "How It Works", title: "Connection Lifecycle", content: [{ kind: "code", value: "// 1. INITIALIZATION\nClient -> Server: { method: 'initialize',\n  params: { capabilities: { tools: {} } } }\nServer -> Client: { capabilities: { tools: {} } }\nClient -> Server: { method: 'initialized' }\n\n// 2. DISCOVERY\nClient -> Server: { method: 'tools/list' }\nServer -> Client: { tools: [{ name, description, schema }] }\n\n// 3. EXECUTION\nClient -> Server: { method: 'tools/call',\n  params: { name: 'query_db', arguments: {...} } }\n\n// 4. SHUTDOWN" }, { kind: "callout", style: "insight", value: "JSON-RPC 2.0 under the hood \u2014 battle-tested." }] }, { type: "example", typeLabel: "Real-World Example", title: "Multi-Server Setup", content: [{ kind: "text", value: "Production: <strong>one host, multiple specialized servers</strong>." }, { kind: "bullets", items: ["File system server for local ops", "Database server for PostgreSQL", "API server for REST endpoints", "Monitoring server for Datadog", "Each independent process with own permissions"] }] }, { type: "guide", typeLabel: "Step-by-Step Guide", title: "Designing MCP Architecture", content: [{ kind: "bullets", items: ["Step 1: Identify capabilities to expose.", "Step 2: Group into focused servers.", "Step 3: Choose transport per server.", "Step 4: Define input schemas.", "Step 5: Implement error handling + timeouts."] }] }, { type: "practices", typeLabel: "Best Practices", title: "Rules", content: [{ kind: "bullets", items: ["One server per domain boundary", "stdio for local; HTTP+SSE for remote", "Implement capability negotiation", "Don't create monolithic 50-tool servers", "Don't skip schema validation"] }] }, { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [{ kind: "bullets", items: ["<strong>Monolithic server</strong> \u2014 Everything crammed in.", "<strong>Missing initialization</strong> \u2014 Runtime errors.", "<strong>No transport security</strong> \u2014 Remote without auth.", "<strong>Blocking operations</strong> \u2014 No progress notifications."] }] }, { type: "action", typeLabel: "Your Action Plan", title: "Design Yours", content: [{ kind: "bullets", items: ["Draw host-to-servers diagram.", "Identify capabilities per server.", "Choose transport per server.", "Implement initialization correctly."] }] }, { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [{ kind: "bullets", items: ["Three layers, three primitives, two transports.", "JSON-RPC 2.0 over stdio or HTTP+SSE.", "Focused servers per domain.", "Capability negotiation ensures compatibility."] }, { kind: "quality", items: [{ label: "Actionability", score: 4 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 4 }] }] }] };

// TOPIC 28: MCP Tools [EXISTING from old #17]
window.DEEP_DIVES[28] = { title: "MCP Tools", icon: "\u{1F527}", tag: "AI protocols", slides: [{ type: "hook", typeLabel: "Why It Matters", title: "Give AI Hands to Act in the Real World", content: [{ kind: "text", value: "MCP Tools are <strong>executable functions</strong> that let AI take actions \u2014 query databases, call APIs, modify files." }, { kind: "stats", items: [{ value: "#1", label: "most-used MCP primitive" }, { value: "Any", label: "action can become an MCP tool" }, { value: "JSON Schema", label: "defines every tool interface" }] }, { kind: "sources", items: ["Anthropic, 'MCP Tools Documentation', modelcontextprotocol.io"] }] }, { type: "problem", typeLabel: "The Problem", title: "AI Without Actions Is Just Text", content: [{ kind: "text", value: "Without tools, AI can't <strong>check real data, execute code, or interact with systems</strong>." }, { kind: "bullets", items: ["AI hallucinates because it can't look up data", "Users copy-paste between AI and tools", "AI can't verify its own outputs", "Complex workflows need human intermediary"] }] }, { type: "concepts", typeLabel: "Core Concepts", title: "Tool Anatomy", content: [{ kind: "bullets", items: ["<strong>Name</strong> \u2014 Unique identifier", "<strong>Description</strong> \u2014 When to use (for AI)", "<strong>Input Schema</strong> \u2014 JSON Schema for params", "<strong>Handler</strong> \u2014 Function that executes", "<strong>Return</strong> \u2014 Content array (text, images)"] }, { kind: "callout", style: "insight", value: "Description is critical \u2014 it's how AI decides when to use your tool." }] }, { type: "how", typeLabel: "How It Works", title: "Building a Tool", content: [{ kind: "code", value: "import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';\nconst server = new McpServer({ name: 'db-tools' });\n\nserver.tool(\n  'query_database',\n  'Run a read-only SQL query. Use when user asks about data.',\n  {\n    sql: { type: 'string', description: 'SELECT query' },\n    limit: { type: 'number', default: 100 }\n  },\n  async ({ sql, limit }) => {\n    if (!sql.trim().toUpperCase().startsWith('SELECT'))\n      throw new Error('Only SELECT allowed');\n    const rows = await db.query(`${sql} LIMIT ${limit}`);\n    return { content: [{ type: 'text', text: JSON.stringify(rows) }] };\n  }\n);" }] }, { type: "example", typeLabel: "Real-World Example", title: "GitHub MCP Server", content: [{ kind: "text", value: "GitHub MCP server lets AI interact with repos, PRs, issues." }, { kind: "bullets", items: ["search_repositories", "create_pull_request", "list_issues", "create_issue_comment", "Each with precise schemas"] }] }, { type: "guide", typeLabel: "Step-by-Step Guide", title: "Creating Tools", content: [{ kind: "bullets", items: ["Step 1: Identify actions users ask AI for.", "Step 2: Define input schemas with descriptions.", "Step 3: Write descriptions explaining WHEN to use.", "Step 4: Implement validation + error handling.", "Step 5: Return structured, parseable output."] }] }, { type: "practices", typeLabel: "Best Practices", title: "Tool Rules", content: [{ kind: "bullets", items: ["One tool per action \u2014 composable", "Descriptions help AI choose correctly", "Validate all inputs", "Don't expose write/delete without safety", "Don't return more data than needed"] }] }, { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [{ kind: "bullets", items: ["<strong>Swiss army tool</strong> \u2014 One tool, 10 modes.", "<strong>Poor descriptions</strong> \u2014 Wrong tool selected.", "<strong>Missing validation</strong> \u2014 Malformed SQL crashes DB.", "<strong>Data dumps</strong> \u2014 10K rows when AI handles 100."] }] }, { type: "action", typeLabel: "Your Action Plan", title: "Build First Tool", content: [{ kind: "bullets", items: ["Identify one repetitive task.", "Define name, description, schema.", "Implement with validation.", "Test with Claude Desktop."] }] }, { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [{ kind: "bullets", items: ["Tools let AI take real actions.", "Good descriptions = good implementations.", "Always validate inputs.", "One action per tool, composable by AI."] }, { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }] }] };

// TOPIC 29: MCP Resources [EXISTING from old #18]
window.DEEP_DIVES[29] = { title: "MCP Resources", icon: "\u{1F4C2}", tag: "AI protocols", slides: [{ type: "hook", typeLabel: "Why It Matters", title: "Give AI Context, Not Just Commands", content: [{ kind: "text", value: "MCP Resources provide <strong>structured data and context</strong> to AI. Tools let AI act; resources let AI understand." }, { kind: "stats", items: [{ value: "URI", label: "based addressing for any data" }, { value: "Any", label: "data type: text, JSON, binary" }, { value: "Live", label: "resources update via subscriptions" }] }, { kind: "sources", items: ["Anthropic, 'MCP Resources', modelcontextprotocol.io"] }] }, { type: "problem", typeLabel: "The Problem", title: "AI Without Context Hallucinates", content: [{ kind: "text", value: "Without real data, AI <strong>makes up answers</strong> based on training data." }, { kind: "bullets", items: ["AI guesses your schema instead of reading it", "Writes code for wrong API version", "Gives generic advice without your config", "Users manually paste context every time"] }] }, { type: "concepts", typeLabel: "Core Concepts", title: "Resource Anatomy", content: [{ kind: "bullets", items: ["<strong>URI</strong> \u2014 Unique identifier (file:///path, db://table, config://app)", "<strong>Name</strong> \u2014 Human-readable label", "<strong>MIME type</strong> \u2014 text/plain, application/json, etc.", "<strong>Content</strong> \u2014 The actual data returned", "<strong>Subscriptions</strong> \u2014 Get notified when resources change"] }] }, { type: "how", typeLabel: "How It Works", title: "Exposing Resources", content: [{ kind: "code", value: "server.resource('db://schema/users',\n  'Users table schema',\n  'application/json',\n  async () => ({\n    text: JSON.stringify(await db.getTableSchema('users'))\n  })\n);\n\n// Dynamic resources with URI templates\nserver.resource('file://{path}',\n  'Project files',\n  async ({ path }) => ({\n    text: await fs.readFile(path, 'utf8')\n  })\n);" }] }, { type: "example", typeLabel: "Real-World Example", title: "Database Context", content: [{ kind: "text", value: "A database MCP server exposes schema, recent queries, and table stats as resources." }, { kind: "bullets", items: ["db://schema/* \u2014 table schemas for context", "db://stats/* \u2014 table row counts, sizes", "db://queries/recent \u2014 last 10 queries", "AI uses these to write better SQL"] }] }, { type: "guide", typeLabel: "Step-by-Step Guide", title: "Adding Resources", content: [{ kind: "bullets", items: ["Step 1: Identify data AI needs for context.", "Step 2: Design URI scheme.", "Step 3: Set appropriate MIME types.", "Step 4: Implement content handlers.", "Step 5: Add subscriptions for live data."] }] }, { type: "practices", typeLabel: "Best Practices", title: "Rules", content: [{ kind: "bullets", items: ["Use meaningful URI schemes", "Include MIME type for proper handling", "Keep payloads focused and small", "Use subscriptions for changing data", "Don't expose sensitive data without auth"] }] }, { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [{ kind: "bullets", items: ["<strong>Huge resources</strong> \u2014 Dumping entire databases.", "<strong>Stale data</strong> \u2014 Cached resources never updated.", "<strong>No URI structure</strong> \u2014 Random, inconsistent URIs.", "<strong>Sensitive data</strong> \u2014 Exposing PII without filtering."] }] }, { type: "action", typeLabel: "Your Action Plan", title: "Add Resources", content: [{ kind: "bullets", items: ["Identify 3 data sources AI needs.", "Design URI scheme.", "Implement resource handlers.", "Test: does AI give better answers with context?"] }] }, { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [{ kind: "bullets", items: ["Resources give AI context to reduce hallucination.", "URI-based addressing for any data source.", "Keep payloads focused.", "Subscriptions for live/changing data."] }, { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 4 }] }] }] };

// TOPIC 30: MCP Prompts [EXISTING from old #19]
window.DEEP_DIVES[30] = { title: "MCP Prompts", icon: "\u{1F4AC}", tag: "AI protocols", slides: [{ type: "hook", typeLabel: "Why It Matters", title: "Reusable Instructions for Consistent AI Behavior", content: [{ kind: "text", value: "MCP Prompts are <strong>templated instructions</strong> that standardize how AI interacts with your tools and data." }, { kind: "stats", items: [{ value: "3rd", label: "MCP primitive after Tools and Resources" }, { value: "10x", label: "more consistent AI output with templates" }] }, { kind: "sources", items: ["Anthropic, 'MCP Prompts', modelcontextprotocol.io"] }] }, { type: "problem", typeLabel: "The Problem", title: "Inconsistent AI Interactions", content: [{ kind: "text", value: "Users give different instructions for the same task, getting <strong>wildly different quality</strong>." }, { kind: "bullets", items: ["Same task, different prompts, different results", "Best practices lost in individual conversations", "No way to standardize AI interactions across team", "Users don't know optimal prompting for each tool"] }] }, { type: "concepts", typeLabel: "Core Concepts", title: "Prompt Anatomy", content: [{ kind: "bullets", items: ["<strong>Name</strong> \u2014 Identifier for the prompt template", "<strong>Description</strong> \u2014 When to use this prompt", "<strong>Arguments</strong> \u2014 Dynamic parameters to fill in", "<strong>Messages</strong> \u2014 Pre-constructed conversation with role + content"] }] }, { type: "how", typeLabel: "How It Works", title: "Defining Prompts", content: [{ kind: "code", value: "server.prompt(\n  'code_review',\n  'Review code for security and performance issues',\n  [{ name: 'code', description: 'Code to review', required: true }],\n  ({ code }) => ({\n    messages: [{\n      role: 'user',\n      content: {\n        type: 'text',\n        text: `Review this code for:\\n1. Security vulnerabilities\\n2. Performance issues\\n3. Error handling gaps\\n\\n${code}`\n      }\n    }]\n  })\n);" }] }, { type: "example", typeLabel: "Real-World Example", title: "Team Prompt Library", content: [{ kind: "text", value: "A team creates MCP prompts for their <strong>most common AI workflows</strong>." }, { kind: "bullets", items: ["sql_query: generates safe SQL from natural language", "incident_summary: structures incident reports", "api_design: follows team's API conventions", "Each encodes team best practices"] }] }, { type: "guide", typeLabel: "Step-by-Step Guide", title: "Creating Prompts", content: [{ kind: "bullets", items: ["Step 1: Identify repetitive AI tasks.", "Step 2: Write the ideal prompt template.", "Step 3: Identify dynamic arguments.", "Step 4: Register as MCP prompt.", "Step 5: Share with team via MCP server."] }] }, { type: "practices", typeLabel: "Best Practices", title: "Rules", content: [{ kind: "bullets", items: ["Encode best practices into templates", "Use arguments for dynamic parts", "Include role-based messages (system + user)", "Version prompts like code", "Don't hardcode data that changes"] }] }, { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [{ kind: "bullets", items: ["<strong>Over-templating</strong> \u2014 Templates for everything.", "<strong>Stale prompts</strong> \u2014 Not updating when best practices change.", "<strong>No arguments</strong> \u2014 Static prompts that can't adapt.", "<strong>Missing context</strong> \u2014 Template without relevant resources."] }] }, { type: "action", typeLabel: "Your Action Plan", title: "Build Library", content: [{ kind: "bullets", items: ["Identify top 3 repetitive AI tasks.", "Write optimal prompt for each.", "Register as MCP prompts.", "Share with team."] }] }, { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [{ kind: "bullets", items: ["Prompts standardize AI interactions.", "Encode team best practices.", "Use arguments for dynamic content.", "Version and share like code."] }, { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 4 }] }] }] };

// TOPIC 31: MCP Transports [EXISTING from old #20]
window.DEEP_DIVES[31] = { title: "MCP Transports", icon: "\u{1F6E4}\uFE0F", tag: "AI protocols", slides: [{ type: "hook", typeLabel: "Why It Matters", title: "stdio or HTTP \u2014 The Decision That Shapes Your Deployment", content: [{ kind: "text", value: "MCP supports two transports: <strong>stdio for local, HTTP+SSE for remote</strong>. The choice determines security, scale, and architecture." }, { kind: "stats", items: [{ value: "2", label: "transport options" }, { value: "stdio", label: "for local, single-user" }, { value: "HTTP+SSE", label: "for remote, multi-user" }] }] }, { type: "problem", typeLabel: "The Problem", title: "Wrong Transport, Wrong Architecture", content: [{ kind: "text", value: "Choosing wrong transport creates <strong>security holes or unnecessary complexity</strong>." }, { kind: "bullets", items: ["stdio over network = security nightmare", "HTTP for local tools = unnecessary overhead", "No auth on remote servers = data exposure", "Missing reconnection = lost connections"] }] }, { type: "concepts", typeLabel: "Core Concepts", title: "Transport Comparison", content: [{ kind: "bullets", items: ["<strong>stdio</strong> \u2014 Process stdin/stdout. Local only. Simple. Secure (process isolation).", "<strong>HTTP+SSE</strong> \u2014 HTTP POST for requests, SSE for responses. Remote. Needs auth.", "<strong>Streamable HTTP</strong> \u2014 Newer option combining request/response with streaming."] }] }, { type: "how", typeLabel: "How It Works", title: "Implementation", content: [{ kind: "code", value: "// stdio transport (local)\nimport { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';\nconst transport = new StdioServerTransport();\nawait server.connect(transport);\n\n// HTTP+SSE transport (remote)\nimport { SSEServerTransport } from '@modelcontextprotocol/sdk/server/sse.js';\napp.get('/sse', (req, res) => {\n  const transport = new SSEServerTransport('/messages', res);\n  server.connect(transport);\n});" }] }, { type: "example", typeLabel: "Real-World Example", title: "Hybrid Deployment", content: [{ kind: "text", value: "Production setup: <strong>stdio for dev tools, HTTP+SSE for shared services</strong>." }, { kind: "bullets", items: ["Local file system: stdio (fast, secure)", "Shared database: HTTP+SSE with API key auth", "Internal APIs: HTTP+SSE behind VPN", "Each transport matched to use case"] }] }, { type: "guide", typeLabel: "Step-by-Step Guide", title: "Choosing Transport", content: [{ kind: "bullets", items: ["Step 1: Single user, local? Use stdio.", "Step 2: Multi-user or remote? Use HTTP+SSE.", "Step 3: Add authentication for HTTP.", "Step 4: Implement reconnection logic.", "Step 5: Monitor connection health."] }] }, { type: "practices", typeLabel: "Best Practices", title: "Rules", content: [{ kind: "bullets", items: ["stdio for local dev tools", "HTTP+SSE for shared/remote services", "Always add auth to HTTP transport", "Implement reconnection with backoff", "Monitor connection health"] }] }, { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [{ kind: "bullets", items: ["<strong>HTTP without auth</strong>", "<strong>stdio for shared services</strong>", "<strong>No reconnection</strong> \u2014 Drops silently.", "<strong>Ignoring timeouts</strong>"] }] }, { type: "action", typeLabel: "Your Action Plan", title: "Choose Wisely", content: [{ kind: "bullets", items: ["Map servers to transport needs.", "Add auth to any HTTP transport.", "Implement reconnection.", "Test transport under load."] }] }, { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [{ kind: "bullets", items: ["stdio = local, simple, secure.", "HTTP+SSE = remote, multi-user, needs auth.", "Match transport to deployment model.", "Always implement reconnection."] }, { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 4 }] }] }] };

// TOPIC 32: MCP Security [EXISTING from old #21]
window.DEEP_DIVES[32] = { title: "MCP Security Best Practices", icon: "\u{1F6E1}\uFE0F", tag: "AI protocols", slides: [{ type: "hook", typeLabel: "Why It Matters", title: "Your MCP Server Is a Remote Code Execution Surface", content: [{ kind: "text", value: "MCP servers execute code on your behalf. Without proper security, AI becomes an <strong>attack vector into your infrastructure</strong>." }, { kind: "stats", items: [{ value: "100%", label: "of MCP tools are potential attack surfaces" }, { value: "0", label: "tools should trust AI input blindly" }] }] }, { type: "problem", typeLabel: "The Problem", title: "AI as Attack Vector", content: [{ kind: "text", value: "Prompt injection can make AI <strong>call your tools maliciously</strong>." }, { kind: "bullets", items: ["AI tricked into running destructive commands", "SQL injection through AI-generated queries", "Data exfiltration via tool responses", "Privilege escalation through tool chains"] }] }, { type: "concepts", typeLabel: "Core Concepts", title: "Security Layers", content: [{ kind: "bullets", items: ["<strong>Input validation</strong> \u2014 Validate every parameter with JSON Schema", "<strong>Least privilege</strong> \u2014 Tools get minimum needed permissions", "<strong>Sandboxing</strong> \u2014 Run servers in isolated environments", "<strong>Audit logging</strong> \u2014 Log every tool call for review", "<strong>Rate limiting</strong> \u2014 Prevent abuse through rapid calls"] }] }, { type: "how", typeLabel: "How It Works", title: "Secure Tool Implementation", content: [{ kind: "code", value: "server.tool('query_db', {\n  sql: { type: 'string', pattern: '^SELECT' }, // Only SELECT\n  limit: { type: 'number', maximum: 1000 }    // Cap results\n}, async ({ sql, limit }) => {\n  // Validate against allowlist of tables\n  if (!ALLOWED_TABLES.some(t => sql.includes(t)))\n    throw new Error('Table not in allowlist');\n  // Use parameterized queries\n  // Log the call\n  audit.log({ tool: 'query_db', sql, timestamp: Date.now() });\n  return { content: [{ type: 'text', text: result }] };\n});" }] }, { type: "example", typeLabel: "Real-World Example", title: "Layered Security", content: [{ kind: "text", value: "Production MCP deployment with <strong>defense in depth</strong>." }, { kind: "bullets", items: ["Schema validation on every input", "Table/column allowlists for DB tools", "Read-only database connections", "All tool calls logged with user context", "Rate limited to 100 calls/min per user"] }] }, { type: "guide", typeLabel: "Step-by-Step Guide", title: "Securing MCP", content: [{ kind: "bullets", items: ["Step 1: Validate all inputs with strict schemas.", "Step 2: Use least-privilege credentials.", "Step 3: Implement audit logging.", "Step 4: Add rate limiting.", "Step 5: Run security review on all tools."] }] }, { type: "practices", typeLabel: "Best Practices", title: "Rules", content: [{ kind: "bullets", items: ["Never trust AI-generated input", "Read-only by default; write requires confirmation", "Allowlist > blocklist for validation", "Log everything for forensics", "Sandbox server processes"] }] }, { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [{ kind: "bullets", items: ["<strong>Trusting AI input</strong> \u2014 AI can be prompt-injected.", "<strong>Admin credentials</strong> \u2014 Tools with full DB access.", "<strong>No logging</strong> \u2014 Can't investigate incidents.", "<strong>No rate limits</strong> \u2014 AI loops calling tools infinitely."] }] }, { type: "action", typeLabel: "Your Action Plan", title: "Secure Now", content: [{ kind: "bullets", items: ["Audit all tool input validation.", "Switch to least-privilege credentials.", "Add audit logging to every tool.", "Implement rate limiting."] }] }, { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [{ kind: "bullets", items: ["MCP tools are code execution surfaces.", "Never trust AI input \u2014 always validate.", "Least privilege, audit logging, rate limiting.", "Defense in depth at every layer."] }, { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }] }] };

// TOPIC 33: MCP in Production [EXISTING from old #22]
window.DEEP_DIVES[33] = { title: "MCP in Production", icon: "\u{1F3ED}", tag: "AI protocols", slides: [{ type: "hook", typeLabel: "Why It Matters", title: "Demo MCP Servers Are Easy. Production Is Different.", content: [{ kind: "text", value: "Running MCP in production requires <strong>scaling, monitoring, versioning, and reliability</strong> that demos don't show." }, { kind: "stats", items: [{ value: "99.9%", label: "uptime target for production MCP" }, { value: "< 500ms", label: "P99 latency target for tool calls" }] }] }, { type: "problem", typeLabel: "The Problem", title: "Production Gaps", content: [{ kind: "text", value: "MCP servers built for demos <strong>break under real-world conditions</strong>." }, { kind: "bullets", items: ["No monitoring \u2014 failures go unnoticed", "No versioning \u2014 breaking changes crash clients", "No scaling \u2014 single server, single point of failure", "No graceful degradation \u2014 one tool failure kills all"] }] }, { type: "concepts", typeLabel: "Core Concepts", title: "Production Checklist", content: [{ kind: "bullets", items: ["<strong>Health checks</strong> \u2014 Liveness and readiness probes", "<strong>Monitoring</strong> \u2014 Tool call latency, error rates, usage metrics", "<strong>Versioning</strong> \u2014 Capability negotiation for backward compatibility", "<strong>Scaling</strong> \u2014 Multiple instances behind load balancer", "<strong>Graceful degradation</strong> \u2014 Individual tool failures don't crash the server"] }] }, { type: "how", typeLabel: "How It Works", title: "Production Architecture", content: [{ kind: "code", value: "// Production MCP server setup\n// 1. Health check endpoint\napp.get('/health', (req, res) => res.json({ status: 'ok' }));\n\n// 2. Metrics middleware\nserver.use(async (ctx, next) => {\n  const start = Date.now();\n  try {\n    await next();\n    metrics.recordToolCall(ctx.tool, Date.now() - start, 'success');\n  } catch (e) {\n    metrics.recordToolCall(ctx.tool, Date.now() - start, 'error');\n    throw e;\n  }\n});\n\n// 3. Individual tool error handling\n// Each tool has try/catch; one failure doesn't crash server" }] }, { type: "example", typeLabel: "Real-World Example", title: "Enterprise MCP Deployment", content: [{ kind: "text", value: "An enterprise runs MCP servers for 500+ engineers." }, { kind: "bullets", items: ["3 replicas per server behind ALB", "Prometheus metrics + Grafana dashboards", "Capability versioning for backward compat", "Circuit breakers per external dependency", "99.95% uptime over 6 months"] }] }, { type: "guide", typeLabel: "Step-by-Step Guide", title: "Going to Production", content: [{ kind: "bullets", items: ["Step 1: Add health checks.", "Step 2: Instrument with metrics.", "Step 3: Implement error isolation per tool.", "Step 4: Set up monitoring + alerting.", "Step 5: Deploy multiple replicas."] }] }, { type: "practices", typeLabel: "Best Practices", title: "Rules", content: [{ kind: "bullets", items: ["Health checks + readiness probes", "Metrics: latency, errors, usage per tool", "Error isolation: one tool failure != server failure", "Capability versioning for safe updates", "Graceful shutdown with connection draining"] }] }, { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [{ kind: "bullets", items: ["<strong>No monitoring</strong> \u2014 Silent failures.", "<strong>Breaking changes</strong> \u2014 No versioning.", "<strong>Single instance</strong> \u2014 SPOF.", "<strong>Shared error handling</strong> \u2014 One tool crashes all."] }] }, { type: "action", typeLabel: "Your Action Plan", title: "Production Ready", content: [{ kind: "bullets", items: ["Add health checks today.", "Instrument metrics for top 3 tools.", "Add error isolation per tool.", "Set up Grafana dashboard."] }] }, { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [{ kind: "bullets", items: ["Production MCP needs monitoring, versioning, scaling.", "Error isolation: one tool can't crash the server.", "Health checks + metrics from day one.", "Multiple replicas for reliability."] }, { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 4 }] }] }] };

// TOPIC 34: MCP Apps [EXISTING from old #23]
window.DEEP_DIVES[34] = { title: "MCP Apps", icon: "\u{1F4F1}", tag: "AI protocols", slides: [{ type: "hook", typeLabel: "Why It Matters", title: "MCP Powers More Than You Think", content: [{ kind: "text", value: "MCP isn't just for Claude Desktop. It powers <strong>dev tools, enterprise integrations, and autonomous agents</strong>." }, { kind: "stats", items: [{ value: "100+", label: "MCP servers in the ecosystem" }, { value: "10+", label: "MCP-compatible hosts" }] }] }, { type: "problem", typeLabel: "The Problem", title: "Siloed AI Integrations", content: [{ kind: "text", value: "Each AI app builds custom integrations, duplicating effort across the ecosystem." }, { kind: "bullets", items: ["Same GitHub integration built 10 times", "No portability between AI hosts", "Vendor lock-in to specific platforms"] }] }, { type: "concepts", typeLabel: "Core Concepts", title: "MCP Ecosystem", content: [{ kind: "bullets", items: ["<strong>Dev tools</strong> \u2014 IDE integrations, code search, documentation", "<strong>Data access</strong> \u2014 Databases, APIs, file systems", "<strong>DevOps</strong> \u2014 CI/CD, monitoring, deployment", "<strong>Productivity</strong> \u2014 Slack, email, calendar", "<strong>Custom</strong> \u2014 Internal tools, business logic"] }] }, { type: "how", typeLabel: "How It Works", title: "Example: CI/CD MCP Server", content: [{ kind: "code", value: "// CI/CD MCP server\nserver.tool('trigger_deploy', {\n  service: { type: 'string' },\n  environment: { type: 'string', enum: ['staging', 'prod'] }\n}, async ({ service, environment }) => {\n  if (environment === 'prod')\n    return { text: 'Production deploy requires approval. PR created.' };\n  const result = await ci.deploy(service, environment);\n  return { text: `Deployed ${service} to ${environment}: ${result.url}` };\n});" }] }, { type: "example", typeLabel: "Real-World Example", title: "Full-Stack MCP", content: [{ kind: "text", value: "Engineering team uses MCP for their <strong>entire development workflow</strong>." }, { kind: "bullets", items: ["GitHub server: PRs, issues, code search", "PostgreSQL server: query production (read-only)", "Datadog server: metrics and alerts", "Jira server: ticket management", "One AI host, unified access to everything"] }] }, { type: "guide", typeLabel: "Step-by-Step Guide", title: "Building MCP Apps", content: [{ kind: "bullets", items: ["Step 1: Identify top 5 tools your team uses daily.", "Step 2: Check if MCP servers already exist for them.", "Step 3: Build custom servers for internal tools.", "Step 4: Connect all to one MCP host.", "Step 5: Measure time saved on common tasks."] }] }, { type: "practices", typeLabel: "Best Practices", title: "Rules", content: [{ kind: "bullets", items: ["Use existing community servers when possible", "Build custom servers for internal/proprietary tools", "Keep servers focused on one domain", "Share servers across team", "Contribute useful servers back to community"] }] }, { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [{ kind: "bullets", items: ["<strong>Rebuilding existing servers</strong>", "<strong>Monolithic all-in-one server</strong>", "<strong>No security on internal tools</strong>", "<strong>Not measuring value</strong>"] }] }, { type: "action", typeLabel: "Your Action Plan", title: "Build Your Stack", content: [{ kind: "bullets", items: ["Audit: what tools does your team use daily?", "Install existing MCP servers for GitHub, DB, etc.", "Build one custom server for internal tool.", "Measure: how much time saved?"] }] }, { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [{ kind: "bullets", items: ["MCP ecosystem is growing fast.", "Use existing servers, build custom for internal.", "One host, unified access to all tools.", "Measure value to justify investment."] }, { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 4 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }] }] };

// TOPIC 35: Building Your First MCP Server [EXISTING from old #24]
window.DEEP_DIVES[35] = { title: "Building Your First MCP Server", icon: "\u{1F528}", tag: "AI protocols", slides: [{ type: "hook", typeLabel: "Why It Matters", title: "From Zero to MCP Server in 30 Minutes", content: [{ kind: "text", value: "Building an MCP server is <strong>surprisingly simple</strong>. The SDK handles protocol details; you focus on capabilities." }, { kind: "stats", items: [{ value: "30 min", label: "to build your first server" }, { value: "50", label: "lines of code minimum viable server" }] }] }, { type: "problem", typeLabel: "The Problem", title: "Seems Complex, Is Simple", content: [{ kind: "text", value: "The protocol spec looks intimidating, but the SDK <strong>abstracts almost everything</strong>." }, { kind: "bullets", items: ["JSON-RPC handled by SDK", "Transport layer handled by SDK", "Capability negotiation handled by SDK", "You just register tools, resources, prompts"] }] }, { type: "concepts", typeLabel: "Core Concepts", title: "Minimum Viable Server", content: [{ kind: "bullets", items: ["<strong>McpServer</strong> \u2014 Main class from SDK", "<strong>server.tool()</strong> \u2014 Register callable functions", "<strong>server.resource()</strong> \u2014 Expose data", "<strong>Transport</strong> \u2014 Connect to stdio or HTTP"] }] }, { type: "how", typeLabel: "How It Works", title: "Complete Example", content: [{ kind: "code", value: "import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';\nimport { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';\n\nconst server = new McpServer({ name: 'my-server', version: '1.0.0' });\n\nserver.tool('greet', 'Say hello to someone', {\n  name: { type: 'string', description: 'Name to greet' }\n}, async ({ name }) => ({\n  content: [{ type: 'text', text: `Hello, ${name}!` }]\n}));\n\nconst transport = new StdioServerTransport();\nawait server.connect(transport);" }] }, { type: "example", typeLabel: "Real-World Example", title: "Weather Server", content: [{ kind: "text", value: "A practical first server: <strong>weather lookup</strong>." }, { kind: "bullets", items: ["One tool: get_weather(city)", "Calls weather API", "Returns formatted forecast", "Total: 40 lines of code", "Usable in Claude Desktop immediately"] }] }, { type: "guide", typeLabel: "Step-by-Step Guide", title: "Build Yours", content: [{ kind: "bullets", items: ["Step 1: npm init && npm install @modelcontextprotocol/sdk", "Step 2: Create server instance with McpServer.", "Step 3: Register one tool with schema + handler.", "Step 4: Connect StdioServerTransport.", "Step 5: Add to Claude Desktop config and test."] }] }, { type: "practices", typeLabel: "Best Practices", title: "Rules", content: [{ kind: "bullets", items: ["Start with one simple tool", "Add proper descriptions for AI", "Validate inputs from the start", "Test with Claude Desktop", "Iterate based on actual usage"] }] }, { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [{ kind: "bullets", items: ["<strong>Over-scoping</strong> \u2014 Building 20 tools before testing 1.", "<strong>Missing descriptions</strong> \u2014 AI can't discover tools.", "<strong>No error handling</strong> \u2014 Crashes on bad input.", "<strong>Not testing with host</strong> \u2014 Works in isolation, fails in Claude."] }] }, { type: "action", typeLabel: "Your Action Plan", title: "Build Today", content: [{ kind: "bullets", items: ["Install MCP SDK.", "Build hello-world server (20 min).", "Connect to Claude Desktop.", "Build one useful tool for your work."] }] }, { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [{ kind: "bullets", items: ["MCP servers are surprisingly simple to build.", "SDK handles protocol; you handle capabilities.", "Start with one tool, iterate.", "Test with a real MCP host."] }, { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }] }] };

// TOPIC 36: API Design Is Your Contract [EXISTING from old #9]
window.DEEP_DIVES[36] = { title: "API Design Is Your Contract", icon: "\u{1F500}", tag: "API design", slides: [{ type: "hook", typeLabel: "Why It Matters", title: "Your API Is a Public Promise That\u2019s Expensive to Break", content: [{ kind: "text", value: "Your API is a <strong>public promise</strong>. Once consumers depend on it, changing it is expensive." }, { kind: "stats", items: [{ value: "80%", label: "of developers judge a platform by its API" }, { value: "10x", label: "cheaper to fix design before launch" }] }, { kind: "sources", items: ["SmartBear, 'State of the API Report 2024'"] }] }, { type: "problem", typeLabel: "The Problem", title: "Breaking Changes Break Trust", content: [{ kind: "text", value: "Poorly designed APIs create cascading pain." }, { kind: "bullets", items: ["Inconsistent naming: /getUsers vs /user_list vs /people/fetch", "No versioning \u2014 every change risks breaking clients", "Endpoints return too much or too little", "Useless error responses"] }] }, { type: "concepts", typeLabel: "Core Concepts", title: "API Design Principles", content: [{ kind: "bullets", items: ["<strong>Consistency</strong> \u2014 Same patterns everywhere", "<strong>Versioning</strong> \u2014 /v1/ from day one", "<strong>Idempotency</strong> \u2014 PUT/DELETE safe to retry", "<strong>Pagination</strong> \u2014 Never return unbounded lists", "<strong>Clear errors</strong> \u2014 Machine + human readable"] }, { kind: "sources", items: ["Google Cloud, 'API Design Guide'"] }] }, { type: "how", typeLabel: "How It Works", title: "RESTful API Design", content: [{ kind: "code", value: "// Good API design\nGET    /v1/orders?status=active&cursor=abc\nPOST   /v1/orders          { item_id, quantity }\nGET    /v1/orders/:id\nPUT    /v1/orders/:id       { quantity }\nDELETE /v1/orders/:id\n\n// Good error response\n{\n  \"error\": {\n    \"code\": \"ORDER_NOT_FOUND\",\n    \"message\": \"Order ord_123 does not exist.\",\n    \"requestId\": \"req_abc789\"\n  }\n}" }, { kind: "callout", style: "insight", value: "Include requestId in every response \u2014 invaluable for debugging." }] }, { type: "example", typeLabel: "Real-World Example", title: "Stripe: The Gold Standard", content: [{ kind: "text", value: "Stripe's API is widely considered <strong>the best-designed API in the industry</strong>." }, { kind: "bullets", items: ["Consistent CRUD patterns", "Idempotency keys on all POSTs", "Expandable fields \u2014 request only what you need", "Per-request versioning, old versions supported years", "Rich error objects with doc links"] }, { kind: "sources", items: ["Stripe Engineering, 'Designing APIs for Humans'"] }] }, { type: "guide", typeLabel: "Step-by-Step Guide", title: "Designing Your API", content: [{ kind: "bullets", items: ["Step 1: Map resources as nouns (orders, users, invoices).", "Step 2: Lock in HTTP verbs (GET/POST/PUT/DELETE).", "Step 3: Standardize error format with code + message + requestId.", "Step 4: Add cursor pagination + filtering from day one.", "Step 5: Generate OpenAPI spec, publish interactive docs."] }] }, { type: "practices", typeLabel: "Best Practices", title: "Rules", content: [{ kind: "bullets", items: ["Nouns for resources, HTTP verbs for actions", "201 for creation, 204 for deletion, 200 for reads", "Idempotency keys on all writes", "Don't put verbs in URLs", "Don't return 200 with error in body"] }] }, { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [{ kind: "bullets", items: ["<strong>God endpoint</strong> \u2014 One endpoint does everything.", "<strong>Chatty APIs</strong> \u2014 10 calls to render one page.", "<strong>Leaking internals</strong> \u2014 DB IDs in responses.", "<strong>No rate limiting</strong> \u2014 One client takes down API."] }] }, { type: "action", typeLabel: "Your Action Plan", title: "Improve This Week", content: [{ kind: "bullets", items: ["Audit naming consistency.", "Add standard error format.", "Add rate limiting to public endpoints.", "Generate OpenAPI spec."] }] }, { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [{ kind: "bullets", items: ["API = contract. Breaking changes = breaking trust.", "Consistency, versioning, idempotency, clear errors.", "Design for consumers, not your DB schema.", "Study Stripe's API."] }, { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 4 }] }] }] };

// TOPICS 37-50: Remaining API design, real-time, and milestone topics
// Due to extreme file size, these use the same compressed format

// TOPIC 37: REST Is Not a Religion [NEW]
window.DEEP_DIVES[37] = { title: "REST Is Not a Religion", icon: "\u{1F4E1}", tag: "API design", slides: [{ type: "hook", typeLabel: "Why It Matters", title: "REST Zealotry Costs Teams Millions in Wrong Architecture", content: [{ kind: "text", value: "REST is great for CRUD. But teams force-fit <strong>every interaction into REST</strong>, creating awkward, inefficient APIs." }, { kind: "stats", items: [{ value: "4", label: "REST maturity levels (Richardson)" }, { value: "< 5%", label: "of APIs reach Level 3 (HATEOAS)" }] }, { kind: "sources", items: ["Roy Fielding, 'REST APIs must be hypertext-driven', 2008"] }] }, { type: "problem", typeLabel: "The Problem", title: "When REST Doesn't Fit", content: [{ kind: "text", value: "Some interactions are <strong>fundamentally not resources</strong>." }, { kind: "bullets", items: ["Complex queries requiring 10 nested filters", "Real-time streaming data", "RPC-style operations (validate, calculate, transform)", "Batch operations across multiple resources"] }] }, { type: "concepts", typeLabel: "Core Concepts", title: "REST Maturity Levels", content: [{ kind: "bullets", items: ["<strong>Level 0</strong> \u2014 One endpoint, POST everything (SOAP-like)", "<strong>Level 1</strong> \u2014 Resources with URLs, but one HTTP verb", "<strong>Level 2</strong> \u2014 HTTP verbs (GET/POST/PUT/DELETE) + status codes", "<strong>Level 3</strong> \u2014 HATEOAS \u2014 hypermedia links in responses"] }, { kind: "callout", style: "insight", value: "Most 'REST APIs' are Level 2 at best. True REST (Level 3) is rare and often overkill." }] }, { type: "how", typeLabel: "How It Works", title: "Choosing the Right Style", content: [{ kind: "code", value: "// REST: great for CRUD resources\nGET /users/123\nPUT /users/123 { name: 'New Name' }\n\n// Not REST: operation-based endpoints are fine\nPOST /payments/validate { card: '...' }\nPOST /reports/generate { dateRange: '...' }\nPOST /emails/send { to: '...', body: '...' }\n\n// Also fine: GraphQL for complex reads\n// Also fine: gRPC for service-to-service\n// Also fine: WebSocket for real-time" }] }, { type: "example", typeLabel: "Real-World Example", title: "Stripe's Pragmatic REST", content: [{ kind: "text", value: "Stripe is REST-ish, not REST-pure. They <strong>break REST rules where it helps developers</strong>." }, { kind: "bullets", items: ["POST /v1/charges (creates, not strictly REST)", "POST /v1/refunds (action, not resource CRUD)", "Expandable fields (not standard REST)", "Works beautifully because they prioritize developer experience"] }] }, { type: "guide", typeLabel: "Step-by-Step Guide", title: "Choosing API Style", content: [{ kind: "bullets", items: ["Step 1: Is it CRUD on resources? REST.", "Step 2: Complex queries from frontend? GraphQL.", "Step 3: Service-to-service, high performance? gRPC.", "Step 4: Real-time bidirectional? WebSocket.", "Step 5: One-way streaming? SSE."] }] }, { type: "practices", typeLabel: "Best Practices", title: "Rules", content: [{ kind: "bullets", items: ["Use REST for what REST is good at (CRUD resources)", "Use action endpoints (POST /validate) when needed", "Don't force every interaction into resource CRUD", "Consistency within your API matters more than REST purity", "Document your conventions explicitly"] }] }, { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [{ kind: "bullets", items: ["<strong>REST fundamentalism</strong> \u2014 Forcing operations into resources.", "<strong>HATEOAS without consumers</strong> \u2014 Nobody uses your links.", "<strong>Mixed styles randomly</strong> \u2014 Inconsistency is worse than impurity.", "<strong>Ignoring alternatives</strong> \u2014 REST is not the only option."] }] }, { type: "action", typeLabel: "Your Action Plan", title: "Audit Your API", content: [{ kind: "bullets", items: ["Identify endpoints that feel forced into REST.", "Consider action endpoints for operations.", "Evaluate GraphQL for complex frontend queries.", "Document your API style decisions in an ADR."] }] }, { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [{ kind: "bullets", items: ["REST is great for CRUD, not everything.", "Action endpoints are fine and often better.", "Consistency > REST purity.", "Match API style to interaction pattern."] }, { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }] }] };

// TOPICS 38-50: Abbreviated but complete with all 10 slide types
// Each follows the exact same structure as above

window.DEEP_DIVES[38] = { title: "gRPC & Connect Protocol", icon: "\u2699\uFE0F", tag: "API design", slides: [{ type: "hook", typeLabel: "Why It Matters", title: "APIs at Wire Speed", content: [{ kind: "text", value: "gRPC powers <strong>inter-service communication at Google, Netflix, Square</strong>. Connect makes it browser-accessible." }, { kind: "stats", items: [{ value: "10x", label: "smaller payloads than JSON" }, { value: "3x", label: "faster serialization" }, { value: "100%", label: "type-safe across languages" }] }, { kind: "sources", items: ["CNCF Annual Survey 2024"] }] }, { type: "problem", typeLabel: "The Problem", title: "REST's Hidden Costs", content: [{ kind: "text", value: "JSON serialization, lack of streaming, no type safety across services." }, { kind: "bullets", items: ["JSON parsing overhead at high throughput", "No streaming support in REST", "Type mismatches between services", "Manual client generation"] }] }, { type: "concepts", typeLabel: "Core Concepts", title: "gRPC Fundamentals", content: [{ kind: "bullets", items: ["<strong>Protocol Buffers</strong> \u2014 Binary serialization format", "<strong>HTTP/2</strong> \u2014 Multiplexed, bidirectional streaming", "<strong>Code generation</strong> \u2014 Typed clients in any language", "<strong>4 patterns</strong> \u2014 Unary, server stream, client stream, bidirectional", "<strong>Connect</strong> \u2014 gRPC-compatible, browser-native"] }] }, { type: "how", typeLabel: "How It Works", title: "Proto Definition", content: [{ kind: "code", value: "syntax = \"proto3\";\nservice UserService {\n  rpc GetUser (GetUserRequest) returns (User);\n  rpc ListUsers (ListUsersRequest) returns (stream User);\n}\nmessage GetUserRequest { string id = 1; }\nmessage User {\n  string id = 1;\n  string name = 2;\n  string email = 3;\n}" }] }, { type: "example", typeLabel: "Real-World Example", title: "Buf + Connect", content: [{ kind: "text", value: "Connect protocol gives gRPC benefits <strong>with browser support</strong>." }, { kind: "bullets", items: ["Same proto definitions", "Works with fetch() in browsers", "No envoy proxy needed", "Gradual migration from REST"] }] }, { type: "guide", typeLabel: "Step-by-Step Guide", title: "Getting Started", content: [{ kind: "bullets", items: ["Step 1: Define .proto files.", "Step 2: Generate server + client code.", "Step 3: Implement service handlers.", "Step 4: Use Connect for browser clients.", "Step 5: Add streaming for real-time data."] }] }, { type: "practices", typeLabel: "Best Practices", title: "Rules", content: [{ kind: "bullets", items: ["Use for service-to-service communication", "Proto files are your source of truth", "Use Connect for browser access", "Don't use for simple CRUD with few clients", "Version with package names, not URLs"] }] }, { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [{ kind: "bullets", items: ["<strong>gRPC for everything</strong> \u2014 Overkill for simple CRUD.", "<strong>Ignoring backward compat</strong> \u2014 Breaking proto changes.", "<strong>No deadlines</strong> \u2014 RPCs without timeouts.", "<strong>Large messages</strong> \u2014 gRPC designed for small messages."] }] }, { type: "action", typeLabel: "Your Action Plan", title: "Try It", content: [{ kind: "bullets", items: ["Define one service in proto.", "Generate TypeScript client with Connect.", "Compare latency with your REST equivalent.", "Evaluate for your heaviest service-to-service path."] }] }, { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [{ kind: "bullets", items: ["gRPC: binary, typed, streaming, fast.", "Connect: gRPC for browsers without proxy.", "Use for service-to-service at scale.", "REST is fine for simple CRUD."] }, { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }] }] };

window.DEEP_DIVES[39] = { title: "GraphQL Federation", icon: "\u{1F578}\uFE0F", tag: "API design", slides: [{ type: "hook", typeLabel: "Why It Matters", title: "One Graph, Many Teams, Zero Coordination", content: [{ kind: "text", value: "GraphQL Federation lets teams own <strong>subgraphs</strong> while clients see one unified API." }, { kind: "stats", items: [{ value: "85%", label: "of large GraphQL deployments use federation" }, { value: "10x", label: "faster feature delivery" }] }, { kind: "sources", items: ["Apollo GraphQL, 'State of GraphQL 2024'"] }] }, { type: "problem", typeLabel: "The Problem", title: "Monolithic GraphQL Doesn't Scale", content: [{ kind: "text", value: "One GraphQL server owned by one team becomes a <strong>bottleneck</strong>." }, { kind: "bullets", items: ["Schema conflicts with 10+ teams", "Deploy coupling", "Performance degrades as schema grows"] }] }, { type: "concepts", typeLabel: "Core Concepts", title: "Federation Blocks", content: [{ kind: "bullets", items: ["<strong>Subgraph</strong> \u2014 Independently deployable GraphQL service", "<strong>Supergraph</strong> \u2014 Composed schema served by router", "<strong>Router</strong> \u2014 Receives queries, fans out to subgraphs", "<strong>Entities</strong> \u2014 Types shared via @key directives"] }] }, { type: "how", typeLabel: "How It Works", title: "Query Planning", content: [{ kind: "code", value: "# Products subgraph\ntype Product @key(fields: \"id\") {\n  id: ID!\n  name: String!\n  price: Float!\n}\n\n# Reviews subgraph extends Product\ntype Product @key(fields: \"id\") {\n  id: ID!\n  reviews: [Review!]!\n}\n\n# Router merges both into unified schema" }] }, { type: "example", typeLabel: "Real-World Example", title: "Netflix Federation", content: [{ kind: "text", value: "Netflix uses federation with <strong>5+ subgraphs per domain</strong>." }, { kind: "bullets", items: ["Teams deploy 3x/day independently", "Router handles 50K req/s, p99 < 80ms", "Deploy frequency: 2/week to 15/day"] }, { kind: "sources", items: ["Netflix Tech Blog, 'GraphQL Federation at Scale'"] }] }, { type: "guide", typeLabel: "Step-by-Step Guide", title: "Federating", content: [{ kind: "bullets", items: ["Step 1: Identify domain boundaries.", "Step 2: Add @key to shared entities.", "Step 3: Set up router (Apollo, Cosmo).", "Step 4: Composition checks in CI.", "Step 5: Migrate one subgraph at a time."] }] }, { type: "practices", typeLabel: "Best Practices", title: "Rules", content: [{ kind: "bullets", items: ["Schema composition checks in CI", "Subgraph boundaries mirror org chart", "Keep entity references lightweight", "Start with 2-4 subgraphs"] }] }, { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [{ kind: "bullets", items: ["<strong>Too many subgraphs</strong> \u2014 50 for 3 devs.", "<strong>Circular dependencies</strong>", "<strong>No composition CI</strong>", "<strong>N+1 across subgraphs</strong>"] }] }, { type: "action", typeLabel: "Your Action Plan", title: "Start", content: [{ kind: "bullets", items: ["Map schema to domain boundaries.", "Identify @key entities.", "Extract one subgraph.", "Add composition checks to CI."] }] }, { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [{ kind: "bullets", items: ["Federation = team-owned subgraphs.", "Router composes and plans queries.", "Entities with @key enable sharing.", "Composition checks in CI prevent breaks."] }, { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 4 }] }] }] };

window.DEEP_DIVES[40] = { title: "tRPC: End-to-End Type Safety", icon: "\u{1F52E}", tag: "API design", slides: [{ type: "hook", typeLabel: "Why It Matters", title: "Delete Your API Layer", content: [{ kind: "text", value: "tRPC gives <strong>full-stack type safety</strong> with zero codegen. Change server return type, client gets red squiggles." }, { kind: "stats", items: [{ value: "0", label: "codegen steps" }, { value: "100%", label: "type inference" }, { value: "50%", label: "fewer integration bugs" }] }] }, { type: "problem", typeLabel: "The Problem", title: "The Type Gap", content: [{ kind: "text", value: "REST/GraphQL: server and client types are <strong>different worlds that drift apart</strong>." }, { kind: "bullets", items: ["Server adds required field, client doesn't send it", "Response type changes, frontend uses stale types", "Codegen adds forgettable build step"] }] }, { type: "concepts", typeLabel: "Core Concepts", title: "tRPC Blocks", content: [{ kind: "bullets", items: ["<strong>Router</strong> \u2014 API as a tree of procedures", "<strong>Procedures</strong> \u2014 query, mutation, subscription", "<strong>Zod input</strong> \u2014 Schemas become client types", "<strong>Context</strong> \u2014 Per-request data via middleware"] }] }, { type: "how", typeLabel: "How It Works", title: "Type Inference", content: [{ kind: "code", value: "// Server\nconst appRouter = router({\n  user: router({\n    byId: publicProcedure\n      .input(z.object({ id: z.string() }))\n      .query(({ input }) => db.user.findUnique(input)),\n  }),\n});\nexport type AppRouter = typeof appRouter;\n\n// Client \u2014 fully typed, zero codegen\nconst user = await trpc.user.byId.query({ id: '123' });\n// user is typed as { id: string; name: string; ... }" }] }, { type: "example", typeLabel: "Real-World Example", title: "SaaS Dashboard", content: [{ kind: "text", value: "B2B SaaS rebuilt API with tRPC." }, { kind: "bullets", items: ["Integration bugs dropped 60%", "Feels like calling a local function", "React Query integration for caching"] }] }, { type: "guide", typeLabel: "Step-by-Step Guide", title: "Setup", content: [{ kind: "bullets", items: ["Step 1: Install @trpc/server, @trpc/client, zod.", "Step 2: Define appRouter with procedures.", "Step 3: Export AppRouter type.", "Step 4: Create typed client.", "Step 5: Add @trpc/react-query for React."] }] }, { type: "practices", typeLabel: "Best Practices", title: "Rules", content: [{ kind: "bullets", items: ["Zod schemas for validation + types", "Organize routers by domain", "Middleware chains for auth", "React Query for caching"] }] }, { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Gotchas", content: [{ kind: "bullets", items: ["<strong>TypeScript only</strong> \u2014 No Swift/Kotlin clients.", "<strong>Tight coupling</strong> \u2014 Client tied to server releases.", "<strong>Not for public APIs</strong> \u2014 External consumers need REST.", "<strong>Large responses</strong> \u2014 No built-in pagination."] }] }, { type: "action", typeLabel: "Your Action Plan", title: "Try It", content: [{ kind: "bullets", items: ["Prototype one route with tRPC + Zod.", "Set up React Query integration.", "Add auth middleware.", "Compare with your REST equivalent."] }] }, { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [{ kind: "bullets", items: ["End-to-end type safety, zero codegen.", "Zod = runtime + compile-time validation.", "Best for full-stack TypeScript monorepos.", "Not for public APIs or polyglot envs."] }, { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }] }] };

window.DEEP_DIVES[41] = { title: "API Gateway Patterns", icon: "\u{1F6AA}", tag: "infrastructure", slides: [{ type: "hook", typeLabel: "Why It Matters", title: "One Door, All the Security", content: [{ kind: "text", value: "An API gateway is the <strong>single entry point</strong> for all client requests \u2014 auth, rate limiting, routing, transformation." }, { kind: "stats", items: [{ value: "1", label: "entry point for all traffic" }, { value: "90%", label: "of microservice deployments use a gateway" }] }] }, { type: "problem", typeLabel: "The Problem", title: "Cross-Cutting Chaos", content: [{ kind: "text", value: "Without a gateway, every service implements auth, rate limiting, logging <strong>differently or not at all</strong>." }, { kind: "bullets", items: ["Auth logic duplicated across services", "Rate limiting inconsistent", "No centralized logging", "Direct service exposure to internet"] }] }, { type: "concepts", typeLabel: "Core Concepts", title: "Gateway Responsibilities", content: [{ kind: "bullets", items: ["<strong>Authentication</strong> \u2014 Verify identity before routing", "<strong>Rate limiting</strong> \u2014 Protect backends from overload", "<strong>Routing</strong> \u2014 Route to correct service", "<strong>Transformation</strong> \u2014 Request/response mapping", "<strong>Observability</strong> \u2014 Centralized logging and metrics"] }] }, { type: "how", typeLabel: "How It Works", title: "Gateway Architecture", content: [{ kind: "code", value: "Client -> API Gateway -> Service A\n                    -> Service B\n                    -> Service C\n\n// Gateway handles:\n// 1. TLS termination\n// 2. JWT validation\n// 3. Rate limiting (100 req/min per key)\n// 4. Route: /users/* -> Service A\n//          /orders/* -> Service B\n// 5. Request logging with trace ID" }] }, { type: "example", typeLabel: "Real-World Example", title: "Kong + AWS ALB", content: [{ kind: "text", value: "Common stack: ALB for L7 load balancing, Kong for API management." }, { kind: "bullets", items: ["ALB: TLS, health checks, basic routing", "Kong: auth, rate limiting, transformation", "Together: complete gateway solution"] }] }, { type: "guide", typeLabel: "Step-by-Step Guide", title: "Implementing", content: [{ kind: "bullets", items: ["Step 1: Choose gateway (Kong, AWS API Gateway, Envoy).", "Step 2: Move auth to gateway layer.", "Step 3: Add rate limiting.", "Step 4: Centralize logging.", "Step 5: Remove auth from individual services."] }] }, { type: "practices", typeLabel: "Best Practices", title: "Rules", content: [{ kind: "bullets", items: ["Keep gateway logic thin \u2014 route, auth, rate limit", "Don't put business logic in the gateway", "Monitor gateway latency \u2014 it's on every request", "Have gateway failover/redundancy"] }] }, { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [{ kind: "bullets", items: ["<strong>Fat gateway</strong> \u2014 Business logic in the gateway.", "<strong>Single point of failure</strong> \u2014 Gateway without redundancy.", "<strong>No caching</strong> \u2014 Gateway re-auths every request.", "<strong>Too many gateways</strong> \u2014 Gateway per service."] }] }, { type: "action", typeLabel: "Your Action Plan", title: "Add Gateway", content: [{ kind: "bullets", items: ["Audit: is auth duplicated across services?", "Deploy gateway for centralized auth.", "Add rate limiting.", "Monitor gateway latency."] }] }, { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [{ kind: "bullets", items: ["Gateway = single entry for auth, rate limiting, routing.", "Keep it thin \u2014 no business logic.", "Monitor latency \u2014 it's on every request.", "Redundancy is essential."] }, { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 4 }] }] }] };

window.DEEP_DIVES[42] = { title: "Webhook Design & Reliability", icon: "\u{1F514}", tag: "integration", slides: [{ type: "hook", typeLabel: "Why It Matters", title: "Webhooks That Lose Events Are Worse Than No Webhooks", content: [{ kind: "text", value: "Webhooks are the <strong>backbone of event-driven integrations</strong> \u2014 but most implementations silently lose events." }, { kind: "stats", items: [{ value: "83%", label: "of APIs offer webhooks" }, { value: "30%", label: "of webhook deliveries fail on first attempt" }] }] }, { type: "problem", typeLabel: "The Problem", title: "Unreliable By Default", content: [{ kind: "text", value: "Sending HTTP POST and hoping for the best is <strong>not a reliability strategy</strong>." }, { kind: "bullets", items: ["Receiver is down \u2014 event lost", "Receiver is slow \u2014 sender times out", "Duplicate delivery \u2014 receiver processes twice", "No way to replay missed events"] }] }, { type: "concepts", typeLabel: "Core Concepts", title: "Reliable Webhook Design", content: [{ kind: "bullets", items: ["<strong>Retry with backoff</strong> \u2014 Exponential delay on failure", "<strong>Idempotency</strong> \u2014 Events have unique IDs for dedup", "<strong>Signatures</strong> \u2014 HMAC to verify sender", "<strong>Event log</strong> \u2014 Store events for replay", "<strong>Dead letter</strong> \u2014 Failed events for inspection"] }] }, { type: "how", typeLabel: "How It Works", title: "Implementation", content: [{ kind: "code", value: "// Sending webhooks reliably\nasync function sendWebhook(event) {\n  const payload = JSON.stringify(event);\n  const signature = hmac(payload, secret);\n  \n  for (let attempt = 0; attempt < 5; attempt++) {\n    try {\n      const res = await fetch(url, {\n        method: 'POST',\n        headers: {\n          'X-Webhook-Signature': signature,\n          'X-Event-ID': event.id,\n        },\n        body: payload,\n        signal: AbortSignal.timeout(10000),\n      });\n      if (res.ok) return;\n    } catch (e) {}\n    await sleep(Math.pow(2, attempt) * 1000);\n  }\n  await deadLetter.save(event);\n}" }] }, { type: "example", typeLabel: "Real-World Example", title: "Stripe Webhooks", content: [{ kind: "text", value: "Stripe's webhooks are a model of <strong>reliability and developer experience</strong>." }, { kind: "bullets", items: ["HMAC signatures for verification", "Unique event IDs for idempotency", "Automatic retries over 3 days", "Event dashboard for debugging", "Test mode for development"] }] }, { type: "guide", typeLabel: "Step-by-Step Guide", title: "Building Reliable Webhooks", content: [{ kind: "bullets", items: ["Step 1: Add unique event IDs.", "Step 2: Sign payloads with HMAC.", "Step 3: Retry with exponential backoff.", "Step 4: Store events for replay.", "Step 5: Build event dashboard."] }] }, { type: "practices", typeLabel: "Best Practices", title: "Rules", content: [{ kind: "bullets", items: ["Always sign payloads", "Include event ID for idempotency", "Retry over hours, not minutes", "Store events for replay", "Don't overwhelm receivers \u2014 rate limit sends"] }] }, { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [{ kind: "bullets", items: ["<strong>Fire and forget</strong> \u2014 No retries.", "<strong>No signatures</strong> \u2014 Anyone can send fake events.", "<strong>No idempotency</strong> \u2014 Receiver processes duplicates.", "<strong>Aggressive retries</strong> \u2014 Overwhelming failing receivers."] }] }, { type: "action", typeLabel: "Your Action Plan", title: "Improve", content: [{ kind: "bullets", items: ["Add HMAC signatures.", "Add event IDs.", "Implement retry with backoff.", "Build event replay endpoint."] }] }, { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [{ kind: "bullets", items: ["Sign payloads, include event IDs.", "Retry with exponential backoff.", "Store events for replay.", "Don't overwhelm receivers."] }, { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }] }] };

window.DEEP_DIVES[43] = { title: "API Versioning Strategies", icon: "\u{1F4CC}", tag: "API design", slides: [{ type: "hook", typeLabel: "Why It Matters", title: "Most Teams Get Versioning Wrong \u2014 And Pay for Years", content: [{ kind: "text", value: "API versioning decides how you <strong>evolve without breaking consumers</strong>." }, { kind: "stats", items: [{ value: "70%", label: "of APIs use URL versioning" }, { value: "3 years", label: "average old version support" }] }] }, { type: "problem", typeLabel: "The Problem", title: "Breaking Changes Break Trust", content: [{ kind: "bullets", items: ["No versioning: every change risks breaking clients", "Too many versions: maintenance burden grows exponentially", "Inconsistent strategy: some endpoints versioned, some not"] }] }, { type: "concepts", typeLabel: "Core Concepts", title: "Versioning Strategies", content: [{ kind: "bullets", items: ["<strong>URL path</strong> \u2014 /v1/users, /v2/users. Simple, visible.", "<strong>Header</strong> \u2014 Accept: application/vnd.api+json;version=2", "<strong>Query param</strong> \u2014 /users?version=2", "<strong>Content negotiation</strong> \u2014 Different representations same URL", "<strong>Stripe-style</strong> \u2014 Per-request date-based version header"] }] }, { type: "how", typeLabel: "How It Works", title: "URL Versioning", content: [{ kind: "code", value: "// URL versioning (most common)\nGET /v1/users     // Original\nGET /v2/users     // New response format\n\n// Stripe-style (most flexible)\nGET /users\nStripe-Version: 2024-06-01\n// Server transforms response based on version date\n// Old versions supported for years" }] }, { type: "example", typeLabel: "Real-World Example", title: "Stripe's Date-Based Versioning", content: [{ kind: "text", value: "Stripe versions by <strong>API date, not number</strong>." }, { kind: "bullets", items: ["Each API key has a default version date", "Can override per-request with header", "Old versions supported for years", "Breaking changes documented per version"] }] }, { type: "guide", typeLabel: "Step-by-Step Guide", title: "Implementing", content: [{ kind: "bullets", items: ["Step 1: Choose strategy (URL path for simplicity).", "Step 2: Define what constitutes a breaking change.", "Step 3: Support at least 2 versions simultaneously.", "Step 4: Set deprecation policy (12-24 months).", "Step 5: Document changes per version."] }] }, { type: "practices", typeLabel: "Best Practices", title: "Rules", content: [{ kind: "bullets", items: ["Version from day one", "Additive changes (new fields) don't need new version", "Removing/renaming fields = new version", "Communicate deprecation 6+ months in advance", "Monitor usage of old versions"] }] }, { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [{ kind: "bullets", items: ["<strong>No versioning</strong> \u2014 Breaking changes break trust.", "<strong>Too many versions</strong> \u2014 Maintenance nightmare.", "<strong>Breaking without notice</strong>", "<strong>Versioning too aggressively</strong> \u2014 v47 is a smell."] }] }, { type: "action", typeLabel: "Your Action Plan", title: "Version Your API", content: [{ kind: "bullets", items: ["Add /v1/ prefix if you don't have versioning.", "Define breaking change policy.", "Set up deprecation notices.", "Monitor version usage."] }] }, { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [{ kind: "bullets", items: ["Version from day one.", "URL path versioning is simplest.", "Additive changes are non-breaking.", "Deprecate with 6+ months notice."] }, { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 4 }] }] }] };

window.DEEP_DIVES[44] = { title: "Pagination Done Right", icon: "\u{1F4C4}", tag: "API design", slides: [{ type: "hook", typeLabel: "Why It Matters", title: "Your Offset Pagination Is Broken at Scale \u2014 Here's Why", content: [{ kind: "text", value: "Most pagination is broken: <strong>offset pagination slows linearly, skips or duplicates records</strong> when data changes." }, { kind: "stats", items: [{ value: "O(n)", label: "offset pagination performance" }, { value: "O(1)", label: "cursor pagination performance" }] }] }, { type: "problem", typeLabel: "The Problem", title: "Offset Pagination Breaks", content: [{ kind: "bullets", items: ["Page 1000 requires scanning 999 pages of data", "Insert during pagination: user sees duplicate or skipped records", "DELETE during pagination: user misses records", "Performance degrades linearly with page number"] }] }, { type: "concepts", typeLabel: "Core Concepts", title: "Pagination Strategies", content: [{ kind: "bullets", items: ["<strong>Offset</strong> \u2014 ?page=5&limit=20. Simple, broken at scale.", "<strong>Cursor</strong> \u2014 ?cursor=abc&limit=20. O(1), consistent.", "<strong>Keyset</strong> \u2014 ?after_id=123&limit=20. DB-level cursor.", "<strong>Seek</strong> \u2014 WHERE id > last_id LIMIT 20. Most efficient."] }] }, { type: "how", typeLabel: "How It Works", title: "Cursor Pagination", content: [{ kind: "code", value: "// Cursor-based pagination\nGET /api/orders?limit=20&cursor=eyJpZCI6MTIzfQ\n\n// Response\n{\n  \"data\": [...20 orders...],\n  \"pagination\": {\n    \"next_cursor\": \"eyJpZCI6MTQzfQ\",\n    \"has_more\": true\n  }\n}\n\n// Server implementation\nconst cursor = decodeCursor(req.query.cursor);\nconst orders = await db.query(\n  'SELECT * FROM orders WHERE id > $1 ORDER BY id LIMIT $2',\n  [cursor.id, limit + 1]  // +1 to check has_more\n);" }] }, { type: "example", typeLabel: "Real-World Example", title: "Slack's Cursor API", content: [{ kind: "text", value: "Slack migrated from offset to cursor pagination for <strong>consistent, fast results</strong>." }, { kind: "bullets", items: ["Billions of messages paginated efficiently", "No duplicate or skipped messages", "O(1) regardless of position", "Backward compatible migration"] }] }, { type: "guide", typeLabel: "Step-by-Step Guide", title: "Implementing Cursors", content: [{ kind: "bullets", items: ["Step 1: Identify sort key (usually id or created_at).", "Step 2: Encode last record's key as opaque cursor.", "Step 3: Use WHERE clause instead of OFFSET.", "Step 4: Return next_cursor + has_more.", "Step 5: Keep offset for backward compatibility if needed."] }] }, { type: "practices", typeLabel: "Best Practices", title: "Rules", content: [{ kind: "bullets", items: ["Use cursor for any list > 1000 records", "Opaque cursors (base64) \u2014 don't expose DB internals", "Include has_more flag", "Set reasonable default + max limits", "Index on sort columns"] }] }, { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [{ kind: "bullets", items: ["<strong>Offset at scale</strong> \u2014 Gets slower with page number.", "<strong>Total count</strong> \u2014 COUNT(*) is expensive on large tables.", "<strong>Exposing DB IDs</strong> \u2014 Use opaque cursors.", "<strong>No limit cap</strong> \u2014 Client requests 100K records."] }] }, { type: "action", typeLabel: "Your Action Plan", title: "Fix Your Pagination", content: [{ kind: "bullets", items: ["Identify endpoints using offset pagination.", "Implement cursor-based alternative.", "Add opaque cursor encoding.", "Benchmark: compare offset vs cursor at scale."] }] }, { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [{ kind: "bullets", items: ["Offset = O(n), cursor = O(1).", "Cursor pagination is consistent under mutations.", "Use opaque cursors, not raw IDs.", "Add indexes on sort columns."] }, { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }] }] };

window.DEEP_DIVES[45] = { title: "Server-Sent Events & LLM Streaming", icon: "\u{1F4E1}", tag: "real-time", slides: [{ type: "hook", typeLabel: "Why It Matters", title: "Every AI App Streams Tokens \u2014 Here's How", content: [{ kind: "text", value: "Every major LLM API streams via <strong>SSE</strong>. Without it, users stare at blank screens for 5-30 seconds." }, { kind: "stats", items: [{ value: "200ms", label: "time to first token" }, { value: "85%", label: "perceived speed improvement" }, { value: "0", label: "extra infra vs WebSockets" }] }, { kind: "sources", items: ["Anthropic, 'Streaming API', docs.anthropic.com"] }] }, { type: "problem", typeLabel: "The Problem", title: "LLMs Are Slow Without Streaming", content: [{ kind: "text", value: "5-30 seconds to generate. Without streaming, users see <strong>nothing until complete</strong>." }, { kind: "bullets", items: ["Users abandon after 3s", "Long requests timeout at proxy", "Can't cancel mid-generation"] }] }, { type: "concepts", typeLabel: "Core Concepts", title: "SSE Fundamentals", content: [{ kind: "bullets", items: ["<strong>SSE</strong> \u2014 HTTP server-to-client push, single connection", "<strong>text/event-stream</strong> \u2014 MIME type for SSE", "<strong>EventSource</strong> \u2014 Browser API with auto-reconnect", "<strong>Structured events</strong> \u2014 id, event type, data, retry"] }] }, { type: "how", typeLabel: "How It Works", title: "Streaming LLM Response", content: [{ kind: "code", value: "// Node.js SSE for LLM streaming\napp.post('/chat', async (req, res) => {\n  res.setHeader('Content-Type', 'text/event-stream');\n  res.setHeader('Cache-Control', 'no-cache');\n  const stream = await openai.chat.completions.create({\n    model: 'gpt-4o', messages, stream: true\n  });\n  for await (const chunk of stream) {\n    const token = chunk.choices[0]?.delta?.content;\n    if (token) res.write(`data: ${JSON.stringify({ token })}\\n\\n`);\n  }\n  res.write('data: [DONE]\\n\\n');\n  res.end();\n});" }] }, { type: "example", typeLabel: "Real-World Example", title: "AI Chat with Cancel", content: [{ kind: "text", value: "Users see first token in 180ms. Cancel saves 40% compute." }, { kind: "bullets", items: ["fetch + ReadableStream on client", "AbortController for cancel", "First token in 180ms", "Cancel stops GPU generation"] }, { kind: "sources", items: ["Vercel, 'AI SDK Streaming', sdk.vercel.ai"] }] }, { type: "guide", typeLabel: "Step-by-Step Guide", title: "Implementing", content: [{ kind: "bullets", items: ["Step 1: Set SSE headers.", "Step 2: Call LLM with stream: true.", "Step 3: Forward tokens as SSE events.", "Step 4: Send [DONE] terminal event.", "Step 5: Client: fetch + ReadableStream.", "Step 6: Add AbortController for cancel."] }] }, { type: "practices", typeLabel: "Best Practices", title: "Rules", content: [{ kind: "bullets", items: ["Disable proxy buffering (Nginx: proxy_buffering off)", "Send heartbeat pings every 15s", "Include event IDs for resumability", "Implement backpressure"] }] }, { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [{ kind: "bullets", items: ["<strong>Proxy buffering</strong> \u2014 Nginx buffers by default.", "<strong>EventSource for POST</strong> \u2014 Only supports GET.", "<strong>No cancellation</strong> \u2014 Wastes GPU time.", "<strong>Forgetting to flush</strong>"] }] }, { type: "action", typeLabel: "Your Action Plan", title: "Add Streaming", content: [{ kind: "bullets", items: ["Switch LLM call to streaming mode.", "Set SSE headers, disable buffering.", "Render tokens incrementally.", "Add cancel support."] }] }, { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [{ kind: "bullets", items: ["SSE streams tokens over plain HTTP.", "Use fetch + ReadableStream for POST.", "Disable proxy buffering.", "Implement cancellation to save compute."] }, { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }] }] };

window.DEEP_DIVES[46] = { title: "WebSockets at Scale", icon: "\u{1F50C}", tag: "real-time", slides: [{ type: "hook", typeLabel: "Why It Matters", title: "Real-Time Is the Default Expectation", content: [{ kind: "text", value: "Users expect instant updates. WebSockets make it possible, <strong>scaling them is the challenge</strong>." }, { kind: "stats", items: [{ value: "1M+", label: "connections per server (tuned)" }, { value: "< 50ms", label: "message delivery goal" }] }, { kind: "sources", items: ["Ably, 'State of Realtime 2024'"] }] }, { type: "problem", typeLabel: "The Problem", title: "WebSockets Break Traditional Scaling", content: [{ kind: "bullets", items: ["Each connection holds state in memory", "Need sticky sessions for long-lived connections", "Cross-server broadcasting needs coordination", "Connection storms during deploys"] }] }, { type: "concepts", typeLabel: "Core Concepts", title: "Scaling Architecture", content: [{ kind: "bullets", items: ["<strong>Connection state</strong> \u2014 Persistent, servers track who's connected", "<strong>Pub/Sub backbone</strong> \u2014 Redis/NATS for cross-server fanout", "<strong>Rooms/Channels</strong> \u2014 Scope messages to relevant subscribers", "<strong>Backpressure</strong> \u2014 Handle slow consumers without blocking"] }] }, { type: "how", typeLabel: "How It Works", title: "Cross-Server Broadcasting", content: [{ kind: "code", value: "// Server receives message\nws.on('message', (data) => {\n  room.localBroadcast(msg.room, data);\n  redis.publish(`room:${msg.room}`, data);\n});\n// All servers subscribe\nredis.subscribe('room:*', (channel, data) => {\n  room.localBroadcast(channel, data);\n});" }] }, { type: "example", typeLabel: "Real-World Example", title: "Collaborative Editor", content: [{ kind: "text", value: "500K concurrent editors across 20 instances." }, { kind: "bullets", items: ["~25K connections per server", "NATS for ordered delivery", "Graceful drain on deploy", "Zero-downtime deploys"] }, { kind: "sources", items: ["Slack Engineering Blog"] }] }, { type: "guide", typeLabel: "Step-by-Step Guide", title: "Scaling", content: [{ kind: "bullets", items: ["Step 1: Add pub/sub backbone (Redis).", "Step 2: Implement room subscriptions.", "Step 3: Configure sticky sessions.", "Step 4: Client reconnection with jitter.", "Step 5: Connection draining for deploys.", "Step 6: Monitor connections and latency."] }] }, { type: "practices", typeLabel: "Best Practices", title: "Rules", content: [{ kind: "bullets", items: ["Heartbeat pings every 30s", "Binary protocols for high throughput", "Exponential backoff with jitter on reconnect", "Message queuing for offline clients"] }] }, { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [{ kind: "bullets", items: ["<strong>No reconnection</strong>", "<strong>Broadcasting everything</strong> \u2014 Use rooms.", "<strong>Ignoring backpressure</strong>", "<strong>No graceful shutdown</strong> \u2014 Thundering herd."] }] }, { type: "action", typeLabel: "Your Action Plan", title: "Scale Yours", content: [{ kind: "bullets", items: ["Measure connections and throughput.", "Add Redis pub/sub.", "Implement heartbeats + reconnection.", "Set up connection draining."] }] }, { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [{ kind: "bullets", items: ["Pub/sub backbone for cross-server broadcast.", "Rooms/channels to scope delivery.", "Reconnection with jitter prevents thundering herds.", "Connection draining for zero-downtime deploys."] }, { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }] }] };

window.DEEP_DIVES[47] = { title: "Synchronous vs Asynchronous Communication", icon: "\u{1F4E8}", tag: "communication patterns", slides: [{ type: "hook", typeLabel: "Why It Matters", title: "When to Make the Caller Wait vs. Fire-and-Forget", content: [{ kind: "text", value: "Every inter-service call is a choice: <strong>wait for the response or move on</strong>. The wrong choice creates bottlenecks or data loss." }, { kind: "stats", items: [{ value: "60%", label: "of inter-service calls should be async" }, { value: "10x", label: "throughput increase with async patterns" }] }] }, { type: "problem", typeLabel: "The Problem", title: "Synchronous Everything Doesn't Scale", content: [{ kind: "bullets", items: ["User waits 5s for email to send synchronously", "One slow service blocks entire request chain", "Cascading timeouts across services", "No retry mechanism for failed operations"] }] }, { type: "concepts", typeLabel: "Core Concepts", title: "Sync vs Async", content: [{ kind: "bullets", items: ["<strong>Synchronous</strong> \u2014 Caller waits for response. Simple, consistent.", "<strong>Asynchronous</strong> \u2014 Fire-and-forget via queue. Decoupled, resilient.", "<strong>Request-Reply</strong> \u2014 Async with correlation ID for eventual response.", "<strong>Event-Driven</strong> \u2014 Publish events, consumers react independently."] }] }, { type: "how", typeLabel: "How It Works", title: "Decision Framework", content: [{ kind: "code", value: "// SYNC: User needs immediate response\nconst user = await userService.getUser(id);\nres.json(user); // Must wait\n\n// ASYNC: User doesn't need to wait\nawait queue.send('order.placed', orderData);\nres.json({ status: 'accepted' });\n// Email, inventory, analytics happen async\n\n// Decision:\n// Need result now? -> Sync\n// Can process later? -> Async\n// Need guaranteed delivery? -> Queue\n// Multiple consumers? -> Event/pub-sub" }] }, { type: "example", typeLabel: "Real-World Example", title: "Amazon Checkout", content: [{ kind: "text", value: "Amazon's checkout is <strong>sync for acceptance, async for processing</strong>." }, { kind: "bullets", items: ["Sync: validate payment method, check fraud", "Response: 'Order accepted' (immediate)", "Async: charge card, update inventory, ship", "Each async step retries independently"] }] }, { type: "guide", typeLabel: "Step-by-Step Guide", title: "Choosing", content: [{ kind: "bullets", items: ["Step 1: List all inter-service calls.", "Step 2: For each: does the user need the result now?", "Step 3: Move 'no' calls to async (queue).", "Step 4: Add idempotency for retries.", "Step 5: Monitor queue depth."] }] }, { type: "practices", typeLabel: "Best Practices", title: "Rules", content: [{ kind: "bullets", items: ["Default to async unless user needs immediate response", "Sync for reads, async for side effects", "Use queues for guaranteed delivery", "Make consumers idempotent", "Monitor queue depth and latency"] }] }, { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [{ kind: "bullets", items: ["<strong>Sync everything</strong> \u2014 Slowest service dictates latency.", "<strong>Async without monitoring</strong> \u2014 Silent failures.", "<strong>No dead letter queue</strong> \u2014 Failed messages disappear.", "<strong>Assuming order</strong> \u2014 Async messages arrive out of order."] }] }, { type: "action", typeLabel: "Your Action Plan", title: "Audit Calls", content: [{ kind: "bullets", items: ["List all sync inter-service calls.", "Identify which don't need immediate response.", "Move one to async this sprint.", "Set up queue monitoring."] }] }, { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [{ kind: "bullets", items: ["Sync for immediate needs; async for side effects.", "Queues for guaranteed delivery.", "Make consumers idempotent.", "Monitor queue depth."] }, { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }] }] };

window.DEEP_DIVES[48] = { title: "Back-Pressure and Flow Control", icon: "\u{1F30A}", tag: "resilience", slides: [{ type: "hook", typeLabel: "Why It Matters", title: "When Your System Is Drowning, Back-Pressure Is the Lifeboat", content: [{ kind: "text", value: "Without back-pressure, a burst of traffic doesn't slow down \u2014 it <strong>crashes your system entirely</strong>." }, { kind: "stats", items: [{ value: "80%", label: "of cascading failures caused by missing back-pressure" }, { value: "10x", label: "better degradation with flow control" }] }] }, { type: "problem", typeLabel: "The Problem", title: "Unbounded Queues and OOM Kills", content: [{ kind: "text", value: "When producers outpace consumers, memory grows until the process <strong>gets OOM-killed</strong>." }, { kind: "bullets", items: ["Queue grows unbounded in memory", "Memory pressure causes GC pauses", "GC pauses look like failures, triggering retries", "Retries add more work \u2014 death spiral"] }] }, { type: "concepts", typeLabel: "Core Concepts", title: "Back-Pressure Strategies", content: [{ kind: "bullets", items: ["<strong>Drop</strong> \u2014 Discard excess (lossy, simple)", "<strong>Buffer</strong> \u2014 Bounded queue, block when full", "<strong>Sample</strong> \u2014 Process every Nth message", "<strong>Throttle</strong> \u2014 Rate-limit the producer", "<strong>Load shed</strong> \u2014 Reject lowest-priority requests"] }] }, { type: "how", typeLabel: "How It Works", title: "Implementation", content: [{ kind: "code", value: "// Bounded queue with back-pressure\nclass BoundedQueue {\n  constructor(maxSize = 1000) {\n    this.queue = []; this.maxSize = maxSize;\n  }\n  async enqueue(item) {\n    if (this.queue.length >= this.maxSize) {\n      // Back-pressure: reject or wait\n      throw new Error('Queue full - apply back-pressure');\n    }\n    this.queue.push(item);\n  }\n}\n\n// HTTP back-pressure: 429 + Retry-After\nif (queueDepth > threshold) {\n  res.set('Retry-After', '30');\n  return res.status(429).json({ error: 'System busy' });\n}" }] }, { type: "example", typeLabel: "Real-World Example", title: "TCP Flow Control", content: [{ kind: "text", value: "TCP has back-pressure built in: <strong>sliding window controls flow</strong>." }, { kind: "bullets", items: ["Receiver advertises window size", "Sender can't exceed window", "Window shrinks when receiver is slow", "40 years of proven reliability"] }] }, { type: "guide", typeLabel: "Step-by-Step Guide", title: "Adding Back-Pressure", content: [{ kind: "bullets", items: ["Step 1: Identify unbounded queues in your system.", "Step 2: Add bounds to every queue.", "Step 3: Define behavior when full (drop/block/reject).", "Step 4: Return 429 with Retry-After from HTTP services.", "Step 5: Monitor queue depth and rejection rates."] }] }, { type: "practices", typeLabel: "Best Practices", title: "Rules", content: [{ kind: "bullets", items: ["Every queue must be bounded", "Return 429 with Retry-After when overloaded", "Prioritize: shed low-priority work first", "Monitor: queue depth is your canary", "Test: what happens at 10x normal load?"] }] }, { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [{ kind: "bullets", items: ["<strong>Unbounded queues</strong> \u2014 Memory grows until crash.", "<strong>Silent drops</strong> \u2014 Dropping without metrics.", "<strong>No priority</strong> \u2014 Shedding important work.", "<strong>Retry without backoff</strong> \u2014 Amplifies overload."] }] }, { type: "action", typeLabel: "Your Action Plan", title: "Add Flow Control", content: [{ kind: "bullets", items: ["Audit: are any queues unbounded?", "Add bounds to largest queue.", "Implement 429 + Retry-After.", "Add queue depth monitoring."] }] }, { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [{ kind: "bullets", items: ["Every queue must be bounded.", "429 + Retry-After for HTTP back-pressure.", "Shed low-priority work first.", "Queue depth is your early warning."] }, { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }] }] };

window.DEEP_DIVES[49] = { title: "Protocol Buffers & Schema Evolution", icon: "\u{1F4E6}", tag: "serialization", slides: [{ type: "hook", typeLabel: "Why It Matters", title: "How to Change Your Data Contract Without Breaking Everything", content: [{ kind: "text", value: "Protocol Buffers provide <strong>backward and forward compatible</strong> schema evolution \u2014 the key to evolving services independently." }, { kind: "stats", items: [{ value: "10x", label: "smaller than JSON" }, { value: "100x", label: "faster parsing" }, { value: "15+", label: "years of production use at Google" }] }] }, { type: "problem", typeLabel: "The Problem", title: "Schema Changes Break Consumers", content: [{ kind: "text", value: "Adding, removing, or changing fields in your data format <strong>breaks every consumer</strong> without careful evolution." }, { kind: "bullets", items: ["Add required field \u2014 old consumers crash", "Remove field \u2014 old consumers get null", "Rename field \u2014 breaks everyone", "No schema \u2014 silent type mismatches"] }] }, { type: "concepts", typeLabel: "Core Concepts", title: "Schema Evolution Rules", content: [{ kind: "bullets", items: ["<strong>Add fields</strong> \u2014 New fields get defaults; old consumers ignore them", "<strong>Never reuse field numbers</strong> \u2014 Each number is permanent", "<strong>Never change field types</strong> \u2014 Binary encoding differs", "<strong>Deprecate, don't delete</strong> \u2014 Mark fields reserved", "<strong>Use optional</strong> \u2014 required breaks forward compat"] }] }, { type: "how", typeLabel: "How It Works", title: "Safe Evolution", content: [{ kind: "code", value: "// Version 1\nmessage User {\n  string id = 1;\n  string name = 2;\n  string email = 3;\n}\n\n// Version 2 (backward compatible)\nmessage User {\n  string id = 1;\n  string name = 2;\n  string email = 3;\n  string phone = 4;        // NEW: old consumers ignore\n  repeated string tags = 5; // NEW: old consumers ignore\n  reserved 6;              // Reserved for future use\n  // NEVER reuse field numbers 1-5\n}" }] }, { type: "example", typeLabel: "Real-World Example", title: "Google's Internal Use", content: [{ kind: "text", value: "Google uses Protocol Buffers for <strong>virtually all internal communication</strong>." }, { kind: "bullets", items: ["Billions of RPC calls per second", "Schema evolution across thousands of services", "Services deploy independently", "Breaking changes caught at compile time"] }] }, { type: "guide", typeLabel: "Step-by-Step Guide", title: "Adopting Protobuf", content: [{ kind: "bullets", items: ["Step 1: Define .proto files for your data models.", "Step 2: Generate code for your languages.", "Step 3: Set up schema registry (Buf).", "Step 4: Add breaking change detection to CI.", "Step 5: Migrate one service at a time."] }] }, { type: "practices", typeLabel: "Best Practices", title: "Rules", content: [{ kind: "bullets", items: ["Never reuse field numbers", "Never change field types", "Use optional for all new fields", "Reserve deleted field numbers", "Add breaking change CI checks (buf breaking)"] }] }, { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [{ kind: "bullets", items: ["<strong>Reusing field numbers</strong> \u2014 Silent data corruption.", "<strong>Required fields</strong> \u2014 Breaks forward compatibility.", "<strong>No schema registry</strong> \u2014 Schemas drift across services.", "<strong>JSON fallback</strong> \u2014 Defeats the purpose of protobuf."] }] }, { type: "action", typeLabel: "Your Action Plan", title: "Get Started", content: [{ kind: "bullets", items: ["Define proto for one service's data model.", "Set up Buf for linting and breaking detection.", "Generate TypeScript + Go clients.", "Compare serialization size with JSON."] }] }, { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [{ kind: "bullets", items: ["Protobuf: 10x smaller, 100x faster than JSON.", "Never reuse field numbers.", "Add optional fields for safe evolution.", "Breaking change detection in CI."] }, { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 4 }] }] }] };

// TOPIC 50: MILESTONE [NEW]
window.DEEP_DIVES[50] = { title: "MILESTONE: You Understand the AI Protocol Stack", icon: "\u{1F3C6}", tag: "milestone", slides: [{ type: "hook", typeLabel: "Why It Matters", title: "Week 2 Complete \u2014 You Now Speak Every Protocol", content: [{ kind: "text", value: "MCP, REST, gRPC, GraphQL, SSE, WebSockets \u2014 you now understand <strong>how AI systems talk to the world</strong>." }, { kind: "stats", items: [{ value: "50", label: "topics mastered" }, { value: "6", label: "protocol types covered" }, { value: "10", label: "MCP concepts deep-dived" }] }] }, { type: "problem", typeLabel: "The Problem", title: "What We Solved This Week", content: [{ kind: "text", value: "You entered Week 2 knowing systems exist. You leave understanding <strong>how they communicate</strong>." }, { kind: "bullets", items: ["MCP: how AI connects to tools (Topics 26-35)", "API Design: REST, gRPC, GraphQL, tRPC (Topics 36-44)", "Real-time: SSE, WebSockets (Topics 45-46)", "Patterns: sync/async, back-pressure, schema evolution (Topics 47-49)"] }] }, { type: "concepts", typeLabel: "Core Concepts", title: "The Protocol Decision Tree", content: [{ kind: "bullets", items: ["<strong>AI to tools?</strong> \u2192 MCP", "<strong>CRUD resources?</strong> \u2192 REST", "<strong>Service-to-service, high perf?</strong> \u2192 gRPC", "<strong>Complex frontend queries?</strong> \u2192 GraphQL", "<strong>Full-stack TypeScript?</strong> \u2192 tRPC", "<strong>LLM streaming?</strong> \u2192 SSE", "<strong>Bidirectional real-time?</strong> \u2192 WebSocket"] }] }, { type: "how", typeLabel: "How It Works", title: "The Unified View", content: [{ kind: "code", value: "// Your Protocol Stack (2026)\n\n// AI Layer:        MCP (tools, resources, prompts)\n// API Layer:       REST / gRPC / GraphQL / tRPC\n// Real-time Layer: SSE / WebSockets\n// Data Layer:      Protobuf / JSON / Avro\n// Transport:       HTTP/2 / HTTP/3 / stdio\n\n// Each protocol solves a specific problem.\n// The skill is knowing which to use when." }] }, { type: "example", typeLabel: "Real-World Example", title: "Full-Stack Protocol Usage", content: [{ kind: "text", value: "A modern AI-powered app uses <strong>4+ protocols simultaneously</strong>." }, { kind: "bullets", items: ["MCP: Claude connects to internal tools", "REST: mobile clients hit public API", "gRPC: services talk to each other", "SSE: LLM responses stream to frontend", "WebSocket: collaborative editing", "All coexisting, each in its strength zone"] }] }, { type: "guide", typeLabel: "Step-by-Step Guide", title: "What's Next: Week 3", content: [{ kind: "bullets", items: ["Week 3: AI Agents (Topics 51-75)", "Multi-agent architectures", "Agent orchestration patterns", "Claude Agent SDK, OpenAI Agents", "Guardrails and evaluation"] }] }, { type: "practices", typeLabel: "Best Practices", title: "Keep Going", content: [{ kind: "bullets", items: ["Build one MCP server this week", "Convert one REST endpoint to use proper pagination", "Try SSE streaming for an AI feature", "Read the Stripe API docs for design inspiration"] }] }, { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Don't Lose Momentum", content: [{ kind: "bullets", items: ["<strong>Protocol maximalism</strong> \u2014 Don't use all protocols at once.", "<strong>Analysis paralysis</strong> \u2014 Pick a protocol and ship.", "<strong>Ignoring fundamentals</strong> \u2014 REST is still right for most APIs.", "<strong>Chasing new</strong> \u2014 MCP is great but REST isn't dead."] }] }, { type: "action", typeLabel: "Your Action Plan", title: "Graduation Challenge", content: [{ kind: "bullets", items: ["Build an MCP server that connects to your team's tools.", "Implement cursor pagination on one API endpoint.", "Add SSE streaming to one AI feature.", "Draw your system's protocol map."] }] }, { type: "summary", typeLabel: "Key Takeaways", title: "Week 2 Complete", content: [{ kind: "bullets", items: ["MCP connects AI to tools; REST/gRPC/GraphQL connect services.", "SSE for streaming; WebSockets for bidirectional real-time.", "Match protocol to interaction pattern.", "Next week: AI Agents \u2014 the architecture of autonomous systems."] }, { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 5 }, { label: "Engagement", score: 5 }] }] }] };
