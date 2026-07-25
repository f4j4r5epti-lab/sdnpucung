<template>
  <div class="detail-berita-container">
    
    <!-- BACKGROUND MESH GLOW FLOATING BALLS -->
    <div class="mesh-background">
      <div class="glow-ball glow-purple-1"></div>
      <div class="glow-ball glow-yellow-1"></div>
      <div class="glow-ball glow-pink-1"></div>
    </div>

    <div v-if="artikel" class="container-isi-glass">
      
      <!-- Tombol Kembali Glassmorphism -->
      <router-link to="/berita" class="btn-kembali-glass">
        <i class="fas fa-arrow-left"></i> Kembali ke Berita
      </router-link>

      <h1 class="judul-utama">{{ artikel.judul }}</h1>

      <!-- Metadata Detail -->
      <div class="meta-detail">
        <span class="badge-kategori-glass" :class="artikel.kategori.toLowerCase()">
          {{ artikel.kategori }}
        </span>
        <span class="meta-item">📅 <strong>{{ artikel.tanggal }}</strong></span>
        <span v-if="artikel.waktu_agenda" class="meta-item agenda">🕒 <strong>{{ artikel.waktu_agenda }}</strong></span>
      </div>

      <!-- Carousel Frame Foto Utama Modern Glass -->
      <div class="wrapper-foto-utama">
        <div class="carousel-inner">
          <img 
            :src="artikel.foto[currentSlide]" 
            :alt="artikel.judul" 
            class="foto-detail"
          />
        </div>

        <!-- Tombol Kontrol Carousel -->
        <template v-if="artikel.foto && artikel.foto.length > 1">
          <button @click="prevSlide" class="carousel-btn btn-prev" aria-label="Slide Sebelumnya">
            ‹
          </button>
          <button @click="nextSlide" class="carousel-btn btn-next" aria-label="Slide Berikutnya">
            ›
          </button>

          <!-- Dots Indikator Carousel -->
          <div class="carousel-dots-glass">
            <span 
              v-for="(gambar, idx) in artikel.foto" 
              :key="idx"
              class="carousel-dot-glass"
              :class="{ active: currentSlide === idx }"
              @click="setSlide(idx)"
            ></span>
          </div>
        </template>
      </div>

      <!-- Konten Artikel -->
      <div class="artikel-konten">
        <p class="paragraf-isi ringkasan-highlight">{{ artikel.ringkasan }}</p>
      </div>

    </div>

    <!-- Error State Box Glass -->
    <div v-else class="not-found-card-glass">
      <div class="not-found-icon">⚠️</div>
      <h2>Berita Tidak Ditemukan</h2>
      <p>Maaf, berkas berita atau tautan detail informasi yang Anda cari tidak tersedia dalam sistem data sekolah.</p>
      <router-link to="/berita" class="btn-error-kembali">Kembali ke Indeks Berita</router-link>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { daftarArtikelSdn } from '../data/beritaData.js';

export default {
  name: 'BeritaDetailView',
  setup() {
    const route = useRoute();
    const artikel = ref(null);
    const currentSlide = ref(0);

    onMounted(() => {
      const idBerita = Number(route.params.id);
      const dataCocok = daftarArtikelSdn.find(item => Number(item.id) === idBerita);
      
      if (dataCocok) {
        const normalizedArtikel = {
          ...dataCocok,
          foto: Array.isArray(dataCocok.foto) ? dataCocok.foto : [dataCocok.foto]
        };
        artikel.value = normalizedArtikel;
      }
    });

    const nextSlide = () => {
      if (artikel.value && artikel.value.foto) {
        if (currentSlide.value === artikel.value.foto.length - 1) {
          currentSlide.value = 0;
        } else {
          currentSlide.value++;
        }
      }
    };

    const prevSlide = () => {
      if (artikel.value && artikel.value.foto) {
        if (currentSlide.value === 0) {
          currentSlide.value = artikel.value.foto.length - 1;
        } else {
          currentSlide.value--;
        }
      }
    };

    const setSlide = (idx) => {
      currentSlide.value = idx;
    };

    return {
      artikel,
      currentSlide,
      nextSlide,
      prevSlide,
      setSlide
    };
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

/* --- LAYOUT UTAMA & MESH BACKGROUND --- */
.detail-berita-container {
  min-height: 90vh;
  background: #f8fafc;
  padding: 120px 20px 80px 20px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: #1e293b;
  position: relative;
  overflow-x: hidden;
}

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
  opacity: 0.5;
}

.glow-purple-1 {
  width: 500px;
  height: 500px;
  background: #a855f7;
  top: 0%;
  left: -10%;
}

.glow-yellow-1 {
  width: 400px;
  height: 400px;
  background: #ffb703;
  top: 30%;
  right: -5%;
}

.glow-pink-1 {
  width: 450px;
  height: 450px;
  background: #ec4899;
  bottom: 0%;
  left: 10%;
}

/* --- KERTAS KONTEN GLASSMOPHISM --- */
.container-isi-glass {
  max-width: 850px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.9);
  padding: 50px;
  border-radius: 32px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 2;
}

