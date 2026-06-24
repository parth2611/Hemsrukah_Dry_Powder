import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiArrowRight, HiCheckCircle } from "react-icons/hi";
import SectionTitle from "../components/SectionTitle";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const standards = [
  {
    icon: "🏆",
    title: "ISO 9001:2015 Certified",
    desc: "Our entire manufacturing process follows stringent ISO 9001:2015 quality management systems from raw material intake to final packaging and dispatch.",
  },
  {
    icon: "✅",
    title: "FDA Approved Facility",
    desc: "Our plant meets FDA standards for food production, safety, and hygiene — ensuring every product batch is absolutely safe for consumption.",
  },
  {
    icon: "🇮🇳",
    title: "FSSAI Licensed",
    desc: "Fully licensed under India's Food Safety and Standards Authority (Lic. No. 10726997000301) for full legal compliance and consumer trust.",
  },
  {
    icon: "🌍",
    title: "APEDA Registered",
    desc: "Registered with the Agricultural & Processed Food Products Export Development Authority to facilitate premium agricultural exports globally.",
  },
  {
    icon: "🌿",
    title: "No Preservatives Policy",
    desc: "A company-wide commitment: zero preservatives, zero artificial colours, zero compromise — in every single batch we manufacture, always.",
  },
  {
    icon: "🌡️",
    title: "Cold-Process Technology",
    desc: "Our proprietary low-temperature dehydration preserves vitamins, enzymes and antioxidants that conventional high-heat methods completely destroy.",
  },
];

const timeline = [
  {
    year: "Founded",
    label:
      "Natesh Agro Foods Industries LLP established in Navagam, Kamrej, Surat, Gujarat with a vision to deliver pure natural nutrition.",
  },
  {
    year: "ISO Cert",
    label:
      "Achieved ISO 9001:2015 certification for manufacturing excellence and end-to-end process consistency across all product lines.",
  },
  {
    year: "FDA",
    label:
      "Received FDA approval, setting the gold standard for food safety and hygiene across our entire manufacturing facility.",
  },
  {
    year: "FSSAI",
    label:
      "Licensed under FSSAI (Lic. No. 10726997000301) ensuring full Indian market compliance and uncompromised consumer trust.",
  },
  {
    year: "APEDA",
    label:
      "Registered with APEDA enabling premium agricultural exports to international markets and global food brands.",
  },
  {
    year: "Today",
    label:
      "13 premium natural powders trusted by nutritionists, chefs, wellness brands, and health-conscious families across India.",
  },
];

const values = [
  {
    icon: "🌱",
    title: "Purity First",
    desc: "We source only the freshest, highest-quality produce from trusted Indian farms — no shortcuts, no compromises, ever.",
  },
  {
    icon: "🔬",
    title: "Science-Backed",
    desc: "Every process is backed by food science to maximise nutritional retention, product efficacy, and shelf stability.",
  },
  {
    icon: "🤝",
    title: "Farmer Partnerships",
    desc: "We work directly with Indian farmers, ensuring fair prices and building long-term, sustainable supply relationships.",
  },
  {
    icon: "♻️",
    title: "Sustainability",
    desc: "Minimal waste processing and responsible packaging are core to our operations and our long-term environmental vision.",
  },
];

