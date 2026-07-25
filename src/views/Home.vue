<template>
  <div class="home-container">
    
    <!-- BACKGROUND MESH GLOW FLOATING BALLS (Sama seperti Profil.vue) -->
    <div class="mesh-background">
      <div class="glow-ball glow-yellow-1"></div>
      <div class="glow-ball glow-purple-1"></div>
      <div class="glow-ball glow-pink-1"></div>
      <div class="glow-ball glow-cyan-1"></div>
      <div class="glow-ball glow-yellow-2"></div>
    </div>

    <!-- SECTION 1: HERO BANNER (3D Vibrant Modern) -->
    <section class="hero-section">
      <div class="container grid-hero">
        
        <!-- Sisi Kiri: Teks & Aksi -->
        <div class="hero-text-content">
          <div class="top-tag-pill">
            <span class="sparkle">✨</span> SD NEGERI PUCUNG • BerSiNerGI
          </div>
          <h1 class="hero-title">
            Bersih, Disiplin, <br />
            <span class="gradient-text-vibrant">Visioner,</span> Religius.
          </h1>
          <p class="hero-subtitle">
            Selamat datang di portal resmi informasi, berita, agenda kegiatan, dan pelayanan akademik sekolah kami.
          </p>
          <div class="hero-buttons">
            <router-link to="/ppdb" class="btn-yellow-glow">Daftar PPDB Online</router-link>
            <router-link to="/profil" class="btn-secondary-glass">Jelajahi Profil</router-link>
          </div>
        </div>

        <!-- Sisi Kanan: Visual Modern 3D / Floating Cards dengan Border Gradien -->
        <div class="hero-visual-wrapper">
          <div class="vibrant-card-wrapper main-hero-grad">
            <div class="glass-hero-card">
              <div class="hero-badge floating-1 badge-grad-1">
                <span class="badge-icon">🎓</span>
                <div>
                  <strong>Berakreditasi A</strong>
                  <small>Pendidikan Berkualitas</small>
                </div>
              </div>
              
              <div class="hero-badge floating-2 badge-grad-2">
                <span class="badge-icon">⭐</span>
                <div>
                  <strong>Siswa Berprestasi</strong>
                  <small>Akademik & Non-Akademik</small>
                </div>
              </div>

              <div class="hero-center-illustration">
                <div class="avatar-3d-placeholder">
                  <span class="large-emoji">🏫</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- SECTION 2: DINAMIKA SEKOLAH (BERITA & AGENDA) -->
    <section class="dinamika-section">
      <div class="container">
        <div class="section-title-center">
          <span class="sub-heading badge-purple">KABAR TERKINI</span>
          <h2 class="section-heading">Dinamika terbaru di SD Negeri Pucung</h2>
          <div class="heading-line-vibrant center"></div>
        </div>

        <div class="news-grid">
          <div 
            v-for="(item, idx) in beritaData" 
            :key="item.id" 
            class="news-card-glass"
            :class="'card-border-gradient-' + (idx % 3)"
          >
            
            <!-- SLIDER / CAROUSEL FOTO BERITA & AGENDA -->
            <div class="card-image-slider">
              <img 
                :src="getSlidePhoto(item)" 
                :alt="item.judul" 
                class="card-image"
              />

              <!-- Tombol Navigasi Carousel -->
              <template v-if="item.foto && item.foto.length > 1">
                <button 
                  @click.stop="prevSlide(item.id, item.foto.length)" 
                  class="slider-btn btn-left" 
                  aria-label="Foto Sebelumnya"
                >
                  &#10094;
                </button>
                <button 
                  @click.stop="nextSlide(item.id, item.foto.length)" 
                  class="slider-btn btn-right" 
                  aria-label="Foto Berikutnya"
                >
                  &#10095;
                </button>

                <!-- Dots Indikator Slide -->
                <div class="slider-dots">
                  <span 
                    v-for="(_, idxDot) in item.foto" 
                    :key="idxDot"
                    class="dot"
                    :class="{ active: getCurrentSlide(item.id) === idxDot }"
                    @click.stop="setSlide(item.id, idxDot)"
                  ></span>
                </div>
              </template>

              <!-- Badge Kategori Overlay -->
              <span :class="['category-badge-overlay', getCategoryClass(item.kategori)]">
                {{ item.kategori }}
              </span>
            </div>

            <!-- Konten Tulisan -->
            <div class="card-body">
              <span class="card-date">📅 {{ item.tanggal }}</span>
              <h3 class="card-title">{{ item.judul }}</h3>
              <p class="card-description">{{ truncateText(item.ringkasan, 85) }}</p>
              
              <router-link :to="'/berita/' + item.id" class="read-more-link">
                Baca Selengkapnya <span class="arrow">&rarr;</span>
              </router-link>
            </div>

          </div>
        </div>

        <div class="text-center-action">
          <router-link to="/berita" class="btn-purple-glow">Lihat Semua Berita & Agenda</router-link>
        </div>
      </div>
    </section>

    <!-- SECTION 3: CALL TO ACTION (CENTERED VIBRANT CARD) -->
    <section class="cta-section">
      <div class="container">
        <div class="vibrant-card-wrapper cta-grad">
          <div class="cta-card-glass">
            <div class="cta-icon-glow">👋</div>
            <h2>Kami senang menyambut Anda bergabung di keluarga besar kami.</h2>
            <router-link to="/kontak" class="btn-yellow-glow large">Hubungi Kami Sekarang</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4: FOOTER SOFT MODERN -->
    <footer class="modern-footer">
      <div class="container footer-grid">
        <div class="footer-col">
          <h3 class="gradient-text-vibrant">SD Negeri Pucung</h3>
          <p>
            Pucung, Tamanmartani, Kapanewon Kalasan, Sleman, DIY.
          </p>
          <p class="copyright">Copyright © 2026 SDN Pucung. All Rights Reserved.</p>
        </div>

        <div class="footer-col">
          <h3>Kontak & Jam Kerja</h3>
          <p>
            Email: <a href="mailto:sdn.pucung@gmail.com">sdn.pucung@gmail.com</a><br />
            Senin - Kamis: 07.00 - 15.00 WIB<br />
            Jumat: 07.00 - 14.00 WIB
          </p>
        </div>

        <div class="footer-col">
          <h3>Media Sosial</h3>
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
import { computed, ref } from 'vue'
import { daftarArtikelSdn } from '../data/beritaData.js'

