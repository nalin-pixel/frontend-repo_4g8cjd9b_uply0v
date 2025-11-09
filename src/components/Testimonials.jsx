import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ananya",
    text: "Sharnagati has made my daily sadhana effortless and joyful. The reminders and content keep me anchored in devotion.",
  },
  {
    name: "Raghav",
    text: "Joining live darshan with the community feels like being at the temple every day. It is soothing and uplifting.",
  },
  {
    name: "Meera",
    text: "I love the simplicity. Everything is intuitive, calm, and focused on bhakti—exactly what I needed.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800">Voices of the community</h2>
          <p className="mt-3 text-gray-600">Shared moments of grace and gratitude.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl bg-gradient-to-br from-emerald-50/60 to-white p-6 ring-1 ring-emerald-100"
            >
              <blockquote className="text-gray-700">{t.text}</blockquote>
              <figcaption className="mt-4 font-medium text-emerald-800">— {t.name}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
