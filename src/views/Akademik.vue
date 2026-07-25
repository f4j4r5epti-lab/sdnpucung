<template>
  <div class="akademik-container">
    
    <!-- BACKGROUND MESH GLOW FLOATING BALLS -->
    <div class="mesh-background">
      <div class="glow-ball glow-yellow-1"></div>
      <div class="glow-ball glow-purple-1"></div>
      <div class="glow-ball glow-pink-1"></div>
      <div class="glow-ball glow-cyan-1"></div>
      <div class="glow-ball glow-yellow-2"></div>
    </div>

    <!-- HERO SECTION -->
    <section class="akademik-hero">
      <div class="container hero-content text-center">
        <div class="top-tag-pill">
          <span class="sparkle">✨</span> INFORMASI UTAMA
        </div>
        <h1 class="hero-title">
          Data Akademik & <span class="gradient-text-vibrant">Direktori</span>
        </h1>
        <p class="hero-subtitle">
          Akses informasi transparan mengenai kurikulum, data pengajar, dan statistik siswa secara interaktif.
        </p>
      </div>
    </section>

    <!-- TABS NAVIGATION SYSTEM (Glass Accent) -->
    <div class="tabs-nav-wrapper">
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
          <div class="vibrant-card-wrapper yellow-purple-grad">
            <div class="glass-card-content">
              <span class="sub-heading badge-yellow">SISTEM BELAJAR</span>
              <h2 class="card-heading">Kurikulum Merdeka</h2>
              <div class="heading-line-vibrant"></div>
              <p class="card-desc">
                SD Negeri Pucung telah sepenuhnya menerapkan <strong>Kurikulum Merdeka</strong> untuk seluruh jenjang kelas (I sampai VI). Pendekatan ini berfokus pada pembelajaran intrakurikuler yang beragam, optimalisasi bakat anak, serta penguatan Profil Pelajar Pancasila.
              </p>
              
              <div class="mapel-wrapper">
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
          </div>
          
          <!-- Sisi Kanan: Kalender Akademik -->
          <div class="vibrant-card-wrapper cyan-blue-grad">
            <div class="glass-card-content">
              <span class="sub-heading badge-cyan">WAKTU AKADEMIK</span>
              <h2 class="card-heading">Kalender Akademik</h2>
              <div class="heading-line-vibrant"></div>
              <p class="card-desc">Berikut adalah ringkasan agenda besar sekolah untuk semester berjalan:</p>
              
              <div class="table-wrapper-glass">
                <table class="table-akademik">
                  <thead>
                    <tr>
                      <th>Kegiatan</th>
                      <th>Waktu Pelaksanaan</th>
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
      </div>

      <!-- TAB 2: DIREKTORI GURU & STAF -->
      <div v-if="activeTab === 'guru'" class="tab-panel animate-fade">
        <div class="section-title-center text-center">
          <span class="sub-heading badge-purple">TENAGA PENDIDIK</span>
          <h2 class="section-heading">Profil Pendidik & Tenaga Kependidikan</h2>
          <div class="heading-line-vibrant center"></div>
          <p class="subtitle">Sekolah kami didukung oleh guru-guru bersertifikasi profesi dan kompeten di bidangnya.</p>
        </div>

        <div class="grid-guru">
          <div class="guru-card-glass" v-for="(guru, idx) in daftarGuru" :key="guru.nip || idx">
            
            <!-- Bingkai Foto dengan Akses Gradien Modern -->
            <div class="guru-avatar-wrapper">
              <img :src="guru.foto" :alt="guru.nama" class="guru-img" />
            </div>

            <div class="guru-details">
              <h3>{{ guru.nama }}</h3>
              <div class="badge-jabatan-vibrant">{{ guru.jabatan }}</div>
              <div class="card-divider"></div>
              <div class="guru-meta">
                <p v-if="guru.nip && guru.nip !== '-'"><strong>NIP:</strong> {{ guru.nip }}</p>
                <p v-if="guru.mapel"><strong>Mengampu:</strong> {{ guru.mapel }}</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- TAB 3: STATISTIK SISWA -->
      <div v-if="activeTab === 'siswa'" class="tab-panel animate-fade">
        <div class="section-title-center text-center">
          <span class="sub-heading badge-pink">REKAP DATA</span>
          <h2 class="section-heading">Jumlah Total Siswa Per Rombel</h2>
          <div class="heading-line-vibrant center"></div>
          <p class="subtitle">Transparansi kapasitas ruang kelas dan sebaran murid putra-putri pada tahun ajaran aktif.</p>
        </div>

        <div class="grid-statistik">
          <div class="stat-card-glass" v-for="stat in statistikSiswa" :key="stat.kelas">
            
            <div class="stat-header">
              <h3>Kelas {{ stat.kelas }}</h3>
            </div>

            <div class="stat-body">
              <div class="stat-row">
                <span class="gender-pill putra">👦 Putra</span>
                <strong>{{ stat.putra }} siswa</strong>
              </div>
              <div class="stat-row">
                <span class="gender-pill putri">👧 Putri</span>
                <strong>{{ stat.putri }} siswa</strong>
              </div>
              <div class="stat-divider"></div>
              <div class="stat-row total">
                <span>Total Kelas:</span>
                <span class="total-badge-vibrant">{{ stat.putra + stat.putri }} Murid</span>
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
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

