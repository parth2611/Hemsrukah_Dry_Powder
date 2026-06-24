import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp, FaLeaf } from "react-icons/fa";
import { HiArrowRight, HiSparkles, HiCheckCircle } from "react-icons/hi";
import ProductCard from "../components/ProductCard";
import Testimonials from "../components/Testimonials";
import SectionTitle from "../components/SectionTitle";
import { getFeatured } from "../data/products";

const stats = [
  { value: "13+", label: "Premium Powders", icon: "🌿" },
  { value: "100%", label: "Natural & Pure", icon: "✅" },
  { value: "Zero", label: "Preservatives", icon: "🚫" },
  { value: "ISO", label: "9001:2015 Certified", icon: "🏆" },
];

const whyChoose = [
  {
    icon: "🌿",
    title: "100% Natural",
    desc: "Zero artificial colours, flavours, or chemicals. Pure nature concentrated into every spoonful — nothing added, nothing removed.",
  },
  {
    icon: "🚫",
    title: "No Preservatives",
    desc: "Free from all preservatives and additives — shelf-stable through our proprietary gentle cold-dehydration process alone.",
  },
  {
    icon: "🏆",
    title: "ISO 9001:2015",
    desc: "Certified manufacturing processes ensure consistent, traceable, premium quality in every single batch we produce.",
  },
  {
    icon: "✅",
    title: "FDA Approved",
    desc: "Every product cleared by the Food & Drug Administration for absolute consumer safety and peace of mind.",
  },
  {
    icon: "🌡️",
    title: "Cold Processed",
    desc: "Low-temperature drying technology locks in maximum vitamins, enzymes and antioxidants that high-heat methods destroy.",
  },
  {
    icon: "🇮🇳",
    title: "Made in India",
    desc: "Proudly manufactured in Gujarat, India. FSSAI licensed and APEDA registered for premium domestic and export markets.",
  },
];

const processSteps = [
  { num: "01", icon: "🌾", label: "Farm Harvest" },
  { num: "02", icon: "🔍", label: "Quality Sort" },
  { num: "03", icon: "💧", label: "Gentle Wash" },
  { num: "04", icon: "🌡️", label: "Low-Temp Dry" },
  { num: "05", icon: "⚙️", label: "Fine Mill" },
  { num: "06", icon: "🧪", label: "Lab Test" },
  { num: "07", icon: "📦", label: "Seal & Ship" },
];

