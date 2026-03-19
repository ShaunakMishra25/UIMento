"use client";

import { useInView } from "@/src/hooks/useInView";

const features = [
  {
    title: "Verified mentors",
    description: "Every mentor has cleared the exam you're preparing for. No generic coaches.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "1-on-1 sessions",
    description: "Personal attention. No batch of thousands. Just you and your mentor.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Real experience",
    description: "What actually worked. What to avoid. From someone who's been there.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Flexible booking",
    description: "Book when it suits you. Video call from anywhere. No commute.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function FeatureGrid() {
  const { ref, isInView } = useInView();

  return (
    <section className="relative bg-transparent py-20 sm:py-28 lg:py-36">
      <div ref={ref} className="section-container">
        <div className={`mb-16 text-center transition-all duration-700 lg:mb-20 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="mb-4 text-eyebrow">Why MentoMania</p>
          <h2 className="mb-4 text-heading sm:mb-6">
            Mentorship that
            <br />
            <span className="text-accent-word">actually works</span>
          </h2>
          <p className="section-subtext">
            Built for students who are tired of one-size-fits-all coaching.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`rounded-2xl border border-border bg-card p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-500 hover:border-border-strong hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 lg:p-10 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${(i + 1) * 80}ms` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-subtle text-accent">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold text-heading">{feature.title}</h3>
              <p className="text-body leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
