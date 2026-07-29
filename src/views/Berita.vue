<template>
  <div class="berita-container">
    
    <!-- BACKGROUND MESH GLOW FLOATING BALLS -->
    <div class="mesh-background">
      <div class="glow-ball glow-purple-1"></div>
      <div class="glow-ball glow-yellow-1"></div>
      <div class="glow-ball glow-pink-1"></div>
      <div class="glow-ball glow-cyan-1"></div>
    </div>

    <!-- HERO SECTION -->
    <section class="berita-hero">
      <div class="container hero-content text-center">
        <div class="top-tag-pill">
          <span class="sparkle">✨</span> KABAR TERKINI
        </div>
        <h1 class="hero-title">
          Informasi, Berita & <span class="gradient-text-vibrant">Agenda</span>
        </h1>
        <p class="hero-subtitle">
          Tetap terhubung dengan kabar terbaru dan rangkaian kegiatan di SD Negeri Pucung.
        </p>
      </div>
    </section>

    <!-- FILTER & SEARCH BAR (GLASSMOPHISM STICKY) -->
    <div class="filter-search-section">
      <div class="container filter-wrapper">
        <div class="category-tabs">
          <button 
            v-for="cat in categories" 
            :key="cat" 
            :class="{ active: selectedCategory === cat }"
            @click="selectedCategory = cat"
            class="tab-glass-btn"
          >
            <span>{{ cat }}</span>
          </button>
        </div>
        
        <div class="search-box-glass">
          <i class="fas fa-search search-icon"></i>
          <input 
            type="text" 
            v-model="searchQuery" 
            placeholder="Cari berita atau pengumuman..."
          />
        </div>
      </div>
    </div>

    <!-- MAIN CONTENT SECTION -->
    <section class="section-content">
      <div class="container">
        
        <!-- Kondisi Jika Hasil Pencarian Kosong -->
        <div v-if="filteredArtikel.length === 0" class="not-found-card-glass">
          <div class="not-found-icon">🔍</div>
          <h3>Hasil Tidak Ditemukan</h3>
          <p>Tidak ada informasi atau berita yang cocok dengan kata kunci pencarian Anda.</p>
        </div>

        <!-- Grid Kartu Berita Glassmorphism -->
        <div v-else class="grid-berita">
          <div 
            class="artikel-card-glass" 
            v-for="artikel in filteredArtikel" 
            :key="artikel.id"
          >
            <!-- Slider Gambar Utama dengan Overlay Glass -->
            <div class="artikel-img-slider">
              <span class="badge-kategori-glass" :class="artikel.kategori.toLowerCase()">
                {{ artikel.kategori }}
              </span>

              <div class="slider-wrapper">
                <img 
                  :src="artikel.foto[artikel.currentSlide || 0]" 
                  :alt="artikel.judul" 
                  class="foto-slide-aktif"
                />
              </div>

              <!-- Indikator Slider Dots -->
              <div class="slider-dots-glass" v-if="artikel.foto && artikel.foto.length > 1">
                <span 
                  v-for="(gambar, idx) in artikel.foto" 
                  :key="idx"
                  class="dot-glass"
                  :class="{ active: (artikel.currentSlide || 0) === idx }"
                  @click="setSlide(artikel, idx)"
                ></span>
              </div>
            </div>

            <!-- Teks Konten Badan Kartu -->
            <div class="artikel-body">
              <div class="artikel-meta">
                <span class="meta-pill date-pill">📅 {{ artikel.tanggal }}</span>
                <span v-if="artikel.waktu_agenda" class="meta-pill agenda-pill">🕒 {{ artikel.waktu_agenda }}</span>
              </div>
              
              <h3 class="artikel-title">{{ artikel.judul }}</h3>
              <p class="ringkasan-text">{{ artikel.ringkasan }}</p>
              
              <router-link :to="'/berita/' + artikel.id" class="btn-read-glass">
                Baca Selengkapnya &rarr;
              </router-link>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { daftarArtikelSdn } from '../data/beritaData.js';

