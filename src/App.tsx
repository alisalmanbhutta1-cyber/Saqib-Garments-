import React, { useState, useEffect } from 'react';
import { 
  Phone, MessageCircle, MapPin, Clock, Star, 
  Menu, X, ArrowRight, ExternalLink, ShieldCheck, 
  HeartHandshake, Sparkles, ZoomIn, Compass, Globe,
  Instagram, Facebook, Mail, Share2
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

const TikTokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.01.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.66-.52 3.32-1.51 4.68-1 1.36-2.47 2.33-4.14 2.73-1.66.4-3.41.22-4.96-.5-1.55-.73-2.76-2-3.41-3.53-.65-1.54-.7-3.27-.14-4.83.56-1.57 1.68-2.88 3.12-3.64 1.44-.76 3.11-1.01 4.71-.7v4.11c-.72-.31-1.57-.34-2.32-.08-.75.25-1.37.81-1.7 1.52-.33.72-.34 1.55-.03 2.29.3.74.91 1.28 1.63 1.51.72.22 1.53.11 2.16-.29.64-.4 1.1-1.06 1.24-1.83.05-.28.07-.56.07-.85V.02h-.01z"/>
  </svg>
);

const WhatsAppIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.887.525 3.65 1.435 5.152L2 22l4.985-1.408A9.953 9.953 0 0 0 12.001 22C17.523 22 22 17.523 22 12S17.523 2 12.001 2zm0 18.157a8.13 8.13 0 0 1-4.152-1.14l-.298-.177-3.083.871.826-3.02-.194-.31A8.106 8.106 0 0 1 3.845 12c0-4.501 3.653-8.157 8.156-8.157 4.502 0 8.157 3.656 8.157 8.157 0 4.502-3.655 8.157-8.157 8.157z"/>
  </svg>
);

/* Precision Brand Logo Component matching LOGO.png (Bright Red Background & Bold White SG) */
const BrandLogo = ({ className = "w-10 h-10" }) => (
  <div className={`relative flex items-center justify-center bg-[#FF0000] rounded-xl overflow-hidden shadow-md select-none shrink-0 ${className}`}>
    <svg 
      viewBox="0 0 500 500" 
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="500" height="500" fill="#FF0000" />
      <text 
        x="250" 
        y="285" 
        textAnchor="middle" 
        dominantBaseline="middle" 
        fill="#FFFFFF" 
        fontFamily="'Anton', 'Impact', 'Arial Black', sans-serif" 
        fontWeight="900" 
        fontSize="310" 
        letterSpacing="-6"
      >
        SG
      </text>
    </svg>
  </div>
);

const BUSINESS_DATA = {
  businessName: "Saqib Garments",
  urduName: "ثاقب گارمنٹس",
  category: "Clothing Store",
  rating: 4.8,
  reviewCount: 62,
  locations: [
    {
      name: "Downtown Branch",
      address: "Shop 11, Downtown G-9, Shandar Plaza, G-9 Markaz, Islamabad, 44090, Pakistan",
      shortAddress: "Downtown, G-9 Markaz",
      mapUrl: "https://maps.app.goo.gl/dUkvgmvmPtdYYQuA6"
    },
    {
      name: "Allah Wala Plaza Branch",
      address: "Karachi Company, ALLAH Wala Plaza, Saqib Garments, G-9 Markaz, Islamabad, 44090, Pakistan",
      shortAddress: "Allah Wala Plaza, G-9 Markaz",
      mapUrl: "https://maps.app.goo.gl/CTwTQGgqQCXoGrMD6"
    }
  ],
  address: "Shop 11, Downtown G-9, Shandar Plaza, G-9 Markaz, Islamabad, 44090, Pakistan",
  shortAddress: "Shandar Plaza, G-9 Markaz, Islamabad",
  phone: "+92 333 5988767",
  whatsappNumber: "923335988767",
  whatsappUrl: "https://wa.me/923335988767",
  googleMapsUrl: "https://maps.app.goo.gl/dUkvgmvmPtdYYQuA6",
  plusCode: "M2QJ+RH Islamabad, Pakistan",
  openingHours: "11:00 AM – 9:00 PM",
  services: ["In-store shopping", "In-store pickup", "Delivery"],
  bioLinkUrl: "https://bio.link/saqibgarments"
};

