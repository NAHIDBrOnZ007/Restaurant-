import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Menu, X, ShoppingBag } from 'lucide-react';

export default function Navigation() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = router.pathname === '/';
  const navStyle = (scrolled || !isHomePage) 
    ? 'bg-white/95 backdrop-blur-md shadow-sm py-4 text-slate-900' 
    : 'bg-transparent py-6 md:py-8 text-white';

  const logoTextColor = (scrolled || !isHomePage) ? 'text-slate-900' : 'text-white';
  const logoAccentColor = (scrolled || !isHomePage) ? 'text-gold-600' : 'text-gold-400';
  const buttonOutlineStyle = (scrolled || !isHomePage)
    ? 'border-slate-200 text-slate-900 hover:border-slate-900' 
    : 'border-white/30 text-white hover:bg-white hover:text-slate-900';
  
  const btnHeightClass = "h-[46px] flex items-center justify-center";

  const NavLink = ({ href, label }) => {
    const isActive = router.pathname === href;
    return (
      <Link href={href}>
        <button
          className={`relative px-2 py-1 text-xs font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${
            isActive 
              ? 'text-gold-600' 
              : (scrolled || !isHomePage) ? 'text-slate-600 hover:text-slate-900' : 'text-slate-300 hover:text-white'
          }`}
        >
          {label}
          <span className={`absolute bottom-0 left-0 h-0.5 bg-gold-500 transition-all duration-300 ${isActive ? 'w-full' : 'w-0'}`}></span>
        </button>
      </Link>
    );
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${navStyle}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/">
          <div className="font-serif text-2xl md:text-3xl cursor-pointer flex items-center gap-2 group">
            <span className={`font-bold tracking-tighter transition-colors ${logoTextColor}`}>TASTE</span>
            <span className={`font-light italic transition-colors ${logoAccentColor}`}>of</span>
            <span className={`font-bold tracking-tighter transition-colors ${logoTextColor}`}>ASIA</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <NavLink href="/" label="Home" />
          <NavLink href="/about" label="About Us" />
          <NavLink href="/gallery" label="Gallery" />
          <NavLink href="/contact" label="Contact" />
          
          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Link href="/booking">
              <button 
                className={`px-6 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 border ${buttonOutlineStyle} ${btnHeightClass}`}
              >
                Book Table
              </button>
            </Link>
            <button 
              onClick={() => window.open('https://example.com/order', '_blank')}
              className={`px-6 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 ${btnHeightClass} ${
                (scrolled || !isHomePage) 
                  ? 'bg-gold-500 text-white hover:bg-slate-900' 
                  : 'bg-gold-500 text-white hover:bg-white hover:text-slate-900'
              }`}
            >
              Order Online
            </button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden ${(scrolled || !isHomePage) ? 'text-slate-900' : 'text-white'}`} 
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-8 h-8" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[60] bg-white transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 flex justify-end">
          <button onClick={() => setMobileMenuOpen(false)} className="text-slate-400 hover:text-slate-900">
            <X className="w-8 h-8" />
          </button>
        </div>
        <div className="flex flex-col items-center gap-10 text-3xl font-serif">
          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About Us' },
            { href: '/gallery', label: 'Gallery' },
            { href: '/contact', label: 'Contact' },
            { href: '/booking', label: 'Reservations' }
          ].map((item, idx) => (
            <Link key={item.href} href={item.href}>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                style={{ transitionDelay: `${idx * 100}ms` }}
                className={`hover:text-gold-600 transition-all duration-500 transform ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} ${router.pathname === item.href ? 'text-gold-600' : 'text-slate-900'}`}
              >
                {item.label}
              </button>
            </Link>
          ))}
          <button 
             onClick={() => window.open('https://example.com/order', '_blank')}
             style={{ transitionDelay: '500ms' }}
             className={`flex items-center gap-2 text-white bg-gold-500 px-8 py-3 rounded-full text-lg sans-serif uppercase tracking-widest mt-4 hover:bg-slate-900 transition-all duration-500 transform ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          >
             Order Online <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

