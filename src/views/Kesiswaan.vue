<template>
  <div class="kesiswaan-container">
    
    <!-- BACKGROUND MESH GLOW FLOATING BALLS -->
    <div class="mesh-background">
      <div class="glow-ball glow-purple-1"></div>
      <div class="glow-ball glow-yellow-1"></div>
      <div class="glow-ball glow-pink-1"></div>
      <div class="glow-ball glow-cyan-1"></div>
    </div>

    <!-- HERO SECTION -->
    <section class="kesiswaan-hero">
      <div class="container hero-content text-center">
        <div class="top-tag-pill">
          <span class="sparkle">✨</span> AKTIVITAS SISWA
        </div>
        <h1 class="hero-title">
          Kesiswaan & <span class="gradient-text-vibrant">Kegiatan</span>
        </h1>
        <p class="hero-subtitle">
          Wadah kreativitas, pengembangan bakat, dan apresiasi prestasi siswa SD Negeri Pucung.
        </p>
      </div>
    </section>

    <!-- SECTION 1: EKSTRAKURIKULER -->
    <section class="section-kesiswaan">
      <div class="container">
        <div class="text-center-heading text-center">
          <span class="sub-heading badge-purple">MINAT & BAKAT</span>
          <h2 class="section-heading">Ekstrakurikuler</h2>
          <div class="heading-line-vibrant center"></div>
          <p class="subtitle">Kami menyediakan berbagai pilihan kegiatan untuk mengasah kepemimpinan dan keterampilan non-akademik siswa.</p>
        </div>

        <div class="grid-3-kolom">
          <div class="ekstra-card-glass" v-for="item in daftarEkstra" :key="item.nama">
            
            <!-- Foto Kegiatan dengan Frame Glass & Glow Overlay -->
            <div class="card-image-wrapper">
              <img 
                :src="item.foto && item.foto.length > 0 ? item.foto[0] : 'https://via.placeholder.com/400x250'" 
                :alt="item.nama" 
                class="card-image"
              />
              <div class="title-badge-vibrant">
                <i :class="item.icon"></i>
                <span>{{ item.nama }}</span>
              </div>
            </div>

            <!-- Detail Ekstrakurikuler -->
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

    <!-- SECTION 2: PRESTASI TINGKATAN (GLASS TIMELINE) -->
    <section class="section-kesiswaan">
      <div class="container">
        <div class="text-center-heading text-center">
          <span class="sub-heading badge-yellow">CAPAIAN SISWA</span>
          <h2 class="section-heading">Prestasi Terbaru</h2>
          <div class="heading-line-vibrant center"></div>
          <p class="subtitle">Apresiasi atas kerja keras dan dedikasi siswa dalam berbagai ajang perlombaan.</p>
        </div>

        <div class="timeline-prestasi">
          <div class="prestasi-item" v-for="win in daftarPrestasi" :key="win.judul">
            <div class="prestasi-marker">🏆</div>
            <div class="prestasi-card-glass">
              <div class="prestasi-header">
                <span class="prestasi-year">{{ win.tahun }}</span>
                <span class="prestasi-desc-badge">{{ win.tingkat }}</span>
              </div>
              <h3>{{ win.judul }}</h3>
              <p class="prestasi-winner">👤 {{ win.pemenang }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: DOKUMENTASI GALERI -->
    <section class="section-kesiswaan">
      <div class="container">
        <div class="text-center-heading text-center">
          <span class="sub-heading badge-pink">DOKUMENTASI</span>
          <h2 class="section-heading">Galeri Kegiatan</h2>
          <div class="heading-line-vibrant center"></div>
          <p class="subtitle">Potret keseruan, kolaborasi, dan antusiasme siswa dalam berbagai agenda sekolah.</p>
        </div>

        <div class="grid-3-kolom">
          <div class="galeri-card-glass" v-for="(img, index) in galeriFoto" :key="index">
            
            <div class="card-image-wrapper">
              <img :src="img.src" :alt="img.alt" class="card-image" />
              <div class="galeri-caption-badge">
                <i class="fas fa-camera"></i>
                <span>{{ img.caption }}</span>
              </div>
            </div>

            <div class="card-body">
              <span class="card-date-meta">🏷️ Kegiatan Sekolah</span>
              <p class="card-description">Dokumentasi pelaksanaan {{ img.caption }} yang diikuti oleh segenap warga SD Negeri Pucung dengan ceria.</p>
            </div>

          </div>
        </div>
        
        <!-- Tombol Link Out Modern Glass -->
        <div class="text-center-btn">
          <button class="btn-more-vibrant">
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
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

/* --- LAYOUT UTAMA & VIBRANT MESH BACKGROUND --- */
.kesiswaan-container {
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: #1e293b;
  position: relative;
  background: #f8fafc;
  overflow-x: hidden;
  min-height: 100vh;
}

/* Background Glowing Balls */
.mesh-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
}

