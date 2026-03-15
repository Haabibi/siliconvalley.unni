window.DEEP_DIVES = window.DEEP_DIVES || {};

window.DEEP_DIVES[151] = {
  title: "Event-Driven Architecture",
  icon: "📡",
  tag: "architecture pattern",
  slides: [
    { type: "hook", typeLabel: "Why It Matters", title: "Decoupling at Scale", content: [
      { kind: "text", value: "Event-driven architecture (EDA) lets services communicate without knowing about each other. The producer says <strong>'this happened'</strong> and walks away. Consumers decide what to do next." },
      { kind: "stats", items: [
        { value: "73%", label: "of enterprises use event-driven patterns (Gartner 2024)" },
        { value: "10x", label: "easier to add new consumers vs. point-to-point" },
        { value: "sub-ms", label: "publish latency with modern brokers" }
      ] },
      { kind: "sources", items: ["Gartner, 'Event-Driven Architecture Adoption Survey 2024'", "Martin Fowler, 'What do you mean by Event-Driven?', martinfowler.com"] }
    ] },
    { type: "problem", typeLabel: "The Problem", title: "Point-to-Point Spaghetti", content: [
      { kind: "text", value: "Without events, every service calls every other service directly. Adding a new consumer means modifying the producer. At 20+ services, the dependency graph becomes <strong>unmanageable</strong>." },
      { kind: "bullets", items: [
        "<strong>Producer coupling</strong> — Producer must know about every consumer and their APIs",
        "<strong>Change amplification</strong> — Adding a notification service means changing the order service",
        "<strong>Latency multiplication</strong> — Synchronous chains create latency that multiplies with depth",
        "<strong>Blocking pipeline</strong> — One slow consumer blocks the entire request pipeline"
      ] }
    ] },
    { type: "concepts", typeLabel: "Core Concepts", title: "Events, Commands, and Queries", content: [
      { kind: "bullets", items: [
        "<strong>Event</strong> — An immutable fact that something happened: <code>OrderPlaced</code>, <code>UserRegistered</code>",
        "<strong>Command</strong> — A request to do something: <code>PlaceOrder</code>, <code>SendEmail</code>",
        "<strong>Query</strong> — A request for data with no side effects",
        "<strong>Event Broker</strong> — Infrastructure that routes events from producers to consumers (Kafka, RabbitMQ, SNS/SQS)",
        "<strong>Consumer Group</strong> — Multiple instances of a service sharing the load of processing events"
      ] },
      { kind: "callout", style: "insight", value: "Events describe what happened (past tense). Commands describe what should happen (imperative). This distinction shapes your entire architecture." },
      { kind: "sources", items: ["Greg Young, 'CQRS and Event Sourcing', 2010", "Ben Stopford, 'Designing Event-Driven Systems', O'Reilly"] }
    ] },
    { type: "how", typeLabel: "How It Works", title: "Publish-Subscribe in Action", content: [
      { kind: "code", value: "// Producer: Order Service\nasync function placeOrder(order) {\n  await db.save(order);\n  await eventBus.publish('order.placed', {\n    orderId: order.id,\n    userId: order.userId,\n    items: order.items,\n    total: order.total,\n    occurredAt: new Date().toISOString()\n  });\n}\n\n// Consumer 1: Inventory Service\neventBus.subscribe('order.placed', async (event) => {\n  await reserveStock(event.items);\n});\n\n// Consumer 2: Notification Service\neventBus.subscribe('order.placed', async (event) => {\n  await sendConfirmationEmail(event.userId, event.orderId);\n});\n\n// Consumer 3: Analytics (added later, zero changes to producer)\neventBus.subscribe('order.placed', async (event) => {\n  await trackPurchase(event);\n});" },
      { kind: "callout", style: "insight", value: "Notice Consumer 3 was added without touching the Order Service. That is the power of decoupling." }
    ] },
    { type: "example", typeLabel: "Real-World Example", title: "Uber's Event-Driven Platform", content: [
      { kind: "text", value: "Uber processes <strong>trillions of events per day</strong> across ride matching, pricing, payments, and notifications. Their event-driven architecture enables independent team velocity at massive scale." },
      { kind: "bullets", items: [
        "<strong>Independent consumers</strong> — Ride request triggers events consumed by matching, pricing, and ETA services independently",
        "<strong>Massive throughput</strong> — Kafka handles 4+ trillion messages/day across data centers",
        "<strong>Contract enforcement</strong> — Schema registry enforces event contracts between 2,000+ microservices",
        "<strong>Zero data loss</strong> — Dead letter queues capture failed events for replay without data loss"
      ] },
      { kind: "sources", items: ["Uber Engineering Blog, 'Building Reliable Reprocessing and Dead Letter Queues with Kafka'", "Uber Engineering Blog, 'uReplicator: Uber Engineering's Approach to Apache Kafka Replication'"] }
    ] },
    { type: "guide", typeLabel: "Step-by-Step Guide", title: "Adopting EDA Incrementally", content: [
      { kind: "bullets", items: [
        "<strong>Find coupling pain</strong> — Step 1: Identify one synchronous call chain that causes coupling pain (e.g., order -> email)",
        "<strong>Define event schema</strong> — Step 2: Define the event schema with explicit versioning (e.g., <code>OrderPlaced.v1</code>)",
        "<strong>Add a broker</strong> — Step 3: Introduce a message broker -- start with a managed service (SQS, Cloud Pub/Sub)",
        "<strong>Publish after write</strong> — Step 4: Publish the event after the database write (use the Outbox pattern for safety)",
        "<strong>Convert consumers</strong> — Step 5: Convert the downstream service to consume events instead of receiving direct calls",
        "<strong>Ensure idempotency</strong> — Step 6: Add idempotency keys so consumers can safely process duplicate events"
      ] },
      { kind: "callout", style: "warning", value: "Do NOT try to convert your entire system to event-driven at once. Pick one flow, prove it works, then expand." }
    ] },
    { type: "practices", typeLabel: "Best Practices", title: "EDA Done Right", content: [
      { kind: "bullets", items: [
        "<strong>Correlation IDs</strong> — ✅ Include a correlation ID in every event for distributed tracing",
        "<strong>Schema versioning</strong> — ✅ Version your event schemas and maintain backward compatibility",
        "<strong>Idempotent consumers</strong> — ✅ Make consumers idempotent -- events may be delivered more than once",
        "<strong>Dead letter queues</strong> — ✅ Use dead letter queues (DLQs) for events that fail processing",
        "<strong>Small payloads</strong> — ❌ Don't put large payloads in events -- use a reference (S3 URI, DB ID) instead",
        "<strong>Limit chain depth</strong> — ❌ Don't create event chains longer than 3-4 hops without explicit monitoring",
        "<strong>Avoid request-response</strong> — ❌ Don't use events for request-response patterns -- use synchronous calls instead"
      ] }
    ] },
    { type: "pitfalls", typeLabel: "Common Pitfalls", title: "EDA Anti-Patterns", content: [
      { kind: "bullets", items: [
        "<strong>Event soup</strong> — Too many fine-grained events make the system impossible to reason about",
        "<strong>Temporal coupling</strong> — Consumers that assume events arrive in order (they often don't)",
        "<strong>Missing idempotency</strong> — Processing the same event twice charges the customer twice",
        "<strong>Distributed monolith</strong> — Services that can't function without consuming events from 10 other services",
        "<strong>Schema chaos</strong> — Changing event structure without versioning breaks all consumers"
      ] }
    ] },
    { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
      { kind: "bullets", items: [
        "<strong>Map a flow</strong> — Map one request flow in your system that involves 3+ synchronous service calls",
        "<strong>Find async candidates</strong> — Identify which calls could be replaced with asynchronous events",
        "<strong>Design first event</strong> — Define the event schema for the first event you would introduce",
        "<strong>Build a POC</strong> — Implement a proof-of-concept with an in-memory event bus or managed queue"
      ] },
      { kind: "callout", style: "action", value: "The best EDA adoption starts with one event, one producer, one consumer. Prove the pattern before scaling it." }
    ] },
    { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
      { kind: "bullets", items: [
        "<strong>Decoupling pattern</strong> — Event-driven architecture decouples producers from consumers through asynchronous events.",
        "<strong>Events vs commands</strong> — Events describe facts (past tense); commands request actions (imperative).",
        "<strong>Start small</strong> — Start with one synchronous chain, convert it to events, and expand from there.",
        "<strong>Safety essentials</strong> — Always make consumers idempotent and version your event schemas."
      ] },
      { kind: "quality", items: [
        { label: "Actionability", score: 5 },
        { label: "Correctness", score: 5 },
        { label: "Visual Appeal", score: 4 },
        { label: "Engagement", score: 5 }
      ] }
    ] }
  ]
};

window.DEEP_DIVES[152] = {
  title: "CQRS: Separate Reads from Writes",
  icon: "🔀",
  tag: "architecture pattern",
  slides: [
    { type: "hook", typeLabel: "Why It Matters", title: "Reads and Writes Are Fundamentally Different", content: [
      { kind: "text", value: "Most systems read 100x more than they write. Yet we force reads and writes through the <strong>same model, same database, same schema</strong>. CQRS says: stop. Separate them." },
      { kind: "stats", items: [
        { value: "95%+", label: "of requests are reads in most web apps" },
        { value: "10x", label: "read performance gain with dedicated read models" },
        { value: "0", label: "write contention when reads use a separate store" }
      ] },
      { kind: "sources", items: ["Greg Young, 'CQRS Documents', 2010", "Microsoft Azure Architecture Center, 'CQRS Pattern'"] }
    ] },
    { type: "problem", typeLabel: "The Problem", title: "One Model Cannot Serve Two Masters", content: [
      { kind: "text", value: "A single data model optimized for writes (normalized, transactional) is terrible for reads (denormalized, fast). You end up with <strong>complex JOINs, slow dashboards, and write locks blocking reads</strong>." },
      { kind: "bullets", items: [
        "<strong>Expensive JOINs</strong> — Dashboard queries require 7-table JOINs that take 3 seconds",
        "<strong>Lock contention</strong> — Write-heavy tables lock rows that read-heavy APIs need",
        "<strong>Schema coupling</strong> — Adding a new read view requires schema changes that risk write performance",
        "<strong>Cache band-aids</strong> — Caching hacks pile up to compensate for a fundamentally wrong model"
      ] }
    ] },
    { type: "concepts", typeLabel: "Core Concepts", title: "The CQRS Split", content: [
      { kind: "bullets", items: [
        "<strong>Command Model (Write Side)</strong> — Handles creates, updates, deletes. Optimized for consistency and validation. Normalized schema.",
        "<strong>Query Model (Read Side)</strong> — Handles reads. Optimized for speed. Denormalized, pre-joined, cached.",
        "<strong>Synchronization</strong> — Events or CDC keep the read model updated from the write model.",
        "<strong>Eventual Consistency</strong> — The read model may lag the write model by milliseconds to seconds."
      ] },
      { kind: "callout", style: "insight", value: "CQRS does not require event sourcing, separate databases, or microservices. You can start with two classes in a monolith." },
      { kind: "sources", items: ["Martin Fowler, 'CQRS', martinfowler.com", "Udi Dahan, 'Clarified CQRS', udidahan.com"] }
    ] },
    { type: "how", typeLabel: "How It Works", title: "CQRS Data Flow", content: [
      { kind: "code", value: "// WRITE SIDE: Command handler\nclass PlaceOrderHandler {\n  async handle(cmd) {\n    const order = Order.create(cmd.userId, cmd.items);\n    order.validate();  // business rules\n    await this.writeDb.save(order);  // normalized tables\n    await this.eventBus.publish('OrderPlaced', order.toEvent());\n  }\n}\n\n// READ SIDE: Event handler builds denormalized view\nclass OrderReadModelUpdater {\n  async on(event) {\n    // Pre-join everything the UI needs into one document\n    await this.readDb.upsert('order_summaries', {\n      orderId: event.orderId,\n      userName: await this.lookupUserName(event.userId),\n      itemCount: event.items.length,\n      total: event.total,\n      status: 'placed'\n    });\n  }\n}\n\n// QUERY: Fast, no JOINs\nclass OrderQueryService {\n  async getOrderSummary(orderId) {\n    return this.readDb.get('order_summaries', orderId); // single lookup\n  }\n}" },
      { kind: "callout", style: "insight", value: "The read model is shaped exactly for the UI. No JOINs, no transformations, no ORMs fighting your schema." }
    ] },
    { type: "example", typeLabel: "Real-World Example", title: "Twitter's Timeline Architecture", content: [
      { kind: "text", value: "Twitter (X) is a textbook CQRS system. Writing a tweet is a <strong>command</strong>. Reading your timeline is a <strong>query</strong> against a pre-built, denormalized fan-out cache." },
      { kind: "bullets", items: [
        "<strong>Write path</strong> — Tweet is stored in a normalized tweets table",
        "<strong>Fan-out on write</strong> — Fan-out service pushes the tweet ID into each follower's timeline cache",
        "<strong>Read path</strong> — Timeline is a single Redis list lookup -- no JOINs, no followers table scan",
        "<strong>Celebrity exception</strong> — Celebrities (>1M followers) use pull-based reads to avoid fan-out explosion"
      ] },
      { kind: "sources", items: ["Raffi Krikorian, 'Timelines at Scale', QCon 2012", "Martin Kleppmann, 'Designing Data-Intensive Applications', O'Reilly, Ch. 11"] }
    ] },
    { type: "guide", typeLabel: "Step-by-Step Guide", title: "Introducing CQRS Gradually", content: [
      { kind: "bullets", items: [
        "<strong>Find slow queries</strong> — Step 1: Identify the slowest read query in your system (check your APM dashboard)",
        "<strong>Create read table</strong> — Step 2: Create a denormalized read table or materialized view shaped for that query",
        "<strong>Populate read model</strong> — Step 3: Populate the read table from your write path using triggers, CDC, or application events",
        "<strong>Measure improvement</strong> — Step 4: Point the read API at the new read table -- measure the latency improvement",
        "<strong>Accept consistency lag</strong> — Step 5: Accept eventual consistency (typically <100ms lag) and communicate it to the frontend",
        "<strong>Repeat per query</strong> — Step 6: Repeat for the next slowest query. Each read model is independent."
      ] }
    ] },
    { type: "practices", typeLabel: "Best Practices", title: "CQRS Done Right", content: [
      { kind: "bullets", items: [
        "<strong>Start in monolith</strong> — ✅ Start with CQRS in a monolith -- separate classes, not separate services",
        "<strong>Use materialized views</strong> — ✅ Use materialized views or CDC for synchronization before building custom projections",
        "<strong>Per-use-case models</strong> — ✅ Design read models per use case (e.g., order-list view vs. order-detail view)",
        "<strong>Skip for simple CRUD</strong> — ❌ Don't use CQRS for simple CRUD apps with no read/write asymmetry",
        "<strong>No event sourcing needed</strong> — ❌ Don't assume you need event sourcing -- CQRS works fine with a regular database",
        "<strong>Handle own writes</strong> — ❌ Don't ignore the consistency gap -- show users their own writes immediately"
      ] }
    ] },
    { type: "pitfalls", typeLabel: "Common Pitfalls", title: "CQRS Anti-Patterns", content: [
      { kind: "bullets", items: [
        "<strong>Over-engineering</strong> — Applying CQRS to every service including simple CRUD APIs",
        "<strong>Stale reads surprise</strong> — Users update data but don't see the change for seconds",
        "<strong>Read model drift</strong> — Read model gets out of sync and there's no way to rebuild it",
        "<strong>Coupling read and write deploys</strong> — Changes to the write schema break the read projections"
      ] }
    ] },
    { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
      { kind: "bullets", items: [
        "<strong>Find expensive reads</strong> — Find the most expensive read query in your production system (look for slow query logs)",
        "<strong>Sketch read model</strong> — Sketch what a denormalized read model would look like for that query",
        "<strong>Build and measure</strong> — Create a materialized view or cache table and measure the performance difference",
        "<strong>Evaluate trade-off</strong> — Document whether the consistency trade-off is acceptable for that use case"
      ] }
    ] },
    { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
      { kind: "bullets", items: [
        "<strong>Core principle</strong> — CQRS separates read and write models so each can be optimized independently.",
        "<strong>Keep it simple</strong> — You do NOT need event sourcing, separate databases, or microservices to use CQRS.",
        "<strong>Start small</strong> — Start with a materialized view for your slowest read query.",
        "<strong>Own-writes consistency</strong> — Always handle the 'read-your-own-writes' consistency gap in your UI."
      ] },
      { kind: "quality", items: [
        { label: "Actionability", score: 5 },
        { label: "Correctness", score: 5 },
        { label: "Visual Appeal", score: 4 },
        { label: "Engagement", score: 5 }
      ] }
    ] }
  ]
};

window.DEEP_DIVES[153] = {
  title: "The Saga Pattern",
  icon: "🔗",
  tag: "distributed systems",
  slides: [
    { type: "hook", typeLabel: "Why It Matters", title: "Transactions Across Services", content: [
      { kind: "text", value: "In a monolith, you wrap everything in a database transaction. In microservices, your data lives in <strong>different databases across different services</strong>. The Saga pattern coordinates multi-service business processes without distributed transactions." },
      { kind: "stats", items: [
        { value: "0", label: "databases support cross-service ACID transactions natively" },
        { value: "3-10", label: "services involved in a typical business process" },
        { value: "100%", label: "of microservice teams eventually need sagas" }
      ] },
      { kind: "sources", items: ["Hector Garcia-Molina & Kenneth Salem, 'Sagas', ACM SIGMOD 1987", "Chris Richardson, 'Microservices Patterns', Manning, Ch. 4"] }
    ] },
    { type: "problem", typeLabel: "The Problem", title: "No Distributed ACID", content: [
      { kind: "text", value: "An e-commerce order touches Order, Payment, and Inventory services. If payment succeeds but inventory is out of stock, you need to <strong>undo the payment</strong>. Without a saga, you get inconsistent state across services." },
      { kind: "bullets", items: [
        "<strong>2PC won't scale</strong> — Two-phase commit (2PC) doesn't work across autonomous services at scale",
        "<strong>Partial failures</strong> — Partial failures leave the system in an inconsistent state",
        "<strong>Manual cleanup</strong> — Manual cleanup scripts are error-prone and don't scale",
        "<strong>User-visible errors</strong> — Users see charged payments for orders that never shipped"
      ] }
    ] },
    { type: "concepts", typeLabel: "Core Concepts", title: "Saga Mechanics", content: [
      { kind: "bullets", items: [
        "<strong>Saga</strong> — A sequence of local transactions, each with a compensating action",
        "<strong>Compensating Transaction</strong> — The 'undo' for a step that already committed (e.g., refund a payment)",
        "<strong>Choreography</strong> — Services react to each other's events (decentralized, no coordinator)",
        "<strong>Orchestration</strong> — A central coordinator tells each service what to do next",
        "<strong>Semantic rollback</strong> — Compensation isn't a true undo; it's a business-level correction"
      ] },
      { kind: "callout", style: "warning", value: "Compensating transactions cannot always perfectly undo. A 'cancel shipment' email is not the same as never having sent the 'order shipped' email." },
      { kind: "sources", items: ["Chris Richardson, 'Pattern: Saga', microservices.io"] }
    ] },
    { type: "how", typeLabel: "How It Works", title: "Orchestration vs. Choreography", content: [
      { kind: "code", value: "// ORCHESTRATION: Central saga coordinator\nclass OrderSaga {\n  async execute(order) {\n    try {\n      await paymentService.charge(order);     // Step 1\n      await inventoryService.reserve(order);  // Step 2\n      await shippingService.schedule(order);  // Step 3\n    } catch (err) {\n      // Compensate in reverse order\n      if (err.step >= 3) await shippingService.cancel(order);\n      if (err.step >= 2) await inventoryService.release(order);\n      if (err.step >= 1) await paymentService.refund(order);\n    }\n  }\n}\n\n// CHOREOGRAPHY: Services react to events\n// PaymentService listens for OrderPlaced -> charges -> emits PaymentCharged\n// InventoryService listens for PaymentCharged -> reserves -> emits StockReserved\n// ShippingService listens for StockReserved -> schedules -> emits ShipmentScheduled\n// If StockReservationFailed -> PaymentService refunds automatically" },
      { kind: "callout", style: "insight", value: "Orchestration is easier to understand and debug. Choreography scales better but is harder to trace. Use orchestration for complex flows (5+ steps)." }
    ] },
    { type: "example", typeLabel: "Real-World Example", title: "Uber's Ride Saga", content: [
      { kind: "text", value: "Every Uber ride is a saga spanning ride matching, pricing, payment, driver payout, and rating. If payment fails after the ride, the saga triggers compensating actions." },
      { kind: "bullets", items: [
        "<strong>Temporal orchestration</strong> — Cadence (now Temporal) orchestrates long-running ride workflows",
        "<strong>Durable execution</strong> — Each step is a durable function call with automatic retry",
        "<strong>Edge case handling</strong> — Compensations handle edge cases: driver cancel, rider no-show, payment decline",
        "<strong>Persistent state</strong> — Saga state is persisted, surviving service restarts and deployments"
      ] },
      { kind: "sources", items: ["Maxim Fateev, 'Cadence: The Only Workflow Platform You'll Ever Need', Uber Engineering Blog"] }
    ] },
    { type: "guide", typeLabel: "Step-by-Step Guide", title: "Implementing Your First Saga", content: [
      { kind: "bullets", items: [
        "<strong>Map the process</strong> — Step 1: Map the business process as a sequence of local transactions",
        "<strong>Define compensations</strong> — Step 2: Define the compensating action for each step (what is the 'undo'?)",
        "<strong>Choose coordination</strong> — Step 3: Choose orchestration (central coordinator) or choreography (event-driven)",
        "<strong>Track state</strong> — Step 4: Implement a saga state machine that tracks which steps have completed",
        "<strong>Reverse on failure</strong> — Step 5: Handle partial failures by running compensations in reverse order",
        "<strong>Ensure idempotency</strong> — Step 6: Add idempotency to every step and compensation (they may be retried)"
      ] },
      { kind: "callout", style: "action", value: "Use a workflow engine like Temporal or Step Functions for complex sagas. Don't build your own state machine from scratch." }
    ] },
    { type: "practices", typeLabel: "Best Practices", title: "Saga Patterns That Work", content: [
      { kind: "bullets", items: [
        "<strong>Idempotent steps</strong> — ✅ Make every step and compensation idempotent",
        "<strong>Use workflow engines</strong> — ✅ Use a workflow engine (Temporal, Step Functions) for orchestrated sagas",
        "<strong>Log transitions</strong> — ✅ Log every state transition for debugging and auditing",
        "<strong>Business-level undo</strong> — ✅ Design compensations as business operations, not database rollbacks",
        "<strong>Don't mix styles</strong> — ❌ Don't mix choreography and orchestration in the same saga",
        "<strong>Compensation failures</strong> — ❌ Don't assume compensations will always succeed -- plan for compensation failures",
        "<strong>Avoid over-use</strong> — ❌ Don't create sagas for operations that can fit in a single database transaction"
      ] }
    ] },
    { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Saga Anti-Patterns", content: [
      { kind: "bullets", items: [
        "<strong>Missing compensations</strong> — Every forward step MUST have a defined compensation",
        "<strong>Non-idempotent steps</strong> — Retrying a charge without idempotency keys double-bills the customer",
        "<strong>Choreography spaghetti</strong> — 8 services reacting to each other's events with no visibility into the overall flow",
        "<strong>Ignoring the 'pivot transaction'</strong> — The step after which you can't easily compensate (e.g., shipped the package)"
      ] }
    ] },
    { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
      { kind: "bullets", items: [
        "<strong>Pick a process</strong> — Identify one multi-service business process in your system",
        "<strong>Draw happy path</strong> — Draw the happy path as a sequence of steps across services",
        "<strong>Define undo actions</strong> — Define the compensating action for each step",
        "<strong>Find pivot point</strong> — Identify the pivot transaction -- the point of no return"
      ] }
    ] },
    { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
      { kind: "bullets", items: [
        "<strong>Core mechanism</strong> — Sagas coordinate multi-service transactions through a sequence of local transactions with compensations.",
        "<strong>Two styles</strong> — Orchestration uses a central coordinator; choreography uses event reactions.",
        "<strong>Idempotent steps</strong> — Every step must be idempotent and have a defined compensating action.",
        "<strong>Use existing tools</strong> — Use workflow engines (Temporal, Step Functions) instead of hand-rolling saga infrastructure."
      ] },
      { kind: "quality", items: [
        { label: "Actionability", score: 5 },
        { label: "Correctness", score: 5 },
        { label: "Visual Appeal", score: 4 },
        { label: "Engagement", score: 5 }
      ] }
    ] }
  ]
};

window.DEEP_DIVES[154] = {
  title: "Transactional Outbox Pattern",
  icon: "📤",
  tag: "distributed systems",
  slides: [
    { type: "hook", typeLabel: "Why It Matters", title: "Never Lose an Event Again", content: [
      { kind: "text", value: "You save to the database AND publish an event. But what if the app crashes between the two? The database has the data but the event is <strong>lost forever</strong>. The Outbox pattern makes this atomic." },
      { kind: "stats", items: [
        { value: "2", label: "operations that must be atomic (DB write + event publish)" },
        { value: "0%", label: "event loss with outbox pattern" },
        { value: "at-least-once", label: "delivery guarantee achieved" }
      ] },
      { kind: "sources", items: ["Chris Richardson, 'Pattern: Transactional Outbox', microservices.io", "Gunnar Morling, 'Reliable Microservices Data Exchange With the Outbox Pattern', Debezium Blog"] }
    ] },
    { type: "problem", typeLabel: "The Problem", title: "The Dual-Write Problem", content: [
      { kind: "text", value: "Writing to a database and publishing to a message broker are two separate operations. There is <strong>no transaction spanning both</strong>. If either fails independently, your system is inconsistent." },
      { kind: "bullets", items: [
        "<strong>Lost events</strong> — DB write succeeds, event publish fails -> consumers never learn about the change",
        "<strong>Phantom events</strong> — Event publishes, DB write fails -> consumers act on data that doesn't exist",
        "<strong>Silent loss</strong> — Network partitions between app and broker cause silent event loss",
        "<strong>Duplicate events</strong> — Retry logic can cause duplicate events without idempotency"
      ] }
    ] },
    { type: "concepts", typeLabel: "Core Concepts", title: "How the Outbox Solves It", content: [
      { kind: "bullets", items: [
        "<strong>Outbox Table</strong> — A table in the SAME database as your business data that stores pending events",
        "<strong>Atomic Write</strong> — Business data and outbox event are written in the SAME database transaction",
        "<strong>Relay Process</strong> — A separate process reads the outbox table and publishes events to the broker",
        "<strong>At-Least-Once Delivery</strong> — The relay retries until the broker acknowledges, so events are never lost",
        "<strong>Idempotent Consumers</strong> — Consumers must handle duplicates since events may be relayed more than once"
      ] },
      { kind: "callout", style: "insight", value: "The key insight: by writing the event to the same database in the same transaction, you leverage your database's ACID guarantees to make the operation atomic." }
    ] },
    { type: "how", typeLabel: "How It Works", title: "Outbox Implementation", content: [
      { kind: "code", value: "-- Outbox table schema\nCREATE TABLE outbox (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  aggregate_type VARCHAR(255) NOT NULL,\n  aggregate_id VARCHAR(255) NOT NULL,\n  event_type VARCHAR(255) NOT NULL,\n  payload JSONB NOT NULL,\n  created_at TIMESTAMP DEFAULT NOW(),\n  published_at TIMESTAMP NULL  -- NULL = not yet published\n);\n\n-- Application code: single transaction\nBEGIN;\n  INSERT INTO orders (id, user_id, total) VALUES (...);\n  INSERT INTO outbox (aggregate_type, aggregate_id, event_type, payload)\n    VALUES ('Order', order_id, 'OrderPlaced', '{...}');\nCOMMIT;\n\n-- Relay process (polling or CDC)\n-- 1. SELECT * FROM outbox WHERE published_at IS NULL ORDER BY created_at;\n-- 2. Publish each event to Kafka/SQS\n-- 3. UPDATE outbox SET published_at = NOW() WHERE id = ...;" },
      { kind: "callout", style: "insight", value: "Two relay strategies: polling (simple, adds latency) or CDC via Debezium (real-time, more infrastructure). Start with polling." }
    ] },
    { type: "example", typeLabel: "Real-World Example", title: "Shopify's Event Publishing", content: [
      { kind: "text", value: "Shopify uses the outbox pattern to guarantee that every order, payment, and inventory change is reliably published to their event bus, even during peak Black Friday traffic." },
      { kind: "bullets", items: [
        "<strong>Atomic writes</strong> — All business events are written to an outbox table alongside business data",
        "<strong>CDC streaming</strong> — A CDC pipeline (using Debezium) streams outbox entries to Kafka",
        "<strong>Idempotent consumers</strong> — Consumers are idempotent, handling duplicate events gracefully",
        "<strong>Zero loss at scale</strong> — During BFCM 2023, zero events were lost despite processing millions of orders"
      ] },
      { kind: "sources", items: ["Shopify Engineering Blog, 'Rebuilding the Shopify Admin'", "Debezium Documentation, 'Outbox Event Router'"] }
    ] },
    { type: "guide", typeLabel: "Step-by-Step Guide", title: "Adding an Outbox to Your System", content: [
      { kind: "bullets", items: [
        "<strong>Create outbox table</strong> — Step 1: Create an outbox table in your application database",
        "<strong>Write in same txn</strong> — Step 2: Modify your write path to INSERT into outbox in the same transaction",
        "<strong>Build polling relay</strong> — Step 3: Build a polling relay that reads unpublished rows and sends them to your broker",
        "<strong>Mark as published</strong> — Step 4: Mark rows as published after broker acknowledgment",
        "<strong>Clean up old rows</strong> — Step 5: Add a cleanup job to delete published outbox rows older than N days",
        "<strong>Upgrade to CDC</strong> — Step 6: (Later) Replace polling with CDC (Debezium) for lower latency"
      ] }
    ] },
    { type: "practices", typeLabel: "Best Practices", title: "Outbox Patterns That Work", content: [
      { kind: "bullets", items: [
        "<strong>Same transaction</strong> — ✅ Use the same database transaction for business data and outbox writes",
        "<strong>Idempotency keys</strong> — ✅ Include an idempotency key in every outbox event",
        "<strong>Clean up rows</strong> — ✅ Clean up old published outbox rows to prevent table bloat",
        "<strong>Monitor relay lag</strong> — ✅ Monitor relay lag -- alert if unpublished rows are older than your SLA",
        "<strong>Pick one path</strong> — ❌ Don't publish directly to the broker AND write to the outbox -- pick one",
        "<strong>Small payloads</strong> — ❌ Don't store large payloads in the outbox -- use references to S3 or the source table"
      ] }
    ] },
    { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Outbox Anti-Patterns", content: [
      { kind: "bullets", items: [
        "<strong>Outbox table bloat</strong> — Not cleaning up published rows turns the outbox into a multi-TB table",
        "<strong>Relay single point of failure</strong> — If the relay process dies, events stop flowing. Run multiple instances with leader election.",
        "<strong>Ordering assumptions</strong> — The relay may publish events out of order under concurrent writes. Partition by aggregate ID for ordering.",
        "<strong>Forgetting idempotency</strong> — The relay may re-publish events after a crash. Consumers must handle duplicates."
      ] }
    ] },
    { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
      { kind: "bullets", items: [
        "<strong>Audit dual writes</strong> — Audit your system for dual-write patterns (DB write + event publish without a shared transaction)",
        "<strong>Add outbox table</strong> — Add an outbox table to one service and migrate one event to use it",
        "<strong>Build simple relay</strong> — Implement a simple polling relay with a 1-second interval",
        "<strong>Monitor lag</strong> — Add monitoring for outbox relay lag"
      ] }
    ] },
    { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
      { kind: "bullets", items: [
        "<strong>Solves dual writes</strong> — The outbox pattern solves the dual-write problem by writing events to the same database transaction as business data.",
        "<strong>Relay publishes</strong> — A relay process reads the outbox and publishes to the message broker.",
        "<strong>Start with polling</strong> — Start with polling; graduate to CDC (Debezium) when latency matters.",
        "<strong>Idempotent consumers</strong> — Always make consumers idempotent -- at-least-once delivery means duplicates."
      ] },
      { kind: "quality", items: [
        { label: "Actionability", score: 5 },
        { label: "Correctness", score: 5 },
        { label: "Visual Appeal", score: 4 },
        { label: "Engagement", score: 5 }
      ] }
    ] }
  ]
};

window.DEEP_DIVES[155] = {
  title: "Strangler Fig Migration",
  icon: "🌿",
  tag: "migration",
  slides: [
    { type: "hook", typeLabel: "Why It Matters", title: "Replace Legacy Without the Big Bang", content: [
      { kind: "text", value: "Big-bang rewrites are tempting but dangerous. The Strangler Fig pattern lets you <strong>incrementally replace a legacy system</strong> by routing traffic to new services one feature at a time -- just like a strangler fig vine gradually envelops a host tree." },
      { kind: "stats", items: [
        { value: "incremental", label: "migration reduces risk vs. big-bang rewrites" },
        { value: "months", label: "of parallel running catches edge cases" },
        { value: "0", label: "downtime required for the switchover" }
      ] },
      { kind: "callout", style: "warning", value: "Many large-scale rewrites fail due to underestimated complexity, shifting requirements during development, or loss of institutional knowledge. The Strangler Fig pattern mitigates these risks by delivering value incrementally." },
      { kind: "sources", items: ["Martin Fowler, 'StranglerFigApplication', martinfowler.com, 2004"] }
    ] },
    { type: "problem", typeLabel: "The Problem", title: "The Rewrite Trap", content: [
      { kind: "text", value: "Your legacy system is painful, but it <strong>works</strong>. A complete rewrite means maintaining two systems for years, re-discovering undocumented business rules, and risking a catastrophic switchover." },
      { kind: "bullets", items: [
        "<strong>Chronic overruns</strong> — Rewrites take 2-3x longer than estimated (consistently)",
        "<strong>Hidden business rules</strong> — Business rules are embedded in legacy code that nobody fully understands",
        "<strong>Moving target</strong> — The legacy system keeps changing while you're rewriting it",
        "<strong>Risky switchover</strong> — Big-bang switchovers create a single massive point of failure"
      ] }
    ] },
    { type: "concepts", typeLabel: "Core Concepts", title: "Strangler Fig Mechanics", content: [
      { kind: "bullets", items: [
        "<strong>Facade/Proxy</strong> — A routing layer that sits in front of both old and new systems",
        "<strong>Incremental migration</strong> — Move one feature, one route, or one domain at a time",
        "<strong>Parallel running</strong> — Both systems handle requests; compare results to verify correctness",
        "<strong>Feature toggle</strong> — Route traffic to new or old system per feature, per user, or per percentage",
        "<strong>Asset capture</strong> — Extract the valuable parts (data, business rules) from the legacy system"
      ] },
      { kind: "sources", items: ["Sam Newman, 'Monolith to Microservices', O'Reilly, Ch. 3"] }
    ] },
    { type: "how", typeLabel: "How It Works", title: "Strangler Fig in Practice", content: [
      { kind: "code", value: "// API Gateway / Reverse Proxy routing\nconst routes = {\n  // Migrated to new service\n  'GET /api/users/:id':      'new-user-service:3000',\n  'POST /api/users':         'new-user-service:3000',\n  \n  // Still on legacy\n  'GET /api/orders/:id':     'legacy-monolith:8080',\n  'POST /api/orders':        'legacy-monolith:8080',\n  \n  // In parallel-run mode (shadow traffic)\n  'GET /api/products/:id': {\n    primary: 'legacy-monolith:8080',\n    shadow:  'new-product-service:3000',\n    compare: true  // log differences\n  },\n  \n  // Everything else -> legacy\n  '*':                       'legacy-monolith:8080'\n};" },
      { kind: "callout", style: "insight", value: "The proxy starts by sending 100% to legacy. As you migrate each route, traffic shifts to the new service. Legacy shrinks until it can be decommissioned." }
    ] },
    { type: "example", typeLabel: "Real-World Example", title: "Amazon's Strangler Migration", content: [
      { kind: "text", value: "Amazon famously migrated from a monolithic bookstore to a service-oriented architecture over <strong>several years</strong> using the strangler fig approach. Each team extracted their domain into a service." },
      { kind: "bullets", items: [
        "<strong>Easiest first</strong> — Started with the product catalog -- easiest to isolate",
        "<strong>Team ownership</strong> — Each team owned a 'two-pizza' service extracted from the monolith",
        "<strong>API mandate</strong> — Internal API mandate: all communication must go through service interfaces",
        "<strong>Organic shrinkage</strong> — The monolith shrank organically over 5+ years"
      ] },
      { kind: "sources", items: ["Werner Vogels, 'Working Backwards from the Customer', All Things Distributed", "Steve Yegge, 'Stevey's Google Platforms Rant', 2011 (re: Amazon SOA mandate)"] }
    ] },
    { type: "guide", typeLabel: "Step-by-Step Guide", title: "Running a Strangler Fig Migration", content: [
      { kind: "bullets", items: [
        "<strong>Add proxy layer</strong> — Step 1: Place an API gateway or reverse proxy in front of the legacy system",
        "<strong>Pick first feature</strong> — Step 2: Identify the first feature to migrate (choose low-risk, high-value)",
        "<strong>Deploy alongside</strong> — Step 3: Build the new implementation and deploy it alongside legacy",
        "<strong>Shadow traffic</strong> — Step 4: Run in parallel -- shadow traffic to new service, compare results with legacy",
        "<strong>Switch traffic</strong> — Step 5: When confident, switch live traffic to the new service via the proxy",
        "<strong>Iterate faster</strong> — Step 6: Repeat. Each cycle should get faster as you learn the pattern."
      ] },
      { kind: "callout", style: "action", value: "Start with a read-only endpoint. It's lowest risk and lets you validate data consistency before handling writes." }
    ] },
    { type: "practices", typeLabel: "Best Practices", title: "Migration Playbook", content: [
      { kind: "bullets", items: [
        "<strong>Feature flags</strong> — ✅ Use feature flags to control traffic routing (not deploy-time configuration)",
        "<strong>Shadow traffic</strong> — ✅ Run parallel comparisons in production with shadow traffic",
        "<strong>Anti-corruption layer</strong> — ✅ Migrate data access first -- use an anti-corruption layer to translate between old and new models",
        "<strong>Set a deadline</strong> — ✅ Set a deadline for decommissioning legacy -- or the migration will never finish",
        "<strong>Smallest slice first</strong> — ❌ Don't try to migrate everything at once -- pick the smallest valuable slice",
        "<strong>Parallel running</strong> — ❌ Don't skip the parallel-running phase -- it catches edge cases you can't find in staging"
      ] }
    ] },
    { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Migration Anti-Patterns", content: [
      { kind: "bullets", items: [
        "<strong>Perpetual parallel</strong> — Running both systems for years because no one commits to cutting over",
        "<strong>Data sync nightmares</strong> — Both systems writing to different databases without a clear source of truth",
        "<strong>Feature parity obsession</strong> — Trying to replicate every legacy feature instead of rethinking",
        "<strong>Ignoring the proxy</strong> — The routing layer itself becomes a complex, unmaintained bottleneck"
      ] }
    ] },
    { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
      { kind: "bullets", items: [
        "<strong>Find painful legacy</strong> — Identify one legacy system that causes pain in your organization",
        "<strong>Rank features</strong> — List the features it provides and rank them by isolation difficulty",
        "<strong>Sketch proxy layer</strong> — Sketch a proxy layer that could sit in front of both old and new systems",
        "<strong>Propose first feature</strong> — Propose the first feature to migrate and estimate the effort"
      ] }
    ] },
    { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
      { kind: "bullets", items: [
        "<strong>Incremental replacement</strong> — The Strangler Fig pattern replaces legacy systems incrementally, not all at once.",
        "<strong>Proxy-based routing</strong> — A proxy/facade routes traffic between old and new systems per feature.",
        "<strong>Parallel validation</strong> — Parallel running in production catches edge cases that staging cannot.",
        "<strong>Set a deadline</strong> — Set a decommission deadline or the migration will stall indefinitely."
      ] },
      { kind: "quality", items: [
        { label: "Actionability", score: 5 },
        { label: "Correctness", score: 5 },
        { label: "Visual Appeal", score: 4 },
        { label: "Engagement", score: 5 }
      ] }
    ] }
  ]
};

window.DEEP_DIVES[156] = {
  title: "Cell-Based Architecture",
  icon: "🧬",
  tag: "architecture pattern",
  slides: [
    { type: "hook", typeLabel: "Why It Matters", title: "Contain the Blast Radius", content: [
      { kind: "text", value: "When a global service fails, <strong>every user is affected</strong>. Cell-based architecture divides your system into independent, isolated units so a failure in one cell only impacts a fraction of users." },
      { kind: "stats", items: [
        { value: "1-5%", label: "of users affected per cell failure vs. 100%" },
        { value: "AWS", label: "uses cell-based architecture for core services" },
        { value: "99.999%", label: "availability achievable with cell isolation" }
      ] },
      { kind: "sources", items: ["AWS, 'Cell-Based Architecture', Well-Architected Framework", "Colm MacCarthaigh, 'Shuffle Sharding', AWS re:Invent 2019"] }
    ] },
    { type: "problem", typeLabel: "The Problem", title: "Global Failures Are Total Failures", content: [
      { kind: "text", value: "A single shared database, API fleet, or cache cluster failing takes down <strong>100% of users simultaneously</strong>." },
      { kind: "bullets", items: [
        "<strong>Global bad deploy</strong> — A bad deployment rolls out to all instances at once",
        "<strong>Poison-pill crash</strong> — A poison-pill request crashes every server in the fleet",
        "<strong>DB failover impact</strong> — A database failover causes minutes of downtime for all users",
        "<strong>Noisy neighbor</strong> — Load spikes from one customer saturate shared resources for everyone"
      ] }
    ] },
    { type: "concepts", typeLabel: "Core Concepts", title: "Cell Architecture Fundamentals", content: [
      { kind: "bullets", items: [
        "<strong>Cell</strong> — A complete, independent copy of your service stack (compute, storage, cache)",
        "<strong>Cell Router</strong> — Routes requests to the correct cell based on a partition key",
        "<strong>Consistent Hashing</strong> — Distributes users across cells evenly. Unlike simple modulo (<code>hash % cellCount</code>), consistent hashing minimizes redistribution when cells are added or removed.",
        "<strong>Blast Radius</strong> — The maximum percentage of users affected by a single cell failure",
        "<strong>Cell Independence</strong> — Cells share nothing. No cross-cell database queries, no shared caches."
      ] },
      { kind: "callout", style: "warning", value: "hash(userId) % cells.length is modulo-based partitioning, NOT consistent hashing. Modulo remaps nearly all users when cells change. Use a hash ring for true consistent hashing." },
      { kind: "sources", items: ["David Karger et al., 'Consistent Hashing and Random Trees', ACM STOC 1997"] }
    ] },
    { type: "how", typeLabel: "How It Works", title: "Cell Routing in Practice", content: [
      { kind: "code", value: "// Cell router using consistent hashing (hash ring)\nclass CellRouter {\n  constructor(cells) {\n    this.ring = new ConsistentHashRing(cells, {\n      virtualNodes: 150  // for even distribution\n    });\n  }\n\n  route(userId) {\n    // Consistent hashing: only ~1/N users remap on change\n    return this.ring.getNode(userId);\n  }\n\n  addCell(cell) {\n    this.ring.addNode(cell); // only ~1/N users move\n  }\n}\n\n// Each cell is a complete stack:\n// Cell-A: [API] -> [DB-A] -> [Cache-A]\n// Cell-B: [API] -> [DB-B] -> [Cache-B]\n// Cell-C: [API] -> [DB-C] -> [Cache-C]\n// No cross-cell communication!" },
      { kind: "callout", style: "insight", value: "The cell router is the only shared component. Keep it stateless and deploy it redundantly." }
    ] },
    { type: "example", typeLabel: "Real-World Example", title: "AWS Route 53 Shuffle Sharding", content: [
      { kind: "text", value: "AWS Route 53 uses cell-based architecture to achieve <strong>100% availability SLA</strong> -- the only AWS service with this guarantee." },
      { kind: "bullets", items: [
        "<strong>Shuffle sharding</strong> — DNS queries are routed to isolated cells called shuffle shards",
        "<strong>Independent cells</strong> — Each cell operates independently with its own data store",
        "<strong>Canary deploys</strong> — Bad deployments are tested in one cell before rolling to others",
        "<strong>Minimal blast radius</strong> — Cell failure affects only a small fraction of queries"
      ] },
      { kind: "sources", items: ["Colm MacCarthaigh, 'Shuffle Sharding: Massive and Magical Fault Isolation', AWS re:Invent"] }
    ] },
    { type: "guide", typeLabel: "Step-by-Step Guide", title: "Implementing Cell Architecture", content: [
      { kind: "bullets", items: [
        "<strong>Choose partition key</strong> — Step 1: Identify your partition key (user ID, tenant ID, region)",
        "<strong>Design a cell</strong> — Step 2: Design a cell as a complete, independent stack",
        "<strong>Build cell router</strong> — Step 3: Build a stateless cell router using consistent hashing",
        "<strong>Prove isolation</strong> — Step 4: Start with 2-3 cells and prove isolation by killing one",
        "<strong>Cell-aware deploys</strong> — Step 5: Implement cell-aware deployments (deploy to one, validate, roll forward)",
        "<strong>Per-cell monitoring</strong> — Step 6: Add per-cell monitoring: latency, error rate, saturation"
      ] }
    ] },
    { type: "practices", typeLabel: "Best Practices", title: "Cell Architecture Rules", content: [
      { kind: "bullets", items: [
        "<strong>Share nothing</strong> — ✅ Cells share NOTHING -- no cross-cell queries or shared caches",
        "<strong>Consistent hashing</strong> — ✅ Use consistent hashing (not modulo) to assign users to cells",
        "<strong>Progressive rollout</strong> — ✅ Deploy changes to one cell first, validate, then roll to others",
        "❌ Don't create cross-cell API calls",
        "❌ Don't use a single global database across cells",
        "❌ Don't neglect per-cell monitoring"
      ] }
    ] },
    { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Cell Anti-Patterns", content: [
      { kind: "bullets", items: [
        "<strong>Shared database</strong> — All cells hitting one DB means zero isolation",
        "<strong>Cross-cell queries</strong> — Admin dashboards querying all cells defeat the purpose",
        "<strong>Uneven sizing</strong> — Skewed partition keys put 80% of traffic in one cell",
        "<strong>Router as monolith</strong> — The cell router becomes a single point of failure"
      ] }
    ] },
    { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
      { kind: "bullets", items: [
        "<strong>Assess blast radius</strong> — Identify the blast radius of a failure in your current architecture",
        "<strong>Find partition key</strong> — Determine the natural partition key for your system",
        "<strong>Sketch one cell</strong> — Sketch what a single cell would look like for your service",
        "<strong>Calculate improvement</strong> — Calculate: with 10 cells, what would your blast radius be?"
      ] }
    ] },
    { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
      { kind: "bullets", items: [
        "<strong>Failure isolation</strong> — Cell-based architecture isolates failures to a fraction of users.",
        "<strong>Complete stacks</strong> — Each cell is a complete, independent stack sharing nothing.",
        "<strong>Consistent hashing</strong> — Use consistent hashing (not modulo) to route users to cells.",
        "<strong>Stateless router</strong> — The cell router is the only shared component -- keep it stateless."
      ] },
      { kind: "quality", items: [
        { label: "Actionability", score: 5 },
        { label: "Correctness", score: 5 },
        { label: "Visual Appeal", score: 4 },
        { label: "Engagement", score: 5 }
      ] }
    ] }
  ]
};

window.DEEP_DIVES[157] = {
  title: "Backend-for-Frontend (BFF)",
  icon: "🖥️",
  tag: "architecture pattern",
  slides: [
    { type: "hook", typeLabel: "Why It Matters", title: "One API Does Not Fit All Clients", content: [
      { kind: "text", value: "Mobile needs tiny payloads. Web dashboards need rich data. Partner APIs need stable contracts. A single backend serving all three becomes a <strong>lowest-common-denominator mess</strong>." },
      { kind: "stats", items: [
        { value: "3-5x", label: "over-fetching on mobile with a generic API" },
        { value: "60%", label: "of mobile data usage is wasted payload" },
        { value: "1 BFF", label: "per client type keeps APIs focused" }
      ] },
      { kind: "sources", items: ["Sam Newman, 'Backends for Frontends', samnewman.io"] }
    ] },
    { type: "problem", typeLabel: "The Problem", title: "The God API", content: [
      { kind: "text", value: "A single API serves every client type. It returns 10KB when mobile needs 500 bytes. Changes break every client simultaneously." },
      { kind: "bullets", items: [
        "<strong>Breaking changes</strong> — Mobile team wants field removal that breaks web dashboard",
        "<strong>Wasted bandwidth</strong> — Responses include admin-only data, wasting mobile bandwidth",
        "<strong>Auth complexity</strong> — Auth flows differ per client but are crammed into one endpoint",
        "<strong>Version nightmares</strong> — API versioning becomes a nightmare across 4 client types"
      ] }
    ] },
    { type: "concepts", typeLabel: "Core Concepts", title: "BFF Architecture", content: [
      { kind: "bullets", items: [
        "<strong>BFF</strong> — A backend tailored to one frontend (mobile BFF, web BFF, partner BFF)",
        "<strong>Aggregation</strong> — BFF calls downstream services and combines results for the client",
        "<strong>Client-specific logic</strong> — Auth, payload shaping, error formatting live in the BFF",
        "<strong>Shared services</strong> — Business logic stays in shared backends; BFFs orchestrate only"
      ] },
      { kind: "callout", style: "insight", value: "The BFF is owned by the frontend team. This eliminates the cross-team coordination bottleneck." }
    ] },
    { type: "how", typeLabel: "How It Works", title: "BFF Data Flow", content: [
      { kind: "code", value: "// Mobile BFF: minimal payload\napp.get('/api/mobile/feed', async (req, res) => {\n  const [posts, user] = await Promise.all([\n    postService.getRecent(req.userId, { limit: 10 }),\n    userService.getProfile(req.userId, { fields: ['name', 'avatar'] })\n  ]);\n  res.json({\n    user: { name: user.name, avatar: user.avatarSmall },\n    posts: posts.map(p => ({ id: p.id, title: p.title, thumb: p.thumbnailUrl }))\n  });\n});\n\n// Web BFF: rich payload\napp.get('/api/web/feed', async (req, res) => {\n  const [posts, user, notifs, trending] = await Promise.all([\n    postService.getRecent(req.userId, { limit: 50 }),\n    userService.getFullProfile(req.userId),\n    notificationService.getUnread(req.userId),\n    trendingService.getTopics()\n  ]);\n  res.json({ user, posts, notifs, trending });\n});" }
    ] },
    { type: "example", typeLabel: "Real-World Example", title: "Netflix's BFF Layer", content: [
      { kind: "text", value: "Netflix operates separate BFFs for TV, mobile, web, and console clients." },
      { kind: "bullets", items: [
        "<strong>TV optimization</strong> — TV BFF optimizes for limited memory and CPU on smart TVs",
        "<strong>Mobile optimization</strong> — Mobile BFF minimizes payload size for cellular connections",
        "<strong>Team ownership</strong> — Each BFF is owned by the client team for independent releases",
        "<strong>Shared backends</strong> — Shared backend services (catalog, recommendations) are called by all BFFs"
      ] },
      { kind: "sources", items: ["Netflix Tech Blog, 'Embracing the Differences: Inside the Netflix API Redesign'"] }
    ] },
    { type: "guide", typeLabel: "Step-by-Step Guide", title: "Building Your First BFF", content: [
      { kind: "bullets", items: [
        "<strong>Identify clients</strong> — Step 1: Identify client types with different data needs",
        "<strong>Start constrained</strong> — Step 2: Create a thin BFF for the most constrained client (usually mobile)",
        "<strong>Move shaping logic</strong> — Step 3: Move client-specific response shaping from backend API to the BFF",
        "<strong>Frontend ownership</strong> — Step 4: Have the frontend team own the BFF",
        "<strong>Thin orchestration</strong> — Step 5: Keep business logic in shared services; BFF only orchestrates",
        "<strong>Independent deploys</strong> — Step 6: Deploy BFFs independently from backend services"
      ] }
    ] },
    { type: "practices", typeLabel: "Best Practices", title: "BFF Done Right", content: [
      { kind: "bullets", items: [
        "<strong>Per client type</strong> — ✅ One BFF per distinct client type (not per feature)",
        "<strong>Owns client concerns</strong> — ✅ BFF owns auth, response shaping, error formatting for its client",
        "<strong>Keep BFFs thin</strong> — ✅ Keep BFFs thin -- orchestration only, no business logic",
        "❌ Don't create a BFF for each microservice",
        "❌ Don't duplicate business logic across BFFs",
        "❌ Don't let backend teams own the BFF"
      ] }
    ] },
    { type: "pitfalls", typeLabel: "Common Pitfalls", title: "BFF Anti-Patterns", content: [
      { kind: "bullets", items: [
        "<strong>Fat BFF</strong> — Business logic migrates in, creating a new monolith",
        "<strong>BFF per feature</strong> — Too many BFFs with overlapping responsibilities",
        "<strong>Shared BFF</strong> — One BFF for all clients defeats the purpose",
        "<strong>BFF as crutch</strong> — Working around bad backend APIs instead of fixing them"
      ] }
    ] },
    { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
      { kind: "bullets", items: [
        "<strong>Compare responses</strong> — Compare mobile and web API responses -- how much data is wasted?",
        "List client-specific logic in your backend APIs",
        "Sketch a BFF for your most constrained client",
        "Estimate bandwidth savings from tailored payloads"
      ] }
    ] },
    { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
      { kind: "bullets", items: [
        "A BFF is a backend tailored to a specific frontend's needs.",
        "Frontend teams should own their BFF for maximum velocity.",
        "Keep BFFs thin -- orchestration and shaping only.",
        "One BFF per client type, not per feature or microservice."
      ] },
      { kind: "quality", items: [
        { label: "Actionability", score: 5 },
        { label: "Correctness", score: 5 },
        { label: "Visual Appeal", score: 4 },
        { label: "Engagement", score: 5 }
      ] }
    ] }
  ]
};

window.DEEP_DIVES[158] = {
  title: "Circuit Breaker Pattern",
  icon: "⚡",
  tag: "resilience",
  slides: [
    { type: "hook", typeLabel: "Why It Matters", title: "Stop Calling a Dead Service", content: [
      { kind: "text", value: "When a downstream service is failing, continuing to call it makes everything worse. The circuit breaker <strong>fails fast</strong> and returns fallbacks instead of waiting for timeouts." },
      { kind: "stats", items: [
        { value: "30s", label: "timeout cost per request without circuit breaker" },
        { value: "1ms", label: "fail-fast time with circuit breaker open" },
        { value: "10x", label: "reduction in cascading failure impact" }
      ] },
      { kind: "sources", items: ["Michael Nygard, 'Release It!', Pragmatic Bookshelf", "Martin Fowler, 'CircuitBreaker', martinfowler.com"] }
    ] },
    { type: "problem", typeLabel: "The Problem", title: "Cascading Failure Amplification", content: [
      { kind: "text", value: "Service A calls slow Service B. A's thread pool fills up waiting. Now A is slow. C calls A. <strong>The entire system collapses like dominoes.</strong>" },
      { kind: "bullets", items: [
        "<strong>Thread exhaustion</strong> — Thread pools exhaust waiting for a slow dependency",
        "<strong>Retry storms</strong> — Retry storms multiply load on struggling services",
        "<strong>No graceful fallback</strong> — Users see spinning loaders instead of graceful fallbacks",
        "<strong>Cascading failures</strong> — One slow query brings down 15 upstream services"
      ] }
    ] },
    { type: "concepts", typeLabel: "Core Concepts", title: "Circuit Breaker States", content: [
      { kind: "bullets", items: [
        "<strong>Closed (Normal)</strong> — Requests flow through; failures are counted",
        "<strong>Open (Tripped)</strong> — Threshold exceeded; all requests fail fast with fallback",
        "<strong>Half-Open (Testing)</strong> — After cooldown, one test request is allowed through",
        "<strong>Failure Threshold</strong> — e.g., 5 failures in 10 seconds triggers OPEN",
        "<strong>Cooldown Period</strong> — e.g., 30 seconds before testing recovery"
      ] },
      { kind: "callout", style: "insight", value: "Like an electrical circuit breaker: it trips to prevent a short circuit from causing a fire." }
    ] },
    { type: "how", typeLabel: "How It Works", title: "Implementation", content: [
      { kind: "code", value: "class CircuitBreaker {\n  constructor(fn, { threshold = 5, cooldown = 30000 } = {}) {\n    this.fn = fn;\n    this.state = 'CLOSED';\n    this.failures = 0;\n    this.threshold = threshold;\n    this.cooldown = cooldown;\n    this.nextAttempt = 0;\n  }\n  async call(...args) {\n    if (this.state === 'OPEN') {\n      if (Date.now() < this.nextAttempt)\n        throw new Error('Circuit OPEN - failing fast');\n      this.state = 'HALF_OPEN';\n    }\n    try {\n      const result = await this.fn(...args);\n      this.onSuccess();\n      return result;\n    } catch (err) {\n      this.onFailure();\n      throw err;\n    }\n  }\n  onSuccess() { this.failures = 0; this.state = 'CLOSED'; }\n  onFailure() {\n    this.failures++;\n    if (this.failures >= this.threshold) {\n      this.state = 'OPEN';\n      this.nextAttempt = Date.now() + this.cooldown;\n    }\n  }\n}" },
      { kind: "callout", style: "insight", value: "In production, use Resilience4j (Java), Polly (.NET), or opossum (Node.js). Netflix Hystrix pioneered this pattern but is deprecated since 2018 -- Resilience4j is the recommended successor." }
    ] },
    { type: "example", typeLabel: "Real-World Example", title: "From Hystrix to Resilience4j", content: [
      { kind: "text", value: "Netflix pioneered circuit breakers with Hystrix. When recommendations failed, users saw <strong>cached popular titles instead of errors</strong>. The industry has since migrated to Resilience4j." },
      { kind: "bullets", items: [
        "<strong>Hystrix legacy</strong> — Hystrix (deprecated, maintenance-only since 2018) wrapped every inter-service call",
        "<strong>Modern successor</strong> — Resilience4j is the modern replacement -- lighter, modular, Spring Boot native",
        "<strong>Graceful fallback</strong> — Fallback: cached data when personalization service is down",
        "<strong>Real-time visibility</strong> — Real-time dashboard shows circuit state across all services"
      ] },
      { kind: "sources", items: ["Netflix OSS, 'Hystrix Status: In maintenance mode'", "Resilience4j Documentation, resilience4j.readme.io"] }
    ] },
    { type: "guide", typeLabel: "Step-by-Step Guide", title: "Adding Circuit Breakers", content: [
      { kind: "bullets", items: [
        "<strong>List dependencies</strong> — Step 1: Identify every external dependency your service calls",
        "<strong>Wrap critical calls</strong> — Step 2: Wrap the most critical one in a circuit breaker",
        "<strong>Define fallbacks</strong> — Step 3: Define a fallback (cached data, default response, queued retry)",
        "<strong>Add metrics</strong> — Step 4: Add metrics for state transitions and fallback invocations",
        "<strong>Tune thresholds</strong> — Step 5: Tune thresholds based on production data",
        "<strong>Health dashboard</strong> — Step 6: Add circuit state to your health dashboard"
      ] }
    ] },
    { type: "practices", typeLabel: "Best Practices", title: "Circuit Breaker Rules", content: [
      { kind: "bullets", items: [
        "✅ Always define a meaningful fallback",
        "✅ Use a library -- do not hand-roll",
        "✅ Monitor state transitions as incident signals",
        "✅ Combine with timeouts and bulkheads",
        "❌ Don't set thresholds too aggressively",
        "❌ Don't use circuit breakers for in-process calls"
      ] }
    ] },
    { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [
      { kind: "bullets", items: [
        "<strong>No fallback</strong> — Circuit opens but just throws errors to users",
        "<strong>Global circuit</strong> — One breaker for all endpoints of a service",
        "<strong>Long cooldown</strong> — Service recovered but no traffic flows for 10 min",
        "<strong>Ignored dashboard</strong> — Breakers tripping constantly with nobody watching"
      ] }
    ] },
    { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
      { kind: "bullets", items: [
        "<strong>List dependencies</strong> — List external services and their timeout settings",
        "<strong>Add breaker</strong> — Add a circuit breaker to your most failure-prone dependency",
        "Define a fallback for that dependency",
        "Add metrics for OPEN state transitions"
      ] }
    ] },
    { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
      { kind: "bullets", items: [
        "<strong>Fail fast pattern</strong> — Circuit breakers fail fast when a dependency is down, preventing cascading failures.",
        "<strong>Three states</strong> — Three states: Closed (normal), Open (failing fast), Half-Open (testing recovery).",
        "<strong>Fallbacks essential</strong> — Always define a fallback -- the breaker is useless without one.",
        "<strong>Use a library</strong> — Use Resilience4j (Java), Polly (.NET), or opossum (Node.js). Hystrix is deprecated."
      ] },
      { kind: "quality", items: [
        { label: "Actionability", score: 5 },
        { label: "Correctness", score: 5 },
        { label: "Visual Appeal", score: 4 },
        { label: "Engagement", score: 5 }
      ] }
    ] }
  ]
};

window.DEEP_DIVES[159] = {
  title: "Bulkhead Pattern",
  icon: "🚢",
  tag: "resilience",
  slides: [
    { type: "hook", typeLabel: "Why It Matters", title: "Isolate Failures Like a Ship", content: [
      { kind: "text", value: "Ships have watertight compartments. If one floods, the others keep the ship afloat. The bulkhead pattern <strong>isolates resources so one failure cannot sink everything</strong>." },
      { kind: "stats", items: [
        { value: "1", label: "noisy neighbor can consume 100% of shared resources" },
        { value: "N", label: "isolated pools limit blast radius to 1/N" },
        { value: "0", label: "cross-contamination with proper bulkheads" }
      ] },
      { kind: "sources", items: ["Michael Nygard, 'Release It!', Pragmatic Bookshelf", "Microsoft Azure, 'Bulkhead Pattern'"] }
    ] },
    { type: "problem", typeLabel: "The Problem", title: "The Noisy Neighbor", content: [
      { kind: "text", value: "All endpoints share one thread pool. A slow /reports endpoint eats all 200 threads. Now /login and /health can't get a thread. Load balancer marks the server dead." },
      { kind: "bullets", items: [
        "<strong>Thread starvation</strong> — Slow endpoint consumes all threads in a shared pool",
        "<strong>Critical path blocked</strong> — Critical endpoints starve for resources",
        "<strong>False health alarms</strong> — Health checks timeout, triggering false alarms",
        "<strong>Scaling won't help</strong> — Auto-scaling can't help -- new instances are also saturated"
      ] }
    ] },
    { type: "concepts", typeLabel: "Core Concepts", title: "Isolation Strategies", content: [
      { kind: "bullets", items: [
        "<strong>Thread Pool Isolation</strong> — Each dependency gets its own fixed-size thread pool",
        "<strong>Semaphore Isolation</strong> — Limit concurrent calls with a counter (lighter weight)",
        "<strong>Process Isolation</strong> — Run critical workloads in separate containers",
        "<strong>Service Isolation</strong> — Separate services for critical vs. non-critical paths",
        "<strong>Priority Lanes</strong> — Different queues for VIP, normal, background traffic"
      ] },
      { kind: "callout", style: "insight", value: "Bulkheads and circuit breakers are complementary. Bulkheads limit resource consumption. Circuit breakers stop calling failures. Use both." }
    ] },
    { type: "how", typeLabel: "How It Works", title: "Semaphore Bulkhead", content: [
      { kind: "code", value: "class Bulkhead {\n  constructor(maxConcurrent) {\n    this.max = maxConcurrent;\n    this.current = 0;\n  }\n  async execute(fn) {\n    if (this.current >= this.max) {\n      throw new Error('Bulkhead full - rejecting request');\n    }\n    this.current++;\n    try {\n      return await fn();\n    } finally {\n      this.current--;\n    }\n  }\n}\n\n// Separate pools per dependency\nconst bulkheads = {\n  payment:   new Bulkhead(20),  // critical: more capacity\n  inventory: new Bulkhead(10),\n  email:     new Bulkhead(5),   // non-critical: limited\n};\n\nawait bulkheads.payment.execute(() => paymentService.charge(order));" }
    ] },
    { type: "example", typeLabel: "Real-World Example", title: "Amazon's Service Isolation", content: [
      { kind: "text", value: "Amazon isolates checkout from browse/search. If search slows, <strong>purchasing still works</strong>." },
      { kind: "bullets", items: [
        "<strong>Dedicated resources</strong> — Critical path (checkout, payment) has dedicated resources",
        "<strong>Independent degradation</strong> — Non-critical features (recommendations, reviews) degrade independently",
        "<strong>Bounded pools</strong> — Each dependency has a bounded connection pool",
        "<strong>Proactive shedding</strong> — During Prime Day, non-essential features are proactively shed"
      ] },
      { kind: "sources", items: ["Werner Vogels, 'All Things Distributed'"] }
    ] },
    { type: "guide", typeLabel: "Step-by-Step Guide", title: "Implementing Bulkheads", content: [
      { kind: "bullets", items: [
        "<strong>Find shared resources</strong> — Step 1: Identify shared resources (thread pools, connection pools)",
        "<strong>Categorize by criticality</strong> — Step 2: Categorize endpoints by criticality",
        "<strong>Separate pools</strong> — Step 3: Allocate separate resource pools per category",
        "<strong>Set limits</strong> — Step 4: Set concurrency limits based on load testing",
        "<strong>Monitor utilization</strong> — Step 5: Monitor pool utilization and rejection rates",
        "<strong>Defense in depth</strong> — Step 6: Combine with circuit breakers for defense in depth"
      ] }
    ] },
    { type: "practices", typeLabel: "Best Practices", title: "Bulkhead Rules", content: [
      { kind: "bullets", items: [
        "<strong>Isolate critical path</strong> — ✅ Isolate critical-path from non-critical operations",
        "✅ Size pools based on load testing",
        "✅ Alert when pools are consistently >80% full",
        "❌ Don't create too many fine-grained pools",
        "❌ Don't size all pools equally",
        "<strong>Downstream pools</strong> — ❌ Don't forget downstream shared resources (DB pools)"
      ] }
    ] },
    { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [
      { kind: "bullets", items: [
        "<strong>Under-sized pools</strong> — Rejects legitimate traffic during normal load",
        "<strong>Over-isolation</strong> — 50 pools with 2 threads each wastes resources",
        "<strong>No monitoring</strong> — Silently rejecting without alerting",
        "<strong>Shared downstream</strong> — Isolated pools all hit the same DB connection pool"
      ] }
    ] },
    { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
      { kind: "bullets", items: [
        "<strong>Find shared pools</strong> — Identify shared thread/connection pools in your service",
        "<strong>Find noisy neighbor</strong> — Find the noisiest neighbor endpoint or dependency",
        "Isolate it into its own bounded pool",
        "Load test to find the right pool size"
      ] }
    ] },
    { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
      { kind: "bullets", items: [
        "<strong>Resource isolation</strong> — Bulkheads isolate resources so one slow dependency can't consume everything.",
        "<strong>Two strategies</strong> — Thread pool isolation for blocking calls, semaphore for async calls.",
        "<strong>Separate workloads</strong> — Critical and non-critical workloads must not share resource pools.",
        "<strong>Pair with breakers</strong> — Combine bulkheads with circuit breakers for comprehensive resilience."
      ] },
      { kind: "quality", items: [
        { label: "Actionability", score: 5 },
        { label: "Correctness", score: 5 },
        { label: "Visual Appeal", score: 4 },
        { label: "Engagement", score: 5 }
      ] }
    ] }
  ]
};

window.DEEP_DIVES[160] = {
  title: "Retry Strategies & Exponential Backoff",
  icon: "🔄",
  tag: "resilience",
  slides: [
    { type: "hook", typeLabel: "Why It Matters", title: "Retries That Heal vs. Retries That Kill", content: [
      { kind: "text", value: "Naive retries turn a minor hiccup into a <strong>thundering herd</strong> that crushes the service you're trying to reach." },
      { kind: "stats", items: [
        { value: "3x", label: "load amplification with immediate retries" },
        { value: "27x", label: "load with 3 retries across 3 service layers" },
        { value: "90%", label: "of retry storms preventable with backoff + jitter" }
      ] },
      { kind: "sources", items: ["AWS, 'Exponential Backoff and Jitter'", "Marc Brooker, 'Timeouts, retries, and backoff with jitter'"] }
    ] },
    { type: "problem", typeLabel: "The Problem", title: "The Thundering Herd", content: [
      { kind: "text", value: "Service B hiccups. 1,000 instances of A retry immediately. B receives <strong>3,000 extra requests</strong> when it's least able to handle them." },
      { kind: "bullets", items: [
        "<strong>Load multiplication</strong> — Immediate retries multiply load on a struggling service",
        "<strong>Synchronized spikes</strong> — Synchronized retries create traffic spikes",
        "<strong>Retry amplification</strong> — Retry amplification: 3 retries x 3 layers = 27x load",
        "<strong>No recovery</strong> — The service never recovers because retries outpace processing"
      ] }
    ] },
    { type: "concepts", typeLabel: "Core Concepts", title: "The Retry Toolkit", content: [
      { kind: "bullets", items: [
        "<strong>Exponential Backoff</strong> — Wait 1s, 2s, 4s, 8s. Each wait doubles.",
        "<strong>Jitter</strong> — Random delay prevents synchronized retries",
        "<strong>Max Retries</strong> — Cap at 3-5. Infinite retries = infinite problems.",
        "<strong>Retry Budget</strong> — Max 10% of fleet requests can be retries",
        "<strong>Idempotency</strong> — Retries only safe if operation can be repeated"
      ] },
      { kind: "callout", style: "warning", value: "Never retry non-idempotent operations without an idempotency key. You will charge the customer twice." }
    ] },
    { type: "how", typeLabel: "How It Works", title: "Backoff with Full Jitter", content: [
      { kind: "code", value: "async function retryWithBackoff(fn, {\n  maxRetries = 3, baseDelay = 1000, maxDelay = 30000\n} = {}) {\n  for (let attempt = 0; attempt <= maxRetries; attempt++) {\n    try {\n      return await fn();\n    } catch (err) {\n      if (attempt === maxRetries || !isRetryable(err)) throw err;\n      const expDelay = Math.min(baseDelay * 2 ** attempt, maxDelay);\n      const jittered = Math.random() * expDelay;\n      await sleep(jittered);\n    }\n  }\n}\nfunction isRetryable(err) {\n  return err.status >= 500 || err.code === 'ECONNRESET';\n}" },
      { kind: "callout", style: "insight", value: "Full jitter (random between 0 and max) spreads retries most evenly per AWS's simulations." }
    ] },
    { type: "example", typeLabel: "Real-World Example", title: "Google Cloud Client Libraries", content: [
      { kind: "text", value: "All Google Cloud SDKs implement standardized retry with backoff, jitter, and budgets baked in." },
      { kind: "bullets", items: [
        "<strong>Backoff config</strong> — Initial delay: 100ms, multiplier: 2x, max delay: 60s",
        "<strong>Per-API retries</strong> — Retryable status codes defined per API",
        "<strong>Deadline-based cap</strong> — Total retry time capped (deadline-based)",
        "<strong>Retry budgets</strong> — Client-side retry budget prevents excessive retry traffic"
      ] },
      { kind: "sources", items: ["Google Cloud Client Library Docs", "Google SRE Book, Ch. 22"] }
    ] },
    { type: "guide", typeLabel: "Step-by-Step Guide", title: "Smart Retry Implementation", content: [
      { kind: "bullets", items: [
        "<strong>Classify errors</strong> — Step 1: Classify errors: retryable (5xx, timeouts) vs. non-retryable (4xx)",
        "<strong>Exponential backoff</strong> — Step 2: Implement exponential backoff: delay = base * 2^attempt",
        "<strong>Add jitter</strong> — Step 3: Add full jitter: actual = random(0, calculated)",
        "<strong>Set limits</strong> — Step 4: Set max retries AND total deadline",
        "<strong>Idempotency keys</strong> — Step 5: Add idempotency keys to retryable writes",
        "<strong>Monitor retry rate</strong> — Step 6: Monitor retry rate -- >10% means fix the dependency"
      ] }
    ] },
    { type: "practices", typeLabel: "Best Practices", title: "Retry Rules", content: [
      { kind: "bullets", items: [
        "<strong>Backoff with jitter</strong> — ✅ Always use exponential backoff with jitter",
        "<strong>Only retry 5xx</strong> — ✅ Only retry 5xx and network errors, never 4xx",
        "<strong>Timeouts and deadlines</strong> — ✅ Set per-attempt timeouts AND total deadline",
        "<strong>Idempotency keys</strong> — ✅ Use idempotency keys for write operations",
        "❌ Don't retry immediately without delay",
        "❌ Don't retry at every layer independently"
      ] }
    ] },
    { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Retry Anti-Patterns", content: [
      { kind: "bullets", items: [
        "<strong>Retry amplification</strong> — Each layer retries: 3^3 = 27x load",
        "<strong>Retrying 4xx</strong> — 403 Forbidden won't succeed on retry #10",
        "<strong>Missing jitter</strong> — All clients retry on the same schedule",
        "<strong>Infinite retries</strong> — Request hangs forever, never fails"
      ] }
    ] },
    { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
      { kind: "bullets", items: [
        "Audit retry logic for immediate retries",
        "Add backoff + jitter to your most critical call",
        "Verify retried operations are idempotent",
        "Track retry rate as % of total requests"
      ] }
    ] },
    { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
      { kind: "bullets", items: [
        "<strong>Smart retries</strong> — Naive retries amplify failures. Backoff with jitter prevents thundering herds.",
        "<strong>Retry only 5xx</strong> — Only retry retryable errors (5xx, timeouts). Never retry 4xx.",
        "<strong>Limits and keys</strong> — Set max retries AND total deadline. Use idempotency keys for writes.",
        "<strong>Fix the root cause</strong> — High retry rate means fix the dependency, not add more retries."
      ] },
      { kind: "quality", items: [
        { label: "Actionability", score: 5 },
        { label: "Correctness", score: 5 },
        { label: "Visual Appeal", score: 4 },
        { label: "Engagement", score: 5 }
      ] }
    ] }
  ]
};

window.DEEP_DIVES[161] = {
  title: "Event Sourcing",
  icon: "📜",
  tag: "architecture",
  slides: [
    { type: "hook", typeLabel: "Why It Matters", title: "Store Every State Change", content: [
      { kind: "text", value: "Traditional databases store <strong>current state</strong>. Event sourcing stores <strong>every change that led to current state</strong>. Complete audit trail, time-travel debugging, and rebuilding any view of your data." },
      { kind: "stats", items: [
        { value: "100%", label: "audit trail -- every change recorded" },
        { value: "any", label: "point-in-time state can be reconstructed" },
        { value: "N", label: "read models buildable from the same event stream" }
      ] },
      { kind: "sources", items: ["Greg Young, 'Event Sourcing', 2010", "Martin Fowler, 'Event Sourcing', martinfowler.com"] }
    ] },
    { type: "problem", typeLabel: "The Problem", title: "Lost History", content: [
      { kind: "text", value: "With CRUD, you overwrite state. Why was this order cancelled? When did the price change? The answers are <strong>gone</strong> unless you built custom audit logging." },
      { kind: "bullets", items: [
        "<strong>Overwritten state</strong> — Previous states are overwritten -- no history",
        "<strong>Drifting audits</strong> — Audit trails drift from reality",
        "<strong>Blind debugging</strong> — Debugging requires guessing what happened",
        "<strong>Costly migrations</strong> — New read models require expensive data migrations"
      ] }
    ] },
    { type: "concepts", typeLabel: "Core Concepts", title: "Event Sourcing Fundamentals", content: [
      { kind: "bullets", items: [
        "<strong>Event Store</strong> — Append-only log of domain events, never deleted or modified",
        "<strong>Aggregate</strong> — Entity whose state is rebuilt by replaying its events",
        "<strong>Projection</strong> — Read model built by processing events",
        "<strong>Snapshot</strong> — Periodic checkpoint to avoid replaying all events",
        "<strong>Idempotent Replay</strong> — Projections can be rebuilt from scratch"
      ] },
      { kind: "callout", style: "warning", value: "Event sourcing adds significant complexity. Do NOT use it for: simple CRUD domains, systems where history has no business value, or teams unfamiliar with eventual consistency. It shines in: finance, compliance, collaborative editing, and undo-heavy workflows." },
      { kind: "sources", items: ["Martin Kleppmann, 'Designing Data-Intensive Applications', Ch. 11"] }
    ] },
    { type: "how", typeLabel: "How It Works", title: "Event Sourcing in Code", content: [
      { kind: "code", value: "const events = [\n  { type: 'AccountOpened', data: { id: 'a1', owner: 'Alice' }, ts: '2024-01-01' },\n  { type: 'MoneyDeposited', data: { amount: 1000 }, ts: '2024-01-02' },\n  { type: 'MoneyWithdrawn', data: { amount: 200 }, ts: '2024-01-03' },\n  { type: 'MoneyDeposited', data: { amount: 500 }, ts: '2024-01-04' },\n];\n\nfunction buildAccount(events) {\n  return events.reduce((state, e) => {\n    switch (e.type) {\n      case 'AccountOpened':  return { ...e.data, balance: 0 };\n      case 'MoneyDeposited': return { ...state, balance: state.balance + e.data.amount };\n      case 'MoneyWithdrawn': return { ...state, balance: state.balance - e.data.amount };\n      default: return state;\n    }\n  }, {});\n}\n// Result: { id: 'a1', owner: 'Alice', balance: 1300 }\n// Time-travel: replay first 3 events -> balance: 800" }
    ] },
    { type: "example", typeLabel: "Real-World Example", title: "Banking Ledgers", content: [
      { kind: "text", value: "Every bank account is event-sourced: the ledger is a sequence of credits and debits. Balance is a <strong>projection</strong> derived by replaying transactions." },
      { kind: "bullets", items: [
        "<strong>Append-only by law</strong> — Bank ledgers are append-only by regulation",
        "<strong>Derived balance</strong> — Balance is rebuilt by summing all transaction events",
        "<strong>Audit compliance</strong> — Regulatory audits require full history",
        "<strong>Time-travel queries</strong> — Point-in-time balance queries for any date"
      ] },
      { kind: "sources", items: ["Pat Helland, 'Immutability Changes Everything', ACM Queue, 2015"] }
    ] },
    { type: "guide", typeLabel: "Step-by-Step Guide", title: "Introducing Event Sourcing", content: [
      { kind: "bullets", items: [
        "<strong>Find high-value domain</strong> — Step 1: Identify a domain where history has clear business value",
        "<strong>Define immutable events</strong> — Step 2: Define events as immutable facts (past tense: OrderPlaced)",
        "<strong>Choose event store</strong> — Step 3: Implement an event store (EventStoreDB, Kafka, or append-only table)",
        "<strong>Build projections</strong> — Step 4: Build projections that consume events into read views",
        "<strong>Add snapshots</strong> — Step 5: Add snapshots when replay gets slow (every ~100 events)",
        "<strong>Pair with CQRS</strong> — Step 6: Pair with CQRS for independent read/write optimization"
      ] },
      { kind: "callout", style: "warning", value: "Start with ONE aggregate in ONE bounded context. Do NOT event-source your entire system." }
    ] },
    { type: "practices", typeLabel: "Best Practices", title: "Event Sourcing Rules", content: [
      { kind: "bullets", items: [
        "<strong>Immutable events</strong> — ✅ Events are immutable -- append compensating events instead of updating",
        "<strong>Version schemas</strong> — ✅ Version event schemas for backward compatibility",
        "✅ Add snapshots when replay exceeds 1s",
        "<strong>Business value only</strong> — ✅ Use only where audit/undo/time-travel has clear business value",
        "<strong>Skip for CRUD</strong> — ❌ Don't event-source simple CRUD with no audit needs",
        "❌ Don't store UI state as events",
        "<strong>Team readiness</strong> — ❌ Don't adopt if team is uncomfortable with eventual consistency"
      ] }
    ] },
    { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [
      { kind: "bullets", items: [
        "<strong>Event-sourcing everything</strong> — Most domains are fine with CRUD",
        "<strong>Mutable events</strong> — Updating events destroys audit trail and breaks projections",
        "<strong>Missing snapshots</strong> — Replaying 1M events per request",
        "<strong>Schema neglect</strong> — Old events unreadable after schema changes"
      ] }
    ] },
    { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
      { kind: "bullets", items: [
        "<strong>Find lost history</strong> — Identify one domain where you've lost important state history",
        "<strong>List lifecycle events</strong> — List the events that capture the full lifecycle of that entity",
        "<strong>Prototype replay</strong> — Prototype an in-memory event store with replay",
        "<strong>Evaluate ROI</strong> — Evaluate: does the complexity pay for itself?"
      ] }
    ] },
    { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
      { kind: "bullets", items: [
        "<strong>Complete history</strong> — Event sourcing stores every state change, not just current state.",
        "<strong>Derived state</strong> — State is derived by replaying events -- enabling audit, time-travel, flexible projections.",
        "<strong>Selective adoption</strong> — Only use where history has clear business value (finance, compliance, collaboration).",
        "<strong>Production essentials</strong> — Pair with CQRS and snapshots for production systems."
      ] },
      { kind: "quality", items: [
        { label: "Actionability", score: 4 },
        { label: "Correctness", score: 5 },
        { label: "Visual Appeal", score: 4 },
        { label: "Engagement", score: 5 }
      ] }
    ] }
  ]
};

window.DEEP_DIVES[162] = {
  title: "Outbox Pattern vs Change Data Capture",
  icon: "🔀",
  tag: "data",
  slides: [
    { type: "hook", typeLabel: "Why It Matters", title: "Two Solutions, One Problem", content: [
      { kind: "text", value: "Both the Outbox pattern and CDC solve the dual-write problem. Choosing wrong adds unnecessary complexity or leaves you with <strong>unreliable event propagation</strong>." },
      { kind: "stats", items: [
        { value: "2", label: "proven approaches to reliable event publishing" },
        { value: "ms", label: "latency with CDC vs. seconds with polling" },
        { value: "0", label: "app code changes needed with pure CDC" }
      ] }
    ] },
    { type: "problem", typeLabel: "The Problem", title: "Getting Data Out Reliably", content: [
      { kind: "text", value: "Your service writes to a database. Others need to know. You must guarantee the event publishes exactly when the DB write commits, with <strong>zero data loss</strong>." },
      { kind: "bullets", items: [
        "<strong>Polling overhead</strong> — Polling outbox adds latency and DB load",
        "<strong>CDC infrastructure</strong> — CDC requires infrastructure (Debezium) that must be operated",
        "<strong>Different trade-offs</strong> — Different failure modes and operational costs",
        "<strong>Wrong choice cost</strong> — Wrong choice means lost events or unnecessary complexity"
      ] }
    ] },
    { type: "concepts", typeLabel: "Core Concepts", title: "Comparison", content: [
      { kind: "bullets", items: [
        "<strong>Outbox (App-Level)</strong> — App writes events to outbox table in same DB transaction. Relay polls and publishes.",
        "<strong>CDC (Infra-Level)</strong> — Debezium reads the WAL and streams changes to Kafka. No app changes.",
        "<strong>Hybrid (Best Practice)</strong> — Write to outbox table, use CDC to read it. You control schema + get real-time.",
        "<strong>Key Difference</strong> — Outbox = you control event schema. Raw CDC = exposes DB internals."
      ] },
      { kind: "callout", style: "insight", value: "The hybrid approach (outbox table + CDC reader) is becoming the industry standard." }
    ] },
    { type: "how", typeLabel: "How It Works", title: "Three Approaches", content: [
      { kind: "code", value: "// 1. OUTBOX + POLLING\nBEGIN;\n  INSERT INTO orders (...);\n  INSERT INTO outbox (type, payload) VALUES ('OrderPlaced', '...');\nCOMMIT;\n// Relay polls: SELECT * FROM outbox WHERE published_at IS NULL;\n\n// 2. RAW CDC (Debezium)\nBEGIN;\n  INSERT INTO orders (...);  // no outbox needed\nCOMMIT;\n// Debezium reads WAL -> streams INSERT to Kafka\n// Problem: event schema = internal DB schema\n\n// 3. OUTBOX + CDC (Best of both)\nBEGIN;\n  INSERT INTO orders (...);\n  INSERT INTO outbox (type, payload) VALUES ('OrderPlaced', '...');\nCOMMIT;\n// Debezium reads outbox changes from WAL -> Kafka\n// You control schema + real-time delivery" }
    ] },
    { type: "example", typeLabel: "Real-World Example", title: "Debezium Outbox Event Router", content: [
      { kind: "text", value: "Debezium provides a built-in <strong>Outbox Event Router</strong> that combines both patterns automatically." },
      { kind: "bullets", items: [
        "You write to a standard outbox table",
        "Debezium reads it via CDC (WAL)",
        "<strong>Clean transformation</strong> — Outbox Event Router transforms raw events into clean domain events",
        "<strong>Custom schema</strong> — Published events have your custom schema, not DB schema"
      ] },
      { kind: "sources", items: ["Debezium Docs, 'Outbox Event Router'", "Gunnar Morling, 'Reliable Microservices Data Exchange With the Outbox Pattern'"] }
    ] },
    { type: "guide", typeLabel: "Step-by-Step Guide", title: "Decision Framework", content: [
      { kind: "bullets", items: [
        "<strong>Schema control</strong> — Step 1: Need to control event schema? -> Outbox pattern",
        "<strong>Real-time delivery</strong> — Step 2: Want real-time + can operate Debezium? -> CDC to read the outbox",
        "<strong>All DB changes</strong> — Step 3: Need ALL DB changes (not just business events)? -> Raw CDC",
        "<strong>Start simple</strong> — Step 4: Start with polling outbox, graduate to CDC when latency matters",
        "<strong>Schema registry</strong> — Step 5: Add schema registry for event evolution",
        "<strong>Monitor lag</strong> — Step 6: Monitor relay/CDC lag and alert on delays"
      ] }
    ] },
    { type: "practices", typeLabel: "Best Practices", title: "Rules", content: [
      { kind: "bullets", items: [
        "<strong>Outbox for control</strong> — ✅ Outbox for explicit control over events",
        "<strong>CDC for legacy</strong> — ✅ CDC for capturing changes from legacy systems you can't modify",
        "<strong>Hybrid approach</strong> — ✅ Combine outbox + CDC for best of both",
        "<strong>Hide DB internals</strong> — ❌ Don't expose raw DB schema as domain events",
        "<strong>Business events</strong> — ❌ Don't use raw CDC if consumers need business-level events",
        "<strong>Right-size infra</strong> — ❌ Don't run Debezium if polling meets your latency SLA"
      ] }
    ] },
    { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Mistakes", content: [
      { kind: "bullets", items: [
        "<strong>Exposing internals</strong> — Raw CDC leaks table structure, creating coupling",
        "<strong>Connector failures</strong> — Debezium can fall behind if not monitored",
        "<strong>Outbox bloat</strong> — Forgetting to clean up published rows",
        "<strong>Schema drift</strong> — DB changes break CDC consumers silently"
      ] }
    ] },
    { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
      { kind: "bullets", items: [
        "<strong>Audit event publishing</strong> — Inventory your event publishing -- any dual writes?",
        "<strong>Evaluate needs</strong> — Evaluate: need app-level events (outbox) or row changes (CDC)?",
        "<strong>Benchmark CDC</strong> — If using polling outbox, benchmark replacing with CDC",
        "<strong>Monitor lag</strong> — Set up monitoring for event publishing lag"
      ] }
    ] },
    { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
      { kind: "bullets", items: [
        "<strong>Schema vs speed</strong> — Outbox gives you event schema control; CDC gives you real-time delivery.",
        "<strong>Hybrid is best</strong> — The hybrid (outbox + CDC) is the industry best practice.",
        "<strong>Start with polling</strong> — Start with polling outbox. Graduate to CDC when latency matters.",
        "<strong>Hide DB schema</strong> — Never expose raw DB schema as domain events."
      ] },
      { kind: "quality", items: [
        { label: "Actionability", score: 5 },
        { label: "Correctness", score: 5 },
        { label: "Visual Appeal", score: 4 },
        { label: "Engagement", score: 4 }
      ] }
    ] }
  ]
};

window.DEEP_DIVES[163] = {
  title: "Change Data Capture (CDC)",
  icon: "📊",
  tag: "data",
  slides: [
    { type: "hook", typeLabel: "Why It Matters", title: "Stream Database Changes in Real Time", content: [
      { kind: "text", value: "CDC reads your database's transaction log and streams every INSERT, UPDATE, DELETE to downstream systems in <strong>real time</strong>. No polling, no app changes, no missed events." },
      { kind: "stats", items: [
        { value: "<100ms", label: "typical CDC latency" },
        { value: "0", label: "application code changes" },
        { value: "10K+", label: "companies using Debezium" }
      ] },
      { kind: "sources", items: ["Debezium Documentation", "Martin Kleppmann, 'Using logs to build a solid data infrastructure'"] }
    ] },
    { type: "problem", typeLabel: "The Problem", title: "Keeping Systems in Sync", content: [
      { kind: "text", value: "Data in PostgreSQL also needs to be in Elasticsearch, Redis, and your warehouse. Batch ETL is slow. Dual writes are unreliable." },
      { kind: "bullets", items: [
        "<strong>Stale batch ETL</strong> — Batch ETL runs hourly -- data always stale",
        "<strong>Dual write risk</strong> — Dual writes create inconsistency",
        "<strong>Missed changes</strong> — App-level tracking misses direct DB changes",
        "<strong>Legacy limitation</strong> — Legacy systems can't publish events"
      ] }
    ] },
    { type: "concepts", typeLabel: "Core Concepts", title: "CDC Mechanics", content: [
      { kind: "bullets", items: [
        "<strong>WAL/Binlog</strong> — Database transaction log records every change before applying",
        "<strong>Log-based CDC</strong> — Read the WAL without impacting DB (Debezium, Maxwell)",
        "<strong>Connector</strong> — Debezium connectors for PostgreSQL, MySQL, MongoDB, etc.",
        "<strong>Kafka Connect</strong> — Framework for running CDC connectors at scale",
        "<strong>Schema Registry</strong> — Tracks and versions CDC event schemas"
      ] },
      { kind: "sources", items: ["LinkedIn Engineering, 'Databus: LinkedIn's CDC System'"] }
    ] },
    { type: "how", typeLabel: "How It Works", title: "Debezium Pipeline", content: [
      { kind: "code", value: "// Debezium connector config\n{\n  \"name\": \"orders-connector\",\n  \"config\": {\n    \"connector.class\": \"io.debezium.connector.postgresql.PostgresConnector\",\n    \"database.hostname\": \"db.example.com\",\n    \"database.dbname\": \"orders_db\",\n    \"table.include.list\": \"public.orders\",\n    \"topic.prefix\": \"app\",\n    \"plugin.name\": \"pgoutput\"\n  }\n}\n\n// CDC event on Kafka topic: app.public.orders\n{\n  \"op\": \"c\",  // c=create, u=update, d=delete\n  \"before\": null,\n  \"after\": { \"id\": 42, \"user_id\": 7, \"total\": 99.99 },\n  \"source\": { \"ts_ms\": 1700000000000 }\n}" }
    ] },
    { type: "example", typeLabel: "Real-World Example", title: "LinkedIn's Databus", content: [
      { kind: "text", value: "LinkedIn built Databus to stream DB changes to search, caches, and derived stores. It inspired Debezium and modern CDC tools." },
      { kind: "bullets", items: [
        "<strong>Multi-database capture</strong> — Captures changes from Oracle and MySQL",
        "<strong>Real-time feeds</strong> — Feeds real-time updates to search, social graph, recommendations",
        "<strong>Massive scale</strong> — Millions of change events per second",
        "<strong>Industry influence</strong> — Inspired Kafka Connect and Debezium"
      ] },
      { kind: "sources", items: ["LinkedIn Engineering Blog, 'Databus'"] }
    ] },
    { type: "guide", typeLabel: "Step-by-Step Guide", title: "Setting Up CDC", content: [
      { kind: "bullets", items: [
        "<strong>Enable replication</strong> — Step 1: Enable logical replication (PostgreSQL: wal_level = logical)",
        "<strong>Deploy connector</strong> — Step 2: Deploy Kafka Connect with Debezium connector",
        "<strong>Configure tables</strong> — Step 3: Configure connector for specific tables",
        "<strong>Consume events</strong> — Step 4: Consume CDC events in downstream services",
        "<strong>Schema registry</strong> — Step 5: Add schema registry for event versioning",
        "<strong>Monitor health</strong> — Step 6: Monitor connector lag and replication slot size"
      ] }
    ] },
    { type: "practices", typeLabel: "Best Practices", title: "CDC Rules", content: [
      { kind: "bullets", items: [
        "<strong>Log-based CDC</strong> — ✅ Use log-based CDC (not triggers or polling) in production",
        "<strong>Monitor slots</strong> — ✅ Monitor replication slot growth -- unbounded slots fill disk",
        "<strong>Outbox + CDC</strong> — ✅ Use outbox + CDC for clean domain events",
        "<strong>Transform first</strong> — ❌ Don't expose raw CDC to business consumers -- transform first",
        "<strong>Schema evolution</strong> — ❌ Don't skip schema evolution handling",
        "<strong>Connector monitoring</strong> — ❌ Don't run CDC without monitoring connector health"
      ] }
    ] },
    { type: "pitfalls", typeLabel: "Common Pitfalls", title: "CDC Anti-Patterns", content: [
      { kind: "bullets", items: [
        "<strong>Slot bloat</strong> — Paused connector causes WAL to accumulate, filling disk",
        "<strong>Schema coupling</strong> — Consumers depend on DB schema; ALTER TABLE breaks them",
        "<strong>Missing tombstones</strong> — DELETE events need special handling",
        "<strong>Connector drift</strong> — Lost position requires full re-snapshot"
      ] }
    ] },
    { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
      { kind: "bullets", items: [
        "<strong>Find batch sync</strong> — Find one sync flow using batch ETL or dual writes",
        "<strong>Try Debezium</strong> — Set up Debezium in dev for that database",
        "<strong>Build downstream view</strong> — Consume events to build a downstream view",
        "<strong>Compare latency</strong> — Compare latency with your current approach"
      ] }
    ] },
    { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
      { kind: "bullets", items: [
        "<strong>Real-time streaming</strong> — CDC reads the transaction log to stream changes in real time.",
        "<strong>Debezium standard</strong> — Debezium is the industry standard for open-source CDC.",
        "<strong>Clean events</strong> — Combine with outbox pattern for clean domain events.",
        "<strong>Monitor religiously</strong> — Monitor replication slots and connector health religiously."
      ] },
      { kind: "quality", items: [
        { label: "Actionability", score: 5 },
        { label: "Correctness", score: 5 },
        { label: "Visual Appeal", score: 4 },
        { label: "Engagement", score: 4 }
      ] }
    ] }
  ]
};

window.DEEP_DIVES[164] = {
  title: "The Sidecar Pattern",
  icon: "🏍️",
  tag: "architecture",
  slides: [
    { type: "hook", typeLabel: "Why It Matters", title: "Extend Services Without Changing Them", content: [
      { kind: "text", value: "Instead of baking logging, mTLS, metrics, and service discovery into every service, attach a <strong>sidecar process</strong> that handles cross-cutting concerns." },
      { kind: "stats", items: [
        { value: "0", label: "lines of code changed in the main service" },
        { value: "1", label: "sidecar per instance handles all infra concerns" },
        { value: "Envoy", label: "the most popular sidecar proxy" }
      ] },
      { kind: "sources", items: ["Microsoft Azure, 'Sidecar Pattern'", "Envoy Proxy, envoyproxy.io"] }
    ] },
    { type: "problem", typeLabel: "The Problem", title: "Cross-Cutting Concerns", content: [
      { kind: "text", value: "Every service needs TLS, tracing, rate limiting, retries. Implementing these per-service, per-language creates <strong>inconsistency and maintenance burden</strong>." },
      { kind: "bullets", items: [
        "<strong>Inconsistent tracing</strong> — Java uses one tracing library; Python uses another",
        "<strong>mTLS fragmentation</strong> — mTLS differs across 5 languages in your fleet",
        "<strong>Change amplification</strong> — Updating retry policy requires changes to 40 services",
        "<strong>Boilerplate duplication</strong> — New services re-implement the same boilerplate"
      ] }
    ] },
    { type: "concepts", typeLabel: "Core Concepts", title: "Sidecar Architecture", content: [
      { kind: "bullets", items: [
        "<strong>Sidecar</strong> — Helper process deployed alongside main service in the same pod/VM",
        "<strong>Transparent Proxy</strong> — Intercepts all network traffic",
        "<strong>Service Mesh</strong> — Fleet of sidecars forming network infrastructure (Istio, Linkerd)",
        "<strong>Locality</strong> — Communicates via localhost (no network hops)",
        "<strong>Lifecycle Coupling</strong> — Deployed and scaled with the main service"
      ] },
      { kind: "callout", style: "insight", value: "The sidecar pattern is the foundation of the service mesh. Every Istio service has an Envoy sidecar." }
    ] },
    { type: "how", typeLabel: "How It Works", title: "Kubernetes Sidecar", content: [
      { kind: "code", value: "# Pod with sidecar\napiVersion: v1\nkind: Pod\nspec:\n  containers:\n  - name: order-service\n    image: order-service:1.0\n    ports: [{ containerPort: 8080 }]\n  - name: envoy-sidecar\n    image: envoyproxy/envoy:v1.28\n    ports:\n    - containerPort: 15001  # inbound\n    - containerPort: 15006  # outbound\n    # Handles: mTLS, retries, circuit breaking,\n    # load balancing, metrics, tracing" }
    ] },
    { type: "example", typeLabel: "Real-World Example", title: "Lyft's Envoy", content: [
      { kind: "text", value: "Lyft created Envoy as a sidecar proxy. It now powers <strong>Istio, AWS App Mesh, and most service meshes</strong>." },
      { kind: "bullets", items: [
        "<strong>Full networking stack</strong> — Handles mTLS, load balancing, retries, circuit breaking",
        "<strong>Topology abstraction</strong> — Services communicate through Envoy without knowing network topology",
        "<strong>Consistent observability</strong> — Consistent observability: every request traced by sidecar",
        "<strong>Language-agnostic</strong> — Language-agnostic: same sidecar for Java, Go, Python"
      ] },
      { kind: "sources", items: ["Matt Klein, 'Envoy Proxy', Lyft Engineering Blog"] }
    ] },
    { type: "guide", typeLabel: "Step-by-Step Guide", title: "Adding a Sidecar", content: [
      { kind: "bullets", items: [
        "<strong>Identify concern</strong> — Step 1: Identify the cross-cutting concern to externalize",
        "<strong>Choose sidecar</strong> — Step 2: Choose a sidecar (Envoy for networking, Fluentd for logging)",
        "<strong>Co-deploy</strong> — Step 3: Deploy in the same pod/VM as your service",
        "<strong>Route traffic</strong> — Step 4: Route traffic through the sidecar",
        "<strong>Remove app logic</strong> — Step 5: Remove equivalent logic from application code",
        "<strong>Monitor resources</strong> — Step 6: Monitor sidecar resource usage"
      ] }
    ] },
    { type: "practices", typeLabel: "Best Practices", title: "Sidecar Rules", content: [
      { kind: "bullets", items: [
        "<strong>Cross-cutting only</strong> — ✅ Use for cross-cutting concerns: networking, security, observability",
        "<strong>Centralize config</strong> — ✅ Centralize sidecar configuration (control plane)",
        "<strong>Capacity planning</strong> — ✅ Include sidecar resources in capacity planning",
        "<strong>No business logic</strong> — ❌ Don't put business logic in the sidecar",
        "<strong>Startup ordering</strong> — ❌ Don't ignore startup ordering (main app before sidecar ready)",
        "<strong>Avoid over-adoption</strong> — ❌ Don't adopt full service mesh if you only need one capability"
      ] }
    ] },
    { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [
      { kind: "bullets", items: [
        "<strong>Resource overhead</strong> — Each sidecar uses CPU/memory; at 1K pods it adds up",
        "<strong>Startup race</strong> — Main service starts before sidecar is ready",
        "<strong>Debug confusion</strong> — Errors in sidecar misattributed to service",
        "<strong>Over-adoption</strong> — Full service mesh for 5 services is overkill"
      ] }
    ] },
    { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
      { kind: "bullets", items: [
        "<strong>Find duplication</strong> — Identify cross-cutting concerns duplicated across services",
        "<strong>Evaluate sidecar fit</strong> — Evaluate if a sidecar could centralize one of them",
        "<strong>Deploy in dev</strong> — Deploy an Envoy sidecar alongside one service in dev",
        "<strong>Measure overhead</strong> — Measure latency overhead of routing through sidecar"
      ] }
    ] },
    { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
      { kind: "bullets", items: [
        "<strong>No code changes</strong> — Sidecars handle cross-cutting concerns without changing service code.",
        "<strong>Localhost communication</strong> — Deployed alongside the service, communicating via localhost.",
        "<strong>Mesh foundation</strong> — Foundation of service mesh architecture (Istio, Linkerd).",
        "<strong>Watch overhead</strong> — Watch for resource overhead and startup ordering issues."
      ] },
      { kind: "quality", items: [
        { label: "Actionability", score: 5 },
        { label: "Correctness", score: 5 },
        { label: "Visual Appeal", score: 4 },
        { label: "Engagement", score: 5 }
      ] }
    ] }
  ]
};

window.DEEP_DIVES[165] = {
  title: "The Modular Monolith",
  icon: "🏗️",
  tag: "architecture",
  slides: [
    { type: "hook", typeLabel: "Why It Matters", title: "Best of Both Worlds", content: [
      { kind: "text", value: "Microservices add distributed complexity. Monoliths become spaghetti. The modular monolith gives you <strong>clean boundaries with monolith simplicity</strong>." },
      { kind: "stats", items: [
        { value: "1", label: "deployment unit -- simple ops" },
        { value: "0", label: "network calls between modules" },
        { value: "N", label: "independent modules with clear boundaries" }
      ] },
      { kind: "sources", items: ["Simon Brown, 'Modular Monoliths', NDC Conference", "Shopify Engineering, 'Deconstructing the Monolith'"] }
    ] },
    { type: "problem", typeLabel: "The Problem", title: "The False Dichotomy", content: [
      { kind: "text", value: "Teams think: tangled monolith or microservices. But most <strong>microservice benefits come from module boundaries</strong>, not network calls." },
      { kind: "bullets", items: [
        "<strong>Microservice overhead</strong> — Microservices add latency, distributed tracing, deployment complexity",
        "<strong>Monolith spaghetti</strong> — Traditional monoliths allow any code to call anything",
        "<strong>Premature splitting</strong> — Teams split too early before understanding domains",
        "<strong>Best of both</strong> — Modular monolith: define boundaries first, extract later if needed"
      ] }
    ] },
    { type: "concepts", typeLabel: "Core Concepts", title: "Structure", content: [
      { kind: "bullets", items: [
        "<strong>Module</strong> — Self-contained unit with own domain logic, data access, public API",
        "<strong>Module Boundary</strong> — Communication through public interfaces only",
        "<strong>Private Data</strong> — Each module owns its tables; no cross-module queries",
        "<strong>In-Process Communication</strong> — Function calls or in-memory events",
        "<strong>Extractability</strong> — Well-designed modules can become services later"
      ] },
      { kind: "callout", style: "insight", value: "Shopify runs a modular monolith serving billions in commerce. You don't need microservices to scale." }
    ] },
    { type: "how", typeLabel: "How It Works", title: "Module Structure", content: [
      { kind: "code", value: "/src/modules\n  /orders\n    /public           # Public API\n      OrderService.ts\n      OrderDTO.ts\n    /internal          # Private implementation\n      OrderRepository.ts\n      OrderValidator.ts\n  /payments\n    /public\n      PaymentService.ts\n    /internal\n      StripeAdapter.ts\n  /inventory\n    /public\n      InventoryService.ts\n    /internal\n      StockRepository.ts\n\n// ALLOWED:  import { PaymentService } from '@modules/payments/public'\n// BANNED:   import { StripeAdapter } from '@modules/payments/internal'" }
    ] },
    { type: "example", typeLabel: "Real-World Example", title: "Shopify's Approach", content: [
      { kind: "text", value: "Shopify <strong>modularized their Rails monolith</strong> instead of splitting into microservices." },
      { kind: "bullets", items: [
        "<strong>Build-time enforcement</strong> — Packwerk gem enforces module boundaries at build time",
        "<strong>Data ownership</strong> — Each module owns its database tables",
        "<strong>Public interfaces</strong> — Modules communicate through public Ruby interfaces",
        "<strong>Fast deploys</strong> — Monolith deploys in minutes vs. hours of coordinated releases"
      ] },
      { kind: "sources", items: ["Shopify Engineering, 'Deconstructing the Monolith'"] }
    ] },
    { type: "guide", typeLabel: "Step-by-Step Guide", title: "Building It", content: [
      { kind: "bullets", items: [
        "<strong>Identify contexts</strong> — Step 1: Identify bounded contexts (orders, payments, inventory)",
        "<strong>Create structure</strong> — Step 2: Create /modules directory with one folder per context",
        "<strong>Define interfaces</strong> — Step 3: Define public interfaces for each module",
        "<strong>Enforce encapsulation</strong> — Step 4: Move code in, enforce no external imports of internals",
        "<strong>Automate checks</strong> — Step 5: Add build-time checks for boundary enforcement",
        "<strong>Separate schemas</strong> — Step 6: Give each module its own schema or table prefix"
      ] }
    ] },
    { type: "practices", typeLabel: "Best Practices", title: "Rules", content: [
      { kind: "bullets", items: [
        "<strong>Tooling enforcement</strong> — ✅ Enforce boundaries with tooling (Packwerk, ArchUnit, eslint)",
        "✅ Each module owns its data",
        "<strong>Public interfaces only</strong> — ✅ Communicate through public interfaces only",
        "✅ Start modular from day one",
        "<strong>Real boundaries</strong> — ❌ Don't treat modules as just namespaces",
        "❌ Don't skip boundary enforcement"
      ] }
    ] },
    { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [
      { kind: "bullets", items: [
        "<strong>Leaky boundaries</strong> — Modules import internals, destroying encapsulation",
        "<strong>Shared tables</strong> — Multiple modules read/write the same table",
        "<strong>No enforcement</strong> — Boundaries in docs but not tooling",
        "<strong>God module</strong> — One module everything depends on"
      ] }
    ] },
    { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
      { kind: "bullets", items: [
        "Map your codebase to 3-5 bounded contexts",
        "Move one domain into a /modules folder",
        "Define its public interface",
        "Add a lint rule preventing internal imports"
      ] }
    ] },
    { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
      { kind: "bullets", items: [
        "<strong>Best of both</strong> — Modular monolith: microservice boundaries with monolith simplicity.",
        "<strong>Data ownership</strong> — Modules own their data and communicate through public interfaces.",
        "<strong>Tooling over docs</strong> — Enforce boundaries with tooling, not documentation.",
        "<strong>Extractable later</strong> — Well-designed modules can become services later if needed."
      ] },
      { kind: "quality", items: [
        { label: "Actionability", score: 5 },
        { label: "Correctness", score: 5 },
        { label: "Visual Appeal", score: 4 },
        { label: "Engagement", score: 5 }
      ] }
    ] }
  ]
};

window.DEEP_DIVES[166] = {
  title: "Microservices: The Real Cost",
  icon: "💸",
  tag: "contrarian",
  slides: [
    { type: "hook", typeLabel: "Why It Matters", title: "What the Evangelists Don't Tell You", content: [
      { kind: "text", value: "Microservices solve organizational scaling but introduce <strong>distributed systems complexity</strong> that most teams underestimate. The real cost isn't the architecture -- it's operating it at 3 AM." },
      { kind: "stats", items: [
        { value: "10x", label: "more operational complexity vs. monolith" },
        { value: "$100K+", label: "annual tooling cost for observability alone" },
        { value: "2-3x", label: "more engineers needed for the same feature velocity" }
      ] }
    ] },
    { type: "problem", typeLabel: "The Problem", title: "Distributed Complexity Explosion", content: [
      { kind: "text", value: "You traded one monolith for 50 services. Now you have 50 deployment pipelines, 50 databases, and 2,450 possible network failure paths." },
      { kind: "bullets", items: [
        "<strong>Network failures</strong> — Every service-to-service call can fail, timeout, or return stale data",
        "<strong>Hard transactions</strong> — Distributed transactions are orders of magnitude harder than local ones",
        "<strong>Scattered debugging</strong> — Debugging spans 20 services across 3 log systems",
        "<strong>Cross-team changes</strong> — A simple feature change touches 4 services and 4 teams"
      ] }
    ] },
    { type: "concepts", typeLabel: "Core Concepts", title: "The Hidden Costs", content: [
      { kind: "bullets", items: [
        "<strong>Network Overhead</strong> — Function calls become HTTP/gRPC calls with serialization, latency, and failure modes",
        "<strong>Data Consistency</strong> — No ACID across services; sagas and eventual consistency are much harder",
        "<strong>Operational Burden</strong> — Each service needs CI/CD, monitoring, alerting, and on-call",
        "<strong>Cognitive Load</strong> — Developers must understand distributed systems to be productive",
        "<strong>Testing Complexity</strong> — Integration testing across services requires shared environments"
      ] },
      { kind: "callout", style: "insight", value: "Ask yourself: are you splitting services because you need independent deployment and scaling, or because a blog post said so?" }
    ] },
    { type: "how", typeLabel: "How It Works", title: "When to Use Microservices", content: [
      { kind: "code", value: "// Decision framework\nconst shouldUseMicroservices = (\n  teamSize > 20 &&              // Enough people to own services\n  deploymentConflicts > 5/week && // Monolith deploys are bottleneck\n  scalingNeedsVary &&            // Different parts need different scaling\n  domainBoundariesClear &&       // You understand your domains\n  canOperateDistributed          // Team has distributed systems skills\n);\n\n// If any of these are false:\n// -> Use a modular monolith instead\n// -> Extract services only when the pain justifies the cost" }
    ] },
    { type: "example", typeLabel: "Real-World Example", title: "Segment's Return to Monolith", content: [
      { kind: "text", value: "Segment moved from a monolith to microservices, then <strong>moved back to a monolith</strong> because the operational cost exceeded the benefits." },
      { kind: "bullets", items: [
        "<strong>Over-split team</strong> — 140+ microservices for a 40-person engineering team",
        "<strong>Operational burden</strong> — Each service had its own CI/CD, monitoring, and on-call rotation",
        "<strong>Slowed velocity</strong> — Feature development slowed because every change spanned multiple services",
        "<strong>Re-consolidated</strong> — Consolidated back to a monolith with dramatic improvement in velocity"
      ] },
      { kind: "sources", items: ["Alexandra Noonan, 'Goodbye Microservices: From 100s of Problem Children to 1 Superstar', Segment Blog"] }
    ] },
    { type: "guide", typeLabel: "Step-by-Step Guide", title: "Before You Microservice", content: [
      { kind: "bullets", items: [
        "<strong>Try monolith first</strong> — Step 1: Can you solve the problem with a modular monolith?",
        "<strong>Check boundaries</strong> — Step 2: Do you have clear, stable domain boundaries?",
        "<strong>Assess expertise</strong> — Step 3: Does your team have distributed systems expertise?",
        "<strong>Platform investment</strong> — Step 4: Can you invest in platform engineering (CI/CD, observability, service mesh)?",
        "<strong>Find bottleneck</strong> — Step 5: Is independent deployment the actual bottleneck?",
        "<strong>Extract one service</strong> — Step 6: If all answers are yes, extract ONE service and evaluate"
      ] }
    ] },
    { type: "practices", typeLabel: "Best Practices", title: "If You Must Microservice", content: [
      { kind: "bullets", items: [
        "<strong>Start monolith</strong> — ✅ Start with a monolith; extract services when pain demands it",
        "<strong>Platform first</strong> — ✅ Invest in platform engineering before splitting services",
        "<strong>Right-size services</strong> — ✅ Keep service count proportional to team size (1-2 services per team)",
        "<strong>Not per table</strong> — ❌ Don't create a service per database table",
        "<strong>Observability first</strong> — ❌ Don't split without distributed tracing and centralized logging",
        "<strong>Count the cost</strong> — ❌ Don't underestimate the cost of operating N services"
      ] }
    ] },
    { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [
      { kind: "bullets", items: [
        "<strong>Nano-services</strong> — Services so small they can't do anything useful alone",
        "<strong>Distributed monolith</strong> — Services that must be deployed together",
        "<strong>Shared database</strong> — Multiple services reading/writing the same tables",
        "<strong>FOMO-driven architecture</strong> — Splitting because 'everyone is doing it'"
      ] }
    ] },
    { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
      { kind: "bullets", items: [
        "<strong>Check ratio</strong> — Count your services and your engineers. Is the ratio sustainable?",
        "<strong>List pain points</strong> — List the pain points that drove you to microservices (or would drive you)",
        "<strong>Consider monolith</strong> — Ask: could a modular monolith solve these problems?",
        "<strong>Calculate cost</strong> — Calculate the operational cost of your current architecture"
      ] }
    ] },
    { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
      { kind: "bullets", items: [
        "<strong>High operational cost</strong> — Microservices solve organizational scaling but add enormous operational cost.",
        "<strong>Start monolith</strong> — Start with a modular monolith; extract services when pain demands it.",
        "<strong>Driven by needs</strong> — The decision should be driven by team size, deployment frequency, and scaling needs.",
        "<strong>Platform required</strong> — If you can't invest in platform engineering, you can't afford microservices."
      ] },
      { kind: "quality", items: [
        { label: "Actionability", score: 5 },
        { label: "Correctness", score: 5 },
        { label: "Visual Appeal", score: 4 },
        { label: "Engagement", score: 5 }
      ] }
    ] }
  ]
};

window.DEEP_DIVES[167] = {
  title: "Domain-Driven Design for System Architects",
  icon: "🗺️",
  tag: "architecture",
  slides: [
    { type: "hook", typeLabel: "Why It Matters", title: "DDD as Architecture, Not Religion", content: [
      { kind: "text", value: "DDD is not about entities and repositories. It is about <strong>discovering the right boundaries</strong> for your system. Get boundaries wrong and you get a distributed monolith. Get them right and teams move independently." },
      { kind: "stats", items: [
        { value: "#1", label: "cause of microservice failures: wrong service boundaries" },
        { value: "10x", label: "fewer cross-team dependencies with proper bounded contexts" },
        { value: "3", label: "DDD concepts that matter most: bounded context, aggregate, ubiquitous language" }
      ] },
      { kind: "sources", items: ["Eric Evans, 'Domain-Driven Design', Addison-Wesley, 2003", "Vaughn Vernon, 'Implementing Domain-Driven Design', Addison-Wesley"] }
    ] },
    { type: "problem", typeLabel: "The Problem", title: "Wrong Boundaries, Wrong Architecture", content: [
      { kind: "text", value: "Teams split services by technical layer (API service, DB service, auth service) instead of by domain. The result: <strong>every feature change requires coordinating 5 teams</strong>." },
      { kind: "bullets", items: [
        "<strong>Overloaded terms</strong> — A User entity means different things in billing vs. shipping vs. marketing",
        "<strong>Shared model pain</strong> — One 'shared' data model forces all teams to coordinate schema changes",
        "<strong>Technical layering</strong> — Services are split by technical layer, not business capability",
        "<strong>Wrong boundaries</strong> — Cross-service calls multiply because boundaries are wrong"
      ] }
    ] },
    { type: "concepts", typeLabel: "Core Concepts", title: "DDD for Architects", content: [
      { kind: "bullets", items: [
        "<strong>Bounded Context</strong> — A boundary within which a model is consistent. 'User' in billing != 'User' in shipping.",
        "<strong>Ubiquitous Language</strong> — Each context has its own vocabulary, shared by developers and domain experts.",
        "<strong>Aggregate</strong> — A cluster of entities treated as a unit for data consistency (e.g., Order + OrderItems).",
        "<strong>Context Map</strong> — How bounded contexts relate: shared kernel, customer-supplier, anti-corruption layer.",
        "<strong>Anti-Corruption Layer</strong> — Translation layer that prevents one context's model from leaking into another."
      ] },
      { kind: "callout", style: "insight", value: "The bounded context IS your service boundary. If you get this right, everything else follows." }
    ] },
    { type: "how", typeLabel: "How It Works", title: "Bounded Contexts in Practice", content: [
      { kind: "code", value: "// WRONG: Shared User model across all services\nclass User {\n  id; name; email; shippingAddress; creditScore;\n  billingPlan; marketingPreferences; loginHistory;\n  // Every team modifies this class\n}\n\n// RIGHT: Each bounded context has its own User model\n// Billing Context\nclass BillingCustomer {\n  customerId; billingPlan; paymentMethod; invoiceHistory;\n}\n\n// Shipping Context  \nclass ShippingRecipient {\n  recipientId; name; shippingAddress; deliveryPreferences;\n}\n\n// Marketing Context\nclass MarketingContact {\n  contactId; email; preferences; segments; lastEngagement;\n}\n\n// Anti-corruption layer translates between contexts\nclass BillingAntiCorruption {\n  toBillingCustomer(identityUser) {\n    return new BillingCustomer(identityUser.id, ...);\n  }\n}" }
    ] },
    { type: "example", typeLabel: "Real-World Example", title: "Amazon's Two-Pizza Teams", content: [
      { kind: "text", value: "Amazon's team structure mirrors bounded contexts. Each two-pizza team owns a <strong>business capability</strong> (cart, checkout, recommendations), not a technical layer." },
      { kind: "bullets", items: [
        "<strong>Context ownership</strong> — Each team owns a bounded context with its own data store",
        "<strong>Internal models</strong> — Teams define their own internal models and public APIs",
        "<strong>Translation layers</strong> — Anti-corruption layers translate between team boundaries",
        "<strong>Conway's Law</strong> — Conway's Law: team structure drives system architecture"
      ] },
      { kind: "sources", items: ["Eric Evans, 'Domain-Driven Design', Addison-Wesley", "Sam Newman, 'Building Microservices', O'Reilly, Ch. 3"] }
    ] },
    { type: "guide", typeLabel: "Step-by-Step Guide", title: "Applying DDD", content: [
      { kind: "bullets", items: [
        "<strong>Talk to experts</strong> — Step 1: Talk to domain experts -- understand the business, not just the code",
        "<strong>Find overloaded terms</strong> — Step 2: Identify where the same word means different things (User, Account, Order)",
        "<strong>Draw boundaries</strong> — Step 3: Draw bounded context boundaries around areas with distinct language",
        "<strong>Map relationships</strong> — Step 4: Define the relationships between contexts (context map)",
        "<strong>Add ACLs</strong> — Step 5: Add anti-corruption layers where contexts must communicate",
        "<strong>Align teams</strong> — Step 6: Align team ownership with bounded contexts"
      ] }
    ] },
    { type: "practices", typeLabel: "Best Practices", title: "DDD Rules", content: [
      { kind: "bullets", items: [
        "<strong>Business-driven bounds</strong> — ✅ Let business language drive boundaries, not technical layers",
        "<strong>Context owns data</strong> — ✅ Each bounded context owns its data and models",
        "<strong>Anti-corruption layers</strong> — ✅ Use anti-corruption layers between contexts",
        "<strong>Conway's Law</strong> — ✅ Align teams with bounded contexts (Conway's Law)",
        "<strong>No shared models</strong> — ❌ Don't create a single shared data model across all services",
        "<strong>Strategy before tactics</strong> — ❌ Don't apply DDD tactical patterns (entities, value objects) without strategic patterns (bounded contexts)"
      ] }
    ] },
    { type: "pitfalls", typeLabel: "Common Pitfalls", title: "DDD Anti-Patterns", content: [
      { kind: "bullets", items: [
        "<strong>DDD as religion</strong> — Over-applying tactical patterns to simple CRUD domains",
        "<strong>Shared kernel abuse</strong> — Two contexts sharing so much they are effectively one",
        "<strong>Technical boundaries</strong> — Splitting by layer (API, DB) instead of domain",
        "<strong>Anemic domain model</strong> — Entities with only getters/setters and no behavior"
      ] }
    ] },
    { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
      { kind: "bullets", items: [
        "<strong>Audit terminology</strong> — List 5 key terms in your system. Do they mean the same thing everywhere?",
        "<strong>Find conflicts</strong> — Identify where different teams use the same word differently",
        "<strong>Sketch contexts</strong> — Sketch 3-5 bounded contexts for your domain",
        "<strong>Draw context map</strong> — Draw the context map showing relationships between them"
      ] }
    ] },
    { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
      { kind: "bullets", items: [
        "<strong>Boundaries over patterns</strong> — DDD is about discovering the right boundaries, not implementing patterns.",
        "<strong>Context = boundary</strong> — Bounded contexts are your service boundaries. Get them right and everything follows.",
        "<strong>No shared models</strong> — Each context has its own model and language. Do not share data models.",
        "<strong>Team alignment</strong> — Align teams with bounded contexts (Conway's Law)."
      ] },
      { kind: "quality", items: [
        { label: "Actionability", score: 5 },
        { label: "Correctness", score: 5 },
        { label: "Visual Appeal", score: 4 },
        { label: "Engagement", score: 5 }
      ] }
    ] }
  ]
};

window.DEEP_DIVES[168] = {
  title: "Event Storming as a Design Tool",
  icon: "🌩️",
  tag: "architecture",
  slides: [
    { type: "hook", typeLabel: "Why It Matters", title: "Discover Your System in 2 Hours", content: [
      { kind: "text", value: "Event Storming is a collaborative workshop where developers and domain experts map business processes using sticky notes. In 2 hours, you uncover <strong>hidden complexity, missing requirements, and natural service boundaries</strong>." },
      { kind: "stats", items: [
        { value: "2-4h", label: "to map an entire business domain" },
        { value: "5-15", label: "participants from engineering and business" },
        { value: "80%", label: "of integration issues discovered before code is written" }
      ] },
      { kind: "sources", items: ["Alberto Brandolini, 'Introducing EventStorming', Leanpub", "Alberto Brandolini, 'EventStorming: An Introduction', eventstorming.com"] }
    ] },
    { type: "problem", typeLabel: "The Problem", title: "Architecture in a Vacuum", content: [
      { kind: "text", value: "Engineers design systems without deeply understanding the business domain. Requirements docs are stale. Domain experts are not consulted on architecture. The result: <strong>systems that don't match reality</strong>." },
      { kind: "bullets", items: [
        "<strong>Technical assumptions</strong> — Architecture designed from technical assumptions, not business reality",
        "<strong>Late edge cases</strong> — Edge cases discovered in production, not during design",
        "<strong>Implicit rules</strong> — Business rules are implicit in stakeholders' heads, not in the system",
        "<strong>Mismatched boundaries</strong> — Service boundaries don't match business process boundaries"
      ] }
    ] },
    { type: "concepts", typeLabel: "Core Concepts", title: "Event Storming Elements", content: [
      { kind: "bullets", items: [
        "<strong>Domain Event (Orange)</strong> — Something that happened: 'Order Placed', 'Payment Received'",
        "<strong>Command (Blue)</strong> — Action that triggers an event: 'Place Order', 'Process Payment'",
        "<strong>Aggregate (Yellow)</strong> — Entity that handles commands and produces events",
        "<strong>Policy (Purple/Lilac)</strong> — Reactive logic: 'When payment received, ship order'",
        "<strong>Read Model (Green)</strong> — Data needed to make a decision or execute a command",
        "<strong>Hot Spot (Pink)</strong> — Area of confusion, conflict, or complexity that needs resolution"
      ] }
    ] },
    { type: "how", typeLabel: "How It Works", title: "Running an Event Storm", content: [
      { kind: "code", value: "// Event Storming Flow (left to right on the wall)\n\n// 1. CHAOTIC EXPLORATION - everyone writes domain events\n[Order Placed] [Payment Received] [Item Shipped]\n[Refund Requested] [Inventory Reserved] [Cart Updated]\n\n// 2. ENFORCE TIMELINE - arrange events chronologically\n[Cart Updated] -> [Order Placed] -> [Payment Received]\n  -> [Inventory Reserved] -> [Item Shipped]\n\n// 3. ADD COMMANDS & ACTORS\nCustomer: [Place Order] -> [Order Placed]\nSystem: [Process Payment] -> [Payment Received]\n\n// 4. IDENTIFY AGGREGATES\n{Cart} handles [Add Item], [Remove Item]\n{Order} handles [Place Order], [Cancel Order]\n{Payment} handles [Process Payment], [Refund]\n\n// 5. MARK BOUNDARIES -> These become your bounded contexts!\n|--- Shopping Context ---|--- Order Context ---|--- Fulfillment ---|" }
    ] },
    { type: "example", typeLabel: "Real-World Example", title: "Discovering Hidden Complexity", content: [
      { kind: "text", value: "A team event-stormed their e-commerce checkout and discovered <strong>7 edge cases nobody had documented</strong>: partial refunds, split shipments, back-ordered items, gift wrapping flows, and tax exemptions." },
      { kind: "bullets", items: [
        "<strong>Hidden policies</strong> — Business stakeholders revealed 3 refund policies nobody had implemented",
        "<strong>Missing events found</strong> — Engineers discovered a missing 'Inventory Reserved' event needed for consistency",
        "<strong>Concept splitting</strong> — Two 'Order' concepts emerged: one for billing, one for fulfillment",
        "<strong>Visible boundaries</strong> — Natural bounded contexts became visible from the event timeline"
      ] }
    ] },
    { type: "guide", typeLabel: "Step-by-Step Guide", title: "Running Your First Event Storm", content: [
      { kind: "bullets", items: [
        "<strong>Prepare the room</strong> — Step 1: Book a room with a large wall. Get sticky notes in 6 colors.",
        "<strong>Invite stakeholders</strong> — Step 2: Invite 5-15 people: engineers, product, domain experts, support",
        "<strong>Chaotic exploration</strong> — Step 3: Phase 1 (30 min): Everyone writes domain events on orange stickies. No discussion yet.",
        "<strong>Build timeline</strong> — Step 4: Phase 2 (30 min): Arrange events chronologically. Identify gaps and conflicts.",
        "<strong>Add structure</strong> — Step 5: Phase 3 (30 min): Add commands (blue) and policies (purple). Mark hot spots (pink).",
        "<strong>Draw boundaries</strong> — Step 6: Phase 4 (30 min): Identify aggregates (yellow) and draw bounded context boundaries."
      ] }
    ] },
    { type: "practices", typeLabel: "Best Practices", title: "Event Storming Rules", content: [
      { kind: "bullets", items: [
        "<strong>Include non-engineers</strong> — ✅ Include non-engineers -- domain experts reveal what code cannot",
        "<strong>Physical wall</strong> — ✅ Use a physical wall with real sticky notes (virtual tools are second-best)",
        "<strong>Events not code</strong> — ✅ Focus on events (what happened), not implementation details",
        "<strong>Mark hot spots</strong> — ✅ Mark hot spots instead of debating -- revisit them later",
        "<strong>Balanced voices</strong> — ❌ Don't let one person dominate the conversation",
        "<strong>Don't skip chaos</strong> — ❌ Don't skip the chaotic exploration phase -- it reveals hidden knowledge"
      ] }
    ] },
    { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [
      { kind: "bullets", items: [
        "<strong>Tech-only participants</strong> — Missing domain expertise leads to wrong assumptions",
        "<strong>Solution design</strong> — Event storming discovers the problem; don't design the solution during the session",
        "<strong>Too few events</strong> — If you have < 20 events, you're not going deep enough",
        "<strong>Skipping hot spots</strong> — Pink stickies mark the hardest problems; don't ignore them"
      ] }
    ] },
    { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
      { kind: "bullets", items: [
        "<strong>Pick a process</strong> — Pick one business process you're about to build or redesign",
        "<strong>Schedule session</strong> — Schedule a 2-hour event storming session with engineers and a domain expert",
        "<strong>Gather materials</strong> — Buy sticky notes in 6 colors and find a room with wall space",
        "<strong>Digitize results</strong> — After the session, photograph the wall and convert it to a digital context map"
      ] }
    ] },
    { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
      { kind: "bullets", items: [
        "<strong>Rapid discovery</strong> — Event Storming is a collaborative workshop that reveals domain complexity in hours.",
        "<strong>Color coding</strong> — Orange = events, blue = commands, yellow = aggregates, purple = policies, pink = hot spots.",
        "<strong>Emergent boundaries</strong> — Natural bounded contexts emerge from the event timeline.",
        "<strong>Domain expertise</strong> — Include domain experts -- they know the edge cases code doesn't."
      ] },
      { kind: "quality", items: [
        { label: "Actionability", score: 5 },
        { label: "Correctness", score: 5 },
        { label: "Visual Appeal", score: 5 },
        { label: "Engagement", score: 5 }
      ] }
    ] }
  ]
};

window.DEEP_DIVES[169] = {
  title: "The Actor Model",
  icon: "🎭",
  tag: "distributed systems",
  slides: [
    { type: "hook", typeLabel: "Why It Matters", title: "Message-Passing Beats Shared Memory", content: [
      { kind: "text", value: "Threads + shared memory + locks = deadlocks, race conditions, and hair loss. The Actor model replaces all of that with <strong>isolated actors that communicate only through messages</strong>." },
      { kind: "stats", items: [
        { value: "9 nines", label: "availability achieved by Erlang/OTP telecom systems" },
        { value: "0", label: "shared mutable state between actors" },
        { value: "millions", label: "of actors per node (lightweight, not OS threads)" }
      ] },
      { kind: "sources", items: ["Carl Hewitt, 'A Universal Modular ACTOR Formalism', 1973", "Joe Armstrong, 'Making reliable distributed systems in the presence of software errors', PhD thesis"] }
    ] },
    { type: "problem", typeLabel: "The Problem", title: "Shared State Concurrency", content: [
      { kind: "text", value: "Multiple threads accessing shared memory creates bugs that are <strong>impossible to reproduce and nightmarish to debug</strong>." },
      { kind: "bullets", items: [
        "<strong>Race conditions</strong> — Race conditions: two threads update the same balance simultaneously",
        "<strong>Deadlocks</strong> — Deadlocks: Thread A locks X, waits for Y; Thread B locks Y, waits for X",
        "<strong>Lock contention</strong> — Lock contention: fine-grained locking is complex; coarse-grained kills performance",
        "<strong>Unreproducible bugs</strong> — These bugs appear only under load and are nearly impossible to reproduce locally"
      ] }
    ] },
    { type: "concepts", typeLabel: "Core Concepts", title: "Actor Model Fundamentals", content: [
      { kind: "bullets", items: [
        "<strong>Actor</strong> — Lightweight entity with private state, a mailbox, and behavior",
        "<strong>Message</strong> — Immutable data sent between actors (async, non-blocking)",
        "<strong>Mailbox</strong> — Queue where incoming messages wait to be processed one at a time",
        "<strong>Supervision</strong> — Parent actors monitor children and restart them on failure",
        "<strong>Location Transparency</strong> — Actors can be on the same machine or across the network"
      ] },
      { kind: "callout", style: "insight", value: "An actor processes one message at a time. No locks needed -- concurrency is achieved through millions of actors, not threads." }
    ] },
    { type: "how", typeLabel: "How It Works", title: "Actor Communication", content: [
      { kind: "code", value: "// Conceptual actor in Akka/Pekko style\nclass BankAccountActor {\n  balance = 0;\n\n  receive(message) {\n    switch (message.type) {\n      case 'Deposit':\n        this.balance += message.amount;  // No locks needed!\n        sender.tell({ type: 'Deposited', balance: this.balance });\n        break;\n      case 'Withdraw':\n        if (this.balance >= message.amount) {\n          this.balance -= message.amount;\n          sender.tell({ type: 'Withdrawn', balance: this.balance });\n        } else {\n          sender.tell({ type: 'InsufficientFunds' });\n        }\n        break;\n    }\n  }\n}\n\n// Create millions of actors (not threads!)\nconst account1 = system.actorOf(BankAccountActor);\nconst account2 = system.actorOf(BankAccountActor);\naccount1.tell({ type: 'Deposit', amount: 100 });  // async, non-blocking" }
    ] },
    { type: "example", typeLabel: "Real-World Example", title: "WhatsApp and Erlang/OTP", content: [
      { kind: "text", value: "WhatsApp served <strong>900 million users with only 50 engineers</strong> using Erlang/OTP's actor model. Each user connection was an actor." },
      { kind: "bullets", items: [
        "<strong>Per-user actors</strong> — Each user connection = one Erlang process (actor)",
        "<strong>Massive concurrency</strong> — Millions of concurrent actors per server",
        "<strong>Auto-restart</strong> — Supervisor trees automatically restart failed actors",
        "<strong>Hot code upgrades</strong> — Hot code upgrades: deploy new code without stopping actors"
      ] },
      { kind: "sources", items: ["Rick Reed, 'That's 'Billion' with a 'B': Scaling to the Next Level at WhatsApp', Erlang Factory 2014"] }
    ] },
    { type: "guide", typeLabel: "Step-by-Step Guide", title: "Adopting Actors", content: [
      { kind: "bullets", items: [
        "<strong>Find concurrency pain</strong> — Step 1: Identify a concurrent problem with complex locking (e.g., user sessions, game state)",
        "<strong>Choose framework</strong> — Step 2: Choose a framework: Akka/Pekko (JVM), Erlang/OTP, Microsoft Orleans (.NET), Proto.Actor",
        "<strong>Model as actors</strong> — Step 3: Model each entity as an actor with private state and a message handler",
        "<strong>Immutable messages</strong> — Step 4: Define message types as immutable data structures",
        "<strong>Supervision strategy</strong> — Step 5: Implement supervision strategies (restart, stop, escalate)",
        "<strong>Load test at scale</strong> — Step 6: Load test with millions of actors to validate scaling"
      ] }
    ] },
    { type: "practices", typeLabel: "Best Practices", title: "Actor Rules", content: [
      { kind: "bullets", items: [
        "<strong>Small focused actors</strong> — ✅ Actors should have small, focused state and behavior",
        "✅ Messages must be immutable",
        "<strong>Supervision trees</strong> — ✅ Use supervision trees for fault tolerance",
        "<strong>Message-passing design</strong> — ✅ Design for message-passing, not request-response",
        "<strong>No shared state</strong> — ❌ Don't share mutable state between actors",
        "<strong>Never block</strong> — ❌ Don't block inside an actor (no synchronous I/O)"
      ] }
    ] },
    { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [
      { kind: "bullets", items: [
        "<strong>God actor</strong> — One actor that handles everything, defeating concurrency",
        "<strong>Synchronous ask</strong> — Blocking for responses turns actors into slow RPCs",
        "<strong>Unbounded mailboxes</strong> — Fast producers overwhelm slow consumers",
        "<strong>Actor per request</strong> — Creating and destroying actors for each HTTP request"
      ] }
    ] },
    { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
      { kind: "bullets", items: [
        "<strong>Find lock complexity</strong> — Identify one part of your system with complex locking or concurrency bugs",
        "<strong>Model with actors</strong> — Model it as actors with message-passing instead of shared state",
        "<strong>Prototype</strong> — Prototype with Akka (JVM), Orleans (.NET), or a simple in-process actor library",
        "<strong>Compare approaches</strong> — Compare the complexity with the lock-based implementation"
      ] }
    ] },
    { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
      { kind: "bullets", items: [
        "<strong>No locks needed</strong> — The Actor model replaces shared memory + locks with isolated actors + message-passing.",
        "<strong>Single-message processing</strong> — Each actor processes one message at a time -- no locks needed.",
        "<strong>Automatic recovery</strong> — Supervision trees provide automatic fault recovery.",
        "<strong>Proven at scale</strong> — Proven at massive scale: WhatsApp (Erlang), LinkedIn (Akka), Xbox (Orleans)."
      ] },
      { kind: "quality", items: [
        { label: "Actionability", score: 4 },
        { label: "Correctness", score: 5 },
        { label: "Visual Appeal", score: 4 },
        { label: "Engagement", score: 5 }
      ] }
    ] }
  ]
};

window.DEEP_DIVES[170] = {
  title: "Distributed Locking",
  icon: "🔐",
  tag: "distributed systems",
  slides: [
    { type: "hook", typeLabel: "Why It Matters", title: "Exclusive Access Across Services", content: [
      { kind: "text", value: "When multiple service instances need exclusive access to a shared resource, you need a distributed lock. Get it wrong and you get <strong>double-processing, data corruption, or deadlocks</strong>." },
      { kind: "stats", items: [
        { value: "N", label: "service instances competing for the same resource" },
        { value: "1", label: "instance should hold the lock at any time" },
        { value: "ms", label: "clock skew can break naive distributed locks" }
      ] },
      { kind: "sources", items: ["Martin Kleppmann, 'How to do distributed locking', martin.kleppmann.com", "Salvatore Sanfilippo, 'Distributed locks with Redis (Redlock)', redis.io"] }
    ] },
    { type: "problem", typeLabel: "The Problem", title: "Double Processing", content: [
      { kind: "text", value: "A cron job runs on 3 instances. Without a lock, all 3 process the same batch simultaneously. Customers get <strong>triple-charged or triple-emailed</strong>." },
      { kind: "bullets", items: [
        "<strong>Duplicate processing</strong> — Multiple instances process the same scheduled job",
        "<strong>Concurrent updates</strong> — Two services simultaneously update the same resource",
        "<strong>Bypassed rate limits</strong> — Rate limiter is bypassed because each instance counts independently",
        "<strong>Wasted work</strong> — Idempotency helps but doesn't prevent the duplicate work itself"
      ] }
    ] },
    { type: "concepts", typeLabel: "Core Concepts", title: "Distributed Lock Mechanisms", content: [
      { kind: "bullets", items: [
        "<strong>Redis SET NX EX</strong> — Atomic set-if-not-exists with expiration. Simple and fast.",
        "<strong>Redlock</strong> — Redis-based algorithm using N independent Redis nodes for safety.",
        "<strong>ZooKeeper / etcd</strong> — Consensus-based locks using ephemeral nodes. Strongest guarantees.",
        "<strong>Database Advisory Locks</strong> — PostgreSQL pg_advisory_lock. No extra infrastructure.",
        "<strong>Fencing Tokens</strong> — Monotonically increasing token prevents stale lock holders from making changes."
      ] },
      { kind: "callout", style: "warning", value: "Martin Kleppmann showed that Redlock is not safe under certain failure modes. If you need strong correctness guarantees, use ZooKeeper or etcd. If you need best-effort (most cases), Redis SET NX is fine." },
      { kind: "sources", items: ["Martin Kleppmann, 'How to do distributed locking'", "Salvatore Sanfilippo, 'Is Redlock safe?', antirez.com"] }
    ] },
    { type: "how", typeLabel: "How It Works", title: "Redis Distributed Lock", content: [
      { kind: "code", value: "// Simple Redis lock with SET NX EX\nclass RedisLock {\n  async acquire(key, ttlMs = 10000) {\n    const token = crypto.randomUUID();\n    const acquired = await redis.set(key, token, 'NX', 'PX', ttlMs);\n    return acquired ? token : null;\n  }\n\n  async release(key, token) {\n    // Atomic: only release if we still hold the lock\n    const script = `\n      if redis.call('get', KEYS[1]) == ARGV[1] then\n        return redis.call('del', KEYS[1])\n      else\n        return 0\n      end`;\n    await redis.eval(script, 1, key, token);\n  }\n}\n\n// Usage\nconst lock = new RedisLock();\nconst token = await lock.acquire('job:daily-report');\nif (token) {\n  try {\n    await runDailyReport();\n  } finally {\n    await lock.release('job:daily-report', token);\n  }\n}" }
    ] },
    { type: "example", typeLabel: "Real-World Example", title: "Stripe's Idempotency + Locking", content: [
      { kind: "text", value: "Stripe uses distributed locks to ensure that <strong>concurrent retries of the same payment don't result in double charges</strong>." },
      { kind: "bullets", items: [
        "<strong>Key as lock</strong> — Idempotency key serves as the lock key",
        "<strong>First wins</strong> — First request acquires the lock and processes payment",
        "<strong>Concurrent handling</strong> — Concurrent retries wait or return the cached result",
        "<strong>Crash safety</strong> — Lock expires after processing to handle crashes"
      ] },
      { kind: "sources", items: ["Brandur Leach, 'Implementing Stripe-like Idempotency Keys in Postgres', brandur.org"] }
    ] },
    { type: "guide", typeLabel: "Step-by-Step Guide", title: "Implementing Distributed Locks", content: [
      { kind: "bullets", items: [
        "<strong>Identify resource</strong> — Step 1: Identify the resource that needs exclusive access",
        "<strong>Choose mechanism</strong> — Step 2: Choose mechanism: Redis SET NX (simple), ZooKeeper (strong), DB advisory lock (no infra)",
        "<strong>Always set TTL</strong> — Step 3: Always set a TTL on the lock (prevent deadlocks from crashed holders)",
        "<strong>Unique tokens</strong> — Step 4: Use a unique token per acquisition to prevent releasing someone else's lock",
        "<strong>Fencing tokens</strong> — Step 5: Add fencing tokens if the protected resource supports them",
        "<strong>Monitor contention</strong> — Step 6: Monitor lock contention and hold times"
      ] }
    ] },
    { type: "practices", typeLabel: "Best Practices", title: "Locking Rules", content: [
      { kind: "bullets", items: [
        "<strong>Always set TTL</strong> — ✅ Always set a TTL -- crashed processes must not hold locks forever",
        "<strong>Atomic release</strong> — ✅ Use atomic compare-and-delete for release (Lua script in Redis)",
        "<strong>Short hold times</strong> — ✅ Keep lock hold times short -- do work fast, release early",
        "<strong>Consider alternatives</strong> — ✅ Consider if you actually need a lock -- idempotency may suffice",
        "<strong>Stale lock danger</strong> — ❌ Don't assume your lock is still valid after a long pause (GC, network)",
        "<strong>Avoid hot paths</strong> — ❌ Don't use distributed locks for high-contention hot paths"
      ] }
    ] },
    { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [
      { kind: "bullets", items: [
        "<strong>No TTL</strong> — Process crashes while holding lock; resource is locked forever",
        "<strong>Release wrong lock</strong> — Not checking the token before delete releases another holder's lock",
        "<strong>Assuming safety</strong> — Lock expired during GC pause; another process acquired it; both are now operating",
        "<strong>Over-locking</strong> — Using locks where idempotent operations would work fine"
      ] }
    ] },
    { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
      { kind: "bullets", items: [
        "<strong>Find shared resource</strong> — Identify a resource in your system that multiple instances access concurrently",
        "<strong>Implement Redis lock</strong> — Implement a simple Redis lock with SET NX and TTL",
        "<strong>Atomic release</strong> — Add the atomic release pattern (Lua script)",
        "<strong>Test crash scenario</strong> — Test: what happens when the lock holder crashes?"
      ] }
    ] },
    { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
      { kind: "bullets", items: [
        "<strong>Exclusive access</strong> — Distributed locks provide exclusive access across service instances.",
        "<strong>TTLs and atomic release</strong> — Always use TTLs and atomic release (compare-and-delete).",
        "<strong>Strength trade-off</strong> — Redis SET NX is fine for best-effort; ZooKeeper/etcd for strong correctness.",
        "<strong>Consider idempotency</strong> — Consider whether idempotency could replace the need for a lock."
      ] },
      { kind: "quality", items: [
        { label: "Actionability", score: 5 },
        { label: "Correctness", score: 5 },
        { label: "Visual Appeal", score: 4 },
        { label: "Engagement", score: 5 }
      ] }
    ] }
  ]
};

window.DEEP_DIVES[171] = {
  title: "Leader Election",
  icon: "👑",
  tag: "distributed systems",
  slides: [
    { type: "hook", typeLabel: "Why It Matters", title: "Picking a Coordinator Without a Coordinator", content: [
      { kind: "text", value: "Distributed systems often need ONE node to coordinate: run the cron job, manage partitions, or drive rebalancing. Leader election lets nodes <strong>agree on a leader without a central authority</strong>." },
      { kind: "stats", items: [
        { value: "1", label: "leader at a time (safety property)" },
        { value: "seconds", label: "typical failover time" },
        { value: "Raft", label: "most popular modern consensus algorithm for leader election" }
      ] },
      { kind: "sources", items: ["Diego Ongaro & John Ousterhout, 'In Search of an Understandable Consensus Algorithm (Raft)', USENIX ATC 2014", "Leslie Lamport, 'Paxos Made Simple', 2001"] }
    ] },
    { type: "problem", typeLabel: "The Problem", title: "Who's in Charge?", content: [
      { kind: "text", value: "Without leader election, either everyone does the work (duplicates) or nobody does (missed). When the leader crashes, someone must <strong>take over automatically and quickly</strong>." },
      { kind: "bullets", items: [
        "<strong>Duplicate processing</strong> — All 5 instances run the scheduled job -> quintuple processing",
        "<strong>Hardcoded leader</strong> — Hardcoded leader IP means manual failover and downtime",
        "<strong>Split-brain risk</strong> — Split-brain: two nodes both think they're leader -> data corruption",
        "<strong>Slow failover</strong> — Slow failover means minutes of no coordination"
      ] }
    ] },
    { type: "concepts", typeLabel: "Core Concepts", title: "Leader Election Mechanisms", content: [
      { kind: "bullets", items: [
        "<strong>Raft/Paxos</strong> — Consensus algorithms where nodes vote to elect a leader",
        "<strong>ZooKeeper/etcd</strong> — Coordination services with built-in leader election primitives",
        "<strong>Lease-based</strong> — Leader holds a time-limited lease; must renew periodically or lose leadership",
        "<strong>Database-based</strong> — Use a row lock or advisory lock as a simple leader election mechanism",
        "<strong>Kubernetes Lease</strong> — Built-in leader election for controllers and operators"
      ] },
      { kind: "callout", style: "insight", value: "You almost never implement Raft yourself. Use an existing system: etcd, ZooKeeper, Consul, or Kubernetes Leases." }
    ] },
    { type: "how", typeLabel: "How It Works", title: "Lease-Based Leader Election", content: [
      { kind: "code", value: "// Simple lease-based leader election using Redis\nclass LeaderElection {\n  constructor(redis, key, ttl = 15000) {\n    this.redis = redis;\n    this.key = key;\n    this.ttl = ttl;\n    this.id = crypto.randomUUID();\n    this.isLeader = false;\n  }\n\n  async tryBecomeLeader() {\n    const acquired = await this.redis.set(\n      this.key, this.id, 'NX', 'PX', this.ttl\n    );\n    this.isLeader = !!acquired;\n    return this.isLeader;\n  }\n\n  async renewLease() {\n    if (!this.isLeader) return false;\n    // Only renew if we still hold the lease\n    const script = `\n      if redis.call('get',KEYS[1]) == ARGV[1] then\n        return redis.call('pexpire',KEYS[1],ARGV[2])\n      else return 0 end`;\n    const renewed = await this.redis.eval(script, 1, this.key, this.id, this.ttl);\n    this.isLeader = renewed === 1;\n    return this.isLeader;\n  }\n}\n\n// Run election loop\nsetInterval(async () => {\n  if (election.isLeader) {\n    await election.renewLease();\n  } else {\n    await election.tryBecomeLeader();\n  }\n}, 5000); // Renew every 5s, TTL is 15s" }
    ] },
    { type: "example", typeLabel: "Real-World Example", title: "Kafka's Controller Election", content: [
      { kind: "text", value: "Kafka uses ZooKeeper (or KRaft in newer versions) to elect a <strong>controller broker</strong> that manages partition assignments and leader elections for topic partitions." },
      { kind: "bullets", items: [
        "<strong>Ephemeral election</strong> — One broker is elected controller via ZooKeeper ephemeral nodes",
        "<strong>Partition management</strong> — Controller assigns partition leaders to brokers",
        "<strong>Auto re-election</strong> — If controller dies, ZooKeeper triggers re-election within seconds",
        "<strong>KRaft migration</strong> — KRaft (Kafka Raft) replaces ZooKeeper dependency in newer versions"
      ] },
      { kind: "sources", items: ["Apache Kafka Documentation, 'KRaft: Apache Kafka Without ZooKeeper'"] }
    ] },
    { type: "guide", typeLabel: "Step-by-Step Guide", title: "Implementing Leader Election", content: [
      { kind: "bullets", items: [
        "<strong>Identify leader work</strong> — Step 1: Determine what work requires a single leader (cron, rebalancing, coordination)",
        "<strong>Choose mechanism</strong> — Step 2: Choose mechanism: Kubernetes Lease (simplest), Redis lease, etcd/ZooKeeper (strongest)",
        "<strong>Lease acquisition</strong> — Step 3: Implement lease acquisition with TTL",
        "<strong>Periodic renewal</strong> — Step 4: Implement periodic lease renewal (interval < TTL/3)",
        "<strong>Handle demotion</strong> — Step 5: Handle demotion gracefully (stop leader-only work when lease lost)",
        "<strong>Monitor transitions</strong> — Step 6: Monitor leader transitions and alert on frequent flapping"
      ] }
    ] },
    { type: "practices", typeLabel: "Best Practices", title: "Leader Election Rules", content: [
      { kind: "bullets", items: [
        "<strong>TTL-based leases</strong> — ✅ Use TTL-based leases to prevent dead leaders from blocking",
        "<strong>Safe renewal</strong> — ✅ Renew lease at interval < TTL/3 for safe margin",
        "<strong>Graceful demotion</strong> — ✅ Handle demotion: stop leader work immediately when lease is lost",
        "<strong>Monitor elections</strong> — ✅ Monitor leader transitions and election frequency",
        "<strong>Don't DIY consensus</strong> — ❌ Don't implement your own consensus algorithm",
        "<strong>Verify leadership</strong> — ❌ Don't assume leadership lasts forever -- always check before acting"
      ] }
    ] },
    { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [
      { kind: "bullets", items: [
        "<strong>Split brain</strong> — Two leaders due to network partition (use fencing tokens)",
        "<strong>Leader flapping</strong> — Frequent re-elections due to unstable health checks",
        "<strong>Stale leader</strong> — GC pause causes lease to expire; leader continues operating",
        "<strong>DIY consensus</strong> — Implementing Raft from scratch when etcd exists"
      ] }
    ] },
    { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
      { kind: "bullets", items: [
        "<strong>Find single-leader work</strong> — Identify work in your system that only one instance should perform",
        "<strong>Check current method</strong> — Check if you're currently using hardcoded IPs or random selection",
        "<strong>Implement leases</strong> — Implement lease-based leader election with Redis or Kubernetes",
        "<strong>Test failover</strong> — Test: kill the leader and verify automatic failover"
      ] }
    ] },
    { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
      { kind: "bullets", items: [
        "<strong>Automatic coordination</strong> — Leader election lets distributed nodes agree on a coordinator automatically.",
        "<strong>Lease renewal</strong> — Use TTL-based leases and renew at < TTL/3 interval.",
        "<strong>Use existing tools</strong> — Never implement your own consensus -- use etcd, ZooKeeper, or Kubernetes Leases.",
        "<strong>Prevent split-brain</strong> — Always handle demotion gracefully and use fencing tokens to prevent split-brain."
      ] },
      { kind: "quality", items: [
        { label: "Actionability", score: 5 },
        { label: "Correctness", score: 5 },
        { label: "Visual Appeal", score: 4 },
        { label: "Engagement", score: 5 }
      ] }
    ] }
  ]
};

window.DEEP_DIVES[172] = {
  title: "Eventual Consistency: A Practical Guide",
  icon: "⏳",
  tag: "distributed systems",
  slides: [
    { type: "hook", typeLabel: "Why It Matters", title: "Designing for Convergence", content: [
      { kind: "text", value: "Eventual consistency is not about being 'eventually correct.' It means all replicas <strong>converge to the same state</strong> given no new updates. Understanding it is essential for any distributed system." },
      { kind: "stats", items: [
        { value: "ms-s", label: "typical convergence window" },
        { value: "99%+", label: "of reads are consistent within milliseconds" },
        { value: "every", label: "distributed system trades consistency for something" }
      ] },
      { kind: "sources", items: ["Werner Vogels, 'Eventually Consistent', CACM 2009", "Doug Terry et al., 'Session Guarantees for Weakly Consistent Replicated Data', PDIS 1994"] }
    ] },
    { type: "problem", typeLabel: "The Problem", title: "Stale Reads Confuse Users", content: [
      { kind: "text", value: "User updates their profile photo. They refresh the page and see the <strong>old photo</strong>. They click again -- now they see the new one. Without understanding eventual consistency, your users feel your app is broken." },
      { kind: "bullets", items: [
        "<strong>Stale reads</strong> — User updates data but reads return the old value",
        "<strong>Version divergence</strong> — Different users see different versions of the same data",
        "<strong>Lost writes illusion</strong> — Writes appear to be 'lost' because the read replica hasn't caught up",
        "<strong>Brittle workarounds</strong> — Teams build brittle workarounds instead of designing for it"
      ] }
    ] },
    { type: "concepts", typeLabel: "Core Concepts", title: "Consistency Models", content: [
      { kind: "bullets", items: [
        "<strong>Strong Consistency</strong> — After a write, all reads return the new value. Expensive, high latency.",
        "<strong>Eventual Consistency</strong> — Replicas will converge given time. Fast, available, but stale reads possible.",
        "<strong>Read-Your-Own-Writes</strong> — You always see your own changes. Others may see stale data.",
        "<strong>Causal Consistency</strong> — If A causes B, everyone sees A before B. No global ordering otherwise.",
        "<strong>Monotonic Reads</strong> — Once you see version N, you never see version N-1 again."
      ] },
      { kind: "callout", style: "insight", value: "Most applications don't need strong consistency everywhere. They need read-your-own-writes for the current user and eventual consistency for everyone else." }
    ] },
    { type: "how", typeLabel: "How It Works", title: "Handling Eventual Consistency", content: [
      { kind: "code", value: "// Pattern: Read-your-own-writes\nasync function updateProfile(userId, data) {\n  await primaryDb.update('users', userId, data);\n  // Write to local cache so THIS user sees the update immediately\n  await cache.set(`user:${userId}`, data, { ttl: 30 });\n}\n\nasync function getProfile(userId, requesterId) {\n  if (userId === requesterId) {\n    // Read-your-own-writes: check cache first (written by primary)\n    const cached = await cache.get(`user:${userId}`);\n    if (cached) return cached;\n    return primaryDb.get('users', userId);  // Read from primary\n  }\n  // Other users: read from replica (eventually consistent, but fast)\n  return replicaDb.get('users', userId);\n}" }
    ] },
    { type: "example", typeLabel: "Real-World Example", title: "Amazon DynamoDB", content: [
      { kind: "text", value: "DynamoDB is eventually consistent by default but offers <strong>strongly consistent reads</strong> at 2x the cost. Most Amazon shopping features use eventual consistency." },
      { kind: "bullets", items: [
        "<strong>Cart (eventual)</strong> — Shopping cart is eventually consistent -- adding an item may briefly show stale",
        "<strong>Orders (strong)</strong> — Order confirmation uses strong consistency -- customers must see their order",
        "<strong>Catalog (eventual)</strong> — Product catalog uses eventual consistency -- slight delay in price updates is OK",
        "<strong>Per-use-case choice</strong> — Teams choose consistency level per use case, not globally"
      ] },
      { kind: "sources", items: ["Werner Vogels, 'Eventually Consistent', All Things Distributed", "Amazon DynamoDB Documentation, 'Read Consistency'"] }
    ] },
    { type: "guide", typeLabel: "Step-by-Step Guide", title: "Designing for Eventual Consistency", content: [
      { kind: "bullets", items: [
        "<strong>Classify reads</strong> — Step 1: Classify each read path: does it need strong or eventual consistency?",
        "<strong>Own-writes guarantee</strong> — Step 2: Implement read-your-own-writes for user-facing updates",
        "<strong>Optimistic UI</strong> — Step 3: Use optimistic UI: show the expected state immediately, reconcile later",
        "<strong>Detect staleness</strong> — Step 4: Add version vectors or timestamps to detect stale reads",
        "<strong>Conflict resolution</strong> — Step 5: Design conflict resolution for concurrent writes (last-writer-wins, merge, ask user)",
        "<strong>Monitor lag</strong> — Step 6: Monitor replication lag and alert when it exceeds your SLA"
      ] }
    ] },
    { type: "practices", typeLabel: "Best Practices", title: "Consistency Rules", content: [
      { kind: "bullets", items: [
        "<strong>Default eventual</strong> — ✅ Default to eventual consistency; upgrade to strong only where needed",
        "<strong>Own-writes guarantee</strong> — ✅ Implement read-your-own-writes for the current user",
        "<strong>Optimistic UI</strong> — ✅ Use optimistic UI to mask replication lag",
        "<strong>Lag monitoring</strong> — ✅ Monitor replication lag and set alerting thresholds",
        "<strong>Save strong for stakes</strong> — ❌ Don't use strong consistency for read-heavy, low-stakes data",
        "<strong>Design for gap</strong> — ❌ Don't ignore the consistency gap -- design your UI for it"
      ] }
    ] },
    { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [
      { kind: "bullets", items: [
        "<strong>Ignoring staleness</strong> — No versioning means you can't detect stale reads",
        "<strong>Overusing strong consistency</strong> — Every read from the primary crushes your write capacity",
        "<strong>No conflict resolution</strong> — Concurrent writes silently overwrite each other",
        "<strong>UI surprises</strong> — User saves, refreshes, sees old data, loses trust"
      ] }
    ] },
    { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
      { kind: "bullets", items: [
        "<strong>Classify read paths</strong> — List your read paths and classify: strong vs. eventual consistency needed",
        "<strong>Implement RYOW</strong> — Implement read-your-own-writes for one user-facing update",
        "<strong>Check lag monitoring</strong> — Check your replication lag monitoring -- do you have it?",
        "<strong>Optimistic UI</strong> — Add an optimistic UI update for one write-then-read flow"
      ] }
    ] },
    { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
      { kind: "bullets", items: [
        "<strong>Convergence guarantee</strong> — Eventual consistency means replicas converge given time -- not 'sometimes wrong.'",
        "<strong>RYOW suffices</strong> — Most apps need read-your-own-writes, not full strong consistency.",
        "<strong>Practical tools</strong> — Use optimistic UI, version vectors, and replication lag monitoring.",
        "<strong>Per-use-case choice</strong> — Choose consistency level per use case, not globally."
      ] },
      { kind: "quality", items: [
        { label: "Actionability", score: 5 },
        { label: "Correctness", score: 5 },
        { label: "Visual Appeal", score: 4 },
        { label: "Engagement", score: 5 }
      ] }
    ] }
  ]
};

window.DEEP_DIVES[173] = {
  title: "The PACELC Theorem",
  icon: "📐",
  tag: "distributed systems",
  slides: [
    { type: "hook", typeLabel: "Why It Matters", title: "CAP's More Useful Cousin", content: [
      { kind: "text", value: "CAP theorem says during a partition you choose consistency or availability. But partitions are rare. PACELC asks the more practical question: <strong>when there is NO partition, do you trade latency for consistency?</strong>" },
      { kind: "stats", items: [
        { value: "99.99%", label: "of the time there is no network partition" },
        { value: "L vs C", label: "the trade-off that actually matters day-to-day" },
        { value: "2012", label: "Daniel Abadi introduced PACELC" }
      ] },
      { kind: "sources", items: ["Daniel Abadi, 'Consistency Tradeoffs in Modern Distributed Database System Design', IEEE Computer 2012"] }
    ] },
    { type: "problem", typeLabel: "The Problem", title: "CAP Is Not Enough", content: [
      { kind: "text", value: "CAP only describes behavior during partitions. But your system spends 99.99% of its time without partitions. The <strong>daily trade-off is latency vs. consistency</strong>, not availability vs. consistency." },
      { kind: "bullets", items: [
        "<strong>Missing normal case</strong> — CAP doesn't address normal operation (no partition)",
        "<strong>CP is incomplete</strong> — Choosing 'CP' doesn't tell you about read latency during normal operation",
        "<strong>AP variance</strong> — Two 'AP' systems can have vastly different consistency behaviors",
        "<strong>Daily trade-offs</strong> — Engineers need a framework for the trade-offs they face every day"
      ] }
    ] },
    { type: "concepts", typeLabel: "Core Concepts", title: "PACELC Explained", content: [
      { kind: "bullets", items: [
        "<strong>P</strong> — If there is a <strong>P</strong>artition...",
        "<strong>A vs C</strong> — ...choose <strong>A</strong>vailability or <strong>C</strong>onsistency",
        "<strong>E</strong> — <strong>E</strong>lse (no partition)...",
        "<strong>L vs C</strong> — ...choose <strong>L</strong>atency or <strong>C</strong>onsistency",
        "<strong>Example: DynamoDB is PA/EL</strong> — During partition: available. Normally: low latency (eventual consistency by default).",
        "<strong>Example: PostgreSQL is PC/EC</strong> — During partition: consistent. Normally: consistent (synchronous replication)."
      ] },
      { kind: "callout", style: "insight", value: "PACELC captures what CAP misses: most of your design decisions are about the E/L vs C trade-off, not the P/A vs C trade-off." }
    ] },
    { type: "how", typeLabel: "How It Works", title: "Database Classification", content: [
      { kind: "code", value: "// PACELC classification of popular databases\n\n// PA/EL: Available during partition, Low latency normally\n// -> DynamoDB, Cassandra, CockroachDB (default)\n// Best for: High-traffic reads, global distribution\n\n// PC/EC: Consistent during partition, Consistent normally\n// -> PostgreSQL (sync replication), Spanner, VoltDB\n// Best for: Financial transactions, inventory counts\n\n// PA/EC: Available during partition, Consistent normally\n// -> Cosmos DB (with bounded staleness), MongoDB (w:majority)\n// Best for: Apps that tolerate brief partition inconsistency\n\n// Key insight: your choice depends on the USE CASE\n// Shopping cart -> PA/EL (fast, available)\n// Bank transfer -> PC/EC (correct, always)" }
    ] },
    { type: "example", typeLabel: "Real-World Example", title: "Google Spanner: PC/EC", content: [
      { kind: "text", value: "Google Spanner chooses consistency in all cases (PC/EC). It pays for this with <strong>higher latency due to TrueTime and global synchronous replication</strong>." },
      { kind: "bullets", items: [
        "<strong>TrueTime clocks</strong> — TrueTime (GPS + atomic clocks) enables globally consistent transactions",
        "<strong>Write latency cost</strong> — Write latency: 10-20ms within a region, higher cross-region",
        "<strong>Partition resilient</strong> — Strong consistency guaranteed even during partial network issues",
        "<strong>Latency trade-off</strong> — Cost: latency is higher than eventually consistent alternatives"
      ] },
      { kind: "sources", items: ["James C. Corbett et al., 'Spanner: Google's Globally-Distributed Database', OSDI 2012"] }
    ] },
    { type: "guide", typeLabel: "Step-by-Step Guide", title: "Applying PACELC", content: [
      { kind: "bullets", items: [
        "<strong>Classify stores</strong> — Step 1: List your data stores and classify each as PA/EL, PC/EC, PA/EC, or PC/EL",
        "<strong>Determine needs</strong> — Step 2: For each use case, determine: do you need low latency or strong consistency?",
        "<strong>Match profiles</strong> — Step 3: Match use cases to the right PACELC profile",
        "<strong>Per-op consistency</strong> — Step 4: Configure your database's consistency level per operation if supported",
        "<strong>Document choices</strong> — Step 5: Document the trade-off for each use case so future engineers understand the choice",
        "<strong>Monitor trade-offs</strong> — Step 6: Monitor replication lag (EL systems) or write latency (EC systems)"
      ] }
    ] },
    { type: "practices", typeLabel: "Best Practices", title: "PACELC Rules", content: [
      { kind: "bullets", items: [
        "<strong>Per-use-case choice</strong> — ✅ Choose consistency level per use case, not globally",
        "<strong>Match to domain</strong> — ✅ Financial/inventory data: PC/EC. Social feeds/caches: PA/EL.",
        "<strong>Document trade-offs</strong> — ✅ Document your PACELC choices for each data path",
        "<strong>Beyond CAP</strong> — ❌ Don't use CAP alone to make database decisions",
        "<strong>Avoid strong default</strong> — ❌ Don't default to strong consistency everywhere (latency cost)",
        "<strong>EL matters most</strong> — ❌ Don't ignore the EL trade-off -- it's the one you face every day"
      ] }
    ] },
    { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [
      { kind: "bullets", items: [
        "<strong>CAP tunnel vision</strong> — Focusing on partition behavior when partitions are rare",
        "<strong>One-size-fits-all</strong> — Using the same consistency for shopping carts and bank transfers",
        "<strong>Ignoring latency cost</strong> — Strong consistency adds latency that degrades user experience",
        "<strong>Assuming eventual = broken</strong> — Eventual consistency is safe for most read paths"
      ] }
    ] },
    { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
      { kind: "bullets", items: [
        "Classify your databases using PACELC",
        "<strong>Find over-consistency</strong> — Identify one use case where you're paying for stronger consistency than needed",
        "<strong>Find under-consistency</strong> — Identify one use case where eventual consistency is causing user-visible issues",
        "<strong>Adjust per use case</strong> — Adjust consistency levels per use case if your database supports it"
      ] }
    ] },
    { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
      { kind: "bullets", items: [
        "<strong>Extends CAP</strong> — PACELC extends CAP: during partitions, A vs C. Without partitions, Latency vs Consistency.",
        "<strong>Daily trade-off</strong> — The L vs C trade-off is the one you face daily. P is rare.",
        "<strong>Match to domain</strong> — Choose consistency level per use case: PA/EL for reads, PC/EC for financial writes.",
        "<strong>Document decisions</strong> — Document your trade-offs so future engineers understand why."
      ] },
      { kind: "quality", items: [
        { label: "Actionability", score: 4 },
        { label: "Correctness", score: 5 },
        { label: "Visual Appeal", score: 4 },
        { label: "Engagement", score: 5 }
      ] }
    ] }
  ]
};

window.DEEP_DIVES[174] = {
  title: "Testing Distributed Systems",
  icon: "🧪",
  tag: "testing",
  slides: [
    { type: "hook", typeLabel: "Why It Matters", title: "Verifying the Non-Deterministic", content: [
      { kind: "text", value: "Distributed systems fail in ways unit tests cannot catch: network partitions, clock skew, message reordering, partial failures. <strong>Traditional testing is necessary but not sufficient.</strong>" },
      { kind: "stats", items: [
        { value: "58%", label: "of distributed system failures are from non-deterministic bugs" },
        { value: "10x", label: "harder to reproduce than single-node bugs" },
        { value: "3", label: "techniques beyond unit tests: contract, property, chaos testing" }
      ] },
      { kind: "sources", items: ["Yuan et al., 'Simple Testing Can Prevent Most Critical Failures', OSDI 2014", "Jepsen, 'Distributed Systems Safety Research', jepsen.io"] }
    ] },
    { type: "problem", typeLabel: "The Problem", title: "Tests Pass, Production Burns", content: [
      { kind: "text", value: "Unit tests pass. Integration tests pass. But in production, a 50ms network delay between Service A and Service B causes <strong>data loss that no test ever simulated</strong>." },
      { kind: "bullets", items: [
        "<strong>Mocks hide bugs</strong> — Unit tests mock away the very things that cause distributed failures",
        "<strong>Localhost illusion</strong> — Integration tests use localhost where there's no latency or packet loss",
        "<strong>Timing-dependent bugs</strong> — Race conditions only manifest under specific timing conditions",
        "<strong>Exponential failures</strong> — Failure modes multiply with every new service added"
      ] }
    ] },
    { type: "concepts", typeLabel: "Core Concepts", title: "Testing Techniques", content: [
      { kind: "bullets", items: [
        "<strong>Contract Testing</strong> — Verify API contracts between services without full integration (Pact, Spring Cloud Contract)",
        "<strong>Property-Based Testing</strong> — Generate random inputs to find edge cases (QuickCheck, fast-check, Hypothesis)",
        "<strong>Chaos Engineering</strong> — Inject failures in production to find weaknesses (Chaos Monkey, Litmus, Gremlin)",
        "<strong>Fault Injection</strong> — Simulate network delays, partitions, and crashes in staging (Toxiproxy, tc)",
        "<strong>Deterministic Simulation</strong> — FoundationDB-style testing: simulate entire cluster in one process"
      ] },
      { kind: "sources", items: ["Netflix, 'Chaos Monkey', netflix.github.io", "FoundationDB, 'Testing Distributed Systems w/ Deterministic Simulation'"] }
    ] },
    { type: "how", typeLabel: "How It Works", title: "Layered Testing Strategy", content: [
      { kind: "code", value: "// Layer 1: Contract tests (fast, isolated)\n// Verify producer and consumer agree on API shape\nconst pact = new Pact({ consumer: 'OrderService', provider: 'PaymentService' });\npact.addInteraction({\n  state: 'user has valid payment method',\n  uponReceiving: 'a charge request',\n  willRespondWith: { status: 200, body: { chargeId: like('ch_123') } }\n});\n\n// Layer 2: Fault injection tests (staging)\n// Simulate network issues between services\ntoxiproxy.addToxic('payment-service', {\n  type: 'latency', attributes: { latency: 5000 }  // 5s delay\n});\n// Verify: does OrderService timeout gracefully? Circuit breaker trips?\n\n// Layer 3: Chaos experiments (production)\n// Kill a random payment service instance during peak\n// Verify: does the system degrade gracefully?\n// Measure: error rate, latency p99, recovery time" }
    ] },
    { type: "example", typeLabel: "Real-World Example", title: "Netflix's Chaos Engineering", content: [
      { kind: "text", value: "Netflix runs Chaos Monkey in production every workday. It randomly kills service instances to verify that <strong>the system recovers automatically without user impact</strong>." },
      { kind: "bullets", items: [
        "<strong>Instance killing</strong> — Chaos Monkey kills random instances during business hours",
        "<strong>Region simulation</strong> — Chaos Kong simulates entire region failures",
        "<strong>Fault injection</strong> — FIT (Failure Injection Testing) injects latency and errors between services",
        "<strong>Scientific approach</strong> — All chaos experiments have a hypothesis, metrics, and abort conditions"
      ] },
      { kind: "sources", items: ["Netflix Tech Blog, 'Chaos Engineering'", "Casey Rosenthal et al., 'Chaos Engineering', O'Reilly"] }
    ] },
    { type: "guide", typeLabel: "Step-by-Step Guide", title: "Testing Your Distributed System", content: [
      { kind: "bullets", items: [
        "<strong>Contract tests first</strong> — Step 1: Add contract tests between your most coupled services",
        "<strong>Simulate network</strong> — Step 2: Set up Toxiproxy to simulate network issues in staging",
        "<strong>Fault injection</strong> — Step 3: Run fault injection tests: what happens with 5s latency? 50% packet loss?",
        "<strong>Property tests</strong> — Step 4: Add property-based tests for data processing logic",
        "<strong>Small chaos first</strong> — Step 5: Start small chaos experiments in production (kill one non-critical instance)",
        "<strong>Graduate scope</strong> — Step 6: Graduate to larger experiments (region failover, database failover)"
      ] }
    ] },
    { type: "practices", typeLabel: "Best Practices", title: "Testing Rules", content: [
      { kind: "bullets", items: [
        "<strong>Test failure modes</strong> — ✅ Test the failure modes, not just the happy path",
        "<strong>Contract tests</strong> — ✅ Use contract tests between services instead of heavyweight integration tests",
        "<strong>Scientific chaos</strong> — ✅ Run chaos experiments with clear hypotheses and abort conditions",
        "<strong>Real conditions</strong> — ✅ Simulate real network conditions: latency, packet loss, DNS failures",
        "<strong>Keep the network</strong> — ❌ Don't mock away the network in distributed system tests",
        "<strong>Safe experiments</strong> — ❌ Don't run chaos experiments without monitoring and rollback plans"
      ] }
    ] },
    { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [
      { kind: "bullets", items: [
        "<strong>Mock everything</strong> — Mocking the network hides the bugs you need to find",
        "<strong>Happy path only</strong> — Tests only verify success; failures are never simulated",
        "<strong>YOLO chaos</strong> — Running chaos experiments without monitoring or abort conditions",
        "<strong>Integration test hell</strong> — Slow, flaky integration tests that nobody trusts"
      ] }
    ] },
    { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
      { kind: "bullets", items: [
        "<strong>Add contract test</strong> — Add a contract test between two of your services",
        "<strong>Simulate latency</strong> — Set up Toxiproxy and simulate 2s latency on one dependency",
        "<strong>Test resilience</strong> — Find out: does your circuit breaker trip? Does the timeout work?",
        "<strong>Document findings</strong> — Document the failure modes you discovered"
      ] }
    ] },
    { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
      { kind: "bullets", items: [
        "<strong>Beyond unit tests</strong> — Distributed systems need contract tests, fault injection, and chaos engineering beyond unit tests.",
        "<strong>Test failures</strong> — Test failure modes, not just happy paths.",
        "<strong>Scientific chaos</strong> — Chaos experiments need hypotheses, metrics, and abort conditions.",
        "<strong>Network is reality</strong> — Don't mock away the network -- it's where distributed bugs live."
      ] },
      { kind: "quality", items: [
        { label: "Actionability", score: 5 },
        { label: "Correctness", score: 5 },
        { label: "Visual Appeal", score: 4 },
        { label: "Engagement", score: 5 }
      ] }
    ] }
  ]
};

window.DEEP_DIVES[175] = {
  title: "MILESTONE: You See Patterns Everywhere",
  icon: "🏆",
  tag: "milestone",
  slides: [
    { type: "hook", typeLabel: "Why It Matters", title: "Your Pattern Vocabulary Is Complete", content: [
      { kind: "text", value: "You now know event-driven, CQRS, saga, outbox, strangler fig, cell-based, circuit breaker, bulkhead, modular monolith, DDD, and distributed locking. <strong>You have a pattern for every architecture problem.</strong>" },
      { kind: "stats", items: [
        { value: "25", label: "architecture patterns mastered" },
        { value: "175", label: "topics completed in this journey" },
        { value: "infinite", label: "combinations to solve real problems" }
      ] }
    ] },
    { type: "problem", typeLabel: "The Problem", title: "Pattern Overload", content: [
      { kind: "text", value: "You know the patterns but struggle with <strong>when to apply which one</strong>. The gap between knowing a pattern and applying it correctly is experience." },
      { kind: "bullets", items: [
        "<strong>CQRS for CRUD</strong> — Applying CQRS to a simple CRUD app adds complexity for no benefit",
        "<strong>Over-engineering</strong> — Using event sourcing for a user profile service is over-engineering",
        "<strong>Premature splitting</strong> — Choosing microservices when a modular monolith would suffice",
        "<strong>Cost awareness</strong> — Every pattern has a cost -- the skill is knowing when the cost is worth it"
      ] }
    ] },
    { type: "concepts", typeLabel: "Core Concepts", title: "Pattern Selection Framework", content: [
      { kind: "bullets", items: [
        "<strong>Start simple</strong> — Monolith -> modular monolith -> extract services when pain demands it",
        "<strong>Match pattern to problem</strong> — Event-driven for decoupling, CQRS for read/write asymmetry, saga for distributed transactions",
        "<strong>Evaluate cost</strong> — Each pattern adds complexity. Only adopt when the problem justifies it.",
        "<strong>Combine wisely</strong> — CQRS + Event Sourcing + Saga is powerful but complex. Start with one.",
        "<strong>Reversibility</strong> — Prefer patterns that are easy to undo over those that lock you in."
      ] },
      { kind: "callout", style: "insight", value: "The best architects are not the ones who know the most patterns. They are the ones who know when NOT to use a pattern." }
    ] },
    { type: "how", typeLabel: "How It Works", title: "Pattern Decision Tree", content: [
      { kind: "code", value: "// When to use which pattern:\n\n// Need to decouple services?\n//   -> Event-Driven Architecture (Topic 151)\n\n// Read/write performance asymmetry?\n//   -> CQRS (Topic 152)\n\n// Multi-service transaction?\n//   -> Saga Pattern (Topic 153)\n\n// Reliable event publishing?\n//   -> Outbox Pattern (Topic 154)\n\n// Replacing legacy system?\n//   -> Strangler Fig (Topic 155)\n\n// Blast radius containment?\n//   -> Cell-Based Architecture (Topic 156)\n\n// Cascading failure prevention?\n//   -> Circuit Breaker + Bulkhead (Topics 158-159)\n\n// Need microservice boundaries without microservice complexity?\n//   -> Modular Monolith (Topic 165)\n\n// Finding the right service boundaries?\n//   -> DDD + Event Storming (Topics 167-168)" }
    ] },
    { type: "example", typeLabel: "Real-World Example", title: "Combining Patterns", content: [
      { kind: "text", value: "A well-designed e-commerce platform combines patterns where each adds value:" },
      { kind: "bullets", items: [
        "<strong>Modular monolith</strong> — Modular monolith for core business logic (simple deployment)",
        "<strong>Event-driven</strong> — Event-driven for notifications and analytics (decoupled consumers)",
        "<strong>Outbox pattern</strong> — Outbox pattern for reliable event publishing (no dual writes)",
        "<strong>CQRS catalog</strong> — CQRS for the product catalog (10,000:1 read:write ratio)",
        "<strong>Circuit breakers</strong> — Circuit breakers around payment and shipping providers (resilience)",
        "<strong>Saga checkout</strong> — Saga pattern for the checkout flow (multi-step, compensatable)"
      ] }
    ] },
    { type: "guide", typeLabel: "Step-by-Step Guide", title: "Building Pattern Intuition", content: [
      { kind: "bullets", items: [
        "<strong>Write use/don't-use</strong> — Step 1: For each pattern, write one sentence about when to use it and when NOT to",
        "<strong>Find existing patterns</strong> — Step 2: Look at your current system -- which patterns are already present (maybe unnamed)?",
        "<strong>Top 3 pain points</strong> — Step 3: Identify the top 3 pain points in your architecture today",
        "<strong>Match patterns</strong> — Step 4: Match each pain point to a pattern that addresses it",
        "<strong>Simplest first</strong> — Step 5: Start with the simplest pattern that solves the problem",
        "<strong>Evaluate at 3 months</strong> — Step 6: Evaluate after 3 months: did the pattern reduce complexity or add it?"
      ] }
    ] },
    { type: "practices", typeLabel: "Best Practices", title: "Pattern Application Rules", content: [
      { kind: "bullets", items: [
        "<strong>Simplest first</strong> — ✅ Start with the simplest solution and add patterns when pain demands it",
        "<strong>Intentional combinations</strong> — ✅ Combine patterns intentionally, not because they're popular",
        "<strong>Document rationale</strong> — ✅ Document why you chose a pattern (the problem it solves)",
        "<strong>Avoid pattern FOMO</strong> — ❌ Don't use a pattern just because you learned it",
        "<strong>Limit stacking</strong> — ❌ Don't combine more than 2-3 patterns in a single flow",
        "<strong>Context matters</strong> — ❌ Don't copy another company's architecture without their context"
      ] }
    ] },
    { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Pattern Anti-Patterns", content: [
      { kind: "bullets", items: [
        "<strong>Resume-Driven Development</strong> — Choosing patterns to look good on a resume",
        "<strong>Pattern stacking</strong> — CQRS + Event Sourcing + Saga + CDC for a to-do app",
        "<strong>Cargo culting</strong> — Copying Netflix's architecture for a 10-person startup",
        "<strong>Pattern permanence</strong> — Treating pattern choices as irreversible decisions"
      ] }
    ] },
    { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
      { kind: "bullets", items: [
        "<strong>Build cheat sheet</strong> — Create a 'pattern cheat sheet' for your team with when-to-use guidance",
        "<strong>Find one pattern</strong> — Identify one pattern that could reduce complexity in your current system",
        "<strong>Propose with trade-offs</strong> — Propose it in a design review with clear trade-offs",
        "<strong>Self-reflect</strong> — Reflect: which patterns have you been tempted to over-apply?"
      ] }
    ] },
    { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
      { kind: "bullets", items: [
        "<strong>When over what</strong> — Knowing patterns is valuable. Knowing WHEN to apply them is invaluable.",
        "<strong>Start simple</strong> — Start simple. Add complexity only when pain justifies it.",
        "<strong>Fewest patterns</strong> — The best architecture uses the fewest patterns that solve the actual problems.",
        "<strong>Next chapter</strong> — Next up: Data & Storage Foundations -- the bedrock beneath every pattern."
      ] },
      { kind: "quality", items: [
        { label: "Actionability", score: 5 },
        { label: "Correctness", score: 5 },
        { label: "Visual Appeal", score: 4 },
        { label: "Engagement", score: 5 }
      ] }
    ] }
  ]
};

window.DEEP_DIVES[176] = {
  title: "Relational Databases: Still the King",
  icon: "👑",
  tag: "data",
  slides: [
    { type: "hook", typeLabel: "Why It Matters", title: "PostgreSQL Is Eating the World", content: [
      { kind: "text", value: "While NoSQL hype faded, PostgreSQL quietly became the <strong>most loved and most wanted database</strong>. Relational databases aren't legacy -- they're more relevant than ever." },
      { kind: "stats", items: [
        { value: "#1", label: "most wanted database (Stack Overflow 2024)" },
        { value: "35+", label: "years of battle-tested reliability" },
        { value: "ACID", label: "guarantees that NoSQL databases still struggle to match" }
      ] },
      { kind: "sources", items: ["Stack Overflow Developer Survey 2024", "DB-Engines Ranking, db-engines.com"] }
    ] },
    { type: "problem", typeLabel: "The Problem", title: "Premature NoSQL Adoption", content: [
      { kind: "text", value: "Teams choose NoSQL because 'we need to scale' before they hit any scaling limit. They lose joins, transactions, and data integrity -- then spend months <strong>re-implementing them in application code</strong>." },
      { kind: "bullets", items: [
        "<strong>Slow app joins</strong> — Application-level joins are 10x slower and buggier than SQL joins",
        "<strong>Orphaned data</strong> — No foreign keys means orphaned data accumulates silently",
        "<strong>Consistency bugs</strong> — Eventual consistency introduces bugs that are hard to reproduce",
        "<strong>Schema chaos</strong> — Schema-on-read leads to schema-on-pray"
      ] }
    ] },
    { type: "concepts", typeLabel: "Core Concepts", title: "Why Relational Wins", content: [
      { kind: "bullets", items: [
        "<strong>ACID Transactions</strong> — Atomicity, Consistency, Isolation, Durability. Your data is always correct.",
        "<strong>SQL</strong> — The most powerful and expressive query language ever created. 50+ years old and still unmatched.",
        "<strong>Schema Enforcement</strong> — The database validates your data, not just your application code.",
        "<strong>Joins</strong> — Combine data from multiple tables efficiently. No application-level data stitching.",
        "<strong>Ecosystem</strong> — ORMs, migration tools, monitoring, backups, replication -- all mature and battle-tested."
      ] },
      { kind: "callout", style: "insight", value: "PostgreSQL now supports JSON, full-text search, vector similarity, geospatial, and time-series. It's a multi-model database that reduces your infrastructure complexity." }
    ] },
    { type: "how", typeLabel: "How It Works", title: "PostgreSQL as a Swiss Army Knife", content: [
      { kind: "code", value: "-- Relational: traditional joins\nSELECT o.id, u.name, SUM(oi.price) as total\nFROM orders o\nJOIN users u ON o.user_id = u.id\nJOIN order_items oi ON oi.order_id = o.id\nGROUP BY o.id, u.name;\n\n-- JSON: document-style storage\nSELECT data->>'name', data->'address'->>'city'\nFROM user_profiles\nWHERE data @> '{\"role\": \"admin\"}';\n\n-- Full-text search (no Elasticsearch needed for basics)\nSELECT title FROM articles\nWHERE to_tsvector('english', body) @@ to_tsquery('distributed & systems');\n\n-- Vector similarity (pgvector, no Pinecone needed for basics)\nSELECT title FROM documents\nORDER BY embedding <-> '[0.1, 0.2, ...]'\nLIMIT 10;" }
    ] },
    { type: "example", typeLabel: "Real-World Example", title: "Instagram on PostgreSQL", content: [
      { kind: "text", value: "Instagram runs on PostgreSQL and serves <strong>2+ billion monthly active users</strong>. They chose to scale PostgreSQL rather than adopt NoSQL." },
      { kind: "bullets", items: [
        "Sharded PostgreSQL handles billions of rows",
        "PgBouncer for connection pooling at scale",
        "Custom partitioning and read replicas for performance",
        "Strong consistency for likes, comments, follows"
      ] },
      { kind: "sources", items: ["Instagram Engineering Blog, 'Handling Growth with PostgreSQL'"] }
    ] },
    { type: "guide", typeLabel: "Step-by-Step Guide", title: "Getting the Most from PostgreSQL", content: [
      { kind: "bullets", items: [
        "<strong>Default to PG</strong> — Step 1: Default to PostgreSQL for new projects unless you have a specific reason not to",
        "<strong>JSONB for flexibility</strong> — Step 2: Use JSONB columns for semi-structured data instead of adding a document store",
        "<strong>Proper indexes</strong> — Step 3: Add proper indexes (B-tree for equality, GiST for geospatial, GIN for full-text)",
        "<strong>Connection pooling</strong> — Step 4: Use connection pooling (PgBouncer) -- PostgreSQL connections are expensive",
        "<strong>Streaming replication</strong> — Step 5: Set up streaming replication for read scaling and disaster recovery",
        "<strong>Monitor queries</strong> — Step 6: Monitor with pg_stat_statements and auto-explain for slow queries"
      ] }
    ] },
    { type: "practices", typeLabel: "Best Practices", title: "PostgreSQL Rules", content: [
      { kind: "bullets", items: [
        "✅ Use PostgreSQL as your default database choice",
        "✅ Use JSONB for flexible fields within a relational schema",
        "✅ Always use connection pooling in production",
        "✅ Set up streaming replication from day one",
        "❌ Don't use NoSQL just because you 'might need to scale'",
        "❌ Don't store everything as JSON -- use proper columns for queried fields"
      ] }
    ] },
    { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [
      { kind: "bullets", items: [
        "<strong>No connection pooling</strong> — Each PostgreSQL connection uses ~10MB RAM. 1000 connections = 10GB wasted.",
        "<strong>Missing indexes</strong> — Full table scans on tables with millions of rows",
        "<strong>JSON everywhere</strong> — Storing highly structured data as JSON loses type safety and query efficiency",
        "<strong>Premature sharding</strong> — PostgreSQL handles tens of TB easily. Shard only when you must."
      ] }
    ] },
    { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
      { kind: "bullets", items: [
        "<strong>Check pooling</strong> — Check if you're using connection pooling (PgBouncer/pgpool). Add it if not.",
        "<strong>Find slow queries</strong> — Run pg_stat_statements to find your slowest queries",
        "<strong>Replace NoSQL</strong> — Identify one NoSQL use case that PostgreSQL could handle (JSON, search, time-series)",
        "Set up streaming replication if you don't have it"
      ] }
    ] },
    { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
      { kind: "bullets", items: [
        "PostgreSQL is the default choice for most applications.",
        "It handles JSON, full-text search, vectors, and geospatial natively.",
        "Always use connection pooling and set up replication from day one.",
        "Don't adopt NoSQL until you've hit a real PostgreSQL limitation."
      ] },
      { kind: "quality", items: [
        { label: "Actionability", score: 5 },
        { label: "Correctness", score: 5 },
        { label: "Visual Appeal", score: 4 },
        { label: "Engagement", score: 5 }
      ] }
    ] }
  ]
};

window.DEEP_DIVES[177] = {
  title: "NoSQL: The Right Tool, Not the Default",
  icon: "🗃️",
  tag: "data",
  slides: [
    { type: "hook", typeLabel: "Why It Matters", title: "When NoSQL Genuinely Wins", content: [
      { kind: "text", value: "NoSQL isn't bad -- it's <strong>specialized</strong>. Document stores, key-value stores, wide-column databases, and graph databases each solve specific problems that relational databases handle poorly." },
      { kind: "stats", items: [
        { value: "4", label: "NoSQL categories, each with a sweet spot" },
        { value: "1M+", label: "ops/sec achievable with Redis or DynamoDB" },
        { value: "0", label: "joins needed in key-value access patterns" }
      ] }
    ] },
    { type: "problem", typeLabel: "The Problem", title: "Square Peg, Round Hole", content: [
      { kind: "text", value: "Using a relational database for everything means forcing <strong>some data into shapes it doesn't naturally fit</strong>: user sessions, IoT telemetry, social graphs, real-time leaderboards." },
      { kind: "bullets", items: [
        "<strong>Wasted ACID</strong> — User sessions stored in PostgreSQL waste expensive ACID guarantees",
        "<strong>Volume overwhelm</strong> — IoT sensor data with billions of rows per day overwhelms row-based storage",
        "<strong>Slow graph queries</strong> — Social graph traversals require recursive SQL that is painfully slow",
        "<strong>Sub-ms needs</strong> — Real-time leaderboards need sub-millisecond sorted set operations"
      ] }
    ] },
    { type: "concepts", typeLabel: "Core Concepts", title: "NoSQL Categories", content: [
      { kind: "bullets", items: [
        "<strong>Key-Value (Redis, DynamoDB)</strong> — Ultra-fast lookup by key. Sessions, caches, leaderboards.",
        "<strong>Document (MongoDB, CouchDB)</strong> — Flexible JSON documents. Content management, catalogs, user profiles.",
        "<strong>Wide-Column (Cassandra, ScyllaDB)</strong> — Massive write throughput, time-series, IoT, event logs.",
        "<strong>Graph (Neo4j, Neptune)</strong> — Relationship traversal. Social networks, fraud detection, recommendation engines."
      ] },
      { kind: "callout", style: "insight", value: "The key question: what does your access pattern look like? If it's always 'get by ID' or 'scan by time range,' NoSQL may be the right fit." }
    ] },
    { type: "how", typeLabel: "How It Works", title: "Choosing the Right Store", content: [
      { kind: "code", value: "// Decision guide:\n\n// Access by key, need sub-ms latency?\n//   -> Key-Value (Redis, DynamoDB)\nredis.get('session:abc123');\n\n// Flexible schema, nested documents?\n//   -> Document Store (MongoDB)\ndb.products.find({ 'specs.color': 'blue', price: { $lt: 100 } });\n\n// High write throughput, time-series, append-heavy?\n//   -> Wide-Column (Cassandra)\nINSERT INTO sensor_data (device_id, ts, value)\nVALUES ('sensor-1', NOW(), 42.5);\n\n// Traverse relationships (friends-of-friends, fraud paths)?\n//   -> Graph (Neo4j)\nMATCH (u:User)-[:FOLLOWS*2..3]->(fof:User)\nWHERE u.id = 'alice'\nRETURN DISTINCT fof;" }
    ] },
    { type: "example", typeLabel: "Real-World Example", title: "Discord's Message Storage", content: [
      { kind: "text", value: "Discord stores <strong>trillions of messages</strong> in Cassandra (now migrating to ScyllaDB) because the access pattern is append-heavy with time-range reads -- a perfect wide-column use case." },
      { kind: "bullets", items: [
        "Messages are append-only with time-based partitioning",
        "Access pattern: read recent messages by channel (time range query)",
        "No joins needed -- messages are self-contained documents",
        "Migrated from Cassandra to ScyllaDB for better tail latency"
      ] },
      { kind: "sources", items: ["Discord Engineering Blog, 'How Discord Stores Trillions of Messages'"] }
    ] },
    { type: "guide", typeLabel: "Step-by-Step Guide", title: "Evaluating NoSQL", content: [
      { kind: "bullets", items: [
        "<strong>Try PG first</strong> — Step 1: Can PostgreSQL handle this with JSONB, partitioning, or extensions?",
        "<strong>Characterize pattern</strong> — Step 2: Characterize your access pattern: key lookup, range scan, graph traversal, full-text search?",
        "<strong>Consistency needs</strong> — Step 3: Evaluate consistency needs: do you need ACID transactions?",
        "<strong>Volume estimation</strong> — Step 4: Estimate data volume and write throughput requirements",
        "<strong>Prototype and bench</strong> — Step 5: Prototype with the candidate NoSQL database and benchmark",
        "<strong>Operational cost</strong> — Step 6: Evaluate operational cost: can your team operate this database in production?"
      ] }
    ] },
    { type: "practices", typeLabel: "Best Practices", title: "NoSQL Rules", content: [
      { kind: "bullets", items: [
        "✅ Choose NoSQL for a specific access pattern, not because 'it scales'",
        "✅ Design your data model around your query patterns (not the other way around)",
        "✅ Accept the trade-offs: less consistency, no joins, limited querying flexibility",
        "❌ Don't use NoSQL as your primary database for transactional business data",
        "❌ Don't expect ad-hoc querying -- NoSQL data models are optimized for known patterns",
        "❌ Don't ignore the operational burden of running a NoSQL cluster"
      ] }
    ] },
    { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [
      { kind: "bullets", items: [
        "<strong>NoSQL as default</strong> — Choosing MongoDB for everything because it's 'flexible'",
        "<strong>Application-level joins</strong> — Re-implementing SQL joins in code, poorly",
        "<strong>Schema-on-read chaos</strong> — No schema enforcement means corrupt data accumulates",
        "<strong>Wrong category</strong> — Using a document store when you need a graph database"
      ] }
    ] },
    { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
      { kind: "bullets", items: [
        "List your data stores and their access patterns",
        "<strong>Find non-ACID table</strong> — Identify one relational table that doesn't need ACID (sessions, caches, logs)",
        "<strong>Evaluate NoSQL fit</strong> — Evaluate: would a specialized NoSQL store improve performance for that use case?",
        "<strong>Simplify with PG</strong> — Identify one NoSQL store being used where PostgreSQL would be simpler"
      ] }
    ] },
    { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
      { kind: "bullets", items: [
        "<strong>Specialized not superior</strong> — NoSQL is specialized, not superior. Choose it for specific access patterns.",
        "<strong>Match DB to pattern</strong> — Key-value for lookups, document for flexible schemas, wide-column for write-heavy, graph for relationships.",
        "<strong>Query-driven design</strong> — Design your data model around query patterns, not entity relationships.",
        "<strong>PG first always</strong> — Always ask: can PostgreSQL handle this? If yes, stick with PostgreSQL."
      ] },
      { kind: "quality", items: [
        { label: "Actionability", score: 5 },
        { label: "Correctness", score: 5 },
        { label: "Visual Appeal", score: 4 },
        { label: "Engagement", score: 5 }
      ] }
    ] }
  ]
};

window.DEEP_DIVES[178] = {
  title: "Database Indexing Deep Dive",
  icon: "📇",
  tag: "performance",
  slides: [
    { type: "hook", typeLabel: "Why It Matters", title: "Why Your Query Is Slow", content: [
      { kind: "text", value: "Without an index, the database scans <strong>every row</strong> in the table to find your data. With the right index, it finds it in milliseconds. Indexing is the single most impactful performance optimization in most systems." },
      { kind: "stats", items: [
        { value: "1000x", label: "speedup from a missing index on a 10M row table" },
        { value: "O(log n)", label: "B-tree lookup vs O(n) full table scan" },
        { value: "#1", label: "cause of slow queries: missing or wrong indexes" }
      ] }
    ] },
    { type: "problem", typeLabel: "The Problem", title: "Full Table Scans in Production", content: [
      { kind: "text", value: "A query that took 5ms on 10K rows now takes <strong>30 seconds on 10M rows</strong> because there's no index. The database examines every single row to find the 3 you need." },
      { kind: "bullets", items: [
        "Response times degrade linearly as data grows",
        "CPU and I/O spike on the database server",
        "Lock contention increases as scans hold resources longer",
        "One bad query can saturate the entire database"
      ] }
    ] },
    { type: "concepts", typeLabel: "Core Concepts", title: "Index Types", content: [
      { kind: "bullets", items: [
        "<strong>B-tree</strong> — Default index. Great for equality (=), range (<, >), and sorting (ORDER BY). O(log n) lookup.",
        "<strong>Hash</strong> — Fastest for exact equality only. Cannot do range queries or sorting.",
        "<strong>GIN (Generalized Inverted)</strong> — For full-text search, JSONB, and array columns. Indexes the contents inside values.",
        "<strong>GiST (Generalized Search Tree)</strong> — For geospatial, range types, and nearest-neighbor queries.",
        "<strong>LSM-tree</strong> — Used by Cassandra, RocksDB. Optimized for write-heavy workloads. Slower reads."
      ] },
      { kind: "sources", items: ["PostgreSQL Documentation, 'Indexes'", "Martin Kleppmann, 'DDIA', Ch. 3: Storage and Retrieval"] }
    ] },
    { type: "how", typeLabel: "How It Works", title: "Indexing in Practice", content: [
      { kind: "code", value: "-- B-tree: equality and range queries\nCREATE INDEX idx_users_email ON users(email);\nSELECT * FROM users WHERE email = 'alice@example.com';  -- index scan\n\n-- Composite index: order matters!\nCREATE INDEX idx_orders_user_date ON orders(user_id, created_at DESC);\nSELECT * FROM orders WHERE user_id = 7 ORDER BY created_at DESC LIMIT 10;\n-- Works: user_id = X (uses left prefix)\n-- Works: user_id = X AND created_at > Y\n-- DOES NOT work: created_at > Y alone (skips left prefix)\n\n-- Partial index: index only relevant rows\nCREATE INDEX idx_orders_pending ON orders(created_at)\n  WHERE status = 'pending';  -- only indexes pending orders\n\n-- EXPLAIN ANALYZE: always verify your index is used\nEXPLAIN ANALYZE SELECT * FROM orders WHERE user_id = 7;\n-- Look for: 'Index Scan' (good) vs 'Seq Scan' (bad)" }
    ] },
    { type: "example", typeLabel: "Real-World Example", title: "Slack's Index Optimization", content: [
      { kind: "text", value: "Slack optimized their message search by adding <strong>composite indexes and partial indexes</strong>, reducing query times from seconds to milliseconds on tables with billions of rows." },
      { kind: "bullets", items: [
        "<strong>Composite index</strong> — Composite index on (channel_id, timestamp) for chronological message retrieval",
        "<strong>Partial index</strong> — Partial index on unread messages only (small subset of total data)",
        "<strong>GIN for search</strong> — GIN index on message body for full-text search",
        "<strong>Remove unused</strong> — Regular index analysis to find unused indexes wasting write performance"
      ] },
      { kind: "sources", items: ["Slack Engineering Blog, 'Scaling Datastores at Slack'"] }
    ] },
    { type: "guide", typeLabel: "Step-by-Step Guide", title: "Index Optimization Playbook", content: [
      { kind: "bullets", items: [
        "Step 1: Find slow queries: enable pg_stat_statements or slow query log",
        "Step 2: Run EXPLAIN ANALYZE on each slow query -- look for Seq Scans",
        "Step 3: Add indexes on columns in WHERE, JOIN, and ORDER BY clauses",
        "<strong>Composite indexes</strong> — Step 4: Use composite indexes for multi-column queries (leftmost prefix rule)",
        "<strong>Partial indexes</strong> — Step 5: Use partial indexes for queries that filter on a common condition",
        "<strong>Remove unused</strong> — Step 6: Remove unused indexes -- they slow down writes for no benefit"
      ] }
    ] },
    { type: "practices", typeLabel: "Best Practices", title: "Indexing Rules", content: [
      { kind: "bullets", items: [
        "✅ Always EXPLAIN ANALYZE before and after adding an index",
        "✅ Index columns used in WHERE, JOIN ON, and ORDER BY",
        "✅ Use composite indexes with the most selective column first",
        "✅ Use partial indexes for queries with common filters (status = 'active')",
        "❌ Don't index every column -- each index slows writes and uses disk",
        "❌ Don't forget: composite index on (A, B) does NOT help queries on B alone"
      ] }
    ] },
    { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Indexing Anti-Patterns", content: [
      { kind: "bullets", items: [
        "<strong>Over-indexing</strong> — 20 indexes on a write-heavy table kills insert performance",
        "<strong>Wrong column order</strong> — Composite index (A, B) doesn't help WHERE B = X",
        "<strong>Low-selectivity indexes</strong> — Indexing a boolean column (true/false) rarely helps",
        "<strong>Unused indexes</strong> — Indexes that no query uses waste disk and slow writes"
      ] }
    ] },
    { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
      { kind: "bullets", items: [
        "Enable pg_stat_statements and find your top 5 slowest queries",
        "Run EXPLAIN ANALYZE on each and check for sequential scans",
        "Add one missing index and measure the improvement",
        "Find and remove one unused index"
      ] }
    ] },
    { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
      { kind: "bullets", items: [
        "Missing indexes are the #1 cause of slow queries.",
        "B-tree for equality/range, GIN for JSON/text, GiST for geospatial.",
        "Composite index column order matters -- leftmost prefix rule.",
        "Always EXPLAIN ANALYZE. Remove unused indexes."
      ] },
      { kind: "quality", items: [
        { label: "Actionability", score: 5 },
        { label: "Correctness", score: 5 },
        { label: "Visual Appeal", score: 4 },
        { label: "Engagement", score: 5 }
      ] }
    ] }
  ]
};

window.DEEP_DIVES[179] = { title: "Database Transactions & Isolation Levels", icon: "🔒", tag: "data", slides: [
  { type: "hook", typeLabel: "Why It Matters", title: "The Bugs Hiding in Your Isolation Level", content: [
    { kind: "text", value: "Your database's isolation level determines what one transaction can see while another is in progress. The wrong level causes <strong>phantom reads, lost updates, and bugs that only appear under load</strong>." },
    { kind: "stats", items: [{ value: "4", label: "isolation levels with different trade-offs" }, { value: "90%", label: "of apps use Read Committed without knowing" }, { value: "0", label: "concurrency bugs at Serializable (but highest latency)" }] },
    { kind: "sources", items: ["PostgreSQL Documentation, 'Transaction Isolation'", "Martin Kleppmann, 'DDIA', Ch. 7"] }
  ] },
  { type: "problem", typeLabel: "The Problem", title: "Concurrency Anomalies", content: [
    { kind: "text", value: "Two users update the same inventory count simultaneously. Both read quantity=10, both subtract 1, both write 9. <strong>One decrement is lost.</strong>" },
    { kind: "bullets", items: ["<strong>Dirty reads</strong> — Seeing uncommitted data from another transaction", "<strong>Non-repeatable reads</strong> — Same query returns different results within one transaction", "<strong>Phantom reads</strong> — New rows appear between two identical queries", "<strong>Lost updates</strong> — Concurrent writes overwrite each other silently"] }
  ] },
  { type: "concepts", typeLabel: "Core Concepts", title: "Isolation Levels", content: [
    { kind: "bullets", items: ["<strong>Read Uncommitted</strong> — See other transactions' uncommitted writes. Almost never used.", "<strong>Read Committed</strong> — Default in PostgreSQL. Only see committed data. Still allows non-repeatable reads.", "<strong>Repeatable Read</strong> — Snapshot at transaction start. Same query always returns same results. Prevents lost updates in PG.", "<strong>Serializable</strong> — Transactions behave as if executed one at a time. Strongest guarantee, highest overhead."] },
    { kind: "callout", style: "insight", value: "PostgreSQL's Repeatable Read is actually Snapshot Isolation (MVCC). It prevents more anomalies than the SQL standard requires." }
  ] },
  { type: "how", typeLabel: "How It Works", title: "Isolation in Practice", content: [
    { kind: "code", value: "-- Lost update with Read Committed:\n-- TX1: SELECT qty FROM inventory WHERE id=1;  -> 10\n-- TX2: SELECT qty FROM inventory WHERE id=1;  -> 10\n-- TX1: UPDATE inventory SET qty=9 WHERE id=1;\n-- TX2: UPDATE inventory SET qty=9 WHERE id=1;  -- Lost update!\n\n-- Fix 1: SELECT FOR UPDATE (pessimistic lock)\nBEGIN;\nSELECT qty FROM inventory WHERE id=1 FOR UPDATE;  -- locks row\nUPDATE inventory SET qty = qty - 1 WHERE id=1;\nCOMMIT;\n\n-- Fix 2: Atomic update (no read-then-write)\nUPDATE inventory SET qty = qty - 1 WHERE id=1 AND qty > 0;\n\n-- Fix 3: Repeatable Read / Serializable\nBEGIN ISOLATION LEVEL REPEATABLE READ;\n-- TX2 will get a serialization error and must retry" }
  ] },
  { type: "example", typeLabel: "Real-World Example", title: "Stripe's Transaction Strategy", content: [
    { kind: "text", value: "Stripe uses <strong>Serializable isolation for payment processing</strong> and Read Committed for non-critical reads. Different isolation levels for different risk profiles." },
    { kind: "bullets", items: ["<strong>Critical writes</strong> — Payment mutations use Serializable to prevent double charges", "<strong>Relaxed reads</strong> — Dashboard reads use Read Committed for performance", "<strong>Double protection</strong> — Idempotency keys combined with Serializable prevent all payment anomalies", "<strong>Expected retries</strong> — Application retries on serialization errors (expected and handled)"] },
    { kind: "sources", items: ["Brandur Leach, 'Using Atomic Transactions to Power an Idempotent API', brandur.org"] }
  ] },
  { type: "guide", typeLabel: "Step-by-Step Guide", title: "Choosing Isolation Levels", content: [
    { kind: "bullets", items: ["<strong>Find write conflicts</strong> — Step 1: Identify write-write conflicts in your system (concurrent updates to same row)", "<strong>Atomic updates</strong> — Step 2: Use atomic updates (SET qty = qty - 1) where possible -- simplest fix", "<strong>Lock for read-write</strong> — Step 3: Use SELECT FOR UPDATE for read-then-write patterns", "<strong>Serializable for finance</strong> — Step 4: Use Serializable for critical financial operations", "<strong>Retry logic</strong> — Step 5: Implement retry logic for serialization errors", "<strong>Default level</strong> — Step 6: Default to Read Committed for read-heavy, non-critical paths"] }
  ] },
  { type: "practices", typeLabel: "Best Practices", title: "Transaction Rules", content: [
    { kind: "bullets", items: ["<strong>Atomic updates</strong> — ✅ Use atomic updates instead of read-then-write patterns", "<strong>Short transactions</strong> — ✅ Keep transactions short -- long transactions hold locks", "<strong>Expected retries</strong> — ✅ Retry on serialization errors (they are expected, not bugs)", "<strong>Selective Serializable</strong> — ❌ Don't use Serializable everywhere -- the retry overhead is high", "<strong>No user waits</strong> — ❌ Don't hold transactions open while waiting for user input", "<strong>Lost updates matter</strong> — ❌ Don't ignore lost updates -- they cause real data corruption"] }
  ] },
  { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [
    { kind: "bullets", items: ["<strong>Read-then-write without locks</strong> — Classic lost update pattern", "<strong>Long transactions</strong> — Holding locks for seconds blocks all concurrent access", "<strong>No retry logic</strong> — Serializable without retry crashes on contention", "<strong>Wrong default</strong> — Assuming your ORM handles concurrency (it doesn't)"] }
  ] },
  { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
    { kind: "bullets", items: ["<strong>Check default level</strong> — Check your database's default isolation level", "<strong>Find race patterns</strong> — Find read-then-write patterns in your code", "<strong>Convert to atomic</strong> — Convert one to an atomic update or SELECT FOR UPDATE", "<strong>Concurrency test</strong> — Test with concurrent requests to verify no lost updates"] }
  ] },
  { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
    { kind: "bullets", items: ["<strong>Visibility control</strong> — Isolation levels control what transactions see during concurrent access.", "<strong>Atomic updates</strong> — Use atomic updates (SET x = x - 1) to avoid read-then-write races.", "<strong>Match to stakes</strong> — Serializable for financial data; Read Committed for everything else.", "<strong>Retry required</strong> — Always implement retry logic when using higher isolation levels."] },
    { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }
  ] }
] };

window.DEEP_DIVES[180] = { title: "Database Replication Patterns", icon: "🔄", tag: "data", slides: [
  { type: "hook", typeLabel: "Why It Matters", title: "Copies of Your Data, Copies of Your Problems", content: [
    { kind: "text", value: "Replication keeps copies of your data on multiple nodes for <strong>read scaling, high availability, and disaster recovery</strong>. But each replication strategy has different consistency trade-offs." },
    { kind: "stats", items: [{ value: "3", label: "replication patterns: leader-follower, multi-leader, leaderless" }, { value: "ms", label: "typical replication lag" }, { value: "RPO=0", label: "achievable with synchronous replication" }] },
    { kind: "sources", items: ["Martin Kleppmann, 'DDIA', Ch. 5: Replication"] }
  ] },
  { type: "problem", typeLabel: "The Problem", title: "Single Point of Failure", content: [
    { kind: "text", value: "One database server means one failure away from total downtime. It also means your read capacity is limited to what one machine can handle." },
    { kind: "bullets", items: ["<strong>Single point failure</strong> — Server failure = complete downtime", "<strong>Read bottleneck</strong> — Read capacity limited to one machine's throughput", "<strong>No disaster recovery</strong> — No disaster recovery if the disk fails", "<strong>Downtime for maintenance</strong> — Maintenance requires downtime (upgrades, backups)"] }
  ] },
  { type: "concepts", typeLabel: "Core Concepts", title: "Replication Strategies", content: [
    { kind: "bullets", items: ["<strong>Leader-Follower (Primary-Replica)</strong> — One leader handles all writes. Followers replicate and serve reads. Simple, proven.", "<strong>Multi-Leader</strong> — Multiple leaders accept writes. Used for multi-region. Conflict resolution required.", "<strong>Leaderless</strong> — Any node accepts reads and writes. Quorum-based consistency (DynamoDB, Cassandra).", "<strong>Synchronous</strong> — Leader waits for follower to confirm write. Strong consistency, higher latency.", "<strong>Asynchronous</strong> — Leader doesn't wait. Lower latency, risk of data loss on leader failure."] },
    { kind: "callout", style: "insight", value: "Most applications should start with leader-follower async replication. Upgrade to synchronous for the primary follower if you need RPO=0." }
  ] },
  { type: "how", typeLabel: "How It Works", title: "Leader-Follower Setup", content: [
    { kind: "code", value: "-- PostgreSQL streaming replication setup\n\n-- On primary (leader):\n-- postgresql.conf\nwal_level = replica\nmax_wal_senders = 5\nsynchronous_commit = on  -- 'on' for sync, 'off' for async\n\n-- On replica (follower):\n-- Create replication slot\npg_basebackup -h primary-host -D /var/lib/postgresql/data -R\n\n-- Application routing:\n// Writes -> always go to leader\nconst writePool = new Pool({ host: 'primary.db.internal' });\n\n// Reads -> can go to any replica\nconst readPool = new Pool({ host: 'replica.db.internal' });\n\n// Read-your-own-writes -> route to leader for the writing user\nasync function getUser(userId, isWriter) {\n  const pool = isWriter ? writePool : readPool;\n  return pool.query('SELECT * FROM users WHERE id = $1', [userId]);\n}" }
  ] },
  { type: "example", typeLabel: "Real-World Example", title: "GitHub's MySQL Replication", content: [
    { kind: "text", value: "GitHub uses <strong>leader-follower MySQL replication</strong> with multiple read replicas and a custom proxy (ProxySQL) to route reads and writes." },
    { kind: "bullets", items: ["<strong>Single writer</strong> — Single leader per shard handles all writes", "<strong>Read scaling</strong> — Multiple followers serve read traffic (5-10x read scaling)", "<strong>Automatic routing</strong> — ProxySQL routes queries to the right node automatically", "<strong>Fast failover</strong> — Automated failover promotes a follower within seconds"] },
    { kind: "sources", items: ["GitHub Engineering Blog, 'MySQL High Availability at GitHub'"] }
  ] },
  { type: "guide", typeLabel: "Step-by-Step Guide", title: "Setting Up Replication", content: [
    { kind: "bullets", items: ["<strong>Start async</strong> — Step 1: Set up leader-follower with async replication", "<strong>Route queries</strong> — Step 2: Route writes to leader, reads to followers in application code", "<strong>Monitor lag</strong> — Step 3: Monitor replication lag -- alert if it exceeds your SLA", "<strong>Test failover</strong> — Step 4: Test failover: kill the leader and verify automated promotion", "<strong>Sync for safety</strong> — Step 5: Consider synchronous replication for the primary follower (RPO=0)", "<strong>Multi-region</strong> — Step 6: For multi-region, evaluate multi-leader or leaderless approaches"] }
  ] },
  { type: "practices", typeLabel: "Best Practices", title: "Replication Rules", content: [
    { kind: "bullets", items: ["<strong>Leader-follower first</strong> — ✅ Start with leader-follower async replication", "✅ Monitor replication lag continuously", "✅ Test failover regularly (monthly)", "<strong>Own-writes handling</strong> — ✅ Handle read-your-own-writes in application code", "<strong>Conflict strategy</strong> — ❌ Don't use multi-leader without a clear conflict resolution strategy", "<strong>Design for lag</strong> — ❌ Don't assume zero replication lag -- design for eventual consistency on replicas"] }
  ] },
  { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [
    { kind: "bullets", items: ["<strong>Untested failover</strong> — Automated failover that has never been tested fails when needed", "<strong>Ignoring lag</strong> — Reading stale data from a lagging replica without knowing", "<strong>Write splitting</strong> — Accidentally sending writes to a read replica", "<strong>Split-brain</strong> — Two nodes both thinking they're the leader after network partition"] }
  ] },
  { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
    { kind: "bullets", items: ["<strong>Check replication</strong> — Check if your database has replication set up", "<strong>Monitor lag</strong> — Monitor your replication lag -- is it within SLA?", "<strong>Test failover</strong> — Test your failover procedure -- does it work?", "<strong>Route one read</strong> — Route at least one read-heavy query to a replica"] }
  ] },
  { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
    { kind: "bullets", items: ["<strong>Start with leader-follower</strong> — Leader-follower is the default replication pattern. Start there.", "<strong>Async vs sync</strong> — Async replication = lower latency, possible data loss. Sync = higher latency, no data loss.", "<strong>Regular testing</strong> — Monitor replication lag and test failover regularly.", "<strong>Own-writes handling</strong> — Handle read-your-own-writes in your application code."] },
    { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }
  ] }
] };

window.DEEP_DIVES[181] = { title: "Database Sharding Strategies", icon: "🔪", tag: "scaling", slides: [
  { type: "hook", typeLabel: "Why It Matters", title: "Horizontal Scaling for Data", content: [
    { kind: "text", value: "When your database is too large for one server, sharding splits it across multiple servers. But premature sharding is a <strong>career-ending mistake</strong> -- it adds enormous complexity." },
    { kind: "stats", items: [{ value: "TB+", label: "data size before sharding is typically needed" }, { value: "10x", label: "operational complexity increase" }, { value: "0", label: "cross-shard joins (by design)" }] }
  ] },
  { type: "problem", typeLabel: "The Problem", title: "Vertical Scaling Limits", content: [
    { kind: "text", value: "You've maxed out CPU, RAM, and disk on the biggest available server. Read replicas handle read scaling, but <strong>write throughput is bottlenecked on one leader</strong>." },
    { kind: "bullets", items: ["<strong>Write ceiling</strong> — Single leader handles all writes -- can't scale writes with replicas", "<strong>Billion-row slowdown</strong> — Table has billions of rows -- even indexed queries are slow", "<strong>Slow backups</strong> — Backup and restore takes hours, impacting RPO", "<strong>Migration pain</strong> — Schema migrations on TB-scale tables take days"] }
  ] },
  { type: "concepts", typeLabel: "Core Concepts", title: "Sharding Strategies", content: [
    { kind: "bullets", items: ["<strong>Hash-Based</strong> — hash(shard_key) % N. Even distribution, but resharding moves lots of data.", "<strong>Range-Based</strong> — Ranges of shard key go to different shards (e.g., users A-M, N-Z). Hot spots on popular ranges.", "<strong>Directory-Based</strong> — Lookup table maps keys to shards. Flexible but adds a lookup hop.", "<strong>Geographic</strong> — Data stays in the region where the user is located. Best for compliance and latency."] },
    { kind: "callout", style: "warning", value: "Premature sharding is a career-ending mistake. PostgreSQL handles tens of TB on a single server with proper indexing. Exhaust vertical scaling, read replicas, and partitioning before sharding." }
  ] },
  { type: "how", typeLabel: "How It Works", title: "Application-Level Sharding", content: [
    { kind: "code", value: "// Hash-based sharding\nfunction getShardId(userId, totalShards) {\n  return hash(userId) % totalShards;\n}\n\nconst shards = [\n  new Pool({ host: 'shard-0.db.internal' }),\n  new Pool({ host: 'shard-1.db.internal' }),\n  new Pool({ host: 'shard-2.db.internal' }),\n];\n\nasync function getUser(userId) {\n  const shardId = getShardId(userId, shards.length);\n  return shards[shardId].query(\n    'SELECT * FROM users WHERE id = $1', [userId]\n  );\n}\n\n// Cross-shard query (scatter-gather -- EXPENSIVE)\nasync function searchAllUsers(query) {\n  const results = await Promise.all(\n    shards.map(s => s.query('SELECT * FROM users WHERE name LIKE $1', [query]))\n  );\n  return results.flat(); // merge results from all shards\n}" }
  ] },
  { type: "example", typeLabel: "Real-World Example", title: "Vitess at YouTube/Slack", content: [
    { kind: "text", value: "Vitess is a database clustering system for MySQL that handles <strong>sharding transparently</strong>. YouTube and Slack use it to scale MySQL to thousands of shards." },
    { kind: "bullets", items: ["<strong>Transparent routing</strong> — Vitess sits between app and MySQL, routing queries to correct shard", "<strong>Online resharding</strong> — Supports online resharding without downtime", "<strong>Scatter-gather</strong> — Handles cross-shard queries via scatter-gather", "<strong>Slack's migration</strong> — Slack migrated from unsharded MySQL to Vitess as they scaled"] },
    { kind: "sources", items: ["Vitess Documentation, vitess.io", "Slack Engineering Blog, 'Scaling Datastores at Slack with Vitess'"] }
  ] },
  { type: "guide", typeLabel: "Step-by-Step Guide", title: "Before and During Sharding", content: [
    { kind: "bullets", items: ["<strong>Exhaust alternatives</strong> — Step 1: EXHAUST alternatives first: indexing, query optimization, read replicas, table partitioning", "<strong>Choose shard key</strong> — Step 2: Choose your shard key carefully -- it determines data distribution and query patterns", "<strong>Key in every query</strong> — Step 3: Ensure your shard key is in every query (otherwise: scatter-gather)", "<strong>Start small</strong> — Step 4: Start with 2-4 shards and a power-of-2 scheme for easier resharding", "<strong>Use a framework</strong> — Step 5: Use a sharding proxy (Vitess, Citus, ProxySQL) instead of hand-rolling", "<strong>Plan resharding</strong> — Step 6: Plan for resharding from day one -- it will happen"] }
  ] },
  { type: "practices", typeLabel: "Best Practices", title: "Sharding Rules", content: [
    { kind: "bullets", items: ["<strong>Key in every query</strong> — ✅ Shard key must be in every query to avoid scatter-gather", "<strong>Use a framework</strong> — ✅ Use a sharding framework (Vitess, Citus) -- don't build your own", "<strong>Plan resharding</strong> — ✅ Plan resharding strategy before you shard", "<strong>Exhaust alternatives</strong> — ❌ Don't shard before exhausting vertical scaling and read replicas", "<strong>Avoid skewed keys</strong> — ❌ Don't choose a shard key with skewed distribution (e.g., country code)", "<strong>No cross-shard joins</strong> — ❌ Don't expect cross-shard joins -- redesign your data model"] }
  ] },
  { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [
    { kind: "bullets", items: ["<strong>Premature sharding</strong> — Sharding at 100GB when PostgreSQL handles 10TB easily", "<strong>Wrong shard key</strong> — Sharding by date puts all current traffic on one shard", "<strong>Cross-shard queries</strong> — Scatter-gather is 10-100x slower than single-shard", "<strong>No resharding plan</strong> — Starting with 4 shards and no way to grow to 16"] }
  ] },
  { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
    { kind: "bullets", items: ["<strong>Question the need</strong> — Evaluate: do you actually need sharding, or just better indexes/replicas?", "<strong>Identify shard key</strong> — If sharding is needed, identify the best shard key for your access patterns", "<strong>Research frameworks</strong> — Research Vitess (MySQL) or Citus (PostgreSQL) for managed sharding", "<strong>Plan resharding</strong> — Plan how you would resharding from N to 2N shards"] }
  ] },
  { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
    { kind: "bullets", items: ["<strong>Last resort</strong> — Exhaust vertical scaling, indexing, and read replicas before sharding.", "<strong>Access-pattern key</strong> — Choose your shard key based on your most common query patterns.", "<strong>Framework over DIY</strong> — Use a sharding framework (Vitess, Citus) instead of building from scratch.", "<strong>Plan for growth</strong> — Plan for resharding from day one -- your data will outgrow your initial shard count."] },
    { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }
  ] }
] };

window.DEEP_DIVES[182] = { title: "Zero-Downtime Schema Migrations", icon: "🔧", tag: "operations", slides: [
  { type: "hook", typeLabel: "Why It Matters", title: "Evolving Schemas Without Downtime", content: [
    { kind: "text", value: "Schema changes used to require maintenance windows. Modern teams deploy <strong>multiple times per day</strong>. You need to evolve your database schema without locking tables or breaking running applications." },
    { kind: "stats", items: [{ value: "0", label: "downtime with expand-contract pattern" }, { value: "hours", label: "of lock time avoided per migration" }, { value: "100%", label: "backward compatible during rollout" }] }
  ] },
  { type: "problem", typeLabel: "The Problem", title: "ALTER TABLE Locks the World", content: [
    { kind: "text", value: "A naive ALTER TABLE on a 500M row table <strong>locks the entire table for minutes to hours</strong>. Every query queues behind the lock. Your app is effectively down." },
    { kind: "bullets", items: ["<strong>Exclusive locks</strong> — ALTER TABLE acquires an exclusive lock in many databases", "<strong>Row rewriting</strong> — Adding a column with a default rewrites every row in older PostgreSQL versions", "<strong>Mid-deploy breakage</strong> — Running application code breaks if the schema changes mid-deploy", "<strong>Hard rollback</strong> — Rollback is difficult -- you can't easily undo a column removal"] }
  ] },
  { type: "concepts", typeLabel: "Core Concepts", title: "Safe Migration Patterns", content: [
    { kind: "bullets", items: ["<strong>Expand-Contract</strong> — Add new column (expand), migrate data, update code, remove old column (contract). 3 deploys, zero downtime.", "<strong>Online DDL</strong> — Tools like pt-online-schema-change (MySQL) or pg_repack that apply changes without locking.", "<strong>Dual-Write</strong> — Write to both old and new columns during migration. Backfill old data. Switch reads.", "<strong>Shadow Tables</strong> — Create a new table with the desired schema, copy data, swap names.", "<strong>Backward Compatible</strong> — Every migration step must be compatible with the currently running application code."] }
  ] },
  { type: "how", typeLabel: "How It Works", title: "Expand-Contract Migration", content: [
    { kind: "code", value: "-- Goal: rename column 'name' to 'full_name'\n\n-- Deploy 1: EXPAND (add new column)\nALTER TABLE users ADD COLUMN full_name VARCHAR(255);\n-- App code: write to BOTH 'name' and 'full_name'\n\n-- Deploy 2: BACKFILL (copy data)\nUPDATE users SET full_name = name WHERE full_name IS NULL;\n-- Run in batches of 1000 to avoid long transactions\n\n-- Deploy 3: SWITCH (read from new column)\n-- App code: read from 'full_name', still write to both\n\n-- Deploy 4: CONTRACT (remove old column)\n-- App code: only use 'full_name'\nALTER TABLE users DROP COLUMN name;\n\n-- Each deploy is independently rollback-safe!" }
  ] },
  { type: "example", typeLabel: "Real-World Example", title: "GitHub's Schema Migration", content: [
    { kind: "text", value: "GitHub deploys <strong>hundreds of times per day</strong> and uses the expand-contract pattern for every schema change on their massive MySQL databases." },
    { kind: "bullets", items: ["<strong>Lock-free tool</strong> — gh-ost (GitHub Online Schema Migration Tool) applies changes without locks", "<strong>Backward-compatible steps</strong> — Every migration is split into backward-compatible steps", "<strong>Independent rollback</strong> — Each step can be rolled back independently", "<strong>Zero downtime</strong> — Migrations on billion-row tables complete without any downtime"] },
    { kind: "sources", items: ["GitHub Engineering Blog, 'gh-ost: GitHub's Online Schema Migration Tool for MySQL'"] }
  ] },
  { type: "guide", typeLabel: "Step-by-Step Guide", title: "Safe Migration Playbook", content: [
    { kind: "bullets", items: ["<strong>Use migration tools</strong> — Step 1: Never run ALTER TABLE directly on production -- use a migration tool", "<strong>Expand-contract</strong> — Step 2: Split every schema change into expand (add) and contract (remove) phases", "<strong>Backward compatible</strong> — Step 3: Ensure each phase is backward compatible with the running application", "<strong>Small batch backfill</strong> — Step 4: Backfill data in small batches (1000 rows) to avoid long locks", "<strong>Deploy between phases</strong> — Step 5: Deploy application code changes between expand and contract phases", "<strong>Keep old columns</strong> — Step 6: Keep old columns/tables for at least one deploy cycle before removing"] }
  ] },
  { type: "practices", typeLabel: "Best Practices", title: "Migration Rules", content: [
    { kind: "bullets", items: ["<strong>Backward compatible</strong> — ✅ Every migration step must be backward compatible", "<strong>Online DDL tools</strong> — ✅ Use online DDL tools (gh-ost, pt-osc, pg_repack)", "<strong>Batch backfills</strong> — ✅ Backfill in small batches with sleep between batches", "<strong>Test at scale</strong> — ✅ Test migrations on a production-size copy first", "<strong>NOT NULL safely</strong> — ❌ Don't add NOT NULL constraints without a default in one step", "<strong>Expand-contract rename</strong> — ❌ Don't rename columns in one step -- use expand-contract"] }
  ] },
  { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [
    { kind: "bullets", items: ["<strong>Big-bang migration</strong> — ALTER TABLE on 500M rows locks the table for hours", "<strong>Not NULL without default</strong> — Fails on existing rows or locks table for backfill", "<strong>Skipping backward compatibility</strong> — Old app version crashes when new column appears", "<strong>One-step rename</strong> — Application code breaks because the old column name is gone"] }
  ] },
  { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
    { kind: "bullets", items: ["<strong>Audit past migrations</strong> — Review your last 3 migrations -- were they zero-downtime safe?", "<strong>Plan expand-contract</strong> — Plan one upcoming schema change using the expand-contract pattern", "<strong>Prod-scale staging</strong> — Set up a staging database with production-scale data for testing migrations", "<strong>Evaluate tools</strong> — Evaluate gh-ost (MySQL) or pg_repack (PostgreSQL) for your stack"] }
  ] },
  { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
    { kind: "bullets", items: ["<strong>Expand-contract</strong> — Use the expand-contract pattern: add new, migrate data, switch code, remove old.", "<strong>Backward compatible</strong> — Every migration step must be backward compatible with running code.", "<strong>Small batches</strong> — Backfill in small batches. Use online DDL tools for large tables.", "<strong>Test at scale</strong> — Test migrations on production-scale data before running them in production."] },
    { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }
  ] }
] };

window.DEEP_DIVES[183] = { title: "Write-Ahead Logging & Crash Recovery", icon: "📝", tag: "internals", slides: [
  { type: "hook", typeLabel: "Why It Matters", title: "How Databases Survive Power Failures", content: [
    { kind: "text", value: "Your database process crashes mid-write. Power goes out. The server reboots. Yet <strong>no committed data is lost</strong>. The magic behind this is the Write-Ahead Log (WAL)." },
    { kind: "stats", items: [{ value: "0", label: "committed transactions lost after crash" }, { value: "D", label: "in ACID = Durability, guaranteed by WAL" }, { value: "every", label: "modern database uses WAL or a variant" }] },
    { kind: "sources", items: ["PostgreSQL Documentation, 'Write-Ahead Logging'", "C. Mohan et al., 'ARIES: A Transaction Recovery Method', ACM TODS 1992"] }
  ] },
  { type: "problem", typeLabel: "The Problem", title: "Partial Writes and Corruption", content: [
    { kind: "text", value: "A transaction updates 3 pages on disk. After writing 2 pages, the system crashes. Without WAL, the database is left in a <strong>corrupted, inconsistent state</strong>." },
    { kind: "bullets", items: ["<strong>Partial writes</strong> — Partial writes leave data structures (B-trees) in an inconsistent state", "<strong>Destroyed state</strong> — Direct page overwrites destroy the previous state -- can't roll back", "<strong>Unflushed caches</strong> — File system caching means 'written' data may not be on disk yet", "<strong>Power corruption</strong> — Power failure during fsync can corrupt even the file system journal"] }
  ] },
  { type: "concepts", typeLabel: "Core Concepts", title: "WAL Mechanics", content: [
    { kind: "bullets", items: ["<strong>Write-Ahead</strong> — Log the change BEFORE applying it to data pages. If crash happens, replay the log.", "<strong>Redo Log</strong> — Records what changes to apply. Used to reconstruct committed transactions after crash.", "<strong>Undo Log</strong> — Records how to reverse changes. Used to roll back uncommitted transactions.", "<strong>Checkpoint</strong> — Periodic flush of dirty pages to disk. Limits how much log must be replayed on recovery.", "<strong>LSN (Log Sequence Number)</strong> — Monotonic counter that orders all WAL entries."] },
    { kind: "callout", style: "insight", value: "The key insight: sequential writes to the WAL are much faster than random writes to data pages. WAL turns random I/O into sequential I/O." }
  ] },
  { type: "how", typeLabel: "How It Works", title: "WAL Write Path", content: [
    { kind: "code", value: "// Simplified WAL write path\n\n// 1. Transaction begins\nBEGIN;\n\n// 2. Write WAL record FIRST (sequential write to log file)\nWAL: { lsn: 1001, tx: 42, op: 'UPDATE', table: 'accounts',\n       row: 7, before: {balance: 1000}, after: {balance: 900} }\n\n// 3. Modify data page in memory (buffer pool)\nbufferPool.getPage('accounts', 7).balance = 900;  // in-memory only!\n\n// 4. On COMMIT: flush WAL to disk (fsync)\nCOMMIT;  // WAL record is now durable on disk\n// Data page may still be in memory -- that's OK!\n\n// 5. Background: checkpoint flushes dirty pages to disk\n// This is async -- not in the critical path\n\n// ON CRASH RECOVERY:\n// 1. Read WAL from last checkpoint\n// 2. Redo committed transactions (apply changes)\n// 3. Undo uncommitted transactions (reverse changes)\n// 4. Database is consistent!" }
  ] },
  { type: "example", typeLabel: "Real-World Example", title: "PostgreSQL WAL", content: [
    { kind: "text", value: "PostgreSQL's WAL is the foundation for durability, replication, point-in-time recovery, and CDC." },
    { kind: "bullets", items: ["<strong>Crash recovery</strong> — WAL is used for crash recovery (durability)", "<strong>Streaming replication</strong> — Streaming replication reads WAL to keep replicas in sync", "<strong>Point-in-time recovery</strong> — pg_basebackup + WAL archiving enables point-in-time recovery", "<strong>CDC foundation</strong> — Debezium reads the WAL for Change Data Capture"] },
    { kind: "sources", items: ["PostgreSQL Documentation, 'Reliability and the Write-Ahead Log'"] }
  ] },
  { type: "guide", typeLabel: "Step-by-Step Guide", title: "WAL Configuration", content: [
    { kind: "bullets", items: ["<strong>Check WAL settings</strong> — Step 1: Understand your database's WAL settings (wal_level, checkpoint_timeout)", "<strong>Size WAL storage</strong> — Step 2: Size WAL storage appropriately (WAL can grow during write spikes)", "<strong>Tune checkpoints</strong> — Step 3: Configure checkpoint frequency to balance recovery time vs. I/O", "<strong>Enable archiving</strong> — Step 4: Enable WAL archiving for point-in-time recovery", "<strong>Monitor disk usage</strong> — Step 5: Monitor WAL generation rate and disk usage", "<strong>Test crash recovery</strong> — Step 6: Test crash recovery: kill -9 the database process and verify it restarts cleanly"] }
  ] },
  { type: "practices", typeLabel: "Best Practices", title: "WAL Rules", content: [
    { kind: "bullets", items: ["<strong>Enable archiving</strong> — ✅ Enable WAL archiving for point-in-time recovery", "<strong>Monitor growth</strong> — ✅ Monitor WAL disk usage -- it grows during write spikes", "<strong>Sync commits on</strong> — ✅ Use synchronous_commit = on for critical data (default in PG)", "<strong>Never disable fsync</strong> — ❌ Don't turn off fsync for performance -- you will lose data", "<strong>Separate disks</strong> — ❌ Don't put WAL on the same disk as data files in high-performance setups", "<strong>Checkpoint warnings</strong> — ❌ Don't ignore checkpoint warnings -- they indicate I/O pressure"] }
  ] },
  { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [
    { kind: "bullets", items: ["<strong>Disabling fsync</strong> — 10x faster but guaranteed data loss on crash", "<strong>WAL disk full</strong> — Database stops accepting writes. Monitor disk space!", "<strong>Too frequent checkpoints</strong> — Excessive I/O. Too infrequent: long recovery time.", "<strong>No WAL archiving</strong> — Can't do point-in-time recovery. Critical for disaster recovery."] }
  ] },
  { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
    { kind: "bullets", items: ["<strong>Check WAL config</strong> — Check your database's WAL configuration", "<strong>Verify archiving</strong> — Verify WAL archiving is enabled for disaster recovery", "<strong>Test crash recovery</strong> — Test crash recovery: kill -9 the DB and check startup", "<strong>Monitor WAL rate</strong> — Monitor WAL generation rate and disk usage"] }
  ] },
  { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
    { kind: "bullets", items: ["<strong>Durability guarantee</strong> — WAL guarantees durability: changes are logged before being applied.", "<strong>Crash recovery</strong> — On crash: replay committed WAL entries, undo uncommitted ones.", "<strong>Multi-purpose</strong> — WAL is also the foundation for replication, PITR, and CDC.", "<strong>Never disable fsync</strong> — Never disable fsync. Monitor WAL disk usage."] },
    { kind: "quality", items: [{ label: "Actionability", score: 4 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }
  ] }
] };

window.DEEP_DIVES[184] = { title: "Time-Series Databases", icon: "⏱️", tag: "data", slides: [
  { type: "hook", typeLabel: "Why It Matters", title: "When Time Is the Primary Dimension", content: [
    { kind: "text", value: "Metrics, IoT sensor data, stock prices, application logs -- all are <strong>time-indexed, append-heavy, and query by time range</strong>. General-purpose databases struggle with this pattern." },
    { kind: "stats", items: [{ value: "10x", label: "better compression than row-based DBs for time-series" }, { value: "100x", label: "faster time-range queries with specialized storage" }, { value: "PB", label: "scale achievable with modern TSDBs" }] }
  ] },
  { type: "problem", typeLabel: "The Problem", title: "General DBs at Time-Series Scale", content: [
    { kind: "text", value: "Storing 1M metrics per second in PostgreSQL requires extensive tuning. Time-range queries on billions of rows are slow. Old data needs automatic expiration." },
    { kind: "bullets", items: ["<strong>Row storage mismatch</strong> — Row-based storage is inefficient for columnar time-series access", "<strong>No lifecycle management</strong> — No automatic data lifecycle management (retention, downsampling)", "<strong>Index bloat</strong> — Indexes on timestamp columns grow enormous", "<strong>Slow aggregations</strong> — Aggregation queries (avg, sum over time) are slow without pre-computation"] }
  ] },
  { type: "concepts", typeLabel: "Core Concepts", title: "TSDB Fundamentals", content: [
    { kind: "bullets", items: ["<strong>Time-Series</strong> — A sequence of (timestamp, value) pairs, often with labels/tags", "<strong>Columnar Storage</strong> — Store each column separately for better compression and scan speed", "<strong>Retention Policies</strong> — Automatically delete or downsample old data", "<strong>Continuous Aggregates</strong> — Pre-compute rollups (5min, 1hr, 1day) for fast dashboard queries", "<strong>Down-sampling</strong> — Reduce resolution of old data (per-second -> per-minute -> per-hour)"] }
  ] },
  { type: "how", typeLabel: "How It Works", title: "TimescaleDB Example", content: [
    { kind: "code", value: "-- TimescaleDB: PostgreSQL extension for time-series\nCREATE TABLE metrics (\n  time TIMESTAMPTZ NOT NULL,\n  device_id TEXT NOT NULL,\n  temperature DOUBLE PRECISION,\n  humidity DOUBLE PRECISION\n);\n\nSELECT create_hypertable('metrics', 'time');\n\n-- Insert millions of rows per second\nINSERT INTO metrics VALUES (NOW(), 'sensor-1', 22.5, 45.0);\n\n-- Time-range query with automatic chunk pruning\nSELECT time_bucket('5 minutes', time) AS bucket,\n       AVG(temperature) as avg_temp\nFROM metrics\nWHERE time > NOW() - INTERVAL '24 hours'\n  AND device_id = 'sensor-1'\nGROUP BY bucket\nORDER BY bucket;\n\n-- Automatic retention: drop data older than 90 days\nSELECT add_retention_policy('metrics', INTERVAL '90 days');" }
  ] },
  { type: "example", typeLabel: "Real-World Example", title: "Uber's Metrics Platform", content: [
    { kind: "text", value: "Uber's M3 platform ingests <strong>billions of metrics per second</strong> using a custom time-series database built on top of the concepts from Prometheus and Gorilla (Facebook)." },
    { kind: "bullets", items: ["<strong>Auto retention</strong> — M3DB stores metrics with automatic retention and downsampling", "<strong>Massive scale</strong> — Handles 5+ billion active time-series", "<strong>12x compression</strong> — Delta-of-delta encoding achieves 12x compression", "<strong>Dual-purpose</strong> — Supports both real-time dashboards and long-term trend analysis"] },
    { kind: "sources", items: ["Uber Engineering Blog, 'M3: Uber's Open Source, Large-scale Metrics Platform'"] }
  ] },
  { type: "guide", typeLabel: "Step-by-Step Guide", title: "Choosing a TSDB", content: [
    { kind: "bullets", items: ["<strong>Try TimescaleDB</strong> — Step 1: If you're already on PostgreSQL, try TimescaleDB (extension, no new infra)", "<strong>Prometheus for metrics</strong> — Step 2: For pure metrics/monitoring, evaluate Prometheus + Thanos/Mimir", "<strong>IoT options</strong> — Step 3: For high-volume IoT/telemetry, evaluate InfluxDB or QuestDB", "<strong>ClickHouse analytics</strong> — Step 4: For analytics on time-series, evaluate ClickHouse (OLAP + time-series)", "<strong>Retention from day one</strong> — Step 5: Set up retention policies from day one -- time-series data grows fast", "<strong>Pre-compute rollups</strong> — Step 6: Pre-compute aggregates (5min, 1hr rollups) for dashboard performance"] }
  ] },
  { type: "practices", typeLabel: "Best Practices", title: "TSDB Rules", content: [
    { kind: "bullets", items: ["<strong>Retention policies</strong> — ✅ Always set retention policies -- time-series data grows unbounded", "<strong>Pre-compute aggregates</strong> — ✅ Pre-compute aggregates for common dashboard queries", "<strong>Time partitioning</strong> — ✅ Partition/chunk by time for efficient pruning and deletion", "<strong>Use specialized DBs</strong> — ❌ Don't store time-series in a general-purpose row-based database at scale", "<strong>Downsample old data</strong> — ❌ Don't keep per-second resolution for data older than a week", "<strong>Index tags</strong> — ❌ Don't forget to index tags/labels for filtered queries"] }
  ] },
  { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [
    { kind: "bullets", items: ["<strong>No retention</strong> — Disk fills up because data is never expired", "<strong>High cardinality labels</strong> — Using user_id as a label creates millions of series", "<strong>Missing rollups</strong> — Querying raw per-second data for 30-day dashboards", "<strong>Wrong tool</strong> — Using InfluxDB for transactional business data"] }
  ] },
  { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
    { kind: "bullets", items: ["<strong>Find time-series data</strong> — Identify time-series data in your system (metrics, logs, sensor data)", "<strong>Evaluate storage fit</strong> — Evaluate if your current storage is appropriate for the access pattern", "<strong>Add retention</strong> — Add a retention policy to automatically expire old data", "<strong>Pre-compute one query</strong> — Pre-compute one aggregate for a common dashboard query"] }
  ] },
  { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
    { kind: "bullets", items: ["<strong>Optimized access</strong> — Time-series databases are optimized for append-heavy, time-range query patterns.", "<strong>Retention and aggregates</strong> — Always set retention policies and pre-compute aggregates.", "<strong>Tool selection</strong> — TimescaleDB extends PostgreSQL; ClickHouse for analytics; Prometheus for monitoring.", "<strong>Cardinality danger</strong> — Watch out for high-cardinality labels -- they explode storage and query time."] },
    { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }
  ] }
] };

window.DEEP_DIVES[185] = { title: "Search Engines: Elasticsearch & Beyond", icon: "🔍", tag: "data", slides: [
  { type: "hook", typeLabel: "Why It Matters", title: "Building Search Users Love", content: [
    { kind: "text", value: "Users expect search to be fast, relevant, and typo-tolerant. SQL LIKE queries don't cut it. Search engines use <strong>inverted indexes, analyzers, and relevance scoring</strong> to deliver results in milliseconds." },
    { kind: "stats", items: [{ value: "<50ms", label: "expected search latency" }, { value: "10x", label: "better relevance than SQL LIKE" }, { value: "TF-IDF/BM25", label: "algorithms powering modern search" }] }
  ] },
  { type: "problem", typeLabel: "The Problem", title: "SQL LIKE Is Not Search", content: [
    { kind: "text", value: "WHERE title LIKE '%distributed systems%' is case-sensitive, doesn't handle synonyms, can't rank by relevance, and <strong>full-table-scans on every query</strong>." },
    { kind: "bullets", items: ["<strong>No index on LIKE</strong> — LIKE '%term%' cannot use indexes -- full table scan every time", "<strong>No relevance ranking</strong> — No relevance ranking -- results aren't ordered by quality", "<strong>No fuzzy matching</strong> — No fuzzy matching -- typos return zero results", "<strong>No stemming</strong> — No stemming -- 'running' doesn't match 'run'"] }
  ] },
  { type: "concepts", typeLabel: "Core Concepts", title: "Search Engine Fundamentals", content: [
    { kind: "bullets", items: ["<strong>Inverted Index</strong> — Maps each word to the list of documents containing it. Enables O(1) word lookup.", "<strong>Analyzer</strong> — Pipeline: tokenize text -> lowercase -> remove stop words -> stem words", "<strong>BM25</strong> — Relevance scoring algorithm. Balances term frequency (TF) with document frequency (IDF).", "<strong>Fuzzy Matching</strong> — Edit distance tolerance. 'distribuuted' still matches 'distributed'.", "<strong>Facets/Aggregations</strong> — Real-time counts by category (e.g., 10 results in 'Books', 5 in 'Videos')."] }
  ] },
  { type: "how", typeLabel: "How It Works", title: "Elasticsearch Example", content: [
    { kind: "code", value: "// Index a document\nPUT /articles/_doc/1\n{\n  \"title\": \"Distributed Systems Design\",\n  \"body\": \"Event-driven architecture enables scalable...\",\n  \"author\": \"Alice\",\n  \"tags\": [\"architecture\", \"distributed-systems\"]\n}\n\n// Search with relevance ranking\nGET /articles/_search\n{\n  \"query\": {\n    \"multi_match\": {\n      \"query\": \"distribted systems\",  // typo!\n      \"fields\": [\"title^3\", \"body\"],  // title has 3x weight\n      \"fuzziness\": \"AUTO\"             // handles typos\n    }\n  },\n  \"highlight\": { \"fields\": { \"body\": {} } },\n  \"aggs\": {\n    \"by_tag\": { \"terms\": { \"field\": \"tags.keyword\" } }\n  }\n}" }
  ] },
  { type: "example", typeLabel: "Real-World Example", title: "GitHub Code Search", content: [
    { kind: "text", value: "GitHub's code search indexes <strong>200+ million repositories</strong> using a custom search engine (Blackbird) built on concepts from Elasticsearch and Zoekt." },
    { kind: "bullets", items: ["<strong>Code-aware index</strong> — Custom inverted index optimized for code (respects syntax, symbols)", "<strong>Trigram indexing</strong> — Trigram-based indexing for substring matching", "<strong>Multi-mode search</strong> — Handles regex, exact matching, and fuzzy search", "<strong>Sub-100ms results</strong> — Returns results across billions of files in under 100ms"] },
    { kind: "sources", items: ["GitHub Engineering Blog, 'A brief history of code search at GitHub'"] }
  ] },
  { type: "guide", typeLabel: "Step-by-Step Guide", title: "Adding Search", content: [
    { kind: "bullets", items: ["<strong>PG search first</strong> — Step 1: For basic search on <1M docs, try PostgreSQL full-text search first", "<strong>Elasticsearch next</strong> — Step 2: For advanced search needs, set up Elasticsearch or OpenSearch", "<strong>Design mappings</strong> — Step 3: Design your index mappings (which fields are searchable, which are filterable)", "<strong>Sync via CDC</strong> — Step 4: Keep the search index in sync with your primary DB (CDC or outbox pattern)", "<strong>Tune relevance</strong> — Step 5: Tune relevance: boost important fields, add synonyms, configure analyzers", "<strong>Monitor quality</strong> — Step 6: Monitor search latency, zero-result rates, and click-through rates"] }
  ] },
  { type: "practices", typeLabel: "Best Practices", title: "Search Rules", content: [
    { kind: "bullets", items: ["<strong>PG search first</strong> — ✅ PostgreSQL full-text search is often sufficient for basic needs", "<strong>Keep index in sync</strong> — ✅ Use CDC or outbox to keep search index in sync with source of truth", "<strong>Monitor zero results</strong> — ✅ Monitor zero-result rate -- it reveals gaps in your search coverage", "<strong>Not a primary DB</strong> — ❌ Don't use Elasticsearch as your primary database", "<strong>Tune relevance</strong> — ❌ Don't skip relevance tuning -- default scoring rarely matches user expectations", "<strong>Handle index rebuilds</strong> — ❌ Don't forget to handle index rebuilding (data drift, schema changes)"] }
  ] },
  { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [
    { kind: "bullets", items: ["<strong>ES as primary DB</strong> — Elasticsearch is not a database. It can lose data.", "<strong>No sync strategy</strong> — Search index drifts from source of truth", "<strong>Default analyzers</strong> — English text with CJK analyzer gives terrible results", "<strong>Unbounded queries</strong> — Fetching 10K results when user sees 10"] }
  ] },
  { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
    { kind: "bullets", items: ["<strong>Evaluate relevance</strong> — Evaluate your current search: are users getting relevant results?", "<strong>Check zero-result rate</strong> — Check your zero-result rate -- is it above 10%?", "<strong>Try fuzzy matching</strong> — Try adding fuzzy matching and see if user satisfaction improves", "<strong>Monitor quality</strong> — Set up monitoring for search latency and result quality"] }
  ] },
  { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
    { kind: "bullets", items: ["<strong>Inverted indexes</strong> — Search engines use inverted indexes and BM25 for fast, relevant results.", "<strong>Start with PG</strong> — Start with PostgreSQL full-text search; graduate to Elasticsearch when needed.", "<strong>Sync via CDC</strong> — Keep the search index in sync with your primary database via CDC or outbox.", "<strong>Quality metrics</strong> — Monitor zero-result rates and search latency as key quality metrics."] },
    { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }
  ] }
] };

window.DEEP_DIVES[186] = { title: "Redis: More Than a Cache", icon: "🔴", tag: "data", slides: [
  { type: "hook", typeLabel: "Why It Matters", title: "The Swiss Army Knife of Infrastructure", content: [
    { kind: "text", value: "Redis is not just a cache. It's a <strong>pub/sub broker, rate limiter, leaderboard engine, session store, distributed lock manager, and stream processor</strong> -- all in one sub-millisecond data structure server." },
    { kind: "stats", items: [{ value: "<1ms", label: "typical operation latency" }, { value: "1M+", label: "operations per second per node" }, { value: "10+", label: "data structures beyond simple key-value" }] },
    { kind: "sources", items: ["Redis Documentation, redis.io", "Salvatore Sanfilippo, 'Redis in Action', Manning"] }
  ] },
  { type: "problem", typeLabel: "The Problem", title: "Building Features That Need Speed", content: [
    { kind: "text", value: "Some features need sub-millisecond responses that databases can't provide: real-time leaderboards, rate limiting, session management, and live counters." },
    { kind: "bullets", items: ["<strong>Leaderboards</strong> — Leaderboards need sorted sets updated in real-time", "<strong>Rate limiting</strong> — Rate limiting needs atomic counters with TTL", "<strong>Session storage</strong> — Session storage needs fast key-value with expiration", "<strong>Pub/sub messaging</strong> — Pub/sub needs instant message delivery to connected clients"] }
  ] },
  { type: "concepts", typeLabel: "Core Concepts", title: "Redis Data Structures", content: [
    { kind: "bullets", items: ["<strong>Strings</strong> — Key-value. Caching, counters (INCR), distributed locks (SET NX).", "<strong>Hashes</strong> — Field-value maps. User sessions, object properties.", "<strong>Sorted Sets</strong> — Members with scores, automatically sorted. Leaderboards, priority queues.", "<strong>Lists</strong> — Ordered sequences. Message queues, activity feeds.", "<strong>Streams</strong> — Append-only log with consumer groups. Like Kafka, but simpler.", "<strong>HyperLogLog</strong> — Probabilistic unique counting. 12KB to count billions of unique items."] }
  ] },
  { type: "how", typeLabel: "How It Works", title: "Redis Beyond Caching", content: [
    { kind: "code", value: "// Rate limiter (sliding window)\nasync function isRateLimited(userId, limit = 100, windowSec = 60) {\n  const key = `ratelimit:${userId}`;\n  const now = Date.now();\n  await redis.zremrangebyscore(key, 0, now - windowSec * 1000);\n  const count = await redis.zcard(key);\n  if (count >= limit) return true;\n  await redis.zadd(key, now, `${now}:${Math.random()}`);\n  await redis.expire(key, windowSec);\n  return false;\n}\n\n// Leaderboard\nawait redis.zadd('game:scores', 9500, 'alice');\nawait redis.zadd('game:scores', 8700, 'bob');\nconst top10 = await redis.zrevrange('game:scores', 0, 9, 'WITHSCORES');\n\n// Pub/Sub for real-time notifications\nredis.publish('notifications:user:7', JSON.stringify({ type: 'new_message' }));" }
  ] },
  { type: "example", typeLabel: "Real-World Example", title: "Twitter's Redis Usage", content: [
    { kind: "text", value: "Twitter uses Redis for <strong>timeline caching, rate limiting, and real-time counters</strong> across billions of daily operations." },
    { kind: "bullets", items: ["<strong>Timeline cache</strong> — User's home timeline is a Redis list of tweet IDs", "<strong>Rate limiting</strong> — API rate limits tracked with Redis sorted sets", "<strong>Atomic counters</strong> — Like/retweet counters: atomic INCR operations for real-time counts", "<strong>Session storage</strong> — User sessions in Redis with TTL-based expiration"] },
    { kind: "sources", items: ["Yao Yu, 'The Infrastructure Behind Twitter: Scale', Twitter Engineering"] }
  ] },
  { type: "guide", typeLabel: "Step-by-Step Guide", title: "Using Redis Effectively", content: [
    { kind: "bullets", items: ["<strong>Find sub-ms needs</strong> — Step 1: Identify features that need sub-ms latency (caching, rate limiting, sessions)", "<strong>Right data structure</strong> — Step 2: Choose the right data structure (don't use strings for everything)", "<strong>TTL everything</strong> — Step 3: Set TTLs on all keys -- Redis memory is expensive and finite", "<strong>Cluster for prod</strong> — Step 4: Use Redis Cluster or managed Redis for production (not a single instance)", "<strong>Cache-aside pattern</strong> — Step 5: Implement cache-aside pattern: read cache -> miss -> read DB -> populate cache", "<strong>Monitor memory</strong> — Step 6: Monitor memory usage, eviction rate, and command latency"] }
  ] },
  { type: "practices", typeLabel: "Best Practices", title: "Redis Rules", content: [
    { kind: "bullets", items: ["<strong>Always set TTLs</strong> — ✅ Set TTLs on every key -- unbounded growth fills memory", "<strong>Right data structure</strong> — ✅ Use the right data structure for the job (sorted set for leaderboards, not strings)", "<strong>High availability</strong> — ✅ Use Redis Cluster or Sentinel for high availability", "<strong>Not a primary DB</strong> — ❌ Don't use Redis as your primary database (it's in-memory, not durable by default)", "<strong>Small values only</strong> — ❌ Don't store large values (>100KB) -- Redis is optimized for small, fast operations", "<strong>No KEYS in prod</strong> — ❌ Don't run blocking commands (KEYS *) in production"] }
  ] },
  { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [
    { kind: "bullets", items: ["<strong>No TTL</strong> — Keys accumulate until Redis OOMs", "<strong>KEYS * in production</strong> — Blocks the single-threaded server for all clients", "<strong>Big values</strong> — Storing 10MB blobs in Redis kills performance", "<strong>Single instance</strong> — No replication means one failure loses all data"] }
  ] },
  { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
    { kind: "bullets", items: ["<strong>Audit TTLs</strong> — Audit your Redis usage -- are all keys TTL'd?", "<strong>Explore data structures</strong> — Identify one feature that could benefit from a Redis data structure beyond strings", "<strong>Check for KEYS</strong> — Check if you're running any KEYS commands in production", "<strong>Memory monitoring</strong> — Set up Redis memory usage monitoring and alerting"] }
  ] },
  { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
    { kind: "bullets", items: ["<strong>Data structure server</strong> — Redis is a data structure server, not just a cache.", "<strong>Rich data types</strong> — Sorted sets for leaderboards, streams for queues, HyperLogLog for counting.", "<strong>TTLs and clustering</strong> — Set TTLs on every key. Use Redis Cluster for production.", "<strong>Production safety</strong> — Never run KEYS * in production. Never store large values."] },
    { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }
  ] }
] };

window.DEEP_DIVES[187] = { title: "Cache Invalidation: The Hard Problem", icon: "💀", tag: "performance", slides: [
  { type: "hook", typeLabel: "Why It Matters", title: "The Two Hard Problems in CS", content: [
    { kind: "text", value: "There are only two hard things in computer science: cache invalidation and naming things. Stale caches cause <strong>users to see wrong data, payments to double-process, and inventory to oversell</strong>." },
    { kind: "stats", items: [{ value: "2", label: "hard things in CS (Phil Karlton)" }, { value: "5", label: "caching strategies, each with failure modes" }, { value: "100%", label: "of cache bugs are about invalidation, not caching itself" }] }
  ] },
  { type: "problem", typeLabel: "The Problem", title: "Stale Data Everywhere", content: [
    { kind: "text", value: "User updates their email. The database has the new email. The cache has the old email. For the next 5 minutes, <strong>some requests show old data, others show new</strong>." },
    { kind: "bullets", items: ["<strong>Stale cache</strong> — Cache and database are out of sync after writes", "<strong>Inconsistent views</strong> — Different users see different versions depending on cache hit/miss", "<strong>Thundering herd</strong> — Thundering herd on cache expiration: thousands of requests hit DB simultaneously", "<strong>Cache stampede</strong> — Cache stampede: popular key expires, all concurrent requests recalculate"] }
  ] },
  { type: "concepts", typeLabel: "Core Concepts", title: "Caching Strategies", content: [
    { kind: "bullets", items: ["<strong>Cache-Aside (Lazy Loading)</strong> — App reads cache. On miss, reads DB, populates cache. Stale until TTL.", "<strong>Write-Through</strong> — App writes to cache AND DB on every write. Always fresh, but slower writes.", "<strong>Write-Behind (Write-Back)</strong> — App writes to cache only. Cache async writes to DB. Fast, risk of data loss.", "<strong>Read-Through</strong> — Cache itself fetches from DB on miss. Simplifies application code.", "<strong>Refresh-Ahead</strong> — Cache proactively refreshes before TTL expires. Prevents cache miss spikes."] },
    { kind: "callout", style: "insight", value: "Cache-aside is the most common strategy. Write-through is safest for consistency. Write-behind is fastest but riskiest." }
  ] },
  { type: "how", typeLabel: "How It Works", title: "Cache-Aside with Invalidation", content: [
    { kind: "code", value: "// Cache-aside pattern\nasync function getUser(userId) {\n  // 1. Check cache\n  const cached = await cache.get(`user:${userId}`);\n  if (cached) return cached;\n  \n  // 2. Cache miss -> read from DB\n  const user = await db.query('SELECT * FROM users WHERE id = $1', [userId]);\n  \n  // 3. Populate cache with TTL\n  await cache.set(`user:${userId}`, user, { ttl: 300 }); // 5 min TTL\n  return user;\n}\n\n// Invalidation on write\nasync function updateUser(userId, data) {\n  await db.query('UPDATE users SET ... WHERE id = $1', [userId, ...data]);\n  await cache.del(`user:${userId}`);  // Invalidate cache\n  // Next read will fetch fresh data from DB\n}\n\n// Preventing cache stampede (lock-based)\nasync function getWithLock(key, fetchFn, ttl = 300) {\n  const cached = await cache.get(key);\n  if (cached) return cached;\n  \n  const lockKey = `lock:${key}`;\n  const acquired = await cache.set(lockKey, '1', 'NX', 'EX', 5);\n  if (!acquired) {\n    await sleep(100);  // Wait for another request to populate\n    return cache.get(key) || fetchFn();  // Retry\n  }\n  const data = await fetchFn();\n  await cache.set(key, data, { ttl });\n  await cache.del(lockKey);\n  return data;\n}" }
  ] },
  { type: "example", typeLabel: "Real-World Example", title: "Facebook's Memcache", content: [
    { kind: "text", value: "Facebook uses Memcached to cache <strong>billions of objects</strong> with a cache-aside pattern. On write, they invalidate the cache key using McRouter, their custom routing layer." },
    { kind: "bullets", items: ["<strong>Cache-aside pattern</strong> — Cache-aside: read from cache, miss -> read from MySQL, populate cache", "<strong>Delete on write</strong> — On write: delete the cache key (not update) to prevent stale data", "<strong>Lease mechanism</strong> — Lease mechanism prevents thundering herd on popular keys", "<strong>Cross-region sync</strong> — Cross-region invalidation via a custom invalidation daemon"] },
    { kind: "sources", items: ["Nishtala et al., 'Scaling Memcache at Facebook', NSDI 2013"] }
  ] },
  { type: "guide", typeLabel: "Step-by-Step Guide", title: "Implementing Cache Invalidation", content: [
    { kind: "bullets", items: ["<strong>Default strategy</strong> — Step 1: Start with cache-aside + TTL as your default strategy", "<strong>Delete not update</strong> — Step 2: Invalidate (delete) cache keys on writes, don't update them", "<strong>Stampede protection</strong> — Step 3: Handle cache stampede with locking or early refresh", "<strong>Cross-service invalidation</strong> — Step 4: Use CDC or event-driven invalidation for cross-service caches", "<strong>Sensitivity-based TTLs</strong> — Step 5: Set different TTLs based on data sensitivity (user data: 5min, product catalog: 1hr)", "<strong>Monitor hit rate</strong> — Step 6: Monitor cache hit rate -- target >95% for hot data"] }
  ] },
  { type: "practices", typeLabel: "Best Practices", title: "Cache Rules", content: [
    { kind: "bullets", items: ["<strong>Delete not update</strong> — ✅ Delete cache keys on write, don't update them (simpler, safer)", "<strong>Always set TTL</strong> — ✅ Always set a TTL -- even with active invalidation (defense in depth)", "<strong>Stampede protection</strong> — ✅ Handle cache stampede with locks or staggered TTLs", "❌ Don't cache data that changes every request", "❌ Don't cache without monitoring hit rate", "❌ Don't use the same TTL for all data types"] }
  ] },
  { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [
    { kind: "bullets", items: ["<strong>No TTL</strong> — Cache never expires; stale data served forever", "<strong>Cache stampede</strong> — Popular key expires; 10K requests simultaneously hit DB", "<strong>Write-then-read race</strong> — Cache is deleted but another request repopulates with old data before DB write commits", "<strong>Dogpiling</strong> — Expensive computation runs N times simultaneously when cache misses"] }
  ] },
  { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
    { kind: "bullets", items: ["<strong>Check hit rate</strong> — Check your cache hit rate -- is it above 95%?", "<strong>Audit TTLs</strong> — Audit TTLs -- do they match data sensitivity?", "<strong>Find stale paths</strong> — Find one write path that doesn't invalidate the cache", "<strong>Stampede protection</strong> — Implement stampede protection for your hottest cache key"] }
  ] },
  { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
    { kind: "bullets", items: ["<strong>Default strategy</strong> — Cache-aside with TTL is the default strategy. Delete on write, don't update.", "<strong>Defense in depth</strong> — Always set TTLs -- even with active invalidation.", "<strong>Stampede handling</strong> — Handle cache stampede with locks or early refresh.", "<strong>Key metrics</strong> — Monitor hit rate and stale-data incidents as key metrics."] },
    { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }
  ] }
] };

window.DEEP_DIVES[188] = { title: "Consistent Hashing", icon: "💍", tag: "distributed systems", slides: [
  { type: "hook", typeLabel: "Why It Matters", title: "Distribute Without Reshuffling", content: [
    { kind: "text", value: "When you add or remove a server from a cluster, naive hashing (hash % N) remaps <strong>almost every key</strong>. Consistent hashing remaps only ~1/N of keys. This is the foundation of distributed caches, databases, and load balancers." },
    { kind: "stats", items: [{ value: "1/N", label: "keys remapped when adding a node (vs ~100% with modulo)" }, { value: "1997", label: "invented by Karger et al. at MIT" }, { value: "every", label: "distributed system uses a variant of consistent hashing" }] },
    { kind: "sources", items: ["David Karger et al., 'Consistent Hashing and Random Trees', ACM STOC 1997"] }
  ] },
  { type: "problem", typeLabel: "The Problem", title: "Modulo Hashing Breaks on Resize", content: [
    { kind: "text", value: "With hash(key) % 3 servers, adding a 4th server changes the modulo to % 4. <strong>Nearly every key maps to a different server.</strong> Cache hit rate drops to near zero." },
    { kind: "bullets", items: ["<strong>Mass invalidation</strong> — Adding one server invalidates ~75% of cached data (3->4 servers)", "<strong>Key remapping</strong> — Removing one server remaps ~67% of keys", "<strong>Stampede on remap</strong> — Cache stampede: all remapped keys cause simultaneous DB hits", "<strong>DB overload</strong> — Database overload during scaling events"] }
  ] },
  { type: "concepts", typeLabel: "Core Concepts", title: "Hash Ring Mechanics", content: [
    { kind: "bullets", items: ["<strong>Hash Ring</strong> — Arrange the hash space (0 to 2^32) in a circle. Nodes are placed on the ring at their hash positions.", "<strong>Key Assignment</strong> — Hash the key and walk clockwise to find the first node. That node owns the key.", "<strong>Virtual Nodes</strong> — Each physical node gets multiple positions (100-200) on the ring for even distribution.", "<strong>Adding a Node</strong> — New node takes over keys from its clockwise neighbor. Only ~1/N keys move.", "<strong>Removing a Node</strong> — Its keys move to the next clockwise node. Only that node's keys are affected."] },
    { kind: "callout", style: "insight", value: "Virtual nodes solve the uneven distribution problem. Without them, nodes with unfortunate hash positions get much more traffic." }
  ] },
  { type: "how", typeLabel: "How It Works", title: "Consistent Hash Ring", content: [
    { kind: "code", value: "class ConsistentHash {\n  constructor(nodes, virtualNodes = 150) {\n    this.ring = new Map(); // position -> node\n    this.sortedKeys = [];   // sorted positions\n    for (const node of nodes) {\n      for (let i = 0; i < virtualNodes; i++) {\n        const pos = hash(`${node}:${i}`);\n        this.ring.set(pos, node);\n        this.sortedKeys.push(pos);\n      }\n    }\n    this.sortedKeys.sort((a, b) => a - b);\n  }\n\n  getNode(key) {\n    const keyHash = hash(key);\n    // Walk clockwise to find first node\n    for (const pos of this.sortedKeys) {\n      if (pos >= keyHash) return this.ring.get(pos);\n    }\n    return this.ring.get(this.sortedKeys[0]); // wrap around\n  }\n}\n\n// Adding a node: only ~1/N keys remap\n// Removing a node: its keys go to next clockwise neighbor" }
  ] },
  { type: "example", typeLabel: "Real-World Example", title: "Amazon DynamoDB", content: [
    { kind: "text", value: "DynamoDB uses consistent hashing to distribute data across storage nodes. Adding capacity <strong>doesn't require rehashing all data</strong>." },
    { kind: "bullets", items: ["<strong>Hash-based routing</strong> — Partition key is hashed to determine storage node", "<strong>Virtual nodes</strong> — Virtual nodes ensure even distribution across the cluster", "<strong>Minimal rebalance</strong> — Adding nodes automatically rebalances ~1/N of data", "<strong>Dynamo origin</strong> — Described in the original Dynamo paper (2007)"] },
    { kind: "sources", items: ["DeCandia et al., 'Dynamo: Amazon's Highly Available Key-value Store', SOSP 2007"] }
  ] },
  { type: "guide", typeLabel: "Step-by-Step Guide", title: "Implementing Consistent Hashing", content: [
    { kind: "bullets", items: ["<strong>Create hash ring</strong> — Step 1: Create a hash ring with positions 0 to 2^32", "<strong>Place virtual nodes</strong> — Step 2: Place each node at multiple positions (virtual nodes) on the ring", "<strong>Clockwise lookup</strong> — Step 3: To find a key's node: hash the key, walk clockwise to the first node", "<strong>Even distribution</strong> — Step 4: Use 100-200 virtual nodes per physical node for even distribution", "<strong>Add node gracefully</strong> — Step 5: When adding a node: it takes keys from its clockwise neighbor", "<strong>Monitor skew</strong> — Step 6: Monitor per-node load to detect distribution skew"] }
  ] },
  { type: "practices", typeLabel: "Best Practices", title: "Consistent Hashing Rules", content: [
    { kind: "bullets", items: ["<strong>Virtual nodes</strong> — ✅ Use 100-200 virtual nodes per physical node", "<strong>Good hash function</strong> — ✅ Use a good hash function (MD5, SHA-1, xxHash) for uniform distribution", "<strong>Monitor load skew</strong> — ✅ Monitor per-node load for distribution skew", "<strong>No modulo hashing</strong> — ❌ Don't use modulo hashing for distributed caches or databases", "<strong>Virtual nodes required</strong> — ❌ Don't skip virtual nodes -- real nodes alone create uneven distribution", "<strong>Replicate for faults</strong> — ❌ Don't forget to handle node failures (replicate to next N clockwise nodes)"] }
  ] },
  { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [
    { kind: "bullets", items: ["<strong>No virtual nodes</strong> — Uneven distribution; one node gets 5x more traffic", "<strong>Modulo hashing</strong> — Reshuffles everything when cluster size changes", "<strong>Poor hash function</strong> — Clustering of keys on certain nodes", "<strong>No replication</strong> — Key is on one node; node failure = data loss"] }
  ] },
  { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
    { kind: "bullets", items: ["<strong>Check hash method</strong> — Check if your distributed cache uses consistent hashing or modulo", "<strong>Implement hash ring</strong> — Implement a basic consistent hash ring with virtual nodes", "<strong>Test node addition</strong> — Test: add a node and verify only ~1/N keys remap", "<strong>Check for skew</strong> — Evaluate per-node load distribution for skew"] }
  ] },
  { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
    { kind: "bullets", items: ["<strong>Minimal remapping</strong> — Consistent hashing remaps only ~1/N keys when nodes change (vs ~100% with modulo).", "<strong>Virtual nodes</strong> — Use 100-200 virtual nodes per physical node for even distribution.", "<strong>Industry foundation</strong> — Foundation of DynamoDB, Cassandra, and every distributed cache.", "<strong>Replicate for safety</strong> — Always replicate keys to multiple nodes for fault tolerance."] },
    { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }
  ] }
] };

window.DEEP_DIVES[189] = { title: "CRDTs: Conflict-Free Replicated Data Types", icon: "🤝", tag: "distributed systems", slides: [
  { type: "hook", typeLabel: "Why It Matters", title: "Edit Without Coordination", content: [
    { kind: "text", value: "CRDTs let multiple nodes edit the same data <strong>simultaneously without coordination</strong> and guarantee convergence. No locks, no consensus, no conflicts." },
    { kind: "stats", items: [{ value: "0", label: "coordination needed between replicas" }, { value: "100%", label: "guaranteed convergence (mathematically proven)" }, { value: "Figma", label: "Google Docs, Apple Notes -- all use CRDTs" }] },
    { kind: "sources", items: ["Marc Shapiro et al., 'Conflict-Free Replicated Data Types', SSS 2011", "Martin Kleppmann, 'CRDTs: The Hard Parts', Hydra Conference 2020"] }
  ] },
  { type: "problem", typeLabel: "The Problem", title: "Concurrent Edits Conflict", content: [
    { kind: "text", value: "Alice and Bob both edit a document offline. When they reconnect, whose version wins? Traditional databases force you to choose one or merge manually." },
    { kind: "bullets", items: ["<strong>Lost changes</strong> — Last-writer-wins discards one user's changes", "<strong>Complex resolution</strong> — Manual conflict resolution is complex and error-prone", "<strong>Locking blocks edits</strong> — Locking prevents concurrent editing entirely", "<strong>Consensus overhead</strong> — Consensus protocols add latency and require network connectivity"] }
  ] },
  { type: "concepts", typeLabel: "Core Concepts", title: "CRDT Families", content: [
    { kind: "bullets", items: ["<strong>G-Counter</strong> — Grow-only counter. Each node tracks its own increment. Sum all nodes for total.", "<strong>PN-Counter</strong> — Increment and decrement. Two G-Counters: one for adds, one for removes.", "<strong>G-Set</strong> — Grow-only set. Elements can be added but never removed.", "<strong>OR-Set (Observed-Remove Set)</strong> — Elements can be added and removed. Uses unique tags per add.", "<strong>LWW-Register</strong> — Last-Writer-Wins register. Timestamp determines which write wins.", "<strong>Sequence CRDTs (YATA, RGA)</strong> — For collaborative text editing. Used by Yjs, Automerge."] },
    { kind: "callout", style: "insight", value: "CRDTs guarantee convergence because their merge function is commutative, associative, and idempotent. Order doesn't matter." }
  ] },
  { type: "how", typeLabel: "How It Works", title: "G-Counter CRDT", content: [
    { kind: "code", value: "// G-Counter: each node maintains its own count\nclass GCounter {\n  constructor(nodeId) {\n    this.nodeId = nodeId;\n    this.counts = {};  // { nodeId: count }\n  }\n  increment() {\n    this.counts[this.nodeId] = (this.counts[this.nodeId] || 0) + 1;\n  }\n  value() {\n    return Object.values(this.counts).reduce((sum, c) => sum + c, 0);\n  }\n  merge(other) {\n    // Take max of each node's count -- commutative & idempotent\n    for (const [node, count] of Object.entries(other.counts)) {\n      this.counts[node] = Math.max(this.counts[node] || 0, count);\n    }\n  }\n}\n\n// Node A: increment 3 times\nconst a = new GCounter('A'); a.increment(); a.increment(); a.increment();\n// Node B: increment 2 times\nconst b = new GCounter('B'); b.increment(); b.increment();\n// Merge: a.merge(b) -> value() = 5. Order doesn't matter!" }
  ] },
  { type: "example", typeLabel: "Real-World Example", title: "Figma's Collaborative Editing", content: [
    { kind: "text", value: "Figma uses CRDTs to enable <strong>real-time collaborative design</strong> where multiple users edit the same canvas simultaneously without conflicts." },
    { kind: "bullets", items: ["<strong>Local-first edits</strong> — Each user's changes are applied locally and broadcast to others", "<strong>Guaranteed convergence</strong> — CRDT merge function guarantees all users converge to the same state", "<strong>No coordinator needed</strong> — No central coordinator -- works even with high latency connections", "<strong>Local undo/redo</strong> — Undo/redo are local operations, not global"] },
    { kind: "sources", items: ["Evan Wallace, 'How Figma's Multiplayer Technology Works', figma.com"] }
  ] },
  { type: "guide", typeLabel: "Step-by-Step Guide", title: "Using CRDTs", content: [
    { kind: "bullets", items: ["<strong>Identify use case</strong> — Step 1: Identify data that needs concurrent edits without coordination", "<strong>Choose CRDT type</strong> — Step 2: Choose the right CRDT type (counter, set, register, sequence)", "<strong>Use a library</strong> — Step 3: Use a library: Yjs (text), Automerge (JSON), Riak (distributed DB)", "<strong>Implement sync</strong> — Step 4: Implement merge/sync between replicas (periodically or on reconnect)", "<strong>Test convergence</strong> — Step 5: Test with network partitions to verify convergence", "<strong>Monitor size</strong> — Step 6: Monitor merge frequency and data size (CRDTs can grow large)"] }
  ] },
  { type: "practices", typeLabel: "Best Practices", title: "CRDT Rules", content: [
    { kind: "bullets", items: ["<strong>Use libraries</strong> — ✅ Use established CRDT libraries (Yjs, Automerge) instead of building from scratch", "<strong>Simplest CRDT</strong> — ✅ Choose the simplest CRDT that solves your problem", "<strong>Monitor size</strong> — ✅ Monitor CRDT size -- metadata can grow with number of edits", "<strong>Not for finance</strong> — ❌ Don't use CRDTs when strong consistency is required (financial transactions)", "<strong>Math required</strong> — ❌ Don't implement custom CRDTs without understanding the math", "<strong>Tombstone cleanup</strong> — ❌ Don't ignore tombstone cleanup (deleted items still consume space)"] }
  ] },
  { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [
    { kind: "bullets", items: ["<strong>Unbounded growth</strong> — OR-Set tombstones accumulate forever without garbage collection", "<strong>Wrong CRDT choice</strong> — Using LWW-Register when you need merge semantics", "<strong>Assuming strong consistency</strong> — CRDTs are eventually consistent by design", "<strong>DIY implementation</strong> — Subtle bugs in merge functions break convergence guarantees"] }
  ] },
  { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
    { kind: "bullets", items: ["<strong>Find collab feature</strong> — Identify one collaborative or offline-capable feature in your app", "<strong>Build a G-Counter</strong> — Implement a G-Counter or G-Set to understand CRDT mechanics", "<strong>Explore libraries</strong> — Explore Yjs or Automerge for text/JSON collaboration", "<strong>Partition test</strong> — Test: partition two replicas, make concurrent edits, merge and verify convergence"] }
  ] },
  { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
    { kind: "bullets", items: ["<strong>No coordination needed</strong> — CRDTs enable concurrent editing without coordination or conflicts.", "<strong>Math guarantee</strong> — Convergence is mathematically guaranteed by commutative, associative, idempotent merge.", "<strong>Use libraries</strong> — Use libraries (Yjs, Automerge) instead of building from scratch.", "<strong>Best use cases</strong> — Best for: collaborative editing, offline-first apps, distributed counters."] },
    { kind: "quality", items: [{ label: "Actionability", score: 4 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }
  ] }
] };

window.DEEP_DIVES[190] = { title: "The Log: Every System's Source of Truth", icon: "📋", tag: "architecture", slides: [
  { type: "hook", typeLabel: "Why It Matters", title: "The Most Fundamental Data Structure", content: [
    { kind: "text", value: "An append-only, ordered, immutable log is the <strong>unifying abstraction</strong> behind databases (WAL), message brokers (Kafka), event sourcing, and replication. Understanding the log unlocks understanding of all distributed systems." },
    { kind: "stats", items: [{ value: "1", label: "data structure to rule them all" }, { value: "every", label: "database, message broker, and blockchain uses a log" }, { value: "2013", label: "Jay Kreps' seminal blog post 'The Log'" }] },
    { kind: "sources", items: ["Jay Kreps, 'The Log: What every software engineer should know about real-time data's unifying abstraction', LinkedIn Engineering, 2013"] }
  ] },
  { type: "problem", typeLabel: "The Problem", title: "Data Silos and Inconsistency", content: [
    { kind: "text", value: "Data lives in PostgreSQL, Elasticsearch, Redis, and your data warehouse. Each copy can drift. There's no <strong>single source of truth</strong> that all systems derive from." },
    { kind: "bullets", items: ["<strong>No source of truth</strong> — Multiple copies of data with no clear source of truth", "<strong>Stale ETL</strong> — Batch ETL creates hours of staleness", "<strong>Dual write risk</strong> — Dual writes create inconsistency", "<strong>No rebuild path</strong> — No way to rebuild a derived view if it gets corrupted"] }
  ] },
  { type: "concepts", typeLabel: "Core Concepts", title: "The Log Abstraction", content: [
    { kind: "bullets", items: ["<strong>Append-Only</strong> — New entries are always added at the end. Never modified or deleted.", "<strong>Ordered</strong> — Every entry has a monotonically increasing offset/position.", "<strong>Immutable</strong> — Once written, an entry never changes.", "<strong>Replayable</strong> — Any consumer can start from the beginning and rebuild its state.", "<strong>The log IS the database</strong> — Tables are just materialized views of the log (WAL -> tables)."] },
    { kind: "callout", style: "insight", value: "Kafka is a distributed log. PostgreSQL WAL is a log. Event sourcing stores are logs. Blockchain is a log. Once you see it, you see it everywhere." }
  ] },
  { type: "how", typeLabel: "How It Works", title: "Log as Source of Truth", content: [
    { kind: "code", value: "// The log as the backbone of your architecture\n//\n// Producers -> [LOG (Kafka)] -> Consumers\n//                  |\n//    +-------------+-------------+\n//    |              |              |\n// [PostgreSQL]  [Elasticsearch]  [Redis Cache]\n// (primary DB)  (search index)   (hot data)\n//\n// Each consumer reads the log and builds its own view.\n// If Elasticsearch gets corrupted, replay the log to rebuild.\n// Adding a new consumer (analytics DB) requires zero changes to producers.\n\n// Log entry\n{\n  offset: 42,\n  timestamp: '2024-01-15T10:30:00Z',\n  key: 'user:123',\n  value: { event: 'ProfileUpdated', name: 'Alice', email: 'alice@new.com' }\n}" }
  ] },
  { type: "example", typeLabel: "Real-World Example", title: "LinkedIn's Log-Centric Architecture", content: [
    { kind: "text", value: "LinkedIn built Kafka as a <strong>distributed log</strong> to be the central nervous system connecting all their data systems." },
    { kind: "bullets", items: ["<strong>Central log</strong> — Every data change is written to Kafka topics (the log)", "<strong>Consumer diversity</strong> — Downstream systems (search, analytics, recommendations) consume the log", "<strong>Replay to rebuild</strong> — Any system can be rebuilt by replaying the log from the beginning", "<strong>Producer decoupling</strong> — Decouples producers from consumers -- add new consumers without changing producers"] },
    { kind: "sources", items: ["Jay Kreps, 'The Log', LinkedIn Engineering Blog, 2013", "Jay Kreps, 'I Heart Logs', O'Reilly, 2014"] }
  ] },
  { type: "guide", typeLabel: "Step-by-Step Guide", title: "Adopting Log-Centric Architecture", content: [
    { kind: "bullets", items: ["<strong>Identify data flows</strong> — Step 1: Identify your core data flows -- what changes and who needs to know?", "<strong>Introduce log</strong> — Step 2: Introduce a log (Kafka) as the intermediary between producers and consumers", "<strong>Outbox to log</strong> — Step 3: Publish domain events to the log (using the outbox pattern for safety)", "<strong>Derive from log</strong> — Step 4: Build consumers that derive their state from the log", "<strong>Enable replay</strong> — Step 5: Enable log replay so any consumer can rebuild from scratch", "<strong>Retention policy</strong> — Step 6: Set retention policies: keep the log long enough for any consumer to catch up"] }
  ] },
  { type: "practices", typeLabel: "Best Practices", title: "Log Rules", content: [
    { kind: "bullets", items: ["<strong>Log as truth</strong> — ✅ Treat the log as the source of truth; databases are derived views", "<strong>Immutable entries</strong> — ✅ Make log entries immutable -- append corrections, don't edit entries", "<strong>Retention policies</strong> — ✅ Set appropriate retention (7 days for events, forever for event-sourced data)", "<strong>Not for RPC</strong> — ❌ Don't use the log for request-response -- it's for state propagation", "<strong>Version schemas</strong> — ❌ Don't skip schema versioning for log entries", "<strong>Monitor consumer lag</strong> — ❌ Don't assume consumers will always keep up -- monitor consumer lag"] }
  ] },
  { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [
    { kind: "bullets", items: ["<strong>Log as message queue</strong> — Using Kafka for point-to-point RPC instead of state propagation", "<strong>No retention policy</strong> — Log grows forever, consuming disk", "<strong>Tight coupling to log format</strong> — Changing log schema breaks all consumers", "<strong>Ignoring consumer lag</strong> — Consumer falls behind and data becomes stale"] }
  ] },
  { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
    { kind: "bullets", items: ["<strong>Find point-to-point</strong> — Identify one data flow that is currently point-to-point (direct API calls)", "<strong>Introduce a log</strong> — Introduce a log (Kafka, Pulsar, Redpanda) between producer and consumer", "<strong>Test replay rebuild</strong> — Verify that the consumer can be rebuilt by replaying the log", "<strong>Monitor lag</strong> — Monitor consumer lag and set up alerting"] }
  ] },
  { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
    { kind: "bullets", items: ["<strong>Unifying abstraction</strong> — The append-only log is the unifying abstraction behind databases, brokers, and event sourcing.", "<strong>Log as truth</strong> — Treat the log as source of truth; databases are materialized views.", "<strong>Replay to rebuild</strong> — Any consumer can rebuild its state by replaying the log.", "<strong>Operational hygiene</strong> — Monitor consumer lag and set retention policies."] },
    { kind: "quality", items: [{ label: "Actionability", score: 4 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }
  ] }
] };

window.DEEP_DIVES[191] = { title: "Data Contracts", icon: "📝", tag: "data engineering", slides: [
  { type: "hook", typeLabel: "Why It Matters", title: "Treat Data Schemas as APIs", content: [
    { kind: "text", value: "When a data producer changes their schema, downstream consumers break. Data contracts treat schemas as <strong>first-class agreements between producers and consumers</strong> -- just like API contracts." },
    { kind: "stats", items: [{ value: "60%", label: "of data pipeline failures are from schema changes" }, { value: "0", label: "broken consumers with enforced data contracts" }, { value: "hours", label: "saved per incident with contract validation" }] }
  ] },
  { type: "problem", typeLabel: "The Problem", title: "Schema Changes Break Everything", content: [
    { kind: "text", value: "A developer renames a column. The ETL pipeline breaks. The ML model retraining fails. The dashboard shows wrong data. <strong>Nobody knew downstream systems depended on that column.</strong>" },
    { kind: "bullets", items: ["<strong>Rename breaks ETL</strong> — Column renamed -> ETL pipeline throws errors", "<strong>Type change crash</strong> — Type changed (int to string) -> ML model crashes on training", "<strong>Field removal</strong> — Field removed -> analytics dashboard shows null values", "<strong>No dependency map</strong> — No visibility into who depends on what schema"] }
  ] },
  { type: "concepts", typeLabel: "Core Concepts", title: "Data Contract Elements", content: [
    { kind: "bullets", items: ["<strong>Schema Definition</strong> — Explicit, versioned schema (Avro, Protobuf, JSON Schema)", "<strong>Compatibility Rules</strong> — Backward compatible (new schema reads old data), forward compatible (old schema reads new data)", "<strong>SLA</strong> — Freshness, completeness, and quality guarantees", "<strong>Ownership</strong> — Which team owns the contract and is responsible for changes", "<strong>Breaking Change Process</strong> — How to evolve schemas without breaking consumers"] }
  ] },
  { type: "how", typeLabel: "How It Works", title: "Contract Enforcement", content: [
    { kind: "code", value: "// Data contract definition (YAML)\nname: orders_stream\nowner: order-team@company.com\nversion: 2.1.0\nschema:\n  type: record\n  fields:\n    - name: order_id\n      type: string\n      required: true\n    - name: user_id\n      type: string\n      required: true\n    - name: total_amount\n      type: decimal\n      required: true\n    - name: currency\n      type: string\n      default: \"USD\"  # Added in v2.1 (backward compatible)\nsla:\n  freshness: \"< 5 minutes\"\n  completeness: \"> 99.9%\"\ncompatibility: BACKWARD  # new schema must read old data" }
  ] },
  { type: "example", typeLabel: "Real-World Example", title: "Confluent Schema Registry", content: [
    { kind: "text", value: "Confluent Schema Registry enforces compatibility rules on Kafka topics, <strong>rejecting schema changes that would break consumers</strong>." },
    { kind: "bullets", items: ["<strong>Pre-publish registration</strong> — Producers register schemas before publishing", "<strong>Compatibility enforcement</strong> — Schema Registry rejects incompatible changes", "<strong>Auto-discovery</strong> — Consumers auto-discover the schema for deserialization", "<strong>Multiple formats</strong> — Supports Avro, Protobuf, and JSON Schema"] },
    { kind: "sources", items: ["Confluent Documentation, 'Schema Registry'"] }
  ] },
  { type: "guide", typeLabel: "Step-by-Step Guide", title: "Implementing Data Contracts", content: [
    { kind: "bullets", items: ["<strong>Inventory flows</strong> — Step 1: Inventory your data flows -- who produces what, who consumes it", "<strong>Define schemas</strong> — Step 2: Define schemas using Avro, Protobuf, or JSON Schema", "<strong>Set compatibility</strong> — Step 3: Set compatibility mode (BACKWARD is safest default)", "<strong>CI validation</strong> — Step 4: Add schema validation to your CI/CD pipeline", "<strong>Deploy registry</strong> — Step 5: Deploy a schema registry (Confluent, Apicurio, Glue)", "<strong>Define SLAs</strong> — Step 6: Define SLAs for freshness and completeness per data product"] }
  ] },
  { type: "practices", typeLabel: "Best Practices", title: "Contract Rules", content: [
    { kind: "bullets", items: ["<strong>Version and enforce</strong> — ✅ Version all schemas and enforce compatibility in CI", "<strong>BACKWARD default</strong> — ✅ Use BACKWARD compatibility as the default", "<strong>SLAs in contracts</strong> — ✅ Include SLAs (freshness, completeness) in contracts", "<strong>Impact analysis</strong> — ❌ Don't let producers change schemas without consumer impact analysis", "<strong>No raw JSON</strong> — ❌ Don't use schemaless formats (raw JSON) for critical data flows", "<strong>Registry for Kafka</strong> — ❌ Don't skip schema registry for Kafka topics"] }
  ] },
  { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [
    { kind: "bullets", items: ["<strong>No schema</strong> — Raw JSON with no contract; producers change fields at will", "<strong>No versioning</strong> — Schema changes have no version; consumers can't pin", "<strong>No compatibility check</strong> — Breaking changes deployed without validation", "<strong>No ownership</strong> — Nobody knows who to contact when a schema changes"] }
  ] },
  { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
    { kind: "bullets", items: ["<strong>List top flows</strong> — List your top 5 data flows and their current schema documentation", "<strong>Convert one flow</strong> — Convert one schemaless data flow to use Avro or Protobuf", "<strong>CI validation</strong> — Set up schema validation in your CI pipeline", "<strong>First contract</strong> — Define one data contract with an SLA for freshness"] }
  ] },
  { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
    { kind: "bullets", items: ["<strong>Schemas as APIs</strong> — Data contracts treat schemas as APIs between producers and consumers.", "<strong>Version and enforce</strong> — Version schemas and enforce backward compatibility in CI.", "<strong>SLAs included</strong> — Include SLAs for freshness and completeness.", "<strong>Schema registry</strong> — Use a schema registry to prevent breaking changes from reaching production."] },
    { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 4 }] }
  ] }
] };

window.DEEP_DIVES[192] = { title: "Graph Databases & Relationship Queries", icon: "🕸️", tag: "data", slides: [
  { type: "hook", typeLabel: "Why It Matters", title: "When Relationships Are the Data", content: [
    { kind: "text", value: "In a social network, the relationships (follows, likes, mentions) are more important than the nodes (users, posts). Graph databases make <strong>relationship traversal a first-class operation</strong>." },
    { kind: "stats", items: [{ value: "1000x", label: "faster than SQL for deep relationship queries" }, { value: "O(1)", label: "per hop in graph traversal (vs O(n) in SQL joins)" }, { value: "6", label: "degrees of separation -- graphs find them instantly" }] }
  ] },
  { type: "problem", typeLabel: "The Problem", title: "SQL Joins Don't Scale for Graphs", content: [
    { kind: "text", value: "'Find friends of friends who like jazz' requires <strong>recursive SQL joins that are painfully slow</strong> beyond 2-3 levels of depth." },
    { kind: "bullets", items: ["<strong>JOIN per hop</strong> — Each level of relationship requires another JOIN", "<strong>Minutes per query</strong> — 3-hop queries on million-row tables can take minutes in SQL", "<strong>Complex CTEs</strong> — Recursive CTEs are complex and hard to optimize", "<strong>Wrong model</strong> — The relational model wasn't designed for graph traversal"] }
  ] },
  { type: "concepts", typeLabel: "Core Concepts", title: "Graph Database Fundamentals", content: [
    { kind: "bullets", items: ["<strong>Nodes</strong> — Entities (User, Product, Location) with properties", "<strong>Edges (Relationships)</strong> — Connections between nodes with type and properties (FOLLOWS, PURCHASED)", "<strong>Traversal</strong> — Walking the graph from node to node along edges", "<strong>Index-Free Adjacency</strong> — Each node stores direct pointers to neighbors (O(1) per hop)", "<strong>Cypher/Gremlin</strong> — Query languages designed for graph pattern matching"] }
  ] },
  { type: "how", typeLabel: "How It Works", title: "Neo4j Cypher Queries", content: [
    { kind: "code", value: "// Find friends of friends who like jazz\nMATCH (me:User {name: 'Alice'})-[:FOLLOWS]->(friend)-[:FOLLOWS]->(fof)\nWHERE (fof)-[:LIKES]->(:Genre {name: 'Jazz'})\nRETURN DISTINCT fof.name;\n\n// Shortest path between two users\nMATCH path = shortestPath(\n  (a:User {name: 'Alice'})-[:FOLLOWS*..6]-(b:User {name: 'Bob'})\n)\nRETURN path;\n\n// Fraud detection: find suspicious transaction rings\nMATCH (a:Account)-[:TRANSFERRED]->(b:Account)-[:TRANSFERRED]->(c:Account)\n      -[:TRANSFERRED]->(a)\nWHERE a.createdAt > datetime() - duration('P7D')\nRETURN a, b, c;" }
  ] },
  { type: "example", typeLabel: "Real-World Example", title: "LinkedIn's Social Graph", content: [
    { kind: "text", value: "LinkedIn's core product is a <strong>professional graph</strong> with 1B+ nodes. Features like 'People You May Know' and 'connection degrees' rely on graph traversal." },
    { kind: "bullets", items: ["<strong>Custom graph DB</strong> — Social graph stored in a custom graph database", "<strong>Degree computation</strong> — 2nd/3rd degree connections computed via graph traversal", "<strong>PYMK engine</strong> — Recommendation engine traverses the graph for 'People You May Know'", "<strong>Sub-ms at scale</strong> — Graph queries return in milliseconds despite billions of edges"] },
    { kind: "sources", items: ["LinkedIn Engineering Blog, 'The LinkedIn Economic Graph'"] }
  ] },
  { type: "guide", typeLabel: "Step-by-Step Guide", title: "Adopting Graph Databases", content: [
    { kind: "bullets", items: ["<strong>Find deep traversals</strong> — Step 1: Identify queries that traverse 3+ levels of relationships", "<strong>Prototype with Neo4j</strong> — Step 2: Prototype with Neo4j (most mature) or Amazon Neptune (managed)", "<strong>Model as graph</strong> — Step 3: Model your domain as nodes and edges, not tables and foreign keys", "<strong>Benchmark vs SQL</strong> — Step 4: Benchmark graph queries vs. SQL recursive CTEs on real data", "<strong>Relational as truth</strong> — Step 5: Keep your relational DB as source of truth; sync graph DB via CDC", "<strong>Complement not replace</strong> — Step 6: Graph DBs complement relational DBs -- use both where each excels"] }
  ] },
  { type: "practices", typeLabel: "Best Practices", title: "Graph DB Rules", content: [
    { kind: "bullets", items: ["<strong>Relationship queries</strong> — ✅ Use graph DBs for relationship-heavy queries (social, fraud, recommendations)", "<strong>Derived view</strong> — ✅ Keep the relational DB as source of truth; graph DB as derived view", "<strong>Index node properties</strong> — ✅ Index node properties you filter on frequently", "<strong>Not for CRUD</strong> — ❌ Don't use a graph DB for simple CRUD with no relationship queries", "<strong>Lightweight nodes</strong> — ❌ Don't store large blobs in graph nodes -- keep them lightweight", "<strong>Complement not replace</strong> — ❌ Don't expect graph DBs to replace your relational database"] }
  ] },
  { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [
    { kind: "bullets", items: ["<strong>Graph for everything</strong> — Using Neo4j as your primary database for CRUD", "<strong>Unbounded traversals</strong> — Traversing the entire graph without depth limits", "<strong>No indexes</strong> — Starting traversals from unindexed properties", "<strong>Supernodes</strong> — Nodes with millions of edges (celebrity accounts) slow traversal"] }
  ] },
  { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
    { kind: "bullets", items: ["<strong>Find deep traversal</strong> — Identify one query in your system that traverses 3+ relationship levels", "<strong>Model on paper</strong> — Model that query as a graph (nodes, edges) on paper", "<strong>Prototype in Neo4j</strong> — Prototype the query in Neo4j and compare with your SQL version", "<strong>Evaluate trade-off</strong> — Evaluate: is the performance difference worth the additional infrastructure?"] }
  ] },
  { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
    { kind: "bullets", items: ["<strong>O(1) per hop</strong> — Graph databases excel at relationship traversal -- O(1) per hop vs O(n) SQL joins.", "<strong>Key use cases</strong> — Use for social graphs, fraud detection, recommendations, knowledge graphs.", "<strong>Complement not replace</strong> — Complement your relational DB, don't replace it.", "<strong>Supernode danger</strong> — Watch out for supernodes and unbounded traversals."] },
    { kind: "quality", items: [{ label: "Actionability", score: 4 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }
  ] }
] };

window.DEEP_DIVES[193] = { title: "Data Partitioning vs Data Replication", icon: "⚖️", tag: "distributed systems", slides: [
  { type: "hook", typeLabel: "Why It Matters", title: "Two Strategies, Different Goals", content: [
    { kind: "text", value: "Partitioning splits data across nodes for <strong>write scaling</strong>. Replication copies data across nodes for <strong>read scaling and availability</strong>. Understanding when to use each is fundamental." },
    { kind: "stats", items: [{ value: "partition", label: "= each node has DIFFERENT data (scaling)" }, { value: "replicate", label: "= each node has the SAME data (availability)" }, { value: "both", label: "are usually combined in production systems" }] }
  ] },
  { type: "problem", typeLabel: "The Problem", title: "Confusing the Two", content: [
    { kind: "text", value: "Teams add read replicas when they need write scaling, or shard when they need high availability. Using the wrong strategy wastes resources and doesn't solve the problem." },
    { kind: "bullets", items: ["<strong>Writes not helped</strong> — Adding read replicas doesn't help write-bound workloads", "<strong>Sharding limits HA</strong> — Sharding doesn't improve availability (each shard is still a single point of failure)", "<strong>Wrong order</strong> — Teams often need both but apply them in the wrong order", "<strong>Term confusion</strong> — Terminology confusion: partitioning, sharding, and splitting are often conflated"] }
  ] },
  { type: "concepts", typeLabel: "Core Concepts", title: "Partitioning vs Replication", content: [
    { kind: "bullets", items: ["<strong>Partitioning (Sharding)</strong> — Divide data so each node holds a subset. Scales writes and storage.", "<strong>Replication</strong> — Copy data so multiple nodes hold the same data. Scales reads and improves availability.", "<strong>Combined</strong> — Each partition has replicas. Partition for write scaling + replicate for read scaling/HA.", "<strong>Partition Key</strong> — Determines which partition holds each record.", "<strong>Replication Factor</strong> — Number of copies of each partition (typically 3)."] },
    { kind: "callout", style: "insight", value: "In practice, you always combine both. Kafka topics are partitioned (parallel writes) and each partition is replicated (fault tolerance)." }
  ] },
  { type: "how", typeLabel: "How It Works", title: "Combined Architecture", content: [
    { kind: "code", value: "// Kafka topic: 3 partitions x 3 replicas\n// Partition 0: [Broker-1 (leader), Broker-2 (follower), Broker-3 (follower)]\n// Partition 1: [Broker-2 (leader), Broker-3 (follower), Broker-1 (follower)]\n// Partition 2: [Broker-3 (leader), Broker-1 (follower), Broker-2 (follower)]\n\n// Partitioning: 3 partitions = 3x write throughput\n// Replication: 3 replicas = survives 2 broker failures\n\n// Database equivalent:\n// Shard 1: Users A-M  -> Primary + 2 Read Replicas\n// Shard 2: Users N-Z  -> Primary + 2 Read Replicas\n// Writes scale: 2x (two primaries)\n// Reads scale:  6x (six replicas total)\n// Availability: lose any 2 nodes and still serve traffic" }
  ] },
  { type: "example", typeLabel: "Real-World Example", title: "Cassandra: Both by Default", content: [
    { kind: "text", value: "Cassandra automatically <strong>partitions AND replicates</strong> data. Each row is hashed to a partition and replicated to N nodes." },
    { kind: "bullets", items: ["<strong>Hash-based partitioning</strong> — Consistent hashing assigns rows to partitions", "<strong>Replication factor</strong> — Replication factor (typically 3) copies each partition to multiple nodes", "<strong>Tunable consistency</strong> — Any replica can serve reads (tunable consistency)", "<strong>Fault tolerance</strong> — Losing a node doesn't lose data -- other replicas have copies"] },
    { kind: "sources", items: ["Apache Cassandra Documentation, 'Data Replication'"] }
  ] },
  { type: "guide", typeLabel: "Step-by-Step Guide", title: "Choosing Your Strategy", content: [
    { kind: "bullets", items: ["<strong>Diagnose first</strong> — Step 1: Diagnose your bottleneck: read-bound -> replicate. Write-bound -> partition.", "<strong>Replication first</strong> — Step 2: Start with replication (simpler, solves reads + HA)", "<strong>Partition for writes</strong> — Step 3: Add partitioning only when writes exceed single-node capacity", "<strong>Combine both</strong> — Step 4: Combine: partition for write scaling, replicate each partition for reads + HA", "<strong>Query-based key</strong> — Step 5: Choose partition key based on query patterns (avoid scatter-gather)", "<strong>Replication factor</strong> — Step 6: Set replication factor based on availability requirements (3 for production)"] }
  ] },
  { type: "practices", typeLabel: "Best Practices", title: "Rules", content: [
    { kind: "bullets", items: ["<strong>Replication first</strong> — ✅ Start with replication -- it solves reads, HA, and disaster recovery", "<strong>Partition for writes</strong> — ✅ Add partitioning only when writes exceed single-node capacity", "<strong>Combine both</strong> — ✅ Combine both in production: partitioned + replicated", "<strong>Don't shard early</strong> — ❌ Don't shard before you need to -- adds enormous complexity", "<strong>Monitor lag</strong> — ❌ Don't replicate without monitoring replication lag", "<strong>Different problems</strong> — ❌ Don't confuse the two -- they solve different problems"] }
  ] },
  { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [
    { kind: "bullets", items: ["<strong>Sharding for reads</strong> — Read replicas are simpler and solve the same problem", "<strong>Replication for writes</strong> — Replicas don't scale write throughput (only one leader writes)", "<strong>Unreplicated partitions</strong> — Each partition is a single point of failure", "<strong>Wrong order</strong> — Sharding before exhausting replication + indexing + caching"] }
  ] },
  { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
    { kind: "bullets", items: ["<strong>Diagnose bottleneck</strong> — Diagnose: is your database read-bound or write-bound?", "If read-bound: add read replicas", "If write-bound: evaluate partitioning strategies", "<strong>Check replication</strong> — Check: are your partitions replicated for fault tolerance?"] }
  ] },
  { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
    { kind: "bullets", items: ["<strong>Different purposes</strong> — Partitioning splits data for write scaling. Replication copies data for read scaling and HA.", "<strong>Replication first</strong> — Start with replication (simpler). Add partitioning when writes exceed single-node capacity.", "<strong>Combine in prod</strong> — In production, combine both: partitioned + replicated.", "<strong>Diagnose first</strong> — Always diagnose the bottleneck before choosing a strategy."] },
    { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }
  ] }
] };

window.DEEP_DIVES[194] = { title: "Materialized Views & Precomputation", icon: "⚡", tag: "performance", slides: [
  { type: "hook", typeLabel: "Why It Matters", title: "Trade Storage for Speed", content: [
    { kind: "text", value: "Instead of computing expensive queries at read time, <strong>precompute the results and store them</strong>. Materialized views turn slow aggregations into fast lookups." },
    { kind: "stats", items: [{ value: "100x", label: "faster reads with precomputed results" }, { value: "O(1)", label: "lookup vs O(n) aggregation" }, { value: "cheap", label: "storage is 1000x cheaper than compute" }] }
  ] },
  { type: "problem", typeLabel: "The Problem", title: "Expensive Queries at Read Time", content: [
    { kind: "text", value: "A dashboard query joins 5 tables, aggregates 100M rows, and computes statistics. It takes 30 seconds. Users refresh the page 100 times per minute." },
    { kind: "bullets", items: ["<strong>Slow aggregations</strong> — Complex aggregation queries take seconds to minutes", "<strong>Repeated computation</strong> — Same expensive query executed by every user, every page load", "<strong>CPU saturation</strong> — Database CPU is saturated by repeated aggregations", "<strong>User abandonment</strong> — Users see slow loading and give up"] }
  ] },
  { type: "concepts", typeLabel: "Core Concepts", title: "Precomputation Strategies", content: [
    { kind: "bullets", items: ["<strong>Materialized View</strong> — Database stores query results as a table. Refreshed periodically or on change.", "<strong>CQRS Read Model</strong> — Application-level precomputed view, updated by events.", "<strong>Cache</strong> — Store computed results in Redis. Simplest but requires invalidation.", "<strong>Aggregation Table</strong> — Dedicated table storing pre-aggregated data (e.g., daily_stats).", "<strong>Continuous Aggregate</strong> — TimescaleDB/ClickHouse: automatically maintained real-time rollups."] }
  ] },
  { type: "how", typeLabel: "How It Works", title: "Materialized Views in Practice", content: [
    { kind: "code", value: "-- PostgreSQL materialized view\nCREATE MATERIALIZED VIEW order_dashboard AS\nSELECT\n  date_trunc('day', created_at) AS day,\n  COUNT(*) AS order_count,\n  SUM(total) AS revenue,\n  AVG(total) AS avg_order_value\nFROM orders\nGROUP BY day\nORDER BY day DESC;\n\n-- Create index on materialized view for fast lookups\nCREATE INDEX idx_dashboard_day ON order_dashboard(day);\n\n-- Refresh (can be scheduled via pg_cron)\nREFRESH MATERIALIZED VIEW CONCURRENTLY order_dashboard;\n\n-- Query: O(1) lookup instead of O(n) aggregation\nSELECT * FROM order_dashboard\nWHERE day >= CURRENT_DATE - INTERVAL '30 days';\n-- Returns in <10ms instead of 30 seconds!" }
  ] },
  { type: "example", typeLabel: "Real-World Example", title: "Netflix's Precomputed Recommendations", content: [
    { kind: "text", value: "Netflix precomputes personalized recommendations for every user and stores them. When you open the app, it's a <strong>simple lookup, not a real-time ML inference</strong>." },
    { kind: "bullets", items: ["<strong>Batch precompute</strong> — Recommendations are precomputed offline in batch jobs", "<strong>Fast KV store</strong> — Results stored in a fast key-value store", "<strong>Simple lookup</strong> — Opening the app = simple cache lookup, not model inference", "<strong>Sub-100ms globally</strong> — Precomputation enables sub-100ms response times globally"] },
    { kind: "sources", items: ["Netflix Tech Blog, 'System Architectures for Personalization and Recommendation'"] }
  ] },
  { type: "guide", typeLabel: "Step-by-Step Guide", title: "Adding Precomputation", content: [
    { kind: "bullets", items: ["<strong>Find slow queries</strong> — Step 1: Identify your slowest, most-repeated read queries", "<strong>Create mat views</strong> — Step 2: Create a materialized view or summary table for each", "<strong>Schedule refresh</strong> — Step 3: Set up a refresh schedule (every 5 min, hourly, or event-driven)", "<strong>Index mat views</strong> — Step 4: Add indexes to materialized views for fast filtered lookups", "<strong>Monitor staleness</strong> — Step 5: Monitor staleness -- how old is the precomputed data?", "<strong>Concurrent refresh</strong> — Step 6: Use REFRESH CONCURRENTLY (PostgreSQL) to avoid read downtime during refresh"] }
  ] },
  { type: "practices", typeLabel: "Best Practices", title: "Precomputation Rules", content: [
    { kind: "bullets", items: ["<strong>Read-heavy targets</strong> — ✅ Precompute queries that are read-heavy and change infrequently", "<strong>Concurrent refresh</strong> — ✅ Use REFRESH CONCURRENTLY to avoid downtime", "<strong>Staleness SLA</strong> — ✅ Monitor staleness and set it as an SLA", "<strong>Not for real-time</strong> — ❌ Don't precompute data that changes every second (use caching instead)", "<strong>Index mat views</strong> — ❌ Don't forget to index materialized views", "<strong>Monitor costs</strong> — ❌ Don't precompute without monitoring refresh time and storage cost"] }
  ] },
  { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [
    { kind: "bullets", items: ["<strong>Stale views</strong> — Materialized view refreshes hourly but users expect real-time data", "<strong>No indexes</strong> — Materialized view without indexes is just a slow table", "<strong>Too many views</strong> — Each view consumes storage and refresh compute time", "<strong>Blocking refresh</strong> — Non-concurrent refresh locks the view during update"] }
  ] },
  { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
    { kind: "bullets", items: ["<strong>Find slowest query</strong> — Find your slowest dashboard or aggregation query", "<strong>Create mat view</strong> — Create a materialized view for it", "<strong>Schedule refresh</strong> — Set up a refresh schedule (pg_cron or application job)", "<strong>Measure improvement</strong> — Measure: query time before vs after precomputation"] }
  ] },
  { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
    { kind: "bullets", items: ["<strong>Storage for speed</strong> — Materialized views trade storage for speed: precompute once, read instantly.", "<strong>Concurrent refresh</strong> — Refresh concurrently to avoid read downtime.", "<strong>Best use case</strong> — Best for read-heavy, infrequently-changing aggregations.", "<strong>Staleness monitoring</strong> — Monitor staleness and set appropriate refresh intervals."] },
    { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }
  ] }
] };

window.DEEP_DIVES[195] = { title: "Two-Phase Commit: Understand It, Then Avoid It", icon: "🚫", tag: "distributed systems", slides: [
  { type: "hook", typeLabel: "Why It Matters", title: "The Protocol Everyone Learns and Nobody Uses", content: [
    { kind: "text", value: "Two-Phase Commit (2PC) is the textbook answer for distributed transactions. It's also <strong>slow, fragile, and blocking</strong>. Learn it to understand the problem. Then use sagas instead." },
    { kind: "stats", items: [{ value: "2", label: "phases: prepare and commit" }, { value: "1", label: "coordinator failure blocks all participants" }, { value: "0", label: "modern microservice architectures that rely on 2PC" }] }
  ] },
  { type: "problem", typeLabel: "The Problem", title: "ACID Across Databases", content: [
    { kind: "text", value: "You need an atomic transaction across two databases or services. Either both commit or both rollback. Without a protocol, you get <strong>partial commits and inconsistent state</strong>." },
    { kind: "bullets", items: ["<strong>Partial commit</strong> — Order service commits, payment service fails -> order exists without payment", "<strong>No cross-DB atomic</strong> — No way to atomically commit across two independent databases", "<strong>Complex retries</strong> — Retry logic is complex when multiple systems are involved", "<strong>All-or-nothing need</strong> — Need a protocol that ensures all-or-nothing across participants"] }
  ] },
  { type: "concepts", typeLabel: "Core Concepts", title: "2PC Protocol", content: [
    { kind: "bullets", items: ["<strong>Phase 1 (Prepare)</strong> — Coordinator asks all participants: 'Can you commit?' Each responds YES or NO.", "<strong>Phase 2 (Commit/Abort)</strong> — If all said YES: coordinator sends COMMIT. If any said NO: coordinator sends ABORT.", "<strong>Coordinator</strong> — Central node that drives the protocol. Single point of failure.", "<strong>Blocking</strong> — If coordinator crashes after Phase 1, participants are stuck holding locks.", "<strong>In-doubt state</strong> — Participant said YES in Phase 1 but never heard Phase 2. Cannot commit or abort."] },
    { kind: "callout", style: "warning", value: "2PC is a blocking protocol. If the coordinator crashes between Phase 1 and Phase 2, all participants hold locks indefinitely until the coordinator recovers. This is why you avoid 2PC in microservices." }
  ] },
  { type: "how", typeLabel: "How It Works", title: "2PC Protocol Flow", content: [
    { kind: "code", value: "// Two-Phase Commit Protocol\n\n// PHASE 1: PREPARE\nCoordinator -> Participant A: \"Can you commit TX-42?\"\nCoordinator -> Participant B: \"Can you commit TX-42?\"\nParticipant A -> Coordinator: \"YES\" (locks held, data written to WAL)\nParticipant B -> Coordinator: \"YES\"\n\n// PHASE 2: COMMIT (all said YES)\nCoordinator -> Participant A: \"COMMIT TX-42\"\nCoordinator -> Participant B: \"COMMIT TX-42\"\n// Both release locks\n\n// IF ANY SAID NO:\n// Coordinator -> All: \"ABORT TX-42\"\n// All participants rollback and release locks\n\n// THE PROBLEM: Coordinator crashes here ↓\n// Phase 1 complete (all said YES)\n// *** COORDINATOR CRASHES ***\n// Phase 2 never sent\n// Participants are stuck: can't commit, can't abort\n// Locks held indefinitely!" }
  ] },
  { type: "example", typeLabel: "Real-World Example", title: "XA Transactions in Java EE", content: [
    { kind: "text", value: "Java EE's JTA (Java Transaction API) uses 2PC (XA protocol) for distributed transactions. It works in controlled enterprise environments but is <strong>too slow and fragile for microservices</strong>." },
    { kind: "bullets", items: ["<strong>XA standard</strong> — XA is the standard implementation of 2PC in enterprise Java", "<strong>Cross-DB JDBC</strong> — Works across JDBC connections to different databases", "<strong>XA requirements</strong> — Requires XA-compatible drivers and transaction managers", "<strong>Performance cost</strong> — Performance: 5-10x slower than local transactions"] },
    { kind: "sources", items: ["Pat Helland, 'Life beyond Distributed Transactions', CIDR 2007"] }
  ] },
  { type: "guide", typeLabel: "Step-by-Step Guide", title: "Alternatives to 2PC", content: [
    { kind: "bullets", items: ["<strong>Question the need</strong> — Step 1: Ask: do you really need distributed ACID? Most don't.", "<strong>Saga for services</strong> — Step 2: If you need atomicity across services -> Saga Pattern (compensating transactions)", "<strong>Local transactions</strong> — Step 3: If you need consistency within one DB -> just use local transactions", "<strong>Outbox pattern</strong> — Step 4: If you need exactly-once across systems -> idempotent consumers + outbox pattern", "<strong>2PC within trust</strong> — Step 5: If you absolutely need 2PC -> use it within a single trust boundary (e.g., same DB cluster)", "<strong>NewSQL option</strong> — Step 6: Consider NewSQL databases (Spanner, CockroachDB) for distributed ACID without 2PC headaches"] }
  ] },
  { type: "practices", typeLabel: "Best Practices", title: "Rules", content: [
    { kind: "bullets", items: ["<strong>Prefer sagas</strong> — ✅ Use sagas instead of 2PC for cross-service transactions", "<strong>Local transactions</strong> — ✅ Use local transactions within a single database", "<strong>Outbox pattern</strong> — ✅ Use idempotent consumers + outbox for reliable cross-system state changes", "<strong>Not for microservices</strong> — ❌ Don't use 2PC across microservices -- it creates tight coupling and fragility", "<strong>No user-facing locks</strong> — ❌ Don't hold distributed locks for user-facing operations", "<strong>Use sagas instead</strong> — ❌ Don't implement 2PC from scratch -- use the saga pattern instead"] }
  ] },
  { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [
    { kind: "bullets", items: ["<strong>2PC across microservices</strong> — Blocking protocol in a non-blocking architecture", "<strong>Long-held locks</strong> — 2PC locks resources during the entire protocol duration", "<strong>No timeout</strong> — In-doubt participants wait forever for a crashed coordinator", "<strong>Using 2PC because it's 'correct'</strong> — Correctness at the cost of availability is rarely worth it"] }
  ] },
  { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
    { kind: "bullets", items: ["<strong>Audit for 2PC</strong> — Check: are you using XA transactions or 2PC anywhere?", "<strong>Evaluate sagas</strong> — If yes, evaluate replacing with the saga pattern", "<strong>Compensating txns</strong> — Identify cross-service operations that could use compensating transactions instead", "<strong>Read Helland</strong> — Read Pat Helland's 'Life beyond Distributed Transactions' for deeper understanding"] }
  ] },
  { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
    { kind: "bullets", items: ["<strong>Blocking protocol</strong> — 2PC ensures all-or-nothing across databases but is blocking and fragile.", "<strong>Coordinator SPOF</strong> — If the coordinator crashes, participants are stuck holding locks indefinitely.", "<strong>Prefer sagas</strong> — Use sagas (compensating transactions) for cross-service coordination instead.", "<strong>Limited scope</strong> — 2PC is acceptable within a single trust boundary (e.g., same database cluster)."] },
    { kind: "quality", items: [{ label: "Actionability", score: 4 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }
  ] }
] };

window.DEEP_DIVES[196] = { title: "Designing Exactly-Once Semantics", icon: "1️⃣", tag: "distributed systems", slides: [
  { type: "hook", typeLabel: "Why It Matters", title: "The Impossible Made Practical", content: [
    { kind: "text", value: "True exactly-once delivery is impossible in distributed systems. But <strong>exactly-once processing</strong> is achievable through idempotent consumers and deduplication. The distinction matters." },
    { kind: "stats", items: [{ value: "impossible", label: "exactly-once delivery (proven)" }, { value: "achievable", label: "exactly-once processing via idempotency" }, { value: "2", label: "techniques: idempotent consumers + deduplication" }] }
  ] },
  { type: "problem", typeLabel: "The Problem", title: "Duplicate Processing", content: [
    { kind: "text", value: "Network timeouts, retries, and broker redelivery mean your consumer may process the same message <strong>twice or more</strong>. Without protection, customers are charged twice." },
    { kind: "bullets", items: ["<strong>Lost acknowledgment</strong> — Message broker delivers a message, consumer processes it, ack is lost -> redelivery", "<strong>Crash before ack</strong> — Consumer crashes after processing but before acknowledging", "<strong>Duplicate publish</strong> — Producer retries a publish and the broker stores it twice", "<strong>At-least-once reality</strong> — At-least-once delivery is guaranteed, exactly-once is not"] }
  ] },
  { type: "concepts", typeLabel: "Core Concepts", title: "Exactly-Once Strategies", content: [
    { kind: "bullets", items: ["<strong>Idempotent Consumer</strong> — Processing the same message twice has the same effect as once", "<strong>Idempotency Key</strong> — Unique identifier per operation (e.g., payment ID). Used to detect duplicates.", "<strong>Deduplication Table</strong> — Store processed message IDs. Reject duplicates.", "<strong>Transactional Outbox</strong> — Process message + record completion in same DB transaction", "<strong>Kafka Exactly-Once</strong> — Producer and consumer transactions within Kafka (idempotent producer + transactions)"] }
  ] },
  { type: "how", typeLabel: "How It Works", title: "Idempotent Consumer Pattern", content: [
    { kind: "code", value: "// Idempotent consumer with deduplication\nasync function handlePaymentEvent(event) {\n  const idempotencyKey = event.paymentId;\n  \n  // Check if already processed\n  const existing = await db.query(\n    'SELECT 1 FROM processed_events WHERE idempotency_key = $1',\n    [idempotencyKey]\n  );\n  if (existing.rows.length > 0) {\n    console.log('Duplicate detected, skipping');\n    return; // Already processed\n  }\n  \n  // Process + record in SAME transaction\n  await db.transaction(async (tx) => {\n    // Do the work\n    await tx.query('UPDATE accounts SET balance = balance + $1 WHERE id = $2',\n      [event.amount, event.accountId]);\n    \n    // Record as processed\n    await tx.query('INSERT INTO processed_events (idempotency_key, processed_at) VALUES ($1, NOW())',\n      [idempotencyKey]);\n  });\n}" }
  ] },
  { type: "example", typeLabel: "Real-World Example", title: "Stripe's Idempotency Keys", content: [
    { kind: "text", value: "Stripe's API accepts an <strong>Idempotency-Key header</strong> on every mutating request. Retries with the same key return the cached result without re-executing." },
    { kind: "bullets", items: ["<strong>Idempotency header</strong> — Every POST request can include an Idempotency-Key header", "<strong>First request cached</strong> — First request is processed normally and result is cached", "<strong>Duplicate returns cache</strong> — Subsequent requests with the same key return the cached result", "<strong>Key expiration</strong> — Keys expire after 24 hours to prevent unbounded storage"] },
    { kind: "sources", items: ["Stripe API Documentation, 'Idempotent Requests'", "Brandur Leach, 'Implementing Stripe-like Idempotency Keys in Postgres'"] }
  ] },
  { type: "guide", typeLabel: "Step-by-Step Guide", title: "Implementing Exactly-Once Processing", content: [
    { kind: "bullets", items: ["<strong>Find harmful duplicates</strong> — Step 1: Identify operations where duplicates cause harm (payments, emails, inventory)", "<strong>Add idempotency key</strong> — Step 2: Add an idempotency key to every message/request", "<strong>Dedup table</strong> — Step 3: Create a processed_events table to track completed operations", "<strong>Same transaction</strong> — Step 4: Process the message AND record completion in the SAME database transaction", "<strong>Return cached result</strong> — Step 5: On duplicate detection, return the cached result (don't re-process)", "<strong>TTL cleanup</strong> — Step 6: Add TTL cleanup for the deduplication table (e.g., 7 days)"] }
  ] },
  { type: "practices", typeLabel: "Best Practices", title: "Rules", content: [
    { kind: "bullets", items: ["<strong>Natural business keys</strong> — ✅ Use natural business keys as idempotency keys (order ID, payment ID)", "<strong>Same transaction</strong> — ✅ Process + record deduplication in the same DB transaction", "<strong>TTL cleanup</strong> — ✅ Clean up old deduplication records with a TTL", "<strong>Brokers aren't exact</strong> — ❌ Don't rely on the message broker for exactly-once (most guarantee at-least-once)", "<strong>Stable keys for retries</strong> — ❌ Don't use random UUIDs as idempotency keys for retries (they won't match)", "<strong>Never skip dedup</strong> — ❌ Don't skip deduplication because 'duplicates are unlikely'"] }
  ] },
  { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [
    { kind: "bullets", items: ["<strong>No idempotency key</strong> — Can't detect duplicates without a stable identifier", "<strong>Check-then-act race</strong> — Checking dedup table and processing in separate transactions", "<strong>Unbounded dedup table</strong> — Never cleaning up old entries fills the database", "<strong>Assuming broker exactly-once</strong> — Most brokers are at-least-once; your consumer must be idempotent"] }
  ] },
  { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
    { kind: "bullets", items: ["<strong>Find risky consumer</strong> — Identify one message consumer that would cause harm if a message is processed twice", "<strong>Add idempotency key</strong> — Add an idempotency key to the message schema", "<strong>Build dedup table</strong> — Implement deduplication with a processed_events table", "<strong>Test duplicate</strong> — Test: send the same message twice and verify it's processed only once"] }
  ] },
  { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
    { kind: "bullets", items: ["<strong>Processing not delivery</strong> — Exactly-once delivery is impossible; exactly-once processing is achievable.", "<strong>Keys + dedup table</strong> — Use idempotency keys + deduplication table for exactly-once processing.", "<strong>Same transaction</strong> — Process + record deduplication in the same database transaction.", "<strong>TTL cleanup</strong> — Clean up old deduplication records with a TTL."] },
    { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }
  ] }
] };

window.DEEP_DIVES[197] = { title: "Distributed Tracing Deep Dive", icon: "🔭", tag: "observability", slides: [
  { type: "hook", typeLabel: "Why It Matters", title: "Following a Request Across 20 Services", content: [
    { kind: "text", value: "In a microservice architecture, a single user request touches 10-20 services. When it's slow, <strong>which service is the bottleneck?</strong> Distributed tracing answers this." },
    { kind: "stats", items: [{ value: "10-20", label: "services touched by a single request" }, { value: "1", label: "trace ID connects all spans across services" }, { value: "OpenTelemetry", label: "the industry standard for instrumentation" }] },
    { kind: "sources", items: ["Google, 'Dapper, a Large-Scale Distributed Systems Tracing Infrastructure', 2010"] }
  ] },
  { type: "problem", typeLabel: "The Problem", title: "Debugging Without Visibility", content: [
    { kind: "text", value: "A request takes 5 seconds. Logs show each service processed in <100ms. Where did the time go? <strong>Network latency, queuing, and retries are invisible without tracing.</strong>" },
    { kind: "bullets", items: ["<strong>No inter-service view</strong> — Per-service logs don't show inter-service latency", "<strong>No log correlation</strong> — Can't correlate logs across services without a trace ID", "<strong>Invisible overhead</strong> — Network issues, queue wait times, and serialization overhead are invisible", "<strong>Manual stitching</strong> — Finding the bottleneck requires manually stitching together logs from 15 services"] }
  ] },
  { type: "concepts", typeLabel: "Core Concepts", title: "Tracing Fundamentals", content: [
    { kind: "bullets", items: ["<strong>Trace</strong> — End-to-end record of a request across all services. Identified by a Trace ID.", "<strong>Span</strong> — A single operation within a trace (e.g., 'HTTP GET /users', 'DB query'). Has start time and duration.", "<strong>Parent-Child Spans</strong> — Spans form a tree showing the call hierarchy.", "<strong>Context Propagation</strong> — Trace ID is passed via HTTP headers (traceparent) between services.", "<strong>Sampling</strong> — Collect traces for a percentage of requests to control overhead and storage."] }
  ] },
  { type: "how", typeLabel: "How It Works", title: "OpenTelemetry Instrumentation", content: [
    { kind: "code", value: "// OpenTelemetry auto-instrumentation (Node.js)\nconst { NodeSDK } = require('@opentelemetry/sdk-node');\nconst { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');\n\nconst sdk = new NodeSDK({\n  instrumentations: [getNodeAutoInstrumentations()],\n  // Auto-instruments: HTTP, Express, pg, Redis, gRPC, etc.\n});\nsdk.start();\n\n// Custom span for business logic\nconst tracer = require('@opentelemetry/api').trace.getTracer('order-service');\n\nasync function processOrder(order) {\n  return tracer.startActiveSpan('processOrder', async (span) => {\n    span.setAttribute('order.id', order.id);\n    span.setAttribute('order.total', order.total);\n    try {\n      await validateOrder(order);   // child span\n      await chargePayment(order);   // child span (crosses service boundary)\n      await sendConfirmation(order); // child span\n      span.setStatus({ code: SpanStatusCode.OK });\n    } catch (err) {\n      span.setStatus({ code: SpanStatusCode.ERROR, message: err.message });\n      throw err;\n    } finally {\n      span.end();\n    }\n  });\n}" }
  ] },
  { type: "example", typeLabel: "Real-World Example", title: "Google's Dapper", content: [
    { kind: "text", value: "Google's Dapper traces <strong>every request across their entire infrastructure</strong>, enabling engineers to diagnose performance issues across thousands of services." },
    { kind: "bullets", items: ["<strong>Universal instrumentation</strong> — Every Google service is instrumented with Dapper tracing", "<strong>Adaptive sampling</strong> — Adaptive sampling: trace 1/1000 requests for low overhead", "<strong>Analysis and anomaly</strong> — Trace data stored for analysis and anomaly detection", "<strong>Industry influence</strong> — Inspired Zipkin (Twitter), Jaeger (Uber), and OpenTelemetry"] },
    { kind: "sources", items: ["Benjamin H. Sigelman et al., 'Dapper, a Large-Scale Distributed Tracing Infrastructure', Google, 2010"] }
  ] },
  { type: "guide", typeLabel: "Step-by-Step Guide", title: "Adding Distributed Tracing", content: [
    { kind: "bullets", items: ["<strong>Add OpenTelemetry</strong> — Step 1: Add OpenTelemetry SDK to all services (auto-instrumentation covers most cases)", "<strong>Set up collector</strong> — Step 2: Set up a trace collector (Jaeger, Tempo, or managed: Datadog, Honeycomb)", "<strong>Context propagation</strong> — Step 3: Ensure context propagation via W3C traceparent headers across all service calls", "<strong>Custom spans</strong> — Step 4: Add custom spans for business-critical operations", "<strong>Set sampling rate</strong> — Step 5: Set sampling rate: start at 100% in staging, 1-10% in production", "<strong>Find slow spans</strong> — Step 6: Use trace data to find the slowest span in your most critical user flows"] }
  ] },
  { type: "practices", typeLabel: "Best Practices", title: "Tracing Rules", content: [
    { kind: "bullets", items: ["<strong>OpenTelemetry standard</strong> — ✅ Use OpenTelemetry -- it's the industry standard", "<strong>Auto-instrument first</strong> — ✅ Auto-instrument first, add custom spans for business logic second", "<strong>Propagate everywhere</strong> — ✅ Propagate trace context across ALL service boundaries (HTTP, gRPC, message queues)", "<strong>Sample in prod</strong> — ❌ Don't trace 100% of production traffic (high overhead and storage cost)", "<strong>Trace async too</strong> — ❌ Don't forget to trace async operations (queue consumers, background jobs)", "<strong>Readable traces</strong> — ❌ Don't add spans so granular that the trace is unreadable"] }
  ] },
  { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [
    { kind: "bullets", items: ["<strong>Missing propagation</strong> — One service doesn't forward the trace header, breaking the trace", "<strong>No sampling</strong> — 100% tracing in production overwhelms storage", "<strong>Too many spans</strong> — Every function call is a span, making traces 1000 spans deep", "<strong>Not connecting to logs</strong> — Traces and logs use different IDs, can't correlate"] }
  ] },
  { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
    { kind: "bullets", items: ["<strong>Instrument one service</strong> — Add OpenTelemetry auto-instrumentation to one service", "<strong>Set up backend</strong> — Set up Jaeger or Grafana Tempo as your trace backend", "<strong>Trace one flow</strong> — Trace one end-to-end user flow and identify the slowest span", "<strong>Verify propagation</strong> — Verify trace context propagates across service boundaries"] }
  ] },
  { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
    { kind: "bullets", items: ["<strong>Cross-service visibility</strong> — Distributed tracing follows a request across all services via a Trace ID.", "<strong>OpenTelemetry standard</strong> — Use OpenTelemetry for instrumentation -- it's the industry standard.", "<strong>Auto-instrument first</strong> — Auto-instrument first, then add custom spans for critical business logic.", "<strong>Sampling and propagation</strong> — Sample in production (1-10%). Propagate context across all boundaries."] },
    { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }
  ] }
] };

window.DEEP_DIVES[198] = { title: "Authorization Patterns: RBAC, ABAC, ReBAC", icon: "🛡️", tag: "security", slides: [
  { type: "hook", typeLabel: "Why It Matters", title: "Who Can Do What to Which Resource", content: [
    { kind: "text", value: "Authentication verifies identity. Authorization determines <strong>what that identity can do</strong>. The wrong authorization model leads to security vulnerabilities or impossible-to-manage permission systems." },
    { kind: "stats", items: [{ value: "3", label: "major authorization models: RBAC, ABAC, ReBAC" }, { value: "RBAC", label: "most common but least flexible" }, { value: "ReBAC", label: "rising fast (Google Zanzibar, SpiceDB, Ory)" }] }
  ] },
  { type: "problem", typeLabel: "The Problem", title: "Authorization Spaghetti", content: [
    { kind: "text", value: "Authorization logic is scattered across services in if/else statements. Adding a new role requires changes in 15 files. <strong>Nobody knows who has access to what.</strong>" },
    { kind: "bullets", items: ["<strong>Scattered checks</strong> — if (user.role === 'admin') checks scattered everywhere", "<strong>Change amplification</strong> — Adding a new permission requires code changes across multiple services", "<strong>No audit trail</strong> — No way to audit who can access what without reading all the code", "<strong>Role explosion</strong> — Role explosion: 200 roles with overlapping permissions"] }
  ] },
  { type: "concepts", typeLabel: "Core Concepts", title: "Authorization Models", content: [
    { kind: "bullets", items: ["<strong>RBAC (Role-Based)</strong> — Users have roles. Roles have permissions. Simple but coarse. (Admin, Editor, Viewer)", "<strong>ABAC (Attribute-Based)</strong> — Policies evaluate attributes of user, resource, and context. Flexible but complex.", "<strong>ReBAC (Relationship-Based)</strong> — Access is derived from relationships between entities. (User is owner of Document, Team has access to Project)", "<strong>Google Zanzibar</strong> — ReBAC system that powers Google Docs, Drive, YouTube permissions at massive scale.", "<strong>Policy as Code</strong> — Authorization rules defined in code (OPA/Rego, Cedar), not hardcoded in application."] }
  ] },
  { type: "how", typeLabel: "How It Works", title: "Three Models Compared", content: [
    { kind: "code", value: "// RBAC: role -> permissions\nconst rbac = {\n  admin:  ['read', 'write', 'delete', 'manage_users'],\n  editor: ['read', 'write'],\n  viewer: ['read'],\n};\nconst canEdit = rbac[user.role].includes('write');\n\n// ABAC: policy evaluates attributes\nconst abacPolicy = (user, resource, action) => {\n  if (action === 'edit' && resource.department === user.department\n      && user.clearanceLevel >= resource.sensitivityLevel) {\n    return true;  // Same dept + sufficient clearance\n  }\n  return false;\n};\n\n// ReBAC: check relationship graph\n// \"Can Alice edit Document-42?\"\n// Alice -[member]-> Team-X -[editor]-> Project-1 -[parent]-> Document-42\n// Answer: YES (Alice is a member of a team that is editor of the parent project)\nspicedb.checkPermission({\n  subject: 'user:alice',\n  permission: 'edit',\n  resource: 'document:42'\n}); // -> ALLOWED" }
  ] },
  { type: "example", typeLabel: "Real-World Example", title: "Google Zanzibar", content: [
    { kind: "text", value: "Google Zanzibar powers authorization for <strong>Google Docs, Drive, YouTube, and Maps</strong> using a relationship-based model that checks permissions in <10ms at billions of checks per second." },
    { kind: "bullets", items: ["<strong>Relationship tuples</strong> — Relationship tuples: (user:alice, editor, document:42)", "<strong>Graph traversal</strong> — Permission is derived by traversing the relationship graph", "<strong>Billions of checks</strong> — Handles billions of authorization checks per second", "<strong>Open-source options</strong> — Open-source implementations: SpiceDB, OpenFGA, Ory Keto"] },
    { kind: "sources", items: ["Lea Kissner et al., 'Zanzibar: Google's Consistent, Global Authorization System', USENIX ATC 2019"] }
  ] },
  { type: "guide", typeLabel: "Step-by-Step Guide", title: "Choosing an Authorization Model", content: [
    { kind: "bullets", items: ["<strong>RBAC for simple</strong> — Step 1: Simple app with few roles? -> RBAC (simplest, well-understood)", "<strong>ABAC for attributes</strong> — Step 2: Need to evaluate user/resource attributes (department, clearance)? -> ABAC", "<strong>ReBAC for sharing</strong> — Step 3: Complex sharing model (org hierarchy, teams, document sharing)? -> ReBAC", "<strong>Externalize authz</strong> — Step 4: Externalize authorization from application code (OPA, SpiceDB, Cerbos)", "<strong>Policy as code</strong> — Step 5: Define policies as code, version them, and test them in CI", "<strong>Audit access</strong> — Step 6: Audit: generate a report of who can access what"] }
  ] },
  { type: "practices", typeLabel: "Best Practices", title: "Authorization Rules", content: [
    { kind: "bullets", items: ["<strong>Externalize authz</strong> — ✅ Externalize authorization from application code", "<strong>Policy as code</strong> — ✅ Use policy-as-code for auditable, testable authorization", "<strong>Start with RBAC</strong> — ✅ Start with RBAC; evolve to ABAC or ReBAC when needed", "<strong>No scattered checks</strong> — ❌ Don't hardcode authorization in if/else statements across services", "<strong>Avoid role explosion</strong> — ❌ Don't create hundreds of fine-grained roles (role explosion)", "<strong>Separate authn/authz</strong> — ❌ Don't mix authentication and authorization logic"] }
  ] },
  { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [
    { kind: "bullets", items: ["<strong>Scattered if/else</strong> — Authorization logic duplicated across every service", "<strong>Role explosion</strong> — 500 roles with subtle differences nobody understands", "<strong>No audit trail</strong> — Can't answer 'who has access to this resource?'", "<strong>Frontend-only authz</strong> — Hiding UI elements but not enforcing on the backend"] }
  ] },
  { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
    { kind: "bullets", items: ["<strong>Audit centralization</strong> — Audit your authorization: is it scattered across code or centralized?", "<strong>Identify model</strong> — Identify your authorization model: RBAC, ABAC, or ad-hoc?", "<strong>Evaluate tools</strong> — Evaluate externalizing authorization (OPA, SpiceDB, Cerbos)", "<strong>Answer the question</strong> — Can you answer: 'Who has access to this resource?' If not, you have a problem."] }
  ] },
  { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
    { kind: "bullets", items: ["<strong>Match model to need</strong> — RBAC for simple apps, ABAC for attribute-based policies, ReBAC for relationship-heavy models.", "<strong>Externalize authz</strong> — Externalize authorization from application code.", "<strong>Policy as code</strong> — Use policy-as-code for auditability and testability.", "<strong>Zanzibar gold standard</strong> — Google Zanzibar (SpiceDB, OpenFGA) is the gold standard for ReBAC."] },
    { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }
  ] }
] };

window.DEEP_DIVES[199] = { title: "The Modern Data Stack: A Reality Check", icon: "🔮", tag: "contrarian", slides: [
  { type: "hook", typeLabel: "Why It Matters", title: "What Actually Survived", content: [
    { kind: "text", value: "The 'modern data stack' hype promised a tool for every job: Fivetran, dbt, Snowflake, Looker, Census. Two years later, <strong>budgets are being slashed and consolidation is underway</strong>." },
    { kind: "stats", items: [{ value: "$1M+", label: "annual Snowflake bills shocking finance teams" }, { value: "50%", label: "of MDS tools may not survive as independent companies" }, { value: "PostgreSQL", label: "increasingly replacing specialized tools" }] }
  ] },
  { type: "problem", typeLabel: "The Problem", title: "Tool Sprawl and Budget Shock", content: [
    { kind: "text", value: "Companies adopted 15+ specialized data tools. Now they have <strong>15 contracts, 15 integration points, and 15 potential failure modes</strong>. The tooling cost exceeds the value delivered." },
    { kind: "bullets", items: ["<strong>Bill shock</strong> — Snowflake compute bills grew 10x faster than expected", "<strong>Stack cost</strong> — Fivetran + dbt + Snowflake + Looker + Census = $500K+/year for a mid-size company", "<strong>Integration overhead</strong> — Each tool adds integration complexity and another vendor dependency", "<strong>Tool management tax</strong> — Data engineers spend more time managing tools than building pipelines"] }
  ] },
  { type: "concepts", typeLabel: "Core Concepts", title: "What Survived and Why", content: [
    { kind: "bullets", items: ["<strong>dbt (Survived)</strong> — SQL-based transformation is genuinely useful. Version-controlled, testable data models.", "<strong>Column-oriented warehouses (Survived)</strong> — Snowflake/BigQuery/Redshift solve real analytical query problems.", "<strong>Reverse ETL (Questioned)</strong> — Census/Hightouch fill a gap, but many teams realized they don't need it.", "<strong>Observability (Consolidating)</strong> — Monte Carlo, Great Expectations merging into broader platforms.", "<strong>Lakehouse (Rising)</strong> — Databricks/Delta Lake bridging the warehouse-lake divide. Reducing tool count."] },
    { kind: "callout", style: "insight", value: "The trend is consolidation: fewer tools, each doing more. PostgreSQL + DuckDB + dbt can replace 5+ specialized tools for many teams." }
  ] },
  { type: "how", typeLabel: "How It Works", title: "Simplified Stack", content: [
    { kind: "code", value: "// The 'expensive' modern data stack:\n// Fivetran ($) -> Snowflake ($$$$) -> dbt -> Looker ($$) -> Census ($)\n// Total: $500K+/year, 5 vendors, 5 integration points\n\n// The 'pragmatic' stack for most teams:\n// PostgreSQL (free) + pg_cron (scheduling)\n// + DuckDB (local analytics, free)\n// + dbt-core (transformations, free)\n// + Metabase or Evidence (dashboards, free/cheap)\n// Total: $0-50K/year, mostly open-source\n\n// When to upgrade:\n// > 1TB analytical data -> consider Snowflake/BigQuery\n// > 50 data sources -> consider Fivetran\n// > 20 analysts -> consider Looker/Tableau\n// Otherwise? PostgreSQL is probably fine." }
  ] },
  { type: "example", typeLabel: "Real-World Example", title: "Companies Simplifying", content: [
    { kind: "text", value: "Multiple startups have publicly shared their journey of <strong>replacing expensive MDS tools with simpler alternatives</strong> and saving hundreds of thousands per year." },
    { kind: "bullets", items: ["<strong>DuckDB rising</strong> — MotherDuck (DuckDB cloud) replacing Snowflake for sub-TB workloads", "<strong>Custom ingestion</strong> — Companies moving from Fivetran to custom ingestion with Singer/Airbyte", "<strong>dbt proven value</strong> — dbt remaining the standard for SQL transformations (proven value)", "<strong>Cheaper BI tools</strong> — Evidence.dev and Metabase replacing expensive BI tools for many teams"] }
  ] },
  { type: "guide", typeLabel: "Step-by-Step Guide", title: "Right-Sizing Your Data Stack", content: [
    { kind: "bullets", items: ["<strong>Audit costs</strong> — Step 1: Audit your current data stack costs (compute, licensing, integration)", "<strong>Find shelfware</strong> — Step 2: List which tools are actively used vs. shelfware", "<strong>Try PG + DuckDB</strong> — Step 3: Can PostgreSQL + DuckDB handle your analytical workload?", "<strong>Keep dbt</strong> — Step 4: Keep dbt -- it's proven. Question everything else.", "<strong>Consolidate vendors</strong> — Step 5: Consolidate vendors: fewer tools that each do more", "<strong>Cost alerts</strong> — Step 6: Set cost alerts on warehouse compute before the bill shocks finance"] }
  ] },
  { type: "practices", typeLabel: "Best Practices", title: "Data Stack Rules", content: [
    { kind: "bullets", items: ["<strong>PG + DuckDB first</strong> — ✅ Start with PostgreSQL and DuckDB before reaching for a warehouse", "<strong>dbt proves value</strong> — ✅ Use dbt for transformations -- it's the one tool that consistently proves its value", "<strong>Cost alerts</strong> — ✅ Set compute budgets and alerts on cloud data warehouses", "<strong>Question hype</strong> — ❌ Don't adopt a tool because it's in a VC-funded 'modern data stack' diagram", "<strong>No premature warehouse</strong> — ❌ Don't assume you need a data warehouse at <1TB of analytical data", "<strong>Avoid lock-in</strong> — ❌ Don't let vendor lock-in drive your architecture decisions"] }
  ] },
  { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Anti-Patterns", content: [
    { kind: "bullets", items: ["<strong>Resume-driven data stack</strong> — Adopting Snowflake + dbt + the latest tool to look modern", "<strong>No cost monitoring</strong> — Snowflake bill grows 10x before anyone notices", "<strong>Tool per problem</strong> — 15 specialized tools when 3 general tools would suffice", "<strong>Vendor lock-in</strong> — Proprietary SQL extensions and formats that prevent migration"] }
  ] },
  { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
    { kind: "bullets", items: ["<strong>Calculate total cost</strong> — Calculate the total cost of your current data stack", "<strong>Find underused tools</strong> — Identify tools that are underused or could be consolidated", "<strong>Try DuckDB</strong> — Try DuckDB for one analytical query and compare with your current warehouse", "<strong>Set cost alerts</strong> — Set up cost alerting on your data warehouse if you don't have it"] }
  ] },
  { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
    { kind: "bullets", items: ["<strong>Consolidation trend</strong> — The modern data stack is consolidating. Fewer, broader tools are winning.", "<strong>Pragmatic stack</strong> — PostgreSQL + DuckDB + dbt is sufficient for most teams.", "<strong>dbt survives</strong> — dbt is the one MDS tool that consistently proves its value.", "<strong>Cost alerting</strong> — Always set cost alerts on cloud data warehouses."] },
    { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }
  ] }
] };

window.DEEP_DIVES[200] = { title: "MILESTONE: You Think in Data", icon: "🎓", tag: "milestone", slides: [
  { type: "hook", typeLabel: "Why It Matters", title: "Data Fluency Unlocked", content: [
    { kind: "text", value: "You now understand relational and NoSQL databases, indexing, transactions, replication, sharding, migrations, time-series, search, Redis, caching, CRDTs, and distributed tracing. <strong>You can reason about data at every layer of the stack.</strong>" },
    { kind: "stats", items: [{ value: "200", label: "topics completed in this journey" }, { value: "50", label: "data & storage concepts mastered" }, { value: "every", label: "layer of the stack: app, database, cache, search, analytics" }] }
  ] },
  { type: "problem", typeLabel: "The Problem", title: "Choosing the Right Storage", content: [
    { kind: "text", value: "With so many options, the challenge is <strong>choosing the right storage for each use case</strong> without over-engineering or under-designing." },
    { kind: "bullets", items: ["<strong>PG handles 90%</strong> — PostgreSQL handles 90% of use cases but teams reach for NoSQL prematurely", "<strong>Cache trade-offs</strong> — Caching improves performance but cache invalidation causes consistency bugs", "<strong>Sharding complexity</strong> — Sharding enables scale but adds enormous operational complexity", "<strong>Access pattern driven</strong> — The best storage decision depends on access patterns, consistency needs, and team capability"] }
  ] },
  { type: "concepts", typeLabel: "Core Concepts", title: "The Data Decision Framework", content: [
    { kind: "bullets", items: ["<strong>Default to PostgreSQL</strong> — ACID, SQL, JSON, full-text search, vectors. Handle 90% of use cases.", "<strong>Add Redis for speed</strong> — Caching, sessions, rate limiting, leaderboards. Sub-ms operations.", "<strong>Add Elasticsearch for search</strong> — When PostgreSQL full-text search isn't enough.", "<strong>Add a TSDB for time-series</strong> — Metrics, IoT, logs at scale. TimescaleDB, ClickHouse.", "<strong>Add NoSQL for specific patterns</strong> — Wide-column for write-heavy, graph for relationships, document for flexibility."] },
    { kind: "callout", style: "insight", value: "The best architects don't know the most databases. They know which database to use for each access pattern and, critically, when PostgreSQL is enough." }
  ] },
  { type: "how", typeLabel: "How It Works", title: "Decision Tree", content: [
    { kind: "code", value: "// Storage Decision Tree\n\n// General CRUD with ACID?\n//   -> PostgreSQL (Topic 176)\n\n// Sub-ms key-value lookups?\n//   -> Redis (Topic 186)\n\n// Full-text search with relevance?\n//   -> Elasticsearch or PG full-text (Topic 185)\n\n// Append-heavy time-indexed data?\n//   -> TimescaleDB / ClickHouse (Topic 184)\n\n// Write-heavy, partition-friendly?\n//   -> Cassandra / ScyllaDB (Topic 177)\n\n// Complex relationship traversal?\n//   -> Neo4j / Neptune (Topic 192)\n\n// Need to scale writes beyond one server?\n//   -> Shard with Vitess/Citus (Topic 181)\n\n// Need offline collaboration?\n//   -> CRDTs (Topic 189)\n\n// Default answer: PostgreSQL. Seriously." }
  ] },
  { type: "example", typeLabel: "Real-World Example", title: "A Well-Designed Data Architecture", content: [
    { kind: "text", value: "A mature e-commerce platform uses the right storage for each job:" },
    { kind: "bullets", items: ["<strong>PostgreSQL</strong> — PostgreSQL: orders, users, products (ACID transactions)", "<strong>Redis</strong> — Redis: sessions, rate limiting, cart cache (sub-ms operations)", "<strong>Elasticsearch</strong> — Elasticsearch: product search with filters and facets (relevance scoring)", "<strong>TimescaleDB</strong> — TimescaleDB: application metrics and performance monitoring (time-series)", "<strong>Kafka</strong> — Kafka: event log connecting all systems (the log as source of truth)", "<strong>Pattern-driven</strong> — Each storage choice is driven by access pattern, not hype"] }
  ] },
  { type: "guide", typeLabel: "Step-by-Step Guide", title: "Auditing Your Data Architecture", content: [
    { kind: "bullets", items: ["<strong>List all stores</strong> — Step 1: List every data store in your system and what it stores", "<strong>Document patterns</strong> — Step 2: For each store, document the primary access pattern (CRUD, key-value, search, time-series)", "<strong>Find mismatches</strong> — Step 3: Identify mismatches: wrong storage for the access pattern", "<strong>Simplify with PG</strong> — Step 4: Identify opportunities: can PostgreSQL replace a specialized tool?", "<strong>Document trade-offs</strong> — Step 5: Document the trade-offs for each storage choice", "<strong>Draw data diagram</strong> — Step 6: Create a data architecture diagram showing the flow between stores"] }
  ] },
  { type: "practices", typeLabel: "Best Practices", title: "Data Architecture Rules", content: [
    { kind: "bullets", items: ["<strong>Access pattern driven</strong> — ✅ Choose storage based on access patterns, not hype", "<strong>Default to PG</strong> — ✅ Default to PostgreSQL and add specialized stores only when needed", "<strong>Document choices</strong> — ✅ Document why each storage technology was chosen", "<strong>Minimize DB count</strong> — ✅ Keep the number of different databases as small as possible", "<strong>Not per microservice</strong> — ❌ Don't use a new database for every microservice", "<strong>Ignore scale envy</strong> — ❌ Don't choose storage based on blog posts from companies 100x your scale"] }
  ] },
  { type: "pitfalls", typeLabel: "Common Pitfalls", title: "Architecture Anti-Patterns", content: [
    { kind: "bullets", items: ["<strong>Database per service dogma</strong> — 50 microservices with 50 different database instances", "<strong>Resume-driven storage</strong> — Using DynamoDB + Cassandra + Neo4j for a CRUD app", "<strong>Ignoring PostgreSQL</strong> — It handles JSON, search, vectors, time-series, and graph queries (via extensions)", "<strong>No data flow diagram</strong> — Nobody knows how data moves between 10 stores"] }
  ] },
  { type: "action", typeLabel: "Your Action Plan", title: "This Week's Challenge", content: [
    { kind: "bullets", items: ["<strong>Draw architecture</strong> — Draw a data architecture diagram of your current system", "<strong>Label patterns</strong> — Label each store with its access pattern and consistency model", "<strong>Simplify one store</strong> — Identify one store that could be replaced by PostgreSQL", "<strong>Technology radar</strong> — Create a data technology radar for your team: adopt, trial, hold, drop"] }
  ] },
  { type: "summary", typeLabel: "Key Takeaways", title: "Remember This", content: [
    { kind: "bullets", items: ["<strong>Data fluency</strong> — You now have the vocabulary to reason about data at every layer.", "<strong>Default to PG</strong> — Default to PostgreSQL. Add specialized stores only for specific access patterns.", "<strong>Access pattern driven</strong> — Choose storage based on access patterns and consistency needs, not hype.", "<strong>Next chapter</strong> — Next up: Streaming Systems -- building real-time data pipelines at scale."] },
    { kind: "quality", items: [{ label: "Actionability", score: 5 }, { label: "Correctness", score: 5 }, { label: "Visual Appeal", score: 4 }, { label: "Engagement", score: 5 }] }
  ] }
] };
