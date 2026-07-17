<template>
  <div class="detail-berita-container">
    <div v-if="artikel" class="container-isi">
      
      <!-- Tombol Kembali Bergaya Tombol Memphis -->
      <router-link to="/berita" class="btn-kembali">
        🡨 Kembali ke Berita
      </router-link>

      <h1 class="judul-utama">{{ artikel.judul }}</h1>

      <!-- Metadata Atas Lembar Pengumuman -->
      <div class="meta-detail">
        <span class="badge-kategori" :class="artikel.kategori.toLowerCase()">
          {{ artikel.kategori }}
        </span>
        <span class="tanggal-post">📅 Diterbitkan: <strong>{{ artikel.tanggal }}</strong></span>
        <span v-if="artikel.waktu_agenda" class="agenda-time">🕒 Jadwal: <strong>{{ artikel.waktu_agenda }}</strong></span>
      </div>

      <!-- Frame Foto Utama dengan Konstruksi Ganda Tebal & Fungsi Carousel Interaktif -->
      <div class="wrapper-foto-utama">
        <div class="photo-shadow-layer"></div>
        
        <div class="carousel-inner">
          <img 
            :src="artikel.foto[currentSlide]" 
            :alt="artikel.judul" 
            class="foto-detail"
          />
        </div>

        <!-- Tombol Kontrol Navigasi (Jika foto lebih dari 1) -->
        <template v-if="artikel.foto && artikel.foto.length > 1">
          <button @click="prevSlide" class="carousel-btn btn-prev" aria-label="Slide Sebelumnya">
            🡨
          </button>
          <button @click="nextSlide" class="carousel-btn btn-next" aria-label="Slide Berikutnya">
            🡪
          </button>

          <!-- Titik Indikator Dots Navigasi Carousel -->
          <div class="carousel-dots">
            <span 
              v-for="(gambar, idx) in artikel.foto" 
              :key="idx"
              class="carousel-dot"
              :class="{ active: currentSlide === idx }"
              @click="setSlide(idx)"
            ></span>
          </div>
        </template>
      </div>

      <!-- Kertas Artikel Isi Cerita -->
      <div class="artikel-konten">
        <p class="paragraf-isi ringkasan-highlight">{{ artikel.ringkasan }}</p>
        
        <p class="paragraf-isi desc-detail">
          Kegiatan ini diselenggarakan sebagai bagian dari upaya peningkatan mutu pendidikan, optimalisasi potensi bakat siswa, serta keterbukaan arus informasi publik di lingkungan internal maupun eksternal SD Negeri Pucung.
        </p>
        <p class="paragraf-isi desc-detail">
          Diharapkan melalui publikasi agenda ini, seluruh elemen ekosistem sekolah, baik jajaran guru, tenaga kependidikan, komite, para siswa, hingga wali murid dapat senantiasa bersinergi, mendukung, dan berkolaborasi aktif demi menjamin kelancaran mutu pencapaian target akademik maupun non-akademik di masa depan.
        </p>
      </div>

    </div>

    <!-- Error State Box -->
    <div v-else class="not-found-container card-error-memphis">
      <h2>Berita Tidak Ditemukan! ❌</h2>
      <p>Maaf, berkas berita atau tautan detail informasi yang Anda cari tidak tersedia dalam arsip sistem data sekolah.</p>
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
        // Memastikan foto selalu berbentuk array
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
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,800;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

/* --- LAYOUT UTAMA --- */
.detail-berita-container {
  min-height: 85vh;
  background-color: #fffbef; /* Krem hangat */
  padding: 120px 20px 80px 20px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: #111111;
}

/* --- KERTAS KONTEN UTAMA --- */
.container-isi {
  max-width: 850px;
  margin: 0 auto;
  background: #ffffff;
  padding: 50px;
  border: 2px solid #000000;
  border-radius: 24px;
  box-shadow: 8px 8px 0px #000000;
}

/* Tombol Kembali Memphis Style */
.btn-kembali {
  display: inline-block;
  color: #000000;
  background-color: #fffbef;
  text-decoration: none;
  font-weight: 800;
  font-size: 0.9rem;
  padding: 8px 16px;
  border: 2px solid #000;
  border-radius: 8px;
  box-shadow: 3px 3px 0px #000;
  margin-bottom: 35px;
  transition: all 0.1s ease-in-out;
}
.btn-kembali:hover {
  background-color: #dfb2f4;
  transform: translate(-1px, -1px);
  box-shadow: 4px 4px 0px #000;
}

.judul-utama {
  font-family: 'Playfair Display', serif;
  color: #000000;
  font-size: 2.4rem;
  line-height: 1.25;
  margin: 0 0 20px 0;
}

