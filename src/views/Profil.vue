<template>
  <div class="profil-container">
    <section class="profil-hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>Profil Sekolah</h1>
        <p>Kenali lebih dekat sejarah, visi misi, dan lingkungan belajar SD Negeri Kota Jaya</p>
      </div>
    </section>

    <div class="profile-nav">
      <a href="#sejarah">Sejarah</a>
      <a href="#visimisi">Visi & Misi</a>
      <a href="#struktur">Struktur Organisasi</a>
      <a href="#fasilitas">Fasilitas</a>
    </div>

    <section id="sejarah" class="section-profil white-bg">
      <div class="container grid-2">
        <div class="sejarah-text">
          <span class="section-tag">Asal Usul</span>
          <h2>Sejarah Singkat Sekolah</h2>
          <hr class="line-decor" />
          <p>
            SD Negeri Kota Jaya didirikan pada tahun 1985 di atas tanah hibah masyarakat seluas 4.000 meter persegi. Pada awal berdirinya, sekolah ini hanya memiliki 3 ruang kelas dengan fasilitas yang sangat terbatas.
          </p>
          <p>
            Seiring berjalannya waktu dan meningkatnya kepercayaan masyarakat, pada tahun 2010 sekolah ini mengalami renovasi besar-besaran dari pemerintah. Kini, SD Negeri Kota Jaya telah berkembang menjadi salah satu sekolah dasar model dan percontohan dalam penerapan kurikulum berbasis karakter dan digitalisasi pembelajaran di tingkat daerah.
          </p>
        </div>
        <div class="sejarah-image">
          <img src="/images/profil_sejarah.jpg" alt="Gedung Sekolah Tempo Dulu/Sekarang" />
        </div>
      </div>
    </section>

    <section id="visimisi" class="section-profil gray-bg">
      <div class="container text-center">
        <span class="section-tag">Arah & Tujuan</span>
        <h2>Visi dan Misi</h2>
        <hr class="line-decor mx-auto" />
        
        <div class="visi-box">
          <h3>VISI</h3>
          <p class="visi-text">"Terwujudnya insan religius, unggul dalam prestasi, berkarakter, dan berwawasan global"</p>
        </div>

        <div class="misi-container">
          <h3>MISI</h3>
          <ol class="misi-list">
            <li>Merancang kegiatan keagamaan di sekolah melalui kegiatan rutin dan penerapan pembelajaran keagamaan di sekolah.</li>
            <li>Merancang pembelajaran yang berdiferensiasi, menarik dan menyenangkan yang mampu memotivasi peserta didik untuk selalu belajar dan menemukan pembelajaran.</li>
            <li>Menyelenggarakan	 Pembelajaran	Aktif,	Inovatif, Kreatif,	Efektif,	dan Menyenangkan.</li>
            <li>Membangun lingkungan sekolah yang bertoleransi dalam kebhinekaan global, mencintai budaya lokal dan menjunjung nilai gotong royong.</li>
            </ol>
        </div>
      </div>
    </section>

    <section id="struktur" class="section-profil white-bg">
      <div class="container text-center">
        <span class="section-tag">Manajemen</span>
        <h2>Struktur Organisasi</h2>
        <hr class="line-decor mx-auto" />
        <p class="subtitle">Bagan garis kepemimpinan dan pembagian tugas kerja di SD Negeri Pucung</p>
        
        <div class="bagan-organisasi">
          <img src="https://via.placeholder.com/900x500" alt="Bagan Struktur Organisasi Sekolah" class="img-fluid" />
        </div>
      </div>
    </section>

    <section id="fasilitas" class="section-profil gray-bg">
      <div class="container">
        <div class="text-center">
          <span class="section-tag">Lingkungan Belajar</span>
          <h2>Fasilitas Sekolah</h2>
          <hr class="line-decor mx-auto" />
          <p class="subtitle">Sarana pendukung kenyamanan belajar dan perkembangan potensi siswa.</p>
        </div>

        <div class="grid-fasilitas">
          <div class="fasilitas-card" v-for="fasi in daftarFasilitas" :key="fasi.nama">
            <div class="fasilitas-img">
              <img :src="fasi.foto" :alt="fasi.nama" />
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
    // Data dummy untuk fasilitas sekolah
    const daftarFasilitas = ref([
      {
        nama: 'Ruang Kelas Representatif',
        deskripsi: '6 Ruang kelas yang nyaman, dilengkapi dengan proyektor LCD, papan tulis ganda, serta sirkulasi udara yang baik.',
        foto: 'https://via.placeholder.com/400x250'
      },
      {
        nama: 'Laboratorium Komputer',
        deskripsi: 'Laboratorium modern dengan 30 unit komputer terkoneksi internet untuk menunjang ujian berbasis komputer (TKA/D) dan literasi digital.',
        foto: 'https://via.placeholder.com/400x250'
      },
      {
        nama: 'Perpustakaan',
        deskripsi: 'Menyediakan ribuan koleksi buku fisik dan e-book.',
        foto: 'https://via.placeholder.com/400x250'
      },
      {
        nama: 'Lapangan Olahraga dan halaman yang luas',
        deskripsi: 'Area lapangan luas multifungsi untuk kegiatan upacara bendera sepakbola, voli, dan latihan pramuka.',
        foto: 'https://via.placeholder.com/400x250'
      },
      {
        nama: 'Unit Kesehatan Sekolah (UKS)',
        deskripsi: 'Fasilitas kesehatan pertama siswa yang lengkap dengan obat-obatan dasar, tempat tidur, dan didampingi tenaga medis berkala.',
        foto: 'https://via.placeholder.com/400x250'
      },
      {
        nama: 'Mushola Sekolah',
        deskripsi: 'Sarana ibadah bersama yang bersih dan nyaman guna mendukung pembiasaan salat berjamaah dan pendidikan karakter religi.',
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
/* --- STYLING UTAMA & LAYOUT --- */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.text-center { text-align: center; }
.mx-auto { margin-left: auto; margin-right: auto; }
.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}
.section-profil {
  padding: 80px 0;
}
.white-bg { background-color: #ffffff; }
.gray-bg { background-color: #f8fafc; }

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
  width: 50px;
  height: 4px;
  background-color: #2563eb;
  border: none;
  margin: 15px 0 25px 0;
}
.subtitle {
  color: #6b7280;
  max-width: 600px;
  margin: -10px auto 40px auto;
}

/* --- HERO PROFILE --- */
.profil-hero {
  position: relative;
  background-image: url('https://via.placeholder.com/1920x400');
  background-size: cover;
  background-position: center;
  height: 40vh;
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
.hero-content {
  position: relative;
  z-index: 1;
  padding: 0 20px;
}
.hero-content h1 { font-size: 2.8rem; margin: 0 0 10px 0; }
.hero-content p { font-size: 1.1rem; opacity: 0.9; }

/* --- MINI NAVIGATION TABS --- */
.profile-nav {
  display: flex;
  justify-content: center;
  background-color: #1e3a8a;
  sticky: top;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
}
.profile-nav a {
  color: white;
  text-decoration: none;
  padding: 15px 25px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: 0.3s;
}
.profile-nav a:hover {
  background-color: #2563eb;
}

/* --- SEJARAH --- */
.sejarah-text h2 { color: #1e3a8a; font-size: 2rem; margin: 0; }
.sejarah-text p { color: #4b5563; line-height: 1.7; margin-bottom: 15px; }
.sejarah-image img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

/* --- VISI & MISI --- */
#visimisi h2 { color: #1e3a8a; font-size: 2rem; margin: 0; }
.visi-box {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  max-width: 800px;
  margin: 0 auto 40px auto;
  border-left: 5px solid #f59e0b;
}
.visi-box h3 { color: #f59e0b; margin: 0 0 10px 0; font-size: 1.4rem; letter-spacing: 1px; }
.visi-text { font-size: 1.25rem; font-style: italic; color: #1f2937; line-height: 1.5; }

.misi-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}
.misi-container h3 { color: #1e3a8a; font-size: 1.4rem; text-align: center; margin-top: 0; margin-bottom: 20px; letter-spacing: 1px;}
.misi-list { padding-left: 20px; }
.misi-list li { margin-bottom: 12px; color: #4b5563; line-height: 1.6; font-size: 1.05rem; }

/* --- STRUKTUR --- */
#struktur h2 { color: #1e3a8a; font-size: 2rem; margin: 0; }
.bagan-organisasi {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  display: inline-block;
  max-width: 100%;
}
.img-fluid { max-width: 100%; height: auto; }

/* --- FASILITAS --- */
#fasilitas h2 { color: #1e3a8a; font-size: 2rem; margin: 0; }
.grid-fasilitas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}
.fasilitas-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: 0.3s;
}
.fasilitas-card:hover { transform: translateY(-5px); }
.fasilitas-img img { width: 100%; height: 200px; object-fit: cover; }
.fasilitas-info { padding: 20px; }
.fasilitas-info h3 { margin: 0 0 10px 0; color: #1e3a8a; font-size: 1.2rem; }
.fasilitas-info p { margin: 0; color: #6b7280; font-size: 0.95rem; line-height: 1.5; }

/* RESPONSIVE DESIGN */
@media (max-width: 768px) {
  .grid-2 { grid-template-columns: 1fr; gap: 30px; }
  .profile-nav { overflow-x: auto; justify-content: flex-start; }
  .profile-nav a { padding: 12px 15px; font-size: 0.85rem; flex-shrink: 0; }
  .hero-content h1 { font-size: 2rem; }
  .misi-container { padding: 20px; }
}
</style>