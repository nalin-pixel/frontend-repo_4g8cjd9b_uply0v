import { motion } from "framer-motion";
import { Calendar, Lock, Bell, Library, HandCoins, LayoutDashboard } from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "User Login / Registration",
    desc: "Secure and easy access to your devotional journey.",
  },
  {
    icon: LayoutDashboard,
    title: "Personal Dashboard",
    desc: "Track sadhana, upcoming events, and service opportunities.",
  },
  {
    icon: Calendar,
    title: "Live Darshan & Events",
    desc: "Join live temple sessions or community gatherings.",
  },
  {
    icon: Library,
    title: "Spiritual Content Library",
    desc: "Watch, listen, or read divine wisdom anytime.",
  },
  {
    icon: HandCoins,
    title: "Booking & Donations",
    desc: "Seamless, transparent, and safe.",
  },
  {
    icon: Bell,
    title: "Notifications & Reminders",
    desc: "Stay connected with daily inspirations and updates.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800">Offerings that guide your bhakti</h2>
          <p className="mt-3 text-gray-600">Designed to be simple, sacred, and supportive.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05 }}
              className="group rounded-2xl ring-1 ring-amber-100 bg-gradient-to-br from-amber-50/60 to-white p-6 hover:shadow-xl hover:ring-amber-200 transition"
            >
              <div className="h-12 w-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shadow-inner">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-800">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
