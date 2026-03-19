"use client";

import { useInView } from "@/src/hooks/useInView";

const exams = [
  { name: "JEE", tagline: "Engineering entrance", bg: "bg-jee-bg", text: "text-jee-text", border: "border-jee-border" },
  { name: "UPSC", tagline: "Civil services", bg: "bg-upsc-bg", text: "text-upsc-text", border: "border-upsc-border" },
  { name: "CAT", tagline: "MBA entrance", bg: "bg-cat-bg", text: "text-cat-text", border: "border-cat-border" },
  { name: "NEET", tagline: "Medical entrance", bg: "bg-neet-bg", text: "text-neet-text", border: "border-neet-border" },
  { name: "SSC CGL", tagline: "Government exams", bg: "bg-ssc-bg", text: "text-ssc-text", border: "border-ssc-border" },
  { name: "Bank PO", tagline: "Banking exams", bg: "bg-bank-bg", text: "text-bank-text", border: "border-bank-border" },
  { name: "CLAT", tagline: "Law entrance", bg: "bg-clat-bg", text: "text-clat-text", border: "border-clat-border" },
];

export default function ExamCategories() {
  const { ref, isInView } = useInView();

  return (
    <section id="exams" className="bg-transparent py-16 sm:py-24 lg:py-[140px]">
      <div ref={ref} className="section-container">
        <div className={`mb-16 text-center transition-all duration-700 lg:mb-20 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="mb-4 text-eyebrow">Exams we cover</p>
          <h2 className="mb-4 text-heading sm:mb-6">
            Find mentors for
            <br />
            <span className="text-accent-word">your exam</span>
          </h2>
          <p className="section-subtext">
            Every mentor on MentoMania has cleared the exact exam you're preparing for.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {exams.map((exam, i) => (
            <div
              key={exam.name}
              className={`rounded-2xl border ${exam.border} ${exam.bg} p-5 transition-all duration-500 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 sm:p-6 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${(i + 1) * 60}ms` }}
            >
              <span className={`inline-block rounded-md border px-2 py-1 text-xs font-semibold ${exam.border} ${exam.text}`}>
                {exam.name}
              </span>
              <p className="mt-3 text-sm font-medium text-heading">{exam.tagline}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
