import React, { useState } from 'react';
import { CLUB_CONFIG, getWhatsAppLink } from '../data/clubData';
import { HeartHandshake, QrCode, Sparkles, MessageCircle, ZoomIn, ShieldCheck, CheckCircle2 } from 'lucide-react';
import QrisModal from './QrisModal';

export default function FinanceSponsorSection() {
  const [showQrisModal, setShowQrisModal] = useState(false);

  const sponsors = CLUB_CONFIG.sponsors;
  const finance = CLUB_CONFIG.finance;

  const waSponsorLink = getWhatsAppLink(
    `Halo Manajemen Gelora Muda FC, saya tertarik mendiskusikan peluang kemitraan / sponsor bersama klub.`
  );

  const waDonationConfirmLink = getWhatsAppLink(
    `Halo Bendahara Gelora Muda FC, saya ingin konfirmasi dukungan donasi sukarela untuk kemajuan klub.`
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* ========================================================
              BAGIAN A: MITRA & SPONSOR KAMI (Grid Logo Sponsor)
             ======================================================== */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-xs font-bold text-[#FFE885] uppercase tracking-wider mb-3">
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>Kolaborasi &amp; Sinergi</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white font-['Montserrat'] tracking-tight">
                {sponsors.title}
              </h2>
              <div className="w-16 h-1 bg-[#D4AF37] mt-3 rounded-full" />
              <p className="mt-3 text-sm text-gray-300">
                {sponsors.subtitle}
              </p>

              {/* Grid Logo Sponsor Resmi */}
              <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                {sponsors.sponsorList.map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="p-3.5 rounded-xl bg-[#0B0E14]/75 border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/20 flex flex-col items-center justify-between text-center group min-h-[110px]"
                  >
                    <div className="w-full h-14 flex items-center justify-center p-1">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="max-h-12 w-auto max-w-full object-contain filter drop-shadow transition-transform duration-200 group-hover:scale-105"
                      />
                    </div>
                    <div className="w-full mt-2 pt-2 border-t border-white/10">
                      <span className="text-xs font-bold text-white block truncate font-['Montserrat']">
                        {sponsor.name}
                      </span>
                      <span className="text-[10px] text-[#FFE885] block truncate mt-0.5">
                        {sponsor.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Callout Peluang Kemitraan */}
              <div className="mt-6 p-4 rounded-xl bg-black/35 border border-[#D4AF37]/25 backdrop-blur-md">
                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#FFE885] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs sm:text-sm font-bold text-white block">
                      Buka Peluang Kemitraan Baru
                    </strong>
                    <p className="text-xs text-gray-300 mt-0.5 leading-relaxed">
                      {sponsors.partnershipInvitation}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3 text-[11px] text-gray-300">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-[#FFE885]" /> Logo di Jersey
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-[#FFE885]" /> Banner Lapangan
                    </span>
                  </div>

                  <a
                    href={waSponsorLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#D4AF37] hover:bg-[#F59E0B] text-black font-extrabold text-xs transition-all shadow-md hover:scale-[1.02]"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Daftar Sponsor (WA)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>


          {/* ========================================================
              BAGIAN B: DUKUNGAN KLUB & BARCODE DONASI LANGSUNG
              (Tanpa Menampilkan Jumlah Kas, Barcode Tampil Siap Scan)
             ======================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="rounded-2xl p-6 sm:p-7 bg-[#0B0E14]/85 border-2 border-[#D4AF37]/45 backdrop-blur-md shadow-2xl flex flex-col h-full justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D6EFD]/20 border border-[#0D6EFD]/40 text-xs font-bold text-[#38BDF8] uppercase tracking-wider mb-3">
                  <QrCode className="w-3.5 h-3.5" />
                  <span>Dukungan &amp; Sedekah Klub</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-white font-['Montserrat'] tracking-tight">
                  {finance.title}
                </h2>
                <p className="text-xs sm:text-sm font-semibold text-[#FFE885] mt-1">
                  {finance.subtitle}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {finance.explanation}
                </p>

                {/* Direct Visible Barcode Frame */}
                <div className="mt-6 flex flex-col items-center">
                  <div
                    onClick={() => setShowQrisModal(true)}
                    className="group relative cursor-pointer p-2.5 rounded-2xl bg-white shadow-xl hover:shadow-[#D4AF37]/30 transition-all max-w-[220px] sm:max-w-[240px] border-2 border-[#D4AF37]"
                    title="Klik untuk memperbesar barcode"
                  >
                    <img
                      src={finance.barcodeImg}
                      alt="Barcode Donasi Gelora Muda FC"
                      className="w-full h-auto object-contain rounded-lg"
                    />

                    {/* Hover Zoom Hint Overlay */}
                    <div className="absolute inset-0 bg-black/60 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 text-white">
                      <ZoomIn className="w-8 h-8 text-[#FFE885]" />
                      <span className="text-xs font-bold">Klik Perbesar</span>
                    </div>
                  </div>

                  <span className="text-[11px] text-gray-400 mt-2.5 text-center">
                    {finance.notice}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={() => setShowQrisModal(true)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all cursor-pointer"
                >
                  <ZoomIn className="w-4 h-4 text-[#D4AF37]" />
                  <span>Perbesar Barcode</span>
                </button>

                <a
                  href={waDonationConfirmLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#0D6EFD] hover:bg-blue-600 text-white font-bold text-xs transition-all shadow-md shadow-blue-600/30"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Konfirmasi Donasi</span>
                </a>
              </div>

              <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-gray-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Dana dikelola langsung oleh Bendahara Resmi Klub Desa</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Modal for Zooming / Enlarging Barcode */}
      <QrisModal
        isOpen={showQrisModal}
        onClose={() => setShowQrisModal(false)}
      />
    </section>
  );
}
