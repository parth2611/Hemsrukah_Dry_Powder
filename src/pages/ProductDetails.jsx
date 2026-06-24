import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import {
  HiArrowRight,
  HiArrowLeft,
  HiCheckCircle,
  HiSparkles,
} from "react-icons/hi";
import { getBySlug, products } from "../data/products";
import ProductCard from "../components/ProductCard";
import SectionTitle from "../components/SectionTitle";

/* Per-product accent colours matching ProductCard */
const accentMap = {
  "raw-banana-powder": "#9A6800",
  "raw-sapota-chikoo-powder": "#7A5200",
  "raw-guava-powder": "#4A5580",
  "raw-amla-powder": "#2D6A4F",
  "raw-moringa-powder": "#1F5534",
  "raw-tomato-powder": "#8B2E2A",
  "raw-beetroot-powder": "#6B2D80",
  "raw-carrot-powder": "#9A4A00",
  "raw-pudina-powder": "#1A5C3A",
  "raw-garlic-powder": "#5A5040",
  "raw-white-onion-powder": "#7A6A40",
  "raw-red-onion-powder": "#8B2040",
  "raw-ginger-powder": "#8B5A00",
};
const bgMap = {
  "raw-banana-powder": "#F5F0E0",
  "raw-sapota-chikoo-powder": "#EFE8E0",
  "raw-guava-powder": "#EEF0F5",
  "raw-amla-powder": "#EDF5EE",
  "raw-moringa-powder": "#EBF4EC",
  "raw-tomato-powder": "#F5EDEC",
  "raw-beetroot-powder": "#F2EDF5",
  "raw-carrot-powder": "#F5EFE8",
  "raw-pudina-powder": "#EAF5EE",
  "raw-garlic-powder": "#F2F0EC",
  "raw-white-onion-powder": "#F5F2E8",
  "raw-red-onion-powder": "#F5ECEE",
  "raw-ginger-powder": "#F5EFE0",
};

