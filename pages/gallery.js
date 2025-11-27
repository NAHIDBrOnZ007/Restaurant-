import { useState } from 'react';
import { Instagram, Check } from 'lucide-react';
import { SectionTitle } from '../components/SharedComponents';
import SEO from '../components/SEO';
import { getBreadcrumbSchema } from '../lib/schema';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const galleryImages = [
    { id: 1, src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", category: 'Interiors', span: 'col-span-2 row-span-2' },
    { id: 2, src: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: 'Culinary', span: 'col-span-1 row-span-1' },
    { id: 3, src: "https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: 'Interiors', span: 'col-span-1 row-span-1' },
    { id: 4, src: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: 'Culinary', span: 'col-span-1 row-span-2' },
    { id: 5, src: "https://images.unsplash.com/photo-1519671482502-9759101d4561?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: 'Events', span: 'col-span-1 row-span-1' },
    { id: 6, src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: 'Culinary', span: 'col-span-1 row-span-1' },
    { id: 7, src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", category: 'Interiors', span: 'col-span-2 row-span-1' },
    { id: 8, src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: 'Events', span: 'col-span-1 row-span-1' },
  ];

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://tasteofasia.com' },
    { name: 'Gallery', url: 'https://tasteofasia.com/gallery' }
  ]);

  return (
    <>
      <SEO
        title="Gallery"
        description="Explore our gallery showcasing the ambiance, culinary artistry, and special events at Tast of Asia restaurant in Newport. View photos of our elegant dining space, signature dishes, and memorable events."
        keywords="Tast of Asia gallery, restaurant photos Newport, Indian restaurant interior, food photography, restaurant events Newport, dining ambiance"
        image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        url="https://tasteofasia.com/gallery"
        schema={breadcrumbSchema}
      />

      <div className="animate-fade-in pt-24 pb-0 bg-white">
        {/* Header */}
        <div className="bg-slate-900 text-white py-20 px-6 text-center">
           <SectionTitle subtitle="Visual Journey" title="Our Gallery" light={true} />
           <p className="text-slate-400 max-w-2xl mx-auto mt-4 font-light text-lg">
              Immerse yourself in the ambiance of Tast of Asia. From the warmth of our dining hall to the artistry on your plate.
           </p>
        </div>

        {/* Filter Tabs */}
        <div className="container mx-auto px-6 py-12">
          <div className="flex justify-center gap-8 mb-12 flex-wrap">
             {['All', 'Culinary', 'Interiors', 'Events'].map((cat) => (
               <button 
                 key={cat}
                 onClick={() => setActiveCategory(cat)}
                 className={`text-sm uppercase tracking-[0.2em] font-bold pb-2 border-b-2 transition-all duration-300 ${
                   activeCategory === cat ? 'text-gold-600 border-gold-600' : 'text-slate-400 border-transparent hover:text-slate-900'
                 }`}
               >
                 {cat}
               </button>
             ))}
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
            {filteredImages.map((img) => (
              <div key={img.id} className={`relative overflow-hidden group rounded-sm ${activeCategory === 'All' ? img.span : 'col-span-1 row-span-1'}`}>
                 <img src={img.src} alt={img.category} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                 <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6">
                    <span className="text-gold-400 text-xs uppercase tracking-widest mb-2">{img.category}</span>
                    <div className="w-8 h-px bg-white/50"></div>
                 </div>
              </div>
            ))}
          </div>
        </div>

        {/* Private Dining / Events Promo */}
        <section className="bg-stone-50 py-24 px-6 border-t border-stone-100">
           <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                 <div className="absolute top-4 left-4 w-full h-full border-2 border-gold-200"></div>
                 <img src="https://images.unsplash.com/photo-1519671482502-9759101d4561?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Private Dining" className="w-full h-auto shadow-lg relative z-10" />
              </div>
              <div>
                 <h3 className="text-gold-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Celebrate With Us</h3>
                 <h2 className="font-serif text-4xl text-slate-900 mb-6">Private Dining & Events</h2>
                 <p className="text-slate-600 leading-relaxed mb-6">
                    Host your next special occasion at Tast of Asia. Whether it's a birthday celebration, corporate dinner, or an intimate gathering, our dedicated team will ensure a memorable experience.
                 </p>
                 <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-slate-700 text-sm"><Check className="w-4 h-4 text-gold-600"/> Customized Menus</li>
                    <li className="flex items-center gap-3 text-slate-700 text-sm"><Check className="w-4 h-4 text-gold-600"/> Private Section Available</li>
                    <li className="flex items-center gap-3 text-slate-700 text-sm"><Check className="w-4 h-4 text-gold-600"/> Dedicated Service Staff</li>
                 </ul>
                 <button 
                    onClick={() => window.open('mailto:events@tasteofasia.com')}
                    className="px-8 py-3 bg-slate-900 text-white uppercase text-xs font-bold tracking-widest hover:bg-gold-600 transition-colors"
                 >
                    Inquire Now
                 </button>
              </div>
           </div>
        </section>

        {/* Instagram Feed Mockup */}
        <div className="py-20 text-center">
           <div className="flex items-center justify-center gap-2 mb-8 text-slate-900 hover:text-gold-600 transition-colors cursor-pointer">
              <Instagram className="w-6 h-6" />
              <span className="font-bold text-lg">@TastOfAsiaNewport</span>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-6 gap-0.5">
              {[10,11,12,13,14,15].map(i => (
                 <div key={i} className="aspect-square relative group overflow-hidden cursor-pointer">
                    <img src={`https://picsum.photos/id/${200+i}/400/400`} alt={`Gallery ${i}`} className="w-full h-full object-cover transition-opacity group-hover:opacity-80" />
                 </div>
              ))}
           </div>
        </div>
      </div>
    </>
  );
}

