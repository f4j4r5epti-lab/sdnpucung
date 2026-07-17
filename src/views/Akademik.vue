<template>
  <div class="akademik-container">
    
    <!-- HERO SECTION (Kuning Hangat Khas Memphis) -->
    <section class="akademik-hero">
      <div class="hero-content">
        <span class="top-tag">INFORMASI UTAMA</span>
        <h1>Data Akademik & Direktori</h1>
        <p>Akses informasi transparan mengenai kurikulum, data pengajar, dan statistik siswa secara interaktif.</p>
      </div>
      <!-- Ornamen Geometris Bebas khas Memphis -->
      <div class="hero-shape shape-circle"></div>
      <div class="hero-shape shape-triangle">▲</div>
      <div class="hero-shape shape-zigzag">⚡</div>
    </section>

    <!-- TABS MENU SYSTEM (Gaya Tombol Memphis dengan Bayangan Tebal) -->
    <div class="tabs-container">
      <div class="tabs-menu">
        <button 
          :class="{ active: activeTab === 'kurikulum' }" 
          @click="activeTab = 'kurikulum'"
        >
          <span>📖 Kurikulum & Kalender</span>
        </button>
        <button 
          :class="{ active: activeTab === 'guru' }" 
          @click="activeTab = 'guru'"
        >
          <span>👨‍🏫 Direktori Guru & Staf</span>
        </button>
        <button 
          :class="{ active: activeTab === 'siswa' }" 
          @click="activeTab = 'siswa'"
        >
          <span>📊 Statistik Siswa</span>
        </button>
      </div>
    </div>

    <!-- MAIN CONTAINER ISI TAB -->
    <div class="container tab-content">
      
      <!-- TAB 1: KURIKULUM & KALENDER -->
      <div v-if="activeTab === 'kurikulum'" class="tab-panel animate-fade">
        <div class="grid-2">
          
          <!-- Sisi Kiri: Info Kurikulum -->
          <div class="kurikulum-info card-memphis color-peach">
            <span class="section-tag">Sistem Belajar</span>
            <h2>Kurikulum Merdeka</h2>
            <hr class="line-decor" />
            <p>
              SD Negeri Pucung telah sepenuhnya menerapkan <strong>Kurikulum Merdeka</strong> untuk seluruh jenjang kelas (I sampai VI). Pendekatan ini berfokus pada pembelajaran intrakurikuler yang beragam, optimalisasi bakat anak, serta penguatan Profil Pelajar Pancasila.
            </p>
            <div class="mapel-unggulan">
              <h3>Mata Pelajaran Pokok:</h3>
              <ul class="mapel-list">
                <li>Pendidikan Agama & Budi Pekerti</li>
                <li>Pendidikan Pancasila</li>
                <li>Bahasa Indonesia & Bahasa Inggris</li>
                <li>Matematika</li>
                <li>IPAS (Ilmu Pengetahuan Alam & Sosial)</li>
                <li>Seni Rupa & Seni Musik</li>
                <li>PJOK</li>
                <li>Bahasa Jawa</li>
              </ul>
            </div>
          </div>
          
          <!-- Sisi Kanan: Kalender Akademik (Tabel Bergaris Hitam Tebal) -->
          <div class="kalender-info card-memphis color-blue">
            <span class="section-tag">Waktu Akademik</span>
            <h2>Kalender Akademik</h2>
            <hr class="line-decor" />
            <p>Berikut adalah ringkasan agenda besar sekolah untuk semester berjalan:</p>
            
            <div class="table-wrapper">
              <table class="table-akademik">
                <thead>
                  <tr>
                    <th>Kegiatan</th>
                    <th>Waktu pelaksanaan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Penilaian Akhir Tahun (PAT)</strong></td>
                    <td>8 - 12 Juni 2026</td>
                  </tr>
                  <tr>
                    <td><strong>Rapat Pleno Kenaikan Kelas</strong></td>
                    <td>24 Juni 2026</td>
                  </tr>
                  <tr>
                    <td><strong>Pembagian Rapor Semester Genap</strong></td>
                    <td>26 Juni 2026</td>
                  </tr>
                  <tr>
                    <td><strong>Libur Akhir Tahun Ajaran</strong></td>
                    <td>27 Juni - 12 Juli 2026</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>

      <!-- TAB 2: DIREKTORI GURU & STAF (Menjaga Foto Asli dengan Bingkai Kubah) -->
      <div v-if="activeTab === 'guru'" class="tab-panel animate-fade">
        <div class="text-center-heading">
          <span class="section-tag">Tenaga Pendidik</span>
          <h2>Profil Pendidik & Tenaga Kependidikan</h2>
          <p>Sekolah kami didukung oleh guru-guru bersertifikasi profesi dan kompeten di bidangnya.</p>
          <hr class="line-decor mx-auto" />
        </div>

        <div class="grid-guru">
          <div class="guru-card" v-for="guru in daftarGuru" :key="guru.nip">
            
            <!-- Bingkai Kubah / Arch Untuk Menjaga Estetika Foto Asli -->
            <div class="guru-avatar-wrapper">
              <img :src="guru.foto" :alt="guru.nama" class="guru-img" />
            </div>

            <div class="guru-details">
              <h3>{{ guru.nama }}</h3>
              <div class="badge-jabatan">{{ guru.jabatan }}</div>
              <hr class="card-divider" />
              <div class="guru-meta">
                <p v-if="guru.nip"><strong>NIP:</strong> {{ guru.nip }}</p>
                <p v-if="guru.mapel"><strong>Mengampu:</strong> {{ guru.mapel }}</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- TAB 3: STATISTIK SISWA -->
      <div v-if="activeTab === 'siswa'" class="tab-panel animate-fade">
        <div class="text-center-heading">
          <span class="section-tag">Rekap Data</span>
          <h2>Jumlah Total Siswa Per Rombel</h2>
          <p>Transparansi kapasitas ruang kelas dan sebaran murid putra-putri pada tahun ajaran aktif.</p>
          <hr class="line-decor mx-auto" />
        </div>

        <div class="grid-statistik">
          <div class="stat-card" v-for="stat in statistikSiswa" :key="stat.kelas">
            
            <div class="stat-header">
              <h3>Kelas {{ stat.kelas }}</h3>
            </div>

            <div class="stat-body">
              <div class="stat-row">
                <span class="gender-tag putra">👦 Putra</span>
                <strong>{{ stat.putra }} siswa</strong>
              </div>
              <div class="stat-row">
                <span class="gender-tag putri">👧 Putri</span>
                <strong>{{ stat.putri }} siswa</strong>
              </div>
              <hr class="stat-divider" />
              <div class="stat-row total">
                <span>Total Kelas:</span>
                <span class="total-badge">{{ stat.putra + stat.putri }} Murid</span>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'AkademikView',
  setup() {
    const activeTab = ref('kurikulum');

    const daftarGuru = ref([
      {
        nama: 'Suyatmiyatun, S.Pd',
        jabatan: 'Kepala Sekolah',
        nip: '196803121993032007',
        mapel: 'Guru Kelas SD',
        foto: '/images/ks.jpg'
      },
      {
        nama: 'Dyah Eka Pitasari, S.Pd',
        jabatan: 'Guru Kelas / Wali Kelas I',
        nip: '199406082020122021',
        mapel: 'Guru Kelas SD',
        foto: '/images/pipit.jpg'
      },
      {
        nama: 'Ernawati, S.Pd',
        jabatan: 'Guru Kelas / Wali Kelas II',
        nip: '197003052008012015',
        mapel: 'Guru Kelas SD',
        foto: 'https://via.placeholder.com/150'
      },
      {
        nama: 'Mulyadi, S.Pd',
        jabatan: 'Guru Kelas / Wali Kelas III',
        nip: '196711072007011011',
        mapel: 'Guru Kelas SD',
        foto: 'https://via.placeholder.com/150'
      },
      {
        nama: 'Abimanyu, S.Pd',
        jabatan: 'Guru Kelas / Wali Kelas IV',
        nip: '199505112022211010',
        mapel: 'Guru Kelas SD',
        foto: 'https://via.placeholder.com/150'
      },
      {
        nama: 'Aris Fitriana, S.Pd',
        jabatan: 'Guru Kelas / Wali Kelas V',
        nip: '199312102022212023',
        mapel: 'Guru Kelas SD',
        foto: '/images/ana.jpg'
      },
      {
        nama: 'Fajar Septianto, S.Pd',
        jabatan: 'Guru Kelas / Wali Kelas VI',
        nip: '199109032024211011',
        mapel: 'Guru Kelas SD',
        foto: '/images/fajar.jpg'
      },
      {
        nama: 'Rahmawati Ari Wulandari',
        jabatan: 'Guru Mapel',
        nip: '-',
        mapel: 'Guru PABP',
        foto: 'https://via.placeholder.com/150'
      },
      {
        nama: 'Miss Asti',
        jabatan: 'Guru Mapel',
        nip: '-',
        mapel: 'Guru Bahasa Inggris',
        foto: 'https://via.placeholder.com/150'
      },
      {
        nama: 'Azizah Ratna Utami',
        jabatan: 'Tenaga Administrasi (TU)',
        nip: '-',
        mapel: 'Administrasi Sekolah',
        foto: 'https://via.placeholder.com/150'
      }
    ]);

    const statistikSiswa = ref([
      { kelas: 'I', putra: 15, putri: 13 },
      { kelas: 'II', putra: 12, putri: 14 },
      { kelas: 'III', putra: 12, putri: 9 },
      { kelas: 'IV', putra: 13, putri: 13 },
      { kelas: 'V', putra: 6, putri: 13 },
      { kelas: 'VI', putra: 9, putri: 10 }
    ]);

    return {
      activeTab,
      daftarGuru,
      statistikSiswa
    };
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,800;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

/* --- LAYOUT DASAR MEMPHIS PLAYFUL --- */
.akademik-container {
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: #111111;
  background-color: #fffbef; /* Warna dasar krem hangat */
  padding-top: 80px;
  overflow-x: hidden;
}

h1, h2, h3, h4 {
  font-family: 'Playfair Display', serif;
  font-weight: 800;
  color: #000000;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.section-tag {
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #4b5563;
  display: block;
  margin-bottom: 8px;
}

.line-decor {
  width: 70px;
  height: 4px;
  background-color: #dfb2f4; /* Ungu pastel */
  border: 2px solid #000;
  border-radius: 10px;
  margin: 10px 0 25px 0;
}
.line-decor.mx-auto {
  margin: 10px auto 25px auto;
}

/* --- HERO ACADEMIC --- */
.akademik-hero {
  position: relative;
  background-color: #f5d061; /* Kuning Memphis */
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
  padding: 0 20px;
}
.hero-content h1 { 
  font-size: 3rem; 
  margin: 0 0 10px 0; 
}
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

/* --- SYSTEM TAB NAVIGATION --- */
.tabs-container {
  background-color: #fffbef;
  border-bottom: 3px solid #000000;
  position: sticky;
  top: 80px;
  z-index: 90;
}
.tabs-menu {
  display: flex;
  justify-content: center;
  gap: 15px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 15px 20px;
}
.tabs-menu button {
  background-color: #ffffff;
  border: 2px solid #000;
  padding: 12px 24px;
  font-size: 0.95rem;
  font-weight: 700;
  color: #000000;
  cursor: pointer;
  border-radius: 30px;
  box-shadow: 3px 3px 0px #000;
  transition: all 0.15s ease-in-out;
}
.tabs-menu button:hover {
  background-color: #f5d061;
  transform: translate(-1px, -1px);
  box-shadow: 4px 4px 0px #000;
}
.tabs-menu button.active {
  background-color: #dfb2f4; /* Ungu pastel aktif */
  box-shadow: 1px 1px 0px #000;
  transform: translate(2px, 2px);
}

.tab-content {
  padding: 80px 20px;
}

/* --- TAB 1: KARTU MEMPHIS (KURIKULUM & TIMELINE) --- */
.card-memphis {
  background-color: #ffffff;
  border: 2px solid #000;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 6px 6px 0px #000;
}
.color-peach { background-color: #ffdac1; }
.color-blue { background-color: #b5e2fa; }

.kurikulum-info h2, .kalender-info h2 { 
  font-size: 2.2rem; 
  margin: 0;
}
.kurikulum-info p, .kalender-info p {
  line-height: 1.65;
  color: #1f2937;
  font-size: 1rem;
}

.mapel-unggulan h3 {
  font-size: 1.15rem;
  margin-top: 25px;
  margin-bottom: 12px;
}
.mapel-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  padding-left: 15px;
}
.mapel-list li {
  font-weight: 600;
  color: #000000;
  font-size: 0.95rem;
}

/* Tabel Klasik Bergaris Hitam Tebal */
.table-wrapper {
  margin-top: 25px;
  border: 2px solid #000;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 4px 4px 0px #000;
}
.table-akademik {
  width: 100%;
  border-collapse: collapse;
  background-color: #ffffff;
}
.table-akademik th, .table-akademik td {
  padding: 14px 18px;
  text-align: left;
  border-bottom: 2px solid #000;
  color: #000;
}
.table-akademik th {
  background-color: #f5d061;
  font-weight: 800;
  font-size: 0.95rem;
}
.table-akademik tr:last-child td {
  border-bottom: none;
}
.table-akademik tr:nth-child(even) {
  background-color: #fffbef;
}

/* --- TAB 2: DIREKTORI GURU (Bingkai Foto Kubah) --- */
.text-center-heading {
  text-align: center;
  margin-bottom: 60px;
}
.text-center-heading p {
  color: #374151;
  max-width: 600px;
  margin: 8px auto 0 auto;
  font-size: 1.05rem;
}

.grid-guru {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px;
}
.guru-card {
  background: #ffffff;
  border: 2px solid #000;
  border-radius: 20px;
  padding: 30px 20px;
  box-shadow: 6px 6px 0px #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
}

/* Mempertahankan Foto Guru Asli dalam Portal Kubah */
.guru-avatar-wrapper {
  width: 150px;
  height: 190px;
  border-top-left-radius: 75px;
  border-top-right-radius: 75px;
  border: 2px solid #000;
  overflow: hidden;
  background-color: #dfb2f4; /* Background kubah sebelum gambar load */
  box-shadow: 4px 4px 0px #000;
  margin-bottom: 20px;
}
.guru-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.guru-details h3 {
  font-size: 1.3rem;
  margin: 0;
}
.badge-jabatan {
  background-color: #ff9f68; /* Oranye pastel */
  border: 2px solid #000;
  padding: 4px 14px;
  border-radius: 30px;
  font-weight: 800;
  font-size: 0.8rem;
  margin: 10px auto;
  display: inline-block;
}
.card-divider {
  width: 100%;
  border: none;
  border-top: 2px dashed #000000;
  margin: 15px 0;
}
.guru-meta p {
  font-size: 0.85rem;
  color: #374151;
  margin: 4px 0;
}

/* --- TAB 3: STATISTIK SISWA (Gaya Kartu Folder Memphis) --- */
.grid-statistik {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}
.stat-card {
  background: #ffffff;
  border: 2px solid #000;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 5px 5px 0px #000;
  display: flex;
  flex-direction: column;
}
.stat-header {
  background-color: #f5d061;
  border-bottom: 2px solid #000;
  padding: 15px;
  text-align: center;
}
.stat-header h3 {
  margin: 0;
  font-size: 1.4rem;
}
.stat-body {
  padding: 25px;
  background-color: #fffbef;
}
.stat-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}
.gender-tag {
  border: 2px solid #000;
  padding: 4px 12px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.85rem;
}
.gender-tag.putra { background-color: #b5e2fa; }
.gender-tag.putri { background-color: #ffdac1; }

.stat-divider {
  border: none;
  border-top: 2px solid #000;
  margin: 15px 0;
}
.stat-row.total {
  font-weight: 800;
  font-size: 1rem;
}
.total-badge {
  background-color: #dfb2f4;
  border: 2px solid #000;
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 0.9rem;
  box-shadow: 2px 2px 0px #000;
}

/* ANIMASI HALUS PERALIHAN TAB */
.animate-fade {
  animation: fadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
}

/* --- RESPONSIF DETAIL --- */
@media (max-width: 992px) {
  .grid-2 {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .tabs-menu {
    overflow-x: auto;
    justify-content: flex-start;
    padding-bottom: 10px;
  }
  .tabs-menu button {
    flex-shrink: 0;
  }
}

@media (max-width: 640px) {
  .akademik-hero {
    height: auto;
    padding: 60px 20px;
  }
  .hero-content h1 {
    font-size: 2.2rem;
  }
  .tab-content {
    padding: 40px 10px;
  }
  .card-memphis {
    padding: 25px 20px;
  }
  .mapel-list {
    grid-template-columns: 1fr;
  }
  .grid-guru {
    grid-template-columns: 1fr;
  }
}
</style>