export default function ProductDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getBySlug(slug);

  useEffect(() => {
    if (!product) {
      document.title = "Product Not Found | Hemsrukah";
    }
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) document.title = `${product.name} | Hemsrukah™`;
  }, [slug, product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24 bg-ivory-50">
        <div className="text-center px-5">
          <span className="text-8xl block mb-6">🌿</span>
          <h2 className="font-display text-3xl font-bold text-charcoal-700 mb-4">
            Product Not Found
          </h2>
          <p className="text-lg text-charcoal-400 mb-8 font-ui">
            This product doesn't exist or may have been moved.
          </p>
          <Link to="/products" className="btn-primary">
            Browse All Products
          </Link>
        </div>
      </div>
    );
  }

  const {
    name,
    emoji,
    category,
    slug: pSlug,
    shortDescription,
    fullDescription,
    benefits,
    uses,
    nutritionHighlights,
    featured,
  } = product;

  const accent = accentMap[pSlug] || "#2D6A4F";
  const cardBg = bgMap[pSlug] || "#F0EBE1";

  const related = products
    .filter((p) => p.slug !== slug && p.category === category)
    .slice(0, 3);

  const waMsg = encodeURIComponent(
    `Hello Hemsrukah! I'm interested in ${name}. Please share pricing and availability.`,
  );

  return (
    <main>
      {/* Breadcrumb */}
      <div className="bg-ivory-100 border-b border-ivory-200 mt-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-4 flex items-center gap-2 text-sm text-charcoal-400 flex-wrap font-ui">
          <Link
            to="/"
            className="hover:text-forest-600 font-medium transition-colors"
          >
            Home
          </Link>
          <span className="text-ivory-400">›</span>
          <Link
            to="/products"
            className="hover:text-forest-600 font-medium transition-colors"
          >
            Products
          </Link>
          <span className="text-ivory-400">›</span>
          <span className="text-charcoal-700 font-semibold">{name}</span>
        </div>
      </div>

      {/* Product Hero */}
      <section className="py-16 bg-ivory-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-center"
            >
              <div
                className="relative w-full max-w-md aspect-square rounded-4xl flex items-center justify-center overflow-hidden mb-6 border"
                style={{ backgroundColor: cardBg, borderColor: accent + "30" }}
              >
                {/* Rings */}
                <div
                  className="absolute w-72 h-72 rounded-full border-2 border-dashed opacity-15 animate-spin-slow"
                  style={{ borderColor: accent }}
                />
                <div
                  className="absolute w-52 h-52 rounded-full border-2 border-dashed opacity-10"
                  style={{
                    borderColor: accent,
                    animation: "spin 14s linear infinite reverse",
                  }}
                />
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-4xl"
                  style={{
                    background: `radial-gradient(circle at center, ${accent}12 0%, transparent 70%)`,
                  }}
                />
                {/* Emoji */}
                <motion.span
                  className="text-[10rem] relative z-10 drop-shadow-xl select-none"
                  animate={{ y: [0, -14, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {emoji}
                </motion.span>
                {featured && (
                  <div className="absolute top-5 right-5 flex items-center gap-1 bg-gradient-to-r from-gold-400 to-gold-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-glow-gold font-ui">
                    <HiSparkles /> Featured
                  </div>
                )}
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "🌿 100% Natural",
                  "🚫 No Preservatives",
                  "✅ Quality Assured",
                  "🏆 ISO Certified",
                ].map((b) => (
                  <span
                    key={b}
                    className="text-sm font-semibold bg-forest-50 border border-forest-200 text-forest-700 px-4 py-2 rounded-full font-ui"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="inline-block text-sm font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4 bg-ivory-200 text-charcoal-600 font-ui">
                {category} Powder
              </span>
              <p
                className="text-sm font-bold tracking-widest uppercase mb-2 font-ui"
                style={{ color: accent }}
              >
                Natural · Premium · Pure
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal-900 mb-4 leading-tight">
                {name}
              </h1>
              <div
                className="w-16 h-1 rounded-full mb-6"
                style={{
                  background: `linear-gradient(90deg, ${accent}, ${accent}70)`,
                }}
              />
              <p className="text-xl text-charcoal-500 leading-relaxed mb-8 font-ui">
                {fullDescription}
              </p>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={`https://wa.me/919723104469?text=${waMsg}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-800 text-white font-bold py-4 px-8 rounded-full hover:-translate-y-1 transition-all duration-300 text-lg shadow-glow-forest font-ui"
                >
                  <FaWhatsapp className="text-2xl" /> Inquire on WhatsApp
                </a>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 border-2 border-forest-600 text-forest-700 font-bold py-4 px-8 rounded-full hover:bg-forest-700 hover:text-white transition-all duration-300 text-lg font-ui"
                >
                  Send Inquiry <HiArrowRight />
                </Link>
              </div>

              {/* Certifications */}
              <div className="flex flex-wrap gap-2">
                {[
                  "ISO 9001:2015",
                  "FDA Approved",
                  "FSSAI Licensed",
                  "APEDA",
                ].map((c) => (
                  <span
                    key={c}
                    className="text-sm font-semibold text-charcoal-500 bg-ivory-100 px-4 py-2 rounded-full border border-ivory-300 font-ui"
                  >
                    ✓ {c}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="py-16 bg-ivory-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Benefits */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-card border border-ivory-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-7 pb-5 border-b border-ivory-200">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                  style={{ backgroundColor: cardBg }}
                >
                  💪
                </div>
                <h2 className="font-display text-2xl font-bold text-charcoal-900">
                  Key Benefits
                </h2>
              </div>
              <ul className="space-y-4">
                {benefits.map((b, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: accent + "18" }}
                    >
                      <HiCheckCircle
                        className="text-sm"
                        style={{ color: accent }}
                      />
                    </div>
                    <span className="text-base text-charcoal-600 leading-relaxed font-ui">
                      {b}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Uses */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-card border border-ivory-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-7 pb-5 border-b border-ivory-200">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                  style={{ backgroundColor: cardBg }}
                >
                  🍽️
                </div>
                <h2 className="font-display text-2xl font-bold text-charcoal-900">
                  How To Use
                </h2>
              </div>
              <ul className="space-y-4">
                {uses.map((u, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <span
                      className="font-display text-sm font-bold w-7 flex-shrink-0 mt-0.5"
                      style={{ color: accent }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base text-charcoal-600 leading-relaxed font-ui">
                      {u}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Nutrition */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-card border border-ivory-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="flex items-center gap-3 mb-7 pb-5 border-b border-ivory-200">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                style={{ backgroundColor: cardBg }}
              >
                📊
              </div>
              <h2 className="font-display text-2xl font-bold text-charcoal-900">
                Nutritional Highlights
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {nutritionHighlights.map(({ label, value, per }) => (
                <div
                  key={label}
                  className="text-center p-4 rounded-2xl border transition-colors hover:border-forest-200"
                  style={{
                    backgroundColor: cardBg + "80",
                    borderColor: accent + "25",
                  }}
                >
                  <div className="text-xs font-bold tracking-wider uppercase text-charcoal-400 mb-2 font-ui">
                    {label}
                  </div>
                  <div
                    className="font-display text-lg font-bold mb-1"
                    style={{ color: accent }}
                  >
                    {value}
                  </div>
                  <div className="text-xs text-charcoal-400 font-ui">{per}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-charcoal-300 mt-5 italic font-ui">
              * Values are approximate. Source: Natesh Agro Foods Industries LLP
              product labels. FSSAI Lic. No. 10726997000301.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Meta info */}
      <section className="py-12 bg-ivory-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              {
                icon: "🌡️",
                title: "Storage",
                desc: "Store in a cool, dry place away from direct sunlight. Keep tightly sealed after opening.",
              },
              {
                icon: "🏭",
                title: "Manufactured By",
                desc: "Natesh Agro Foods Industries LLP, Navkar Business Park-2, Pl-3, Navagam, Kamrej, Surat.",
              },
              {
                icon: "📋",
                title: "Certifications",
                desc: "ISO 9001:2015 · FDA Approved · FSSAI 10726997000301 · APEDA · No Preservatives",
              },
              {
                icon: "📞",
                title: "Inquiries",
                desc: "+91 97231 04469 · info@hemsrukah.com",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="p-6 rounded-2xl border border-ivory-200 bg-white hover:border-forest-200 hover:shadow-card transition-all duration-200"
              >
                <span className="text-3xl block mb-3">{icon}</span>
                <h3 className="font-display font-bold text-base text-charcoal-900 mb-2">
                  {title}
                </h3>
                <p className="text-sm text-charcoal-500 leading-relaxed font-ui">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="py-16 bg-ivory-100">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <SectionTitle
              title="You May Also"
              highlight="Like"
              subtitle="More natural powders from the same category."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back */}
      <div className="py-8 bg-white border-t border-ivory-200">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-base font-semibold text-forest-600 hover:text-forest-900 transition-colors group font-ui"
          >
            <HiArrowLeft className="group-hover:-translate-x-1 transition-transform" />{" "}
            Back to Products
          </button>
        </div>
      </div>
    </main>
  );
}
