<template>
  <div class="home-container">
    <section class="hero-banner">
      <div class="hero-overlay"></div>
      
      <div class="hero-shape shape-1"></div>
      <div class="hero-shape shape-2"></div>
      <div class="hero-shape shape-3"></div>

      <div class="hero-content">
        <span class="school-badge">SD NEGERI PUCUNG</span>
        <h1>Pucung BerSiNerGI "Bersih, Disiplin, Visioner, Religius"</h1>
        <p>Selamat datang di portal resmi informasi dan pelayanan akademik sekolah kami.</p>
        <div class="hero-buttons">
          <router-link to="/ppdb" class="btn-primary">Daftar PPDB Online</router-link>
          <router-link to="/profil" class="btn-secondary">Jelajahi Profil</router-link>
        </div>
      </div>
    </section>

    <section class="section-sambutan">
      <div class="container grid-2">
        <div class="kepsek-photo">
          <img src="/images/ks.jpg" alt="Foto Kepala Sekolah" />
          <div class="kepsek-title">
            <h3>Suyatmiyatun, S.Pd</h3>
            <p>Kepala Sekolah SD Negeri Pucung</p>
          </div>
        </div>
        <div class="kepsek-text">
          <span class="section-tag">Sambutan Pimpinan</span>
          <h2>Membangun Masa Depan Lewat Pendidikan Berkualitas</h2>
          <hr class="line-decor" />
          <p><em>Assalamu’alaikum Warahmatullahi Wabarakatuh,</em></p>
          <p>
            Puji syukur kita panjatkan kehadirat Allah SWT atas terwujudnya website resmi SD Negeri Pucung. Di era digital ini, kami berkomitmen untuk menyediakan wadah informasi yang transparan, akuntabel, dan mudah diakses oleh seluruh wali murid, siswa, dan masyarakat luas.
          </p>
          <p>
            Pendidikan bukan sekadar transfer ilmu, melainkan proses menanamkan nilai luhur dan karakter. Bersama jajaran guru yang berkompeten, kami siap membimbing putra-putri Anda menuju gerbang kesuksesan yang berlandaskan iman, ilmu, dan amal.
          </p>
          <p><em>Wassalamu’alaikum Warahmatullahi Wabarakatuh.</em></p>
        </div>
      </div>
    </section>

    <section class="dinamika-sekolah">
      <div class="container">
        <div class="section-header">
          <div class="header-left">
            <span class="subtitle">DINAMIKA SEKOLAH</span>
            <h2 class="main-title">Berita & Pengumuman Terbaru</h2>
          </div>
          <router-link to="/berita" class="see-all-link">Lihat Semua Berita &rarr;</router-link>
        </div>

        <div class="news-grid">
          <div v-for="item in beritaData" :key="item.id" class="news-card">
            
            <div class="card-image-wrapper">
              <img 
                :src="item.foto && item.foto.length > 0 ? item.foto[0] : 'https://via.placeholder.com/400x250'" 
                :alt="item.judul" 
                class="card-image"
              />
              
              <div :class="['title-badge-ribbon', getCategoryClass(item.kategori)]">
                <h3 class="ribbon-text">{{ item.judul }}</h3>
              </div>
            </div>

            <div class="card-body">
              <span class="card-date">{{ item.tanggal }}</span>
              <p class="card-description">{{ truncateText(item.ringkasan, 110) }}</p>
              
              <router-link :to="'/berita/' + item.id" class="continue-reading">
                Continue Reading <span>&rarr;</span>
              </router-link>
            </div>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
// 1. Impor data asli langsung dari file beritaData.js Anda
import { daftarArtikelSdn } from '../data/beritaData.js' // Sesuaikan path folder jika berbeda

// 2. Ambil 3 data teratas dan sesuaikan pemetaan kategorinya untuk Ribbon UI
const beritaData = computed(() => {
  // Mengambil 3 artikel teratas dari array Anda
  return daftarArtikelSdn.slice(0, 3)
})

// 3. Menyesuaikan class warna ribbon berdasarkan 'item.kategori' data Anda
const getCategoryClass = (kategori) => {
  if (kategori === 'Pengumuman') return 'ribbon-pengumuman'
  if (kategori === 'Berita') return 'ribbon-berita'
  if (kategori === 'Agenda') return 'ribbon-ppdb' // Menggunakan warna oranye milik class PPDB untuk Agenda
  return ''
}

// Pembatas jumlah huruf ringkasan agar tinggi box tetap seimbang
const truncateText = (text, length) => {
  if (!text) return ''
  if (text.length > length) {
    return text.substring(0, length) + '...'
  }
  return text
}
</script>

<style scoped>
/* --- STYLING DASAR & UTILITAS --- */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.grid-2 {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 50px;
  align-items: center;
}
.section-tag {
  color: #2563eb;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 1px;
  display: block;
  margin-bottom: 5px;
}
.line-decor {
  width: 60px;
  height: 4px;
  background-color: #2563eb;
  border: none;
  margin: 15px 0 20px 0;
}

