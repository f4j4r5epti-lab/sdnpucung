<template>
  <div class="berita-container">
    
    <!-- --- 1. HERO SECTION (Kuning Memphis & Ornamen Geometris) --- -->
    <section class="berita-hero">
      <div class="hero-content">
        <span class="top-tag">KABAR TERKINI</span>
        <h1>Informasi, Berita & Agenda</h1>
        <p>Tetap terhubung dengan kabar terbaru dan rangkaian kegiatan di SD Negeri Pucung.</p>
      </div>
      <!-- Ornamen Gaya Memphis -->
      <div class="hero-shape shape-circle"></div>
      <div class="hero-shape shape-triangle">▲</div>
      <div class="hero-shape shape-zigzag">⚡</div>
    </section>

    <!-- --- 2. FILTER & SEARCH BAR (Desain Pop-Art Kontras) --- -->
    <div class="filter-search-section">
      <div class="container filter-wrapper">
        <div class="category-tabs">
          <button 
            v-for="cat in categories" 
            :key="cat" 
            :class="{ active: selectedCategory === cat }"
            @click="selectedCategory = cat"
          >
            <span>{{ cat }}</span>
          </button>
        </div>
        
        <div class="search-box">
          <input 
            type="text" 
            v-model="searchQuery" 
            placeholder="🔍 Cari berita atau pengumuman..."
          />
        </div>
      </div>
    </div>

    <!-- --- 3. MAIN SECTION CONTENT --- -->
    <section class="section-content">
      <div class="container">
        
        <!-- Kondisi Jika Hasil Pencarian Kosong -->
        <div v-if="filteredArtikel.length === 0" class="not-found-card">
          <h3>Hasil Tidak Ditemukan! ❌</h3>
          <p>Tidak ada informasi atau berita yang cocok dengan kata kunci pencarian Anda.</p>
        </div>

        <!-- Grid Kartu Berita -->
        <div v-else class="grid-berita">
          <div 
            class="artikel-card" 
            v-for="artikel in filteredArtikel" 
            :key="artikel.id"
          >
            <!-- Slider Gambar Utama dengan Bingkai Pop-Art -->
            <div class="artikel-img-slider">
              <!-- Label Kategori dengan Border Tebal -->
              <span class="badge-kategori" :class="artikel.kategori.toLowerCase()">
                {{ artikel.kategori }}
              </span>

              <div class="slider-wrapper">
                <img 
                  :src="artikel.foto[artikel.currentSlide || 0]" 
                  :alt="artikel.judul" 
                  class="foto-slide-aktif"
                />
              </div>

              <!-- Titik Indikator Slider (Jika foto lebih dari 1) -->
              <div class="slider-dots" v-if="artikel.foto && artikel.foto.length > 1">
                <span 
                  v-for="(gambar, idx) in artikel.foto" 
                  :key="idx"
                  class="dot"
                  :class="{ active: (artikel.currentSlide || 0) === idx }"
                  @click="setSlide(artikel, idx)"
                ></span>
              </div>
            </div>

            <!-- Teks Konten Badan Kartu -->
            <div class="artikel-body">
              <div class="artikel-meta">
                <span class="meta-date">📅 {{ artikel.tanggal }}</span>
                <span v-if="artikel.waktu_agenda" class="meta-agenda">🕒 {{ artikel.waktu_agenda }}</span>
              </div>
              
              <h3>{{ artikel.judul }}</h3>
              <p class="ringkasan-text">{{ artikel.ringkasan }}</p>
              
              <router-link :to="'/berita/' + artikel.id" class="btn-read">
                Baca Selengkapnya ➔
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
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,800;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

