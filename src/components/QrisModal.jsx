import React from 'react';
import { CLUB_CONFIG, getWhatsAppLink } from '../data/clubData';
import { X, QrCode, MessageCircle, ShieldCheck } from 'lucide-react';

export default function QrisModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const finance = CLUB_CONFIG.finance;
  const barcodeSrc = finance.barcodeImg || finance.qrisPlaceholderImg || '/qris-barcode.svg';
  
  const waContactLink = getWhatsAppLink(
    `Halo Bendahara Gelora Muda FC, saya ingin konfirmasi donasi / apresiasi sukarela untuk klub.`
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-sm sm:max-w-md bg-[#0F172A] border-2 border-[#D4AF37]/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-white"
      >
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-[#1A365D] to-[#0B0E14] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center">
              <QrCode className="w-5 h-5 text-[#FFE885]" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black font-['Montserrat']">
                Barcode Donasi &amp; Dukungan
              </h3>
              <p className="text-[11px] text-gray-300">
                Gelora Muda FC Official
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-5 flex flex-col items-center text-center">
          {/* QRIS / Barcode Visual Card */}
          <div className="w-full max-w-[280px] rounded-xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]/40 bg-white p-2">
            <img
              src={barcodeSrc}
              alt="Barcode Donasi Gelora Muda FC"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>

          <div className="mt-4 p-3 rounded-xl bg-blue-950/40 border border-blue-500/30 text-xs text-blue-200 text-left flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block">Mendukung Seluruh E-Wallet &amp; Bank:</strong>
              <span className="text-gray-300 text-[11px]">
                BCA, Mandiri, BRI, BNI, GoPay, OVO, DANA, ShopeePay &amp; aplikasi perbankan lainnya.
              </span>
            </div>
          </div>

          {/* Contact Treasurer Button */}
          <a
            href={waContactLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0D6EFD] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-blue-600/30"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Konfirmasi Donasi via WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
