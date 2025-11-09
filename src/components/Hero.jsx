import { motion } from "framer-motion";

function GradientAura() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Soft radial auras */}
      <div className="absolute -top-24 -left-24 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-yellow-100 via-rose-50 to-transparent opacity-70 blur-3xl" />
      <div className="absolute -bottom-32 -right-20 w-[36rem] h-[36rem] rounded-full bg-gradient-to-tr from-indigo-100 via-emerald-50 to-transparent opacity-60 blur-3xl" />
      {/* Subtle mandala rays using conic gradients */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "conic-gradient(from 0deg at 50% 40%, rgba(234,179,8,0.12), transparent 30%, rgba(234,179,8,0.12) 60%, transparent 90%)",
          maskImage:
            "radial-gradient(closest-side, rgba(0,0,0,0.9), rgba(0,0,0,0.1) 60%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(closest-side, rgba(0,0,0,0.9), rgba(0,0,0,0.1) 60%, transparent 80%)",
        }}
      />
      {/* Temple silhouette */}
      <svg
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] max-w-none opacity-10 text-amber-700"
        viewBox="0 0 1200 200"
        fill="currentColor"
        aria-hidden
      >
        <path d="M0 200h1200V120c-60-12-120-24-180-12s-120 48-180 36c-60-12-120-72-180-72s-120 60-180 84-120 12-180-12-120-48-180-24-120 96-180 96v84Z" />
      </svg>
    </div>
  );
}

export default function Hero({ onExplore }) {
  return (
    <section className="relative isolate bg-gradient-to-b from-amber-50 via-white to-emerald-50">
      <GradientAura />
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-20 sm:pt-28 md:pt-32 lg:pt-40 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-amber-700 ring-1 ring-amber-200">
            <span className="text-sm">Where surrender meets divinity</span>
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-serif leading-tight text-gray-800">
            Surrender in the Digital Age —
            <span className="block text-amber-700">Experience Divine Connection with Sharnagati.</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Your sacred space for devotion, community, and spiritual growth.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/auth-landing"
              className="inline-flex items-center justify-center rounded-full bg-amber-600 px-6 py-3 text-white shadow-lg shadow-amber-600/30 hover:bg-amber-700 transition"
            >
              Join Now
            </a>
            <button
              onClick={onExplore}
              className="inline-flex items-center justify-center rounded-full bg-white/80 px-6 py-3 text-amber-700 ring-1 ring-amber-200 hover:bg-white transition"
            >
              Explore Features
            </button>
          </div>
        </motion.div>

        {/* Devotional motif row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-16 grid grid-cols-3 sm:grid-cols-6 gap-4 opacity-80"
        >
          {[
            "🌸",
            "🕯️",
            "🦚",
            "🎶",
            "🪘",
            "🪔",
          ].map((sym, i) => (
            <div
              key={i}
              className="flex items-center justify-center rounded-xl bg-white/60 py-3 text-2xl ring-1 ring-amber-100"
            >
              <span aria-hidden>{sym}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Mobile sticky CTA */}
      <div className="sm:hidden fixed bottom-4 inset-x-4 z-20">
        <div className="rounded-full bg-white/90 backdrop-blur ring-1 ring-amber-200 shadow-lg flex p-1">
          <a
            href="/auth-landing"
            className="flex-1 text-center rounded-full bg-amber-600 text-white py-2 font-medium"
          >
            Join Now
          </a>
          <button
            onClick={onExplore}
            className="flex-1 text-center rounded-full text-amber-700 py-2"
          >
            Explore
          </button>
        </div>
      </div>
    </section>
  );
}
