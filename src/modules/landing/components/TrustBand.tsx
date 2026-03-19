"use client";

import { useInView } from "@/src/hooks/useInView";

const mentorPhotos = [
  "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=72&h=72&fit=crop",
  "https://images.unsplash.com/photo-1654436200209-de489ed205df?w=72&h=72&fit=crop",
  "https://images.unsplash.com/photo-1535270732370-dd3188bab1da?w=72&h=72&fit=crop",
  "https://images.unsplash.com/photo-1605988941502-372407d1dac5?w=72&h=72&fit=crop",
  "https://images.unsplash.com/photo-1603796868286-f684c57d3cee?w=72&h=72&fit=crop",
];

export default function TrustBand() {
  const { ref, isInView } = useInView();
  return (
    <section className="border-y border-border/60 bg-accent-subtle/60 py-8 sm:py-10">
      <div ref={ref} className="section-container">
        <div className={`flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {mentorPhotos.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt="Mentor"
                  className="h-9 w-9 shrink-0 rounded-full border-2 border-accent-subtle object-cover object-top transition-transform duration-300 hover:scale-110"
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-heading">30+ mentors</span>
          </div>
          <div className="h-px w-12 bg-border sm:h-12 sm:w-px sm:bg-border" aria-hidden />
          <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            <span className="text-lg font-bold text-heading">4.9</span>
            <span className="text-muted">/5</span>
            <span className="text-sm font-medium text-muted">from students</span>
          </div>
          <p className="text-center text-sm font-medium text-muted sm:text-left">
            Trusted by students preparing for JEE, UPSC, CAT & more
          </p>
        </div>
      </div>
    </section>
  );
}
