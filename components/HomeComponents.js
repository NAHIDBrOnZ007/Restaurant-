import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Star, ArrowRight, Wine, PartyPopper, Utensils, Phone, MapPin, Clock } from 'lucide-react';
import { SectionTitle, AccordionItem, AwardCard } from './SharedComponents';
import { MENU_ITEMS, FEATURED_DISHES, GOOGLE_REVIEWS, FAQS, ADDRESS } from '../lib/constants';

export function FeaturedDishesSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % FEATURED_DISHES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-stone-50 py-24 px-4 overflow-hidden">
      <div className="container mx-auto">
         <SectionTitle subtitle="Culinary Excellence" title="Featured Dishes" />
         
         {/* Desktop Box Grid (Visible on large screens) */}
         <div className="hidden md:grid grid-cols-3 gap-8 max-w-6xl mx-auto">
            {FEATURED_DISHES.slice(0, 3).map((dish) => (
               <div key={dish.id} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
                  <div className="h-64 overflow-hidden relative shrink-0">
                    <img src={dish.image} alt={dish.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 text-slate-900 font-bold font-serif rounded-full text-sm">
                      {dish.price}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="font-serif text-2xl text-slate-900 mb-3 group-hover:text-gold-600 transition-colors">{dish.name}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{dish.description}</p>
                    <button 
                      onClick={() => window.open('https://example.com/order', '_blank')}
                      className="mt-auto w-max text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-1 group-hover:border-gold-500 transition-colors"
                    >
                      Order Now
                    </button>
                  </div>
               </div>
            ))}
         </div>

         {/* Mobile Auto Slider */}
         <div className="md:hidden relative h-[500px] w-full max-w-sm mx-auto">
            {FEATURED_DISHES.map((dish, idx) => {
               let position = 'opacity-0 translate-x-full pointer-events-none';
               if (idx === activeIndex) position = 'opacity-100 translate-x-0 z-10';
               else if (idx === (activeIndex - 1 + FEATURED_DISHES.length) % FEATURED_DISHES.length) position = 'opacity-0 -translate-x-full z-0 pointer-events-none';

               return (
                 <div key={dish.id} className={`absolute inset-0 transition-all duration-700 ease-out transform ${position}`}>
                    <div className="bg-white rounded-xl overflow-hidden shadow-xl h-full flex flex-col">
                      <div className="h-60 overflow-hidden relative shrink-0">
                        <img src={dish.image} alt={dish.name} className="w-full h-full object-cover" />
                         <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 text-slate-900 font-bold font-serif rounded-full text-sm">
                           {dish.price}
                         </div>
                      </div>
                      <div className="p-8 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-serif text-2xl text-slate-900 mb-3">{dish.name}</h3>
                          <p className="text-slate-600 text-sm leading-relaxed">{dish.description}</p>
                        </div>
                        <button 
                          onClick={() => window.open('https://example.com/order', '_blank')}
                          className="mt-6 w-full py-3 bg-slate-900 text-white uppercase text-xs font-bold tracking-widest rounded hover:bg-gold-600 transition-colors"
                        >
                          Order Now
                        </button>
                      </div>
                    </div>
                 </div>
               );
            })}
            <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
               {FEATURED_DISHES.map((_, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setActiveIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${idx === activeIndex ? 'bg-gold-600 w-6' : 'bg-slate-300'}`}
                  />
               ))}
            </div>
         </div>
      </div>
    </section>
  );
}

export function MenuDisplay() {
  const starters = MENU_ITEMS.filter(i => i.category === 'starter');
  const mains = MENU_ITEMS.filter(i => i.category === 'main');
  const desserts = MENU_ITEMS.filter(i => i.category === 'dessert');

  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
       {/* Decorative BG */}
       <div className="absolute top-0 right-0 w-64 h-64 bg-stone-50 rounded-full -mr-32 -mt-32 opacity-50"></div>
       <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-50 rounded-full -ml-48 -mb-48 opacity-50"></div>

       <div className="container mx-auto max-w-4xl relative z-10">
         <SectionTitle subtitle="A La Carte" title="Our Menu" />
         
         <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            <div>
               <h4 className="text-gold-600 font-serif text-2xl mb-8 border-b border-gold-200 pb-2 inline-block">Starters</h4>
               <div className="space-y-8">
                  {starters.map(item => (
                     <div key={item.id} className="group">
                        <div className="flex justify-between items-baseline mb-1">
                           <h5 className="text-slate-900 font-bold font-serif text-lg">{item.name}</h5>
                           <span className="flex-1 mx-4 border-b border-dotted border-stone-300 relative -top-1"></span>
                           <span className="text-gold-600 font-bold">{item.price}</span>
                        </div>
                        <p className="text-slate-500 text-sm italic">{item.description}</p>
                     </div>
                  ))}
               </div>

               <h4 className="text-gold-600 font-serif text-2xl mb-8 border-b border-gold-200 pb-2 inline-block mt-12">Desserts</h4>
               <div className="space-y-8">
                  {desserts.map(item => (
                     <div key={item.id} className="group">
                        <div className="flex justify-between items-baseline mb-1">
                           <h5 className="text-slate-900 font-bold font-serif text-lg">{item.name}</h5>
                           <span className="flex-1 mx-4 border-b border-dotted border-stone-300 relative -top-1"></span>
                           <span className="text-gold-600 font-bold">{item.price}</span>
                        </div>
                        <p className="text-slate-500 text-sm italic">{item.description}</p>
                     </div>
                  ))}
               </div>
            </div>

            <div>
               <h4 className="text-gold-600 font-serif text-2xl mb-8 border-b border-gold-200 pb-2 inline-block">Mains</h4>
               <div className="space-y-8">
                  {mains.map(item => (
                     <div key={item.id} className="group">
                        <div className="flex justify-between items-baseline mb-1">
                           <h5 className="text-slate-900 font-bold font-serif text-lg">{item.name}</h5>
                           <span className="flex-1 mx-4 border-b border-dotted border-stone-300 relative -top-1"></span>
                           <span className="text-gold-600 font-bold">{item.price}</span>
                        </div>
                        <p className="text-slate-500 text-sm italic">{item.description}</p>
                     </div>
                  ))}
               </div>
               
               <div className="mt-12 p-6 bg-stone-50 border border-stone-100 text-center">
                  <p className="text-slate-900 font-serif text-lg mb-4">View our full menu online</p>
                  <button 
                     onClick={() => window.open('https://example.com/order', '_blank')}
                     className="px-8 py-3 bg-slate-900 text-white uppercase text-xs font-bold tracking-widest hover:bg-gold-600 transition-colors"
                  >
                     Order Takeaway
                  </button>
               </div>
            </div>
         </div>
       </div>
    </section>
  );
}

export function ReviewsSection() {
   return (
      <section className="py-24 px-6 bg-stone-50 border-t border-stone-100">
        <div className="container mx-auto max-w-6xl">
           <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                 <span className="font-bold text-slate-900 text-xl">Google Reviews</span>
                 <div className="flex text-gold-500">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                 </div>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-slate-900">What Our Guests Say</h2>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {GOOGLE_REVIEWS.map((review) => (
                 <div key={review.id} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-stone-100 flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                       <img src={review.image} alt={review.author} className="w-12 h-12 rounded-full object-cover border-2 border-gold-100" />
                       <div>
                          <h4 className="font-bold text-slate-900 text-sm">{review.author}</h4>
                          <span className="text-slate-400 text-xs">{review.date}</span>
                       </div>
                    </div>
                    <div className="flex text-gold-500 mb-4">
                       {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed italic flex-grow">"{review.text}"</p>
                 </div>
              ))}
           </div>
           
           <div className="text-center mt-12">
              <a href="#" className="inline-flex items-center gap-2 text-slate-900 font-bold border-b border-slate-900 pb-1 hover:text-gold-600 hover:border-gold-600 transition-colors text-xs uppercase tracking-widest">
                 Read All Reviews <ArrowRight className="w-4 h-4" />
              </a>
           </div>
        </div>
      </section>
   );
}

