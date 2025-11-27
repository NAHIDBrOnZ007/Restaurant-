import Link from 'next/link';
import { MapPin, Phone, Mail, Award, Instagram, Facebook, Twitter } from 'lucide-react';
import { ADDRESS, PHONE, EMAIL } from '../lib/constants';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 border-t border-gold-500/30 relative overflow-hidden">
      {/* Decorative BG element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="font-serif text-3xl text-white mb-6 tracking-tight">
               TASTE <span className="text-gold-500 italic">of</span> ASIA
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              A culinary journey through the authentic flavors of India, crafted with passion and served with elegance in the heart of Newport.
            </p>
            <div className="flex justify-start gap-4 text-green-500 mb-6">
              <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-sm border border-white/10">
                <Award className="w-5 h-5" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">Winner 2025</span>
              </div>
            </div>
            <div className="flex gap-4">
               <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-gold-500 transition-colors text-white"><Instagram className="w-4 h-4"/></a>
               <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-gold-500 transition-colors text-white"><Facebook className="w-4 h-4"/></a>
               <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-gold-500 transition-colors text-white"><Twitter className="w-4 h-4"/></a>
            </div>
          </div>
          
          {/* Contact Column */}
          <div>
             <h4 className="text-gold-500 uppercase tracking-[0.2em] text-xs font-bold mb-8">Contact</h4>
             <ul className="space-y-4 text-slate-300 text-sm">
                <li className="flex items-start gap-3">
                   <MapPin className="w-4 h-4 mt-1 text-gold-500 shrink-0"/>
                   <span>{ADDRESS}</span>
                </li>
                <li className="flex items-center gap-3">
                   <Phone className="w-4 h-4 text-gold-500 shrink-0"/>
                   <span>{PHONE}</span>
                </li>
                <li className="flex items-center gap-3">
                   <Mail className="w-4 h-4 text-gold-500 shrink-0"/>
                   <span>{EMAIL}</span>
                </li>
             </ul>
          </div>

          {/* Quick Links */}
          <div>
             <h4 className="text-gold-500 uppercase tracking-[0.2em] text-xs font-bold mb-8">Explore</h4>
             <ul className="space-y-3 text-slate-400 text-sm">
                <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
                <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
                <li><Link href="/booking" className="hover:text-white transition-colors">Reservations</Link></li>
                <li><button onClick={() => window.open('https://example.com/order', '_blank')} className="hover:text-gold-400 transition-colors font-bold text-white">Order Online</button></li>
             </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-gold-500 uppercase tracking-[0.2em] text-xs font-bold mb-8">Newsletter</h4>
            <p className="text-slate-400 text-xs mb-4">Subscribe for exclusive offers and seasonal menu updates.</p>
            <div className="flex flex-col gap-3">
               <input type="email" placeholder="Your email address" className="bg-white/5 border border-white/10 p-3 text-white text-sm focus:outline-none focus:border-gold-500 transition-colors" />
               <button className="bg-gold-500 text-white uppercase text-xs font-bold tracking-widest py-3 hover:bg-white hover:text-slate-900 transition-colors">Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
           <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-center md:text-left">
             <span>&copy; {new Date().getFullYear()} Tast of Asia. All rights reserved.</span>
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
           </div>
           <div className="flex gap-2 items-center">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span>Open Today: 5:00 PM - 10:00 PM</span>
           </div>
        </div>
      </div>
    </footer>
  );
}

