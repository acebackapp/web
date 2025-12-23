import Link from 'next/link';
import AppStoreBadges from './AppStoreBadges';

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-violet-50 to-white dark:from-zinc-900 dark:to-zinc-950 pt-16"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-violet-900 dark:text-violet-100 tracking-tight">
          Discr
        </h1>
        <p className="mt-4 text-2xl sm:text-3xl font-semibold text-violet-700 dark:text-violet-300">
          Get Yours Back
        </p>
        <p className="mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          QR code stickers for disc golf disc recovery. Protect your discs and
          help other players return lost discs.
        </p>

        <div className="mt-10 flex flex-col items-center gap-6">
          <AppStoreBadges />
          <Link
            href="#how-it-works"
            className="inline-flex items-center gap-2 text-violet-700 dark:text-violet-300 hover:text-violet-800 dark:hover:text-violet-200 font-medium transition-colors"
          >
            Learn More
            <svg
              className="w-5 h-5 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Decorative gradient orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
