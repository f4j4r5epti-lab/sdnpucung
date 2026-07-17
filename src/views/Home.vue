<template>
  <div class="home-container">
    
    <!-- SECTION 1: HERO BANNER (Murni Ilustrasi Geometris Kuning, Tanpa Foto Orang) -->
    <section class="hero-section">
      <div class="container grid-hero">
        
        <!-- Sisi Kiri: Teks & Tombol -->
        <div class="hero-text-content">
          <span class="top-tag">SD NEGERI PUCUNG • BerSiNerGI</span>
          <h1>
            Bersih, Disiplin, <br />
            <em>Visioner,</em> <br />
            Religius.
          </h1>
          <p>Selamat datang di portal resmi informasi, berita, agenda kegiatan, dan pelayanan akademik sekolah kami.</p>
          <div class="hero-buttons">
            <router-link to="/ppdb" class="btn-purple">Daftar PPDB Online</router-link>
            <router-link to="/profil" class="btn-outline-dark">Jelajahi Profil</router-link>
          </div>
        </div>

        <!-- Sisi Kanan: Pure CSS Memphis Illustration -->
        <div class="hero-illustration-wrapper">
          <div class="illustration-artboard">
            <!-- Lingkaran Biru Belakang -->
            <div class="art-circle-blue"></div>
            <!-- Setengah Lingkaran Ungu -->
            <div class="art-semicircle-purple"></div>
            <!-- Smiley Bergerak/Miring -->
            <div class="art-smiley-badge">🙂</div>
            <!-- Tangga Orange Bawah -->
            <div class="art-stairs-orange">
              <span></span><span></span><span></span>
            </div>
            <!-- Kubah Arch Utama (Hanya Warna Krem Solid dengan Border Hitam Tebal) -->
            <div class="art-arch-solid">
              <div class="inner-pattern">
                <span class="star-icon">✦</span>
                <span class="star-icon large">✦</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- SECTION 2: DINAMIKA SEKOLAH (Menggunakan Foto dalam Bingkai Kubah) -->
    <section class="dinamika-section">
      <div class="container">
        <div class="section-title-center">
          <h2>Dinamika terbaru di SD Negeri Pucung</h2>
          <hr class="short-line" />
        </div>

        <div class="news-grid">
          <div v-for="item in beritaData" :key="item.id" class="news-card">
            
            <!-- Mengembalikan Tampilan FOTO dengan Bingkai Kubah (Arch Portal) -->
            <div class="card-arch-wrapper">
              <img 
                :src="item.foto && item.foto.length > 0 ? item.foto[0] : 'https://via.placeholder.com/400x250'" 
                :alt="item.judul" 
                class="card-image"
              />
            </div>

            <!-- Badge Kategori Bulat -->
            <div class="category-badge-wrapper">
              <span :class="['category-badge', getCategoryClass(item.kategori)]">
                {{ item.kategori }}
              </span>
            </div>

            <!-- Konten Tulisan -->
            <div class="card-body">
              <span class="card-date">{{ item.tanggal }}</span>
              <h3 class="card-title">{{ item.judul }}</h3>
              <p class="card-description">{{ truncateText(item.ringkasan, 90) }}</p>
              
              <router-link :to="'/berita/' + item.id" class="read-more-link">
                Selengkapnya <span>&rarr;</span>
              </router-link>
            </div>

          </div>
        </div>

        <div class="text-center-action">
          <router-link to="/berita" class="btn-purple">Lihat Semua Berita & Agenda</router-link>
        </div>
      </div>
    </section>

    <!-- SECTION 3: PORTOFOLIO / MOTIVASI -->
    <section class="portfolio-section">
      <div class="ornament-flower flower-left">✿</div>
      <div class="ornament-flower flower-right">✿</div>
      <div class="container text-center">
        <span class="top-tag">AKTIVITAS & KREATIVITAS</span>
        <h2>
          Lingkungan belajar yang menyenangkan <br />
          membantu siswa tumbuh aktif dan berprestasi.
        </h2>
        <router-link to="/kesiswaan" class="btn-purple">Tengok Kegiatan Siswa</router-link>
      </div>
    </section>

    <!-- SECTION 4: CALL TO ACTION -->
    <section class="cta-section">
      <div class="container text-center">
        <div class="cta-smiley">🙂</div>
        <h2>Kami senang menyambut Anda bergabung di keluarga besar kami.</h2>
        <router-link to="/kontak" class="btn-purple-large">Hubungi Kami Sekarang</router-link>
      </div>
    </section>

    <!-- SECTION 5: FOOTER PLAYFUL -->
    <footer class="playful-footer">
      <div class="container footer-grid">
        <div class="footer-col">
          <h3>Alamat Sekolah</h3>
          <p>
            Pucung, Tamanmartani,<br />
            Kapanewon Kalasan, Sleman, DIY.
          </p>
          <p class="copyright">Copyright © 2026 SDN Pucung. All Rights Reserved.</p>
        </div>

        <div class="footer-col">
          <h3>Kontak Kami</h3>
          <p>
            Email: <a href="mailto:sdnpucung@sch.id">sdn.pucung@gmail.com</a><br />
            Jam Operasional:  <br />
            Senin - Kamis (07.00 - 15.00 WIB)<br />
            Jumat (07.00 - 14.00 WIB)

          </p>
        </div>

        <div class="footer-col">
          <h3>Hubungkan Sosial</h3>
          <div class="social-links">
            <a href="#">📸 Instagram</a>
            <a href="#">📹 YouTube</a>
            <a href="#">🌐 Facebook</a>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { daftarArtikelSdn } from '../data/beritaData.js' // Sesuaikan path berkas jika berbeda