// Menampilkan hingga 6 berita/agenda terkini
const beritaData = computed(() => {
  return daftarArtikelSdn.slice(0, 6)
})

const activeSlides = ref({})

const getCurrentSlide = (id) => {
  return activeSlides.value[id] || 0
}

const getSlidePhoto = (item) => {
  if (!item.foto || item.foto.length === 0) return 'https://via.placeholder.com/400x250'
  const currentIdx = getCurrentSlide(item.id)
  return item.foto[currentIdx] || item.foto[0]
}

const nextSlide = (id, total) => {
  const current = getCurrentSlide(id)
  activeSlides.value[id] = (current + 1) % total
}

const prevSlide = (id, total) => {
  const current = getCurrentSlide(id)
  activeSlides.value[id] = (current - 1 + total) % total
}

const setSlide = (id, idx) => {
  activeSlides.value[id] = idx
}

const getCategoryClass = (kategori) => {
  if (kategori === 'Pengumuman') return 'badge-pink'
  if (kategori === 'Berita') return 'badge-cyan'
  if (kategori === 'Agenda') return 'badge-yellow'
  return 'badge-purple'
}

const truncateText = (text, length) => {
  if (!text) return ''
  return text.length > length ? text.substring(0, length) + '...' : text
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

/* --- LAYOUT UTAMA & MESH BACKGROUND --- */
.home-container {
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: #1e293b;
  position: relative;
  background: #f8fafc;
  overflow-x: hidden;
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

.glow-yellow-1 {
  width: 450px;
  height: 450px;
  background: #ffb703;
  top: 2%;
  right: -5%;
}

.glow-purple-1 {
  width: 500px;
  height: 500px;
  background: #a855f7;
  top: 20%;
  left: -10%;
}

.glow-pink-1 {
  width: 400px;
  height: 400px;
  background: #ec4899;
  top: 50%;
  right: -8%;
}

.glow-cyan-1 {
  width: 450px;
  height: 450px;
  background: #06b6d4;
  top: 75%;
  left: -5%;
}

.glow-yellow-2 {
  width: 400px;
  height: 400px;
  background: #fbbf24;
  bottom: 2%;
  right: 10%;
}

.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
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

.badge-cyan { background: #cff4fc; color: #055160; }
.badge-pink { background: #fce7f3; color: #9d174d; }
.badge-purple { background: #f3e8ff; color: #6b21a8; }
.badge-yellow { background: #fef3c7; color: #92400e; }

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
  margin: 15px auto 0 auto;
}

.gradient-text-vibrant {
  background: linear-gradient(135deg, #ffb703 0%, #ec4899 50%, #8b5cf6 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* --- TOMBOL-TOMBOL VIBRANT --- */
.btn-yellow-glow {
  background: #ffc800;
  color: #0f172a;
  padding: 12px 28px;
  border-radius: 99px;
  font-weight: 800;
  font-size: 0.95rem;
  text-decoration: none;
  display: inline-block;
  box-shadow: 0 8px 20px rgba(255, 200, 0, 0.4);
  transition: all 0.3s ease;
  border: none;
}
.btn-yellow-glow:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 25px rgba(255, 200, 0, 0.6);
}
.btn-yellow-glow.large {
  padding: 16px 36px;
  font-size: 1.05rem;
}

.btn-purple-glow {
  background: #a855f7;
  color: #ffffff;
  padding: 12px 28px;
  border-radius: 99px;
  font-weight: 800;
  font-size: 0.95rem;
  text-decoration: none;
  display: inline-block;
  box-shadow: 0 8px 20px rgba(168, 85, 247, 0.4);
  transition: all 0.3s ease;
  border: none;
}
.btn-purple-glow:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 25px rgba(168, 85, 247, 0.6);
}

.btn-secondary-glass {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  color: #334155;
  padding: 12px 28px;
  border-radius: 99px;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  display: inline-block;
  border: 1px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}
.btn-secondary-glass:hover {
  background: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

/* --- 1. HERO SECTION --- */
.hero-section {
  position: relative;
  padding: 120px 0 80px 0;
}

.grid-hero {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 50px;
  align-items: center;
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
  line-height: 1.2;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 20px;
}

.hero-subtitle {
  font-size: 1.15rem;
  line-height: 1.6;
  color: #475569;
  margin-bottom: 35px;
}

.hero-buttons {
  display: flex;
  gap: 15px;
}

/* VIBRANT CARD WRAPPERS */
.vibrant-card-wrapper {
  padding: 4px;
  border-radius: 32px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}
.vibrant-card-wrapper:hover {
  transform: translateY(-5px);
}

.main-hero-grad {
  background: linear-gradient(135deg, #ffc800 0%, #ec4899 50%, #8b5cf6 100%);
}
.cta-grad {
  background: linear-gradient(135deg, #06b6d4 0%, #a855f7 50%, #ffc800 100%);
}

.glass-hero-card {
  position: relative;
  width: 100%;
  height: 380px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  border-radius: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-center-illustration {
  width: 180px;
  height: 180px;
  background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 15px 30px rgba(168, 85, 247, 0.3);
}
.large-emoji {
  font-size: 5rem;
}

.hero-badge {
  position: absolute;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 12px 18px;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 2;
  border: 2px solid transparent;
}
.badge-grad-1 { border-color: rgba(255, 200, 0, 0.6); }
.badge-grad-2 { border-color: rgba(168, 85, 247, 0.6); }

.hero-badge strong { display: block; font-size: 0.9rem; color: #0f172a; }
.hero-badge small { font-size: 0.75rem; color: #64748b; font-weight: 600; }
.badge-icon { font-size: 1.5rem; }

.floating-1 { top: 20px; left: -20px; }
.floating-2 { bottom: 30px; right: -20px; }

/* --- 2. DINAMIKA SECTION (BERITA) --- */
.dinamika-section {
  padding: 80px 0;
}

.section-title-center {
  text-align: center;
  margin-bottom: 50px;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 50px;
}

.news-card-glass {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 2px solid transparent;
}

.card-border-gradient-0 { border-color: rgba(255, 200, 0, 0.5); }
.card-border-gradient-1 { border-color: rgba(236, 72, 153, 0.5); }
.card-border-gradient-2 { border-color: rgba(6, 182, 212, 0.5); }

.news-card-glass:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  background: #ffffff;
}

/* SLIDER / CAROUSEL */
.card-image-slider {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
  background-color: #e2e8f0;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
}

.slider-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.85);
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  color: #0f172a;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  transition: background 0.2s;
  z-index: 5;
}
.slider-btn:hover { background: #ffffff; }
.btn-left { left: 10px; }
.btn-right { right: 10px; }

.slider-dots {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 5;
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  transition: all 0.2s;
}
.dot.active {
  background: #ffffff;
  width: 18px;
  border-radius: 10px;
}

.category-badge-overlay {
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 5px 14px;
  border-radius: 99px;
  font-size: 0.75rem;
  font-weight: 800;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.card-body {
  padding: 22px;
}
.card-date {
  font-size: 0.8rem;
  color: #64748b;
  font-weight: 600;
  display: block;
  margin-bottom: 8px;
}
.card-title {
  font-size: 1.15rem;
  font-weight: 800;
  color: #0f172a;
  line-height: 1.4;
  margin-bottom: 10px;
}
.card-description {
  font-size: 0.9rem;
  color: #475569;
  line-height: 1.5;
  margin-bottom: 18px;
}
.read-more-link {
  font-size: 0.85rem;
  font-weight: 800;
  color: #8b5cf6;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 5px;
}
.read-more-link:hover .arrow {
  transform: translateX(4px);
}
.arrow { transition: transform 0.2s; }

.text-center-action {
  text-align: center;
}

/* --- 3. CALL TO ACTION --- */
.cta-section {
  padding: 80px 0;
}
.cta-card-glass {
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(20px);
  padding: 50px 30px;
  border-radius: 28px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.cta-icon-glow {
  font-size: 3.5rem;
  margin-bottom: 15px;
}
.cta-card-glass h2 {
  font-size: 2rem;
  color: #0f172a;
  font-weight: 800;
  margin-bottom: 30px;
  line-height: 1.3;
}

/* --- 4. FOOTER --- */
.modern-footer {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  padding: 60px 0 30px 0;
  border-top: 1px solid rgba(226, 232, 240, 0.8);
  color: #475569;
  position: relative;
  z-index: 2;
}
.footer-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}
.footer-col h3 {
  font-size: 1.1rem;
  color: #0f172a;
  font-weight: 800;
  margin-bottom: 15px;
}
.footer-col p {
  font-size: 0.9rem;
  line-height: 1.6;
}
.footer-col a {
  color: #8b5cf6;
  text-decoration: none;
  font-weight: 600;
}
.copyright {
  margin-top: 20px;
  font-size: 0.8rem;
  color: #94a3b8;
}
.social-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.social-links a {
  font-size: 0.9rem;
  color: #475569;
  text-decoration: none;
  font-weight: 600;
}
.social-links a:hover {
  color: #ec4899;
}

/* --- RESPONSIF HP & TABLET --- */
@media (max-width: 992px) {
  .grid-hero {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .hero-buttons { justify-content: center; }
  .hero-title { font-size: 2.5rem; }
  .floating-1 { left: 0; }
  .floating-2 { right: 0; }
  .news-grid { grid-template-columns: repeat(2, 1fr); }
  .footer-grid { grid-template-columns: 1fr; text-align: center; }
}

@media (max-width: 640px) {
  .news-grid { grid-template-columns: 1fr; }
  .hero-title { font-size: 2rem; }
  .section-heading { font-size: 1.6rem; }
  .cta-card-glass h2 { font-size: 1.3rem; }
}
</style>