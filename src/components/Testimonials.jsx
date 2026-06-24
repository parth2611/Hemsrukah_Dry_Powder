import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Nutritionist, Mumbai",
    avatar: "PS",
    color: "from-forest-700 to-forest-950",
    rating: 5,
    text: "Hemsrukah's Moringa powder has the most vivid, intense green colour I've ever seen in a commercial product — a clear sign of exceptional cold-processing and freshness. My clients consistently report better energy within weeks. My top recommendation.",
  },
  {
    name: "Rajesh Patel",
    role: "Restaurant Owner, Ahmedabad",
    avatar: "RP",
    color: "from-gold-600 to-gold-800",
    rating: 5,
    text: "We use Hemsrukah's tomato, onion and garlic powders in our kitchen daily. The flavour concentration is extraordinary — one tablespoon does the work of three. The ISO certification and clean label give us full confidence to serve our customers.",
  },
  {
    name: "Dr. Ananya Iyer",
    role: "Ayurvedic Physician, Bangalore",
    avatar: "AI",
    color: "from-forest-800 to-forest-950",
    rating: 5,
    text: "As an Ayurvedic practitioner, purity is everything. Hemsrukah's Amla and Beetroot powders are part of my daily protocol. Zero fillers, zero additives — just pure concentrated nutrition. The FSSAI certification and no-preservatives guarantee make this brand exceptional.",
  },
  {
    name: "Sunita Mehta",
    role: "Health Coach & Wellness Blogger",
    avatar: "SM",
    color: "from-sage-600 to-forest-800",
    rating: 5,
    text: "I tested multiple brands before settling on Hemsrukah. The difference is unmistakable — their Guava powder actually smells and tastes like fresh guava. The 155% Vitamin C content is verified on the label. My community loves these products.",
  },
  {
    name: "Vikram Singh",
    role: "Sports Nutritionist, Delhi",
    avatar: "VS",
    color: "from-forest-700 to-forest-900",
    rating: 5,
    text: "Hemsrukah Beetroot Powder with 230% daily iron is a game-changer for my athlete clients. Pre-workout nitrate loading has never been more accessible. Clean label, great solubility, genuine results. A brand that truly understands sports nutrition.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-hero-gradient overflow-hidden relative">
      <div className="absolute inset-0 opacity-8">
        <div className="absolute top-10 left-10 w-72 h-72 bg-forest-500 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold-500 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <SectionTitle
          eyebrow="✨ Customer Reviews"
          title="Trusted by"
          highlight="Health Professionals"
          subtitle="What nutritionists, chefs and wellness experts say about Hemsrukah."
          light
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-14"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white/8 backdrop-blur-md border border-white/10 rounded-3xl p-7 h-full hover:bg-white/12 transition-colors duration-300">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i} className="text-gold-400 text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                  <FaQuoteLeft className="text-forest-400 text-2xl mb-4" />
                  <p className="text-white/78 text-base leading-relaxed mb-6 italic font-ui">
                    {t.text}
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-base flex-shrink-0 font-ui`}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-base font-ui">
                        {t.name}
                      </p>
                      <p className="text-white/45 text-sm font-ui">{t.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
