"use client";

import { useInView } from "@/src/hooks/useInView";

const stats = [
  { value: "30+", label: "Verified mentors" },
  { value: "85+", label: "Sessions completed" },
  { value: "4.9", label: "Average rating" },
  { value: "7+", label: "Exam categories" },
];

export default function StatsBar() {
  const { ref, isInView } = useInView();

  return (
    <section className="relative overflow-hidden border-y border-border bg-gradient-to-b from-accent-subtle/90 to-accent-subtle/50 py-8 sm:py-20">
      <div ref={ref} className="section-container">
        <div className="grid grid-cols-2 gap-0 sm:grid-cols-4 sm:gap-12">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-5 text-center transition-all duration-700 ease-out sm:py-0 ${
                i < 2 ? "border-b border-border" : ""
              } ${i % 2 === 0 ? "border-r border-border" : ""} ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p className="text-2xl font-extrabold tracking-tight text-heading sm:text-stat">{stat.value}</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-muted sm:mt-2 sm:text-stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