/* --- 1. HERO BANNER --- */
.hero-banner {
  position: relative;
  background-image: url('https://via.placeholder.com/1920x800');
  background-size: cover;
  background-position: center;
  height: 85vh;
  display: flex;
  align-items: center;
  color: white;
  overflow: hidden;
}
.hero-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(135deg, rgba(30, 58, 138, 0.95), rgba(37, 99, 235, 0.75));
  z-index: 1;
}
.hero-content {
  position: relative;
  max-width: 850px;
  padding: 0 40px;
  z-index: 3;
}
.hero-shape {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: 2;
}
.shape-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 70%);
  top: -150px;
  right: -100px;
}
.shape-2 {
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, rgba(245, 158, 11, 0.2) 0%, rgba(245, 158, 11, 0) 70%);
  bottom: -50px;
  right: 15%;
}
.shape-3 {
  width: 200px;
  height: 200px;
  border-radius: 0;
  background-image: radial-gradient(rgba(255, 255, 255, 0.2) 1.5px, transparent 1.5px);
  background-size: 15px 15px;
  bottom: 40px;
  left: 30px;
  opacity: 0.8;
}
.hero-content h1 {
  font-size: 3.2rem;
  font-weight: 800;
  margin: 20px 0;
  line-height: 1.25;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}
.hero-content p {
  font-size: 1.25rem;
  margin-bottom: 35px;
  opacity: 0.95;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
}
.school-badge {
  background-color: #f59e0b;
  color: #1e3a8a;
  padding: 6px 12px;
  font-weight: bold;
  border-radius: 4px;
  font-size: 0.9rem;
}
.hero-buttons {
  display: flex;
  gap: 15px;
}
.btn-primary, .btn-secondary {
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: bold;
  text-decoration: none;
  transition: 0.3s;
}
.btn-primary {
  background-color: #2563eb;
  color: white;
}
.btn-primary:hover { background-color: #1d4ed8; }
.btn-secondary {
  background-color: white;
  color: #1e3a8a;
}
.btn-secondary:hover { background-color: #f3f4f6; }

/* --- 2. SAMBUTAN KEPALA SEKOLAH --- */
.section-sambutan {
  padding: 80px 0;
  background-color: #ffffff;
}
.kepsek-photo {
  text-align: center;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  background: #f3f4f6;
}
.kepsek-photo img {
  width: 100%;
  height: auto;
  display: block;
}
.kepsek-title {
  padding: 15px;
  background-color: #1e3a8a;
  color: white;
}
.kepsek-title h3 { margin: 0; font-size: 1.1rem; }
.kepsek-title p { margin: 5px 0 0 0; font-size: 0.85rem; opacity: 0.8; }
.kepsek-text h2 { color: #1e3a8a; font-size: 2rem; margin: 0; }
.kepsek-text p { color: #4b5563; line-height: 1.6; margin-bottom: 15px; }

/* --- 3. DINAMIKA SEKOLAH --- */
.dinamika-sekolah {
  padding: 80px 0;
  background-color: #f8fafc;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 40px;
}
.subtitle {
  color: #2563eb;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 1px;
  display: block;
  margin-bottom: 5px;
  text-transform: uppercase;
}
.main-title {
  color: #1e3a8a;
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
}
.see-all-link {
  color: #2563eb;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.95rem;
  transition: color 0.2s;
}
.see-all-link:hover {
  color: #1d4ed8;
}
.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}
.news-card {
  background: #ffffff;
  border-radius: 4px;
  overflow: visible;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
}
.news-card:hover {
  transform: translateY(-5px);
}
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
.title-badge-ribbon {
  position: absolute;
  bottom: 15px;
  left: 0;
  background-color: #0f172a;
  padding: 10px 15px;
  max-width: 90%;
  box-shadow: 3px 3px 10px rgba(0,0,0,0.2);
  z-index: 2;
}
.ribbon-text {
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.3;
  margin: 0;
display: -webkit-box;
-webkit-line-clamp: 1;
line-clamp: 1; /* tambahkan baris standar ini di bawahnya */
-webkit-box-orient: vertical;
overflow: hidden;
}
.title-badge-ribbon::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 5px;
}
.ribbon-pengumuman::before { background-color: #ef4444; }
.ribbon-berita::before     { background-color: #10b981; }
.ribbon-ppdb::before       { background-color: #f59e0b; }

.card-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.card-date {
  font-size: 0.85rem;
  color: #94a3b8;
  margin-bottom: 10px;
  display: block;
}
.card-description {
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 15px;
  flex-grow: 1;
}
.continue-reading {
  color: #0f172a;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: gap 0.2s, color 0.2s;
  align-self: flex-start;
}
.continue-reading:hover {
  color: #0284c7;
  gap: 10px;
}

/* RESPONSIVE DESIGN */
@media (max-width: 968px) {
  .news-grid { grid-template-columns: repeat(2, 1fr); }
  .section-header { flex-direction: column; align-items: flex-start; gap: 10px; }
}
@media (max-width: 768px) {
  .grid-2 { grid-template-columns: 1fr; gap: 30px; }
  .hero-content h1 { font-size: 2.2rem; }
}
@media (max-width: 640px) {
  .news-grid { grid-template-columns: 1fr; }
  .main-title { font-size: 1.6rem; }
  .hero-content h1 { font-size: 1.8rem; }
  .shape-1, .shape-2, .shape-3 { display: none; }
}
</style>