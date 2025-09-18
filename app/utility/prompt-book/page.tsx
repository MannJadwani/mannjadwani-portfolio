'use client';

import { useMemo } from 'react';
import AnimatedLink from '../../components/AnimatedLink';
import { ArrowLeft, Copy } from 'lucide-react';

const PROMPTS = [
  {
    id: 'research-literature-review',
    title: 'Structured Literature Review',
    body: `Task: Produce a concise literature review on {TOPIC}.
Constraints:
- 5–7 key papers (last 5 years preferred)
- For each: 1–2 line finding, method, limitation
- End with gaps + future work directions
Formatting: Bulleted sections: Findings, Methods, Limitations, Gaps, Next Steps.`
  },
  {
    id: 'coding-spec-to-plan',
    title: 'Turn Spec into Implementation Plan',
    body: `You are a senior engineer. Convert this product spec into a step-by-step implementation plan.
Include: architecture diagram (text), data models, endpoints, component list, risks, roll-out steps.
Spec:
{SPEC}`
  },
  {
    id: 'refactor-roadmap',
    title: 'Refactor Roadmap (Safety First)',
    body: `Given this codebase summary, propose a 2–4 week refactor roadmap.
Rules: preserve behavior, add tests first, small PRs, feature flags, performance baselines.
Input:
{CODEBASE_SUMMARY}`
  },
  {
    id: 'debug-root-cause',
    title: 'Root Cause Debugger',
    body: `Act as a senior debugger. For this bug report, propose hypotheses ranked by likelihood.
For each hypothesis: reproduction, logs to add, metrics to check, quick fix vs real fix.
Bug:
{BUG_REPORT}`
  },
  {
    id: 'api-design',
    title: 'Pragmatic API Design',
    body: `Design a minimal, versioned REST API for {DOMAIN}.
Include: resources, endpoints, auth, pagination, errors, rate limits, idempotency, sample requests.`
  },
  {
    id: 'sql-insights',
    title: 'SQL to Insights',
    body: `You are a data analyst. Given this schema, propose 10 practical SQL queries that drive decisions.
Each query: purpose, SQL, expected output columns, business action.
Schema:
{SCHEMA}`
  },
  {
    id: 'ux-wireframe',
    title: 'UX Wireframe Explainer',
    body: `Given a feature, write a UX wireframe outline: primary tasks, user flows, states (empty/loading/error), accessibility, mobile breakpoints, success criteria.
Feature:
{FEATURE}`
  },
  {
    id: 'risk-register',
    title: 'Project Risk Register',
    body: `Create a risk register for {PROJECT}. Include: risk, probability (L/M/H), impact (L/M/H), mitigation, owner, trigger.`
  },
  {
    id: 'launch-checklist',
    title: 'Production Launch Checklist',
    body: `Checklist for launching {SERVICE}: observability, alerts, rollback plan, SLOs, capacity, security review, backups, runbooks, on-call, comms.`
  },
  {
    id: 'research-question',
    title: 'Sharpen Research Question',
    body: `Refine this research question into a testable hypothesis, list variables, method, sample size estimate, potential biases.
Question:
{QUESTION}`
  },
  {
    id: 'code-review',
    title: 'Actionable Code Review',
    body: `Review this diff. Focus on correctness, complexity, consistency, naming, tests, and security. Suggest specific, small edits.
Diff:
{DIFF}`
  },
  {
    id: 'query-fields-from-file',
    title: 'Query Fields from File',
    body: `You have been given a file (Excel or CSV) as input.
Step 1: Inspect the file and extract the exact list of column names in the order they appear.
Step 2: For each column, generate a short description of what that field likely represents based on its name and the data within it (for example, if a column is called txn_date and contains dates, describe it as “Transaction date in YYYY-MM-DD format”).
Step 3: Construct a new prompt that explicitly lists all fields with their descriptions and asks a chatbot to use them.

Your output should be in this format:

===== FIELD LIST =====
1. field_1 – short description
2. field_2 – short description
...
===== FINAL PROMPT =====
"Please analyze the uploaded file using these fields:
field_1 (short description),
field_2 (short description),
...
Use these exact fields and descriptions when answering questions or generating insights."
===== END =====

Do not summarize the data itself — just extract field names and infer concise descriptions so that a chatbot can correctly interpret them.`
  }
];

export default function PromptBookPage() {
  const items = useMemo(() => PROMPTS, []);

  const onCopy = async (text: string) => {
    try { await navigator.clipboard.writeText(text); } catch {}
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <div className="relative z-10 flex justify-between items-center p-6">
        <AnimatedLink 
          href="/utility"
          className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/90 hover:bg-white/20 hover:text-white transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Utilities</span>
        </AnimatedLink>
        <div className="text-center px-6 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
          <span className="text-white font-medium">Prompt Book</span>
        </div>
      </div>

      <div className="relative z-10 px-4 md:px-8 py-8 md:py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map(p => (
            <div key={p.id} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <h3 className="text-white font-semibold pr-2">{p.title}</h3>
                  <button onClick={() => onCopy(p.body)} className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition flex items-center space-x-2">
                    <Copy className="w-4 h-4" />
                    <span className="text-xs">Copy</span>
                  </button>
                </div>
                <pre className="mt-3 text-white/80 text-xs whitespace-pre-wrap max-h-60 overflow-auto">{p.body}</pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
