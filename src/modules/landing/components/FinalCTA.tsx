"use client";

import { useRouter } from "next/navigation";
import { useInView } from "@/src/hooks/useInView";

export default function FinalCTA() {
  const router = useRouter();
  const { ref, isInView } = useInView();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent-subtle via-accent-subtle/90 to-bg py-20 sm:py-28 lg:py-36">
      <div ref={ref} className="section-container">
        <div className={`mx-auto max-w-2xl text-center transition-all duration-700 ${isInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-[0.98]"}`}>
          <h2 className="mb-4 text-heading sm:mb-6">
            Ready to find
            <br />
            <span className="text-accent-word">your mentor?</span>
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-body">
            Someone who&apos;s been exactly where you are — and made it. Book a 1-on-1 session and get real guidance.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-6">
            <button
              type="button"
              onClick={() => router.push("/mentors")}
              className="flex h-12 w-full items-center justify-center rounded-lg bg-accent px-8 font-bold text-white transition-all duration-200 hover:bg-accent-hover hover:shadow-[0_4px_20px_rgba(245,158,11,0.35)] sm:w-auto"
            >
              Find a mentor →
            </button>
            <button
              type="button"
              onClick={() => {
                document.getElementById("exams")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-border bg-card font-medium text-heading transition-all duration-200 hover:border-border-strong hover:bg-surface-sunken sm:w-auto"
            >
              Browse exams
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