const categories = [
  {
    name: "Fruit Powders",
    count: 4,
    emoji: "🍎",
    from: "#2D6A4F",
    to: "#1A3C34",
    desc: "Banana, Amla, Guava, Sapota",
  },
  {
    name: "Vegetable Powders",
    count: 6,
    emoji: "🥦",
    from: "#3A8A65",
    to: "#2D6A4F",
    desc: "Beetroot, Carrot, Tomato & more",
  },
  {
    name: "Herb Powders",
    count: 2,
    emoji: "🌿",
    from: "#52B788",
    to: "#2D6A4F",
    desc: "Pudina, Moringa",
  },
  {
    name: "Spice Powders",
    count: 2,
    emoji: "🫚",
    from: "#D4A017",
    to: "#9A6800",
    desc: "Ginger, Garlic",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Home() {
  useEffect(() => {
    document.title = "Hemsrukah™ | Premium Natural Fruit & Vegetable Powders";
  }, []);
  const featured = getFeatured();

  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen bg-hero-gradient overflow-hidden flex flex-col">
        {/* Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-forest-500/18 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gold-500/12 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-sage-400/10 rounded-full blur-2xl animate-float" />
        </div>
        {/* Floating emojis */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          {["🍌", "🌿", "🍅", "🥕", "🧄", "🟣", "🍏", "🫚"].map((e, i) => (
            <motion.span
              key={i}
              className="absolute text-4xl opacity-8"
              style={{
                top: `${10 + ((i * 11) % 80)}%`,
                left: `${5 + ((i * 13) % 90)}%`,
              }}
              animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {e}
            </motion.span>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 flex-1 flex items-center pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            {/* Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <span className="eyebrow-light">
                  <FaLeaf className="text-sage-300" /> 100% Natural · ISO
                  Certified
                </span>
              </motion.div>
              <motion.h1
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Nature's Finest
                <br />
                <span className="text-gradient-gold">Powders,</span>
                <br />
                <span className="text-gradient-light">Delivered Pure</span>
              </motion.h1>
              <motion.p
                className="text-xl text-white/70 leading-relaxed mb-8 max-w-lg font-ui"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Hemsrukah crafts 13 premium natural fruit & vegetable powders
                with zero preservatives and zero artificial additives. ISO
                certified, FDA approved, 100% Indian.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Link to="/products" className="btn-primary text-lg px-8 py-4">
                  Explore Products <HiArrowRight className="text-lg" />
                </Link>
                <a
                  href="https://wa.me/919723104469"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline text-lg px-8 py-4"
                >
                  <FaWhatsapp className="text-xl" /> Get a Sample
                </a>
              </motion.div>
              <motion.div
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {[
                  "✓ ISO 9001:2015",
                  "✓ FDA Approved",
                  "✓ FSSAI Licensed",
                  "✓ APEDA",
                ].map((b) => (
                  <span
                    key={b}
                    className="text-sm font-semibold text-white/55 bg-white/8 border border-white/10 px-3 py-1.5 rounded-full font-ui"
                  >
                    {b}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Hero Card */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="bg-ivory-50/15 backdrop-blur-md border border-white/20 rounded-4xl p-7 shadow-2xl animate-float">
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { e: "🍌", n: "Banana", c: "#F5F0E0" },
                    { e: "🌿", n: "Moringa", c: "#EBF4EC" },
                    { e: "🍅", n: "Tomato", c: "#F5EDEC" },
                    { e: "🟣", n: "Beetroot", c: "#F2EDF5" },
                    { e: "🍏", n: "Guava", c: "#EEF0F5" },
                    { e: "🧄", n: "Garlic", c: "#F2F0EC" },
                  ].map(({ e, n, c }) => (
                    <div
                      key={n}
                      className="rounded-2xl p-3 text-center hover:scale-105 transition-transform duration-200 border border-ivory-200/50"
                      style={{ backgroundColor: c }}
                    >
                      <span className="text-4xl block mb-1">{e}</span>
                      <span className="text-xs font-semibold text-charcoal-600 font-ui">
                        {n}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="bg-forest-950/80 backdrop-blur-sm rounded-2xl px-5 py-4 flex items-center gap-4 border border-forest-800">
                  <span className="text-3xl">🏆</span>
                  <div>
                    <p className="text-white font-bold text-base font-ui">
                      Premium Quality Guaranteed
                    </p>
                    <p className="text-white/45 text-sm font-ui">
                      Natesh Agro Foods Industries LLP
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative z-10 bg-black/20 border-t border-white/8 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-5 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map(({ value, label, icon }, i) => (
                <motion.div
                  key={label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <div className="text-3xl mb-1">{icon}</div>
                  <div className="font-display text-3xl font-bold text-sage-300">
                    {value}
                  </div>
                  <div className="text-sm font-semibold text-white/45 uppercase tracking-wide mt-0.5 font-ui">
                    {label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT STRIP ─── */}
      <section className="py-24 bg-ivory-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <span className="eyebrow">🌿 Our Story</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal-900 mb-5 leading-tight">
                From Farm to Your{" "}
                <span className="text-gradient-forest">Kitchen</span>
              </h2>
              <div className="title-divider" />
              <p className="text-lg text-charcoal-500 leading-relaxed mb-4 font-ui">
                At Hemsrukah, we believe the purest form of nutrition is nature
                itself. Our powders are crafted from carefully selected fruits,
                vegetables, and herbs — dried at precise low temperatures to
                preserve every vitamin, mineral, and enzyme.
              </p>
              <p className="text-lg text-charcoal-500 leading-relaxed mb-8 font-ui">
                Manufactured at our facility in Navagam, Kamrej, Surat under ISO
                9001:2015 standards, every batch is rigorously tested and
                delivered to you without compromise.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "Farm Sourced",
                  "Cold Processed",
                  "Lab Tested",
                  "FSSAI Certified",
                  "Export Quality",
                ].map((p) => (
                  <span
                    key={p}
                    className="text-sm font-semibold text-forest-700 bg-forest-100 border border-forest-200 px-4 py-2 rounded-full font-ui"
                  >
                    {p}
                  </span>
                ))}
              </div>
              <Link to="/about" className="btn-primary">
                Learn Our Story <HiArrowRight />
              </Link>
            </motion.div>
            <div className="grid grid-cols-2 gap-5">
              {[
                {
                  val: "13+",
                  label: "Premium Powders",
                  icon: "🌿",
                  from: "from-forest-600",
                  to: "to-forest-950",
                },
                {
                  val: "ISO",
                  label: "9001:2015 Certified",
                  icon: "🏆",
                  from: "from-gold-500",
                  to: "to-gold-700",
                },
                {
                  val: "100%",
                  label: "No Preservatives",
                  icon: "🚫",
                  from: "from-forest-500",
                  to: "to-forest-800",
                },
                {
                  val: "FDA",
                  label: "Approved Facility",
                  icon: "✅",
                  from: "from-forest-700",
                  to: "to-forest-950",
                },
              ].map(({ val, label, icon, from, to }, i) => (
                <motion.div
                  key={label}
                  className="feature-card text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${from} ${to} flex items-center justify-center text-2xl mx-auto mb-4 shadow-btn`}
                  >
                    <span>{icon}</span>
                  </div>
                  <div className="font-display text-3xl font-bold text-charcoal-900 mb-1">
                    {val}
                  </div>
                  <div className="text-sm font-semibold text-charcoal-400 font-ui">
                    {label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURED PRODUCTS ─── */}
      <section className="py-24 bg-ivory-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionTitle
            eyebrow="⭐ Our Collection"
            title="Featured"
            highlight="Products"
            subtitle="Our most-loved natural powders — each a nutritional powerhouse, crafted without compromise."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-12">
            {featured.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/products" className="btn-primary text-lg px-10 py-4">
              View All 13 Products <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-24 bg-ivory-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionTitle
            eyebrow="💚 Why Hemsrukah"
            title="The Hemsrukah"
            highlight="Difference"
            subtitle="Multiple layers of quality and trust that set us apart from every other supplier."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map(({ icon, title, desc }, i) => (
              <motion.div
                key={title}
                className="feature-card hover:border-forest-200 border border-transparent"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="text-5xl mb-5">{icon}</div>
                <h3 className="font-display text-xl font-bold text-charcoal-900 mb-3">
                  {title}
                </h3>
                <p className="text-base text-charcoal-500 leading-relaxed font-ui">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CATEGORIES ─── */}
      <section className="py-24 bg-ivory-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionTitle
            eyebrow="📦 Our Range"
            title="Product"
            highlight="Categories"
            subtitle="From fruits to spices — 13 premium powders across four natural categories."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map(({ name, count, emoji, from, to, desc }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to="/products" className="block group">
                  <div
                    className="relative rounded-3xl p-8 text-white text-center overflow-hidden hover:shadow-card-hover hover:-translate-y-2 transition-all duration-400"
                    style={{
                      background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)`,
                    }}
                  >
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/8 transition-colors duration-300 rounded-3xl" />
                    <div className="text-6xl mb-4 relative z-10">{emoji}</div>
                    <div className="text-4xl font-bold font-display mb-1 relative z-10">
                      {count}
                    </div>
                    <div className="text-lg font-bold mb-2 relative z-10 font-ui">
                      {name}
                    </div>
                    <div className="text-sm text-white/65 relative z-10 font-ui">
                      {desc}
                    </div>
                    <div className="mt-5 flex items-center justify-center gap-1 text-sm font-semibold text-white/70 group-hover:text-white relative z-10 font-ui">
                      Explore{" "}
                      <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="py-24 bg-dark-gradient">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionTitle
            eyebrow="🏭 Manufacturing"
            title="Our Cold-Process"
            highlight="Method"
            subtitle="How we lock in 100% of nature's nutrition from farm to your hands."
            light
          />
          <div className="flex flex-wrap justify-center items-center gap-3 mb-16">
            {processSteps.map(({ num, icon, label }, i) => (
              <motion.div
                key={num}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex flex-col items-center gap-2 bg-white/8 border border-white/12 rounded-2xl px-5 py-4 min-w-[90px] hover:bg-white/14 transition-colors">
                  <span className="text-xs font-bold text-gold-400 tracking-widest font-ui">
                    {num}
                  </span>
                  <span className="text-3xl">{icon}</span>
                  <span className="text-xs font-semibold text-white/65 text-center font-ui">
                    {label}
                  </span>
                </div>
                {i < processSteps.length - 1 && (
                  <span className="text-white/20 text-2xl hidden sm:block">
                    →
                  </span>
                )}
              </motion.div>
            ))}
          </div>
          {/* Certifications */}
          <motion.div
            className="bg-white/6 border border-white/10 rounded-3xl p-8"
            {...fadeUp}
          >
            <h3 className="font-display text-2xl font-bold text-white text-center mb-8">
              Our Certifications & Compliance
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  icon: "🏆",
                  title: "ISO 9001:2015",
                  sub: "Quality Management",
                },
                {
                  icon: "✅",
                  title: "FDA Approved",
                  sub: "Food Safety Certified",
                },
                {
                  icon: "🇮🇳",
                  title: "FSSAI Licensed",
                  sub: "Lic. No. 10726997000301",
                },
                {
                  icon: "🌍",
                  title: "APEDA Registered",
                  sub: "Export Certified",
                },
              ].map(({ icon, title, sub }) => (
                <div
                  key={title}
                  className="text-center p-5 rounded-2xl bg-white/5 border border-white/8 hover:bg-white/10 transition-colors"
                >
                  <div className="text-4xl mb-3">{icon}</div>
                  <div className="text-white font-bold text-base mb-1 font-ui">
                    {title}
                  </div>
                  <div className="text-white/45 text-sm font-ui">{sub}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <Testimonials />

      {/* ─── CTA ─── */}
      <section className="py-24 bg-ivory-100">
        <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <span className="eyebrow">📞 Get In Touch</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal-900 mb-5 mt-2">
              Ready to Experience{" "}
              <span className="text-gradient-forest">Pure Nature?</span>
            </h2>
            <p className="text-xl text-charcoal-500 mb-10 leading-relaxed font-ui">
              Retailer, food manufacturer, nutritionist, or distributor — we'd
              love to connect. Get pricing, samples, or B2B inquiry support
              instantly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <a
                href="https://wa.me/919723104469"
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-lg px-10 py-5 shadow-glow-forest"
              >
                <FaWhatsapp className="text-2xl" /> WhatsApp Us Now
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-forest-700 font-semibold text-lg border-2 border-forest-300 px-10 py-5 rounded-full hover:bg-forest-700 hover:text-white hover:border-forest-700 transition-all duration-300 font-ui"
              >
                Send an Inquiry <HiArrowRight />
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              {[
                { icon: "📞", label: "+91 97231 04469" },
                { icon: "📧", label: "info@hemsrukah.com" },
                { icon: "📍", label: "Kamrej, Surat, Gujarat" },
                { icon: "🕘", label: "Mon–Sat, 9AM–6PM" },
              ].map(({ icon, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-2 text-base text-charcoal-600 bg-white border border-ivory-300 px-5 py-3 rounded-full shadow-card font-medium font-ui"
                >
                  {icon} {label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