/* --- LAYOUT UTAMA & VIBRANT MESH BACKGROUND --- */
.akademik-container {
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: #1e293b;
  position: relative;
  background: #f8fafc;
  overflow-x: hidden;
  min-height: 100vh;
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
  top: 18%;
  left: -10%;
}

.glow-pink-1 {
  width: 400px;
  height: 400px;
  background: #ec4899;
  top: 45%;
  right: -8%;
}

.glow-cyan-1 {
  width: 450px;
  height: 450px;
  background: #06b6d4;
  top: 70%;
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

.text-center { text-align: center; }

.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: stretch;
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

.card-heading {
  font-size: 1.8rem;
  font-weight: 800;
  color: #0f172a;
}

.heading-line-vibrant {
  width: 80px;
  height: 5px;
  background: linear-gradient(90deg, #ffb703, #ec4899, #8b5cf6, #06b6d4);
  border-radius: 10px;
  margin: 15px 0 25px 0;
}
.heading-line-vibrant.center {
  margin: 15px auto 25px auto;
}

.gradient-text-vibrant {
  background: linear-gradient(135deg, #ffb703 0%, #ec4899 50%, #8b5cf6 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  color: #475569;
  max-width: 600px;
  margin: 12px auto 0 auto;
  font-size: 1rem;
}

/* --- HERO ACADEMIC --- */
.akademik-hero {
  position: relative;
  padding: 120px 0 50px 0;
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

.hero-subtitle {
  font-size: 1.15rem;
  color: #475569;
  max-width: 600px;
  margin: 0 auto;
}

/* --- STICKY TABS NAVIGATION --- */
.tabs-nav-wrapper {
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  position: sticky;
  top: 0;
  z-index: 99;
}

.tabs-menu {
  display: flex;
  justify-content: center;
  gap: 15px;
  max-width: 900px;
  margin: 0 auto;
  padding: 12px 20px;
}

.tabs-menu button {
  background: transparent;
  border: none;
  padding: 12px 24px;
  font-size: 0.95rem;
  font-weight: 700;
  color: #475569;
  cursor: pointer;
  border-radius: 99px;
  transition: all 0.3s ease;
}

.tabs-menu button:hover {
  color: #ec4899;
  background: rgba(236, 72, 153, 0.08);
}

.tabs-menu button.active {
  background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
  color: #ffffff;
  box-shadow: 0 8px 20px rgba(168, 85, 247, 0.35);
}

.tab-content {
  padding: 60px 20px 100px 20px;
}

/* --- VIBRANT GRADIENT CARDS & GLASS CONTENT --- */
.vibrant-card-wrapper {
  padding: 4px;
  border-radius: 32px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease;
  height: 100%;
  box-sizing: border-box;
}

.vibrant-card-wrapper:hover {
  transform: translateY(-5px);
}

.yellow-purple-grad {
  background: linear-gradient(135deg, #ffc800 0%, #ec4899 50%, #8b5cf6 100%);
}

.cyan-blue-grad {
  background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%);
}

.glass-card-content {
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(20px);
  border-radius: 28px;
  padding: 35px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.card-desc {
  color: #334155;
  line-height: 1.7;
  font-size: 1rem;
  margin-bottom: 20px;
}

.mapel-wrapper h3 {
  font-size: 1.1rem;
  font-weight: 800;
  color: #0f172a;
  margin-top: 10px;
  margin-bottom: 12px;
}

.mapel-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  padding-left: 20px;
  margin: 0;
}

.mapel-list li {
  font-weight: 600;
  color: #334155;
  font-size: 0.95rem;
  line-height: 1.4;
}

/* --- TABLE STYLING MODERN GLASS --- */
.table-wrapper-glass {
  margin-top: 15px;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(226, 232, 240, 0.8);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
}

.table-akademik {
  width: 100%;
  border-collapse: collapse;
  background-color: #ffffff;
}

.table-akademik th, .table-akademik td {
  padding: 14px 18px;
  text-align: left;
  border-bottom: 1px solid #f1f5f9;
  font-size: 0.95rem;
}

.table-akademik th {
  background: #f8fafc;
  color: #0f172a;
  font-weight: 800;
}

.table-akademik td {
  color: #334155;
}

.table-akademik tr:last-child td {
  border-bottom: none;
}

.table-akademik tr:nth-child(even) {
  background-color: #fafafa;
}

/* --- TAB 2: DIREKTORI GURU --- */
.section-title-center {
  margin-bottom: 50px;
}

.grid-guru {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.guru-card-glass {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.9);
  border-radius: 28px;
  padding: 30px 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;
}

.guru-card-glass:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  background: rgba(255, 255, 255, 0.95);
}

.guru-avatar-wrapper {
  width: 140px;
  height: 175px;
  border-top-left-radius: 70px;
  border-top-right-radius: 70px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: hidden;
  background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
  padding: 3px;
  box-shadow: 0 10px 20px rgba(168, 85, 247, 0.2);
  margin-bottom: 20px;
}

.guru-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 67px;
  border-top-right-radius: 67px;
  border-bottom-left-radius: 17px;
  border-bottom-right-radius: 17px;
}

.guru-details h3 {
  font-size: 1.25rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0;
}

.badge-jabatan-vibrant {
  background: #f1f5f9;
  color: #475569;
  padding: 6px 16px;
  border-radius: 99px;
  font-weight: 700;
  font-size: 0.8rem;
  margin: 12px auto;
  display: inline-block;
  border: 1px solid #e2e8f0;
}

.card-divider {
  width: 100%;
  height: 1px;
  background: #f1f5f9;
  margin: 15px 0;
}

.guru-meta p {
  font-size: 0.85rem;
  color: #64748b;
  margin: 4px 0;
}

/* --- TAB 3: STATISTIK SISWA --- */
.grid-statistik {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.stat-card-glass {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.9);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
}

.stat-card-glass:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  background: rgba(255, 255, 255, 0.95);
}

.stat-header {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-bottom: 1px solid #e2e8f0;
  padding: 16px;
  text-align: center;
}

.stat-header h3 {
  margin: 0;
  font-size: 1.3rem;
  font-weight: 800;
  color: #0f172a;
}

.stat-body {
  padding: 25px;
}

.stat-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  color: #334155;
}

