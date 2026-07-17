<template>
  <div class="kesiswaan-container">
    
    <!-- --- 1. HERO SECTION (Kuning Memphis & Ornamen Geometris) --- -->
    <section class="kesiswaan-hero">
      <div class="hero-content">
        <span class="top-tag">AKTIVITAS SISWA</span>
        <h1>Kesiswaan & Kegiatan</h1>
        <p>Wadah kreativitas, pengembangan bakat, dan apresiasi prestasi siswa SD Negeri Pucung.</p>
      </div>
      <!-- Ornamen Bebas Gaya Memphis -->
      <div class="hero-shape shape-circle"></div>
      <div class="hero-shape shape-triangle">▲</div>
      <div class="hero-shape shape-star">★</div>
    </section>

    <!-- --- 2. SECTION EKSTRAKURIKULER --- -->
    <section class="section-kesiswaan bg-cream">
      <div class="container">
        <div class="text-center-heading">
          <span class="section-tag">Minat & Bakat</span>
          <h2>Ekstrakurikuler</h2>
          <hr class="line-decor mx-auto" />
          <p>Kami menyediakan berbagai pilihan kegiatan untuk mengasah kepemimpinan dan keterampilan non-akademik siswa.</p>
        </div>

        <div class="grid-3-kolom">
          <div class="custom-card" v-for="item in daftarEkstra" :key="item.nama">
            
            <!-- Foto Asli dengan Efek Frame Bertumpuk khas Memphis -->
            <div class="card-image-wrapper">
              <div class="frame-decor"></div>
              <img 
                :src="item.foto && item.foto.length > 0 ? item.foto[0] : 'https://via.placeholder.com/400x250'" 
                :alt="item.nama" 
                class="card-image"
              />
              <!-- Ribbon Judul Gaya Badge Memphis -->
              <div class="title-badge-ribbon ribbon-blue">
                <div class="ribbon-inner-content">
                  <i :class="item.icon"></i>
                  <h3 class="ribbon-text">{{ item.nama }}</h3>
                </div>
              </div>
            </div>

            <!-- Body Kartu Informasi Ekstra -->
            <div class="card-body">
              <p class="card-description">{{ item.deskripsi }}</p>
              <div class="card-footer-info">
                <span class="jadwal-tag">🕒 {{ item.jadwal }}</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- --- 3. SECTION PRESTASI TINGKATAN (Gaya Lembar Catatan Bergaris) --- -->
    <section class="section-kesiswaan bg-purple-pastel">
      <div class="container">
        <div class="text-center-heading">
          <span class="section-tag">Capaian Siswa</span>
          <h2>Prestasi Terbaru</h2>
          <hr class="line-decor mx-auto" />
          <p>Apresiasi atas kerja keras dan dedikasi siswa dalam berbagai ajang perlombaan.</p>
        </div>

        <div class="timeline-prestasi">
          <div class="prestasi-item" v-for="win in daftarPrestasi" :key="win.judul">
            <div class="prestasi-marker">🏆</div>
            <div class="prestasi-content">
              <span class="prestasi-year">{{ win.tahun }}</span>
              <h3>{{ win.judul }}</h3>
              <p class="prestasi-winner">👤 {{ win.pemenang }}</p>
              <span class="prestasi-desc-badge">{{ win.tingkat }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- --- 4. SECTION DOKUMENTASI GALERI (Menjaga Foto Asli) --- -->
    <section class="section-kesiswaan bg-cream">
      <div class="container">
        <div class="text-center-heading">
          <span class="section-tag">Dokumentasi</span>
          <h2>Galeri Kegiatan</h2>
          <hr class="line-decor mx-auto" />
          <p>Potret keseruan, kolaborasi, dan antusiasme siswa dalam berbagai agenda sekolah.</p>
        </div>

        <div class="grid-3-kolom">
          <div class="custom-card" v-for="(img, index) in galeriFoto" :key="index">
            
            <!-- Foto Dokumentasi dengan Bingkai Ganda -->
            <div class="card-image-wrapper">
              <div class="frame-decor img-orange"></div>
              <img :src="img.src" :alt="img.alt" class="card-image" />
              <!-- Ribbon Judul Agenda -->
              <div class="title-badge-ribbon ribbon-orange">
                <div class="ribbon-inner-content">
                  <i class="fas fa-camera"></i>
                  <h3 class="ribbon-text">{{ img.caption }}</h3>
                </div>
              </div>
            </div>

            <!-- Detail Tambahan Galeri -->
            <div class="card-body">
              <span class="card-date-meta">🏷️ Kegiatan Sekolah</span>
              <p class="card-description">Dokumentasi pelaksanaan {{ img.caption }} yang diikuti oleh segenap warga SD Negeri Pucung dengan ceria.</p>
            </div>

          </div>
        </div>
        
        <!-- Tombol Link YouTube Memphis Style -->
        <div class="text-center-btn">
          <button class="btn-more">
            <i class="fab fa-youtube"></i> Tonton Galeri Video di YouTube &rarr;
          </button>
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
        deskripsi: 'Melestarikan budaya daerah melalui latihan tari tradisional nusantara secara rutin.',
        jadwal: 'Rabu, 13.30 WIB',
        foto: ['/images/tari.jpg']
      },
      {
        nama: 'BTAQ',
        icon: 'fas fa-book-open',
        deskripsi: 'Wadah pembinaan membaca dan menulis Al-Quran dengan tartil serta kaidah tajwid.',
        jadwal: 'Selasa, 13.30 WIB',
        foto: ['/images/btaq.jpg']
      },
      {
        nama: 'TIK',
        icon: 'fas fa-laptop-code',
        deskripsi: 'Literasi digital dasar, pengenalan sistem operasi office, dan desain grafis kreatif.',
        jadwal: 'Rabu & Kamis, 13.30 WIB',
        foto: ['/images/tik.jpg']
      },
      {
        nama: 'Karawitan',
        icon: 'fas fa-music',
        deskripsi: 'Pelestarian seni musik tradisional Jawa dengan memainkan instrumen gamelan lengkap.',
        jadwal: 'Selasa, 14.30 WIB',
        foto: ['/images/karawitan.jpg']
      },
      {
        nama: 'Hadroh',
        icon: 'fas fa-star-and-crescent',
        deskripsi: 'Wadah ekspresi seni musik islam, selawat, dan syiar keagamaan bagi siswa.',
        jadwal: 'Senin, 13.30 WIB',
        foto: ['/images/hadroh.jpg']
      }
    ]);

    const daftarPrestasi = ref([
      {
        tahun: '2026',
        judul: 'Juara 2 Lomba Kriya FLS2N',
        pemenang: 'Adit (Kelas IV)',
        tingkat: 'Tingkat Kapanewon'
      },
      {
        tahun: '2026',
        judul: 'Peringkat 4 TKA/D',
        pemenang: 'Kelas VI (Alumnus Tahun 2026)',
        tingkat: 'Tingkat Kapanewon Kalasan'
      },
      {
        tahun: '2023',
        judul: 'Juara 2 Lomba Kriya FLS2N',
        pemenang: 'Etsa Clearetsa (Kelas IV)',
        tingkat: 'Tingkat Kapanewon Kalasan'
      }
    ]);

    const galeriFoto = ref([
      { src: 'https://via.placeholder.com/400x300', alt: 'Upacara', caption: 'Upacara Bendera Senin Pagi' },
      { src: 'https://via.placeholder.com/400x300', alt: 'Pramuka', caption: 'Persami Penggalang' },
      { src: 'https://via.placeholder.com/400x300', alt: 'Lomba', caption: 'Peringatan HUT RI ke-80' },
      { src: 'https://via.placeholder.com/400x300', alt: 'Kelas', caption: 'Proyek P5 Kurikulum Merdeka' },
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
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,800;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

/* --- STRUKTUR DAN IDENTITAS GLOBAL (MEMPHIS) --- */
.kesiswaan-container {
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: #111111;
  overflow-x: hidden;
  padding-top: 80px;
}

h1, h2, h3 {
  font-family: 'Playfair Display', serif;
  font-weight: 800;
  color: #000000;
}

.container { 
  max-width: 1100px; 
  margin: 0 auto; 
  padding: 0 20px; 
}

.bg-cream { background-color: #fffbef; }
.bg-purple-pastel { background-color: #dfb2f4; border-top: 3px solid #000; border-bottom: 3px solid #000; }

.section-kesiswaan { padding: 80px 0; }
.text-center-heading { text-align: center; margin-bottom: 60px; }
.mx-auto { margin-left: auto; margin-right: auto; }

.section-tag { 
  color: #4b5563; 
  font-weight: 800; 
  text-transform: uppercase; 
  font-size: 0.8rem; 
  letter-spacing: 1.5px; 
  display: block; 
  margin-bottom: 5px; 
}

.line-decor { 
  width: 70px; 
  height: 4px; 
  background-color: #f5d061; 
  border: 2px solid #000; 
  border-radius: 10px;
  margin: 10px 0 20px 0; 
}
.line-decor.mx-auto { margin: 10px auto 25px auto; }

/* --- 1. HERO SECTION (MEMPHIS STYLE) --- */
.kesiswaan-hero {
  position: relative;
  background-color: #f5d061; /* Kuning Cerah Memphis */
  height: 35vh; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  color: #000000; 
  text-align: center;
  border-bottom: 3px solid #000000;
  overflow: hidden;
}
.hero-content { position: relative; z-index: 5; }
.hero-content h1 { font-size: 3rem; margin: 0; font-weight: 800; }
.hero-content p { font-size: 1.1rem; color: #2b2b2b; font-weight: 500; margin-top: 10px; max-width: 600px; }

.top-tag {
  font-weight: 800;
  letter-spacing: 2px;
  font-size: 0.85rem;
  display: block;
  margin-bottom: 5px;
}

/* Ornamen Geometris Mengambang */
.hero-shape {
  position: absolute;
  color: rgba(0, 0, 0, 0.08);
  font-weight: bold;
  user-select: none;
}
.shape-circle {
  width: 110px;
  height: 110px;
  border: 15px solid rgba(0, 0, 0, 0.04);
  border-radius: 50%;
  top: -15px;
  left: 6%;
}
.shape-triangle {
  font-size: 6rem;
  bottom: 5px;
  right: 10%;
  transform: rotate(20deg);
}
.shape-star {
  font-size: 5rem;
  top: 15px;
  right: 8%;
  transform: rotate(-10deg);
}

/* --- 2. GRID KARTU (EKSTRA & GALERI) --- */
.grid-3-kolom { 
  display: grid; 
  grid-template-columns: repeat(3, 1fr); 
  gap: 40px; 
}

/* KARTU GAYA DESAIN POP-ART MEMPHIS */
.custom-card {
  background: #ffffff;
  border-radius: 16px;
  overflow: visible; 
  display: flex;
  flex-direction: column;
  border: 2px solid #000000;
  box-shadow: 6px 6px 0px #000000;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}
.custom-card:hover {
  transform: translate(-3px, -3px);
  box-shadow: 9px 9px 0px #000000;
}

/* PENAMPILAN FOTO DAN AKSEN LAYER TUMPUK */
.card-image-wrapper {
  position: relative;
  width: 90%;
  height: 200px;
  margin: 15px auto 0 auto;
}
/* Efek bayangan warna-warni di belakang gambar asli */
.frame-decor {
  position: absolute;
  top: 6px;
  left: 6px;
  width: 100%;
  height: 100%;
  background-color: #b5e2fa; /* Biru pastel */
  border: 2px solid #000;
  border-radius: 12px;
  z-index: 1;
}
.frame-decor.img-orange {
  background-color: #ff9f68; /* Oranye */
}

.card-image {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 2px solid #000000;
  border-radius: 12px;
  z-index: 2;
}

/* BADGE/RIBBON MENYILANG KHAS GAYA KOMIK/MEMPHIS */
.title-badge-ribbon {
  position: absolute;
  bottom: -15px;
  left: -8px;
  padding: 8px 16px;
  max-width: 95%;
  border: 2px solid #000;
  border-radius: 8px;
  box-shadow: 4px 4px 0px #000;
  z-index: 10;
}
.ribbon-blue { background-color: #fffbef; }
.ribbon-orange { background-color: #f5d061; }

.ribbon-inner-content {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #000000;
}
.ribbon-inner-content i {
  font-size: 0.9rem;
}
.ribbon-text {
  color: #000000;
  font-size: 0.95rem;
  font-weight: 800;
  line-height: 1.2;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* BODY KARTU */
.card-body {
  padding: 30px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.card-date-meta {
  font-size: 0.75rem;
  color: #000000;
  background-color: #ffdac1;
  border: 2px solid #000;
  padding: 2px 10px;
  border-radius: 20px;
  font-weight: 800;
  margin-bottom: 12px;
  display: inline-block;
  align-self: flex-start;
}
.card-description {
  font-size: 0.9rem;
  color: #2b2b2b;
  line-height: 1.6;
  margin-bottom: 15px;
  flex-grow: 1;
}
.card-footer-info {
  border-top: 2px dashed #000;
  padding-top: 12px;
  margin-top: auto;
}
.jadwal-tag {
  font-size: 0.8rem;
  font-weight: 800;
  color: #000;
}

/* --- 3. TIMELINE PRESTASI (STYLE BUKU TULIS BERGARIS) --- */
.timeline-prestasi { 
  max-width: 800px; 
  margin: 0 auto; 
  position: relative; 
  padding-left: 45px; 
}
/* Garis vertical kiri tebal */
.timeline-prestasi::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  width: 4px;
  background-color: #000000;
}

.prestasi-item { 
  position: relative; 
  margin-bottom: 40px; 
}
.prestasi-marker {
  position: absolute; 
  left: -48px; 
  top: 10px; 
  width: 32px; 
  height: 32px;
  background: #f5d061; 
  border: 2px solid #000; 
  border-radius: 50%; 
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  box-shadow: 2px 2px 0px #000;
  z-index: 5;
}
.prestasi-content { 
  background: #ffffff; 
  padding: 25px; 
  border-radius: 16px; 
  border: 2px solid #000;
  box-shadow: 5px 5px 0px #000; 
}
.prestasi-year { 
  color: #000; 
  background-color: #ffdac1;
  border: 2px solid #000;
  padding: 2px 10px;
  border-radius: 20px;
  font-weight: 800; 
  font-size: 0.85rem; 
  display: inline-block;
  margin-bottom: 10px;
}
.prestasi-content h3 { 
  margin: 5px 0; 
  color: #000; 
  font-size: 1.3rem; 
}
.prestasi-winner { 
  color: #2b2b2b; 
  font-weight: 700; 
  margin: 5px 0 15px 0; 
  font-size: 0.95rem; 
}
.prestasi-desc-badge { 
  color: #000; 
  font-size: 0.8rem; 
  background-color: #b5e2fa;
  border: 2px solid #000;
  padding: 4px 12px;
  border-radius: 8px;
  font-weight: 700;
}

/* --- 4. TOMBOL LINK OUT YOUTUBE --- */
.text-center-btn { text-align: center; margin-top: 50px; }
.btn-more {
  background: #ffffff; 
  color: #000; 
  border: 2px solid #000; 
  padding: 14px 28px; 
  border-radius: 30px;
  font-weight: 800; 
  cursor: pointer; 
  box-shadow: 4px 4px 0px #000;
  transition: all 0.15s ease-in-out; 
  display: inline-flex; 
  align-items: center; 
  gap: 10px;
}
.btn-more:hover { 
  background: #dfb2f4; 
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0px #000;
}

/* --- RESPONSIVE MEDIA QUERIES --- */
@media (max-width: 992px) {
  .grid-3-kolom { grid-template-columns: repeat(2, 1fr); gap: 30px; }
}
@media (max-width: 768px) {
  .grid-3-kolom { grid-template-columns: 1fr; }
  .kesiswaan-hero { height: auto; padding: 60px 20px; }
  .kesiswaan-hero h1 { font-size: 2.2rem; }
  .timeline-prestasi { padding-left: 35px; }
  .timeline-prestasi::before { left: 10px; }
  .prestasi-marker { left: -38px; width: 28px; height: 28px; font-size: 0.85rem; }
}
</style>