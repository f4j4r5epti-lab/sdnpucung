<template>
  <div class="berita-container">
    <section class="berita-hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>Informasi, Berita & Agenda</h1>
        <p>Tetap terhubung dengan kabar terbaru dan rangkaian kegiatan di SD Negeri Pucung.</p>
      </div>
    </section>

    <div class="filter-search-section">
      <div class="container filter-wrapper">
        <div class="category-tabs">
          <button 
            v-for="cat in categories" 
            :key="cat" 
            :class="{ active: selectedCategory === cat }"
            @click="selectedCategory = cat"
          >
            {{ cat }}
          </button>
        </div>
        
        <div class="search-box">
          <input 
            type="text" 
            v-model="searchQuery" 
            placeholder="Cari berita atau pengumuman..."
          />
        </div>
      </div>
    </div>

    <section class="section-content">
      <div class="container">
        
        <div v-if="filteredArtikel.length === 0" class="not-found">
          <p>Tidak ada informasi atau berita yang cocok dengan pencarian Anda.</p>
        </div>

        <div v-else class="grid-berita">
          <div 
            class="artikel-card" 
            v-for="artikel in filteredArtikel" 
            :key="artikel.id"
          >
            <div class="artikel-img-slider">
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

            <div class="artikel-body">
              <div class="artikel-meta">
                <span><strong class="text-blue">{{ artikel.tanggal }}</strong></span>
                <span v-if="artikel.waktu_agenda">| <i class="text-amber">{{ artikel.waktu_agenda }}</i></span>
              </div>
              
              <h3>{{ artikel.judul }}</h3>
              <p>{{ artikel.ringkasan }}</p>
              
              <router-link :to="'/berita/' + artikel.id" class="btn-read">
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
// Mengambil basis data eksternal dari folder src/data/beritaData.js
import { daftarArtikelSdn } from '../data/beritaData.js';

export default {
  name: 'BeritaView',
  setup() {
    const searchQuery = ref('');
    const selectedCategory = ref('Semua');
    const categories = ref(['Semua', 'Berita', 'Pengumuman', 'Agenda']);

    // Memetakan ulang data agar setiap objek berita memiliki counter slide-nya sendiri
    const daftarArtikel = ref(
      daftarArtikelSdn.map(artikel => ({
        ...artikel,
        // Jika di data berbentuk teks string biasa, otomatis dibungkus menjadi array tunggal agar kodingan tidak error
        foto: Array.isArray(artikel.foto) ? artikel.foto : [artikel.foto],
        currentSlide: 0 
      }))
    );

    let sliderTimer = null;

    // Menjalankan interval perputaran gambar otomatis saat halaman dibuka
    onMounted(() => {
      sliderTimer = setInterval(() => {
        daftarArtikel.value.forEach(artikel => {
          if (artikel.foto && artikel.foto.length > 1) {
            if (artikel.currentSlide === artikel.foto.length - 1) {
              artikel.currentSlide = 0; // Kembali ke foto pertama jika sudah di ujung akhir
            } else {
              artikel.currentSlide++; // Geser ke slide berikutnya
            }
          }
        });
      }, 3000); // Waktu transisi 3 detik (3000ms)
    });

    // Menghapus fungsi timer dari memori RAM laptop saat user berpindah halaman web
    onUnmounted(() => {
      if (sliderTimer) clearInterval(sliderTimer);
    });

    // Fungsi klik manual pada titik indikator gambar slider
    const setSlide = (artikel, index) => {
      artikel.currentSlide = index;
    };

    // Fungsi komputasi pintar untuk menyaring berita berdasarkan ketikan & tombol kategori
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
/* --- UTILITIES & LAYOUT DASAR --- */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.text-blue { color: #2563eb; }
.text-amber { color: #d97706; font-style: normal; font-weight: 600; }

/* --- HERO BANNER ATAS --- */
.berita-hero {
  position: relative;
  background-image: url('https://via.placeholder.com/1920x400');
  background-size: cover;
  background-position: center;
  height: 35vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}
.hero-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(30, 58, 138, 0.85);
}
.hero-content { position: relative; z-index: 1; }
.hero-content h1 { font-size: 2.5rem; margin: 0 0 10px 0; }

/* --- FILTER BAR & KOTAK SEARCH --- */
.filter-search-section {
  background-color: #ffffff;
  padding: 20px 0;
  border-bottom: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02);
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
.category-tabs button {
  background-color: #f1f5f9;
  border: none;
  padding: 10px 20px;
  border-radius: 30px;
  font-weight: 600;
  color: #475569;
  cursor: pointer;
  transition: 0.3s;
}
.category-tabs button:hover {
  background-color: #e2e8f0;
  color: #1e3a8a;
}
.category-tabs button.active {
  background-color: #1e3a8a;
  color: #ffffff;
}
.search-box input {
  padding: 10px 15px;
  width: 300px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 0.95rem;
}
.search-box input:focus {
  outline: none;
  border-color: #2563eb;
}

/* --- GRID LAYOUT KARTU BERITA (LAPTOP) --- */
.section-content {
  padding: 60px 0;
  background-color: #f8fafc;
  min-height: 50vh;
}
.grid-berita {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}
.artikel-card {
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s, box-shadow 0.3s;
}
.artikel-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
}

/* --- STRUKTUR AUTOMATIC SLIDESHOW GAMBAR --- */
.artikel-img-slider {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
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
  transition: all 0.5s ease-in-out; 
}

/* Penanda Jenis Informasi Sekolah */
.badge-kategori {
  position: absolute;
  top: 15px; left: 15px;
  padding: 5px 12px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: bold;
  color: white;
  z-index: 2;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.badge-kategori.berita { background-color: #10b981; }
.badge-kategori.pengumuman { background-color: #ef4444; }
.badge-kategori.agenda { background-color: #f59e0b; }

/* Bulatan Titik Indikator Gambar Aktif */
.slider-dots {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 3;
  background: rgba(0, 0, 0, 0.35);
  padding: 5px 10px;
  border-radius: 10px;
}
.dot {
  width: 8px;
  height: 8px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
}
.dot.active {
  background-color: #ffffff;
  width: 14px;
  border-radius: 4px;
}

/* --- BADAN KARTU TEKS --- */
.artikel-body {
  padding: 25px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.artikel-meta {
  font-size: 0.85rem;
  color: #64748b;
  margin-bottom: 12px;
  display: flex;
  gap: 8px;
}
.artikel-body h3 {
  color: #1e3a8a;
  font-size: 1.3rem;
  margin: 0 0 12px 0;
  line-height: 1.4;
}
.artikel-body p {
  color: #475569;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 20px;
}
.btn-read {
  color: #2563eb;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.95rem;
  margin-top: auto; /* Memaksa tombol selalu berada di posisi paling bawah kartu */
  transition: color 0.2s;
  align-self: flex-start;
}
.btn-read:hover { color: #1d4ed8; }
.not-found { text-align: center; color: #64748b; padding: 40px 0; font-size: 1.1rem; }

/* --- RESPONSIVE UNTUK LAYAR HP --- */
@media (max-width: 768px) {
  .filter-wrapper {
    flex-direction: column;
    align-items: stretch;
  }
  .category-tabs {
    overflow-x: auto; /* Fitur geser horizontal untuk tombol kategori di HP */
    padding-bottom: 8px;
  }
  .category-tabs button {
    padding: 8px 15px;
    font-size: 0.85rem;
    flex-shrink: 0;
  }
  .search-box input { width: 100%; }
  .grid-berita { grid-template-columns: 1fr; }
}
</style>