<template>
  <div class="kesiswaan-container">
    <section class="kesiswaan-hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>Kesiswaan & Kegiatan</h1>
        <p>Wadah kreativitas, pengembangan bakat, dan apresiasi prestasi siswa SD Negeri Pucung.</p>
      </div>
    </section>

    <section class="section-kesiswaan white-bg">
      <div class="container">
        <div class="text-center-heading">
          <span class="section-tag">Minat & Bakat</span>
          <h2>Ekstrakurikuler</h2>
          <hr class="line-decor mx-auto" />
          <p>Kami menyediakan berbagai pilihan organisasi untuk mengasah kepemimpinan dan keterampilan non-akademik siswa.</p>
        </div>

        <div class="grid-ekstra">
          <div class="ekstra-card" v-for="item in daftarEkstra" :key="item.nama">
            <div class="ekstra-icon">
              <i :class="item.icon"></i>
            </div>
            <div class="ekstra-info">
              <h3>{{ item.nama }}</h3>
              <p>{{ item.deskripsi }}</p>
              <span class="jadwal">Jadwal: {{ item.jadwal }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-kesiswaan gray-bg">
      <div class="container">
        <div class="text-center-heading">
          <span class="section-tag">Capaian Siswa</span>
          <h2>Prestasi Terbaru</h2>
          <hr class="line-decor mx-auto" />
          <p>Apresiasi atas kerja keras dan dedikasi siswa dalam berbagai ajang perlombaan.</p>
        </div>

        <div class="timeline-prestasi">
          <div class="prestasi-item" v-for="win in daftarPrestasi" :key="win.judul">
            <div class="prestasi-marker"></div>
            <div class="prestasi-content">
              <span class="prestasi-year">{{ win.tahun }}</span>
              <h3>{{ win.judul }}</h3>
              <p class="prestasi-winner"><i class="fas fa-trophy"></i> {{ win.pemenang }}</p>
              <p class="prestasi-desc">{{ win.tingkat }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-kesiswaan white-bg">
      <div class="container">
        <div class="text-center-heading">
          <span class="section-tag">Dokumentasi</span>
          <h2>Galeri Kegiatan</h2>
          <hr class="line-decor mx-auto" />
        </div>

        <div class="grid-galeri">
          <div class="galeri-item" v-for="(img, index) in galeriFoto" :key="index">
            <img :src="img.src" :alt="img.alt" />
            <div class="galeri-overlay">
              <p>{{ img.caption }}</p>
            </div>
          </div>
        </div>
        
        <div class="text-center-btn">
          <button class="btn-more">Lihat Galeri Video di YouTube &rarr;</button>
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
    // Data Ekstrakurikuler
    const daftarEkstra = ref([
      {
        nama: 'Pramuka (Wajib)',
        icon: 'fas fa-campground',
        deskripsi: 'Membentuk karakter mandiri, disiplin, dan cinta tanah air melalui kegiatan kepanduan.',
        jadwal: 'Jumat, 13.00 WIB'
      },
      {
        nama: 'Seni Tari',
        icon: 'fas fa-child',
        deskripsi: 'Melestarikan budaya daerah melalui latihan tari tradisional nusantara.',
        jadwal: 'Rabu, 13.30 WIB'
      },
      {
        nama: 'BTAQ',
        icon: 'fas fa-futbol',
        deskripsi: 'Wadah pembinaan bagi siswa untuk belajar membaca dan menulis Al-Quran dengan  baik dan tartil  sesuai dengan kaidah ilmu tajwid.',
        jadwal: 'Selasa, 13.30 WIB'
      },
      {
        nama: 'TIK',
        icon: 'fas fa-laptop-code',
        deskripsi: 'Literasi digital dasar, pengenalan office, dan desain grafis untuk anak.',
        jadwal: 'Rabu dan Kamis, 13.30 WIB'
      },
      {
        nama: 'Karawitan',
        icon: 'fas fa-music',
        deskripsi: 'Kegiatan seni  budaya yang memfokuskan pada pelestarian, pembelajaran, dan pengembangan seni musik tradisional jawa, khususnya dalam memainkan seperangkat alat musik gamelan ',
        jadwal: 'Selasa, 14.30 WIB'
      },
      {
        nama: 'Hadroh',
        icon: 'fas fa-user-md',
        deskripsi: 'wadah minat dan bakat siswa dalam bidang seni musik islam dan syar keagamaan.',
        jadwal: 'Senin, 13.30 WIB'
      }
    ]);

    // Data Prestasi
    const daftarPrestasi = ref([
      {
        tahun: '2026',
        judul: 'Juara 2 Lomba Kriya FLS2N',
        pemenang: 'Adit (kelas 4)',
        tingkat: 'Tingkat Kapanewon'
      },
      {
        tahun: '2026',
        judul: 'Peringkat 4 TKA/D',
        pemenang: 'Kelas VI (Alumnus tahun 2026)',
        tingkat: 'Tingkat Kapanewon Kalasan'
      },
      {
        tahun: '2023',
        judul: 'Juara 2 Lomba kriya FLSSN',
        pemenang: 'Etsa Clearetsa (kelas 4)',
        tingkat: 'Tingkat Kapanewon Kalasan'
      }
      ]);

    // Data Galeri
    const galeriFoto = ref([
      { src: 'https://via.placeholder.com/400x300', alt: 'Upacara', caption: 'Upacara Bendera Senin Pagi' },
      { src: 'https://via.placeholder.com/400x300', alt: 'Pramuka', caption: 'Persami Penggalang 2025' },
      { src: 'https://via.placeholder.com/400x300', alt: 'Lomba', caption: 'Peringatan HUT RI ke-80' },
      { src: 'https://via.placeholder.com/400x300', alt: 'Kelas', caption: 'Kegiatan Proyek P5 Merdeka' },
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
/* --- UTILITIES --- */
.container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
.white-bg { background: #fff; }
.gray-bg { background: #f8fafc; }
.section-kesiswaan { padding: 80px 0; }
.text-center-heading { text-align: center; margin-bottom: 50px; }
.mx-auto { margin-left: auto; margin-right: auto; }
.section-tag { color: #2563eb; font-weight: 700; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 1px; display: block; margin-bottom: 5px; }
.line-decor { width: 50px; height: 4px; background-color: #f59e0b; border: none; margin: 15px 0 20px 0; }

/* --- HERO --- */
.kesiswaan-hero {
  position: relative;
  background-image: url('https://via.placeholder.com/1920x400');
  background-size: cover; background-position: center;
  height: 35vh; display: flex; align-items: center; justify-content: center; color: white; text-align: center;
}
.hero-overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(30, 58, 138, 0.85); }
.hero-content { position: relative; z-index: 1; }
.hero-content h1 { font-size: 2.5rem; margin: 0; }

/* --- EKSTRAKURIKULER CARDS --- */
.grid-ekstra { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 25px; }
.ekstra-card {
  display: flex; gap: 20px; padding: 25px; background: white; border-radius: 12px;
  border: 1px solid #e2e8f0; transition: 0.3s;
}
.ekstra-card:hover { transform: translateY(-5px); box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); border-color: #2563eb; }
.ekstra-icon {
  width: 60px; height: 60px; background: #dbeafe; color: #2563eb;
  display: flex; align-items: center; justify-content: center; border-radius: 10px; font-size: 1.5rem; flex-shrink: 0;
}
.ekstra-info h3 { margin: 0 0 8px 0; color: #1e3a8a; font-size: 1.2rem; }
.ekstra-info p { color: #64748b; font-size: 0.9rem; line-height: 1.5; margin-bottom: 10px; }
.jadwal { font-size: 0.8rem; font-weight: 700; color: #10b981; text-transform: uppercase; }

/* --- TIMELINE PRESTASI --- */
.timeline-prestasi { max-width: 800px; margin: 0 auto; position: relative; padding-left: 30px; border-left: 2px solid #e2e8f0; }
.prestasi-item { position: relative; margin-bottom: 40px; }
.prestasi-marker {
  position: absolute; left: -41px; top: 0; width: 20px; height: 20px;
  background: #f59e0b; border: 4px solid white; border-radius: 50%; box-shadow: 0 0 0 2px #f59e0b;
}
.prestasi-content { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
.prestasi-year { color: #2563eb; font-weight: 800; font-size: 1.1rem; }
.prestasi-content h3 { margin: 5px 0; color: #1e3a8a; font-size: 1.2rem; }
.prestasi-winner { color: #10b981; font-weight: 600; margin: 5px 0; font-size: 0.95rem; }
.prestasi-desc { color: #64748b; font-size: 0.9rem; }

/* --- GALERI GRID --- */
.grid-galeri { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 15px; }
.galeri-item { position: relative; border-radius: 10px; overflow: hidden; height: 200px; cursor: pointer; }
.galeri-item img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s; }
.galeri-overlay {
  position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(0,0,0,0.8));
  padding: 20px; color: white; opacity: 0; transition: 0.3s;
}
.galeri-item:hover img { transform: scale(1.1); }
.galeri-item:hover .galeri-overlay { opacity: 1; }
.text-center-btn { text-align: center; margin-top: 40px; }
.btn-more {
  background: #1e3a8a; color: white; border: none; padding: 12px 25px; border-radius: 6px;
  font-weight: 600; cursor: pointer; transition: 0.3s;
}
.btn-more:hover { background: #2563eb; }

@media (max-width: 768px) {
  .grid-ekstra { grid-template-columns: 1fr; }
  .kesiswaan-hero h1 { font-size: 1.8rem; }
}
</style>