const COLLECTIONS_DATA = [
  {
    id: "active-wear",
    title: "Active Wear",
    subtitle: "Performance & Comfort",
    description: "High-quality, breathable fabrics designed to support your most intense workouts.",
    image: "https://images.pexels.com/photos/20400652/pexels-photo-20400652.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "sports-wear",
    title: "Sports Wear",
    subtitle: "Athletic Excellence",
    description: "Premium athletic gear engineered for maximum mobility and endurance.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "casual-wear",
    title: "Casual Wear",
    subtitle: "Everyday Elegance",
    description: "Breathable fabrics, contemporary cuts, and effortless styling for daily comfort.",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "custom-wear",
    title: "Custom Wear",
    subtitle: "Tailored For You",
    description: "Personalized fits and custom designs crafted exactly to your specifications.",
    image: "https://images.pexels.com/photos/35162974/pexels-photo-35162974.jpeg?auto=compress&cs=tinysrgb&w=800"
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

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <div className="min-h-screen bg-[#0B0B0B] text-[#F7F2E8] font-sans selection:bg-[#FF0000] selection:text-[#0B0B0B] antialiased overflow-x-hidden">

      {/* Anton font setup for bold condensed typography */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
        .font-serif {
          font-family: 'Anton', sans-serif;
          letter-spacing: 0.02em;
        }
      `}</style>

      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FF0000] to-[#FF4438] z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Header Bar */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0B0B0B]/90 backdrop-blur-md py-3 shadow-xl border-b border-[#FF0000]/20' 
          : 'bg-gradient-to-b from-[#0B0B0B]/90 to-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#home" className="flex items-center space-x-3 group">
            <BrandLogo className="w-10 h-10 border border-[#FF0000]/30 group-hover:scale-105 transition-transform" />
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-white group-hover:text-[#FF0000] transition-colors leading-none">
                SAQIB GARMENTS
              </span>
              <span className="text-[10px] sm:text-xs tracking-widest uppercase text-[#FF0000] mt-1">
                G-9 Islamabad
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs font-semibold tracking-widest uppercase text-[#A7A7A7]">
            {['Home', 'Collections', 'About', 'Reviews', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="hover:text-[#FF0000] transition-colors py-1 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FF0000] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="hidden sm:flex items-center space-x-4">
            <a 
              href={BUSINESS_DATA.bioLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A7A7A7] hover:text-[#FF0000] transition-colors p-2"
              title="Official Bio Links"
            >
              <Globe className="w-5 h-5" />
            </a>
            <button 
              onClick={() => openWhatsApp()}
              className="flex items-center space-x-2 bg-gradient-to-r from-[#FF0000] to-[#FF4438] text-[#0B0B0B] px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase hover:shadow-[0_0_20px_rgba(255,0,0,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#F7F2E8] p-2 hover:text-[#FF0000] transition-colors focus:outline-none"
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
              className="lg:hidden bg-[#171717] border-b border-[#FF0000]/20 px-6 py-6"
            >
              <div className="flex flex-col space-y-4">
                {['Home', 'Collections', 'About', 'Reviews', 'Contact'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-semibold tracking-wider text-[#A7A7A7] hover:text-[#FF0000] transition-colors uppercase border-b border-white/5 pb-2"
                  >
                    {item}
                  </a>
                ))}
                <div className="pt-2 flex flex-col space-y-3">
                  <a 
                    href={BUSINESS_DATA.bioLinkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 bg-[#0B0B0B] border border-[#FF0000]/40 text-[#F7F2E8] py-3 rounded-xl font-bold text-xs uppercase tracking-wider"
                  >
                    <Globe className="w-4 h-4 text-[#FF0000]" />
                    <span>Visit Bio Link</span>
                  </a>
                  <button 
                    onClick={() => { setMobileMenuOpen(false); openWhatsApp(); }}
                    className="w-full flex items-center justify-center space-x-2 bg-[#FF0000] text-[#0B0B0B] py-3 rounded-xl font-bold text-xs uppercase tracking-wider"
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

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1679212622264-646085f5653f?auto=format&fit=crop&q=80&w=1920" 
            alt="Saqib Garments Islamabad Men's Fashion Collection"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/60 to-[#0B0B0B]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(11,11,11,0.8)_100%)]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-3 bg-[#171717]/80 border border-[#FF0000]/30 px-4 py-1.5 rounded-full backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF0000] animate-pulse"></span>
            <span className="text-xs tracking-widest uppercase font-semibold text-[#FF0000]">
              SAQIB GARMENTS • ISLAMABAD
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
              "Where fashion <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0000] via-[#FF4438] to-[#FF0000]">
                and fitness meet."
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-xl text-[#A7A7A7] font-light leading-relaxed">
              "Quality clothing, timeless style and a shopping experience you can trust in the heart of G-9 Markaz."
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <a 
              href="#about"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-[#FF0000] to-[#FF4438] text-[#0B0B0B] px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_30px_rgba(255,0,0,0.5)] transition-all duration-300 transform hover:-translate-y-1"
            >
              <span>Get Directions</span>
              <Compass className="w-4 h-4" />
            </a>
            <button 
              onClick={() => openWhatsApp()}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-transparent border border-[#FF0000]/60 text-[#F7F2E8] px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#FF0000] hover:text-[#0B0B0B] hover:border-[#FF0000] transition-all duration-300 transform hover:-translate-y-1"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Order on WhatsApp</span>
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-sm sm:text-base text-[#A7A7A7] border-t border-white/10 max-w-3xl mx-auto"
          >
            <div className="flex items-center space-x-2">
              <div className="flex text-[#FF0000]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-white">4.8 / 5</span>
              <span>(62 Google Reviews)</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-[#FF0000]" />
              <span className="text-white">G-9 Markaz, Islamabad</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-[#FF0000]" />
              <span className="text-white">11:00 AM – 9:00 PM</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#FF0000]">Curated Wardrobe</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">Explore Our Collections</h2>
          <div className="w-16 h-0.5 bg-[#FF0000] mx-auto"></div>
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
              className="relative group overflow-hidden rounded-3xl h-[450px] border border-[#FF0000]/20 cursor-pointer"
              onClick={() => openWhatsApp(col.title)}
            >
              <img 
                src={col.image} 
                alt={col.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/40 to-transparent transition-opacity duration-500 group-hover:opacity-95" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#FF0000] mb-1">
                  {col.subtitle}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                  {col.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A7A7A7] mb-2 max-w-md line-clamp-2">
                  {col.description}
                </p>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FF0000] rounded-3xl transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 bg-[#171717] border-y border-[#FF0000]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <ShieldCheck className="w-8 h-8 text-[#FF0000]" />,
                title: "QUALITY CLOTHING",
                desc: "Handpicked premium fabrics engineered for lasting comfort and durability."
              },
              {
                icon: <Sparkles className="w-8 h-8 text-[#FF0000]" />,
                title: "FAIR PRICES",
                desc: "Honest, competitive pricing offering exceptional value for true quality."
              },
              {
                icon: <HeartHandshake className="w-8 h-8 text-[#FF0000]" />,
                title: "HELPFUL SERVICE",
                desc: "Dedicated, courteous staff ready to assist with sizing and style matching."
              },
              {
                icon: <MapPin className="w-8 h-8 text-[#FF0000]" />,
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
                className="bg-[#0B0B0B] p-8 rounded-2xl border border-[#FF0000]/20 hover:border-[#FF0000] transition-all duration-300 group"
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

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#FF0000]">Local Clothing Destination</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
              Your Local Clothing Destination in G-9 Markaz
            </h2>
            <div className="w-16 h-0.5 bg-[#FF0000]"></div>
            <p className="text-sm sm:text-base text-[#A7A7A7] leading-relaxed">
              With two convenient branches located in <strong className="text-white">Downtown</strong> and <strong className="text-white">Allah Wala Plaza</strong>, G-9 Markaz, Islamabad, <strong className="text-white">Saqib Garments</strong> has earned the trust of families across the capital with a stellar 4.8-star rating from over 62 verified customer reviews. We specialize in providing quality attire, helpful in-store shopping, and prompt order assistance.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="bg-[#171717] p-6 rounded-2xl border border-[#FF0000]/20">
                <div className="font-serif text-3xl font-bold text-[#FF0000] mb-1">4.8 ★</div>
                <div className="text-xs text-[#A7A7A7]">Google Rating Score</div>
              </div>
              <div className="bg-[#171717] p-6 rounded-2xl border border-[#FF0000]/20">
                <div className="font-serif text-3xl font-bold text-[#FF0000] mb-1">62+</div>
                <div className="text-xs text-[#A7A7A7]">Verified Reviews</div>
              </div>
            </div>
          </div>

          <div className="relative h-[450px] rounded-3xl overflow-hidden border border-[#FF0000]/30">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=900" 
              alt="Saqib Garments Store Front"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#0B0B0B]/90 backdrop-blur-md rounded-2xl border border-[#FF0000]/30 flex flex-col space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-white text-sm">Branch 1: Downtown</h4>
                  <p className="text-[10px] text-[#A7A7A7]">G-9 Markaz, Islamabad</p>
                </div>
                <a href={BUSINESS_DATA.locations[0].mapUrl} target="_blank" rel="noopener noreferrer" className="bg-[#FF0000] text-[#0B0B0B] p-2 rounded-lg hover:scale-105 transition-transform" aria-label="Get Directions">
                  <Compass className="w-4 h-4" />
                </a>
              </div>
              <div className="w-full h-px bg-white/10"></div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-white text-sm">Branch 2: Allah Wala Plaza</h4>
                  <p className="text-[10px] text-[#A7A7A7]">G-9 Markaz, Islamabad</p>
                </div>
                <a href={BUSINESS_DATA.locations[1].mapUrl} target="_blank" rel="noopener noreferrer" className="bg-[#FF0000] text-[#0B0B0B] p-2 rounded-lg hover:scale-105 transition-transform" aria-label="Get Directions">
                  <Compass className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#171717] rounded-3xl border border-[#FF0000]/30 p-8 sm:p-16 relative overflow-hidden">
          
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#FF0000]/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#FF0000]">Verified Reputation</span>
            <div className="flex items-center justify-center space-x-2">
              <span className="font-serif text-5xl font-bold text-white">4.8</span>
              <div className="flex flex-col items-start">
                <div className="flex text-[#FF0000]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-[#A7A7A7] mt-1">62 Google Reviews</span>
              </div>
            </div>
            <h2 className="font-serif text-3xl font-bold text-white">What Our Customers Say</h2>
            <div className="w-16 h-0.5 bg-[#FF0000] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {REVIEWS_DATA.map((rev, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#0B0B0B] p-6 rounded-2xl border border-[#FF0000]/20 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex text-[#FF0000]">
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
              className="inline-flex items-center space-x-2 bg-transparent border border-[#FF0000] text-[#FF0000] px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#FF0000] hover:text-[#0B0B0B] transition-all duration-300"
            >
              <span>View All 62 Google Reviews</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#171717] border-t border-[#FF0000]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#FF0000]">Connect With Us</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">Contact & Socials</h2>
            <div className="w-16 h-0.5 bg-[#FF0000] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Quick Links Card */}
            <div className="bg-[#0B0B0B] p-8 rounded-3xl border border-[#FF0000]/20 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div className="p-3 bg-[#171717] rounded-xl w-fit">
                  <Share2 className="w-6 h-6 text-[#FF0000]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">Social Links</h3>
                
                <p className="text-xs sm:text-sm text-[#A7A7A7] leading-relaxed">
                  Follow us for the latest collections, exclusive offers, and store updates.
                </p>

                <div className="grid grid-cols-2 gap-y-6 gap-x-2 pt-2 border-t border-white/10 mt-4">
                  <a href="https://www.instagram.com/saqib.garments" target="_blank" rel="noopener noreferrer" className="flex flex-col space-y-2 text-[#A7A7A7] hover:text-[#FF0000] transition-colors group mt-4">
                    <div className="w-10 h-10 rounded-full bg-[#171717] border border-[#FF0000]/30 flex items-center justify-center group-hover:bg-[#FF0000] group-hover:text-[#0B0B0B] transition-all">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider">Instagram</span>
                  </a>
                  
                  <a href="https://www.facebook.com/saqibgarments" target="_blank" rel="noopener noreferrer" className="flex flex-col space-y-2 text-[#A7A7A7] hover:text-[#FF0000] transition-colors group mt-4">
                    <div className="w-10 h-10 rounded-full bg-[#171717] border border-[#FF0000]/30 flex items-center justify-center group-hover:bg-[#FF0000] group-hover:text-[#0B0B0B] transition-all">
                      <Facebook className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider">Facebook</span>
                  </a>

                  <a href="https://www.tiktok.com/@saqibgarments" target="_blank" rel="noopener noreferrer" className="flex flex-col space-y-2 text-[#A7A7A7] hover:text-[#FF0000] transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-[#171717] border border-[#FF0000]/30 flex items-center justify-center group-hover:bg-[#FF0000] group-hover:text-[#0B0B0B] transition-all">
                      <TikTokIcon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider">TikTok</span>
                  </a>

                  <a href="mailto:saqibgarments@mail.com" className="flex flex-col space-y-2 text-[#A7A7A7] hover:text-[#FF0000] transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-[#171717] border border-[#FF0000]/30 flex items-center justify-center group-hover:bg-[#FF0000] group-hover:text-[#0B0B0B] transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider">Email</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-[#0B0B0B] p-8 rounded-3xl border border-[#FF0000]/20 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="p-3 bg-[#171717] rounded-xl w-fit">
                  <Clock className="w-6 h-6 text-[#FF0000]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">Opening Hours</h3>
                <p className="text-xs sm:text-sm text-[#A7A7A7]">
                  Open 7 Days a Week
                </p>
                <div className="bg-[#171717] p-4 rounded-xl border border-white/5">
                  <div className="text-sm font-bold text-white">{BUSINESS_DATA.openingHours}</div>
                  <div className="text-[10px] text-[#FF0000] mt-1">In-store shopping & pickup available</div>
                </div>
              </div>

              <div className="text-xs text-[#A7A7A7] flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span>Open Now for Customers</span>
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="bg-[#0B0B0B] p-8 rounded-3xl border border-[#FF0000]/20 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="p-3 bg-[#171717] rounded-xl w-fit">
                  <Phone className="w-6 h-6 text-[#FF0000]" />
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
                  className="flex items-center justify-center space-x-2 bg-[#171717] border border-[#FF0000]/40 text-[#F7F2E8] py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#FF0000] hover:text-[#0B0B0B] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
                <button 
                  onClick={() => openWhatsApp()}
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#FF0000] to-[#FF4438] text-[#0B0B0B] py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:shadow-[0_0_20px_rgba(255,0,0,0.4)] transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B0B0B] border-t border-[#FF0000]/20 pt-16 pb-24 lg:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <BrandLogo className="w-8 h-8" />
              <span className="font-serif text-lg font-bold text-white tracking-wider">SAQIB GARMENTS</span>
            </div>
            <p className="text-xs text-[#A7A7A7] leading-relaxed">
              "Quality clothing. Timeless style." Your trusted clothing destination in G-9 Markaz, Islamabad.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2 text-xs text-[#A7A7A7]">
              {['Home', 'Collections', 'About', 'Reviews', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-[#FF0000] transition-colors">
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
            <div className="text-xs text-[#FF0000] flex flex-col space-y-1">
              <span>• Downtown, G-9 Markaz</span>
              <span>• Allah Wala Plaza, G-9 Markaz</span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-widest">Connect</h4>
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => openWhatsApp()}
                className="w-10 h-10 rounded-full bg-[#171717] border border-[#FF0000]/30 flex items-center justify-center text-[#FF0000] hover:bg-[#FF0000] hover:text-[#0B0B0B] transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
              </button>
              <a 
                href={BUSINESS_DATA.bioLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#171717] border border-[#FF0000]/30 flex items-center justify-center text-[#FF0000] hover:bg-[#FF0000] hover:text-[#0B0B0B] transition-all"
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

        {/* Payment Methods */}
        <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4">
          <span className="text-[10px] uppercase tracking-widest text-[#A7A7A7] font-semibold">We Accept</span>
          <div className="flex items-center gap-3">
            <div className="h-9 px-4 rounded-md bg-white flex items-center justify-center shadow-md" title="Visa">
              <span className="font-serif italic font-bold text-lg tracking-tight text-[#1A1F71]">VISA</span>
            </div>
            <div className="h-9 px-3 rounded-md bg-white flex items-center justify-center shadow-md" title="Mastercard">
              <svg className="h-5 w-auto" viewBox="0 0 131.38 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="42" cy="51" r="30" fill="#EB001B"/>
                <circle cx="89.38" cy="51" r="30" fill="#F79E1B"/>
                <path d="M65.69 27.8a30 30 0 0 1 0 46.4 30 30 0 0 1 0-46.4z" fill="#FF5F00"/>
              </svg>
            </div>
            <div className="h-9 px-4 rounded-md bg-white flex items-center justify-center shadow-md" title="Easypaisa">
              <span className="font-sans font-extrabold text-sm tracking-tight">
                <span className="text-[#4CAF3D]">easy</span><span className="text-[#00693E]">paisa</span>
              </span>
            </div>
            <div className="h-9 px-4 rounded-md bg-white flex items-center justify-center shadow-md" title="JazzCash">
              <span className="font-sans font-extrabold text-sm tracking-tight">
                <span className="text-[#ED1C24]">Jazz</span><span className="text-[#F26522]">Cash</span>
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Actions */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
        <button 
          onClick={() => openWhatsApp()}
          className="relative group bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon className="w-7 h-7 fill-current" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#0B0B0B] border border-[#FF0000]/40 text-[#F7F2E8] text-xs font-bold rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
            Chat on WhatsApp
          </span>
        </button>
      </div>

      {/* Mobile Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0B0B0B]/95 backdrop-blur-md border-t border-[#FF0000]/30 py-3 px-4 flex items-center justify-around sm:hidden">
        <a 
          href={`tel:${BUSINESS_DATA.phone}`}
          className="flex flex-col items-center justify-center text-[#F7F2E8] hover:text-[#FF0000] text-[10px] uppercase font-bold tracking-wider"
        >
          <Phone className="w-5 h-5 mb-1 text-[#FF0000]" />
          <span>Call</span>
        </a>
        <div className="w-[1px] h-8 bg-white/10"></div>
        <a 
          href={BUSINESS_DATA.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-[#F7F2E8] hover:text-[#FF0000] text-[10px] uppercase font-bold tracking-wider"
        >
          <MapPin className="w-5 h-5 mb-1 text-[#FF0000]" />
          <span>Directions</span>
        </a>
        <div className="w-[1px] h-8 bg-white/10"></div>
        <button 
          onClick={() => openWhatsApp()}
          className="flex flex-col items-center justify-center text-[#F7F2E8] hover:text-[#FF0000] text-[10px] uppercase font-bold tracking-wider"
        >
          <WhatsAppIcon className="w-5 h-5 mb-1 text-[#25D366] fill-current" />
          <span>WhatsApp</span>
        </button>
      </div>

    </div>
  );
}
