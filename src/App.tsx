import React, { useState, useEffect } from 'react';
import { 
  Phone, MessageCircle, MapPin, Clock, Star, 
  Menu, X, ArrowRight, ExternalLink, ShieldCheck, 
  HeartHandshake, Sparkles, ZoomIn, Compass, Globe
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

/* ==========================================
   BUSINESS CONFIGURATION & DATA SOURCE
   ========================================== */
const BUSINESS_DATA = {
  businessName: "Saqib Garments",
  urduName: "ثاقب گارمنٹس",
  category: "Clothing Store",
  rating: 4.8,
  reviewCount: 62,
  address: "Karachi Company, ALLAH Wala Plaza, Saqib Garments, G-9 Markaz, Islamabad, 44090, Pakistan",
  shortAddress: "Karachi Company, G-9 Markaz, Islamabad",
  phone: "+92 333 5988767",
  whatsappNumber: "923335988767",
  whatsappUrl: "https://wa.me/923335988767",
  googleMapsUrl: "https://maps.google.com/?q=Saqib+Garments+Allah+Wala+Plaza+G-9+Markaz+Islamabad",
  plusCode: "M2QJ+RH Islamabad, Pakistan",
  openingHours: "11:00 AM – 9:00 PM",
  services: ["In-store shopping", "In-store pickup", "Delivery"],
  bioLinkUrl: "https://bio.link/saqibgarments"
};

const COLLECTIONS_DATA = [
  {
    id: "mens-wear",
    title: "Men's Wear",
    subtitle: "Sophisticated Essentials",
    description: "Tailored kurtas, formal shirts, and luxury casual wear designed for the modern gentleman.",
    image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&q=80&w=800",
    itemCount: "Explore Styles"
  },
  {
    id: "kids-wear",
    title: "Kids' Wear",
    subtitle: "Joyful & Comfortable",
    description: "Dignified festive wear and everyday cotton outfits crafted with utmost care for your children.",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&q=80&w=800",
    itemCount: "Explore Styles"
  },
  {
    id: "casual-wear",
    title: "Casual Wear",
    subtitle: "Everyday Elegance",
    description: "Breathable fabrics, contemporary cuts, and effortless styling for daily comfort.",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=800",
    itemCount: "Explore Styles"
  },
  {
    id: "winter-collection",
    title: "Winter Collection",
    subtitle: "Warmth & Prestige",
    description: "Premium tracksuits, warm shawls, and heavyweight cotton fabrics for cooler seasons.",
    image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&q=80&w=800",
    itemCount: "Explore Styles"
  }
];

const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Classic Men's Formal Kurta",
    category: "Men's Wear",
    price: "PKR 4,850",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=700",
    tag: "Bestseller"
  },
  {
    id: 2,
    name: "Premium Cotton Winter Track Suit",
    category: "Winter Collection",
    price: "PKR 6,500",
    sizes: ["M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=700",
    tag: "New Arrival"
  },
  {
    id: 3,
    name: "Boys Festive Kurta Shalwar Set",
    category: "Kids' Wear",
    price: "PKR 3,200",
    sizes: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
    image: "https://images.unsplash.com/photo-1503944583220-7eeec390d8af?auto=format&fit=crop&q=80&w=700",
    tag: "Popular"
  },
  {
    id: 4,
    name: "Executive Casual Button-Down Shirt",
    category: "Casual Wear",
    price: "PKR 3,900",
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=700",
    tag: "Essential"
  },
  {
    id: 5,
    name: "Traditional Waistcoat & Kurta Ensemble",
    category: "Men's Wear",
    price: "PKR 7,800",
    sizes: ["M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=700",
    tag: "Exclusive"
  },
  {
    id: 6,
    name: "Kids Casual Cotton Daily Wear Set",
    category: "Kids' Wear",
    price: "PKR 2,450",
    sizes: ["3-4Y", "5-6Y", "7-8Y", "9-10Y"],
    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&q=80&w=700",
    tag: "Comfortable"
  }
];

const REVIEWS_DATA = [
  {
    name: "Tariq Mahmood",
    rating: 5,
    date: "1 month ago",
    comment: "Excellent clothing quality in Karachi Company. The staff at Saqib Garments is extremely helpful and polite. Fair prices for premium fabrics."
  },
  {
    name: "Ayesha Khan",
    rating: 5,
    date: "2 months ago",
    comment: "Very clean and well-organized shop in G-9 Markaz. Great variety of kids and men's wear. Had a wonderful shopping experience!"
  },
  {
    name: "Bilal Ahmed",
    rating: 5,
    date: "3 months ago",
    comment: "Top-notch customer service and delivery was smooth. The fabric quality exceeded expectations. Highly recommended local clothing destination."
  }
];

const GALLERY_DATA = [
  { id: 1, category: "STORE", title: "Allah Wala Plaza Storefront", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=900" },
  { id: 2, category: "INSIDE", title: "Organized Retail Display", image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=900" },
  { id: 3, category: "PRODUCTS", title: "Premium Fabric Details", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=900" },
  { id: 4, category: "LATEST", title: "New Seasonal Arrivals", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=900" },
  { id: 5, category: "STORE", title: "G-9 Markaz Branch", image: "https://images.unsplash.com/photo-1555529771-835f59fc5efe?auto=format&fit=crop&q=80&w=900" },
  { id: 6, category: "PRODUCTS", title: "Tailored Perfection", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=900" }
];

/* ==========================================
   MAIN APP COMPONENT
   ========================================== */
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [lightboxImage, setLightboxImage] = useState(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = (productName = "") => {
    const text = productName 
      ? `Assalam-o-Alaikum, I am interested in the ${productName}. Please share the price and availability.`
      : `Assalam-o-Alaikum, I would like to inquire about your clothing collection at Saqib Garments, G-9 Markaz.`;
    window.open(`https://wa.me/${BUSINESS_DATA.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F7F2E8] font-sans selection:bg-[#C9A84C] selection:text-[#0B0B0B] antialiased overflow-x-hidden">
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C9A84C] to-[#E5C766] z-50 origin-left"
        style={{ scaleX }}
      />

      {/* ================= NAVBAR ================= */}
      {}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0B0B0B]/90 backdrop-blur-md py-3 shadow-xl border-b border-[#C9A84C]/20' 
          : 'bg-gradient-to-b from-[#0B0B0B]/90 to-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo with Custom SG Icon */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center shadow-md border border-[#C9A84C]/30 group-hover:scale-105 transition-transform">
              <span className="font-bold text-white text-lg tracking-wider">SG</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-white group-hover:text-[#C9A84C] transition-colors leading-none">
                SAQIB GARMENTS
              </span>
              <span className="text-[10px] sm:text-xs tracking-widest uppercase text-[#C9A84C] mt-1">
                G-9 Islamabad
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs font-semibold tracking-widest uppercase text-[#A7A7A7]">
            {['Home', 'Collections', 'Products', 'Gallery', 'Reviews', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="hover:text-[#C9A84C] transition-colors py-1 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C9A84C] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="hidden sm:flex items-center space-x-4">
            <a 
              href={BUSINESS_DATA.bioLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A7A7A7] hover:text-[#C9A84C] transition-colors p-2"
              title="Official Bio Links"
            >
              <Globe className="w-5 h-5" />
            </a>
            <button 
              onClick={() => openWhatsApp()}
              className="flex items-center space-x-2 bg-gradient-to-r from-[#C9A84C] to-[#E5C766] text-[#0B0B0B] px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#F7F2E8] p-2 hover:text-[#C9A84C] transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Slide-down Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#171717] border-b border-[#C9A84C]/20 px-6 py-6"
            >
              <div className="flex flex-col space-y-4">
                {['Home', 'Collections', 'Products', 'Gallery', 'Reviews', 'About', 'Contact'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-semibold tracking-wider text-[#A7A7A7] hover:text-[#C9A84C] transition-colors uppercase border-b border-white/5 pb-2"
                  >
                    {item}
                  </a>
                ))}
                <div className="pt-2 flex flex-col space-y-3">
                  <a 
                    href={BUSINESS_DATA.bioLinkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 bg-[#0B0B0B] border border-[#C9A84C]/40 text-[#F7F2E8] py-3 rounded-xl font-bold text-xs uppercase tracking-wider"
                  >
                    <Globe className="w-4 h-4 text-[#C9A84C]" />
                    <span>Visit Bio Link</span>
                  </a>
                  <button 
                    onClick={() => { setMobileMenuOpen(false); openWhatsApp(); }}
                    className="w-full flex items-center justify-center space-x-2 bg-[#C9A84C] text-[#0B0B0B] py-3 rounded-xl font-bold text-xs uppercase tracking-wider"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Order on WhatsApp</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ================= HERO SECTION ================= */}
      {}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Overlay & Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1920" 
            alt="Saqib Garments Islamabad Luxury Fashion"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/60 to-[#0B0B0B]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(11,11,11,0.8)_100%)]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          
          {/* Eyebrow */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-3 bg-[#171717]/80 border border-[#C9A84C]/30 px-4 py-1.5 rounded-full backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse"></span>
            <span className="text-xs tracking-widest uppercase font-semibold text-[#C9A84C]">
              SAQIB GARMENTS • ISLAMABAD
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
              "Style That Speaks <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A84C] via-[#E5C766] to-[#C9A84C]">
                For Itself."
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-xl text-[#A7A7A7] font-light leading-relaxed">
              "Quality clothing, timeless style and a shopping experience you can trust in the heart of G-9 Markaz."
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <a 
              href="#collections"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-[#C9A84C] to-[#E5C766] text-[#0B0B0B] px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_30px_rgba(201,168,76,0.5)] transition-all duration-300 transform hover:-translate-y-1"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <button 
              onClick={() => openWhatsApp()}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-transparent border border-[#C9A84C]/60 text-[#F7F2E8] px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#C9A84C] hover:text-[#0B0B0B] hover:border-[#C9A84C] transition-all duration-300 transform hover:-translate-y-1"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Order on WhatsApp</span>
            </button>
          </motion.div>

          {/* Trust Badge & Location info */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs text-[#A7A7A7] border-t border-white/10 max-w-3xl mx-auto"
          >
            <div className="flex items-center space-x-2">
              <div className="flex text-[#C9A84C]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-white">4.8 / 5</span>
              <span>(62 Google Reviews)</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-[#C9A84C]" />
              <span className="text-white">G-9 Markaz, Islamabad</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-[#C9A84C]" />
              <span className="text-white">11:00 AM – 9:00 PM</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      {}
      <section className="py-20 bg-[#171717] border-y border-[#C9A84C]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <ShieldCheck className="w-8 h-8 text-[#C9A84C]" />,
                title: "QUALITY CLOTHING",
                desc: "Handpicked premium fabrics engineered for lasting comfort and durability."
              },
              {
                icon: <Sparkles className="w-8 h-8 text-[#C9A84C]" />,
                title: "FAIR PRICES",
                desc: "Honest, competitive pricing offering exceptional value for true quality."
              },
              {
                icon: <HeartHandshake className="w-8 h-8 text-[#C9A84C]" />,
                title: "HELPFUL SERVICE",
                desc: "Dedicated, courteous staff ready to assist with sizing and style matching."
              },
              {
                icon: <MapPin className="w-8 h-8 text-[#C9A84C]" />,
                title: "CONVENIENT SHOPPING",
                desc: "Located centrally in G-9 Markaz with in-store pickup & direct delivery."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#0B0B0B] p-8 rounded-2xl border border-[#C9A84C]/20 hover:border-[#C9A84C] transition-all duration-300 group"
              >
                <div className="mb-6 p-3 bg-[#171717] rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2 tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-xs text-[#A7A7A7] leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COLLECTIONS ================= */}
      {}
      <section id="collections" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">Curated Wardrobe</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">Explore Our Collections</h2>
          <div className="w-16 h-0.5 bg-[#C9A84C] mx-auto"></div>
          <p className="text-sm text-[#A7A7A7]">
            Discover refined silhouettes and exquisite traditional and modern attire tailored for every member of the family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COLLECTIONS_DATA.map((col, idx) => (
            <motion.div 
              key={col.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group overflow-hidden rounded-3xl h-[450px] border border-[#C9A84C]/20 cursor-pointer"
              onClick={() => openWhatsApp(col.title)}
            >
              <img 
                src={col.image} 
                alt={col.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/40 to-transparent transition-opacity duration-500 group-hover:opacity-95" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C] mb-1">
                  {col.subtitle}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                  {col.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A7A7A7] mb-6 max-w-md line-clamp-2">
                  {col.description}
                </p>
                <div className="flex items-center space-x-2 text-xs font-bold tracking-widest uppercase text-[#C9A84C] group-hover:translate-x-2 transition-transform duration-300">
                  <span>{col.itemCount}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Gold border accent on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#C9A84C] rounded-3xl transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FEATURED PRODUCTS ================= */}
      {}
      <section id="products" className="py-24 bg-[#171717] border-t border-[#C9A84C]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">Featured Styles</span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">Handpicked For You</h2>
              <div className="w-16 h-0.5 bg-[#C9A84C]"></div>
            </div>
            <p className="text-xs sm:text-sm text-[#A7A7A7] max-w-md mt-4 md:mt-0">
              Sample showcase of our premium inventory available at Allah Wala Plaza, G-9 Markaz. Contact via WhatsApp for instant inquiries and sizing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS_DATA.map((product, idx) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#0B0B0B] rounded-2xl overflow-hidden border border-[#C9A84C]/20 hover:border-[#C9A84C] transition-all duration-500 flex flex-col group"
              >
                {/* Product Image Container */}
                <div className="relative h-72 overflow-hidden bg-[#171717]">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#0B0B0B]/80 backdrop-blur-sm border border-[#C9A84C]/40 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest text-[#C9A84C]">
                    {product.tag}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#A7A7A7]">
                      {product.category}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-white mt-1 mb-2">
                      {product.name}
                    </h3>
                    <div className="text-sm font-bold text-[#C9A84C]">
                      {product.price}
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-white/5">
                    <div className="flex items-center justify-between text-xs text-[#A7A7A7]">
                      <span>Available Sizes:</span>
                      <span className="font-semibold text-white">{product.sizes.join(", ")}</span>
                    </div>

                    <button 
                      onClick={() => openWhatsApp(product.name)}
                      className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-[#C9A84C] to-[#E5C766] text-[#0B0B0B] py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] transition-all duration-300 transform active:scale-95"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Order on WhatsApp</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CUSTOMER REVIEWS ================= */}
      {}
      <section id="reviews" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#171717] rounded-3xl border border-[#C9A84C]/30 p-8 sm:p-16 relative overflow-hidden">
          
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">Verified Reputation</span>
            <div className="flex items-center justify-center space-x-2">
              <span className="font-serif text-5xl font-bold text-white">4.8</span>
              <div className="flex flex-col items-start">
                <div className="flex text-[#C9A84C]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-[#A7A7A7] mt-1">62 Google Reviews</span>
              </div>
            </div>
            <h2 className="font-serif text-3xl font-bold text-white">What Our Customers Say</h2>
            <div className="w-16 h-0.5 bg-[#C9A84C] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {REVIEWS_DATA.map((rev, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#0B0B0B] p-6 rounded-2xl border border-[#C9A84C]/20 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex text-[#C9A84C]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[#A7A7A7] italic leading-relaxed">
                    "{rev.comment}"
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="font-serif font-bold text-white text-sm">{rev.name}</span>
                  <span className="text-[10px] text-[#A7A7A7]">{rev.date}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href={BUSINESS_DATA.googleMapsUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-transparent border border-[#C9A84C] text-[#C9A84C] px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#C9A84C] hover:text-[#0B0B0B] transition-all duration-300"
            >
              <span>View All 62 Google Reviews</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

      {/* ================= GALLERY ================= */}
      {}
      <section id="gallery" className="py-24 bg-[#171717] border-t border-[#C9A84C]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">Visual Showcase</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">Store & Collection Gallery</h2>
            <div className="w-16 h-0.5 bg-[#C9A84C] mx-auto"></div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {["ALL", "STORE", "INSIDE", "PRODUCTS", "LATEST"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-[#C9A84C] text-[#0B0B0B]' 
                    : 'bg-[#0B0B0B] text-[#A7A7A7] border border-[#C9A84C]/20 hover:border-[#C9A84C]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_DATA.filter(item => activeCategory === "ALL" || item.category === activeCategory).map((item) => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightboxImage(item)}
                className="relative h-80 rounded-2xl overflow-hidden cursor-pointer group border border-[#C9A84C]/20"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#C9A84C] mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-white flex items-center justify-between">
                    <span>{item.title}</span>
                    <ZoomIn className="w-5 h-5 text-[#C9A84C]" />
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0B0B0B]/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
              <button 
                onClick={() => setLightboxImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-[#C9A84C] transition-colors p-2"
                aria-label="Close Lightbox"
              >
                <X className="w-8 h-8" />
              </button>
              <img 
                src={lightboxImage.image} 
                alt={lightboxImage.title}
                className="max-h-[75vh] w-auto object-contain rounded-2xl border border-[#C9A84C]/30"
              />
              <div className="mt-4 text-center">
                <span className="text-xs uppercase tracking-widest text-[#C9A84C]">{lightboxImage.category}</span>
                <h3 className="font-serif text-xl font-bold text-white mt-1">{lightboxImage.title}</h3>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= ABOUT SECTION ================= */}
      {}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">Local Clothing Destination</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
              Your Local Clothing Destination in G-9 Markaz
            </h2>
            <div className="w-16 h-0.5 bg-[#C9A84C]"></div>
            <p className="text-sm sm:text-base text-[#A7A7A7] leading-relaxed">
              Located conveniently in Allah Wala Plaza, Karachi Company, G-9 Markaz, Islamabad, <strong className="text-white">Saqib Garments</strong> has earned the trust of families across the capital with a stellar 4.8-star rating from over 62 verified customer reviews. We specialize in providing quality attire, helpful in-store shopping, and prompt order assistance.
            </p>
            <div className="pt-2">
              <a 
                href={BUSINESS_DATA.bioLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#171717] border border-[#C9A84C]/40 text-[#C9A84C] px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-[#C9A84C] hover:text-[#0B0B0B] transition-all"
              >
                <Globe className="w-4 h-4" />
                <span>Visit Official Bio Links</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="bg-[#171717] p-6 rounded-2xl border border-[#C9A84C]/20">
                <div className="font-serif text-3xl font-bold text-[#C9A84C] mb-1">4.8 ★</div>
                <div className="text-xs text-[#A7A7A7]">Google Rating Score</div>
              </div>
              <div className="bg-[#171717] p-6 rounded-2xl border border-[#C9A84C]/20">
                <div className="font-serif text-3xl font-bold text-[#C9A84C] mb-1">62+</div>
                <div className="text-xs text-[#A7A7A7]">Verified Reviews</div>
              </div>
            </div>
          </div>

          <div className="relative h-[450px] rounded-3xl overflow-hidden border border-[#C9A84C]/30">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=900" 
              alt="Saqib Garments Store Front"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#0B0B0B]/90 backdrop-blur-md rounded-2xl border border-[#C9A84C]/30 flex items-center justify-between">
              <div>
                <h4 className="font-serif font-bold text-white">Allah Wala Plaza</h4>
                <p className="text-xs text-[#A7A7A7]">G-9 Markaz, Islamabad</p>
              </div>
              <a 
                href={BUSINESS_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C9A84C] text-[#0B0B0B] p-3 rounded-xl hover:scale-105 transition-transform"
                aria-label="Get Directions"
              >
                <Compass className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LOCATION & CONTACT ================= */}
      {}
      <section id="contact" className="py-24 bg-[#171717] border-t border-[#C9A84C]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">Visit Our Store</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">Location & Contact</h2>
            <div className="w-16 h-0.5 bg-[#C9A84C] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Address Card */}
            <div className="bg-[#0B0B0B] p-8 rounded-3xl border border-[#C9A84C]/20 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="p-3 bg-[#171717] rounded-xl w-fit">
                  <MapPin className="w-6 h-6 text-[#C9A84C]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">Store Address</h3>
                <p className="text-xs sm:text-sm text-[#A7A7A7] leading-relaxed">
                  {BUSINESS_DATA.address}
                </p>
                <p className="text-xs text-[#C9A84C] font-mono">
                  Plus Code: {BUSINESS_DATA.plusCode}
                </p>
              </div>

              <a 
                href={BUSINESS_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 bg-[#171717] border border-[#C9A84C]/40 text-[#F7F2E8] py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#C9A84C] hover:text-[#0B0B0B] transition-colors"
              >
                <span>Get Directions</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Hours Card */}
            <div className="bg-[#0B0B0B] p-8 rounded-3xl border border-[#C9A84C]/20 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="p-3 bg-[#171717] rounded-xl w-fit">
                  <Clock className="w-6 h-6 text-[#C9A84C]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">Opening Hours</h3>
                <p className="text-xs sm:text-sm text-[#A7A7A7]">
                  Open 7 Days a Week
                </p>
                <div className="bg-[#171717] p-4 rounded-xl border border-white/5">
                  <div className="text-sm font-bold text-white">{BUSINESS_DATA.openingHours}</div>
                  <div className="text-[10px] text-[#C9A84C] mt-1">In-store shopping & pickup available</div>
                </div>
              </div>

              <div className="text-xs text-[#A7A7A7] flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span>Open Now for Customers</span>
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="bg-[#0B0B0B] p-8 rounded-3xl border border-[#C9A84C]/20 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="p-3 bg-[#171717] rounded-xl w-fit">
                  <Phone className="w-6 h-6 text-[#C9A84C]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">Direct Connect</h3>
                <p className="text-xs sm:text-sm text-[#A7A7A7]">
                  Call or message us directly on WhatsApp for immediate assistance.
                </p>
                <div className="space-y-2 font-mono text-sm text-white">
                  <div>{BUSINESS_DATA.phone}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <a 
                  href={`tel:${BUSINESS_DATA.phone}`}
                  className="flex items-center justify-center space-x-2 bg-[#171717] border border-[#C9A84C]/40 text-[#F7F2E8] py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#C9A84C] hover:text-[#0B0B0B] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
                <button 
                  onClick={() => openWhatsApp()}
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#C9A84C] to-[#E5C766] text-[#0B0B0B] py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      {}
      <footer className="bg-[#0B0B0B] border-t border-[#C9A84C]/20 pt-16 pb-24 lg:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center shadow-md">
                <span className="font-bold text-white text-sm">SG</span>
              </div>
              <span className="font-serif text-lg font-bold text-white tracking-wider">SAQIB GARMENTS</span>
            </div>
            <p className="text-xs text-[#A7A7A7] leading-relaxed">
              "Quality clothing. Timeless style." Your trusted clothing destination in G-9 Markaz, Islamabad.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2 text-xs text-[#A7A7A7]">
              {['Home', 'Collections', 'Products', 'Gallery', 'Reviews', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-[#C9A84C] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-widest">Store Hours</h4>
            <p className="text-xs text-[#A7A7A7]">
              Monday – Sunday<br />
              {BUSINESS_DATA.openingHours}
            </p>
            <div className="text-xs text-[#C9A84C]">
              Allah Wala Plaza, Karachi Company, G-9 Markaz, Islamabad
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-widest">Connect</h4>
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => openWhatsApp()}
                className="w-10 h-10 rounded-full bg-[#171717] border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0B0B0B] transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
              </button>
              <a 
                href={BUSINESS_DATA.bioLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#171717] border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0B0B0B] transition-all"
                title="Official Bio Links"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
            <p className="text-[10px] text-[#A7A7A7]">
              Phone: {BUSINESS_DATA.phone}
            </p>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A7A7A7]">
          <p>© 2026 Saqib Garments. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">G-9 Markaz, Islamabad, Pakistan</p>
        </div>
      </footer>

      {/* ================= FLOATING WHATSAPP & MOBILE ACTION BAR ================= */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
        <button 
          onClick={() => openWhatsApp()}
          className="relative group bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-current" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#0B0B0B] border border-[#C9A84C]/40 text-[#F7F2E8] text-xs font-bold rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
            Chat on WhatsApp
          </span>
        </button>
      </div>

      {/* Mobile Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0B0B0B]/95 backdrop-blur-md border-t border-[#C9A84C]/30 py-3 px-4 flex items-center justify-around sm:hidden">
        <a 
          href={`tel:${BUSINESS_DATA.phone}`}
          className="flex flex-col items-center justify-center text-[#F7F2E8] hover:text-[#C9A84C] text-[10px] uppercase font-bold tracking-wider"
        >
          <Phone className="w-5 h-5 mb-1 text-[#C9A84C]" />
          <span>Call</span>
        </a>
        <div className="w-[1px] h-8 bg-white/10"></div>
        <button 
          onClick={() => openWhatsApp()}
          className="flex flex-col items-center justify-center text-[#F7F2E8] hover:text-[#C9A84C] text-[10px] uppercase font-bold tracking-wider"
        >
          <MessageCircle className="w-5 h-5 mb-1 text-[#25D366]" />
          <span>WhatsApp</span>
        </button>
        <div className="w-[1px] h-8 bg-white/10"></div>
        <a 
          href={BUSINESS_DATA.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-[#F7F2E8] hover:text-[#C9A84C] text-[10px] uppercase font-bold tracking-wider"
        >
          <MapPin className="w-5 h-5 mb-1 text-[#C9A84C]" />
          <span>Directions</span>
        </a>
      </div>

    </div>
  );
}