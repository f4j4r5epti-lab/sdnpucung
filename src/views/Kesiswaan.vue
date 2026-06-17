<template>
  <div class="kesiswaan-container">
    <!-- --- 1. HERO SECTION --- -->
    <section class="kesiswaan-hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>Kesiswaan & Kegiatan</h1>
        <p>Wadah kreativitas, pengembangan bakat, dan apresiasi prestasi siswa SD Negeri Pucung.</p>
      </div>
    </section>

    <!-- --- 2. SECTION EKSTRAKURIKULER (KONSEP RIBBON) --- -->
    <section class="section-kesiswaan white-bg">
      <div class="container">
        <div class="text-center-heading">
          <span class="section-tag">Minat & Bakat</span>
          <h2>Ekstrakurikuler</h2>
          <hr class="line-decor mx-auto" />
          <p>Kami menyediakan berbagai pilihan organisasi untuk mengasah kepemimpinan dan keterampilan non-akademik siswa.</p>
        </div>

        <div class="grid-3-kolom">
          <div class="custom-card" v-for="item in daftarEkstra" :key="item.nama">
            <!-- Bagian Atas: Gambar & Ribbon Judul -->
            <div class="card-image-wrapper">
              <img 
                :src="item.foto && item.foto.length > 0 ? item.foto[0] : 'https://via.placeholder.com/400x250'" 
                :alt="item.nama" 
                class="card-image"
              />
              <div class="title-badge-ribbon ribbon-blue">
                <div class="ribbon-inner-content">
                  <i :class="item.icon"></i>
                  <h3 class="ribbon-text">{{ item.nama }}</h3>
                </div>
              </div>
            </div>
            <!-- Bagian Bawah: Deskripsi -->
            <div class="card-body">
              <p class="card-description">{{ item.deskripsi }}</p>
              <div class="card-footer-info">
                <span class="jadwal-tag">Jadwal: {{ item.jadwal }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- --- 3. SECTION PRESTASI TINGKATAN --- -->
    <section class="section-kesiswaan gray-bg">
      <div class="container">
        <div class="text-center-heading">
          <span class="section-tag">Capaian Siswa</span>
          <h2>Prestasi Terbaru</h2>
          <hr class="line-decor mx-auto" />
          <p>Apresiasi atas kerja keras dan dedikasi siswa dalam berbagai ajang perlombaan.</p>
        </div>

        <div class="timeline-prestasi">
          <div class="prestasi-item" v-for="win in daftarPrestasi" :key="win.judul">
            <div class="prestasi-marker"></div>
            <div class="prestasi-content">
              <span class="prestasi-year">{{ win.tahun }}</span>
              <h3>{{ win.judul }}</h3>
              <p class="prestasi-winner"><i class="fas fa-trophy"></i> {{ win.pemenang }}</p>
              <p class="prestasi-desc">{{ win.tingkat }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- --- 4. SECTION DOKUMENTASI GALERI (SINKRON DENGAN KONSEP RIBBON) --- -->
    <section class="section-kesiswaan white-bg">
      <div class="container">
        <div class="text-center-heading">
          <span class="section-tag">Dokumentasi</span>
          <h2>Galeri Kegiatan</h2>
          <hr class="line-decor mx-auto" />
          <p>Potret keseruan, kolaborasi, dan antusiasme siswa dalam berbagai agenda sekolah.</p>
        </div>

        <div class="grid-3-kolom">
          <div class="custom-card" v-for="(img, index) in galeriFoto" :key="index">
            <!-- Bagian Atas: Gambar & Ribbon Keterangan (Menggunakan aksen Orange khas Berita/Agenda) -->
            <div class="card-image-wrapper">
              <img :src="img.src" :alt="img.alt" class="card-image" />
              <div class="title-badge-ribbon ribbon-orange">
                <div class="ribbon-inner-content">
                  <i class="fas fa-camera"></i>
                  <h3 class="ribbon-text">{{ img.caption }}</h3>
                </div>
              </div>
            </div>
            <!-- Bagian Bawah: Deskripsi Tambahan Galeri -->
            <div class="card-body">
              <span class="card-date-meta">Kategori: Kegiatan Sekolah</span>
              <p class="card-description">Dokumentasi pelaksanaan {{ img.caption }} yang diikuti oleh segenap warga SD Negeri Pucung dengan khidmat dan ceria.</p>
            </div>
          </div>
        </div>
        
        <div class="text-center-btn">
          <button class="btn-more"><i class="fab fa-youtube"></i> Lihat Galeri Video di YouTube &rarr;</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'KesiswaanView',
  setup() {
    // Data Ekstrakurikuler
    const daftarEkstra = ref([
      {
        nama: 'Pramuka (Wajib)',
        icon: 'fas fa-campground',
        deskripsi: 'Membentuk karakter mandiri, disiplin, dan cinta tanah air melalui kegiatan kepanduan.',
        jadwal: 'Jumat, 13.00 WIB',
        foto: ['/images/pramuka.jpg']
      },
      {
        nama: 'Seni Tari',
        icon: 'fas fa-child',
        deskripsi: 'Melestarikan budaya daerah melalui latihan tari tradisional nusantara.',
        jadwal: 'Rabu, 13.30 WIB',
        foto: ['/images/tari.jpg']
      },
      {
        nama: 'BTAQ',
        icon: 'fas fa-book-open',
        deskripsi: 'Wadah pembinaan bagi siswa untuk belajar membaca dan menulis Al-Quran dengan baik dan tartil sesuai dengan kaidah ilmu tajwid.',
        jadwal: 'Selasa, 13.30 WIB',
        foto: ['/images/btaq.jpg']
      },
      {
        nama: 'TIK',
        icon: 'fas fa-laptop-code',
        deskripsi: 'Literasi digital dasar, pengenalan office, dan desain grafis untuk anak.',
        jadwal: 'Rabu dan Kamis, 13.30 WIB',
        foto: ['/images/tik.jpg']
      },
      {
        nama: 'Karawitan',
        icon: 'fas fa-music',
        deskripsi: 'Kegiatan seni budaya yang memfokuskan pada pelestarian, pembelajaran, dan pengembangan seni musik tradisional jawa, khususnya dalam memainkan seperangkat alat musik gamelan.',
        jadwal: 'Selasa, 14.30 WIB',
        foto: ['/images/karawitan.jpg']
      },
      {
        nama: 'Hadroh',
        icon: 'fas fa-star-and-crescent',
        deskripsi: 'Wadah minat dan bakat siswa dalam bidang seni musik islam dan syiar keagamaan.',
        jadwal: 'Senin, 13.30 WIB',
        foto: ['/images/hadroh.jpg']
      }
    ]);

    // Data Prestasi
    const daftarPrestasi = ref([
      {
        tahun: '2026',
        judul: 'Juara 2 Lomba Kriya FLS2N',
        pemenang: 'Adit (kelas 4)',
        tingkat: 'Tingkat Kapanewon'
      },
      {
        tahun: '2026',
        judul: 'Peringkat 4 TKA/D',
        pemenang: 'Kelas VI (Alumnus tahun 2026)',
        tingkat: 'Tingkat Kapanewon Kalasan'
      },
      {
        tahun: '2023',
        judul: 'Juara 2 Lomba kriya FLSSN',
        pemenang: 'Etsa Clearetsa (kelas 4)',
        tingkat: 'Tingkat Kapanewon Kalasan'
      }
    ]);

    // Data Galeri Kegiatan
    const galeriFoto = ref([
      { src: 'https://via.placeholder.com/400x300', alt: 'Upacara', caption: 'Upacara Bendera Senin Pagi' },
      { src: 'https://via.placeholder.com/400x300', alt: 'Pramuka', caption: 'Persami Penggalang 2025' },
      { src: 'https://via.placeholder.com/400x300', alt: 'Lomba', caption: 'Peringatan HUT RI ke-80' },
      { src: 'https://via.placeholder.com/400x300', alt: 'Kelas', caption: 'Kegiatan Proyek P5 Merdeka' },
      { src: 'https://via.placeholder.com/400x300', alt: 'Seni', caption: 'Pentas Seni Akhir Tahun' },
      { src: 'https://via.placeholder.com/400x300', alt: 'Bakti', caption: 'Bakti Sosial Ramadhan' }
    ]);

    return {
      daftarEkstra,
      daftarPrestasi,
      galeriFoto
    };
  }
}
</script>

<style scoped>
/* --- STYLING DASAR & UTILITAS --- */
.container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
.white-bg { background: #ffffff; }
.gray-bg { background: #f8fafc; }
.section-kesiswaan { padding: 80px 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
.text-center-heading { text-align: center; margin-bottom: 50px; }
.mx-auto { margin-left: auto; margin-right: auto; }
.section-tag { color: #2563eb; font-weight: 700; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 1px; display: block; margin-bottom: 5px; }
.line-decor { width: 50px; height: 4px; background-color: #f59e0b; border: none; margin: 15px 0 20px 0; }

/* --- HERO --- */
.kesiswaan-hero {
  position: relative;
  background-image: url('https://via.placeholder.com/1920x400');
  background-size: cover; background-position: center;
  height: 35vh; display: flex; align-items: center; justify-content: center; color: white; text-align: center;
}
.hero-overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(30, 58, 138, 0.85); }
.hero-content { position: relative; z-index: 1; }
.hero-content h1 { font-size: 2.5rem; margin: 0; font-weight: 800; }
.hero-content p { font-size: 1.1rem; opacity: 0.9; margin-top: 10px; }

/* --- GRID STRUKTUR GLOBAL (SINKRON DENGAN BERITA HOME) --- */
.grid-3-kolom { 
  display: grid; 
  grid-template-columns: repeat(3, 1fr); 
  gap: 30px; 
}

/* KARTU SPESIFIKASI BARU (DIPAKAI OLEH EKSTRA & GALERI) */
.custom-card {
  background: #ffffff;
  border-radius: 4px;
  overflow: visible; /* Penting agar bayangan ribbon tidak terpotong */
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  border: 1px solid #e2e8f0;
}
.custom-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
  border-color: #2563eb;
}

/* KOTAK WRAPPER FOTO */
.card-image-wrapper {
  position: relative;
  width: 100%;
  height: 220px;
  background-color: #e2e8f0;
}
.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* --- DESAIN RIBBON MENYILANG UNGGULAN --- */
.title-badge-ribbon {
  position: absolute;
  bottom: 15px;
  left: 0;
  padding: 10px 15px;
  max-width: 90%;
  box-shadow: 3px 3px 10px rgba(0,0,0,0.2);
  z-index: 2;
}
.title-badge-ribbon::before {
  content: '';
  position: absolute;
  top: 0; left: 0; bottom: 0;
  width: 5px;
}

/* Varian Warna Ribbon Ekstrakurikuler (Biru bergaris Oranye) */
.ribbon-blue { background-color: #1e3a8a; }
.ribbon-blue::before { background-color: #f59e0b; }

/* Varian Warna Ribbon Dokumentasi Galeri (Hitam Gelap bergaris Hijau/Oranye) */
.ribbon-orange { background-color: #0f172a; }
.ribbon-orange::before { background-color: #ef4444; }

.ribbon-inner-content {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #ffffff;
}
.ribbon-inner-content i {
  font-size: 1rem;
  color: #f59e0b; /* Warna icon emas kontras */
}
/* KODE BARU (BERSIH DARI WARNING) */
.ribbon-text {
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.3;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1; /* Selesai! Baris ini yang menyelesaikan masalah */
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* --- ISI BODY KARTU --- */
.card-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.card-date-meta {
  font-size: 0.8rem;
  color: #94a3b8;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 8px;
  display: block;
}
.card-description {
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 15px;
  flex-grow: 1;
}
.card-footer-info {
  border-top: 1px solid #f1f5f9;
  padding-top: 12px;
  margin-top: auto;
}
.jadwal-tag {
  font-size: 0.8rem;
  font-weight: 700;
  color: #10b981;
  text-transform: uppercase;
}

/* --- TIMELINE PRESTASI --- */
.timeline-prestasi { max-width: 800px; margin: 0 auto; position: relative; padding-left: 30px; border-left: 2px solid #e2e8f0; }
.prestasi-item { position: relative; margin-bottom: 40px; }
.prestasi-marker {
  position: absolute; left: -41px; top: 0; width: 20px; height: 20px;
  background: #f59e0b; border: 4px solid white; border-radius: 50%; box-shadow: 0 0 0 2px #f59e0b;
}
.prestasi-content { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
.prestasi-year { color: #2563eb; font-weight: 800; font-size: 1.1rem; }
.prestasi-content h3 { margin: 5px 0; color: #1e3a8a; font-size: 1.2rem; }
.prestasi-winner { color: #10b981; font-weight: 600; margin: 5px 0; font-size: 0.95rem; }
.prestasi-desc { color: #64748b; font-size: 0.9rem; }

/* --- TOMBOL AKSES YOUTUBE --- */
.text-center-btn { text-align: center; margin-top: 40px; }
.btn-more {
  background: #1e3a8a; color: white; border: none; padding: 12px 25px; border-radius: 6px;
  font-weight: 600; cursor: pointer; transition: 0.3s; display: inline-flex; align-items: center; gap: 8px;
}
.btn-more:hover { background: #2563eb; }

/* --- RESPONSIVE MEDIA QUERIES --- */
@media (max-width: 968px) {
  .grid-3-kolom { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .grid-3-kolom { grid-template-columns: 1fr; }
  .kesiswaan-hero h1 { font-size: 1.8rem; }
  .timeline-prestasi { padding-left: 20px; }
}
</style>