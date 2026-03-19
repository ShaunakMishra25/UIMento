"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-heading">
      <div className="section-container">
        {/* Newsletter — like fintech/Zaplytic ref */}
        <div className="border-b border-white/10 py-16 sm:py-20">
          <div className="mx-auto max-w-xl text-center">
            <h3 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
              Ready to find your mentor?
            </h3>
            <p className="mb-4 text-white/70">
              Get tips on exam prep and mentorship. No spam.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3 sm:flex-row sm:justify-center"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 flex-1 rounded-lg border border-white/20 bg-white/10 px-4 text-white placeholder:text-white/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 sm:max-w-xs"
              />
              <button
                type="submit"
                className="flex h-12 items-center justify-center rounded-lg bg-accent px-6 font-bold text-white transition-all duration-200 hover:bg-accent-hover hover:shadow-[0_2px_12px_rgba(245,158,11,0.3)]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-10 py-12 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="/"
            className="font-extrabold tracking-tight text-white transition-opacity hover:opacity-90"
          >
            MentoMania
          </a>
          <nav className="flex flex-wrap gap-8">
            <button
              type="button"
              onClick={() => scrollToSection("how-it-works")}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              How it works
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("exams")}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              Exams
            </button>
            <button
              type="button"
              onClick={() => router.push("/sign-in")}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              Sign in
            </button>
            <button
              type="button"
              onClick={() => router.push("/mentors")}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              Find a mentor
            </button>
          </nav>
        </div>

        <div className="border-t border-white/10 py-8">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} MentoMania. Mentorship for competitive exams.
          </p>
        </div>
      </div>
    </footer>
  );
}
