"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-all duration-300 ${
        scrolled ? "border-border bg-card/98 shadow-[0_1px_12px_rgba(0,0,0,0.06)]" : "border-border/80 bg-card/95"
      }`}
    >
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 lg:h-16 lg:px-8">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 font-extrabold tracking-tight text-heading transition-colors hover:text-accent"
        >
          <span className="text-xl lg:text-2xl">MentoMania</span>
        </a>

        {/* Desktop nav links — centered like ref */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
          <button
            type="button"
            onClick={() => scrollToSection("how-it-works")}
            className="text-sm font-medium text-muted transition-colors hover:text-heading"
          >
            How it works
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("exams")}
            className="text-sm font-medium text-muted transition-colors hover:text-heading"
          >
            Exams
          </button>
        </div>

        {/* Desktop right CTAs */}
        <div className="hidden items-center gap-4 lg:flex">
          <button
            type="button"
            onClick={() => router.push("/sign-in")}
            className="text-sm font-medium text-muted transition-colors hover:text-heading"
          >
            Sign in
          </button>
          <button
            type="button"
            onClick={() => router.push("/mentors")}
            className="flex h-10 items-center justify-center rounded-lg bg-accent px-6 font-bold text-white transition-all duration-200 hover:bg-accent-hover hover:shadow-[0_2px_12px_rgba(245,158,11,0.3)]"
          >
            Find a mentor
          </button>
        </div>

        {/* Mobile: CTA + hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => router.push("/mentors")}
            className="flex h-10 items-center justify-center rounded-lg bg-accent px-5 font-bold text-white transition-all duration-200 hover:bg-accent-hover hover:shadow-[0_2px_12px_rgba(245,158,11,0.3)]"
          >
            Find mentor
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-heading transition-colors hover:bg-surface-sunken"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-card px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            <button
              type="button"
              onClick={() => {
                scrollToSection("how-it-works");
                setMobileMenuOpen(false);
              }}
              className="h-11 rounded-xl px-4 text-left text-sm font-medium text-body transition-colors hover:bg-surface-sunken"
            >
              How it works
            </button>
            <button
              type="button"
              onClick={() => {
                scrollToSection("exams");
                setMobileMenuOpen(false);
              }}
              className="h-11 rounded-xl px-4 text-left text-sm font-medium text-body transition-colors hover:bg-surface-sunken"
            >
              Exams
            </button>
            <button
              type="button"
              onClick={() => {
                router.push("/sign-in");
                setMobileMenuOpen(false);
              }}
              className="h-11 rounded-xl px-4 text-left text-sm font-medium text-body transition-colors hover:bg-surface-sunken"
            >
              Sign in
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
