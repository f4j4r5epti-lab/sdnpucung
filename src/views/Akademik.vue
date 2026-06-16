<template>
  <div class="akademik-container">
    <section class="akademik-hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>Data Akademik & Direktori</h1>
        <p>Akses informasi transparan mengenai kurikulum, data pengajar, dan statistik siswa.</p>
      </div>
    </section>

    <div class="tabs-container">
      <div class="tabs-menu">
        <button 
          :class="{ active: activeTab === 'kurikulum' }" 
          @click="activeTab = 'kurikulum'"
        >
          Kurikulum & Kalender
        </button>
        <button 
          :class="{ active: activeTab === 'guru' }" 
          @click="activeTab = 'guru'"
        >
          Direktori Guru & Staf
        </button>
        <button 
          :class="{ active: activeTab === 'siswa' }" 
          @click="activeTab = 'siswa'"
        >
          Statistik Siswa
        </button>
      </div>
    </div>

    <div class="container tab-content">
      
      <div v-if="activeTab === 'kurikulum'" class="tab-panel animate-fade">
        <div class="grid-2">
          <div class="kurikulum-info">
            <span class="section-tag">Sistem Belajar</span>
            <h2>Kurikulum Merdeka</h2>
            <p>
              SD Negeri Pucung telah sepenuhnya menerapkan <strong>Kurikulum Merdeka</strong> untuk seluruh jenjang kelas (I sampai VI). Pendekatan ini berfokus pada pembelajaran intrakurikuler yang beragam, optimalisasi bakat anak, serta penguatan Profil Pelajar Pancasila.
            </p>
            <div class="mapel-unggulan">
              <h3>Mata Pelajaran Pokok:</h3>
              <ul>
                <li>Pendidikan Agama & Budi Pekerti</li>
                <li>Pendidikan Pancasila</li>
                <li>Bahasa Indonesia & Bahasa Inggris</li>
                <li>Matematika</li>
                <li>IPAS (Ilmu Pengetahuan Alam & Sosial)</li>
                <li>Seni Rupa</li>
                <li>PJOK</li>
                <li>Bahasa Jawa</li>
                <li>Bahasa Inggris</li>
              </ul>
            </div>
          </div>
          <div class="kalender-info">
            <span class="section-tag">Waktu Akademik</span>
            <h2>Kalender Akademik</h2>
            <p>Berikut adalah ringkasan agenda besar sekolah untuk semester berjalan:</p>
            <table class="table-akademik">
              <thead>
                <tr>
                  <th>Kegiatan</th>
                  <th>Waktu</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Penilaian Akhir Tahun (PAT)</td>
                  <td>8 - 12 Juni 2026</td>
                </tr>
                <tr>
                  <td>Rapat Pleno Kenaikan Kelas</td>
                  <td>24 Juni 2026</td>
                </tr>
                <tr>
                  <td>Pembagian Rapor Semester Genap</td>
                  <td>26 Juni 2026</td>
                </tr>
                <tr>
                  <td>Libur Akhir Tahun Ajaran</td>
                  <td>27 Juni - 12 Juli 2026</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div v-if="activeTab === 'guru'" class="tab-panel animate-fade">
        <div class="text-center-heading">
          <span class="section-tag">Tenaga Pendidik</span>
          <h2>Profil Pendidik & Tenaga Kependidikan</h2>
          <p>Sekolah kami didukung oleh guru-guru bersertifikasi profesi dan kompeten di bidangnya.</p>
        </div>

        <div class="grid-guru">
          <div class="guru-card" v-for="guru in daftarGuru" :key="guru.nip">
            <div class="guru-avatar">
              <img :src="guru.foto" :alt="guru.nama" />
            </div>
            <div class="guru-details">
              <h3>{{ guru.nama }}</h3>
              <p class="guru-jabatan">{{ guru.jabatan }}</p>
              <div class="guru-meta">
                <span><strong>NIP:</strong> {{ guru.nip }}</span>
                <span><strong>Mengampu:</strong> {{ guru.mapel }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="activeTab === 'siswa'" class="tab-panel animate-fade">
        <div class="text-center-heading">
          <span class="section-tag">Rekap Data</span>
          <h2>Jumlah Total Siswa Per Rombel</h2>
          <p>Transparansi kapasitas ruang kelas dan sebaran murid putra-putri pada tahun ajaran aktif.</p>
        </div>

        <div class="grid-statistik">
          <div class="stat-card" v-for="stat in statistikSiswa" :key="stat.kelas">
            <div class="stat-header">Kelas {{ stat.kelas }}</div>
            <div class="stat-body">
              <div class="stat-row">
                <span>Putra:</span><strong>{{ stat.putra }} siswa</strong>
              </div>
              <div class="stat-row">
                <span>Putri:</span><strong>{{ stat.putri }} siswa</strong>
              </div>
              <hr />
              <div class="stat-row total">
                <span>Total:</span><strong>{{ stat.putra + stat.putri }} siswa</strong>
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
    // Kontrol Navigasi Tab
    const activeTab = ref('kurikulum');

    // Data Dummy Guru & Staf (Bisa dikonekkan ke Tab 'guru_staf' di Google Sheets via Apps Script jika mau)
    const daftarGuru = ref([
      {
        nama: 'Suyatmiyatun,S.Pd',
        jabatan: 'Kepala Sekolah',
        mapel: 'Guru Kelas SD',
        foto: '/images/ks.jpg'
      },
      {
        nama: 'Dyah Eka Pitasari, S.Pd',
        jabatan: 'Guru Kelas / Wali Kelas I',
        mapel: 'Guru Kelas SD',
        foto: '/images/pipit.jpg'
      },
      {
        nama: 'Ernawati, S.Pd',
        jabatan: 'Guru Kelas / Wali Kelas I',
        mapel: 'Guru Kelas 2',
        foto: 'https://via.placeholder.com/150'
      },
      {
        nama: 'Mulyadi,S.Pd',
        jabatan: 'Guru Kelas / Wali Kelas III',
        mapel: 'Guru Kelas SD',
        foto: 'https://via.placeholder.com/150'
      },
      {
        nama: 'Abimanyu, S.Pd',
        jabatan: 'Guru Kelas / Wali Kelas IV',
        mapel: 'Guru Kelas SD',
        foto: 'https://via.placeholder.com/150'
      },
      {
        nama: 'Aris Fitriana, S.Pd',
        jabatan: 'Guru Kelas / Wali Kelas V',
        mapel: 'Guru Kelas SD',
        foto: '/images/ana.jpg'
      },
      {
        nama: 'Fajar Septianto, S.Pd',
        jabatan: 'Guru Kelas / Wali Kelas VI',
        mapel: 'Guru Kelas SD',
        foto: '/images/fajar.jpg'
      },
      {
        nama: 'Rahmawati Ari Wulandari',
        jabatan: 'Guru Mapel',
        mapel: 'Guru PABP',
        foto: 'https://via.placeholder.com/150'
      },
      {
        nama: 'Miss Asti',
        jabatan: 'Guru Mapel',
        mapel: 'Guru Bahasa Inggris',
        foto: 'https://via.placeholder.com/150'
      },
      {
        nama: 'Azizah Ratna Utami',
        jabatan: 'TU',
        mapel: '',
        foto: 'https://via.placeholder.com/150'
      },

    ]);

    // Data Statistik Siswa
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
/* --- UTILITIES & LAYOUT --- */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}
.section-tag {
  color: #2563eb;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 1px;
  display: block;
  margin-bottom: 5px;
}
.text-center-heading {
  text-align: center;
  margin-bottom: 40px;
}
.text-center-heading p {
  color: #6b7280;
  max-width: 600px;
  margin: 5px auto 0 auto;
}

