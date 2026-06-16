<template>
  <div class="detail-berita-container">
    <div v-if="artikel" class="container-isi">
      
      <router-link to="/berita" class="btn-kembali">
        &larr; Kembali ke Berita
      </router-link>

      <h1 class="judul-utama">{{ artikel.judul }}</h1>

      <div class="meta-detail">
        <span class="badge-kategori" :class="artikel.kategori.toLowerCase()">
          {{ artikel.kategori }}
        </span>
        <span class="tanggal-post">Diterbitkan pada: <strong>{{ artikel.tanggal }}</strong></span>
        <span v-if="artikel.waktu_agenda" class="agenda-time">| Jadwal: {{ artikel.waktu_agenda }}</span>
      </div>

      <div class="wrapper-foto-utama">
        <img 
          :src="Array.isArray(artikel.foto) ? artikel.foto[0] : artikel.foto" 
          :alt="artikel.judul" 
          class="foto-detail"
        />
      </div>

      <div class="artikel-konten">
        <p class="paragraf-isi">{{ artikel.ringkasan }}</p>
        <p class="paragraf-isi">
          Kegiatan ini diselenggarakan sebagai bagian dari upaya peningkatan mutu pendidikan dan keterbukaan informasi di lingkungan SD Negeri Pucung. Diharapkan seluruh elemen sekolah, baik guru, siswa, maupun wali murid dapat terus bersinergi demi kelancaran agenda ini.
        </p>
      </div>

    </div>

    <div v-else class="not-found-container">
      <h2>Berita Tidak Ditemukan</h2>
      <p>Maaf, detail informasi yang Anda cari tidak tersedia atau telah dihapus.</p>
      <router-link to="/berita" class="btn-error-kembali">Kembali ke Halaman Berita</router-link>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
// Mengambil sumber data dari file beritaData.js Anda
import { daftarArtikelSdn } from '../data/beritaData.js';

export default {
  name: 'BeritaDetailView',
  setup() {
    const route = useRoute();
    const artikel = ref(null);

    onMounted(() => {
      // Mengubah ID dari parameter URL link menjadi tipe Angka (Number)
      const idBerita = Number(route.params.id);
      
      // Mencari data di beritaData.js yang ID-nya cocok dengan link URL
      const dataCocok = daftarArtikelSdn.find(item => Number(item.id) === idBerita);
      
      if (dataCocok) {
        artikel.value = dataCocok;
      }
    });

    return {
      artikel
    };
  }
}
</script>

<style scoped>
.detail-berita-container {
  min-height: 80vh;
  background-color: #f8fafc;
  padding: 40px 20px;
}
.container-isi {
  max-width: 800px;
  margin: 0 auto;
  background: #ffffff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
}
.btn-kembali {
  display: inline-block;
  color: #2563eb;
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 25px;
  transition: color 0.2s;
}
.btn-kembali:hover { color: #1d4ed8; }

.judul-utama {
  color: #1e3a8a;
  font-size: 2.2rem;
  line-height: 1.3;
  margin: 0 0 20px 0;
}

.meta-detail {
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 0.9rem;
  color: #64748b;
  margin-bottom: 30px;
  flex-wrap: wrap;
}
.badge-kategori {
  padding: 4px 10px;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  font-size: 0.75rem;
  text-transform: uppercase;
}
.badge-kategori.berita { background-color: #10b981; }
.badge-kategori.pengumuman { background-color: #ef4444; }
.badge-kategori.agenda { background-color: #f59e0b; }

.wrapper-foto-utama {
  width: 100%;
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 30px;
}
.foto-detail {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.artikel-konten {
  line-height: 1.8;
  color: #334155;
  font-size: 1.1rem;
}
.paragraf-isi {
  margin-bottom: 20px;
  text-align: justify;
}

/* Tampilan Error */
.not-found-container {
  text-align: center;
  padding: 60px 20px;
  color: #64748b;
}
.not-found-container h2 { color: #1e3a8a; margin-bottom: 10px; }
.btn-error-kembali {
  display: inline-block;
  margin-top: 20px;
  background-color: #2563eb;
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
}

/* RESPONSIVE LAYOUT UNTUK HP */
@media (max-width: 768px) {
  .container-isi { padding: 20px; }
  .judul-utama { font-size: 1.6rem; }
  .wrapper-foto-utama { height: 230px; }
  .artikel-konten { font-size: 1rem; }
}
</style>