/* Metadata Bar */
.meta-detail {
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 0.85rem;
  color: #2b2b2b;
  margin-bottom: 35px;
  flex-wrap: wrap;
}
.badge-kategori {
  padding: 5px 12px;
  border: 2px solid #000;
  border-radius: 6px;
  color: #000000;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 0.75rem;
  box-shadow: 2px 2px 0px #000;
}
.badge-kategori.berita { background-color: #b5e2fa; }
.badge-kategori.pengumuman { background-color: #ff9f68; }
.badge-kategori.agenda { background-color: #dfb2f4; }

.tanggal-post, .agenda-time {
  background-color: #ffffff;
  border: 1px solid #000;
  padding: 3px 10px;
  border-radius: 6px;
  font-weight: 500;
}

/* --- STREAMING_CHUNK: Styling the carousel elements... --- */
/* --- CAROUSEL SLIDESHOW CONTAINER --- */
.wrapper-foto-utama {
  position: relative;
  width: 100%;
  height: 450px;
  margin-bottom: 40px;
}
.photo-shadow-layer {
  position: absolute;
  top: 8px;
  left: 8px;
  width: 100%;
  height: 100%;
  background-color: #f5d061; /* Kuning Memphis */
  border: 2px solid #000;
  border-radius: 16px;
  z-index: 1;
}
.carousel-inner {
  position: relative;
  width: 100%;
  height: 100%;
  border: 2px solid #000000;
  border-radius: 16px;
  overflow: hidden;
  z-index: 2;
  background-color: #fffbef;
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
  width: 46px;
  height: 46px;
  background-color: #ffffff;
  border: 2px solid #000000;
  border-radius: 50%;
  font-size: 1.2rem;
  font-weight: 900;
  color: #000000;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 3px 3px 0px #000000;
  transition: all 0.15s ease-in-out;
}
.carousel-btn:hover {
  background-color: #dfb2f4; /* Ungu pop */
  transform: translateY(-50%) translate(-1px, -1px);
  box-shadow: 4px 4px 0px #000000;
}
.carousel-btn:active {
  transform: translateY(-50%) translate(1px, 1px);
  box-shadow: 1px 1px 0px #000000;
}
.btn-prev {
  left: 20px;
}
.btn-next {
  right: 20px;
}

/* Dots Indikator Carousel */
.carousel-dots {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ffffff;
  border: 2px solid #000000;
  padding: 6px 12px;
  border-radius: 30px;
  box-shadow: 3px 3px 0px #000000;
  display: flex;
  gap: 8px;
  z-index: 10;
}
.carousel-dot {
  width: 8px;
  height: 8px;
  background-color: #cbd5e1;
  border: 1px solid #000000;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.carousel-dot.active {
  background-color: #000000;
  width: 18px;
  border-radius: 4px;
}

/* --- BADAN BACAAN ARTIKEL --- */
.artikel-konten {
  line-height: 1.8;
  color: #1f2937;
  font-size: 1.05rem;
}
.paragraf-isi {
  margin-bottom: 20px;
  text-align: justify;
}
.desc-detail {
  font-weight: 500;
}
.ringkasan-highlight {
  font-size: 1.15rem;
  font-weight: 600;
  color: #000000;
  line-height: 1.7;
  border-left: 4px solid #dfb2f4;
  padding-left: 15px;
}

/* --- ERROR PANEL STATE --- */
.card-error-memphis {
  max-width: 550px;
  margin: 60px auto;
  background-color: #ffffff;
  border: 2px solid #000;
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  box-shadow: 6px 6px 0px #000;
}
.card-error-memphis h2 { margin-bottom: 12px; font-size: 1.6rem; }
.card-error-memphis p { color: #374151; font-size: 0.95rem; margin-bottom: 25px; }

.btn-error-kembali {
  display: inline-block;
  background-color: #f5d061;
  color: #000;
  border: 2px solid #000;
  padding: 12px 24px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 800;
  box-shadow: 3px 3px 0px #000;
}
.btn-error-kembali:hover {
  background-color: #ffdac1;
}

/* --- RESPONSIF HP --- */
@media (max-width: 768px) {
  .container-isi { padding: 25px 20px; border-radius: 16px; }
  .judul-utama { font-size: 1.65rem; }
  .wrapper-foto-utama { height: 260px; }
  .carousel-btn { width: 36px; height: 36px; font-size: 0.9rem; }
  .artikel-konten { font-size: 0.95rem; }
  .detail-berita-container { padding-top: 100px; }
}
</style>