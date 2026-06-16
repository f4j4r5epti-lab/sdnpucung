<template>
  <div class="home-container">
    <section class="hero-banner">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <span class="school-badge">SD NEGERI PUCUNG</span>
        <h1>Pucung BerSiNerGI "Bersih, Disiplin, Visioner, Religius"</h1>
        <p>Selamat datang di portal resmi informasi dan pelayanan akademik sekolah kami.</p>
        <div class="hero-buttons">
          <router-link to="/ppdb" class="btn-primary">Daftar PPDB Online</router-link>
          <router-link to="/profil" class="btn-secondary">Jelajahi Profil</router-link>
        </div>
      </div>
    </section>

    <section class="section-sambutan">
      <div class="container grid-2">
        <div class="kepsek-photo">
          <img src="/images/ks.jpg" alt="Foto Kepala Sekolah" />
          <div class="kepsek-title">
            <h3>Suyatmiyatun, S.Pd</h3>
            <p>Kepala Sekolah SD Negeri Pucung</p>
          </div>
        </div>
        <div class="kepsek-text">
          <span class="section-tag">Sambutan Pimpinan</span>
          <h2>Membangun Masa Depan Lewat Pendidikan Berkualitas</h2>
          <hr class="line-decor" />
          <p><em>Assalamu’alaikum Warahmatullahi Wabarakatuh,</em></p>
          <p>
            Puji syukur kita panjatkan kehadirat Allah SWT atas terwujudnya website resmi SD Negeri Pucung. Di era digital ini, kami berkomitmen untuk menyediakan wadah informasi yang transparan, akuntabel, dan mudah diakses oleh seluruh wali murid, siswa, dan masyarakat luas.
          </p>
          <p>
            Pendidikan bukan sekadar transfer ilmu, melainkan proses menanamkan nilai luhur dan karakter. Bersama jajaran guru yang berkompeten, kami siap membimbing putra-putri Anda menuju gerbang kesuksesan yang berlandaskan iman, ilmu, dan amal.
          </p>
          <p><em>Wassalamu’alaikum Warahmatullahi Wabarakatuh.</em></p>
        </div>
      </div>
    </section>

    <section class="section-info">
      <div class="container">
        <div class="section-header">
          <div>
            <span class="section-tag">Dinamika Sekolah</span>
            <h2>Berita & Pengumuman Terbaru</h2>
          </div>
          <router-link to="/berita" class="btn-link">Lihat Semua Berita &rarr;</router-link>
        </div>

        <div class="grid-3">
          <div v-for="info in sekilasInfo" :key="info.id" class="info-card">
            <div class="card-badge" :class="info.kategori.toLowerCase()">{{ info.kategori }}</div>
            <div class="card-image">
              <img :src="info.foto" :alt="info.judul" />
            </div>
            <div class="card-body">
              <span class="card-date">{{ info.tanggal }}</span>
              <h3>{{ info.judul }}</h3>
              <p>{{ info.ringkasan }}</p>
              <router-link :to="'/berita/' + info.id" class="read-more">Baca Selengkapnya</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'HomeView',
  setup() {
    // Data dummy untuk Sekilas Info sebelum dihubungkan ke Google Sheets API
    const sekilasInfo = ref([
      {
        id: 1,
        kategori: 'Pengumuman',
        tanggal: '25 Mei 2026',
        judul: 'Jadwal Penilaian Akhir Tahun (PAT) Semester Genap',
        ringkasan: 'Pelaksanaan PAT akan dimulai tanggal 2 Juni hingga 9 Juni 2026. Diharapkan seluruh siswa mempersiapkan diri...',
        foto: 'https://via.placeholder.com/400x250'
      },
      {
        id: 2,
        kategori: 'Berita',
        tanggal: '20 Mei 2026',
        judul: 'Siswa SDN Kota Jaya Raih Juara 1 FLS2N Tingkat Provinsi',
        ringkasan: 'Prestasi gemilang kembali ditorehkan oleh Ananda Naura dari kelas V dalam bidang seni tari tradisional pada ajang...',
        foto: 'https://via.placeholder.com/400x250'
      },
      {
        id: 3,
        kategori: 'PPDB',
        tanggal: '15 Mei 2026',
        judul: 'Alur & Kuota Pendaftaran Siswa Baru Tahun Ajaran 2026/2027',
        ringkasan: 'Penerimaan Peserta Didik Baru (PPDB) resmi dibuka. Simak syarat dokumen dan jalur zonasi yang berlaku tahun ini...',
        foto: 'https://via.placeholder.com/400x250'
      }
    ]);

    return {
      sekilasInfo
    };
  }
}
</script>

