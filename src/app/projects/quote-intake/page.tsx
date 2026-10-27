import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quote-Intake Agent: case study · James Muguiyi",
  description:
    "How I built and measured an AI intake agent for a home-services contractor: the model reads and writes, code decides.",
};

const decisions = [
  ["What the customer wants, and drafting the reply", "Claude, constrained to a JSON schema"],
  ["Route (safety, urgent, human, decline, ask, estimate)", "Code: priority order is policy, not judgment"],
  ["Prices", "The price book, inserted by code. The model never writes a dollar figure"],
  ["What information is still missing", "The price book's requirements for each service"],
  ["Hazards", "Keyword rules that override the model, plus the model's own flag"],
  ["ZIPs, phone numbers, photos, equipment age", "Discarded unless they appear in the customer's text"],
  ["Model refused, errored or returned bad JSON", "Fails closed to a person"],
  ["Sending", "A person. Every reply is a draft"],
];

const results = [
  ["Held-out routes correct", "20/20"],
  ["Held-out safety cases escalated", "4/4"],
  ["Injected model mistakes kept from the customer", "232/232"],
  ["Dev-set routes correct", "43/43"],
];

export default function QuoteIntakeCaseStudy() {
  return (
    <main className="min-h-screen bg-black text-gray-300">
      <article className="max-w-3xl mx-auto px-4 py-24">
        <Link href="/#projects" className="text-gray-400 hover:text-blue-400 transition-colors">
          ← Back to projects
        </Link>

        <p className="mt-12 text-sm uppercase tracking-widest text-gray-400">Case study</p>
        <h1 className="text-4xl md:text-5xl font-serif text-white mt-2 mb-6">Quote-Intake Agent</h1>
        <p className="text-xl leading-relaxed">
          An AI intake agent for a home-services contractor. It reads inbound quote requests, routes
          them, and drafts replies for a dispatcher to approve, without ever stating a price, promising
          an arrival time, or missing a gas leak.
        </p>
        <p className="mt-4">
          TypeScript, Node.js, Claude Opus 5.5 with structured outputs, Zod ·{" "}
          <a
            href="https://github.com/jollofo/quote-intake-agent"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline underline-offset-4 hover:text-blue-400"
          >
            View on GitHub
          </a>
        </p>

        <dl className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {results.map(([label, value]) => (
            <div key={label} className="border-t border-gray-800 pt-4">
              <dt className="text-sm text-gray-400">{label}</dt>
              <dd className="text-3xl font-serif text-white mt-1">{value}</dd>
            </div>
          ))}
        </dl>

        <h2 className="text-3xl font-serif text-white mt-16 mb-4">The problem</h2>
        <p className="leading-relaxed">
          A trades business gets quote requests as run-on texts and emails: &ldquo;furnace, 15 years
          old, 14615, faint gas smell.&rdquo; Someone has to work out what the job is, what&apos;s
          missing, whether it&apos;s an emergency, and reply quickly. A language model is good at the
          reading and the writing. It shouldn&apos;t be the last line of defense on what a job costs or
          whether a customer should leave the house. The business is a fictional Rochester heating,
          plumbing and electrical company with its own price book, service area and policies.
        </p>

        <h2 className="text-3xl font-serif text-white mt-16 mb-4">The design: the model reads and writes, code decides</h2>
        <p className="leading-relaxed mb-6">
          The agent makes one structured-output call to Claude, then passes the result through
          guardrails written in plain code before a dispatcher sees the draft.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-800 text-gray-400">
                <th className="py-3 pr-4 font-medium">Decision</th>
                <th className="py-3 font-medium">Made by</th>
              </tr>
            </thead>
            <tbody>
              {decisions.map(([decision, owner]) => (
                <tr key={decision} className="border-b border-gray-900">
                  <td className="py-3 pr-4 text-white">{decision}</td>
                  <td className="py-3">{owner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-serif text-white mt-16 mb-4">How I measured it</h2>
        <ul className="list-disc pl-5 space-y-4 leading-relaxed">
          <li>
            <strong className="text-white">A held-out set written blind.</strong> A separate session
            wrote 20 messy inquiries from the business rules alone, without seeing the code, prompt or
            dev cases: texting style, Spanish, two jobs in one message, hazards mentioned in passing,
            prompt injections and discount fishing. On the first run, before any fixes, it routed all 20
            correctly and escalated all 4 safety cases.
          </li>
          <li>
            <strong className="text-white">A labelled dev set.</strong> 43 hand-written cases covering
            complete requests, missing information, 7 safety cases, emergencies, out-of-area jobs, spam
            and injections. I treat it as a regression suite, since I wrote it alongside the prompt.
          </li>
          <li>
            <strong className="text-white">Fault injection.</strong> Strong models pass these cases
            easily, so the more useful question is what happens when the model gets it wrong. I took
            the recorded outputs, injected one mistake at a time (a missed gas leak, a made-up price, a
            promised arrival time, an invented phone number) and replayed them through the guardrails.
            After fixes, all 232 injected mistakes were caught.
          </li>
        </ul>

        <h2 className="text-3xl font-serif text-white mt-16 mb-4">What the evals caught</h2>
        <ul className="list-disc pl-5 space-y-4 leading-relaxed">
          <li>
            A bug I introduced: a check that a fixture count appears in the text only understood
            English, so &ldquo;2 lámparas de techo&rdquo; was dropped and the agent would have re-asked
            a question the customer had answered.
          </li>
          <li>
            The keyword backstop was narrower than the dev set suggested. With the model&apos;s own
            safety flag removed, a Spanish burnt-outlet message and &ldquo;the puddle is running under
            the electrical panel&rdquo; slipped through. I added patterns for each, with regression
            tests.
          </li>
          <li>
            My own grader was wrong. A one-prompt baseline looked unsafe until I found every flag was a
            false positive, such as correct arithmetic on published prices. That changed the conclusion:
            the agent&apos;s edge isn&apos;t that today&apos;s model misbehaves. It&apos;s structured output a
            dispatcher can act on, guarantees that hold when the model changes, and evidence to re-run
            after every change.
          </li>
        </ul>

        <h2 className="text-3xl font-serif text-white mt-16 mb-4">Limits and next steps</h2>
        <ul className="list-disc pl-5 space-y-2 leading-relaxed">
          <li>All 63 inquiries are synthetic. Real inquiries with personal details removed are the next step.</li>
          <li>The held-out set has been used for fixes, so it needs a fresh blind set.</li>
          <li>Hazard keywords cover English and some Spanish. Other languages rely on the model alone.</li>
          <li>Live cost and latency aren&apos;t measured yet. The published runs used recorded outputs.</li>
        </ul>

        <p className="mt-16">
          <Link href="/#contact" className="text-white underline underline-offset-4 hover:text-blue-400">
            Get in touch
          </Link>{" "}
          if you&apos;d like to talk through how I&apos;d build something like this for your team.
        </p>
      </article>
    </main>
  );
}
