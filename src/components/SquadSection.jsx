import React, { useState } from 'react';
import { CLUB_CONFIG } from '../data/clubData';
import { Users, Shield, Award } from 'lucide-react';

export default function SquadSection() {
  const [selectedPosition, setSelectedPosition] = useState('ALL');
  const squad = CLUB_CONFIG.squad || [];

  const positions = [
    { key: 'ALL', label: 'Semua Squad' },
    { key: 'Goalkeeper', label: 'Kiper (GK)' },
    { key: 'Defender', label: 'Bek (DF)' },
    { key: 'Midfielder', label: 'Gelandang (MF)' },
    { key: 'Forward', label: 'Penyerang (FW)' },
  ];

  const filteredSquad = squad.filter((player) => {
    if (selectedPosition === 'ALL') return true;
    return player.position === selectedPosition;
  });

  return (
    <section id="pemain" className="py-20 bg-[#0B0E14] relative scroll-mt-20 border-t border-white/5">
      {/* Background accents */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#0D6EFD]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Kekuatan Tim Desa</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Montserrat'] uppercase tracking-tight">
            SQUAD GELORA MUDA FC
          </h2>
          <div className="w-20 h-1 bg-[#0D6EFD] mx-auto mt-4 rounded-full" />
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            Daftar pemain bermental juara yang siap bertanding menjaga sportivitas dan marwah desa.
          </p>

          {/* Position Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {positions.map((pos) => (
              <button
                key={pos.key}
                onClick={() => setSelectedPosition(pos.key)}
                className={`py-2 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  selectedPosition === pos.key
                    ? 'bg-[#0D6EFD] text-white shadow-lg shadow-blue-600/35 border border-blue-400/40 scale-105'
                    : 'bg-[#121620] text-gray-400 hover:text-white border border-white/10 hover:border-[#D4AF37]/40'
                }`}
              >
                {pos.label}
              </button>
            ))}
          </div>
        </div>

        {/* Squad Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSquad.map((player) => (
            <div
              key={player.id}
              className="group relative rounded-2xl overflow-hidden card-dark-gradient gold-border-subtle hover:border-[#D4AF37] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#0D6EFD]/20 flex flex-col"
            >
              {/* Card Header Tag: Captain or Position */}
              <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5">
                {player.isCaptain && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase bg-[#D4AF37] text-black shadow-md shadow-black/50">
                    <Award className="w-3 h-3 text-black" />
                    Kapten
                  </span>
                )}
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase bg-black/60 text-gray-200 backdrop-blur-md border border-white/10">
                  {player.position}
                </span>
              </div>

              {/* Big Gold Squad Number in Top Right */}
              <div className="absolute top-2 right-3 z-20">
                <span className="text-3xl sm:text-4xl font-black font-['Montserrat'] text-[#D4AF37] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-transform inline-block">
                  #{player.number}
                </span>
              </div>

              {/* Player Image with 3:4 Aspect Ratio */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0F172A] flex items-center justify-center">
                <img
                  src={player.photo}
                  alt={`Foto ${player.name} - Jersey Gelora Muda FC`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle bottom vignette inside photo container */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121824] via-transparent to-transparent opacity-90" />
              </div>

              {/* Card Body: Name & Role details */}
              <div className="p-4 flex-1 flex flex-col justify-between relative z-10 -mt-6">
                <div>
                  <h3 className="text-base sm:text-lg font-black text-white font-['Montserrat'] tracking-wide group-hover:text-[#FFE885] transition-colors line-clamp-1">
                    {player.name}
                  </h3>
                  <p className="text-xs text-[#0D6EFD] font-semibold mt-0.5">
                    {player.roleDetail}
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
                  <span className="flex items-center gap-1">
                    <Shield className="w-3 h-3 text-[#D4AF37]" />
                    Gelora Muda FC
                  </span>
                  {player.isPlaceholder && (
                    <span className="text-gray-500 italic">Roster Resmi</span>
                  )}
                </div>
              </div>

              {/* Hover Bottom Glow Strip */}
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#0D6EFD] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Bottom Note for Admins */}
        <div className="mt-12 text-center p-4 rounded-xl bg-white/[0.02] border border-white/5 max-w-2xl mx-auto">
          <p className="text-xs text-gray-400">
            ℹ️ <strong className="text-gray-300">Catatan Pengurus:</strong> Data nomor punggung, nama, dan foto pemain di atas dapat diperbarui secara terpusat melalui file <code className="text-[#FFE885] font-mono text-[11px] bg-white/10 px-1 py-0.5 rounded">src/data/clubData.js</code>.
          </p>
        </div>
      </div>
    </section>
  );
}
