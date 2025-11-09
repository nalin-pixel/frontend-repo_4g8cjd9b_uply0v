import { motion } from "framer-motion";

export default function AboutVision() {
  return (
    <section className="relative bg-gradient-to-b from-emerald-50 to-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="prose prose-amber max-w-none"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-gray-800 not-prose">Our Vision</h2>
          <p className="text-gray-700">
            Sharnagati is a digital bhakti ecosystem devoted to cultivating surrender, service, and love for Krishna. We strive to simplify spiritual life and make authentic devotional resources accessible to all, wherever they are.
          </p>
          <div className="mt-6 rounded-2xl bg-white/70 ring-1 ring-amber-100 p-6">
            <blockquote className="text-xl md:text-2xl font-serif text-amber-800">
              “True surrender begins when the heart seeks only to serve.”
            </blockquote>
          </div>
          <p className="mt-6 text-gray-700">
            Through tools for sadhana tracking, live darshan, seva opportunities, and a curated library of wisdom, Sharnagati supports devotees in deepening their connection and sharing bhakti with the world.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