.gender-pill {
  padding: 6px 14px;
  border-radius: 99px;
  font-weight: 700;
  font-size: 0.85rem;
}

.gender-pill.putra { background-color: #e0f2fe; color: #0369a1; }
.gender-pill.putri { background-color: #fce7f3; color: #be185d; }

.stat-divider {
  height: 1px;
  background-color: #f1f5f9;
  margin: 15px 0;
}

.stat-row.total {
  font-weight: 800;
  font-size: 0.95rem;
  color: #0f172a;
}

.total-badge-vibrant {
  background: linear-gradient(135deg, #ffc800 0%, #f97316 100%);
  color: #ffffff;
  padding: 6px 16px;
  border-radius: 99px;
  font-size: 0.85rem;
  font-weight: 800;
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
}

/* ANIMASI HALUS PERALIHAN TAB */
.animate-fade {
  animation: fadeIn 0.4s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

/* --- RESPONSIF DETAIL --- */
@media (max-width: 992px) {
  .grid-2 {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .tabs-nav-wrapper {
    overflow-x: auto;
  }
  .tabs-menu {
    justify-content: flex-start;
    padding: 10px 15px;
  }
  .tabs-menu button {
    flex-shrink: 0;
  }
  .hero-title {
    font-size: 2.6rem;
  }
}

@media (max-width: 640px) {
  .akademik-hero {
    padding: 80px 0 40px 0;
  }
  .hero-title {
    font-size: 2.1rem;
  }
  .tab-content {
    padding: 30px 15px 60px 15px;
  }
  .glass-card-content {
    padding: 25px 20px;
  }
  .mapel-list {
    grid-template-columns: 1fr;
  }
  .grid-guru, .grid-statistik {
    grid-template-columns: 1fr;
  }
}
</style>