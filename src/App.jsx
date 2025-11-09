import { useRef } from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import AboutVision from "./components/AboutVision";
import Testimonials from "./components/Testimonials";

function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-30">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between rounded-b-2xl bg-white/70 backdrop-blur ring-1 ring-amber-100">
        <a href="/" className="flex items-center gap-2">
          <span className="inline-block h-8 w-8 rounded-full bg-amber-600 text-white font-semibold grid place-items-center">ॐ</span>
          <span className="font-serif text-xl text-gray-800">Sharnagati</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-gray-700">
          <a href="#features" className="hover:text-amber-700">Features</a>
          <a href="#about" className="hover:text-amber-700">Vision</a>
          <a href="#community" className="hover:text-amber-700">Community</a>
          <a href="/auth-landing" className="rounded-full bg-amber-600 text-white px-4 py-2">Sign In</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-emerald-50 border-t border-emerald-100">
      <div className="mx-auto max-w-7xl px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <h3 className="font-semibold text-gray-800">Sharnagati</h3>
          <p className="mt-2 text-gray-600 text-sm">Serving Krishna, Empowering Devotees.</p>
        </div>
        <div>
          <h4 className="font-medium text-gray-800">Quick Links</h4>
          <ul className="mt-2 space-y-1 text-sm text-gray-600">
            <li><a href="#about" className="hover:text-amber-700">About</a></li>
            <li><a href="#features" className="hover:text-amber-700">Features</a></li>
            <li><a href="#community" className="hover:text-amber-700">Community</a></li>
            <li><a href="/help" className="hover:text-amber-700">Help</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-gray-800">Legal</h4>
          <ul className="mt-2 space-y-1 text-sm text-gray-600">
            <li><a href="/privacy" className="hover:text-amber-700">Privacy</a></li>
            <li><a href="/terms" className="hover:text-amber-700">Terms</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-gray-800">Connect</h4>
          <p className="mt-2 text-sm text-gray-600">Join the satsang. Stay inspired.</p>
          <a href="/auth-landing" className="mt-3 inline-flex items-center justify-center rounded-full bg-amber-600 px-4 py-2 text-white">Get Started</a>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 pb-8">© {new Date().getFullYear()} Sharnagati</div>
    </footer>
  );
}

export default function App() {
  const featuresRef = useRef(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero onExplore={scrollToFeatures} />
        <div ref={featuresRef}>
          <Features />
        </div>
        <div id="about">
          <AboutVision />
        </div>
        <div id="community">
          <Testimonials />
        </div>
      </main>
      <Footer />
    </div>
  );
}
