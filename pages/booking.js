import { useState } from 'react';
import { Check, Phone, Clock } from 'lucide-react';
import { PHONE } from '../lib/constants';
import SEO from '../components/SEO';
import { getBreadcrumbSchema } from '../lib/schema';

export default function Booking() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', date: '', time: '', guests: '2' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => setStatus('success'), 1000);
  };
  
  if (status === 'success') {
    return (
      <>
        <SEO
          title="Reservation Confirmed"
          description="Your reservation at Tast of Asia has been confirmed. We look forward to hosting you!"
          url="https://tasteofasia.com/booking"
          noindex={true}
        />
        <div className="min-h-screen flex items-center justify-center container mx-auto px-6 animate-fade-in bg-stone-50 pt-32">
          <div className="text-center bg-white p-12 shadow-2xl max-w-lg w-full border-t-4 border-gold-500 rounded-sm">
            <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-gold-600" />
            </div>
            <h2 className="font-serif text-4xl text-slate-900 mb-4">Reservation Confirmed</h2>
            <p className="text-slate-600 mb-8">We look forward to hosting you, {formData.name}.<br/>A confirmation email has been sent to {formData.email}.</p>
            <button 
              onClick={() => setStatus('idle')}
              className="text-gold-600 hover:text-slate-900 uppercase tracking-widest text-xs font-bold border-b border-gold-600 pb-1"
            >
              Make another reservation
            </button>
          </div>
        </div>
      </>
    );
  }

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://tasteofasia.com' },
    { name: 'Book a Table', url: 'https://tasteofasia.com/booking' }
  ]);

  return (
    <>
      <SEO
        title="Book a Table"
        description="Reserve your table at Tast of Asia. Book online or call us directly. We recommend booking 48 hours in advance for weekend dinner service. Newport's premier Indian dining experience."
        keywords="reservation Tast of Asia, book table Newport, Indian restaurant reservation, online booking Newport, restaurant booking"
        image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        url="https://tasteofasia.com/booking"
        schema={breadcrumbSchema}
      />

      <div className="bg-stone-50 min-h-screen pt-32 pb-20 px-6 animate-fade-in">
        <div className="container mx-auto max-w-6xl">
          {/* Reservation Block */}
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 mb-24">
            
            {/* Info Side */}
            <div className="lg:col-span-2">
              <h3 className="text-gold-600 text-xs font-bold uppercase tracking-[0.2em] mb-4">Reservations</h3>
              <h2 className="font-serif text-5xl text-slate-900 mb-8">Secure Your Table</h2>
              <p className="text-slate-600 leading-relaxed mb-12 font-light">
                We recommend booking at least 48 hours in advance for weekend dinner service.
              </p>
              <div className="space-y-8 border-t border-stone-200 pt-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white shadow-md rounded-full text-gold-600"><Phone className="w-5 h-5" /></div>
                  <div>
                    <h4 className="text-slate-900 font-serif text-lg">By Phone</h4>
                    <p className="text-slate-500 text-sm mt-1">Prefer to speak to us?</p>
                    <p className="text-slate-800 font-medium mt-1">{PHONE}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white shadow-md rounded-full text-gold-600"><Clock className="w-5 h-5" /></div>
                  <div>
                    <h4 className="text-slate-900 font-serif text-lg">Opening Hours</h4>
                    <p className="text-slate-500 text-sm mt-1">
                      Mon - Thu: 5:00 PM - 10:00 PM<br/>
                      Fri - Sun: 4:30 PM - 11:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Form Side */}
            <form onSubmit={handleSubmit} className="lg:col-span-3 bg-white p-8 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] rounded-sm border-t-4 border-slate-900">
              <h3 className="font-serif text-2xl mb-8 text-slate-800 border-b border-stone-100 pb-4">Booking Details</h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-slate-500 font-medium">Full Name</label>
                  <input required type="text" className="w-full bg-stone-50 border border-stone-200 p-4 text-slate-900 focus:border-gold-500 focus:outline-none transition-all rounded-sm" placeholder="John Doe" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div className="space-y-2">
                   <label className="text-xs uppercase tracking-widest text-slate-500 font-medium">Email Address</label>
                   <input required type="email" className="w-full bg-stone-50 border border-stone-200 p-4 text-slate-900 focus:border-gold-500 focus:outline-none transition-all rounded-sm" placeholder="john@example.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
              </div>

              <div className="mb-8">
                 <div className="space-y-2">
                   <label className="text-xs uppercase tracking-widest text-slate-500 font-medium">Phone Number</label>
                   <input required type="tel" className="w-full bg-stone-50 border border-stone-200 p-4 text-slate-900 focus:border-gold-500 focus:outline-none transition-all rounded-sm" placeholder="+1 (555) 000-0000" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                 </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                 <div className="space-y-2">
                   <label className="text-xs uppercase tracking-widest text-slate-500 font-medium">Date</label>
                   <input required type="date" className="w-full bg-stone-50 border border-stone-200 p-4 text-slate-900 focus:border-gold-500 focus:outline-none transition-all rounded-sm" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
                 </div>
                 <div className="space-y-2">
                   <label className="text-xs uppercase tracking-widest text-slate-500 font-medium">Time</label>
                   <input required type="time" className="w-full bg-stone-50 border border-stone-200 p-4 text-slate-900 focus:border-gold-500 focus:outline-none transition-all rounded-sm" value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})} />
                 </div>
                 <div className="space-y-2">
                   <label className="text-xs uppercase tracking-widest text-slate-500 font-medium">Guests</label>
                   <select className="w-full bg-stone-50 border border-stone-200 p-4 text-slate-900 focus:border-gold-500 focus:outline-none transition-all rounded-sm appearance-none" value={formData.guests} onChange={e => setFormData({...formData, guests: e.target.value})}>
                     {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} People</option>)}
                     <option value="9+">9+ (Call us)</option>
                   </select>
                 </div>
              </div>
              <button type="submit" className="w-full py-5 bg-slate-900 text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-gold-600 transition-colors shadow-lg">
                Confirm Reservation
              </button>
              <p className="text-center text-xs text-slate-400 mt-4">By booking, you agree to our cancellation policy.</p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

