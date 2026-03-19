"use client";

import { useRouter } from "next/navigation";
import { useInView } from "@/src/hooks/useInView";

const testimonials = [
  {
    quote: "Finally someone who gets it. My mentor cleared JEE the same year I'm attempting. The tips he shared — no coaching class would tell you this.",
    exam: "JEE",
    initials: "A.K.",
    bg: "bg-jee-bg",
    text: "text-jee-text",
  },
  {
    quote: "I was skeptical. Another EdTech thing. But the 1-on-1 session felt different. Like talking to an older friend who actually made it.",
    exam: "UPSC",
    initials: "P.",
    bg: "bg-upsc-bg",
    text: "text-upsc-text",
  },
  {
    quote: "No fluff. No 'believe in yourself' generic advice. Just: here's what worked for me, here's what I'd do differently. That's what I needed.",
    exam: "CAT",
    initials: "R.",
    bg: "bg-cat-bg",
    text: "text-cat-text",
  },
];

export default function Testimonials() {
  const router = useRouter();
  const { ref, isInView } = useInView();

  return (
    <section className="bg-transparent py-20 sm:py-28 lg:py-36">
      <div ref={ref} className="section-container">
        <div className={`mb-16 text-center transition-all duration-700 lg:mb-20 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="mb-4 text-eyebrow">What students say</p>
          <h2 className="mb-4 text-heading sm:mb-6">
            They felt{" "}
            <span className="text-accent-word">understood</span>
          </h2>
          <p className="section-subtext">
            Students preparing for competitive exams — in their own words.
          </p>
        </div>

        {/* Bento grid — mixed card sizes like Zaplytic */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {/* Large stat card — dark, like Zaplytic "1978+" */}
          <div className={`rounded-2xl bg-heading p-8 text-white shadow-[0_8px_32px_rgba(17,24,39,0.12)] transition-all duration-500 lg:col-span-1 lg:row-span-2 lg:flex lg:flex-col lg:justify-between hover:shadow-[0_12px_40px_rgba(17,24,39,0.18)] ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`} style={{ transitionDelay: "80ms" }}>
            <div>
              <p className="text-5xl font-extrabold tracking-tight lg:text-6xl">85+</p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-white/70">Sessions completed</p>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-white/80">
              Real 1-on-1 conversations. Real guidance.
            </p>
          </div>

          {/* Testimonial cards */}
          {testimonials.map((t, i) => (
            <div
              key={t.exam}
              className={`rounded-2xl border border-border bg-card p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-500 hover:border-border-strong hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 lg:p-8 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${(i + 2) * 80}ms` }}
            >
              <p className="mb-6 text-body leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full ${t.bg} text-sm font-bold ${t.text}`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">Preparing for {t.exam}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => router.push("/mentors")}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border-0 bg-transparent font-medium text-body transition-colors hover:text-heading"
          >
            Read more stories
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
