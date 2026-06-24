import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import SectionTitle from "../components/SectionTitle";

const PRODUCTS = [
  "Raw Banana Powder",
  "Raw Sapota (Chikoo) Powder",
  "Raw Guava Powder",
  "Raw Amla Powder",
  "Raw Moringa Powder",
  "Raw Tomato Powder",
  "Raw Beetroot Powder",
  "Raw Carrot Powder",
  "Raw Pudina Powder",
  "Raw Garlic Powder",
  "Raw White Onion Powder",
  "Raw Red Onion Powder",
  "Raw Ginger Powder",
  "Multiple Products",
  "Custom / Other",
];
const INQUIRY_TYPES = [
  "General Inquiry",
  "Bulk / B2B Order",
  "Product Sample Request",
  "Private Labelling",
  "Export Inquiry",
  "Distributor Inquiry",
];
const INIT = {
  name: "",
  company: "",
  email: "",
  phone: "",
  inquiryType: "",
  product: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(INIT);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    document.title = "Contact Us | Hemsrukah™";
    window.scrollTo(0, 0);
  }, []);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    if (!form.message.trim()) e.message = "Please describe your inquiry";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    const msg = `*New Inquiry — Hemsrukah Website*\n\n*Name:* ${form.name}\n*Company:* ${form.company || "N/A"}\n*Email:* ${form.email}\n*Phone:* ${form.phone}\n*Inquiry Type:* ${form.inquiryType || "General"}\n*Product Interest:* ${form.product || "N/A"}\n*Message:* ${form.message}`;
    setStatus("sending");
    setTimeout(() => {
      window.open(url, "_blank");
      setStatus("success");
      setForm(INIT);
      // setStatus("success");
      // setForm(INIT);
      // window.open(
      //   `https://wa.me/919723104469?text=${encodeURIComponent(msg)}`,
      //   "_blank",
      // );
    }, 900);
  };

  return (
    <main>
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-80 h-80 bg-gold-400 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 left-10 w-72 h-72 bg-forest-400 rounded-full blur-3xl animate-float-slow" />
        </div>
        <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow-light">📞 Get In Touch</span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-5 leading-tight mt-2">
              Let's <span className="text-gradient-gold">Connect</span>
            </h1>
            <p className="text-xl text-white/68 leading-relaxed font-ui">
              Retail buyer, food manufacturer, nutritionist, or distributor —
              we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick contact strip */}
      <div className="bg-white border-b border-ivory-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: <FaPhone className="text-forest-600" />,
                label: "Call Us",
                val: "+91 97231 04469",
                href: "tel:+919723104469",
              },
              {
                icon: <FaEnvelope className="text-forest-600" />,
                label: "Email",
                val: "info@hemsrukah.com",
                href: "mailto:info@hemsrukah.com",
              },
              {
                icon: <FaWhatsapp className="text-green-600" />,
                label: "WhatsApp",
                val: "Chat Now",
                href: "https://wa.me/919723104469",
              },
              {
                icon: <span className="text-lg">🕘</span>,
                label: "Hours",
                val: "Mon–Sat, 9AM–6PM",
                href: null,
              },
            ].map(({ icon, label, val, href }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-forest-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-charcoal-400 mb-0.5 font-ui">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : "_self"}
                      rel="noreferrer"
                      className="text-base font-semibold text-forest-700 hover:text-forest-900 transition-colors font-ui"
                    >
                      {val}
                    </a>
                  ) : (
                    <p className="text-base font-semibold text-charcoal-700 font-ui">
                      {val}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <section className="py-20 bg-ivory-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form — 3 cols */}
            <div className="lg:col-span-3">
              <motion.div
                className="bg-white rounded-3xl p-8 shadow-card border border-ivory-200"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-3xl font-bold text-charcoal-900 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-base text-charcoal-400 mb-8 leading-relaxed font-ui">
                  Fill in the form — your message will be forwarded via WhatsApp
                  for the fastest response.
                </p>

                {status === "success" ? (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <span className="text-7xl block mb-5">🎉</span>
                    <h3 className="font-display text-2xl font-bold text-forest-800 mb-3">
                      Thank You!
                    </h3>
                    <p className="text-lg text-charcoal-500 max-w-md mx-auto mb-8 leading-relaxed font-ui">
                      Your inquiry has been received. Your WhatsApp chat should
                      open shortly. We respond within one business day.
                    </p>
                    <button
                      className="btn-primary"
                      onClick={() => setStatus("idle")}
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-5"
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-charcoal-700 mb-2 font-ui">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className={`input-field ${errors.name ? "border-red-400 bg-red-50" : ""}`}
                        />
                        {errors.name && (
                          <p className="text-sm text-red-500 mt-1.5 font-medium font-ui">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-charcoal-700 mb-2 font-ui">
                          Company / Brand
                        </label>
                        <input
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Optional"
                          className="input-field"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-charcoal-700 mb-2 font-ui">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className={`input-field ${errors.email ? "border-red-400 bg-red-50" : ""}`}
                        />
                        {errors.email && (
                          <p className="text-sm text-red-500 mt-1.5 font-medium font-ui">
                            {errors.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-charcoal-700 mb-2 font-ui">
                          Phone / WhatsApp{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          className={`input-field ${errors.phone ? "border-red-400 bg-red-50" : ""}`}
                        />
                        {errors.phone && (
                          <p className="text-sm text-red-500 mt-1.5 font-medium font-ui">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-charcoal-700 mb-2 font-ui">
                          Inquiry Type
                        </label>
                        <select
                          name="inquiryType"
                          value={form.inquiryType}
                          onChange={handleChange}
                          className="input-field"
                        >
                          <option value="">Select type…</option>
                          {INQUIRY_TYPES.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-charcoal-700 mb-2 font-ui">
                          Product Interest
                        </label>
                        <select
                          name="product"
                          value={form.product}
                          onChange={handleChange}
                          className="input-field"
                        >
                          <option value="">Select product…</option>
                          {PRODUCTS.map((p) => (
                            <option key={p} value={p}>
                              {p}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-charcoal-700 mb-2 font-ui">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us about your requirements, quantity needed, preferred packing, delivery location, etc."
                        className={`input-field resize-none ${errors.message ? "border-red-400 bg-red-50" : ""}`}
                      />
                      {errors.message && (
                        <p className="text-sm text-red-500 mt-1.5 font-medium font-ui">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full flex items-center justify-center gap-3 bg-btn-forest text-white font-bold py-5 rounded-2xl text-lg shadow-btn hover:shadow-btn-hover hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed font-ui"
                    >
                      {status === "sending" ? (
                        <>
                          <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />{" "}
                          Sending…
                        </>
                      ) : (
                        <>
                          <FaWhatsapp className="text-2xl" /> Send via WhatsApp
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>

            {/* Sidebar — 2 cols */}
            <div className="lg:col-span-2 space-y-6">
              {/* Info Card */}
              <motion.div
                className="bg-white rounded-3xl overflow-hidden shadow-card border border-ivory-200"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div
                  className="px-6 py-5 text-white"
                  style={{
                    background: "linear-gradient(135deg, #1A3C34, #0B2018)",
                  }}
                >
                  <h3 className="font-display text-xl font-bold mb-1">
                    Office & Factory
                  </h3>
                  <p className="text-white/55 text-sm font-ui">
                    Natesh Agro Foods Industries LLP
                  </p>
                </div>
                <div className="p-6 space-y-5">
                  {[
                    {
                      icon: <FaMapMarkerAlt className="text-forest-500" />,
                      label: "Address",
                      val: "Navkar Business Park-2, Pl-3, Navagam, Kamrej, Surat, Gujarat, India",
                    },
                    {
                      icon: <FaPhone className="text-forest-500" />,
                      label: "Phone",
                      val: "+91 97231 04469",
                      href: "tel:+919723104469",
                    },
                    {
                      icon: <FaEnvelope className="text-forest-500" />,
                      label: "Email",
                      val: "info@hemsrukah.com",
                      href: "mailto:info@hemsrukah.com",
                    },
                    {
                      icon: <span>🕘</span>,
                      label: "Hours",
                      val: "Mon–Sat: 9:00 AM – 6:00 PM IST",
                    },
                    {
                      icon: <span>📋</span>,
                      label: "FSSAI",
                      val: "Lic. No. 10726997000301",
                    },
                  ].map(({ icon, label, val, href }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-forest-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        {icon}
                      </div>
                      <div>
                        <p className="text-xs font-bold tracking-widest uppercase text-charcoal-400 mb-0.5 font-ui">
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            className="text-base font-semibold text-forest-700 hover:text-forest-900 transition-colors font-ui"
                          >
                            {val}
                          </a>
                        ) : (
                          <p className="text-base text-charcoal-700 font-medium leading-relaxed font-ui">
                            {val}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* WhatsApp Card */}
              <motion.div
                className="rounded-3xl p-6 text-white shadow-glow-forest"
                style={{
                  background:
                    "linear-gradient(135deg, #2D6A4F 0%, #0B2018 100%)",
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <FaWhatsapp className="text-5xl mb-4 opacity-90" />
                <h3 className="font-display text-xl font-bold mb-2">
                  Prefer WhatsApp?
                </h3>
                <p className="text-white/75 text-base leading-relaxed mb-5 font-ui">
                  Chat directly with our team for instant replies on pricing,
                  samples, and bulk orders.
                </p>
                <a
                  href="https://wa.me/919723104469"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-white text-forest-800 font-bold py-3.5 px-6 rounded-2xl hover:bg-ivory-100 transition-colors text-base font-ui"
                >
                  <FaWhatsapp className="text-xl text-green-600" /> Open
                  WhatsApp Chat
                </a>
              </motion.div>

              {/* Map placeholder */}
              <motion.div
                className="bg-white rounded-3xl overflow-hidden shadow-card border border-ivory-200"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="h-48 bg-gradient-to-br from-forest-50 to-sage-100 flex flex-col items-center justify-center gap-3 p-6">
                  <span className="text-4xl">📍</span>
                  <p className="text-base text-charcoal-600 text-center font-medium leading-relaxed font-ui">
                    Navkar Business Park-2, Pl-3,
                    <br />
                    Navagam, Kamrej, Surat, Gujarat
                  </p>
                  <a
                    href="https://maps.google.com/?q=Navkar+Business+Park+Kamrej+Surat+Gujarat"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-sm font-bold text-forest-600 hover:text-forest-800 transition-colors font-ui"
                  >
                    Open in Google Maps <HiArrowRight />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
