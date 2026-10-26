import React from 'react';
import { CLUB_CONFIG, getWhatsAppLink } from '../data/clubData';
import { X, QrCode, MessageCircle, Info } from 'lucide-react';

export default function QrisModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const finance = CLUB_CONFIG.finance;
  const waContactLink = getWhatsAppLink(
    `Halo Bendahara Gelora Muda FC, saya ingin konfirmasi donasi / dukungan sukarela untuk klub.`
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md bg-[#0F172A] border border-[#D4AF37]/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-white"
      >
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-[#1A365D] to-[#0B0E14] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center">
              <QrCode className="w-5 h-5 text-[#FFE885]" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black font-['Montserrat']">
                Dukungan Kas via QRIS
              </h3>
              <p className="text-[11px] text-gray-300">
                Gelora Muda FC Official
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-5 flex flex-col items-center text-center">
          {/* QRIS Visual Card / Official Placeholder */}
          <div className="w-full max-w-[280px] rounded-xl overflow-hidden shadow-lg border border-white/15 bg-white p-2">
            <img
              src={finance.qrisPlaceholderImg}
              alt="QRIS Gelora Muda FC"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Security & Admin Notice */}
          <div className="mt-4 p-3.5 rounded-xl bg-amber-950/40 border border-amber-500/40 text-left text-xs text-amber-200 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-[#F59E0B] flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-100 block">Pemberitahuan Resmi:</strong>
              <p className="mt-0.5 text-amber-200/90 leading-relaxed">
                {finance.qrisNotice}
              </p>
            </div>
          </div>

          <p className="mt-4 text-xs text-gray-400">
            Demi keamanan transaksi dan transparansi bersama, mohon tidak mentransfer ke rekening selain yang telah diverifikasi oleh pengurus resmi klub.
          </p>

          {/* Contact Treasurer Button */}
          <a
            href={waContactLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0D6EFD] hover:bg-blue-600 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Konfirmasi ke Bendahara (WhatsApp)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
