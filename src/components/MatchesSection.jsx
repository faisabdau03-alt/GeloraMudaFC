import React, { useState } from 'react';
import { CLUB_CONFIG } from '../data/clubData';
import { Calendar, Clock, MapPin, ExternalLink, Trophy, AlertCircle } from 'lucide-react';

export default function MatchesSection() {
  const [filter, setFilter] = useState('ALL'); // 'ALL', 'UPCOMING', 'FINISHED'
  const matches = CLUB_CONFIG.matches || [];

  const filteredMatches = matches.filter((match) => {
    if (filter === 'UPCOMING') return match.status === 'Upcoming' || match.status === 'Live';
    if (filter === 'FINISHED') return match.status === 'Full Time';
    return true;
  });

  return (
    <section id="jadwal" className="py-20 relative bg-[#0B0E14] scroll-mt-20">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#0D6EFD]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D6EFD]/10 border border-[#0D6EFD]/30 text-xs font-bold text-[#0D6EFD] uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Agenda &amp; Hasil Laga</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Montserrat'] uppercase tracking-tight">
            JADWAL PERTANDINGAN
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            Ikuti perjalanan bertanding Gelora Muda FC. Jadwal diperbarui secara berkala oleh manajemen klub.
          </p>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center gap-2 mt-8 p-1.5 bg-[#121620] border border-white/10 rounded-xl max-w-md mx-auto">
            <button
              onClick={() => setFilter('ALL')}
              className={`flex-1 py-2 px-3 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                filter === 'ALL'
                  ? 'bg-[#0D6EFD] text-white shadow-md shadow-blue-600/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Semua ({matches.length})
            </button>
            <button
              onClick={() => setFilter('UPCOMING')}
              className={`flex-1 py-2 px-3 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                filter === 'UPCOMING'
                  ? 'bg-[#0D6EFD] text-white shadow-md shadow-blue-600/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Mendatang
            </button>
            <button
              onClick={() => setFilter('FINISHED')}
              className={`flex-1 py-2 px-3 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                filter === 'FINISHED'
                  ? 'bg-[#0D6EFD] text-white shadow-md shadow-blue-600/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Hasil Selesai
            </button>
          </div>
        </div>

        {/* Empty State when no matches */}
        {filteredMatches.length === 0 ? (
          <div className="max-w-xl mx-auto p-8 rounded-2xl bg-[#121620] border border-[#D4AF37]/30 text-center">
            <AlertCircle className="w-12 h-12 text-[#D4AF37] mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Jadwal Belum Tersedia</h3>
            <p className="text-gray-400 text-sm">
              Jadwal pertandingan akan segera diperbarui oleh pengurus klub setelah konfirmasi panitia kompetisi.
            </p>
          </div>
        ) : (
          /* Match Cards Grid */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredMatches.map((match) => (
              <div
                key={match.id}
                className="card-dark-gradient rounded-2xl p-5 sm:p-6 gold-border-subtle hover:border-[#D4AF37]/60 transition-all duration-300 shadow-xl shadow-black/50 hover:shadow-[#0D6EFD]/10 flex flex-col justify-between group"
              >
                {/* Top Competition & Status Header */}
                <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3 mb-5">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-[#D4AF37]" />
                    <span className="text-xs sm:text-sm font-bold text-gray-200 tracking-wide">
                      {match.competition}
                    </span>
                  </div>

                  {/* Status Pill */}
                  <div>
                    {match.status === 'Upcoming' && (
                      <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase bg-blue-900/60 text-blue-300 border border-blue-500/40">
                        Upcoming
                      </span>
                    )}
                    {match.status === 'Live' && (
                      <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase bg-red-900/70 text-red-300 border border-red-500 animate-pulse flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-400 animate-ping" />
                        Live
                      </span>
                    )}
                    {match.status === 'Full Time' && (
                      <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase bg-emerald-950/80 text-emerald-400 border border-emerald-500/40">
                        Full Time
                      </span>
                    )}
                  </div>
                </div>

                {/* Matchup Layout: Logo Gelora Muda FC — VS — Logo Tim Lawan */}
                <div className="grid grid-cols-3 items-center py-4 my-auto">
                  {/* Home Team */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 p-1.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center transition-transform group-hover:scale-105">
                      <img
                        src={match.homeTeam.logo}
                        alt={match.homeTeam.name}
                        className="w-full h-full object-contain filter drop-shadow-md"
                      />
                    </div>
                    <span
                      className={`mt-3 text-xs sm:text-sm font-bold font-['Montserrat'] ${
                        match.homeTeam.name.includes('Gelora Muda')
                          ? 'text-[#FFE885]'
                          : 'text-white'
                      }`}
                    >
                      {match.homeTeam.name}
                    </span>
                    {match.homeTeam.name.includes('Gelora Muda') && (
                      <span className="text-[10px] text-[#0D6EFD] font-bold uppercase mt-0.5">
                        Tim Kita
                      </span>
                    )}
                  </div>

                  {/* Center Score / VS */}
                  <div className="flex flex-col items-center justify-center text-center px-2">
                    {match.status === 'Full Time' && match.score ? (
                      <div className="flex flex-col items-center">
                        <div className="px-4 py-2 rounded-xl bg-[#0B0E14] border border-[#D4AF37]/50 shadow-inner">
                          <span className="text-2xl sm:text-3xl font-black text-white tracking-widest font-['Montserrat']">
                            {match.score}
                          </span>
                        </div>
                        <span className="text-[11px] text-gray-400 font-semibold uppercase mt-1">
                          Skor Akhir
                        </span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-[#1A365D] border border-[#D4AF37] flex items-center justify-center text-xs font-black text-[#D4AF37] shadow-lg shadow-blue-900/40">
                          VS
                        </div>
                        <span className="text-[11px] text-gray-400 font-medium mt-1.5">
                          {match.round || 'Laga'}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Away Team */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 p-1.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center transition-transform group-hover:scale-105">
                      <img
                        src={match.awayTeam.logo}
                        alt={match.awayTeam.name}
                        className="w-full h-full object-contain filter drop-shadow-md"
                      />
                    </div>
                    <span
                      className={`mt-3 text-xs sm:text-sm font-bold font-['Montserrat'] ${
                        match.awayTeam.name.includes('Gelora Muda')
                          ? 'text-[#FFE885]'
                          : 'text-white'
                      }`}
                    >
                      {match.awayTeam.name}
                    </span>
                    {match.awayTeam.name.includes('Gelora Muda') && (
                      <span className="text-[10px] text-[#0D6EFD] font-bold uppercase mt-0.5">
                        Tim Kita
                      </span>
                    )}
                  </div>
                </div>

                {/* Match Details: Date, Time, Venue */}
                <div className="mt-5 pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-300">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                    <span>{match.date}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#0D6EFD] flex-shrink-0" />
                    <span>Kick-off: <strong className="text-white font-semibold">{match.kickOff}</strong></span>
                  </div>

                  <div className="flex items-center gap-2 sm:col-span-2">
                    <MapPin className="w-4 h-4 text-rose-500 flex-shrink-0" />
                    <span className="truncate">{match.venue}</span>
                  </div>
                </div>

                {/* Bottom Action: Google Maps Button */}
                <div className="mt-4 pt-3 flex items-center justify-between">
                  {match.isPlaceholder ? (
                    <span className="text-[10px] text-gray-500 italic">
                      *Contoh jadwal tanding pengurus
                    </span>
                  ) : <div />}

                  <a
                    href={match.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white/5 hover:bg-white/15 text-gray-200 hover:text-white border border-white/10 transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    <span>Buka Google Maps</span>
                    <ExternalLink className="w-3 h-3 text-gray-400" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