/* Tombol Kembali Glass */
.btn-kembali-glass {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #475569;
  background: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 10px 20px;
  border-radius: 99px;
  border: 1px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
  margin-bottom: 30px;
  transition: all 0.3s ease;
}

.btn-kembali-glass:hover {
  color: #a855f7;
  background: #ffffff;
  transform: translateX(-4px);
  box-shadow: 0 8px 20px rgba(168, 85, 247, 0.15);
}

.judul-utama {
  color: #0f172a;
  font-size: 2.3rem;
  font-weight: 800;
  line-height: 1.3;
  margin: 0 0 20px 0;
}

/* Metadata Detail */
.meta-detail {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.85rem;
  color: #64748b;
  margin-bottom: 35px;
  flex-wrap: wrap;
}

.badge-kategori-glass {
  padding: 5px 14px;
  border-radius: 99px;
  color: #ffffff;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.5px;
}

.badge-kategori-glass.berita { background: #0ea5e9; }
.badge-kategori-glass.pengumuman { background: #f97316; }
.badge-kategori-glass.agenda { background: #a855f7; }

.meta-item {
  background: rgba(241, 245, 249, 0.8);
  padding: 4px 12px;
  border-radius: 99px;
  font-weight: 600;
  color: #334155;
}

.meta-item.agenda {
  background: #fef3c7;
  color: #d97706;
}

/* --- CAROUSEL SLIDESHOW GLASS --- */
.wrapper-foto-utama {
  position: relative;
  width: 100%;
  height: 420px;
  margin-bottom: 40px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
}

.carousel-inner {
  width: 100%;
  height: 100%;
}

.foto-detail {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Tombol Panah Navigasi Carousel */
.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f172a;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.carousel-btn:hover {
  background: #ffffff;
  color: #a855f7;
  transform: translateY(-50%) scale(1.08);
}

.btn-prev { left: 20px; }
.btn-next { right: 20px; }

/* Carousel Dots Glass */
.carousel-dots-glass {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(15, 23, 42, 0.5);
  backdrop-filter: blur(10px);
  padding: 6px 14px;
  border-radius: 99px;
  display: flex;
  gap: 8px;
  z-index: 10;
}

.carousel-dot-glass {
  width: 8px;
  height: 8px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.carousel-dot-glass.active {
  background: #ffffff;
  width: 18px;
  border-radius: 99px;
}

/* --- ISI CERITA ARTIKEL --- */
.artikel-konten {
  line-height: 1.8;
  color: #334155;
  font-size: 1.05rem;
}

.paragraf-isi {
  margin-bottom: 20px;
  text-align: justify;
}

.ringkasan-highlight {
  font-size: 1.15rem;
  font-weight: 600;
  color: #0f172a;
  line-height: 1.7;
  border-left: 4px solid #a855f7;
  padding-left: 20px;
  background: rgba(243, 232, 255, 0.4);
  padding: 15px 20px;
  border-radius: 0 16px 16px 0;
}

/* --- ERROR PANEL STATE GLASS --- */
.not-found-card-glass {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.9);
  max-width: 550px;
  margin: 60px auto;
  border-radius: 28px;
  padding: 50px 30px;
  text-align: center;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 2;
}

.not-found-icon {
  font-size: 3rem;
  margin-bottom: 15px;
}

.not-found-card-glass h2 {
  color: #0f172a;
  font-weight: 800;
  font-size: 1.6rem;
  margin-bottom: 12px;
}

.not-found-card-glass p {
  color: #64748b;
  font-size: 0.95rem;
  margin-bottom: 25px;
}

.btn-error-kembali {
  display: inline-block;
  background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
  color: #ffffff;
  padding: 12px 28px;
  border-radius: 99px;
  text-decoration: none;
  font-weight: 800;
  box-shadow: 0 10px 25px rgba(168, 85, 247, 0.3);
  transition: all 0.3s ease;
}

.btn-error-kembali:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 30px rgba(168, 85, 247, 0.4);
}

/* --- RESPONSIF HP --- */
@media (max-width: 768px) {
  .container-isi-glass { padding: 30px 20px; border-radius: 24px; }
  .judul-utama { font-size: 1.7rem; }
  .wrapper-foto-utama { height: 260px; }
  .carousel-btn { width: 36px; height: 36px; font-size: 1.2rem; }
  .artikel-konten { font-size: 0.95rem; }
  .detail-berita-container { padding-top: 100px; }
}
</style>