<template>
  <div class="ppdb-container">
    
    <!-- BACKGROUND MESH GLOW FLOATING BALLS -->
    <div class="mesh-background">
      <div class="glow-ball glow-yellow-1"></div>
      <div class="glow-ball glow-purple-1"></div>
      <div class="glow-ball glow-pink-1"></div>
      <div class="glow-ball glow-cyan-1"></div>
      <div class="glow-ball glow-yellow-2"></div>
    </div>

    <!-- --- 1. HERO SECTION --- -->
    <section class="ppdb-hero">
      <div class="container hero-content text-center">
        <div class="top-tag-pill">
          <span class="sparkle">✨</span> PENDAFTARAN SISWA BARU
        </div>
        <h1 class="hero-title">
          PPDB Online Tahun Ajaran <span class="gradient-text-vibrant">2026/2027</span>
        </h1>
        <p class="hero-subtitle">
          Bergabunglah bersama keluarga besar SD Negeri Pucung. Cerdas, Berkarakter, Berakhlak Mulia.
        </p>
      </div>
    </section>

    <!-- --- 2. KETENTUAN & KUOTA SECTION --- -->
    <section class="section-ppdb">
      <div class="container grid-2">
        
        <!-- Info Syarat (Kiri) -->
        <div class="info-syarat">
          <span class="sub-heading badge-cyan">KETENTUAN</span>
          <h2 class="section-heading">Syarat Pendaftaran</h2>
          <div class="heading-line-vibrant"></div>
          <p class="desc-text">Mohon perhatikan persyaratan calon peserta didik baru di bawah ini sebelum melakukan pendaftaran.</p>
          
          <ul class="syarat-list">
            <li>
              <div class="icon-bullet">✓</div> 
              <p>Berusia minimal 6 tahun pada tanggal 1 Juli 2026.</p>
            </li>
            <li>
              <div class="icon-bullet">✓</div> 
              <p>Mengisi Formulir Pendaftaran Online dengan data asli.</p>
            </li>
            <li>
              <div class="icon-bullet">✓</div> 
              <p>Menyiapkan Akta Kelahiran (Fotokopi & Asli saat verifikasi).</p>
            </li>
            <li>
              <div class="icon-bullet">✓</div> 
              <p>Menyiapkan Kartu Keluarga (KK) orang tua/wali.</p>
            </li>
            <li>
              <div class="icon-bullet">✓</div> 
              <p>Pas foto hitam putih/berwarna ukuran 3x4 (2 lembar).</p>
            </li>
          </ul>
        </div>

        <!-- Boks Kuota (Kanan) dengan Vibrant Gradient -->
        <div class="vibrant-card-wrapper kuota-grad">
          <div class="kuota-box-glass">
            <div class="kuota-header">DAYA TAMPUNG</div>
            <div class="kuota-body">
              <div class="kuota-number">28</div>
              <p>Siswa Baru</p>
              <div class="rombel-tag-glass">1 Rombongan Belajar</div>
            </div>
          </div>
        </div>

      </div>
    </section>
      
    <!-- --- 3. ALUR PENDAFTARAN DARING --- -->
    <section class="section-ppdb">
      <div class="container">
        <div class="section-title-center text-center">
          <span class="sub-heading badge-purple">PANDUAN</span>
          <h2 class="section-heading">Alur Pendaftaran Daring</h2>
          <div class="heading-line-vibrant center"></div>
        </div>

        <div class="grid-alur">
          <div class="alur-card-glass" v-for="alur in alurPendaftaran" :key="alur.no">
            <div class="alur-number-vibrant">{{ alur.no }}</div>
            <h3>{{ alur.judul }}</h3>
            <p>{{ alur.deskripsi }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- --- 4. FORMULIR PENDAFTARAN ELEKTRONIK --- -->
    <section class="section-ppdb" id="form-pendaftaran">
      <div class="container form-wrapper">
        <div class="text-center-heading text-center">
          <span class="sub-heading badge-pink">FORM ELEKTRONIK</span>
          <h2 class="section-heading">Isi Formulir Calon Siswa</h2>
          <div class="heading-line-vibrant center"></div>
          <p class="subtitle form-desc">Pastikan data yang Anda masukkan sesuai dengan dokumen resmi (KK / Akta Lahir).</p>
        </div>

        <!-- Formulir dengan Gaya Glassmorphism -->
        <form @submit.prevent="submitForm" class="form-ppdb-glass">
          <div class="form-group">
            <label>Nama Lengkap Anak</label>
            <input type="text" v-model="form.nama_lengkap" required placeholder="Contoh: Muhammad Rafli" />
          </div>

          <div class="form-group">
            <label>NIK Anak (Sesuai Kartu Keluarga)</label>
            <input type="text" v-model="form.nik" required placeholder="Contoh: 3311XXXXXXXXXXXX" maxlength="16" />
          </div>

          <div class="form-group">
            <label>Nama Lengkap Orang Tua / Wali</label>
            <input type="text" v-model="form.nama_orang_tua" required placeholder="Contoh: Heri Setiawan" />
          </div>

          <div class="form-group">
            <label>Nomor WhatsApp Aktif</label>
            <input type="tel" v-model="form.nomor_whatsapp" required placeholder="Contoh: 08123456789" />
          </div>

          <div class="form-group">
            <label>Asal Sekolah (TK / RA)</label>
            <input type="text" v-model="form.asal_tk" required placeholder="Contoh: TK Pembina Kota Jaya" />
          </div>

          <button type="submit" :disabled="submitting" class="btn-submit-vibrant">
            <span>{{ submitting ? '⚡ Sedang Mengirim...' : 'Kirim Pendaftaran Online ➔' }}</span>
          </button>
        </form>
      </div>
    </section>

  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'PPDBView',
  setup() {
    // Ganti dengan URL Web App Google Apps Script Anda yang valid
    const API_URL = "https://script.google.com/macros/s/XXXXXXXXXXXXXX/exec";

    const form = ref({
      nama_lengkap: '',
      nik: '',
      nama_orang_tua: '',
      nomor_whatsapp: '',
      asal_tk: ''
    });
    
    const submitting = ref(false);

    const alurPendaftaran = ref([
      { no: 1, judul: 'Kunjungi Laman', deskripsi: 'Isi data calon siswa secara lengkap pada formulir online di halaman ini.' },
      { no: 2, judul: 'Konfirmasi', deskripsi: 'Simpan atau screenshot notifikasi berhasil sebagai bukti pendaftaran awal.' },
      { no: 3, judul: 'Verifikasi Berkas', deskripsi: 'Bawa dokumen fisik (KK, Akta, Foto) ke sekolah sesuai jadwal yang ditentukan.' },
      { no: 4, judul: 'Pengumuman', deskripsi: 'Pantau hasil seleksi melalui papan pengumuman sekolah atau WhatsApp.' }
    ]);

    const submitForm = async () => {
      submitting.value = true;
      try {
        await fetch(API_URL, {
          method: 'POST',
          mode: 'no-cors', // Penting untuk cross-domain request ke GAS
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form.value)
        });

        alert("Pendaftaran PPDB Berhasil Terkirim!\nData Anda sedang diproses. Panitia akan menghubungi Anda melalui WhatsApp untuk tahap verifikasi berkas.");
        
        // Reset formulir setelah berhasil
        form.value = {
          nama_lengkap: '',
          nik: '',
          nama_orang_tua: '',
          nomor_whatsapp: '',
          asal_tk: ''
        };
      } catch (error) {
        console.error("Error pendaftaran:", error);
        alert("Maaf, terjadi gangguan sistem saat mengirim data. Silakan coba beberapa saat lagi atau hubungi kontak sekolah.");
      } finally {
        submitting.value = false;
      }
    };

    return {
      form,
      submitting,
      submitForm,
      alurPendaftaran
    };
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

/* --- LAYOUT UTAMA & MESH BACKGROUND --- */
.ppdb-container {
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: #1e293b;
  position: relative;
  background: #f8fafc;
  overflow-x: hidden;
  min-height: 100vh;
}

/* Background Glowing Balls (Khas gaya baru) */
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

.glow-yellow-1 { width: 450px; height: 450px; background: #ffb703; top: 2%; right: -5%; }
.glow-purple-1 { width: 500px; height: 500px; background: #a855f7; top: 20%; left: -10%; }
.glow-pink-1 { width: 400px; height: 400px; background: #ec4899; top: 50%; right: -8%; }
.glow-cyan-1 { width: 450px; height: 450px; background: #06b6d4; top: 75%; left: -5%; }
.glow-yellow-2 { width: 400px; height: 400px; background: #fbbf24; bottom: 2%; right: 10%; }

.container { max-width: 1140px; margin: 0 auto; padding: 0 20px; position: relative; z-index: 2; }
.section-ppdb { padding: 80px 0; }
.grid-2 { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 60px; align-items: center; }

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
.badge-purple { background: #f3e8ff; color: #6b21a8; }
.badge-pink { background: #fce7f3; color: #9d174d; }

.section-heading {
  font-size: 2.3rem;
  font-weight: 800;
  color: #0f172a;
  line-height: 1.3;
}

.heading-line-vibrant {
  width: 80px;
  height: 5px;
  background: linear-gradient(90deg, #ffb703, #ec4899, #8b5cf6, #06b6d4);
  border-radius: 10px;
  margin: 15px 0 25px 0;
}
.heading-line-vibrant.center { margin: 15px auto 25px auto; }

.gradient-text-vibrant {
  background: linear-gradient(135deg, #ffb703 0%, #ec4899 50%, #8b5cf6 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle { color: #475569; max-width: 600px; margin: 12px auto 0 auto; font-size: 1rem; }

/* --- HERO PPDB --- */
.ppdb-hero {
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

.hero-title { font-size: 3.4rem; font-weight: 800; color: #0f172a; margin-bottom: 15px; }

.hero-subtitle {
  font-size: 1.15rem;
  color: #475569;
  max-width: 600px;
  margin: 0 auto;
}

/* --- INFO SYARAT & BOX KUOTA GLASS --- */
.info-syarat .desc-text { color: #475569; margin-bottom: 30px; font-size: 1.05rem; }

.syarat-list { list-style: none; padding: 0; }
.syarat-list li { margin-bottom: 18px; display: flex; align-items: center; gap: 16px; }
.syarat-list li p { color: #334155; font-size: 1.05rem; font-weight: 600; margin: 0; }

.icon-bullet {
  background: linear-gradient(135deg, #a855f7 0%, #06b6d4 100%);
  color: #ffffff;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  border-radius: 8px;
  font-size: 0.9rem;
  flex-shrink: 0;
  box-shadow: 0 4px 10px rgba(168, 85, 247, 0.25);
}

/* Kotak Daya Tampung / Kuota Glassmorphism */
.vibrant-card-wrapper {
  padding: 4px;
  border-radius: 32px;
  transition: transform 0.3s ease;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}

.kuota-grad { background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%); }

.vibrant-card-wrapper:hover { transform: translateY(-5px); }

.kuota-box-glass {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  border-radius: 28px;
  overflow: hidden;
  text-align: center;
}

.kuota-header {
  background: rgba(255, 255, 255, 0.5);
  padding: 16px;
  font-weight: 800;
  font-size: 1rem;
  color: #0f172a;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.kuota-body { padding: 40px 20px; }

.kuota-number {
  font-size: 6rem;
  font-weight: 900;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
  margin-bottom: 5px;
}

.kuota-body p { font-size: 1.5rem; font-weight: 800; color: #1e293b; margin: 0 0 15px 0; text-transform: uppercase; }

.rombel-tag-glass {
  font-size: 0.9rem;
  font-weight: 700;
  color: #475569;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  padding: 8px 20px;
  border-radius: 99px;
  display: inline-block;
}

/* --- CARDS ALUR PENDAFTARAN GLASS --- */
.grid-alur { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; }

.alur-card-glass {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  padding: 40px 30px;
  border: 1px solid rgba(255, 255, 255, 0.9);
  border-radius: 24px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  position: relative;
  transition: all 0.3s ease;
}

.alur-card-glass:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  background: #ffffff;
}

.alur-number-vibrant {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  margin: 0 auto 25px auto;
  font-size: 1.4rem;
  box-shadow: 0 8px 20px rgba(168, 85, 247, 0.3);
}

.alur-card-glass h3 { color: #0f172a; font-size: 1.3rem; margin: 0 0 12px 0; font-weight: 800; }
.alur-card-glass p { color: #475569; font-size: 0.95rem; line-height: 1.6; margin: 0; }

/* --- ELEMEN FORMULIR GLASS --- */
.form-wrapper { max-width: 750px; }
.form-desc { margin-bottom: 30px; }

.form-ppdb-glass {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  padding: 50px;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.9);
  display: grid;
  gap: 25px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.05);
}

.form-group { display: flex; flex-direction: column; }

.form-group label {
  margin-bottom: 10px;
  font-weight: 700;
  color: #1e293b;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  padding-left: 5px;
}

.form-group input {
  padding: 16px 20px;
  border: 1px solid #e2e8f0;
  background: #ffffff;
  border-radius: 14px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1rem;
  color: #0f172a;
  transition: all 0.3s;
}

.form-group input:focus {
  outline: none;
  border-color: #a855f7;
  box-shadow: 0 0 0 4px rgba(168, 85, 247, 0.1);
}

/* Tombol Submit Vibrant */
.btn-submit-vibrant {
  background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
  color: #ffffff;
  padding: 18px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  font-weight: 800;
  font-size: 1.1rem;
  box-shadow: 0 10px 25px rgba(168, 85, 247, 0.3);
  margin-top: 15px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-submit-vibrant:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 30px rgba(168, 85, 247, 0.4);
  opacity: 0.9;
}

.btn-submit-vibrant:disabled {
  background: #cbd5e1;
  color: #64748b;
  cursor: not-allowed;
  box-shadow: none;
  transform: none;
  opacity: 1;
}

/* --- RESPONSIVE BREAKPOINTS --- */
@media (max-width: 992px) {
  .ppdb-hero h1 { font-size: 2.6rem; }
  .grid-2 { grid-template-columns: 1fr; gap: 50px; }
  .kuota-box-glass { max-width: 450px; margin: 0 auto; width: 100%; }
}

@media (max-width: 768px) {
  .section-ppdb { padding: 60px 0; }
  .ppdb-hero h1 { font-size: 2.2rem; }
  .section-heading { font-size: 1.8rem; }
  .form-ppdb-glass { padding: 30px 20px; }
  .grid-alur { grid-template-columns: 1fr; }
}
</style>