/* --- LAYOUT DASAR & IDENTITY SYSTEM --- */
.berita-container {
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: #111111;
  background-color: #fffbef; /* Krem hangat */
  padding-top: 80px;
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

/* --- HERO BANNER (Kuning Memphis) --- */
.berita-hero {
  position: relative;
  background-color: #f5d061;
  height: 35vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  text-align: center;
  border-bottom: 3px solid #000000;
  overflow: hidden;
}
.hero-content {
  position: relative;
  z-index: 5;
}
.hero-content h1 { font-size: 3rem; margin: 0 0 10px 0; }
.hero-content p { 
  font-size: 1.1rem; 
  color: #2b2b2b;
  max-width: 600px;
  margin: 0 auto;
  font-weight: 500;
}
.top-tag {
  font-weight: 800;
  letter-spacing: 2px;
  font-size: 0.85rem;
  display: block;
  margin-bottom: 5px;
}

/* Ornamen Mengambang */
.hero-shape {
  position: absolute;
  color: rgba(0, 0, 0, 0.08);
  font-weight: bold;
  user-select: none;
}
.shape-circle {
  width: 120px;
  height: 120px;
  border: 15px solid rgba(0, 0, 0, 0.04);
  border-radius: 50%;
  top: -20px;
  left: 5%;
}
.shape-triangle {
  font-size: 6rem;
  bottom: 10px;
  right: 8%;
  transform: rotate(15deg);
}
.shape-zigzag {
  font-size: 5rem;
  top: 20px;
  right: 12%;
  transform: rotate(-15deg);
}

/* --- FILTER BAR & SEARCH BOX (Style Memphis Kontras) --- */
.filter-search-section {
  background-color: #fffbef;
  padding: 20px 0;
  border-bottom: 3px solid #000000;
  position: sticky;
  top: 80px;
  z-index: 90;
}
.filter-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
.category-tabs {
  display: flex;
  gap: 12px;
}
.category-tabs button {
  background-color: #ffffff;
  border: 2px solid #000000;
  padding: 10px 22px;
  border-radius: 30px;
  font-weight: 700;
  color: #000000;
  cursor: pointer;
  box-shadow: 3px 3px 0px #000000;
  transition: all 0.15s ease-in-out;
}
.category-tabs button:hover {
  background-color: #f5d061;
  transform: translate(-1px, -1px);
  box-shadow: 4px 4px 0px #000000;
}
.category-tabs button.active {
  background-color: #dfb2f4; /* Ungu Pastel Aktif */
  box-shadow: 1px 1px 0px #000000;
  transform: translate(2px, 2px);
}
.search-box input {
  padding: 12px 18px;
  width: 320px;
  border: 2px solid #000000;
  background-color: #ffffff;
  border-radius: 12px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  box-shadow: 3px 3px 0px #000000;
}
.search-box input:focus {
  outline: none;
  background-color: #fffbef;
}

/* --- GRID LAYOUT KARTU BERITA --- */
.section-content {
  padding: 80px 0;
  background-color: #fffbef;
  min-height: 50vh;
}
.grid-berita {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 40px;
}
.artikel-card {
  background: #ffffff;
  border: 2px solid #000000;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 6px 6px 0px #000000;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}
.artikel-card:hover {
  transform: translate(-3px, -3px);
  box-shadow: 9px 9px 0px #000000;
}

/* --- AUTOMATIC SLIDESHOW COMPONENT --- */
.artikel-img-slider {
  position: relative;
  width: 100%;
  height: 230px;
  overflow: hidden;
  border-bottom: 2px solid #000000;
  background-color: #e2e8f0;
}
.slider-wrapper {
  width: 100%;
  height: 100%;
}
.foto-slide-aktif {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Label Kategori Bergaya Memphis */
.badge-kategori {
  position: absolute;
  top: 15px; 
  left: 15px;
  padding: 6px 14px;
  border: 2px solid #000000;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 800;
  color: #000000;
  z-index: 10;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 2px 2px 0px #000000;
}
.badge-kategori.berita { background-color: #b5e2fa; } /* Biru Pastel */
.badge-kategori.pengumuman { background-color: #ff9f68; } /* Oranye Pastel */
.badge-kategori.agenda { background-color: #dfb2f4; } /* Ungu Pastel */

/* Dot Navigasi Slider */
.slider-dots {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 10;
  background: #ffffff;
  border: 2px solid #000000;
  padding: 5px 10px;
  border-radius: 20px;
  box-shadow: 2px 2px 0px #000000;
}
.dot {
  width: 8px;
  height: 8px;
  background-color: #cbd5e1;
  border: 1px solid #000;
  border-radius: 50%;
  cursor: pointer;
}
.dot.active {
  background-color: #000000;
  width: 16px;
  border-radius: 4px;
}

/* --- BADAN TEKS KARTU --- */
.artikel-body {
  padding: 25px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.artikel-meta {
  font-size: 0.8rem;
  font-weight: 700;
  color: #4b5563;
  margin-bottom: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.meta-date {
  background-color: #ffdac1;
  padding: 2px 8px;
  border: 1px solid #000;
  border-radius: 4px;
}
.meta-agenda {
  background-color: #fffbef;
  padding: 2px 8px;
  border: 1px solid #000;
  border-radius: 4px;
}
.artikel-body h3 {
  color: #000000;
  font-size: 1.35rem;
  margin: 0 0 12px 0;
  line-height: 1.3;
}
.ringkasan-text {
  color: #2b2b2b;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 25px;
}
.btn-read {
  color: #000000;
  text-decoration: none;
  font-weight: 800;
  font-size: 0.95rem;
  margin-top: auto;
  padding: 8px 16px;
  background-color: #ffffff;
  border: 2px solid #000000;
  border-radius: 8px;
  box-shadow: 3px 3px 0px #000000;
  align-self: flex-start;
  transition: all 0.1s ease-in-out;
}
.btn-read:hover {
  background-color: #f5d061;
  transform: translate(-1px, -1px);
  box-shadow: 4px 4px 0px #000000;
}

/* Tampilan Not Found */
.not-found-card {
  background-color: #ffffff;
  border: 2px solid #000;
  border-radius: 16px;
  padding: 40px;
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
  box-shadow: 5px 5px 0px #000;
}

/* --- RESPONSIVE LAYOUT --- */
@media (max-width: 768px) {
  .filter-wrapper {
    flex-direction: column;
    align-items: stretch;
  }
  .category-tabs {
    overflow-x: auto;
    padding-bottom: 8px;
  }
  .category-tabs button {
    padding: 8px 16px;
    font-size: 0.85rem;
    flex-shrink: 0;
  }
  .search-box input { width: 100%; }
  .grid-berita { grid-template-columns: 1fr; }
  .berita-hero h1 { font-size: 2.2rem; }
}
</style>