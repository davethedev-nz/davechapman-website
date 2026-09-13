export const siteContent = {
  site: {
    name: 'Dave Chapman',
    role: 'AI, Agents & Automation for Real Business Work',
    title: 'Dave Chapman | Applied AI for Business Operations',
    description:
      'Dave helps businesses fix one operational workflow at a time, decide what software should do, and build a small working prototype before a larger commitment.',
    canonical: 'https://davechapman.ai/',
    email: 'dave@davechapman.dev',
    location: 'New Zealand',
  },
  hero: {
    eyebrow: 'Operational AI',
    headline: 'Find the bottleneck. Prove the fix. Then decide.',
    summary:
      'I help teams solve one frustrating workflow at a time: the delay, the rework, the constant handoff, or the decision that nobody can trust. I diagnose what is actually happening, decide whether software, automation, AI, or a process fix is the right intervention, and build a small working prototype before any bigger commitment.',
    proofPoint: 'AI-assisted support triage cut first-response handoff to under 20 minutes.',
    primaryCta: {
      label: 'Discuss a workflow',
      href: '#contact',
    },
    secondaryCta: {
      label: 'See how I work',
      href: '#approach',
    },
  },
  problemClasses: [
    'Teams repeating the same decisions every day by hand.',
    'People re-investigating the same issues from scratch.',
    'Work that bounces between systems, spreadsheets, and inboxes.',
    'Processes where key context is hard to find when needed.',
    'Too many handoffs causing delay and inconsistency.',
    'Delivery slowed by avoidable process friction.',
    'Manual work left over because older automation could not handle gray areas.',
  ],
  approach: [
    {
      step: '01',
      title: 'Understand the workflow problem',
      text: 'Identify the bottleneck, the cost of delay, and what a good outcome actually looks like.',
      outcome: 'One workflow scoped',
    },
    {
      step: '02',
      title: 'Decide what software can safely do',
      text: 'Work out which decisions software can make and which should stay with people.',
      outcome: 'Ownership clarified',
    },
    {
      step: '03',
      title: 'Design the smallest workable intervention',
      text: 'Map the handoffs, exceptions, review points, and failure paths before building anything.',
      outcome: 'Clear next-step design',
    },
    {
      step: '04',
      title: 'Prototype with real inputs',
      text: 'Build a working slice in the actual workflow, not a demo disconnected from the job.',
      outcome: 'Prototype runs live',
    },
    {
      step: '05',
      title: 'Measure and decide',
      text: 'Check quality, cost, and operational impact, then decide whether to stop, iterate, or implement.',
      outcome: 'Go/no-go decision made',
    },
  ],
  engagement: [
    {
      title: 'Workflow Diagnostic',
      text: 'Identify one operational bottleneck, map the workflow and decisions involved, and determine whether process redesign, standard automation, AI, or no intervention is appropriate.',
    },
    {
      title: 'Prototype Sprint',
      text: 'Build and test a small working solution against real workflow inputs before committing to a larger implementation.',
    },
    {
      title: 'Implementation / Handover',
      text: 'Turn proven prototypes into operational systems, or provide the architecture, evidence, and implementation plan for the client’s internal team.',
    },
  ],
  pricing: {
    summary:
      'Engagements start small, are scoped around one workflow, and are priced before work begins. Diagnostics and prototypes are bounded. Clients are not committing to a large transformation programme before the value is proven.',
    line: 'Workflow Diagnostic — from NZ$X; Prototype Sprint — typically NZ$X–Y; Implementation — scoped after proof.',
  },
  capabilities: [
    'AI systems for internal decision workflows',
    'Process automation with clear human checkpoints',
    'Decision-support tools for operations teams',
    'Internal tools for context-heavy work',
    'AI-assisted software delivery workflows',
    'System integration and orchestration',
    'Rapid proof-of-concept builds',
  ],
  socials: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dave-chapman-8397501b4/',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/',
    },
  ],
  whyDave: {
    lead: 'The edge is linking business problems to practical system design and fast implementation.',
    points: [
      'Software engineer designing systems, integrations, and operational tools that real teams actually use.',
      'Former business owner with hands-on experience in logistics, workflow pressure, and operational decision-making.',
      'Build-first approach: test reality before committing to large programs or expensive transformation work.',
      'Currently working with AI, automation, and prototype development in real operational contexts.',
    ],
  },
  principles: [
    'AI should remove work, not create more admin.',
    'Use the simplest reliable system that gets the outcome.',
    'Keep humans where judgment and accountability matter.',
    'If standard automation is better than AI for a task, use standard automation.',
    'Code is a means. Business outcomes are the goal.',
  ],
  credibility: [
    'Each prototype includes boundaries, override points, and failure paths.',
    'Prototypes are tested with real inputs, not happy-path demos.',
    'Quality is inspectable before deeper automation is considered.',
    'If a reviewer cannot inspect why a decision was made, the workflow is not ready to scale.',
  ],
  whenNotToUseAi: [
    'When deterministic rules solve it more reliably and with lower risk.',
    'When accountability requires human judgment that cannot be delegated.',
    'When process quality issues should be fixed first.',
    'When skilled human handling is still cheaper than building and maintaining fully fledged software.',
  ],
  exploring: [
    'AI software engineering workflows and delivery acceleration',
    'AI review and verification loops',
    'Semi-autonomous development with human checkpoints',
    'Diagnostic assistants for operations teams',
    'Decision workflows combining rules, tools, and language models',
    'Turning organizational knowledge into machine-usable context',
  ],
  about:
    'I work across software engineering, integrations, operational systems, and business ownership. My background includes building practical systems and running a business where work has to be reliable, accountable, and efficient. I now focus on workflow diagnosis, AI automation, and rapid prototypes that test real operating value before a bigger investment is made.',
  contact: {
    title: 'Start with one workflow, not a full AI programme',
    text: 'The initial conversation is free. We talk through the workflow, the cost of the problem, and whether a diagnostic, a small prototype, or a different intervention is the right next step.',
    button: 'Start the conversation',
    href: 'mailto:dave@davechapman.dev?subject=Workflow%20Conversation',
  },
  projects: [
    {
      slug: 'support-ticket-triage',
      title: 'AI-assisted support ticket triage',
      summary: 'Rerouted mixed-quality inbound tickets into confidence-ranked lanes.',
      problem: 'Support teams re-read similar tickets and escalated too early.',
      boundary:
        'Automation classifies and drafts routing; team leads own final priority decisions.',
      outcome: 'Median first-response handoff dropped to under 20 minutes in pilot runs.',
      constraints: 'Low-confidence tickets always route to manual review. No silent auto-close.',
      before:
        'Unstructured inbox triage, repeated context gathering, inconsistent severity handling.',
      after:
        'Context capture and routing suggestions happen automatically with review checkpoints.',
      stack: 'Astro, Python, API orchestration with LLMs, ticketing system integration',
      confidence: 'Medium-high after 3 week pilot',
      timeline: '4 weeks',
      scope: 'Single support queue and escalation lane',
      diagramSrc: '/images/ticket-platform.png',
      diagramAlt:
        'Support triage workflow diagram showing AI intake, routing, and human escalation review.',
    },
    {
      slug: 'agentic-dev-workflow',
      title: 'Agentic development workflow with human checkpoints',
      summary:
        'Reduced review latency by automating repeatable implementation and verification loops.',
      problem:
        'Teams lost cycle time to repeatable setup, regression checks, and boilerplate updates.',
      boundary:
        'Agents can propose and implement scoped changes; merge decisions stay human-owned.',
      outcome: 'Pull request cycle time fell 28% on bounded task classes.',
      constraints: 'All generated changes require deterministic checks and reviewer approval.',
      before: 'Developers manually handled repetitive setup and cross-file consistency updates.',
      after:
        'Agents complete repetitive coding passes while humans evaluate intent, risk, and release quality.',
      stack: 'Python, CI/CD automation, test gates, LLM routing',
      confidence: 'Medium with controlled task taxonomy',
      timeline: '3 weeks',
      scope: 'Internal delivery workflow and CI/CD integration',
      diagramSrc: '/images/agent-delivery-cycle-final.png',
      diagramAlt:
        'Agent software delivery cycle with planning, implementation, verification, and human review gates.',
    },
  ],
  articles: [],
};
