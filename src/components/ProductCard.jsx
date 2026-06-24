import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiArrowRight, HiSparkles } from "react-icons/hi";

/* Muted premium pastel backgrounds per product */
const mutedBg = {
  "raw-banana-powder": { bg: "#F5F0E0", border: "#E8DFC8", accent: "#9A6800" },
  "raw-sapota-chikoo-powder": {
    bg: "#EFE8E0",
    border: "#E0D4C8",
    accent: "#7A5200",
  },
  "raw-guava-powder": { bg: "#EEF0F5", border: "#DDE0EC", accent: "#4A5580" },
  "raw-amla-powder": { bg: "#EDF5EE", border: "#D4EAD6", accent: "#2D6A4F" },
  "raw-moringa-powder": { bg: "#EBF4EC", border: "#CDE4CE", accent: "#1F5534" },
  "raw-tomato-powder": { bg: "#F5EDEC", border: "#E8D4D2", accent: "#8B2E2A" },
  "raw-beetroot-powder": {
    bg: "#F2EDF5",
    border: "#E0D4EC",
    accent: "#6B2D80",
  },
  "raw-carrot-powder": { bg: "#F5EFE8", border: "#E8DDD0", accent: "#9A4A00" },
  "raw-pudina-powder": { bg: "#EAF5EE", border: "#C8E8D4", accent: "#1A5C3A" },
  "raw-garlic-powder": { bg: "#F2F0EC", border: "#E0DCd4", accent: "#5A5040" },
  "raw-white-onion-powder": {
    bg: "#F5F2E8",
    border: "#E8E0CC",
    accent: "#7A6A40",
  },
  "raw-red-onion-powder": {
    bg: "#F5ECEE",
    border: "#E8D2D6",
    accent: "#8B2040",
  },
  "raw-ginger-powder": { bg: "#F5EFE0", border: "#E8DEC8", accent: "#8B5A00" },
};

export default function ProductCard({ product, index = 0 }) {
  const { slug, name, emoji, shortDescription, category, featured } = product;
  const style = mutedBg[slug] || {
    bg: "#F0EDE8",
    border: "#E0DDD6",
    accent: "#2D6A4F",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <Link to={`/products/${slug}`} className="product-card group block">
        {/* Visual */}
        <div
          className="relative h-52 flex items-center justify-center overflow-hidden"
          style={{
            backgroundColor: style.bg,
            borderBottom: `1px solid ${style.border}`,
          }}
        >
          {/* Subtle radial glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at center, ${style.accent}15 0%, transparent 70%)`,
            }}
          />
          {/* Shimmer */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
          </div>
          {/* Emoji */}
          <motion.span
            className="text-8xl relative z-10 drop-shadow-md select-none"
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {emoji}
          </motion.span>
          {/* Category */}
          <span
            className="absolute top-4 left-4 text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-full bg-white/75 backdrop-blur-sm font-ui"
            style={{ color: style.accent, border: `1px solid ${style.border}` }}
          >
            {category}
          </span>
          {/* Featured */}
          {featured && (
            <span className="absolute top-4 right-4 flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-full bg-gold-500 text-white shadow-glow-gold font-ui">
              <HiSparkles className="text-xs" /> Featured
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-6 bg-white">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-2 font-ui"
            style={{ color: style.accent }}
          >
            Natural {category} Powder
          </p>
          <h3 className="font-display text-xl font-bold text-charcoal-900 mb-3 leading-snug group-hover:text-forest-700 transition-colors duration-200">
            {name}
          </h3>
          <p className="text-base text-charcoal-500 leading-relaxed mb-5 line-clamp-2 font-ui">
            {shortDescription}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-charcoal-400 font-medium font-ui">
                🌿 No Preservatives
              </span>
              <span className="text-xs text-charcoal-400 font-medium font-ui">
                ✅ ISO Certified
              </span>
            </div>
            <span
              className="flex items-center gap-1.5 text-sm font-bold px-4 py-2.5 rounded-full font-ui group-hover:gap-2.5 transition-all duration-300"
              style={{
                backgroundColor: style.bg,
                color: style.accent,
                border: `1px solid ${style.border}`,
              }}
            >
              View Details{" "}
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
