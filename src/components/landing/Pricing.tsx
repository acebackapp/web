import Link from 'next/link';

const features = [
  'Durable weatherproof stickers',
  'Unique QR code per sticker',
  'Free shipping included',
  'Easy in-app registration',
  'Lifetime disc tracking',
  'Optional reward system',
];

export default function Pricing() {
  return (
    <section
      id="order"
      aria-labelledby="order-heading"
      className="py-20 bg-white dark:bg-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            id="order-heading"
            className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white"
          >
            Protect Your Discs Today
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Simple, affordable protection for your entire collection
          </p>
        </div>

        <div className="mt-16 max-w-lg mx-auto">
          <div className="bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-900/20 dark:to-violet-800/20 rounded-2xl p-8 text-center shadow-lg">
            <div className="text-5xl font-bold text-violet-900 dark:text-violet-100">
              $1.00
            </div>
            <div className="mt-2 text-lg text-violet-700 dark:text-violet-300">
              per sticker
            </div>

            <ul className="mt-8 space-y-4 text-left">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-violet-600 dark:text-violet-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-zinc-700 dark:text-zinc-300">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="#hero"
              className="mt-8 inline-block w-full px-6 py-4 text-lg font-semibold text-white bg-violet-700 hover:bg-violet-800 rounded-xl transition-colors"
            >
              Order in the App
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
