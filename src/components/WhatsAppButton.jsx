import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { HiX } from "react-icons/hi";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [tooltip, setTooltip] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 1500);
    const t2 = setTimeout(() => setTooltip(true), 3000);
    const t3 = setTimeout(() => setTooltip(false), 7500);
    return () => [t1, t2, t3].forEach(clearTimeout);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
          <AnimatePresence>
            {tooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.85 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.85 }}
                className="relative bg-white rounded-2xl shadow-card-hover px-4 py-3 flex items-center gap-3 border border-ivory-200 max-w-xs"
              >
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaWhatsapp className="text-white text-sm" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-charcoal-800 font-ui">
                    Need help? Chat with us!
                  </p>
                  <p className="text-xs text-charcoal-400 font-ui">
                    We reply within minutes
                  </p>
                </div>
                <button
                  onClick={() => setTooltip(false)}
                  className="ml-1 p-1 hover:bg-ivory-200 rounded-lg transition-colors"
                >
                  <HiX className="text-charcoal-400 text-xs" />
                </button>
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-white" />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.a
            href="https://wa.me/919723104469?text=Hello%20Hemsrukah!%20I%20would%20like%20to%20know%20more%20about%20your%20products."
            target="_blank"
            rel="noreferrer"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative w-16 h-16 bg-gradient-to-br from-green-400 to-green-700 rounded-full flex items-center justify-center shadow-glow-forest"
            aria-label="Chat on WhatsApp"
          >
            <span className="absolute inset-0 rounded-full bg-green-400/35 animate-ping" />
            <span className="absolute inset-0 rounded-full bg-green-500/20 animate-pulse-slow" />
            <FaWhatsapp className="text-white text-3xl relative z-10" />
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  );
}