const beritaData = computed(() => {
  return daftarArtikelSdn.slice(0, 3)
})

const getCategoryClass = (kategori) => {
  if (kategori === 'Pengumuman') return 'badge-pink'
  if (kategori === 'Berita') return 'badge-blue'
  if (kategori === 'Agenda') return 'badge-yellow'
  return 'badge-purple'
}

const truncateText = (text, length) => {
  if (!text) return ''
  return text.length > length ? text.substring(0, length) + '...' : text
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,800;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

/* --- TEMA GLOBAL --- */
.home-container {
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: #111111;
  background-color: #fffbef;
  overflow-x: hidden;
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

/* --- TOMBOL PASTEL MEMPHIS --- */
.btn-purple {
  background-color: #dfb2f4;
  color: #111;
  padding: 12px 28px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  display: inline-block;
  border: 2px solid #000;
  box-shadow: 3px 3px 0px #000;
  transition: transform 0.2s, box-shadow 0.2s;
}
.btn-purple:hover {
  transform: translate(-2px, -2px);
  box-shadow: 5px 5px 0px #000;
}

.btn-purple-large {
  background-color: #dfb2f4;
  color: #111;
  padding: 16px 36px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.1rem;
  text-decoration: none;
  display: inline-block;
  border: 2px solid #000;
  box-shadow: 4px 4px 0px #000;
  transition: transform 0.2s, box-shadow 0.2s;
}
.btn-purple-large:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0px #000;
}

.btn-outline-dark {
  background-color: transparent;
  color: #111;
  padding: 12px 28px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  display: inline-block;
  border: 2px solid #000;
  transition: background-color 0.2s;
}
.btn-outline-dark:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.top-tag {
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #4b5563;
  display: block;
  margin-bottom: 15px;
}

/* --- 1. HERO SECTION (Kuning Hangat Tanpa Foto) --- */
.hero-section {
  background-color: #f5d061;
  padding: 100px 0 120px 0;
  border-bottom: 2px solid #000;
}
.grid-hero {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 40px;
  align-items: center;
}
.hero-text-content h1 {
  font-size: 3.5rem;
  line-height: 1.15;
  margin-bottom: 20px;
}
.hero-text-content h1 em {
  font-style: italic;
  font-weight: 600;
}
.hero-text-content p {
  font-size: 1.15rem;
  line-height: 1.6;
  color: #1f2937;
  margin-bottom: 35px;
  max-width: 540px;
}
.hero-buttons {
  display: flex;
  gap: 15px;
}

/* --- ILUSTRASI CSS BELAKANG KANAN (HERO) --- */
.hero-illustration-wrapper {
  display: flex;
  justify-content: center;
}
.illustration-artboard {
  position: relative;
  width: 320px;
  height: 440px;
}

.art-arch-solid {
  position: absolute;
  bottom: 0;
  left: 10px;
  width: 280px;
  height: 380px;
  border-top-left-radius: 140px;
  border-top-right-radius: 140px;
  border: 2px solid #000;
  background-color: #fffbef;
  box-shadow: 8px 8px 0px #000;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
}
.inner-pattern {
  display: flex;
  gap: 15px;
  align-items: center;
}
.star-icon {
  font-size: 2.5rem;
  color: #dfb2f4;
  text-shadow: 2px 2px 0px #000;
  -webkit-text-stroke: 1.5px #000;
}
.star-icon.large {
  font-size: 4rem;
  color: #ff9f68;
}

.art-circle-blue {
  position: absolute;
  top: 10px;
  left: -20px;
  width: 95px;
  height: 95px;
  border-radius: 50%;
  border: 2px solid #000;
  background-color: #b5e2fa;
  z-index: 2;
}

.art-semicircle-purple {
  position: absolute;
  bottom: 40px;
  right: -15px;
  width: 70px;
  height: 35px;
  background-color: #dfb2f4;
  border-top-left-radius: 70px;
  border-top-right-radius: 70px;
  border: 2px solid #000;
  transform: rotate(40deg);
  z-index: 6;
}

.art-smiley-badge {
  position: absolute;
  top: 70px;
  right: -10px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid #000;
  background-color: #f5d061;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  box-shadow: 3px 3px 0px #000;
  transform: rotate(15deg);
  z-index: 6;
}

.art-stairs-orange {
  position: absolute;
  bottom: -10px;
  left: -15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 6;
}
.art-stairs-orange span {
  height: 25px;
  border: 2px solid #000;
  background-color: #ff9f68;
  display: block;
}
.art-stairs-orange span:nth-child(1) { width: 35px; border-bottom: none; }
.art-stairs-orange span:nth-child(2) { width: 70px; border-bottom: none; }
.art-stairs-orange span:nth-child(3) { width: 105px; }


/* --- 2. DINAMIKA SECTION (Kubah Isi Foto Asli) --- */
.dinamika-section {
  background-color: #fffbef;
  padding: 100px 0;
  border-bottom: 2px solid #000;
}
.section-title-center {
  text-align: center;
  margin-bottom: 60px;
}
.section-title-center h2 {
  font-size: 2.5rem;
}
.short-line {
  width: 80px;
  height: 4px;
  background-color: #dfb2f4;
  border: 2px solid #000;
  border-radius: 10px;
  margin: 15px auto 0 auto;
}

/* Grid Kartu Berita */
.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-bottom: 50px;
}
.news-card {
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

/* Kubah yang Membungkus Foto Asli */
.card-arch-wrapper {
  width: 100%;
  height: 300px;
  border-top-left-radius: 150px;
  border-top-right-radius: 150px;
  border: 2px solid #000;
  overflow: hidden;
  background-color: #e2e8f0;
  box-shadow: 4px 4px 0px #000;
  transition: transform 0.2s, box-shadow 0.2s;
}
.news-card:hover .card-arch-wrapper {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0px #000;
}
.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Badge Kategori Bulat */
.category-badge-wrapper {
  margin-top: -18px;
  z-index: 10;
}
.category-badge {
  padding: 6px 18px;
  border-radius: 45px;
  border: 2px solid #000;
  font-weight: 700;
  font-size: 0.8rem;
  display: inline-block;
  box-shadow: 2px 2px 0px #000;
}
.badge-pink { background-color: #ffb7b2; }
.badge-blue { background-color: #b5e2fa; }
.badge-yellow { background-color: #ffdac1; }
.badge-purple { background-color: #e8aeff; }

.card-body {
  padding: 20px 10px;
}
.card-date {
  font-size: 0.8rem;
  font-weight: 600;
  color: #4b5563;
  display: block;
  margin-bottom: 8px;
}
.card-title {
  font-size: 1.3rem;
  margin: 0 0 10px 0;
  line-height: 1.35;
}
.card-description {
  font-size: 0.9rem;
  color: #374151;
  line-height: 1.5;
  margin-bottom: 15px;
}
.read-more-link {
  font-weight: 700;
  font-size: 0.9rem;
  color: #000;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: gap 0.2s;
}
.read-more-link:hover {
  gap: 10px;
}
.text-center-action {
  text-align: center;
}

/* --- 3. PORTFOLIO SECTION --- */
.portfolio-section {
  background-color: #d0e1f9;
  padding: 100px 0;
  position: relative;
  border-bottom: 2px solid #000;
}
.portfolio-section h2 {
  font-size: 2.5rem;
  line-height: 1.3;
  margin: 15px 0 35px 0;
}
.ornament-flower {
  position: absolute;
  font-size: 3rem;
  color: #fff;
  font-family: sans-serif;
  z-index: 1;
}
.flower-left { top: 60px; left: 8%; transform: rotate(-15deg); }
.flower-right { bottom: 60px; right: 8%; transform: rotate(20deg); }

/* --- 4. CALL TO ACTION --- */
.cta-section {
  background-color: #fffbef;
  padding: 90px 0;
  border-bottom: 2px solid #000;
}
.cta-smiley {
  font-size: 3.5rem;
  background-color: #f5d061;
  width: 80px;
  height: 80px;
  border: 2px solid #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px auto;
  box-shadow: 3px 3px 0 #000;
}
.cta-section h2 {
  font-size: 2.2rem;
  max-width: 650px;
  margin: 0 auto 40px auto;
  line-height: 1.3;
}

/* --- 5. FOOTER --- */
.playful-footer {
  background-color: #cbe896;
  padding: 70px 0;
  border-bottom: 6px solid #111;
  color: #111;
}
.footer-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}
.footer-col h3 {
  font-size: 1.30rem;
  margin: 0 0 15px 0;
}
.footer-col p {
  font-size: 0.9rem;
  line-height: 1.6;
}
.footer-col a {
  color: #000;
  font-weight: 700;
}
.copyright {
  margin-top: 25px;
  font-size: 0.8rem;
  opacity: 0.8;
}
.social-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.social-links a {
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
}
.social-links a:hover {
  text-decoration: underline;
}

/* --- MEDIA QUERIES --- */
@media (max-width: 992px) {
  .grid-hero {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .hero-text-content h1 { font-size: 2.8rem; }
  .hero-text-content p { margin-left: auto; margin-right: auto; }
  .hero-buttons { justify-content: center; }
  .hero-illustration-wrapper { margin-top: 50px; }
  .news-grid { grid-template-columns: repeat(2, 1fr); }
  .footer-grid { grid-template-columns: 1fr; text-align: center; }
  .social-links { align-items: center; }
  .ornament-flower { display: none; }
}

@media (max-width: 640px) {
  .news-grid { grid-template-columns: 1fr; }
  .hero-text-content h1 { font-size: 2.2rem; }
  .section-title-center h2 { font-size: 1.8rem; }
  .portfolio-section h2 { font-size: 1.6rem; }
  .cta-section h2 { font-size: 1.4rem; }
}
</style>