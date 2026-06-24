import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiSearch, HiX } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import ProductCard from "../components/ProductCard";
import SectionTitle from "../components/SectionTitle";
import { products, categories } from "../data/products";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.title = "All Products | Hemsrukah™ Natural Powders";
    window.scrollTo(0, 0);
  }, []);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat =
        activeCategory === "All" || p.category === activeCategory;
      const searchTerm = search.toLowerCase();
      const matchSearch =
        p.name.toLowerCase().includes(searchTerm) ||
        p.shortDescription.toLowerCase().includes(searchTerm);
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  const catCount = (cat) =>
    cat === "All"
      ? products.length
      : products.filter((p) => p.category === cat).length;

  return (
    <main>
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-forest-300 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 left-20 w-72 h-72 bg-gold-400 rounded-full blur-3xl animate-float-slow" />
        </div>
        <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow-light">🌿 Our Collection</span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-5 leading-tight mt-2">
              All Natural <span className="text-gradient-gold">Powders</span>
            </h1>
            <p className="text-xl text-white/68 leading-relaxed font-ui">
              13 premium natural fruit & vegetable powders — zero preservatives,
              zero compromise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-20 z-40 bg-ivory-50/96 backdrop-blur-xl border-b border-ivory-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-400 text-lg" />
              <input
                type="search"
                placeholder="Search products…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-10 py-3 bg-ivory-100 border-2 border-ivory-200 rounded-2xl text-base font-medium text-charcoal-800 placeholder-charcoal-400 focus:border-forest-400 focus:bg-white focus:outline-none transition-all duration-200 font-ui"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-ivory-200 rounded-lg transition-colors"
                >
                  <HiX className="text-charcoal-400 text-base" />
                </button>
              )}
            </div>

            {/* Category Tabs */}
            <div className="flex items-center gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex items-center gap-1.5 text-sm font-semibold px-4 py-2.5 rounded-full border-2 transition-all duration-200 font-ui ${
                    activeCategory === cat
                      ? "bg-forest-700 text-white border-forest-700 shadow-btn"
                      : "text-charcoal-600 border-ivory-300 hover:border-forest-300 hover:text-forest-700 bg-white"
                  }`}
                >
                  {cat}
                  <span
                    className={`text-xs font-bold px-1.5 py-0.5 rounded-full ${
                      activeCategory === cat
                        ? "bg-white/25 text-white"
                        : "bg-ivory-200 text-charcoal-500"
                    }`}
                  >
                    {catCount(cat)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-16 bg-ivory-100 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-base text-charcoal-400 mb-8 font-medium font-ui">
            Showing{" "}
            <strong className="text-forest-700">{filtered.length}</strong>{" "}
            product{filtered.length !== 1 ? "s" : ""}
            {search && (
              <span>
                {" "}
                for "<strong>{search}</strong>"
              </span>
            )}
            {activeCategory !== "All" && (
              <span>
                {" "}
                in <strong>{activeCategory}</strong>
              </span>
            )}
          </p>

          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div
                key={`${activeCategory}-${search}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filtered.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-24"
              >
                <span className="text-7xl block mb-5">🔍</span>
                <h3 className="font-display text-2xl font-bold text-charcoal-700 mb-3">
                  No Products Found
                </h3>
                <p className="text-lg text-charcoal-400 mb-7 font-ui">
                  Try adjusting your search or category filter.
                </p>
                <button
                  onClick={() => {
                    setSearch("");
                    setActiveCategory("All");
                  }}
                  className="btn-primary"
                >
                  Clear All Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* B2B CTA */}
      <section className="py-20 bg-dark-gradient">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <span className="eyebrow-light mb-5">📦 Wholesale & B2B</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3 mt-2">
                Looking for Bulk Orders?
              </h2>
              <p className="text-lg text-white/62 max-w-xl leading-relaxed font-ui">
                We supply food manufacturers, restaurants, nutraceutical
                companies, and private label brands. Custom packaging and
                formulations available.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <a
                href="https://wa.me/919723104469?text=Hello%20Hemsrukah!%20I%20am%20interested%20in%20bulk%20orders."
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold px-8 py-4 rounded-full hover:-translate-y-1 transition-all duration-300 text-base shadow-glow-forest font-ui"
              >
                <FaWhatsapp className="text-xl" /> WhatsApp for Bulk Inquiry
              </a>
              <Link to="/contact" className="btn-outline text-base px-8 py-4">
                Send Email Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
