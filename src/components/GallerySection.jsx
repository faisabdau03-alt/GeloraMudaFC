import React, { useState } from 'react';
import { CLUB_CONFIG } from '../data/clubData';
import { Camera, X, ChevronLeft, ChevronRight, Eye, Calendar, Tag } from 'lucide-react';

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);

  const galleryItems = CLUB_CONFIG.gallery || [];

  const categories = [
    { key: 'ALL', label: 'Semua Dokumentasi' },
    { key: 'Pertandingan', label: 'Pertandingan' },
    { key: 'Latihan', label: 'Latihan' },
    { key: 'Kegiatan Desa', label: 'Kegiatan Desa' },
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (selectedCategory === 'ALL') return true;
    return item.category === selectedCategory;
  });

  const openLightbox = (index) => {
    setActivePhotoIndex(index);
  };

  const closeLightbox = () => {
    setActivePhotoIndex(null);
  };

  const nextPhoto = React.useCallback(() => {
    setActivePhotoIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
  }, [filteredItems.length]);

  const prevPhoto = React.useCallback(() => {
    setActivePhotoIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null));
  }, [filteredItems.length]);

  // Handle body overflow in effect
  React.useEffect(() => {
    if (activePhotoIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [activePhotoIndex]);

  // Keyboard navigation
  React.useEffect(() => {
    if (activePhotoIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex, nextPhoto, prevPhoto]);

  const currentItem = activePhotoIndex !== null ? filteredItems[activePhotoIndex] : null;

  return (
    <section id="galeri" className="py-20 bg-[#0B0E14] relative scroll-mt-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D6EFD]/10 border border-[#0D6EFD]/30 text-xs font-bold text-[#0D6EFD] uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Momen &amp; Dokumentasi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Montserrat'] uppercase tracking-tight">
            GALERI KLUB
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            Kilas balik momen latihan, pertandingan sengit, kebersamaan pemain, serta antusiasme pendukung desa.
          </p>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`py-2 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  selectedCategory === cat.key
                    ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/25 font-black scale-105'
                    : 'bg-[#121620] text-gray-400 hover:text-white border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden card-dark-gradient gold-border-subtle hover:border-[#D4AF37] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0D6EFD]/15"
            >
              <div className="aspect-[16/10] w-full overflow-hidden relative">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-[#0B0E14]/40 to-transparent opacity-60 group-hover:opacity-85 transition-opacity flex items-end p-5">
                  <div className="w-full">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-[#0D6EFD] text-white mb-1.5">
                      {item.category}
                    </span>
                    <h3 className="text-base font-bold text-white font-['Montserrat'] group-hover:text-[#FFE885] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-300 line-clamp-1 mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* View Icon Badge in center on hover */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4 text-[#D4AF37]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      {currentItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            aria-label="Tutup foto"
          >
            <X className="w-6 h-6 text-[#D4AF37]" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-[#0D6EFD] border border-white/20 transition-all z-40 hidden sm:flex items-center justify-center"
            aria-label="Foto sebelumnya"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-[#0D6EFD] border border-white/20 transition-all z-40 hidden sm:flex items-center justify-center"
            aria-label="Foto berikutnya"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col rounded-2xl overflow-hidden bg-[#0F172A] border border-[#D4AF37]/40 shadow-2xl"
          >
            {/* Image Preview */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden max-h-[60vh] sm:max-h-[65vh]">
              <img
                src={currentItem.imageUrl}
                alt={currentItem.title}
                className="w-full h-full object-contain max-h-[60vh]"
              />
            </div>

            {/* Photo Metadata Info */}
            <div className="p-5 sm:p-6 bg-[#0B0E14] border-t border-white/10">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase bg-[#0D6EFD]/20 text-[#38BDF8] border border-blue-500/30">
                  <Tag className="w-3 h-3" />
                  {currentItem.category}
                </span>

                <span className="flex items-center gap-1 text-xs text-gray-400">
                  <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                  {currentItem.date}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white font-['Montserrat']">
                {currentItem.title}
              </h3>
              <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                {currentItem.description}
              </p>

              {/* Mobile Prev/Next Controls */}
              <div className="flex sm:hidden items-center justify-between mt-4 pt-3 border-t border-white/10">
                <button
                  onClick={prevPhoto}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/10 text-xs text-white"
                >
                  <ChevronLeft className="w-4 h-4" /> Sebelumnya
                </button>
                <span className="text-xs text-gray-400">
                  {activePhotoIndex + 1} dari {filteredItems.length}
                </span>
                <button
                  onClick={nextPhoto}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/10 text-xs text-white"
                >
                  Selanjutnya <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
