<template>
  <div class="profil-container">
    
    <!-- BACKGROUND MESH GLOW FLOATING BALLS -->
    <div class="mesh-background">
      <div class="glow-ball glow-yellow-1"></div>
      <div class="glow-ball glow-purple-1"></div>
      <div class="glow-ball glow-pink-1"></div>
      <div class="glow-ball glow-cyan-1"></div>
      <div class="glow-ball glow-yellow-2"></div>
    </div>

    <!-- SECTION 1: HERO PROFILE -->
    <section class="profil-hero">
      <div class="container hero-content text-center">
        <div class="top-tag-pill">
          <span class="sparkle">✨</span> TENTANG KAMI
        </div>
        <h1 class="hero-title">
          Profil <span class="gradient-text-vibrant">Sekolah</span>
        </h1>
        <p class="hero-subtitle">
          Kenali lebih dekat sejarah, visi misi, dan lingkungan belajar SD Negeri Pucung.
        </p>
      </div>
    </section>

    <!-- MINI NAVIGATION TABS (Glass Rainbow Accent) -->
    <div class="profile-nav-wrapper">
      <div class="profile-nav">
        <a href="#sambutan">Sambutan</a>
        <a href="#sejarah">Sejarah</a>
        <a href="#visimisi">Visi & Misi</a>
        <a href="#struktur">Struktur</a>
        <a href="#fasilitas">Fasilitas</a>
      </div>
    </div>

    <!-- SEKSI 1: Sambutan Kepala Sekolah -->
    <section id="sambutan" class="section-profil">
      <div class="container grid-2">
        
        <!-- Sisi Kiri: Foto Kepala Sekolah dengan Gradient Card Modern -->
        <div class="kepsek-photo-wrapper">
          <div class="vibrant-card-wrapper yellow-purple-grad">
            <div class="glass-photo-card">
              <img src="/images/ks.jpg" alt="Foto Kepala Sekolah" class="kepsek-img" />
              <div class="kepsek-label">
                <h3>Suyatmiyatun, S.Pd</h3>
                <p>Kepala Sekolah SD Negeri Pucung</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Sisi Kanan: Teks Sambutan -->
        <div class="kepsek-text">
          <span class="sub-heading badge-cyan">SAMBUTAN PIMPINAN</span>
          <h2 class="section-heading">Membangun Masa Depan Lewat Pendidikan Berkualitas</h2>
          <div class="heading-line-vibrant"></div>
          
          <p class="greeting-highlight"><em>Assalamu’alaikum Warahmatullahi Wabarakatuh,</em></p>
          <p>
            Puji syukur kita panjatkan kehadirat Allah SWT atas terwujudnya website resmi SD Negeri Pucung. Di era digital ini, kami berkomitmen untuk menyediakan wadah informasi yang transparan, akuntabel, dan mudah diakses oleh seluruh wali murid, siswa, dan masyarakat luas.
          </p>
          <p>
            Pendidikan bukan sekadar transfer ilmu, melainkan proses menanamkan nilai luhur dan karakter. Bersama jajaran guru yang berkompeten, kami siap membimbing putra-putri Anda menuju gerbang kesuksesan yang berlandaskan iman, ilmu, dan amal.
          </p>
          <p class="greeting-highlight"><em>Wassalamu’alaikum Warahmatullahi Wabarakatuh.</em></p>
        </div>

      </div>
    </section>

    <!-- SEKSI 2: Sejarah Singkat -->
    <section id="sejarah" class="section-profil">
      <div class="container grid-2 reverse-mobile">
        
        <div class="sejarah-text">
          <span class="sub-heading badge-pink">ASAL USUL</span>
          <h2 class="section-heading">Sejarah Singkat Sekolah</h2>
          <div class="heading-line-vibrant"></div>
          
          <p>
            SD Negeri Pucung didirikan di atas tanah kelurahan seluas 4.000 meter persegi. Pada awal berdirinya, sekolah ini hanya memiliki bangunan depan dengan fasilitas yang sangat terbatas.
          </p>
          <p>
            Seiring berjalannya waktu dan meningkatnya kepercayaan masyarakat, pada tahun 2008 sekolah ini mengalami renovasi besar-besaran dari pemerintah. Kini, SD Negeri Pucung telah berkembang menjadi salah satu sekolah pilihan masyarakat dengan kurikulum berbasis karakter, lingkungan, dan digitalisasi pembelajaran.
          </p>
        </div>

        <!-- Sisi Kanan: Foto Sejarah Card -->
        <div class="sejarah-photo-wrapper">
          <div class="vibrant-card-wrapper cyan-blue-grad">
            <div class="glass-photo-card">
              <img src="/images/profil_sejarah.jpg" alt="Foto Sejarah SD Negeri Pucung" class="sejarah-img" />
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- SEKSI 3: Visi & Misi -->
    <section id="visimisi" class="section-profil">
      <div class="container">
        <div class="section-title-center">
          <span class="sub-heading badge-purple">ARAH & TUJUAN</span>
          <h2 class="section-heading">Visi dan Misi</h2>
          <div class="heading-line-vibrant center"></div>
        </div>
        
        <div class="visimisi-grid">
          <!-- VISI CARD -->
          <div class="vibrant-card-wrapper card-visi-grad">
            <div class="visi-card-glass">
              <div class="card-badge btn-yellow-glow">VISI</div>
              <p class="visi-text">
                "Terwujudnya insan religius, unggul dalam prestasi, berkarakter, dan berwawasan global"
              </p>
            </div>
          </div>

          <!-- MISI CARD -->
          <div class="vibrant-card-wrapper card-misi-grad">
            <div class="misi-card-glass">
              <div class="card-badge btn-purple-glow">MISI</div>
              <ol class="misi-list">
                <li>Merancang kegiatan keagamaan di sekolah melalui kegiatan rutin dan penerapan pembelajaran keagamaan.</li>
                <li>Merancang pembelajaran yang berdiferensiasi, menarik, dan menyenangkan yang mampu memotivasi peserta didik.</li>
                <li>Menyelenggarakan Pembelajaran Aktif, Inovatif, Kreatif, Efektif, dan Menyenangkan.</li>
                <li>Membangun lingkungan sekolah yang bertoleransi dalam kebhinekaan global, mencintai budaya lokal, dan menjunjung nilai gotong royong.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SEKSI 4: Struktur Organisasi -->
    <section id="struktur" class="section-profil">
      <div class="container">
        <div class="section-title-center">
          <span class="sub-heading badge-yellow">MANAJEMEN</span>
          <h2 class="section-heading">Struktur Organisasi</h2>
          <div class="heading-line-vibrant center"></div>
          <p class="subtitle">Bagan garis kepemimpinan dan pembagian tugas kerja di SD Negeri Pucung</p>
        </div>
        
        <div class="bagan-organisasi-wrapper text-center">
          <div class="vibrant-card-wrapper bagan-grad">
            <div class="bagan-card-glass">
              <img src="https://via.placeholder.com/900x500" alt="Bagan Struktur Organisasi Sekolah" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SEKSI 5: Fasilitas -->
    <section id="fasilitas" class="section-profil">
      <div class="container">
        <div class="section-title-center">
          <span class="sub-heading badge-cyan">LINGKUNGAN BELAJAR</span>
          <h2 class="section-heading">Fasilitas Sekolah</h2>
          <div class="heading-line-vibrant center"></div>
          <p class="subtitle">Sarana pendukung kenyamanan belajar dan perkembangan potensi siswa.</p>
        </div>

        <div class="grid-fasilitas">
          <div 
            class="fasilitas-card-glass" 
            v-for="(fasi, idx) in daftarFasilitas" 
            :key="fasi.nama"
            :class="'card-border-gradient-' + (idx % 3)"
          >
            <div class="fasilitas-img-wrapper">
              <img :src="fasi.foto" :alt="fasi.nama" class="fasilitas-img" />
            </div>

            <div class="fasilitas-info">
              <h3>{{ fasi.nama }}</h3>
              <p>{{ fasi.deskripsi }}</p>
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
  name: 'ProfilView',
  setup() {
    const daftarFasilitas = ref([
      {
        nama: 'Ruang Kelas Representatif',
        deskripsi: '6 Ruang kelas yang nyaman, dilengkapi dengan proyektor LCD, papan tulis ganda, serta sirkulasi udara yang baik.',
        foto: 'https://via.placeholder.com/400x250'
      },
      {
        nama: 'Laboratorium Komputer',
        deskripsi: 'Laboratorium modern dengan 30 unit komputer terkoneksi internet untuk menunjang ujian berbasis komputer dan literasi digital.',
        foto: 'https://via.placeholder.com/400x250'
      },
      {
        nama: 'Perpustakaan',
        deskripsi: 'Menyediakan ribuan koleksi buku fisik dan e-book dengan area baca santai.',
        foto: 'https://via.placeholder.com/400x250'
      },
      {
        nama: 'Lapangan Olahraga & Halaman',
        deskripsi: 'Area lapangan luas multifungsi untuk kegiatan upacara bendera, olahraga, dan latihan pramuka.',
        foto: 'https://via.placeholder.com/400x250'
      },
      {
        nama: 'Unit Kesehatan Sekolah (UKS)',
        deskripsi: 'Fasilitas kesehatan pertama siswa yang lengkap dengan obat-obatan dasar dan tempat tidur.',
        foto: 'https://via.placeholder.com/400x250'
      },
      {
        nama: 'Mushola Sekolah',
        deskripsi: 'Sarana ibadah bersama yang bersih dan nyaman guna mendukung pembiasaan ibadah.',
        foto: 'https://via.placeholder.com/400x250'
      }
    ]);

    return {
      daftarFasilitas
    };
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

/* --- LAYOUT UTAMA & VIBRANT MESH BACKGROUND --- */
.profil-container {
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: #1e293b;
  position: relative;
  background: #f8fafc;
  overflow-x: hidden;
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
  top: 15%;
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
  gap: 60px;
  align-items: center;
}

.section-profil {
  padding: 80px 0;
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

/* Garis Gradien Warna-warni */
.heading-line-vibrant {
  width: 80px;
  height: 5px;
  background: linear-gradient(90deg, #ffb703, #ec4899, #8b5cf6, #06b6d4);
  border-radius: 10px;
  margin: 15px 0 25px 0;
}
.heading-line-vibrant.center {
  margin: 15px auto 0 auto;
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

/* --- HERO PROFILE SECTION --- */
.profil-hero {
  position: relative;
  padding: 120px 0 60px 0;
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

/* --- STICKY NAV TABS (PERBAIKAN SINTAKS DENGAN BORDER-TOP DAN BORDER-BOTTOM) --- */
.profile-nav-wrapper {
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  position: sticky;
  top: 0;
  z-index: 99;
}
.profile-nav {
  display: flex;
  justify-content: center;
  gap: 10px;
  max-width: 900px;
  margin: 0 auto;
}
.profile-nav a {
  color: #475569;
  text-decoration: none;
  padding: 18px 22px;
  font-weight: 700;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  border-bottom: 3px solid transparent;
}
.profile-nav a:hover {
  color: #ec4899;
  border-bottom-color: #ec4899;
}

/* --- VIBRANT GRADIENT CARD WRAPPERS --- */
.vibrant-card-wrapper {
  padding: 4px;
  border-radius: 32px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
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
.card-visi-grad {
  background: linear-gradient(135deg, #ffc800 0%, #f97316 100%);
}
.card-misi-grad {
  background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
}
.bagan-grad {
  background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
}

.glass-photo-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 28px;
  padding: 15px;
  overflow: hidden;
}

.kepsek-img, .sejarah-img {
  width: 100%;
  border-radius: 22px;
  object-fit: cover;
  display: block;
}

.kepsek-label {
  margin-top: 15px;
  text-align: center;
  padding: 10px;
}
.kepsek-label h3 {
  font-size: 1.25rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 4px;
}
.kepsek-label p {
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 700;
}

.greeting-highlight {
  font-size: 1.05rem;
  font-weight: 700;
  color: #6366f1;
}
.kepsek-text p, .sejarah-text p {
  color: #334155;
  line-height: 1.7;
  margin-bottom: 15px;
  font-size: 1rem;
}

/* --- VISI & MISI GLASS CARDS --- */
.visimisi-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 35px;
  margin-top: 20px;
}

.visi-card-glass, .misi-card-glass {
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(20px);
  border-radius: 28px;
  padding: 35px;
  height: 100%;
  box-sizing: border-box;
}

.card-badge {
  display: inline-block;
  font-weight: 800;
  font-size: 0.85rem;
  padding: 8px 20px;
  border-radius: 99px;
  letter-spacing: 1px;
  margin-bottom: 20px;
}

.btn-yellow-glow {
  background: #ffc800;
  color: #0f172a;
  box-shadow: 0 8px 20px rgba(255, 200, 0, 0.4);
}
.btn-purple-glow {
  background: #a855f7;
  color: #ffffff;
  box-shadow: 0 8px 20px rgba(168, 85, 247, 0.4);
}

.visi-text {
  font-size: 1.35rem;
  font-weight: 800;
  color: #0f172a;
  line-height: 1.6;
  font-style: italic;
}

.misi-list {
  padding-left: 20px;
  margin: 0;
}
.misi-list li {
  color: #334155;
  line-height: 1.65;
  margin-bottom: 12px;
  font-size: 0.95rem;
  font-weight: 500;
}

/* --- STRUKTUR BAGAN --- */
.bagan-card-glass {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 28px;
  padding: 20px;
  display: inline-block;
  max-width: 100%;
}
.img-fluid {
  max-width: 100%;
  height: auto;
  border-radius: 16px;
}

/* --- FASILITAS GRID --- */
.grid-fasilitas {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 40px;
}

.fasilitas-card-glass {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.card-border-gradient-0 { border-color: rgba(255, 200, 0, 0.5); }
.card-border-gradient-1 { border-color: rgba(236, 72, 153, 0.5); }
.card-border-gradient-2 { border-color: rgba(6, 182, 212, 0.5); }

.fasilitas-card-glass:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  background: #ffffff;
}

.fasilitas-img-wrapper {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background-color: #e2e8f0;
}
.fasilitas-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fasilitas-info {
  padding: 22px;
}
.fasilitas-info h3 {
  font-size: 1.15rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 8px;
}
.fasilitas-info p {
  font-size: 0.9rem;
  color: #475569;
  line-height: 1.5;
}

/* --- RESPONSIF HP & TABLET --- */
@media (max-width: 992px) {
  .grid-2, .visimisi-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .reverse-mobile {
    display: flex;
    flex-direction: column-reverse;
  }
  .grid-fasilitas {
    grid-template-columns: repeat(2, 1fr);
  }
  .hero-title { font-size: 2.5rem; }
  .section-heading { font-size: 1.8rem; }
}

@media (max-width: 640px) {
  .grid-fasilitas {
    grid-template-columns: 1fr;
  }
  .profile-nav-wrapper {
    overflow-x: auto;
  }
  .profile-nav {
    justify-content: flex-start;
    padding: 0 10px;
  }
}
</style>