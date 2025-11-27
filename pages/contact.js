import { useState } from 'react';
import { MapPin, PhoneCall, Mail, Check } from 'lucide-react';
import { SectionTitle } from '../components/SharedComponents';
import { ADDRESS, PHONE, EMAIL } from '../lib/constants';
import SEO from '../components/SEO';
import { getLocalBusinessSchema, getBreadcrumbSchema } from '../lib/schema';

export default function Contact() {
  const [contactData, setContactData] = useState({ name: '', email: '', message: '' });
  const [contactStatus, setContactStatus] = useState('idle');
  
  const handleContactSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => setContactStatus('success'), 1000);
  };

  const localBusinessSchema = getLocalBusinessSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://tasteofasia.com' },
    { name: 'Contact Us', url: 'https://tasteofasia.com/contact' }
  ]);

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Tast of Asia. Visit us at 12 Ocean Drive, Newport, RI, call us at +1 (401) 555-0199, or send us a message. We're ready to serve you."
        keywords="contact Tast of Asia, restaurant contact Newport, Indian restaurant phone number, Tast of Asia address, restaurant email Newport"
        image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        url="https://tasteofasia.com/contact"
        schema={[localBusinessSchema, breadcrumbSchema]}
      />

      <div className="animate-fade-in pt-32 min-h-screen flex flex-col bg-white">
        <div className="container mx-auto px-6 text-center mb-16">
           <SectionTitle subtitle="Location & Queries" title="Get in Touch" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 container mx-auto px-6 pb-20 max-w-6xl">
           {/* Contact Info */}
           <div className="bg-stone-50 p-12 h-full flex flex-col justify-center rounded-sm border border-stone-100">
              <h3 className="font-serif text-3xl text-slate-900 mb-8">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex gap-4 items-start group">
                  <div className="p-3 bg-white rounded-full shadow-sm text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                    <MapPin className="w-6 h-6 shrink-0" />
                  </div>
                  <div>
                     <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-1">Visit Us</h4>
                     <p className="text-slate-600 font-light">{ADDRESS}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start group">
                  <div className="p-3 bg-white rounded-full shadow-sm text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                    <PhoneCall className="w-6 h-6 shrink-0" />
                  </div>
                  <div>
                     <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-1">Call Us</h4>
                     <p className="text-slate-600 font-light">{PHONE}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start group">
                   <div className="p-3 bg-white rounded-full shadow-sm text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                    <Mail className="w-6 h-6 shrink-0" />
                  </div>
                  <div>
                     <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-1">Email</h4>
                     <p className="text-slate-600 font-light">{EMAIL}</p>
                  </div>
                </div>
              </div>
           </div>

           {/* Contact Form */}
           <div className="bg-white p-8 md:p-12 shadow-xl border border-stone-100 rounded-sm">
              {contactStatus === 'success' ? (
                 <div className="text-center py-20">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600"><Check className="w-8 h-8"/></div>
                    <h4 className="text-2xl font-serif text-slate-900 mb-2">Message Sent</h4>
                    <p className="text-slate-500">We will get back to you shortly.</p>
                    <button onClick={() => setContactStatus('idle')} className="mt-8 text-xs uppercase tracking-widest text-gold-600 font-bold border-b border-gold-600 pb-1">Send another</button>
                 </div>
              ) : (
                <form onSubmit={handleContactSubmit}>
                  <h3 className="font-serif text-2xl text-slate-900 mb-6">Send a Message</h3>
                  <div className="space-y-6">
                     <div className="space-y-2">
                       <label className="text-xs uppercase tracking-widest text-slate-500 font-medium">Name</label>
                       <input required type="text" className="w-full bg-stone-50 border border-stone-200 p-4 text-slate-900 focus:border-gold-500 focus:outline-none rounded-sm transition-all" placeholder="Your full name" value={contactData.name} onChange={e => setContactData({...contactData, name: e.target.value})} />
                     </div>
                     <div className="space-y-2">
                       <label className="text-xs uppercase tracking-widest text-slate-500 font-medium">Email</label>
                       <input required type="email" className="w-full bg-stone-50 border border-stone-200 p-4 text-slate-900 focus:border-gold-500 focus:outline-none rounded-sm transition-all" placeholder="Your email address" value={contactData.email} onChange={e => setContactData({...contactData, email: e.target.value})} />
                     </div>
                     <div className="space-y-2">
                       <label className="text-xs uppercase tracking-widest text-slate-500 font-medium">Message</label>
                       <textarea required rows={4} className="w-full bg-stone-50 border border-stone-200 p-4 text-slate-900 focus:border-gold-500 focus:outline-none rounded-sm transition-all" placeholder="How can we help you?" value={contactData.message} onChange={e => setContactData({...contactData, message: e.target.value})}></textarea>
                     </div>
                  </div>
                  <button type="submit" className="w-full mt-8 py-4 bg-slate-900 text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-gold-600 transition-colors">
                     Send Message
                  </button>
                </form>
              )}
           </div>
        </div>
      </div>
    </>
  );
}

