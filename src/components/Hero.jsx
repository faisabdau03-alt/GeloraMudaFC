import React from 'react';
import { CLUB_CONFIG } from '../data/clubData';
import { Calendar, Users, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Stadium Visual with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={CLUB_CONFIG.profile.stadiumBgUrl}
          alt="Suasana Stadion Malam Hari"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Layer 1: Dark Vignette Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0E14]/80 via-[#0B0E14]/70 to-[#0B0E14]" />
        
        {/* Layer 2: Electric Blue Spotlight Glow in Center */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[800px] h-[350px] sm:h-[500px] bg-[#0D6EFD]/25 blur-[120px] pointer-events-none rounded-full" />
        
        {/* Layer 3: Subtle Gold Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Official Club Badge / Crest */}
        <div className="relative mb-6 group cursor-pointer">
          <div className="absolute -inset-3 bg-[#D4AF37]/25 rounded-full blur-xl group-hover:bg-[#0D6EFD]/35 transition-all duration-500" />
          <div className="relative w-28 h-32 sm:w-36 sm:h-40 p-1 flex items-center justify-center">
            <img
              src={CLUB_CONFIG.profile.logoUrl}
              alt="Lambang Gelora Muda FC"
              className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Village Football Label */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#D4AF37]/30 backdrop-blur-md mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-xs sm:text-sm font-semibold text-gray-200 tracking-wider uppercase">
            Klub Sepak Bola Desa Kebanggaan Warga
          </span>
        </div>

        {/* Club Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white uppercase font-['Montserrat'] drop-shadow-md">
          {CLUB_CONFIG.profile.name}
        </h1>

        {/* Required Tagline - Written exactly as instructed */}
        <p className="mt-3 text-lg sm:text-2xl md:text-3xl font-extrabold text-[#D4AF37] tracking-wide font-['Montserrat'] italic drop-shadow-sm">
          "{CLUB_CONFIG.profile.tagline}"
        </p>

        {/* Short Meaningful Description */}
        <p className="mt-5 max-w-2xl text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed font-normal">
          {CLUB_CONFIG.profile.heroDescription}
        </p>

        {/* Two Mandatory Call to Action Buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none">
          {/* Button 1: Deleng Jadwal Tanding (Electric Blue with White Text) */}
          <a
            href="#jadwal"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-[#0D6EFD] hover:bg-blue-600 transition-all duration-200 shadow-lg shadow-blue-600/35 hover:shadow-blue-500/50 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Calendar className="w-5 h-5" />
            <span>Deleng Jadwal Tanding</span>
          </a>

          {/* Button 2: Daftar Pemain (Transparent with Gold Border and Gold Text) */}
          <a
            href="#pemain"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base text-[#D4AF37] bg-transparent border-2 border-[#D4AF37] hover:bg-[#D4AF37]/15 hover:border-[#F59E0B] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-sm shadow-md shadow-black/40"
          >
            <Users className="w-5 h-5" />
            <span>Daftar Pemain</span>
          </a>
        </div>

        {/* Bottom Feature Badges / Highlights (No fake trophy claims) */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 w-full max-w-3xl">
          <div className="flex flex-col items-center text-center p-3 rounded-lg bg-white/[0.03] border border-white/5">
            <span className="text-xl sm:text-2xl font-black text-white font-['Montserrat']">
              100%
            </span>
            <span className="text-xs sm:text-sm text-gray-400 mt-1">
              Semangat Putra Desa
            </span>
          </div>

          <div className="flex flex-col items-center text-center p-3 rounded-lg bg-white/[0.03] border border-white/5">
            <span className="text-xl sm:text-2xl font-black text-[#D4AF37] font-['Montserrat']">
              Sportivitas
            </span>
            <span className="text-xs sm:text-sm text-gray-400 mt-1">
              Disiplin &amp; Integritas
            </span>
          </div>

          <div className="col-span-2 md:col-span-1 flex flex-col items-center text-center p-3 rounded-lg bg-white/[0.03] border border-white/5">
            <span className="text-xl sm:text-2xl font-black text-[#0D6EFD] font-['Montserrat']">
              Transparan
            </span>
            <span className="text-xs sm:text-sm text-gray-400 mt-1">
              Kas &amp; Kemitraan Terbuka
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
