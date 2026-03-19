"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

// ── POPULAR EXAMS (mock data) ───────────────────────────────
const popularExams = [
  "JEE Advanced",
  "JEE Mains",
  "UPSC CSE",
  "CAT",
  "NEET",
  "SSC CGL",
  "Bank PO",
  "CLAT",
];

// ── EXAM COMBOBOX ──────────────────────────────────────────
function ExamCombobox() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-12 w-full min-w-0 items-center gap-3 rounded-xl border border-border bg-card px-4 text-left text-body transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent-subtle"
      >
        <svg
          className="h-4 w-4 shrink-0 text-muted"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <span className={`min-w-0 truncate ${value ? "text-body" : "text-hint"}`}>
          {value || "Search by exam or skill..."}
        </span>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-20 mt-2 max-h-60 overflow-auto rounded-xl border border-border bg-card p-2 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
          <div className="grid grid-cols-2 gap-1">
            {popularExams.map((exam) => (
              <button
                key={exam}
                type="button"
                onClick={() => {
                  setValue(exam);
                  setIsOpen(false);
                }}
                className="rounded-lg px-4 py-3 text-left text-sm text-body transition-colors hover:bg-surface-sunken"
              >
                {exam}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ── HERO SESSION WIDGET (logged in state) ───────────────────
function HeroSessionWidget() {
  const router = useRouter();
  const upcomingSessions = [
    { id: "1", mentor: "Dr. Sharma", exam: "JEE", time: "Tomorrow 2pm" },
  ];

  return (
    <div className="rounded-2xl border border-border bg-card p-4 lg:h-[520px] lg:p-6">
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-md bg-accent-subtle px-2 py-1 text-xs font-semibold text-jee-text">
          Upcoming
        </span>
      </div>
      <div className="space-y-4">
        {upcomingSessions.map((session) => (
          <div
            key={session.id}
            className="rounded-lg border border-border bg-surface p-4"
          >
            <p className="text-sm font-semibold text-heading">{session.mentor}</p>
            <p className="text-xs text-muted">{session.exam} · {session.time}</p>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => router.push("/mentors")}
        className="mt-6 flex h-11 w-full items-center justify-center rounded-lg bg-accent font-bold text-white transition-colors hover:bg-accent-hover"
      >
        Book another session
      </button>
    </div>
  );
}

// ── MAIN HERO SECTION ──────────────────────────────────────
export default function HeroSection() {
  const router = useRouter();
  const isSignedIn = false;

  return (
    <section className="relative overflow-hidden bg-transparent pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* ── LEFT COLUMN ── */}
          <div className="order-1 w-full">
            {/* ── EYEBROW ── */}
            <p
              className="mb-3 text-[10px] font-bold uppercase tracking-widest text-accent sm:mb-5 sm:text-eyebrow-hero"
              style={{
                animation: "hero-fade-in-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards",
                animationDelay: "0ms",
              }}
            >
              Mentorship for competitive exams
            </p>

            {/* ── HEADLINE — confident, tight; hand-drawn underline (Zaplytic-style) ── */}
            <h1
              className="mb-4 text-5xl font-extrabold leading-[1.05] tracking-tighter text-heading sm:mb-8"
              style={{
                animation: "hero-fade-in-up 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards",
                animationDelay: "80ms",
              }}
            >
              The mentor who{" "}
              <span className="relative inline-block">
                <span className="text-accent-word">cleared it.</span>
                <svg className="absolute -bottom-0.5 left-0 right-0 h-2.5 w-full" viewBox="0 0 100 10" fill="none" preserveAspectRatio="none">
                  <path d="M0 6 Q25 2 50 5 Q75 8 100 4" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
                </svg>
              </span>
              <br />
              Now guiding you.
            </h1>

            {/* ── SUBTEXT ── */}
            <p
              className="mb-5 max-w-md text-sm leading-relaxed text-muted sm:mb-10 sm:text-lg"
              style={{
                animation: "hero-fade-in-up 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards",
                animationDelay: "160ms",
              }}
            >
              1-on-1 sessions with people who cleared JEE, UPSC, CAT, NEET. Real experience, not theory.
            </p>

            {/* ── COMBOBOX ── */}
            <div
              className="relative z-30 mb-4 w-full max-w-md sm:mb-10"
              style={{
                animation: "hero-fade-in-up 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards",
                animationDelay: "240ms",
              }}
            >
              <ExamCombobox />
            </div>

            {/* ── BUTTONS — primary prominent, secondary subtle ── */}
            <div
              className="mb-5 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-center sm:gap-6"
              style={{
                animation: "hero-fade-in-up 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards",
                animationDelay: "320ms",
              }}
            >
              <button
                type="button"
                onClick={() => router.push("/mentors")}
                className="flex h-12 w-full items-center justify-center rounded-lg bg-accent px-8 text-base font-bold text-white transition-all duration-200 hover:bg-accent-hover hover:shadow-[0_4px_20px_rgba(245,158,11,0.35)] sm:w-auto"
              >
                Find a mentor →
              </button>
              <button
                type="button"
                onClick={() => router.push("/mentors")}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-border bg-card text-base font-bold text-body transition-colors hover:border-border-strong hover:bg-surface-sunken sm:w-auto sm:font-medium"
              >
                Browse exams
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* ── SOCIAL PROOF — subtle, earned ── */}
            <div
              className="flex items-center gap-3"
              style={{
                animation: "hero-fade-in-up 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards",
                animationDelay: "400ms",
              }}
            >
              <div className="flex -space-x-1.5 sm:-space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=64&h=64&fit=crop"
                  alt="Mentor"
                  className="h-6 w-6 shrink-0 rounded-full border-2 border-card object-cover object-top sm:h-8 sm:w-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1654436200209-de489ed205df?w=64&h=64&fit=crop"
                  alt="Mentor"
                  className="h-6 w-6 shrink-0 rounded-full border-2 border-card object-cover object-top sm:h-8 sm:w-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1535270732370-dd3188bab1da?w=64&h=64&fit=crop"
                  alt="Mentor"
                  className="h-6 w-6 shrink-0 rounded-full border-2 border-card object-cover object-top sm:h-8 sm:w-8"
                />
              </div>
              <p className="text-sm text-muted">
                <span className="font-semibold text-heading">30+ mentors</span>
                {" "}· 4.9 from students
              </p>
            </div>

            {/* ── LIVE AVAILABILITY ── */}
            <div className="mt-2 flex items-center gap-2 sm:mt-4">
              <span className="live-dot" />
              <span className="text-xs font-medium text-success sm:text-sm">
                Mentors available right now
              </span>
            </div>

            {/* ── AUTH LINE ── */}
            <p className="mt-3 text-xs text-muted sm:mt-6 sm:text-sm">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => router.push("/sign-in")}
                className="font-semibold text-heading underline-offset-2 transition-colors hover:text-accent hover:underline"
              >
                Sign in
              </button>
            </p>
          </div>

          {/* ── RIGHT COLUMN — dynamic collage, product-led ── */}
          <div
            className="order-2 block w-full"
            style={{
              animation: "hero-fade-in-right 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.25s forwards",
              opacity: 0,
            }}
          >
            {isSignedIn ? (
              <HeroSessionWidget />
            ) : (
              <div className="relative mt-8 aspect-[4/5] w-full lg:mt-0 lg:aspect-auto lg:h-[520px]">
                <div className="absolute inset-0 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-none ring-1 ring-gray-100 lg:shadow-[0_4px_24px_rgba(17,24,39,0.08)] lg:ring-0">
                  <Image
                    src="/student.png"
                    alt="Student preparing for competitive exams"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "top center" }}
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Premium overlays — mobile: simpler chips; desktop: glassmorphism */}
                  <div className="absolute left-3 top-3 lg:left-4 lg:top-4">
                    <div className="rounded-xl border border-border bg-card px-3 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.06)] lg:border-white/30 lg:bg-white/95 lg:px-5 lg:py-3 lg:shadow-[0_2px_12px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.04)] lg:backdrop-blur-md lg:ring-1 lg:ring-black/[0.03]">
                      <p className="text-[9px] font-bold uppercase tracking-wide text-muted lg:text-[10px] lg:font-semibold lg:tracking-[0.15em]">Mentors</p>
                      <p className="mt-0.5 text-2xl font-extrabold leading-none text-heading tabular-nums lg:tracking-[-0.02em]">30+</p>
                    </div>
                  </div>
                  <div className="absolute right-3 top-3 lg:right-4 lg:top-4">
                    <div className="flex items-center gap-1.5 rounded-xl border border-border bg-card px-3 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.06)] lg:border-white/30 lg:bg-white/95 lg:px-5 lg:py-3 lg:shadow-[0_2px_12px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.04)] lg:backdrop-blur-md lg:ring-1 lg:ring-black/[0.03]">
                      <svg className="h-3.5 w-3.5 shrink-0 fill-accent text-accent lg:h-5 lg:w-5 lg:drop-shadow-sm" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-2xl font-extrabold text-heading tabular-nums lg:tracking-[-0.02em]">4.9</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
