import React, { useState } from 'react';
import { CLUB_CONFIG, formatRupiah, getWhatsAppLink } from '../data/clubData';
import { HeartHandshake, QrCode, FileText, CheckCircle2, TrendingUp, Sparkles, MessageCircle } from 'lucide-react';
import FinanceModal from './FinanceModal';
import QrisModal from './QrisModal';

export default function FinanceSponsorSection() {
  const [showFinanceModal, setShowFinanceModal] = useState(false);
  const [showQrisModal, setShowQrisModal] = useState(false);

  const sponsors = CLUB_CONFIG.sponsors;
  const finance = CLUB_CONFIG.finance;

  const waSponsorProposalLink = getWhatsAppLink(
    `Halo Manajemen Gelora Muda FC, saya tertarik mendiskusikan peluang kemitraan / sponsor dengan klub.`
  );

  return (
    <section
      id="kas-sponsor"
      className="py-20 relative banner-royal-gradient bg-grid-pattern border-t-2 border-b-2 border-[#D4AF37]/30 overflow-hidden scroll-mt-20"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#0D6EFD]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#D4AF37]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* ========================================================
              BAGIAN A: SPONSOR & MITRA (Grid / Kolom Kiri)
             ======================================================== */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-xs font-bold text-[#FFE885] uppercase tracking-wider mb-3">
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>Kolaborasi &amp; Sinergi</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white font-['Montserrat'] tracking-tight">
                {sponsors.title}
              </h2>
              <div className="w-16 h-1 bg-[#D4AF37] mt-3 rounded-full" />

              {/* Sponsor Grid or Polite Empty State */}
              {sponsors.sponsorList && sponsors.sponsorList.length > 0 ? (
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {sponsors.sponsorList.map((sponsor) => (
                    <div
                      key={sponsor.id}
                      className="p-4 rounded-xl bg-black/40 border border-[#D4AF37]/30 flex flex-col items-center text-center hover:border-[#D4AF37] transition-all"
                    >
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="h-12 object-contain mb-2"
                      />
                      <span className="text-xs font-bold text-white">{sponsor.name}</span>
                    </div>
                  ))}
                </div>
              ) : (
                /* Empty state polite message */
                <div className="mt-7 p-6 rounded-2xl bg-black/35 border border-[#D4AF37]/25 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-[#FFE885] font-bold text-sm mb-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Peluang Terbuka untuk Mitra &amp; Sponsor</span>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {sponsors.emptyStateMessage}
                  </p>

                  {/* Partnership Benefits Highlights */}
                  <div className="mt-5 space-y-3 pt-4 border-t border-white/10">
                    {sponsors.partnershipBenefits.map((b) => (
                      <div key={b.id} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#FFE885] flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-xs sm:text-sm font-bold text-white block">
                            {b.title}
                          </strong>
                          <p className="text-xs text-gray-400 mt-0.5 leading-normal">
                            {b.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Sponsor CTA Button */}
                  <div className="mt-6">
                    <a
                      href={waSponsorProposalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#D4AF37] hover:bg-[#F59E0B] text-black font-extrabold text-xs sm:text-sm transition-all shadow-lg shadow-[#D4AF37]/20 hover:scale-[1.02]"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Ajukan Kerjasama Sponsor (WhatsApp)</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>


          {/* ========================================================
              BAGIAN B: DUKUNGAN KAS KLUB (Grid / Kolom Kanan)
             ======================================================== */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div className="rounded-2xl p-6 sm:p-8 bg-[#0B0E14]/70 border-2 border-[#D4AF37]/40 backdrop-blur-md shadow-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D6EFD]/20 border border-[#0D6EFD]/40 text-xs font-bold text-[#38BDF8] uppercase tracking-wider mb-3">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Akuntabilitas Desa</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white font-['Montserrat'] tracking-tight">
                {finance.title}
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-[#FFE885] mt-1">
                {finance.subtitle}
              </p>

              <p className="mt-4 text-xs sm:text-sm text-gray-300 leading-relaxed">
                {finance.explanation}
              </p>

              {/* Ringkasan Transparansi Kas Terkini */}
              <div className="mt-6 p-4 rounded-xl bg-[#121824] border border-[#D4AF37]/30">
                <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                  <span>{finance.summary.period}</span>
                  <span className="text-emerald-400 font-semibold">Tervalidasi Bendahara</span>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2 border-t border-white/10">
                  <div>
                    <span className="text-[11px] text-gray-400 block">Saldo Kas Terkini</span>
                    <span className="text-xl sm:text-2xl font-black text-[#FFE885] font-['Montserrat']">
                      {formatRupiah(finance.summary.totalBalance)}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] text-gray-400 block">Total Pemasukan</span>
                    <span className="text-base sm:text-lg font-bold text-emerald-400 font-['Montserrat']">
                      {formatRupiah(finance.summary.totalIncome)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons for Kas & QRIS */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Button 1: Lihat Informasi Kas Klub */}
                <button
                  onClick={() => setShowFinanceModal(true)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm border border-white/15 hover:border-[#D4AF37]/50 transition-all shadow-md cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-[#D4AF37]" />
                  <span>Lihat Informasi Kas Klub</span>
                </button>

                {/* Button 2: Scan QRIS */}
                <button
                  onClick={() => setShowQrisModal(true)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#0D6EFD] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-blue-600/30 cursor-pointer"
                >
                  <QrCode className="w-4 h-4" />
                  <span>Scan QRIS Resmi</span>
                </button>
              </div>

              <div className="mt-4 text-center">
                <span className="text-[11px] text-gray-400 italic">
                  *Tidak menyimpan atau menampilkan data transaksi pribadi yang sensitif.
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Modals */}
      <FinanceModal
        isOpen={showFinanceModal}
        onClose={() => setShowFinanceModal(false)}
      />
      <QrisModal
        isOpen={showQrisModal}
        onClose={() => setShowQrisModal(false)}
      />
    </section>
  );
}
