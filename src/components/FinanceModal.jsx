import React, { useState } from 'react';
import { CLUB_CONFIG, formatRupiah, getWhatsAppLink } from '../data/clubData';
import { X, DollarSign, TrendingUp, TrendingDown, ShieldCheck, CheckCircle2, MessageCircle } from 'lucide-react';

export default function FinanceModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('ALL'); // 'ALL', 'INCOME', 'EXPENSE'

  if (!isOpen) return null;

  const finance = CLUB_CONFIG.finance;
  const ledger = finance.publicLedger || [];

  const filteredLedger = ledger.filter((item) => {
    if (activeTab === 'INCOME') return item.type === 'income';
    if (activeTab === 'EXPENSE') return item.type === 'expense';
    return true;
  });

  const waTreasurerLink = getWhatsAppLink(
    `Halo Bendahara Gelora Muda FC, saya ingin berkonsultasi mengenai laporan kas / konfirmasi dukungan klub.`
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
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#0F172A] border border-[#D4AF37]/40 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-white"
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-[#1A365D] via-[#0F2445] to-[#0B0E14] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-[#FFE885]" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black font-['Montserrat']">
                Informasi &amp; Transparansi Kas Klub
              </h3>
              <p className="text-xs text-gray-300">
                {finance.summary.period} • Diverifikasi oleh {finance.summary.verifiedBy}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {/* Summary Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Balance */}
            <div className="p-4 rounded-xl bg-[#0B0E14] border border-[#D4AF37]/50 flex flex-col">
              <span className="text-xs text-gray-400 font-semibold uppercase">Saldo Kas Terkini</span>
              <span className="text-xl sm:text-2xl font-black text-[#FFE885] mt-1 font-['Montserrat']">
                {formatRupiah(finance.summary.totalBalance)}
              </span>
              <span className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Dana Siap Operasional
              </span>
            </div>

            {/* Total Income */}
            <div className="p-4 rounded-xl bg-[#0B0E14] border border-emerald-500/30 flex flex-col">
              <span className="text-xs text-gray-400 font-semibold uppercase flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" /> Total Pemasukan
              </span>
              <span className="text-lg sm:text-xl font-black text-emerald-400 mt-1 font-['Montserrat']">
                {formatRupiah(finance.summary.totalIncome)}
              </span>
              <span className="text-[10px] text-gray-400 mt-1">Donasi &amp; Iuran</span>
            </div>

            {/* Total Expense */}
            <div className="p-4 rounded-xl bg-[#0B0E14] border border-rose-500/30 flex flex-col">
              <span className="text-xs text-gray-400 font-semibold uppercase flex items-center gap-1">
                <TrendingDown className="w-3.5 h-3.5 text-rose-400" /> Total Pengeluaran
              </span>
              <span className="text-lg sm:text-xl font-black text-rose-400 mt-1 font-['Montserrat']">
                {formatRupiah(finance.summary.totalExpense)}
              </span>
              <span className="text-[10px] text-gray-400 mt-1">Peralatan &amp; Matchday</span>
            </div>
          </div>

          {/* Explanation note */}
          <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-600/30 text-xs sm:text-sm text-gray-300 leading-relaxed">
            <div className="flex items-start gap-2.5">
              <ShieldCheck className="w-5 h-5 text-[#38BDF8] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Komitmen Transparansi Klub Desa:</strong>
                <p className="mt-1 text-gray-300">
                  {finance.explanation}
                </p>
              </div>
            </div>
          </div>

          {/* Ledger Table Section */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300">
                Riwayat Pembukuan Publik
              </h4>

              {/* Filter tabs */}
              <div className="flex gap-1 bg-[#0B0E14] p-1 rounded-lg border border-white/10 text-xs">
                <button
                  onClick={() => setActiveTab('ALL')}
                  className={`px-2.5 py-1 rounded ${activeTab === 'ALL' ? 'bg-[#0D6EFD] text-white font-bold' : 'text-gray-400'}`}
                >
                  Semua
                </button>
                <button
                  onClick={() => setActiveTab('INCOME')}
                  className={`px-2.5 py-1 rounded ${activeTab === 'INCOME' ? 'bg-emerald-600 text-white font-bold' : 'text-gray-400'}`}
                >
                  Masuk
                </button>
                <button
                  onClick={() => setActiveTab('EXPENSE')}
                  className={`px-2.5 py-1 rounded ${activeTab === 'EXPENSE' ? 'bg-rose-600 text-white font-bold' : 'text-gray-400'}`}
                >
                  Keluar
                </button>
              </div>
            </div>

            {/* List */}
            <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
              {filteredLedger.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-[#0B0E14] border border-white/5 hover:border-white/15 transition-colors"
                >
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-sm font-semibold text-gray-200">
                      {item.description}
                    </span>
                    <span className="text-[11px] text-gray-400">
                      {item.date} • <span className="text-[#FFE885]">{item.category}</span>
                    </span>
                  </div>

                  <span
                    className={`text-xs sm:text-sm font-bold font-mono ${
                      item.type === 'income' ? 'text-emerald-400' : 'text-rose-400'
                    }`}
                  >
                    {item.type === 'income' ? '+' : '-'} {formatRupiah(item.amount)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Contact */}
        <div className="p-4 sm:p-5 bg-[#0B0E14] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span className="text-gray-400 text-center sm:text-left">
            *Laporan pembukuan di atas bebas dari data pribadi &amp; rekening sensitif.
          </span>
          <a
            href={waTreasurerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0D6EFD] hover:bg-blue-600 text-white font-bold transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Hubungi Bendahara Klub</span>
          </a>
        </div>
      </div>
    </div>
  );
}
