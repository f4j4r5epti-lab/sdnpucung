<template>
  <div class="ppdb-container">
    
    <!-- --- 1. HERO SECTION (Kuning Memphis & Ornamen Geometris) --- -->
    <section class="ppdb-hero">
      <div class="hero-content">
        <span class="top-tag">PENDAFTARAN SISWA BARU</span>
        <h1>PPDB Online Tahun Ajaran 2026/2027</h1>
        <p>Bergabunglah bersama keluarga besar SD Negeri Pucung. Cerdas, Berkarakter, Berakhlak Mulia.</p>
      </div>
      <!-- Ornamen Gaya Memphis -->
      <div class="hero-shape shape-circle"></div>
      <div class="hero-shape shape-triangle">▲</div>
      <div class="hero-shape shape-zigzag">⚡</div>
    </section>

    <!-- --- 2. KETENTUAN & KUOTA SECTION --- -->
    <section class="section-ppdb krem-bg">
      <div class="container grid-2">
        <div class="info-syarat">
          <span class="section-tag">Ketentuan</span>
          <h2>Syarat Pendaftaran</h2>
          <p>Mohon perhatikan persyaratan calon peserta didik baru di bawah ini sebelum melakukan pendaftaran di spmb.slemankab.go.id</p>
          
          <ul class="syarat-list">
            <li><span class="bullet-box">✓</span> Berusia minimal 6 tahun pada tanggal 1 Juli 2026.</li>
            <li><span class="bullet-box">✓</span> Mengisi Formulir Pendaftaran Online dengan data asli.</li>
            <li><span class="bullet-box">✓</span> Menyiapkan Akta Kelahiran (Fotokopi & Asli saat verifikasi).</li>
            <li><span class="bullet-box">✓</span> Menyiapkan Kartu Keluarga (KK) orang tua/wali.</li>
            <li><span class="bullet-box">✓</span> Pas foto hitam putih/berwarna ukuran 3x4 (2 lembar).</li>
          </ul>
        </div>

        <!-- Boks Kuota Bergaya Pop-Art Kontras -->
        <div class="kuota-box">
          <div class="kuota-header">Daya Tampung / Kuota</div>
          <div class="kuota-body">
            <div class="kuota-number">28</div>
            <p>Siswa Baru</p>
            <span class="rombel-tag">1 Rombongan Belajar</span>
          </div>
        </div>
      </div>
    </section>
     
    <!-- --- 3. ALUR PENDAFTARAN DARING --- -->
    <section class="section-ppdb ungu-bg">
      <div class="container">
        <div class="text-center-heading">
          <span class="section-tag">Panduan</span>
          <h2>Alur Pendaftaran Daring</h2>
        </div>

        <div class="grid-alur">
          <div class="alur-card">
            <div class="alur-number">1</div>
            <h3>Kunjungi Laman</h3>
            <p>Isi data calon siswa secara lengkap pada form online yang tersedia di bawah halaman ini.</p>
          </div>
          <div class="alur-card">
            <div class="alur-number">2</div>
            <h3>Cetak Bukti</h3>
            <p>Simpan atau screenshoot notifikasi berhasil sebagai bukti pendaftaran awal.</p>
          </div>
          <div class="alur-card">
            <div class="alur-number">3</div>
            <h3>Verifikasi Berkas</h3>
            <p>Bawa dokumen fisik (KK, Akta, Foto) ke ruang sekretariat PPDB sekolah sesuai jadwal.</p>
          </div>
          <div class="alur-card">
            <div class="alur-number">4</div>
            <h3>Pengumuman</h3>
            <p>Pantau hasil kelulusan administrasi akhir melalui menu "Layanan & Unduhan" di web ini.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- --- 4. FORMULIR PENDAFTARAN ELEKTRONIK --- -->
    <section class="section-ppdb krem-bg" id="form-pendaftaran">
      <div class="container form-wrapper">
        <div class="text-center-heading">
          <span class="section-tag">Form Elektronik</span>
          <h2>Isi Formulir Calon Siswa Baru</h2>
          <p class="form-desc">Pastikan data yang Anda masukkan sesuai dengan dokumen resmi (KK / Akta Lahir).</p>
        </div>

        <form @submit.prevent="submitForm" class="form-ppdb">
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

          <button type="submit" :disabled="submitting" class="btn-submit">
            <span>{{ submitting ? '⚡ Sedang Mengirim Data...' : 'Kirim Pendaftaran Online ➔' }}</span>
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
    const API_URL = "https://script.google.com/macros/s/XXXXXXXXXXXXXX/exec";

    const form = ref({
      nama_lengkap: '',
      nik: '',
      nama_orang_tua: '',
      nomor_whatsapp: '',
      asal_tk: ''
    });
    
    const submitting = ref(false);

    const submitForm = async () => {
      submitting.value = true;
      try {
        await fetch(API_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form.value)
        });

        alert("Pendaftaran PPDB Berhasil!\nData Anda telah terekam di Google Sheets Sekolah. Silakan tunggu konfirmasi panitia melalui WhatsApp.");
        
        form.value = {
          nama_lengkap: '',
          nik: '',
          nama_orang_tua: '',
          nomor_whatsapp: '',
          asal_tk: ''
        };
      } catch (error) {
        console.error("Error pendaftaran:", error);
        alert("Terjadi gangguan sistem. Silakan periksa koneksi internet Anda dan coba lagi.");
      } finally {
        submitting.value = false;
      }
    };

    return {
      form,
      submitting,
      submitForm
    };
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,800;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

