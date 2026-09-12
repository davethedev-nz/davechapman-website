export const siteContent = {
  site: {
    name: 'Dave Chapman',
    role: 'AI, Agents & Automation for Real Business Work',
    title: 'Dave Chapman | Industrial AI For Workflow Bottlenecks',
    description:
      'Dave helps teams fix slow, costly workflows, then builds fast prototypes to prove what will actually work.',
    canonical: 'https://davechapman.ai/',
    email: 'dave@davechapman.dev',
    location: 'New Zealand',
  },
  hero: {
    eyebrow: 'Operating Thesis',
    headline: 'Find the work AI should be doing. Then prove it.',
    summary:
      'Find where work gets stuck. Define what software should decide, what humans should own, and where AI helps. Build a working prototype. Make a confident next decision.',
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
      title: 'Understand the business problem',
      text: 'Pinpoint delay, cost, risk, and rework. Define a useful outcome.',
      outcome: 'Priority bottleneck agreed',
    },
    {
      step: '02',
      title: 'Map decisions, context, and ownership',
      text: 'Decide what stays human, what moves to software, and what context each step needs.',
      outcome: 'Ownership boundaries mapped',
    },
    {
      step: '03',
      title: 'Design the workflow and controls',
      text: 'Design handoffs, controls, review points, and failure paths.',
      outcome: 'Control model approved',
    },
    {
      step: '04',
      title: 'Prototype quickly',
      text: 'Build a working slice in the real workflow, not a demo.',
      outcome: 'Prototype runs live',
    },
    {
      step: '05',
      title: 'Measure and decide',
      text: 'Measure quality and impact, then make a go/no-go decision.',
      outcome: 'Go/no-go decision made',
    },
  ],
  engagement: [
    {
      title: 'Phase 1: Diagnostic',
      text: 'Bring one workflow. Identify delay, cost, risk, and friction points.',
    },
    {
      title: 'Phase 2: Prototype scope',
      text: 'Define a thin slice with clear boundaries and controls.',
    },
    {
      title: 'Phase 3: Working prototype',
      text: 'Build and run it with real inputs and real handoffs.',
    },
    {
      title: 'Phase 4: Go / no-go decision',
      text: 'Decide: stop, iterate, or invest in production.',
    },
  ],
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
  ],
  whyDave: {
    lead: 'The edge is linking business problems to practical system design and fast implementation.',
    points: [
      'Senior engineer with deep systems and integration experience.',
      'Former logistics business owner with a strong commercial lens on technology decisions.',
      'Build-first approach: test reality before committing to large programs.',
      'Works across strategy and implementation so plans stay delivery-aware.',
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
    'I have worked on both sides of technology decisions: business spend and software delivery. Today I redesign workflows with AI and automation, then prove ideas quickly with working prototypes.',
  contact: {
    title: 'Bring one workflow that is slow, expensive, or inconsistent',
    text: 'You leave with a clear map of what to change and a practical next move.',
    button: 'Start the conversation',
    href: 'mailto:dave@davechapman.dev?subject=Workflow%20Conversation',
  },
  projects: [
    {
      slug: 'support-ticket-triage',
      title: 'AI-assisted support ticket triage',
      summary: 'Rerouted mixed-quality inbound tickets into confidence-ranked lanes.',
      problem:
        'Support teams re-read similar tickets and escalated too early.',
      boundary:
        'Automation classifies and drafts routing; team leads own final priority decisions.',
      outcome:
        'Median first-response handoff dropped to under 20 minutes in pilot runs.',
      constraints:
        'Low-confidence tickets always route to manual review. No silent auto-close.',
      before:
        'Unstructured inbox triage, repeated context gathering, inconsistent severity handling.',
      after:
        'Context capture and routing suggestions happen automatically with review checkpoints.',
      stack: 'Astro, Python, API orchestration with LLMs, ticketing system integration',
      confidence: 'Medium-high after 3 week pilot',
      timeline: '4 weeks',
      scope: 'Single support queue and escalation lane',
      diagramSrc: '/images/ticket-platform.png',
      diagramAlt: 'Support triage workflow diagram showing AI intake, routing, and human escalation review.',
    },
    {
      slug: 'agentic-dev-workflow',
      title: 'Agentic development workflow with human checkpoints',
      summary: 'Reduced review latency by automating repeatable implementation and verification loops.',
      problem:
        'Teams lost cycle time to repeatable setup, regression checks, and boilerplate updates.',
      boundary:
        'Agents can propose and implement scoped changes; merge decisions stay human-owned.',
      outcome:
        'Pull request cycle time fell 28% on bounded task classes.',
      constraints:
        'All generated changes require deterministic checks and reviewer approval.',
      before:
        'Developers manually handled repetitive setup and cross-file consistency updates.',
      after:
        'Agents complete repetitive coding passes while humans evaluate intent, risk, and release quality.',
      stack: 'Python, CI/CD automation, test gates, LLM routing',
      confidence: 'Medium with controlled task taxonomy',
      timeline: '3 weeks',
      scope: 'Internal delivery workflow and CI/CD integration',
      diagramSrc: '/images/agent-delivery-cycle-final.png',
      diagramAlt: 'Agent software delivery cycle with planning, implementation, verification, and human review gates.',
    },
  ],
  articles: [],
};
