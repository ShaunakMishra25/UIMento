"use client";

import { useRouter } from "next/navigation";
import { useInView } from "@/src/hooks/useInView";

export default function WhyMentoMania() {
  const router = useRouter();

  const values = [
    {
      title: "Mentors who cleared it",
      description: "Not generic coaches. Every mentor on MentoMania has personally cleared the exam you're preparing for — or built the skill you want to learn.",
    },
    {
      title: "1-on-1 attention",
      description: "You're not one of thousands in a batch. It's just you and your mentor. Real conversation, real guidance.",
    },
    {
      title: "Personal experience, not theory",
      description: "What actually worked. What to avoid. The shortcuts, the mindset, the mistakes — from someone who's been there.",
    },
  ];

  const { ref, isInView } = useInView();

  return (
    <section className="bg-transparent py-16 sm:py-24 lg:py-[140px]">
      <div ref={ref} className="section-container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left: Copy */}
          <div className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <p className="mb-4 text-eyebrow">Why MentoMania</p>
            <h2 className="mb-6 text-heading">
              Someone who&apos;s been
              <br />
              <span className="text-accent-word">exactly where you are</span>
            </h2>
            <blockquote className="mb-10 border-l-4 border-accent pl-6 text-lg italic leading-relaxed text-body">
              &ldquo;Someone who has been exactly where I am right now, and made it — can show me how.&rdquo;
            </blockquote>
            <div className="space-y-6">
              {values.map((value) => (
                <div key={value.title}>
                  <h3 className="mb-2 font-semibold text-heading">{value.title}</h3>
                  <p className="text-body leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => router.push("/mentors")}
              className="mt-10 flex h-12 items-center justify-center rounded-lg bg-accent px-8 font-bold text-white transition-all duration-200 hover:bg-accent-hover hover:shadow-[0_4px_20px_rgba(245,158,11,0.3)]"
            >
              Find your mentor →
            </button>
          </div>

          {/* Right: Visual — warm card with quote emphasis */}
          <div className={`hidden lg:block transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-subtle">
                    <svg className="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-heading">Real people</p>
                    <p className="text-sm text-muted">Not brands. Not algorithms.</p>
                  </div>
                </div>
                <div className="h-px bg-border" />
                <p className="text-body leading-relaxed">
                  Tired of coaching institutes that treat you as one of thousands? MentoMania connects you with mentors who understand the struggle — because they lived it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
