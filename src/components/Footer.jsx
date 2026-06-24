import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaLeaf,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const productLinks = [
  ["raw-banana-powder", "Raw Banana Powder"],
  ["raw-amla-powder", "Raw Amla Powder"],
  ["raw-moringa-powder", "Raw Moringa Powder"],
  ["raw-beetroot-powder", "Raw Beetroot Powder"],
  ["raw-guava-powder", "Raw Guava Powder"],
  ["raw-ginger-powder", "Raw Ginger Powder"],
  ["raw-tomato-powder", "Raw Tomato Powder"],
];

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-white">
      {/* Wave */}
      <div className="overflow-hidden leading-none bg-ivory-100">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          preserveAspectRatio="none"
          className="w-full block"
        >
          <path
            d="M0 80V40C180 0 360 80 540 40C720 0 900 80 1080 40C1260 0 1440 60 1440 60V80H0Z"
            fill="#0B2018"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-6 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-gradient-to-br from-forest-600 to-forest-800 rounded-2xl flex items-center justify-center shadow-glow-forest">
                <FaLeaf className="text-sage-300 text-xl" />
              </div>
              <div>
                <div className="font-display font-bold text-2xl text-white">
                  Hemsrukah
                </div>
                <div className="text-xs text-gold-400 font-semibold tracking-widest uppercase font-ui">
                  Pure · Natural · Premium
                </div>
              </div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-5 font-ui">
              Premium natural fruit & vegetable powders crafted without
              preservatives or artificial colours. ISO 9001:2015 certified. FDA
              approved.
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {[
                "🏆 ISO 9001:2015",
                "✅ FDA Approved",
                "🌿 No Preservatives",
                "🇮🇳 APEDA",
              ].map((b) => (
                <span
                  key={b}
                  className="text-xs font-semibold bg-white/8 border border-white/10 text-white/70 px-3 py-1.5 rounded-full font-ui"
                >
                  {b}
                </span>
              ))}
            </div>
            <p className="text-xs text-white/35 font-ui">
              FSSAI Lic. No:{" "}
              <strong className="text-white/60">10726997000301</strong>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-gold-400 mb-5 font-ui">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                ["/", "Home"],
                ["/about", "About Us"],
                ["/products", "All Products"],
                ["/contact", "Contact Us"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="flex items-center gap-2 text-white/55 hover:text-white text-sm font-medium transition-all duration-200 group font-ui"
                  >
                    <HiArrowRight className="text-forest-500 group-hover:translate-x-1 transition-transform text-xs" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-gold-400 mb-5 font-ui">
              Our Products
            </h3>
            <ul className="space-y-3">
              {productLinks.map(([slug, name]) => (
                <li key={slug}>
                  <Link
                    to={`/products/${slug}`}
                    className="flex items-center gap-2 text-white/55 hover:text-white text-sm font-medium transition-all duration-200 group font-ui"
                  >
                    <HiArrowRight className="text-forest-500 group-hover:translate-x-1 transition-transform text-xs" />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-gold-400 mb-5 font-ui">
              Get In Touch
            </h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-forest-500 mt-1 flex-shrink-0 text-sm" />
                <span className="text-white/55 text-sm leading-relaxed font-ui">
                  Navkar Business Park-2, Pl-3, Navagam, Kamrej, Surat, Gujarat
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-forest-500 flex-shrink-0 text-sm" />
                <a
                  href="tel:+919723104469"
                  className="text-white/55 hover:text-white text-sm font-medium transition-colors font-ui"
                >
                  +91 97231 04469
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-forest-500 flex-shrink-0 text-sm" />
                <a
                  href="mailto:info@hemsrukah.com"
                  className="text-white/55 hover:text-white text-sm font-medium transition-colors font-ui"
                >
                  info@hemsrukah.com
                </a>
              </li>
            </ul>
            <a
              href="https://wa.me/919723104469"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-800 text-white font-semibold text-sm py-3 px-5 rounded-2xl hover:-translate-y-0.5 hover:shadow-glow-forest transition-all duration-300 font-ui"
            >
              <FaWhatsapp className="text-lg" /> Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-sm font-ui">
            © {new Date().getFullYear()} Hemsrukah™ — Natesh Agro Foods
            Industries LLP. All rights reserved.
          </p>
          <p className="text-white/30 text-sm font-ui">Made with 🌿 in India</p>
        </div>
      </div>
    </footer>
  );
}
