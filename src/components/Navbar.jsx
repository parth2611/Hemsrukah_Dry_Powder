import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaWhatsapp, FaLeaf } from "react-icons/fa";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-ivory-50/95 backdrop-blur-xl shadow-glass border-b border-ivory-200"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 bg-gradient-to-br from-forest-600 to-forest-950 rounded-2xl flex items-center justify-center shadow-btn group-hover:shadow-glow-forest transition-all duration-300">
                <FaLeaf className="text-sage-300 text-lg" />
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className={`font-display font-bold text-xl tracking-tight transition-colors duration-300 ${scrolled ? "text-forest-900" : "text-white"}`}
                >
                  Hemsrukah
                </span>
                <span className="text-xs font-semibold tracking-widest uppercase text-gold-500 mt-0.5 font-ui">
                  Pure · Natural · Premium
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  className={({ isActive }) =>
                    `nav-link px-5 py-2.5 rounded-full transition-all duration-200 ${
                      isActive
                        ? scrolled
                          ? "text-forest-700 bg-forest-100 font-semibold"
                          : "text-white bg-white/15 font-semibold"
                        : scrolled
                          ? "text-charcoal-600 hover:text-forest-700 hover:bg-forest-50"
                          : "text-white/85 hover:text-white hover:bg-white/10"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://wa.me/919723104469"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-btn-forest text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-btn hover:shadow-btn-hover hover:-translate-y-0.5 transition-all duration-300 font-ui"
              >
                <FaWhatsapp className="text-base" /> WhatsApp Us
              </a>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setOpen((prev) => !prev)}
              className={`md:hidden p-2 rounded-xl transition-colors ${scrolled ? "text-forest-900 hover:bg-forest-50" : "text-white hover:bg-white/10"}`}
              aria-label="Toggle menu"
            >
              {open ? (
                <HiX className="text-2xl" />
              ) : (
                <HiMenu className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-forest-950/50 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-80 bg-ivory-50 shadow-2xl md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-ivory-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-forest-600 to-forest-950 rounded-xl flex items-center justify-center">
                    <FaLeaf className="text-sage-300" />
                  </div>
                  <span className="font-display font-bold text-lg text-forest-900">
                    Hemsrukah
                  </span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-xl hover:bg-ivory-200 transition-colors"
                >
                  <HiX className="text-xl text-charcoal-500" />
                </button>
              </div>

              <nav className="flex flex-col gap-1 p-5 flex-1">
                {navLinks.map(({ to, label }, i) => (
                  <motion.div
                    key={to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <NavLink
                      to={to}
                      end={to === "/"}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `block px-5 py-4 rounded-2xl text-base font-medium font-ui transition-all duration-200 border-b border-ivory-200 ${
                          isActive
                            ? "text-forest-700 bg-forest-50 font-semibold"
                            : "text-charcoal-700 hover:bg-forest-50 hover:text-forest-700"
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <div className="p-5 border-t border-ivory-200 space-y-3">
                <a
                  href="https://wa.me/919723104469"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold py-4 rounded-2xl text-base font-ui"
                  onClick={() => setOpen(false)}
                >
                  <FaWhatsapp className="text-xl" /> WhatsApp Inquiry
                </a>
                <div className="text-center text-xs text-charcoal-400 pt-1 font-ui">
                  <p>📍 Navkar Business Park-2, Kamrej, Surat</p>
                  <p className="mt-1">📞 +91 97231 04469</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
