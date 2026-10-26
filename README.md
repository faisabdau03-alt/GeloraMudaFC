# GELORA MUDA FC — Website Resmi Klub

> **"Semangat Pantang Mundur, Saka Desa nggo Juara"**

Website resmi klub sepak bola desa **GELORA MUDA FC** dengan konsep visual modern, sporty, premium, dan profesional. Mengusung nuansa stadion sepak bola malam hari, dark mode (`#0B0E14`), pencahayaan dramatis biru elektrik (`#0D6EFD`), dan aksen emas metalik (`#D4AF37`).

---

## ⚽ Fitur Utama Website

1. **Header & Navigasi Glassmorphism**
   - Transparansi gelap, blur, dan garis pembatas emas tipis.
   - Tetap mudah diakses saat halaman digulir (*sticky*).
   - Menu navigasi: Jadwal, Pemain, Galeri, Kas & Sponsor.
   - Hamburger menu responsif untuk smartphone.
   - Tombol CTA *"Hubungi Kami"* WhatsApp terpusat.

2. **Hero Section Spektakuler**
   - Latar belakang stadion dengan pencahayaan dramatis biru elektrik dan overlay gelap.
   - Lambang perisai resmi klub dengan logo bola dan bintang emas.
   - Tagline wajib: **"Semangat Pantang Mundur, Saka Desa nggo Juara"**.
   - Dua tombol utama:
     - **Deleng Jadwal Tanding** (Biru Elektrik `#0D6EFD`).
     - **Daftar Pemain** (Transparan dengan border dan teks emas metalik `#D4AF37`).

3. **Jadwal & Hasil Pertandingan**
   - Kartu pertandingan bergaya premium dengan border emas tipis.
   - Format: Logo Gelora Muda FC — VS — Logo Tim Lawan.
   - Menampilkan tanggal, jam kick-off, nama stadion/lapangan, dan status pertandingan (`Upcoming`, `Live`, `Full Time`).
   - Tombol integrasi **Google Maps** untuk membuka lokasi stadion langsung di smartphone atau browser.
   - Filter tab: *Semua*, *Mendatang*, dan *Hasil Selesai*.
   - Status transparan untuk jadwal draf / placeholder.

4. **Squad Gelora Muda FC**
   - Kartu pemain konsisten rasio 3:4 dengan jersey resmi biru-hitam dan nomor punggung emas besar.
   - Nama pemain tebal, posisi (Kiper, Bek, Gelandang, Penyerang), serta badge Kapten tim.
   - Filter tab interaktif untuk memudahkan pencarian per posisi.
   - Efek hover halus dengan elevasi biru elektrik dan kilau emas.

5. **Galeri Dokumentasi Klub**
   - Menampilkan foto pertandingan, latihan, pembinaan usia muda, dan antusiasme suporter desa.
   - Filter kategori (*Pertandingan*, *Latihan*, *Kegiatan Desa*).
   - Fitur **Lightbox / Modal Layar Penuh** dengan tombol navigasi Sebelumnya/Selanjutnya dan keyboard (*Esc*, panah kiri/kanan).

6. **Banner Mitra Sponsor & Kas Klub**
   - Latar belakang deep royal blue (`#1A365D`) dengan motif geometris halus dan border emas.
   - **Mitra & Sponsor Kami**: Menampilkan keuntungan kemitraan serta tombol pendaftaran sponsor bagi UMKM / instansi desa.
   - **Dukungan Kas Klub**:
     - Ringkasan kas transparan (Saldo Kas Terkini, Total Pemasukan, Total Pengeluaran).
     - Tombol **Lihat Informasi Kas Klub** (Modal pembukuan publik terperinci tanpa data pribadi/sensitif).
     - Tombol **Scan QRIS Resmi** (Modal QRIS dengan placeholder aman dan panduan verifikasi ke bendahara).

7. **Footer Profesional**
   - Identitas klub, tagline, navigasi cepat, kontak sekretariat, tautan media sosial resmi, dan tahun hak cipta dinamis.

---

## 🛠️ Panduan Pengelolaan & Pembaruan Data (Untuk Pengurus Klub)

Seluruh data klub **dipisahkan secara rapi dari kode tampilan**. Pengurus tidak perlu mengerti pemrograman untuk memperbarui isi website.

Cukup buka dan edit file:
📂 `src/data/clubData.js`

### 1. Mengubah Nomor WhatsApp Resmi Klub
Cari bagian `contact` di `src/data/clubData.js`:
```javascript
contact: {
  whatsappNumber: "6281234567890", // Ganti dengan nomor WhatsApp resmi (awali dengan 62 tanpa spasi atau tanda +)
  whatsappDisplay: "+62 812-3456-7890 (Pengurus Resmi)",
  // ...
}
```

### 2. Memperbarui Jadwal & Hasil Pertandingan
Cari bagian `matches`:
```javascript
{
  id: "match-01",
  competition: "Turnamen Antar Desa 2026",
  date: "Minggu, 15 November 2026",
  kickOff: "15:30 WIB",
  venue: "Stadion Mini Gelora Muda",
  mapsUrl: "https://maps.google.com/?q=Stadion+Mini+Sepakbola",
  status: "Upcoming", // Ubah ke "Live" atau "Full Time" jika sudah tanding
  homeTeam: { name: "Gelora Muda FC", logo: "/logo.svg" },
  awayTeam: { name: "Persika FC", logo: "/opponents/persika.svg" },
  score: null, // Isi skor jika selesai, contoh: "2 - 1"
}
```

### 3. Memperbarui Data Pemain (Squad)
Cari bagian `squad`:
```javascript
{
  id: "gk-01",
  number: 1,
  name: "Dimas Pratama",
  position: "Goalkeeper", // "Goalkeeper" | "Defender" | "Midfielder" | "Forward"
  roleDetail: "Kiper Utama",
  photo: "/players/jersey-gk.svg", // atau letakkan file foto pemain di folder public/players/
  isCaptain: false,
}
```

### 4. Menambahkan Sponsor Resmi & QRIS
- **Jika sudah ada sponsor resmi**: Tambahkan ke array `sponsorList` di `src/data/clubData.js`.
- **Jika QRIS resmi dari bank sudah terbit**:
  1. Letakkan gambar file QRIS di `public/qris-resmi.png`.
  2. Ubah `qrisAvailable: true` dan ganti `qrisPlaceholderImg: "/qris-resmi.png"` di `src/data/clubData.js`.

---

## 💻 Cara Menjalankan Secara Lokal

1. **Instalasi dependensi**:
   ```bash
   npm install
   ```

2. **Menjalankan server development**:
   ```bash
   npm run dev
   ```
   Buka browser di: `http://localhost:5173`

3. **Membuat versi rilis produksi (Build)**:
   ```bash
   npm run build
   ```

4. **Preview hasil build rilis**:
   ```bash
   npm run preview
   ```

---

## 🎨 Palet Warna Resmi Klub
- **Background Utama**: `#0B0E14`
- **Biru Elektrik**: `#0D6EFD`
- **Deep Royal Blue**: `#1A365D`
- **Emas Metalik**: `#D4AF37` / `#F59E0B`
- **Putih & Abu-abu**: `#FFFFFF` / `#A1A1AA`
