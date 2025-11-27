import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Star, ArrowRight, Wine, PartyPopper } from 'lucide-react';
import { SectionTitle, AccordionItem, AwardCard } from '../components/SharedComponents';
import { FeaturedDishesSlider, MenuDisplay, ReviewsSection } from '../components/HomeComponents';
import { ADDRESS, FAQS } from '../lib/constants';
import SEO from '../components/SEO';
import { getRestaurantSchema, getOrganizationSchema } from '../lib/schema';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1585937421612-70a008356f36?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const restaurantSchema = getRestaurantSchema();
  const organizationSchema = getOrganizationSchema();

  return (
    <>
      <SEO
        title="Tast of Asia | Premium Indian Dining Newport"
        description="Experience premium Indian dining at Tast of Asia in Newport. Authentic flavors, modern elegance, and award-winning service. Reserve your table today for an unforgettable culinary journey."
        keywords="Indian restaurant Newport, fine dining, Tast of Asia, authentic Indian cuisine, luxury dining, Newport restaurants, best indian food newport, BYOB restaurant, Indian food takeaway Newport"
        image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        url="https://tasteofasia.com"
        schema={[restaurantSchema, organizationSchema]}
      />

      <div className="animate-fade-in space-y-0">
        {/* Hero */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {heroImages.map((img, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="absolute inset-0 bg-slate-900/60 z-10"></div>
              <img 
                src={img} 
                alt={`Slide ${index}`} 
                className="w-full h-full object-cover animate-float"
              />
            </div>
          ))}

          <div className="relative z-20 text-center w-full px-6 pt-20 flex flex-col items-center">
            <div className="inline-block border border-gold-500/50 px-6 py-2 mb-6 md:mb-8 bg-slate-900/50 backdrop-blur-md rounded-full">
               <span className="text-gold-400 text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-2">
                 <Star className="w-3 h-3 fill-current" /> Est. 1995 <Star className="w-3 h-3 fill-current" />
               </span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-white mb-4 md:mb-6 leading-none animate-slide-up shadow-sm drop-shadow-2xl">
              Tast of Asia
            </h1>
            <h2 className="text-white text-xs sm:text-sm md:text-lg font-medium uppercase tracking-[0.2em] md:tracking-[0.4em] mb-8 md:mb-12 animate-slide-up opacity-90">
              Premium Indian Dining • Newport
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-md sm:max-w-none justify-center items-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <button 
                onClick={() => window.open('https://example.com/order', '_blank')}
                className="group relative px-8 md:px-10 py-4 bg-gold-500 text-white font-bold tracking-[0.2em] text-xs uppercase overflow-hidden w-full sm:w-auto shadow-[0_0_30px_rgba(212,163,43,0.4)] rounded-sm"
              >
                <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                <span className="relative z-10">Order Online</span>
              </button>
              <Link href="/booking">
                <button 
                  className="group px-8 md:px-10 py-4 border border-white text-white font-bold tracking-[0.2em] text-xs uppercase hover:bg-white hover:text-slate-900 transition-all duration-300 w-full sm:w-auto backdrop-blur-sm rounded-sm"
                >
                  Book A Table
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* EVENTS & OFFERS SECTION */}
        <section className="bg-slate-900 text-white py-0 border-b border-gold-500/20">
          <div className="grid md:grid-cols-2">
             <div className="relative h-[400px] md:h-auto overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
                  alt="Cocktails" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent md:hidden"></div>
             </div>
             <div className="p-12 md:p-24 flex flex-col justify-center items-start">
                <div className="flex items-center gap-3 text-gold-500 mb-6">
                   <PartyPopper className="w-6 h-6" />
                   <span className="text-xs uppercase tracking-[0.2em] font-bold">Current Happenings</span>
                </div>
                <h2 className="font-serif text-4xl mb-6 leading-tight">Curry & Cocktails<br/>Friday Night Special</h2>
                <p className="text-slate-400 leading-relaxed mb-8 max-w-md">
                   Join us this Friday for a special tasting menu paired with signature spice-infused cocktails. Experience 5 courses of culinary innovation.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/booking">
                    <button 
                      className="px-8 py-3 bg-white text-slate-900 hover:bg-gold-500 hover:text-white transition-all duration-300 uppercase text-xs font-bold tracking-widest"
                    >
                      Book Event
                    </button>
                  </Link>
                  <button 
                    onClick={() => window.open('https://example.com/order', '_blank')}
                    className="px-8 py-3 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white transition-all duration-300 uppercase text-xs font-bold tracking-widest flex items-center gap-2"
                  >
                    Order Online <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
             </div>
          </div>
        </section>

        {/* Welcome / Philosophy (Updated Text) */}
        <section className="bg-white py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              
              {/* Left Content (Text) */}
              <div className="md:col-span-7">
                <div className="flex items-center gap-4 mb-6">
                   <h3 className="text-gold-600 text-xs font-bold uppercase tracking-[0.2em]">Est. 1995</h3>
                   <div className="h-px bg-gold-200 w-12"></div>
                </div>
                
                <h2 className="font-serif text-4xl md:text-5xl text-slate-900 leading-tight mb-8">Welcome to<br/>Tast of Asia</h2>
                
                <div className="space-y-6 text-slate-600 text-lg font-light leading-relaxed">
                  <p>
                    Hidden away in the city centre a stone's throw from Newport train station. Discover the finest Indian cuisine at Newport's best Indian restaurant and takeaway! Since 1995 we've been delighting customers with our authentic and flavourful dishes crafted by expert chefs with 25+ years of experience.
                  </p>
                  <p>
                    From succulent marinated chicken tikka to mouth watering biryanis, our menu will transport your taste buds to the vibrant streets of India. Our unique and relaxed atmosphere, combined with our dedication to quality and customer satisfaction sets us apart from the rest.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 items-start mt-8">
                  <div className="bg-stone-50 p-6 border-l-4 border-gold-500 flex-1">
                    <p className="text-slate-800 italic font-serif">
                      "We are also proud to be Newport's only BYOB restaurant. Bring your preferred wine or beer and save money as we don't charge any corkage."
                    </p>
                  </div>
                  {/* Embedded Award Card */}
                  <div className="sm:w-auto w-full flex justify-center sm:block">
                     <AwardCard className="w-64 transform hover:scale-105 transition-transform duration-300" />
                  </div>
                </div>
              </div>

              {/* Right Content (Image) */}
              <div className="md:col-span-5 relative mt-8 md:mt-0">
                 <div className="absolute -top-4 -right-4 w-full h-full border-2 border-gold-200 z-0"></div>
                 <img 
                   src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                   alt="Plating detail" 
                   className="w-full h-auto object-cover shadow-xl relative z-10"
                 />
                 <div className="absolute -bottom-8 -left-8 z-20 bg-slate-900 text-white p-6 text-center shadow-2xl">
                    <Wine className="w-8 h-8 mx-auto text-gold-500 mb-2" />
                    <h4 className="font-serif text-xl text-gold-500">BYOB</h4>
                    <p className="text-[10px] uppercase tracking-widest leading-relaxed mt-1">No Corkage Fee</p>
                 </div>
              </div>

            </div>
          </div>
        </section>

        {/* Featured Dishes Slider */}
        <FeaturedDishesSlider />
        
        {/* Restored Menu Display Section */}
        <MenuDisplay />

        {/* New Reviews Section */}
        <ReviewsSection />

        {/* Map Section */}
        <section className="h-[500px] w-full relative">
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.4842273678!2d-71.312!3d41.490!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDI5JzI0LjAiTiA3McKwMTgnNDMuMiJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
             width="100%" 
             height="100%" 
             style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }} 
             allowFullScreen={true} 
             loading="lazy"
             title="Restaurant Location"
           ></iframe>
           <div className="absolute top-8 left-8 bg-white p-8 shadow-2xl max-w-xs hidden md:block">
              <h3 className="font-serif text-2xl text-slate-900 mb-4">Visit Us</h3>
              <p className="text-slate-600 text-sm mb-4">{ADDRESS}</p>
              <button 
                onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`, '_blank')}
                className="text-gold-600 text-xs font-bold uppercase tracking-widest border-b border-gold-600 pb-1"
              >
                Get Directions
              </button>
           </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 py-24 px-6">
           <div className="container mx-auto max-w-3xl">
              <SectionTitle subtitle="Information" title="Frequently Asked Questions" />
              <div className="bg-white p-8 shadow-sm rounded-lg border border-stone-100">
                 {FAQS.map((faq, idx) => (
                    <AccordionItem key={idx} question={faq.question} answer={faq.answer} />
                 ))}
              </div>
           </div>
        </section>

      </div>
    </>
  );
}

