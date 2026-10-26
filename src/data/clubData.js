/**
 * GELORA MUDA FC - PUSAT DATA RESMI & KONFIGURASI KLUB
 * =======================================================
 * File ini merupakan satu-satunya tempat bagi pengurus klub untuk mengedit:
 * 1. Profil klub & kontak resmi (WhatsApp, Media Sosial)
 * 2. Jadwal pertandingan & hasil skor pertandingan
 * 3. Daftar nama pemain, posisi, foto, dan nomor punggung
 * 4. Galeri dokumentasi pertandingan & kegiatan
 * 5. Mitra sponsor klub & paket kerjasama
 * 6. Transparansi kas klub & status QRIS
 * 
 * Pengurus tidak perlu mengedit file kode antarmuka / styling.
 */

export const CLUB_CONFIG = {
  // Profil Dasar Klub
  profile: {
    name: "GELORA MUDA FC",
    badgeName: "GELORA MUDA",
    shortName: "Gelora Muda",
    establishedYear: "2024",
    homeBase: "Desa Tercinta, Indonesia",
    homeGroundName: "Stadion Mini Gelora Muda",
    
    // Tagline Wajib (Sesuai Ketentuan)
    tagline: "Semangat Pantang Mundur, Saka Desa nggo Juara",
    
    // Deskripsi Pembuka Hero Section
    heroDescription: "Wadah perjuangan, persatuan, dan sportivitas generasi muda desa. Bergerak dengan ketulusan dan disiplin tinggi untuk mengharumkan nama desa di setiap kompetisi.",
    
    // Logo & Aset Resmi
    logoUrl: "/logo.svg",
    stadiumBgUrl: "/stadium-hero.svg",
  },

  // Kontak & Media Sosial Resmi Klub
  // PENGURUS: Ganti whatsappNumber dengan nomor WhatsApp resmi klub (contoh: "6281234567890" tanpa tanda + atau spasi)
  contact: {
    whatsappNumber: "6281234567890", // Ubah di sini untuk menyetel nomor WA resmi klub
    whatsappDisplay: "+62 812-3456-7890 (Pengurus Resmi)",
    defaultMessage: "Halo Pengurus Gelora Muda FC, saya ingin bertanya informasi klub / kemitraan sponsor.",
    email: "kontak@geloramudafc.id",
    address: "Sekretariat Gelora Muda FC, Balai Pertemuan & Lapangan Olahraga Desa",
    socialMedia: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      youtube: "https://youtube.com",
    }
  },

  // DATA JADWAL PERTANDINGAN
  // Pengurus dapat menambah, mengedit, atau menghapus item di array ini.
  matches: [
    {
      id: "match-01",
      competition: "Laga Persahabatan Antar Desa",
      round: "Derby Silaturahmi",
      date: "Minggu, 15 November 2026",
      kickOff: "15:30 WIB",
      venue: "Stadion Mini Gelora Muda",
      mapsUrl: "https://maps.google.com/?q=Stadion+Mini+Sepakbola",
      status: "Upcoming", // "Upcoming", "Live", "Full Time"
      isPlaceholder: true, // Beri tahu pengunjung bahwa ini adalah jadwal contoh / draft pengurus
      homeTeam: {
        name: "Gelora Muda FC",
        logo: "/logo.svg",
        isClub: true,
      },
      awayTeam: {
        name: "Persika FC",
        logo: "/opponents/persika.svg",
        isClub: false,
      },
      score: null, // belum ada skor karena belum mulai
    },
    {
      id: "match-02",
      competition: "Turnamen Piala Pemuda Desa 2026",
      round: "Babak Penyisihan Grup A",
      date: "Sabtu, 28 November 2026",
      kickOff: "16:00 WIB",
      venue: "Lapangan Gelora Tunas Jaya",
      mapsUrl: "https://maps.google.com/?q=Lapangan+Sepakbola",
      status: "Upcoming",
      isPlaceholder: true,
      homeTeam: {
        name: "Tunas Jaya FC",
        logo: "/opponents/tunas-jaya.svg",
        isClub: false,
      },
      awayTeam: {
        name: "Gelora Muda FC",
        logo: "/logo.svg",
        isClub: true,
      },
      score: null,
    },
    {
      id: "match-03",
      competition: "Laga Uji Coba Pra-Musim",
      round: "Uji Tanding Resmi",
      date: "Minggu, 18 Oktober 2026",
      kickOff: "15:30 WIB",
      venue: "Stadion Mini Gelora Muda",
      mapsUrl: "https://maps.google.com/?q=Stadion+Mini+Sepakbola",
      status: "Full Time",
      isPlaceholder: true,
      homeTeam: {
        name: "Gelora Muda FC",
        logo: "/logo.svg",
        isClub: true,
        score: 2,
      },
      awayTeam: {
        name: "Bina Remaja FC",
        logo: "/opponents/bina-remaja.svg",
        isClub: false,
        score: 1,
      },
      score: "2 - 1",
    }
  ],

  // DATA SQUAD / DAFTAR PEMAIN
  // Pengurus dapat mengelompokkan posisi: "Goalkeeper", "Defender", "Midfielder", "Forward"
  squad: [
    // --- GOALKEEPERS ---
    {
      id: "gk-01",
      number: 1,
      name: "Dimas Pratama",
      position: "Goalkeeper",
      roleDetail: "Kiper Utama",
      photo: "/players/jersey-gk.svg",
      isCaptain: false,
      isPlaceholder: true,
    },
    {
      id: "gk-02",
      number: 22,
      name: "Ardiansyah",
      position: "Goalkeeper",
      roleDetail: "Kiper Kedua",
      photo: "/players/jersey-gk.svg",
      isCaptain: false,
      isPlaceholder: true,
    },

    // --- DEFENDERS ---
    {
      id: "df-01",
      number: 4,
      name: "Bagas Wicaksono",
      position: "Defender",
      roleDetail: "Bek Tengah (CB)",
      photo: "/players/jersey-outfield.svg",
      isCaptain: false,
      isPlaceholder: true,
    },
    {
      id: "df-02",
      number: 5,
      name: "Rizky Fauzi",
      position: "Defender",
      roleDetail: "Bek Tengah (CB)",
      photo: "/players/jersey-outfield.svg",
      isCaptain: false,
      isPlaceholder: true,
    },
    {
      id: "df-03",
      number: 3,
      name: "Hendra Saputra",
      position: "Defender",
      roleDetail: "Bek Kiri (LB)",
      photo: "/players/jersey-outfield.svg",
      isCaptain: false,
      isPlaceholder: true,
    },
    {
      id: "df-04",
      number: 2,
      name: "Fajar Maulana",
      position: "Defender",
      roleDetail: "Bek Kanan (RB)",
      photo: "/players/jersey-outfield.svg",
      isCaptain: false,
      isPlaceholder: true,
    },
    {
      id: "df-05",
      number: 15,
      name: "Bayu Nugroho",
      position: "Defender",
      roleDetail: "Bek Serbaguna",
      photo: "/players/jersey-outfield.svg",
      isCaptain: false,
      isPlaceholder: true,
    },

    // --- MIDFIELDERS ---
    {
      id: "mf-01",
      number: 8,
      name: "Wahyu Tri Utomo",
      position: "Midfielder",
      roleDetail: "Gelandang Tengah & Kapten",
      photo: "/players/jersey-outfield.svg",
      isCaptain: true,
      isPlaceholder: true,
    },
    {
      id: "mf-02",
      number: 6,
      name: "Ilham Ramadhan",
      position: "Midfielder",
      roleDetail: "Gelandang Bertahan (DM)",
      photo: "/players/jersey-outfield.svg",
      isCaptain: false,
      isPlaceholder: true,
    },
    {
      id: "mf-03",
      number: 10,
      name: "Doni Setiawan",
      position: "Midfielder",
      roleDetail: "Playmaker / Gelandang Serang (AM)",
      photo: "/players/jersey-outfield.svg",
      isCaptain: false,
      isPlaceholder: true,
    },
    {
      id: "mf-04",
      number: 7,
      name: "Tegar Pangestu",
      position: "Midfielder",
      roleDetail: "Sayap Kiri (LW)",
      photo: "/players/jersey-outfield.svg",
      isCaptain: false,
      isPlaceholder: true,
    },
    {
      id: "mf-05",
      number: 11,
      name: "Galih Pamungkas",
      position: "Midfielder",
      roleDetail: "Sayap Kanan (RW)",
      photo: "/players/jersey-outfield.svg",
      isCaptain: false,
      isPlaceholder: true,
    },

    // --- FORWARDS ---
    {
      id: "fw-01",
      number: 9,
      name: "Angga Yudha",
      position: "Forward",
      roleDetail: "Penyerang Tengah (ST)",
      photo: "/players/jersey-outfield.svg",
      isCaptain: false,
      isPlaceholder: true,
    },
    {
      id: "fw-02",
      number: 17,
      name: "Rian Hidayat",
      position: "Forward",
      roleDetail: "Penyerang Sayap",
      photo: "/players/jersey-outfield.svg",
      isCaptain: false,
      isPlaceholder: true,
    },
    {
      id: "fw-03",
      number: 19,
      name: "Aditya Pratama",
      position: "Forward",
      roleDetail: "Second Striker",
      photo: "/players/jersey-outfield.svg",
      isCaptain: false,
      isPlaceholder: true,
    }
  ],

  // DATA GALERI KLUB
  gallery: [
    {
      id: "gal-1",
      title: "Duel Perebutan Bola Sengit",
      category: "Pertandingan",
      description: "Aksi pemain Gelora Muda FC menjaga lini pertahanan dengan penuh determinasi di laga pra-musim.",
      imageUrl: "/gallery/match-action.svg",
      date: "Oktober 2026",
    },
    {
      id: "gal-2",
      title: "Selebrasi Gol Kebanggaan",
      category: "Pertandingan",
      description: "Momen kekompakan skuad saat merayakan gol penentu kemenangan di hadapan pendukung setia desa.",
      imageUrl: "/gallery/team-celebration.svg",
      date: "Oktober 2026",
    },
    {
      id: "gal-3",
      title: "Latihan Fisik & Taktik Sore",
      category: "Latihan",
      description: "Sesi drill peningkatan ketahanan fisik, kelincahan, dan passing cepat di bawah bimbingan pelatih.",
      imageUrl: "/gallery/practice-session.svg",
      date: "September 2026",
    },
    {
      id: "gal-4",
      title: "Dukungan Warga & Suporter Desa",
      category: "Kegiatan Desa",
      description: "Warga desa memadati pinggir lapangan memberikan chant dan semangat tak kenal lelah untuk klub.",
      imageUrl: "/gallery/community-cup.svg",
      date: "Agustus 2026",
    },
    {
      id: "gal-5",
      title: "Pembinaan Talenta Muda Desa",
      category: "Latihan",
      description: "Regenerasi pemain muda desa usia dini agar memiliki dasar teknik bermain bola yang baik dan berkarakter.",
      imageUrl: "/gallery/youth-development.svg",
      date: "Juli 2026",
    },
    {
      id: "gal-6",
      title: "Trofi Turnamen Antar Desa",
      category: "Pertandingan",
      description: "Bukti kerja keras dan sportivitas yang terus dipelihara sebagai kebanggaan masyarakat desa.",
      imageUrl: "/gallery/trophy-cup.svg",
      date: "Juni 2026",
    }
  ],

  // DATA SPONSOR & KEMITRAAN
  sponsors: {
    title: "MITRA & SPONSOR KAMI",
    // Pengurus: Masukkan sponsor resmi jika sudah ada MOU/Kesepakatan.
    // Jika array sponsorList kosong, website secara otomatis menampilkan empty state yang sopan & formulir ajakan kemitraan.
    sponsorList: [
      // Contoh struktur jika sudah ada:
      // { id: 1, name: "Toko Olahraga Jaya", logo: "/sponsors/logo-toko.png", tier: "Mitra Resmi" }
    ],
    // Pesan saat sponsor resmi masih dalam tahap pembukaan kemitraan
    emptyStateMessage: "Gelora Muda FC saat ini membuka peluang sponsorship dan kemitraan strategis bagi pelaku usaha lokal, instansi, maupun perorangan yang ingin bersama-sama memajukan talenta olahraga generasi muda desa.",
    partnershipBenefits: [
      {
        id: "b1",
        title: "Eksposur Jersey & Matchday",
        desc: "Penempatan logo brand di jersey resmi tim, spanduk pinggir lapangan pertandingan, dan backdrop dokumentasi."
      },
      {
        id: "b2",
        title: "Publikasi Digital & Komunitas",
        desc: "Promosi berkala melalui website resmi klub dan akun media sosial yang menjangkau ribuan warga serta pecinta sepak bola desa."
      },
      {
        id: "b3",
        title: "Dampak Nyata Pembinaan Pemuda",
        desc: "Membantu kegiatan positif pemuda desa, menjauhkan dari hal negatif, dan melahirkan bibit atlet berprestasi."
      }
    ]
  },

  // DATA TRANSPARANSI KAS & DUKUNGAN KLUB
  finance: {
    title: "DUKUNG GELORA MUDA FC",
    subtitle: "Transparansi Kas & Kontribusi Nyata untuk Kemajuan Klub",
    explanation: "Setiap bentuk kontribusi dan donasi dari warga, suporter, dan para donatur dipergunakan secara akuntabel untuk kebutuhan operasional klub: seragam pertandingan, bola berstandar, sewa lapangan latihan, perawatan medis cedera atlet, serta akomodasi laga.",
    
    // Status QRIS Resmi
    // Jika qrisAvailable: false, tampilkan placeholder resmi tanpa membuat QR palsu!
    qrisAvailable: false,
    qrisPlaceholderImg: "/qris-placeholder.svg",
    qrisNotice: "QRIS resmi atas nama rekening Gelora Muda FC sedang dalam proses administrasi perbankan. Silakan hubungi bendahara klub melalui WhatsApp resmi untuk konfirmasi dukungan.",
    
    // Ringkasan Keuangan Publik (Contoh Laporan yang Disetujui Pengurus)
    summary: {
      period: "Periode Oktober 2026",
      verifiedBy: "Bendahara & Pengurus Harian Gelora Muda FC",
      totalBalance: 4850000, // Saldo saat ini
      totalIncome: 7500000,  // Total pemasukan
      totalExpense: 2650000, // Total pengeluaran
    },
    
    // Riwayat Pembukuan Transparan (Hanya kategori umum, bebas data sensitif pribadi)
    publicLedger: [
      { id: "tx-1", date: "10 Okt 2026", description: "Donasi Swadaya Tokoh & Pemuda Desa", category: "Donasi", type: "income", amount: 3000000 },
      { id: "tx-2", date: "14 Okt 2026", description: "Iuran Bulanan Anggota Klub", category: "Iuran Anggota", type: "income", amount: 1500000 },
      { id: "tx-3", date: "16 Okt 2026", description: "Pengadaan 5 Bola Standar Latihan & Pompa", category: "Peralatan", type: "expense", amount: 1250000 },
      { id: "tx-4", date: "18 Okt 2026", description: "Logistik Air Mineral & Medis Laga Uji Coba", category: "Matchday", type: "expense", amount: 400000 },
      { id: "tx-5", date: "22 Okt 2026", description: "Perlengkapan P3K, Es Terapi, & Koyo Cedera", category: "Medis", type: "expense", amount: 1000000 },
    ]
  }
};

/**
 * Helper untuk format mata uang Rupiah
 */
export function formatRupiah(amount) {
  if (typeof amount !== 'number') return 'Rp 0';
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Helper untuk menghasilkan link WhatsApp resmi klub
 */
export function getWhatsAppLink(customMessage) {
  const number = CLUB_CONFIG.contact.whatsappNumber || '';
  const message = encodeURIComponent(customMessage || CLUB_CONFIG.contact.defaultMessage);
  
  if (!number) {
    // Jika nomor belum dikonfigurasi pengurus, arahkan ke kontak atau hash dengan peringatan
    return '#kontak';
  }
  return `https://wa.me/${number}?text=${message}`;
}