export default function About() {
  useEffect(() => {
    document.title = "About Us | Hemsrukah™ Natural Powders";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-forest-400 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-gold-400 rounded-full blur-3xl animate-float-slow" />
        </div>
        <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow-light">🌿 Our Story</span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-6 mt-2">
              Rooted in Nature,
              <br />
              <span className="text-gradient-gold">Driven by Quality</span>
            </h1>
            <p className="text-xl text-white/68 leading-relaxed font-ui">
              Hemsrukah is a brand of Natesh Agro Foods Industries LLP — an
              ISO-certified, FDA-approved manufacturer of premium natural fruit
              & vegetable powders from the heart of Gujarat, India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-ivory-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="rounded-3xl p-10 shadow-card-hover border border-forest-800/30"
              style={{
                background: "linear-gradient(135deg, #1A3C34 0%, #0B2018 100%)",
              }}
              {...fadeUp}
            >
              <div className="text-5xl mb-5">🎯</div>
              <h2 className="font-display text-3xl font-bold text-sage-300 mb-4">
                Our Mission
              </h2>
              <p className="text-white/72 text-lg leading-relaxed mb-4 font-ui">
                To make the extraordinary nutritional power of India's finest
                fruits and vegetables accessible to everyone — in a pure,
                convenient, shelf-stable form that never compromises on quality
                or authenticity.
              </p>
              <p className="text-white/72 text-lg leading-relaxed font-ui">
                We produce natural powders truly free from preservatives,
                artificial colours, and adulterants — certified by international
                standards and trusted by nutritionists, food manufacturers, and
                health-conscious families.
              </p>
            </motion.div>

            <motion.div
              className="rounded-3xl p-10 bg-white shadow-card border border-ivory-200"
              {...fadeUp}
              transition={{ delay: 0.15 }}
            >
              <div className="text-5xl mb-5">🔭</div>
              <h2 className="font-display text-3xl font-bold text-forest-800 mb-4">
                Our Vision
              </h2>
              <p className="text-charcoal-500 text-lg leading-relaxed mb-4 font-ui">
                To become India's most trusted name in natural food powders —
                exporting the richness of Indian agriculture to the world while
                setting the highest domestic standards for purity, nutrition,
                and sustainability.
              </p>
              <p className="text-charcoal-500 text-lg leading-relaxed font-ui">
                We envision a future where every Indian household and global
                food brand chooses natural over artificial — and Hemsrukah is
                the brand they trust to deliver that promise, every single time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-ivory-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div {...fadeUp}>
              <span className="eyebrow">🏭 Who We Are</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal-900 mt-2 mb-5 leading-tight">
                Natesh Agro Foods
                <br />
                <span className="text-gradient-forest">Industries LLP</span>
              </h2>
              <div className="title-divider" />
              <div className="space-y-4 text-lg text-charcoal-500 leading-relaxed font-ui">
                <p>
                  Based in Navagam, Kamrej, Surat — Gujarat's industrial
                  heartland — we manufacture and market the Hemsrukah™ range of
                  premium natural powders. Our state-of-the-art facility
                  combines traditional Indian botanical knowledge with modern
                  food science technology.
                </p>
                <p>
                  Every product starts with carefully sourced raw ingredients
                  from verified Indian farms. Our cold-dehydration process
                  gently removes moisture while preserving the full spectrum of
                  nutrients, colour, aroma, and flavour that nature intended.
                </p>
                <p>
                  With 13 products spanning fruits, vegetables, herbs, and
                  spices, we supply retail consumers, nutraceutical brands, food
                  manufacturers, restaurants, and international export clients.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { val: "13+", label: "Products" },
                  { val: "100%", label: "Natural" },
                  { val: "4", label: "Certifications" },
                  { val: "Surat", label: "Manufactured In" },
                ].map(({ val, label }) => (
                  <div
                    key={label}
                    className="text-center p-5 bg-forest-50 rounded-2xl border border-forest-100"
                  >
                    <div className="font-display text-3xl font-bold text-forest-700 mb-1">
                      {val}
                    </div>
                    <div className="text-sm font-semibold text-charcoal-400 uppercase tracking-wide font-ui">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Facility Card */}
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <div className="rounded-3xl overflow-hidden shadow-card-hover border border-ivory-200">
                <div
                  className="px-7 py-6 flex items-center gap-4 text-white"
                  style={{
                    background: "linear-gradient(135deg, #1A3C34, #0B2018)",
                  }}
                >
                  <div className="w-14 h-14 bg-white/12 rounded-2xl flex items-center justify-center text-3xl">
                    🏭
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">
                      Manufacturing Facility
                    </h3>
                    <p className="text-white/55 text-base font-ui">
                      Navagam, Kamrej, Surat, Gujarat
                    </p>
                  </div>
                </div>
                <div className="bg-white divide-y divide-ivory-200">
                  {[
                    ["Technology", "Cold Dehydration Process"],
                    ["Quality System", "ISO 9001:2015"],
                    ["Food Safety", "FDA Approved"],
                    ["FSSAI Licence", "10726997000301"],
                    ["Phone", "+91 97231 04469"],
                    ["Products", "13 Natural Powders"],
                    ["Storage", "Cool & Dry, Away from Sunlight"],
                    ["Shelf Life", "Best Before 10 Months from Packaging"],
                  ].map(([label, val]) => (
                    <div
                      key={label}
                      className="flex justify-between items-center px-7 py-4"
                    >
                      <span className="text-base text-charcoal-400 font-medium font-ui">
                        {label}
                      </span>
                      <span className="text-base text-forest-800 font-semibold text-right max-w-[55%] font-ui">
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-24 bg-ivory-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionTitle
            eyebrow="🔬 Quality & Compliance"
            title="Our Quality"
            highlight="Standards"
            subtitle="Multiple certification layers ensure every Hemsrukah product meets the highest food safety benchmarks."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {standards.map(({ icon, title, desc }, i) => (
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

      {/* Timeline */}
      <section className="py-24 bg-ivory-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionTitle
            eyebrow="📅 Our Journey"
            title="Milestones That"
            highlight="Define Us"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {timeline.map(({ year, label }, i) => (
              <motion.div
                key={year}
                className="feature-card hover:border-forest-200 border border-transparent"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-forest-500 to-forest-800 rounded-full mb-5 flex items-center justify-center shadow-glow-forest">
                  <HiCheckCircle className="text-white text-xl" />
                </div>
                <span className="font-display text-xl font-bold text-forest-700 block mb-2">
                  {year}
                </span>
                <p className="text-base text-charcoal-500 leading-relaxed font-ui">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-ivory-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionTitle
            eyebrow="💚 What We Believe"
            title="Our Core"
            highlight="Values"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon, title, desc }, i) => (
              <motion.div
                key={title}
                className="feature-card text-center hover:border-forest-200 border border-transparent"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
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

      {/* CTA */}
      <section className="py-24 bg-dark-gradient text-center">
        <div className="max-w-3xl mx-auto px-5">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
              Interested in Our Products?
            </h2>
            <p className="text-xl text-white/62 mb-10 leading-relaxed font-ui">
              Explore all 13 premium natural powders or connect for bulk & B2B
              inquiries.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Link to="/products" className="btn-secondary text-lg px-10 py-5">
                Browse All Products <HiArrowRight />
              </Link>
              <Link to="/contact" className="btn-outline text-lg px-10 py-5">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