export default {
  name: 'BeritaView',
  setup() {
    const searchQuery = ref('');
    const selectedCategory = ref('Semua');
    const categories = ref(['Semua', 'Berita', 'Pengumuman', 'Agenda']);

    const daftarArtikel = ref(
      daftarArtikelSdn.map(artikel => ({
        ...artikel,
        foto: Array.isArray(artikel.foto) ? artikel.foto : [artikel.foto],
        currentSlide: 0 
      }))
    );

    let sliderTimer = null;

    onMounted(() => {
      sliderTimer = setInterval(() => {
        daftarArtikel.value.forEach(artikel => {
          if (artikel.foto && artikel.foto.length > 1) {
            if (artikel.currentSlide === artikel.foto.length - 1) {
              artikel.currentSlide = 0;
            } else {
              artikel.currentSlide++;
            }
          }
        });
      }, 3000);
    });

    onUnmounted(() => {
      if (sliderTimer) clearInterval(sliderTimer);
    });

    const setSlide = (artikel, index) => {
      artikel.currentSlide = index;
    };

    const filteredArtikel = computed(() => {
      return daftarArtikel.value.filter(artikel => {
        const matchCategory = selectedCategory.value === 'Semua' || artikel.kategori === selectedCategory.value;
        const matchSearch = artikel.judul.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
                            artikel.ringkasan.toLowerCase().includes(searchQuery.value.toLowerCase());
        
        return matchCategory && matchSearch;
      });
    });

    return {
      searchQuery,
      selectedCategory,
      categories,
      filteredArtikel,
      setSlide
    };
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

/* --- LAYOUT UTAMA & MESH BACKGROUND --- */
.berita-container {
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: #1e293b;
  position: relative;
  background: #f8fafc;
  overflow-x: hidden;
  min-height: 100vh;
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

/* --- HERO SECTION --- */
.berita-hero {
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

.gradient-text-vibrant {
  background: linear-gradient(135deg, #ffb703 0%, #ec4899 50%, #8b5cf6 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.15rem;
  color: #475569;
  max-width: 600px;
  margin: 0 auto;
}

/* --- FILTER & SEARCH BAR GLASSMOPHISM --- */
.filter-search-section {
  position: sticky;
  top: 70px;
  z-index: 90;
  padding: 15px 0;
  backdrop-filter: blur(15px);
  background: rgba(248, 250, 252, 0.75);
  border-bottom: 1px solid rgba(225, 231, 239, 0.8);
}

.filter-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.category-tabs {
  display: flex;
  gap: 10px;
}

.tab-glass-btn {
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.9);
  padding: 10px 22px;
  border-radius: 99px;
  font-weight: 700;
  font-size: 0.9rem;
  color: #475569;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.tab-glass-btn:hover {
  background: #ffffff;
  color: #a855f7;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(168, 85, 247, 0.15);
}

.tab-glass-btn.active {
  background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
  color: #ffffff;
  border: none;
  box-shadow: 0 8px 20px rgba(168, 85, 247, 0.3);
}

/* Search Box Glass */
.search-box-glass {
  position: relative;
  display: flex;
  align-items: center;
}

.search-box-glass input {
  padding: 12px 20px 12px 42px;
  width: 300px;
  border: 1px solid rgba(255, 255, 255, 0.9);
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  border-radius: 99px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: #0f172a;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
}

.search-box-glass input:focus {
  outline: none;
  background: #ffffff;
  border-color: #a855f7;
  box-shadow: 0 8px 25px rgba(168, 85, 247, 0.2);
}

.search-icon {
  position: absolute;
  left: 16px;
  color: #94a3b8;
  font-size: 0.9rem;
}

/* --- MAIN CONTENT & GRID --- */
.section-content {
  padding: 50px 0 80px 0;
  min-height: 50vh;
}

.grid-berita {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.artikel-card-glass {
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

.artikel-card-glass:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  background: rgba(255, 255, 255, 0.95);
}

/* --- SLIDER GAMBAR CARD --- */
.artikel-img-slider {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
  background: #e2e8f0;
}

.slider-wrapper {
  width: 100%;
  height: 100%;
}

.foto-slide-aktif {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.artikel-card-glass:hover .foto-slide-aktif {
  transform: scale(1.05);
}

.badge-kategori-glass {
  position: absolute;
  top: 15px; 
  left: 15px;
  padding: 6px 14px;
  border-radius: 99px;
  font-size: 0.75rem;
  font-weight: 800;
  color: #ffffff;
  z-index: 10;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

.badge-kategori-glass.berita { background: rgba(14, 165, 233, 0.85); }
.badge-kategori-glass.pengumuman { background: rgba(249, 115, 22, 0.85); }
.badge-kategori-glass.agenda { background: rgba(168, 85, 247, 0.85); }

.slider-dots-glass {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 10;
  background: rgba(15, 23, 42, 0.5);
  backdrop-filter: blur(10px);
  padding: 6px 12px;
  border-radius: 99px;
}

.dot-glass {
  width: 8px;
  height: 8px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot-glass.active {
  background: #ffffff;
  width: 18px;
  border-radius: 99px;
}

/* --- BADAN CARD --- */
.artikel-body {
  padding: 25px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.artikel-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
}

.meta-pill {
  font-size: 0.8rem;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 99px;
}

.date-pill { background: #f3e8ff; color: #7c3aed; }
.agenda-pill { background: #fef3c7; color: #d97706; }

.artikel-title {
  color: #0f172a;
  font-size: 1.25rem;
  font-weight: 800;
  margin: 0 0 10px 0;
  line-height: 1.4;
}

.ringkasan-text {
  color: #475569;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 20px;
  flex-grow: 1;

  /* --- PENYESUAIAN MEMBACA ENTER & MEMBATASI BARIS --- */
  white-space: pre-line;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3; /* Standar CSS untuk menghilangkan warning Linter */
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.btn-read-glass {
  color: #a855f7;
  text-decoration: none;
  font-weight: 800;
  font-size: 0.9rem;
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.3s ease;
}

.btn-read-glass:hover {
  color: #ec4899;
  transform: translateX(4px);
}

/* --- NOT FOUND CARD GLASS --- */
.not-found-card-glass {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.9);
  border-radius: 28px;
  padding: 60px 30px;
  text-align: center;
  max-width: 500px;
  margin: 40px auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
}

.not-found-icon {
  font-size: 3rem;
  margin-bottom: 15px;
}

.not-found-card-glass h3 {
  color: #0f172a;
  font-weight: 800;
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.not-found-card-glass p {
  color: #64748b;
  font-size: 0.95rem;
}

/* --- RESPONSIVE MEDIA QUERIES --- */
@media (max-width: 992px) {
  .grid-berita { grid-template-columns: repeat(2, 1fr); gap: 20px; }
  .hero-title { font-size: 2.6rem; }
}

@media (max-width: 768px) {
  .filter-wrapper {
    flex-direction: column;
    align-items: stretch;
  }
  .category-tabs {
    overflow-x: auto;
    padding-bottom: 5px;
  }
  .tab-glass-btn {
    padding: 8px 16px;
    font-size: 0.85rem;
    white-space: nowrap;
  }
  .search-box-glass input { width: 100%; }
  .grid-berita { grid-template-columns: 1fr; }
  .berita-hero { padding: 80px 0 30px 0; }
  .hero-title { font-size: 2.1rem; }
  .filter-search-section { top: 60px; }
}
</style>