<style scoped>
/* --- STYLING DASAR & UTILITAS --- */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.grid-2 {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 50px;
  align-items: center;
}
.grid-3 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
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
.line-decor {
  width: 60px;
  height: 4px;
  background-color: #2563eb;
  border: none;
  margin: 15px 0 20px 0;
}

/* --- 1. HERO BANNER --- */
.hero-banner {
  position: relative;
  background-image: url('https://via.placeholder.com/1920x800'); /* Ganti dengan foto sekolah asli */
  background-size: cover;
  background-position: center;
  height: 80vh;
  display: flex;
  align-items: center;
  color: white;
}
.hero-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(to right, rgba(30, 58, 138, 0.9), rgba(30, 58, 138, 0.4));
}
.hero-content {
  position: relative;
  max-width: 800px;
  padding: 0 40px;
  z-index: 1;
}
.school-badge {
  background-color: #f59e0b;
  color: #1e3a8a;
  padding: 6px 12px;
  font-weight: bold;
  border-radius: 4px;
  font-size: 0.9rem;
}
.hero-content h1 {
  font-size: 3rem;
  margin: 20px 0;
  line-height: 1.2;
}
.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  opacity: 0.9;
}
.hero-buttons {
  display: flex;
  gap: 15px;
}
.btn-primary, .btn-secondary {
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: bold;
  text-decoration: none;
  transition: 0.3s;
}
.btn-primary {
  background-color: #2563eb;
  color: white;
}
.btn-primary:hover { background-color: #1d4ed8; }
.btn-secondary {
  background-color: white;
  color: #1e3a8a;
}
.btn-secondary:hover { background-color: #f3f4f6; }

/* --- 2. SAMBUTAN KEPALA SEKOLAH --- */
.section-sambutan {
  padding: 80px 0;
  background-color: #ffffff;
}
.kepsek-photo {
  text-align: center;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  background: #f3f4f6;
}
.kepsek-photo img {
  width: 100%;
  height: auto;
  display: block;
}
.kepsek-title {
  padding: 15px;
  background-color: #1e3a8a;
  color: white;
}
.kepsek-title h3 { margin: 0; font-size: 1.1rem; }
.kepsek-title p { margin: 5px 0 0 0; font-size: 0.85rem; opacity: 0.8; }
.kepsek-text h2 { color: #1e3a8a; font-size: 2rem; margin: 0; }
.kepsek-text p { color: #4b5563; line-height: 1.6; margin-bottom: 15px; }

/* --- 3. SEKILAS INFO / CARD --- */
.section-info {
  padding: 80px 0;
  background-color: #f8fafc;
}
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 40px;
}
.section-header h2 { color: #1e3a8a; margin: 0; font-size: 2rem; }
.btn-link {
  color: #2563eb;
  text-decoration: none;
  font-weight: bold;
}
.info-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  position: relative;
  transition: transform 0.3s;
}
.info-card:hover {
  transform: translateY(-5px);
}
.card-badge {
  position: absolute;
  top: 15px; left: 15px;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
  color: white;
}
.card-badge.pengumuman { background-color: #ef4444; }
.card-badge.berita { background-color: #10b981; }
.card-badge.ppdb { background-color: #f59e0b; }

.card-image img { width: 100%; height: 200px; object-fit: cover; }
.card-body { padding: 20px; }
.card-date { font-size: 0.85rem; color: #9ca3af; display: block; margin-bottom: 8px; }
.card-body h3 { font-size: 1.2rem; color: #1e3a8a; margin: 0 0 10px 0; line-height: 1.4; }
.card-body p { color: #4b5563; font-size: 0.95rem; line-height: 1.5; margin-bottom: 15px; }
.read-more { color: #2563eb; text-decoration: none; font-weight: bold; font-size: 0.9rem; }

/* RESPONSIVE DESIGN */
@media (max-width: 768px) {
  .grid-2 { grid-template-columns: 1fr; gap: 30px; }
  .hero-content h1 { font-size: 2rem; }
  .section-header { flex-direction: column; align-items: flex-start; gap: 10px; }
}
</style>