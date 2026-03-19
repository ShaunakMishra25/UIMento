"use client";

import { useInView } from "@/src/hooks/useInView";

const steps = [
  {
    step: 1,
    title: "Choose your exam",
    description: "JEE, UPSC, CAT, NEET, SSC, Bank PO, CLAT — or a skill like startup building.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    step: 2,
    title: "Find your mentor",
    description: "Someone who cleared that exact exam. Real people, real experience.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    step: 3,
    title: "Book a 1-on-1 session",
    description: "Video call. Real guidance. No lectures — just a conversation.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const { ref, isInView } = useInView();

  return (
    <section id="how-it-works" className="relative overflow-hidden bg-dark-bg py-20 sm:py-28 lg:py-36">
      <div ref={ref} className="section-container">
        <div className={`mb-16 text-center transition-all duration-700 lg:mb-20 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="mb-4 text-eyebrow">How it works</p>
          <h2 className="mb-4 text-dark-text sm:mb-6">
            Three steps to get
            <br />
            <span className="text-accent-word">real guidance</span>
          </h2>
          <p className="mx-auto max-w-xl text-dark-muted">
            No batch classes. No one-size-fits-all. Just you and someone who made it.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
          {steps.map((step, i) => (
            <div
              key={step.step}
              className={`rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/[0.08] lg:p-10 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <span className="mb-4 block text-4xl font-extrabold tabular-nums text-white/30">
                {String(step.step).padStart(2, "0")}
              </span>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 text-accent">
                {step.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-dark-text">{step.title}</h3>
              <p className="text-dark-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
