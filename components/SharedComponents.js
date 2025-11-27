import { useState } from 'react';
import { Plus, Star } from 'lucide-react';

export function SectionTitle({ subtitle, title, align = 'center', light = false }) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h3 className={`text-xs font-bold uppercase tracking-[0.2em] mb-3 ${light ? 'text-gold-400' : 'text-gold-600'}`}>{subtitle}</h3>
      <h2 className={`font-serif text-4xl md:text-5xl leading-tight ${light ? 'text-white' : 'text-slate-900'}`}>{title}</h2>
      {align === 'center' && <div className={`w-24 h-0.5 mx-auto mt-6 ${light ? 'bg-gold-500/50' : 'bg-gold-200'}`}></div>}
    </div>
  );
}

export function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-stone-200 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:bg-stone-50 transition-colors px-4"
      >
        <span className="font-serif text-lg text-slate-900">{question}</span>
        <span className={`text-gold-500 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          <Plus className="w-5 h-5" />
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-48' : 'max-h-0'}`}>
        <p className="p-4 pt-0 text-slate-600 font-light leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function AwardCard({ className = "" }) {
  return (
    <div className={`bg-white border border-stone-200 shadow-xl rounded-sm p-6 relative overflow-hidden ${className}`}>
        {/* Top Row */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-1">
             {[1,2,3,4,5].map(i => <div key={i} className="w-2 h-2 rounded-full bg-[#00AA6C]"></div>)}
          </div>
          <span className="text-[#004f32] font-bold text-[10px] uppercase tracking-widest">Winner 2025</span>
        </div>

        {/* Center Logo */}
        <div className="flex justify-center mb-4">
           <div className="w-20 h-20 rounded-full bg-[#34E0A1] flex items-center justify-center p-1 relative">
             <div className="w-full h-full rounded-full border-[3px] border-[#00AA6C] flex items-center justify-center bg-[#00AA6C]">
                {/* Owl Eyes Representation */}
                <div className="flex gap-0.5 relative top-0.5">
                   <div className="w-5 h-5 rounded-full bg-white border-2 border-black flex items-center justify-center">
                     <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                   </div>
                   <div className="w-5 h-5 rounded-full bg-white border-2 border-black flex items-center justify-center">
                     <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                   </div>
                </div>
                {/* Owl Beak/Body simplified */}
                <div className="absolute mt-4 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-black"></div>
             </div>
           </div>
        </div>

        {/* Text */}
        <div className="text-center mb-4">
          <h3 className="font-serif text-xl text-slate-900 font-bold mb-1">Tripadvisor</h3>
          <h2 className="font-sans text-sm font-bold text-[#004f32] leading-tight">Travellers' Choice™<br/>Awards 2025</h2>
        </div>

        <div className="h-px w-full bg-stone-200 mb-4"></div>

        {/* Footer */}
        <div className="flex justify-between items-end">
           <div>
            <h4 className="font-bold text-[#004f32] text-xs">Tast of Asia</h4>
             <p className="text-[10px] text-slate-500 mt-1 max-w-[100px] leading-tight">Top 10% Worldwide</p>
           </div>
           <div className="text-right">
             <span className="block text-[#004f32] font-bold text-sm leading-none">Top</span>
             <span className="block text-[#004f32] font-bold text-xl leading-none">10%</span>
           </div>
        </div>
      </div>
  );
}