/* --- LAYOUT DASAR & UTILITIES --- */
.ppdb-container {
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: #111111;
  background-color: #fffbef; /* Krem hangat */
  padding-top: 80px;
  overflow-x: hidden;
}

h1, h2, h3 {
  font-family: 'Playfair Display', serif;
  font-weight: 800;
  color: #000000;
}

.container { max-width: 1100px; margin: 0 auto; padding: 0 20px; }
.krem-bg { background-color: #fffbef; }
.ungu-bg { background-color: #dfb2f4; border-top: 3px solid #000000; border-bottom: 3px solid #000000; }
.section-ppdb { padding: 90px 0; }
.grid-2 { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 60px; align-items: center; }
.text-center-heading { text-align: center; margin-bottom: 50px; }
.text-center-heading h2 { font-size: 2.5rem; margin: 10px 0 0 0; }

.section-tag {
  background-color: #b5e2fa; /* Biru muda */
  color: #000000;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 1px;
  display: inline-block;
  padding: 4px 12px;
  border: 2px solid #000;
  border-radius: 6px;
  box-shadow: 2px 2px 0px #000;
}

/* --- HERO PPDB (Kuning Memphis) --- */
.ppdb-hero {
  position: relative;
  background-color: #f5d061;
  height: 35vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  text-align: center;
  border-bottom: 3px solid #000000;
  overflow: hidden;
}
.hero-content { position: relative; z-index: 5; padding: 0 20px; }
.hero-content h1 { font-size: 3rem; margin: 5px 0 12px 0; }
.hero-content p { 
  font-size: 1.1rem; 
  color: #2b2b2b; 
  max-width: 650px; 
  margin: 0 auto;
  font-weight: 500;
}
.top-tag {
  font-weight: 800;
  letter-spacing: 2px;
  font-size: 0.85rem;
  display: block;
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
.shape-triangle { font-size: 6rem; bottom: 10px; right: 8%; transform: rotate(15deg); }
.shape-zigzag { font-size: 5rem; top: 20px; right: 12%; transform: rotate(-15deg); }

/* --- INFO SYARAT & BOX KUOTA --- */
.info-syarat h2 { font-size: 2.5rem; margin: 10px 0 15px 0; }
.info-syarat p { color: #2b2b2b; margin-bottom: 30px; font-size: 1.05rem; font-weight: 500; }
.syarat-list { list-style: none; padding: 0; }
.syarat-list li { margin-bottom: 16px; color: #111111; display: flex; align-items: center; gap: 14px; font-size: 1.05rem; font-weight: 600; }

.bullet-box {
  background-color: #f5d061;
  color: #000000;
  border: 2px solid #000000;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  border-radius: 6px;
  font-size: 0.85rem;
  flex-shrink: 0;
  box-shadow: 2px 2px 0px #000000;
}

/* Kotak Daya Tampung / Kuota */
.kuota-box {
  background-color: #ffffff; 
  color: #000000; 
  border: 3px solid #000000;
  border-radius: 24px;
  overflow: hidden; 
  text-align: center; 
  box-shadow: 8px 8px 0px #000000;
}
.kuota-header { 
  background-color: #ff9f68; /* Oranye Pastel */
  padding: 16px; 
  font-weight: 800; 
  font-size: 1.2rem; 
  color: #000000;
  border-bottom: 3px solid #000000;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.kuota-body { padding: 45px 20px; background-color: #ffffff; }
.kuota-number { 
  font-size: 5.5rem; 
  font-weight: 900; 
  color: #000000; 
  line-height: 1; 
  margin-bottom: 5px;
  font-family: 'Playfair Display', serif;
}
.kuota-body p { font-size: 1.6rem; font-weight: 800; margin: 0 0 15px 0; text-transform: uppercase; }
.rombel-tag { 
  font-size: 0.95rem; 
  font-weight: 700; 
  background-color: #fffbef;
  border: 2px dashed #000;
  padding: 6px 16px;
  border-radius: 30px;
  display: inline-block;
}

/* --- CARDS ALUR PENDAFTARAN --- */
.grid-alur { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 30px; }
.alur-card {
  background: #ffffff; 
  padding: 35px 25px; 
  border: 2px solid #000000;
  border-radius: 20px; 
  text-align: center;
  box-shadow: 5px 5px 0px #000000; 
  position: relative;
  transition: transform 0.15s ease-in-out;
}
.alur-card:hover {
  transform: scale(1.02);
}
.alur-number {
  width: 44px; 
  height: 44px; 
  background: #f5d061; /* Kuning Pop */
  color: #000000; 
  border: 2px solid #000000;
  border-radius: 50%;
  display: flex; 
  align-items: center; 
  justify-content: center; 
  font-weight: 900;
  margin: 0 auto 20px auto; 
  font-size: 1.2rem;
  box-shadow: 2px 2px 0px #000000;
}
.alur-card h3 { color: #000000; font-size: 1.3rem; margin: 0 0 12px 0; }
.alur-card p { color: #2b2b2b; font-size: 0.95rem; line-height: 1.6; margin: 0; font-weight: 500; }

/* --- ELEMEN FORMULIR --- */
.form-wrapper { max-width: 750px; }
.form-desc { color: #2b2b2b; font-weight: 500; margin-top: 8px; }
.form-ppdb {
  background-color: #ffffff; 
  padding: 50px; 
  border-radius: 24px;
  border: 2px solid #000000; 
  display: grid; 
  gap: 25px;
  box-shadow: 8px 8px 0px #000000;
}
.form-group { display: flex; flex-direction: column; }
.form-group label { margin-bottom: 8px; font-weight: 800; color: #000000; font-size: 0.95rem; text-transform: uppercase; letter-spacing: 0.5px; }
.form-group input {
  padding: 14px 18px; 
  border: 2px solid #000000; 
  background-color: #fffbef;
  border-radius: 12px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1rem; 
  font-weight: 600;
  transition: all 0.2s;
}
.form-group input:focus { 
  outline: none; 
  background-color: #ffffff;
  box-shadow: 4px 4px 0px #000000; 
}

/* Tombol Submit Pop-Art */
.btn-submit {
  background-color: #ff9f68; /* Oranye/Coral */
  color: #000000; 
  padding: 16px; 
  border: 2px solid #000000;
  border-radius: 14px; 
  cursor: pointer; 
  font-weight: 800; 
  font-size: 1.1rem;
  box-shadow: 4px 4px 0px #000000;
  margin-top: 15px;
  transition: all 0.1s ease-in-out;
}
.btn-submit:hover {
  transform: translate(-1px, -1px);
  box-shadow: 5px 5px 0px #000000;
  background-color: #f5d061;
}
.btn-submit:disabled { 
  background-color: #cbd5e1; 
  color: #64748b;
  cursor: not-allowed; 
  box-shadow: none;
  transform: none;
}

/* --- RESPONSIVE BREAKPOINTS --- */
@media (max-width: 992px) {
  .grid-2 { grid-template-columns: 1fr; gap: 50px; }
  .kuota-box { max-width: 400px; margin: 0 auto; width: 100%; }
}

@media (max-width: 768px) {
  .form-ppdb { padding: 30px 20px; border-radius: 16px; }
  .ppdb-hero h1 { font-size: 2.2rem; }
  .text-center-heading h2, .info-syarat h2 { font-size: 1.9rem; }
  .section-ppdb { padding: 60px 0; }
}
</style>