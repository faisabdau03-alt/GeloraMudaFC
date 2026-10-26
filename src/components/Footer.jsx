import React, { useState } from 'react';
import { CLUB_CONFIG, getWhatsAppLink } from '../data/clubData';
import { MessageCircle, ArrowUp, MapPin, Mail } from 'lucide-react';

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
    </svg>
  );
}

export default function Footer() {
  const [currentYear] = useState(() => new Date().getFullYear());
  const waLink = getWhatsAppLink();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070A0F] text-gray-400 relative border-t-2 border-[#D4AF37]/30">
      {/* Top subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Col 1: Club Identity */}
          <div className="lg:col-span-1 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-14 relative flex items-center justify-center flex-shrink-0">
                <img
                  src={CLUB_CONFIG.profile.logoUrl}
                  alt="Logo Gelora Muda FC"
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)]"
                />
              </div>
              <div>
                <span className="font-extrabold text-lg tracking-wider text-white font-['Montserrat'] block">
                  {CLUB_CONFIG.profile.name}
                </span>
                <span className="text-[10px] text-[#D4AF37] font-semibold tracking-widest uppercase">
                  Est. {CLUB_CONFIG.profile.establishedYear} • Desa Kebanggaan
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 italic font-medium leading-relaxed">
              "{CLUB_CONFIG.profile.tagline}"
            </p>

            <p className="mt-3 text-xs text-gray-400 leading-normal">
              {CLUB_CONFIG.profile.heroDescription}
            </p>
          </div>

          {/* Col 2: Navigasi Cepat */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-['Montserrat'] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0D6EFD]" />
              Navigasi Cepat
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#jadwal" className="hover:text-[#FFE885] transition-colors flex items-center gap-1.5">
                  <span>▸</span> Jadwal &amp; Hasil Laga
                </a>
              </li>
              <li>
                <a href="#pemain" className="hover:text-[#FFE885] transition-colors flex items-center gap-1.5">
                  <span>▸</span> Squad Pemain Desa
                </a>
              </li>
              <li>
                <a href="#galeri" className="hover:text-[#FFE885] transition-colors flex items-center gap-1.5">
                  <span>▸</span> Galeri &amp; Dokumentasi
                </a>
              </li>
              <li>
                <a href="#kas-sponsor" className="hover:text-[#FFE885] transition-colors flex items-center gap-1.5">
                  <span>▸</span> Transparansi Kas &amp; Sponsor
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Hubungi Kami & Sekretariat */}
          <div id="kontak">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-['Montserrat'] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              Sekretariat &amp; Kontak
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{CLUB_CONFIG.contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0D6EFD] flex-shrink-0" />
                <span className="text-gray-300">{CLUB_CONFIG.contact.email}</span>
              </div>
              <div className="pt-2">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#0D6EFD]/20 text-[#38BDF8] border border-blue-500/40 hover:bg-[#0D6EFD] hover:text-white transition-all text-xs font-bold"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: {CLUB_CONFIG.contact.whatsappDisplay}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Media Sosial & Kembali Ke Atas */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-['Montserrat'] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Media Sosial Resmi
              </h4>
              <p className="text-xs text-gray-400 mb-4 leading-normal">
                Ikuti perkembangan pertandingan dan kabar terkini klub di media sosial kami.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={CLUB_CONFIG.contact.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-[#D4AF37] hover:bg-white/10 flex items-center justify-center text-gray-300 hover:text-[#FFE885] transition-all"
                  aria-label="Instagram Gelora Muda FC"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={CLUB_CONFIG.contact.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-[#0D6EFD] hover:bg-white/10 flex items-center justify-center text-gray-300 hover:text-[#38BDF8] transition-all"
                  aria-label="Facebook Gelora Muda FC"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href={CLUB_CONFIG.contact.socialMedia.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-red-500 hover:bg-white/10 flex items-center justify-center text-gray-300 hover:text-red-400 transition-all"
                  aria-label="YouTube Gelora Muda FC"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#D4AF37] hover:text-[#FFE885] transition-colors cursor-pointer"
              >
                <ArrowUp className="w-4 h-4" />
                <span>Kembali Ke Atas</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p className="text-center sm:text-left">
            &copy; {currentYear} <strong className="text-white">{CLUB_CONFIG.profile.name}</strong>. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <p className="text-center sm:text-right text-[11px] text-gray-500">
            Dikelola oleh Panitia &amp; Pemuda Desa Tercinta.
          </p>
        </div>
      </div>
    </footer>
  );
}
