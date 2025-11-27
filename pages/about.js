import { ChefHat, Wine, Heart } from 'lucide-react';
import { SectionTitle, AwardCard } from '../components/SharedComponents';
import { APP_NAME } from '../lib/constants';
import SEO from '../components/SEO';
import { getLocalBusinessSchema, getBreadcrumbSchema } from '../lib/schema';

export default function About() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://tasteofasia.com' },
    { name: 'About Us', url: 'https://tasteofasia.com/about' }
  ]);
  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Tast of Asia's legacy since 1995. Discover our story, meet Chef Aarav Sharma, and explore our commitment to authentic Indian cuisine in Newport. Family-run restaurant with 25+ years of experience."
        keywords="Tast of Asia history, about Tast of Asia, Chef Aarav Sharma, Indian restaurant Newport history, family restaurant Newport, authentic Indian cuisine Newport"
        image="https://images.unsplash.com/photo-1596560548464-f010549b84d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        url="https://tasteofasia.com/about"
        schema={[localBusinessSchema, breadcrumbSchema]}
      />

      <div className="animate-fade-in pt-24">
        {/* Header Padding due to fixed nav */}
        <div className="relative h-[50vh] flex items-center justify-center">
           <div className="absolute inset-0 bg-slate-900">
             <img src="https://images.unsplash.com/photo-1596560548464-f010549b84d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" className="w-full h-full object-cover opacity-50" alt="About" />
           </div>
           <div className="relative z-10 text-center px-4">
             <h1 className="font-serif text-5xl md:text-6xl text-white mb-4">About Us</h1>
             <span className="text-gold-400 text-sm uppercase tracking-[0.3em]">Tradition Meets Innovation</span>
           </div>
        </div>

        <div className="container mx-auto px-6 py-24 max-w-5xl">
          {/* Intro & History */}
          <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
             <div>
                <h2 className="font-serif text-4xl text-slate-900 mb-8 leading-tight">A Legacy of Flavor<br/>In The Heart of Newport</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Welcome to {APP_NAME}, a family-run local Indian restaurant & takeaway. Since 1995, we've been delighting customers with our authentic and flavourful dishes crafted by expert chefs with 25+ years of experience.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  We believe that food is not just about sustenance, but an experience that brings people together. Our philosophy is rooted in traditional Indian hospitality, "Atithi Devo Bhava" - The Guest is God.
                </p>
                <AwardCard className="w-full max-w-xs" />
             </div>
             
             {/* Timeline / Journey */}
             <div className="bg-stone-50 p-8 rounded-sm border border-stone-100 relative">
                <h3 className="font-serif text-2xl mb-8 text-slate-900">Our Journey</h3>
                <div className="space-y-8 relative pl-8 border-l border-gold-300">
                   <div className="relative">
                      <div className="absolute -left-[39px] top-1 w-5 h-5 bg-gold-500 rounded-full border-4 border-white"></div>
                      <h4 className="font-bold text-slate-900">1995</h4>
                      <p className="text-slate-600 text-sm mt-1">Opened our doors in Newport with a small 10-table seating area.</p>
                   </div>
                   <div className="relative">
                      <div className="absolute -left-[39px] top-1 w-5 h-5 bg-gold-500 rounded-full border-4 border-white"></div>
                      <h4 className="font-bold text-slate-900">2005</h4>
                      <p className="text-slate-600 text-sm mt-1">Expanded to current location to accommodate growing demand.</p>
                   </div>
                   <div className="relative">
                      <div className="absolute -left-[39px] top-1 w-5 h-5 bg-gold-500 rounded-full border-4 border-white"></div>
                      <h4 className="font-bold text-slate-900">2018</h4>
                      <p className="text-slate-600 text-sm mt-1">Introduced our BYOB policy which became an instant favorite.</p>
                   </div>
                   <div className="relative">
                      <div className="absolute -left-[39px] top-1 w-5 h-5 bg-gold-500 rounded-full border-4 border-white"></div>
                      <h4 className="font-bold text-slate-900">2025</h4>
                      <p className="text-slate-600 text-sm mt-1">Awarded TripAdvisor Travellers' Choice, placing us in the top 10% worldwide.</p>
                   </div>
                </div>
             </div>
          </div>

          {/* MEET THE CHEF SECTION */}
          <div className="grid md:grid-cols-2 gap-16 items-center bg-white border border-stone-100 shadow-sm p-8 md:p-12 mb-24">
             <div className="order-2 md:order-1">
                 <div className="flex items-center gap-3 text-gold-600 mb-4">
                   <ChefHat className="w-6 h-6" />
                   <span className="text-xs uppercase tracking-[0.2em] font-bold">Executive Chef</span>
                 </div>
                 <h2 className="font-serif text-4xl text-slate-900 mb-6">Chef Aarav Sharma</h2>
                 <p className="text-slate-600 text-lg leading-relaxed mb-6 font-light">
                   "Cooking is an act of love. Every spice has a story, every dish has a soul."
                 </p>
                 <p className="text-slate-600 leading-relaxed mb-6">
                   With over 25 years of culinary expertise in prestigious 5-star kitchens across India and the UK, Chef Aarav brings a unique blend of traditional techniques and modern presentation to Newport. 
                 </p>
                 <p className="text-slate-600 leading-relaxed">
                  He meticulously roasts and grinds his own spice blends daily, ensuring that every curry carries the authentic signature of Tast of Asia.
                 </p>
             </div>
             <div className="order-1 md:order-2 relative">
                <div className="absolute -inset-4 border-2 border-gold-200 z-0 hidden md:block"></div>
                <img 
                  src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Chef Aarav" 
                  className="w-full h-auto object-cover relative z-10 shadow-lg" 
                />
             </div>
          </div>

          {/* SOURCING SECTION */}
          <div className="text-center mb-16">
             <SectionTitle subtitle="Our Philosophy" title="From Farm to Fork" />
             <p className="text-slate-600 max-w-2xl mx-auto">
                We believe that exceptional food begins with exceptional ingredients. That's why we partner with local farmers and trusted suppliers.
             </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
             <div className="group">
                <div className="h-64 overflow-hidden mb-6 relative">
                   <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Spices" />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                </div>
                <h3 className="font-serif text-2xl text-slate-900 mb-3">Hand-Ground Spices</h3>
                <p className="text-slate-600 text-sm leading-relaxed">We import whole spices from selected estates in Kerala and grind them fresh daily in our kitchen.</p>
             </div>
             <div className="group">
                <div className="h-64 overflow-hidden mb-6 relative">
                   <img src="https://images.unsplash.com/photo-1615485500704-8e99099928b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Vegetables" />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                </div>
                <h3 className="font-serif text-2xl text-slate-900 mb-3">Locally Sourced</h3>
                <p className="text-slate-600 text-sm leading-relaxed">We work closely with Newport farms to source the freshest seasonal vegetables and herbs.</p>
             </div>
             <div className="group">
                <div className="h-64 overflow-hidden mb-6 relative">
                   <img src="https://images.unsplash.com/photo-1606471191009-63994c53433b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Meat" />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                </div>
                <h3 className="font-serif text-2xl text-slate-900 mb-3">Premium Cuts</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Our lamb and poultry are ethically sourced, ensuring tenderness and rich flavor in every bite.</p>
             </div>
          </div>
          
          {/* Values */}
          <div className="grid md:grid-cols-3 gap-12 text-center mt-24 border-t border-stone-200 pt-24">
             <div className="p-8 bg-stone-50 border border-stone-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
               <Heart className="w-10 h-10 mx-auto text-gold-600 mb-6" />
               <h4 className="font-serif text-2xl mb-4 text-slate-800">Passion</h4>
               <p className="text-sm text-slate-500 leading-relaxed">Every dish is crafted with love and attention to detail.</p>
             </div>
             <div className="p-8 bg-stone-50 border border-stone-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
               <ChefHat className="w-10 h-10 mx-auto text-gold-600 mb-6" />
               <h4 className="font-serif text-2xl mb-4 text-slate-800">Mastery</h4>
               <p className="text-sm text-slate-500 leading-relaxed">Head chef brings 25+ years of experience from 5-star kitchens.</p>
             </div>
             <div className="p-8 bg-stone-50 border border-stone-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
               <Wine className="w-10 h-10 mx-auto text-gold-600 mb-6" />
               <h4 className="font-serif text-2xl mb-4 text-slate-800">Hospitality</h4>
               <p className="text-sm text-slate-500 leading-relaxed">Newport's only BYOB restaurant. No corkage fees.</p>
             </div>
          </div>
        </div>
      </div>
    </>
  );
}