.glow-ball {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.55;
}

.glow-purple-1 {
  width: 500px;
  height: 500px;
  background: #a855f7;
  top: 0%;
  left: -10%;
}

.glow-yellow-1 {
  width: 450px;
  height: 450px;
  background: #ffb703;
  top: 25%;
  right: -5%;
}

.glow-pink-1 {
  width: 400px;
  height: 400px;
  background: #ec4899;
  top: 55%;
  left: -5%;
}

.glow-cyan-1 {
  width: 450px;
  height: 450px;
  background: #06b6d4;
  bottom: 5%;
  right: -5%;
}

.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
}

.text-center { text-align: center; }

.section-kesiswaan {
  padding: 60px 0 80px 0;
}

/* --- BADGES & HEADINGS VIBRANT --- */
.sub-heading {
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  display: inline-block;
  padding: 6px 16px;
  border-radius: 99px;
  margin-bottom: 15px;
}

.badge-purple { background: #f3e8ff; color: #6b21a8; }
.badge-yellow { background: #fef3c7; color: #92400e; }
.badge-pink { background: #fce7f3; color: #9d174d; }

.section-heading {
  font-size: 2.3rem;
  font-weight: 800;
  color: #0f172a;
  line-height: 1.3;
}

.heading-line-vibrant {
  width: 80px;
  height: 5px;
  background: linear-gradient(90deg, #ffb703, #ec4899, #8b5cf6, #06b6d4);
  border-radius: 10px;
  margin: 15px 0 25px 0;
}
.heading-line-vibrant.center {
  margin: 15px auto 25px auto;
}

.gradient-text-vibrant {
  background: linear-gradient(135deg, #ffb703 0%, #ec4899 50%, #8b5cf6 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  color: #475569;
  max-width: 600px;
  margin: 12px auto 0 auto;
  font-size: 1rem;
}

/* --- HERO KESISWAAN --- */
.kesiswaan-hero {
  position: relative;
  padding: 120px 0 40px 0;
}

.top-tag-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.9);
  padding: 8px 20px;
  border-radius: 99px;
  font-size: 0.85rem;
  font-weight: 800;
  color: #4f46e5;
  box-shadow: 0 10px 25px rgba(99, 102, 241, 0.15);
  margin-bottom: 20px;
  border: 1px solid rgba(255, 255, 255, 0.8);
}

.hero-title {
  font-size: 3.4rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 15px;
}

.hero-subtitle {
  font-size: 1.15rem;
  color: #475569;
  max-width: 600px;
  margin: 0 auto;
}

/* --- GRID 3 KOLOM (EKSTRA & GALERI) --- */
.grid-3-kolom {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 40px;
}

/* --- EKSTRA & GALERI GLASS CARD --- */
.ekstra-card-glass,
.galeri-card-glass {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.9);
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
}

.ekstra-card-glass:hover,
.galeri-card-glass:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  background: rgba(255, 255, 255, 0.95);
}

.card-image-wrapper {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.ekstra-card-glass:hover .card-image,
.galeri-card-glass:hover .card-image {
  transform: scale(1.05);
}

/* TITLE BADGE OVERLAY */
.title-badge-vibrant {
  position: absolute;
  bottom: 12px;
  left: 12px;
  right: 12px;
  background: rgba(15, 23, 42, 0.75);
  backdrop-filter: blur(12px);
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  font-size: 0.95rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.galeri-caption-badge {
  position: absolute;
  bottom: 12px;
  left: 12px;
  right: 12px;
  background: rgba(236, 72, 153, 0.85);
  backdrop-filter: blur(12px);
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  font-size: 0.9rem;
  box-shadow: 0 4px 15px rgba(236, 72, 153, 0.3);
}

.card-body {
  padding: 25px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.card-date-meta {
  font-size: 0.8rem;
  color: #7c3aed;
  background: #f3e8ff;
  padding: 4px 12px;
  border-radius: 99px;
  font-weight: 700;
  margin-bottom: 12px;
  display: inline-block;
  align-self: flex-start;
}

.card-description {
  font-size: 0.95rem;
  color: #475569;
  line-height: 1.6;
  margin-bottom: 20px;
  flex-grow: 1;
}

.card-footer-info {
  border-top: 1px dashed #e2e8f0;
  padding-top: 14px;
  margin-top: auto;
}

.jadwal-tag {
  font-size: 0.85rem;
  font-weight: 700;
  color: #0f172a;
}

/* --- PRESTASI TIMELINE GLASS --- */
.timeline-prestasi {
  max-width: 800px;
  margin: 40px auto 0 auto;
  position: relative;
  padding-left: 45px;
}

.timeline-prestasi::before {
  content: '';
  position: absolute;
  left: 18px;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, #ffb703 0%, #a855f7 50%, #06b6d4 100%);
  border-radius: 10px;
}

.prestasi-item {
  position: relative;
  margin-bottom: 30px;
}

.prestasi-marker {
  position: absolute;
  left: -43px;
  top: 15px;
  width: 36px;
  height: 36px;
  background: #ffffff;
  border: 2px solid #a855f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  box-shadow: 0 8px 20px rgba(168, 85, 247, 0.25);
  z-index: 5;
}

.prestasi-card-glass {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.9);
  padding: 25px;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
}

.prestasi-card-glass:hover {
  transform: translateX(6px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
  background: rgba(255, 255, 255, 0.95);
}

.prestasi-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.prestasi-year {
  color: #ffffff;
  background: linear-gradient(135deg, #ffb703 0%, #f97316 100%);
  padding: 3px 12px;
  border-radius: 99px;
  font-weight: 800;
  font-size: 0.8rem;
}

.prestasi-desc-badge {
  color: #0369a1;
  background: #e0f2fe;
  padding: 3px 12px;
  border-radius: 99px;
  font-weight: 700;
  font-size: 0.8rem;
}

.prestasi-card-glass h3 {
  margin: 5px 0 8px 0;
  color: #0f172a;
  font-size: 1.3rem;
  font-weight: 800;
}

.prestasi-winner {
  color: #475569;
  font-weight: 600;
  margin: 0;
  font-size: 0.95rem;
}

/* --- BUTTON OUTLINK YOUTUBE --- */
.text-center-btn { text-align: center; margin-top: 50px; }

.btn-more-vibrant {
  background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
  color: #ffffff;
  border: none;
  padding: 16px 36px;
  border-radius: 99px;
  font-weight: 800;
  font-size: 0.95rem;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(168, 85, 247, 0.35);
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 12px;
}

.btn-more-vibrant:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(168, 85, 247, 0.5);
  opacity: 0.95;
}

/* --- RESPONSIVE MEDIA QUERIES --- */
@media (max-width: 992px) {
  .grid-3-kolom { grid-template-columns: repeat(2, 1fr); gap: 20px; }
  .hero-title { font-size: 2.6rem; }
}

@media (max-width: 768px) {
  .grid-3-kolom { grid-template-columns: 1fr; }
  .kesiswaan-hero { padding: 80px 0 30px 0; }
  .hero-title { font-size: 2.1rem; }
  .timeline-prestasi { padding-left: 35px; }
  .timeline-prestasi::before { left: 12px; }
  .prestasi-marker { left: -32px; width: 30px; height: 30px; font-size: 0.85rem; }
}
</style>