/* --- HERO SECTION --- */
.akademik-hero {
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
.hero-content { position: relative; z-index: 1; padding: 0 20px; }
.hero-content h1 { font-size: 2.5rem; margin: 0 0 10px 0; }

/* --- TABS SYSTEM --- */
.tabs-container {
  background-color: #f1f5f9;
  border-bottom: 2px solid #e2e8f0;
}
.tabs-menu {
  display: flex;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
}
.tabs-menu button {
  background: none;
  border: none;
  padding: 20px 30px;
  font-size: 1rem;
  font-weight: 600;
  color: #64748b;
  cursor: pointer;
  transition: 0.3s;
  border-bottom: 4px solid transparent;
}
.tabs-menu button:hover {
  color: #2563eb;
}
.tabs-menu button.active {
  color: #2563eb;
  border-bottom-color: #2563eb;
}
.tab-content {
  padding: 60px 20px;
}

/* --- TAB 1: KURIKULUM & TIMELINE --- */
.kurikulum-info h2, .kalender-info h2 { color: #1e3a8a; font-size: 1.8rem; margin: 0 0 15px 0; }
.kurikulum-info p, .kalender-info p { color: #4b5563; line-height: 1.6; }
.mapel-unggulan h3 { color: #1e3a8a; font-size: 1.1rem; margin-top: 20px; }
.mapel-unggulan ul { padding-left: 20px; color: #4b5563; line-height: 1.8; }

.table-akademik {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
}
.table-akademik th, .table-akademik td {
  padding: 12px 15px;
  border-bottom: 1px solid #e2e8f0;
  text-align: left;
}
.table-akademik th { background-color: #1e3a8a; color: white; }
.table-akademik tr:nth-child(even) { background-color: #f8fafc; }

/* --- TAB 2: DIREKTORI GURU --- */
.grid-guru {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 30px;
}
.guru-card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  display: flex;
  gap: 20px;
  align-items: center;
  border-left: 4px solid #2563eb;
}
.guru-avatar img {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #e2e8f0;
}
.guru-details h3 { margin: 0; color: #1e3a8a; font-size: 1.2rem; }
.guru-jabatan {
  margin: 3px 0 10px 0;
  color: #10b981;
  font-weight: 600;
  font-size: 0.9rem;
}
.guru-meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 0.85rem;
  color: #4b5563;
}

/* --- TAB 3: STATISTIK SISWA --- */
.grid-statistik {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}
.stat-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  border: 1px solid #e2e8f0;
}
.stat-header {
  background-color: #1e3a8a;
  color: white;
  padding: 12px;
  text-align: center;
  font-weight: bold;
}
.stat-body { padding: 20px; }
.stat-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  color: #4b5563;
  font-size: 0.95rem;
}
.stat-body hr { border: none; border-top: 1px solid #e2e8f0; margin: 12px 0; }
.stat-row.total {
  color: #2563eb;
  font-size: 1.05rem;
}

/* ANIMASI TRANSISI TAB */
.animate-fade {
  animation: fadeIn 0.4s ease-in-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .grid-2 { grid-template-columns: 1fr; gap: 40px; }
  .grid-guru { grid-template-columns: 1fr; }
  .tabs-menu { overflow-x: auto; justify-content: flex-start; }
  .tabs-menu button { padding: 15px 20px; font-size: 0.9rem; flex-shrink: 0; }
  .guru-card { flex-direction: column; text-align: center; }
}
</style>