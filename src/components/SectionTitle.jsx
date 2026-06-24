import { motion } from "framer-motion";

export default function SectionTitle({
  eyebrow,
  title,
  highlight,
  subtitle,
  center = true,
  light = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-14 ${center ? "text-center" : ""}`}
    >
      {eyebrow && (
        <span className={light ? "eyebrow-light" : "eyebrow"}>{eyebrow}</span>
      )}
      <h2
        className={`font-display font-bold leading-tight mb-0 text-4xl md:text-5xl ${light ? "text-white" : "text-charcoal-900"}`}
      >
        {title}{" "}
        {highlight && (
          <span
            className={light ? "text-gradient-gold" : "text-gradient-forest"}
          >
            {highlight}
          </span>
        )}
      </h2>
      <div
        className={`w-16 h-1 rounded-full bg-gradient-to-r from-forest-500 to-gold-400 my-5 ${center ? "mx-auto" : ""}`}
      />
      {subtitle && (
        <p
          className={`text-lg md:text-xl leading-relaxed max-w-2xl ${center ? "mx-auto" : ""} ${light ? "text-white/65" : "text-charcoal-500"} font-ui`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
