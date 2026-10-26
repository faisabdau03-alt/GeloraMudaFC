import React, { useState, useEffect } from 'react';
import { CLUB_CONFIG, getWhatsAppLink } from '../data/clubData';
import { Menu, X, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Jadwal', href: '#jadwal' },
    { name: 'Pemain', href: '#pemain' },
    { name: 'Galeri', href: '#galeri' },
    { name: 'Kas & Sponsor', href: '#kas-sponsor' },
  ];

  const waLink = getWhatsAppLink(
    `Halo Pengurus ${CLUB_CONFIG.profile.name}, saya ingin menghubungi Anda melalui website resmi.`
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-header py-3 shadow-lg shadow-black/40'
          : 'bg-[#0B0E14]/75 backdrop-blur-md py-4 border-b border-[#D4AF37]/15'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Club Name */}
          <a
            href="#"
            className="flex items-center gap-3 group transition-transform duration-200 hover:scale-[1.02]"
            aria-label={`${CLUB_CONFIG.profile.name} Beranda`}
          >
            <div className="w-10 h-11 sm:w-11 sm:h-12 relative flex items-center justify-center">
              <img
                src={CLUB_CONFIG.profile.logoUrl}
                alt="Logo Gelora Muda FC"
                className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(212,175,55,0.35)]"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-wider text-white font-['Montserrat'] flex items-center gap-1.5">
                {CLUB_CONFIG.profile.name}
              </span>
              <span className="text-[10px] tracking-widest text-[#D4AF37] font-semibold uppercase -mt-0.5">
                Saka Desa nggo Juara
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-gray-200 hover:text-white hover:bg-white/5 transition-all duration-150 relative group"
              >
                {link.name}
                <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
              </a>
            ))}
          </nav>

          {/* Right Action: WhatsApp CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold bg-[#0D6EFD] text-white hover:bg-blue-600 transition-all duration-200 shadow-md shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.03] active:scale-[0.98] border border-blue-400/30"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Hubungi Kami</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              aria-expanded={isOpen}
              aria-label="Toggle menu navigasi"
            >
              {isOpen ? <X className="w-6 h-6 text-[#D4AF37]" /> : <Menu className="w-6 h-6 text-[#D4AF37]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="md:hidden glass-header border-b border-[#D4AF37]/20 px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-lg text-base font-semibold text-gray-100 hover:text-white hover:bg-white/10 hover:border-l-4 hover:border-[#D4AF37] transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg text-sm font-bold bg-[#0D6EFD] text-white hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/30"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Hubungi Kami (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
