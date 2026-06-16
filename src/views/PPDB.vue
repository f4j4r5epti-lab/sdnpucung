<template>
  <div class="ppdb-container">
    <section class="ppdb-hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>PPDB Online Tahun Ajaran 2026/2027</h1>
        <p>Bergabunglah bersama keluarga besar SD Negeri Pucung. Cerdas, Berkarakter, Berakhlak Mulia.</p>
      </div>
    </section>

    <section class="section-ppdb white-bg">
      <div class="container grid-2">
        <div class="info-syarat">
          <span class="section-tag">Ketentuan</span>
          <h2>Syarat & Kuota Pendaftaran</h2>
          <hr class="line-decor" />
          <p>Mohon perhatikan persyaratan calon peserta didik baru di bawah ini sebelum melakukan pendaftaran di spmb.slemankab.go.id</p>
          
          <ul class="syarat-list">
            <li><i class="fas fa-check-circle"></i> Berusia minimal 6 tahun pada tanggal 1 Juli 2026.</li>
            <li><i class="fas fa-check-circle"></i> Mengisi Formulir Pendaftaran Online dengan data asli.</li>
            <li><i class="fas fa-check-circle"></i> Menyiapkan Akta Kelahiran (Fotokopi & Asli saat verifikasi).</li>
            <li><i class="fas fa-check-circle"></i> Menyiapkan Kartu Keluarga (KK) orang tua/wali.</li>
            <li><i class="fas fa-check-circle"></i> Pas foto hitam putih/berwarna ukuran 3x4 (2 lembar).</li>
          </ul>
        </div>

        <div class="kuota-box">
          <div class="kuota-header">Daya Tampung / Kuota</div>
          <div class="kuota-body">
            <div class="kuota-number">28</div>
            <p>Siswa Baru</p>
            <span> 1 Rombongan Belajar </span>
          </div>
        </div>
      </div>
    </section>
     
    <section class="section-ppdb gray-bg">
      <div class="container">
        <div class="text-center-heading">
          <span class="section-tag">Panduan</span>
          <h2>Alur Pendaftaran Daring</h2>
          <hr class="line-decor mx-auto" />
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

    <section class="section-ppdb white-bg" id="form-pendaftaran">
      <div class="container form-wrapper">
        <div class="text-center-heading">
          <span class="section-tag">Form Elektronik</span>
          <h2>Isi Formulir Calon Siswa Baru</h2>
          <p>Pastikan data yang Anda masukkan sesuai dengan dokumen resmi (KK / Akta Lahir).</p>
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
            {{ submitting ? 'Sedang Mengirim Data...' : 'Kirim Pendaftaran Online' }}
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
    // URL Web App dari Google Apps Script yang disalin sebelumnya
    const API_URL = "https://script.google.com/macros/s/XXXXXXXXXXXXXX/exec";

    // State Formulir
    const form = ref({
      nama_lengkap: '',
      nik: '',
      nama_orang_tua: '',
      nomor_whatsapp: '',
      asal_tk: ''
    });
    
    const submitting = ref(false);

    // Fungsi Kirim Data ke Google Sheets (POST)
    const submitForm = async () => {
      submitting.value = true;
      try {
        await fetch(API_URL, {
          method: 'POST',
          mode: 'no-cors', // Menghindari isu CORS redirect pada Google Apps Script
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form.value)
        });

        // Notifikasi Sukses
        alert("Pendaftaran PPDB Berhasil!\nData Anda telah terekam di Google Sheets Sekolah. Silakan tunggu konfirmasi panitia melalui WhatsApp.");
        
        // Reset kolom formulir
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
/* --- UTILITIES --- */
.container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
.white-bg { background-color: #ffffff; }
.gray-bg { background-color: #f8fafc; }
.section-ppdb { padding: 80px 0; }
.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; align-items: center; }
.mx-auto { margin-left: auto; margin-right: auto; }
.text-center-heading { text-align: center; margin-bottom: 40px; }
.text-center-heading p { color: #6b7280; margin-top: 5px; }

.section-tag {
  color: #2563eb; font-weight: 700; text-transform: uppercase;
  font-size: 0.85rem; letter-spacing: 1px; display: block; margin-bottom: 5px;
}
.line-decor { width: 50px; height: 4px; background-color: #2563eb; border: none; margin: 15px 0 25px 0; }

/* --- HERO PPDB --- */
.ppdb-hero {
  position: relative;
  background-image: url('https://via.placeholder.com/1920x400');
  background-size: cover; background-position: center;
  height: 35vh; display: flex; align-items: center; justify-content: center; color: white; text-align: center;
}
.hero-overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(30, 58, 138, 0.85); }
.hero-content { position: relative; z-index: 1; padding: 0 20px; }
.hero-content h1 { font-size: 2.5rem; margin: 0 0 10px 0; }

/* --- SYARAT & KUOTA --- */
.info-syarat h2 { color: #1e3a8a; font-size: 2rem; margin: 0; }
.info-syarat p { color: #4b5563; margin-bottom: 20px; }
.syarat-list { list-style: none; padding: 0; }
.syarat-list li { margin-bottom: 12px; color: #4b5563; display: flex; align-items: center; gap: 10px; font-size: 1.05rem; }
.syarat-list i { color: #10b981; font-size: 1.2rem; }

.kuota-box {
  background-color: #1e3a8a; color: white; border-radius: 12px;
  overflow: hidden; text-align: center; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
}
.kuota-header { background-color: #f59e0b; padding: 15px; font-weight: bold; font-size: 1.1rem; color: #1e3a8a; }
.kuota-body { padding: 40px 20px; }
.kuota-number { font-size: 4.5rem; font-weight: 800; color: #f59e0b; line-height: 1; margin-bottom: 5px; }
.kuota-body p { font-size: 1.5rem; font-weight: 600; margin: 0 0 15px 0; }
.kuota-body span { font-size: 0.9rem; opacity: 0.8; display: block; }

/* --- ALUR CARDS --- */
.grid-alur { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 25px; }
.alur-card {
  background: white; padding: 30px 20px; border-radius: 10px; text-align: center;
  box-shadow: 0 4px 6px rgba(0,0,0,0.03); border-top: 4px solid #2563eb; position: relative;
}
.alur-number {
  width: 40px; height: 40px; background: #2563eb; color: white; border-radius: 50%;
  display: flex; align-items: center; justify-content: center; font-weight: bold;
  margin: 0 auto 20px auto; font-size: 1.1rem;
}
.alur-card h3 { color: #1e3a8a; font-size: 1.2rem; margin: 0 0 10px 0; }
.alur-card p { color: #64748b; font-size: 0.9rem; line-height: 1.5; margin: 0; }

/* --- FORMULIR --- */
.form-wrapper { max-width: 700px; }
.form-ppdb {
  background-color: #f8fafc; padding: 40px; border-radius: 12px;
  border: 1px solid #e2e8f0; display: grid; gap: 20px;
}
.form-group { display: flex; flex-direction: column; }
.form-group label { margin-bottom: 6px; font-weight: 600; color: #475569; font-size: 0.95rem; }
.form-group input {
  padding: 12px 15px; border: 1px solid #cbd5e1; border-radius: 6px;
  font-size: 1rem; transition: 0.3s;
}
.form-group input:focus { outline: none; border-color: #2563eb; box-shadow: 0 0 0 3px rgba(37,99,235,0.15); }
.btn-submit {
  background-color: #10b981; color: white; padding: 14px; border: none;
  border-radius: 6px; cursor: pointer; font-weight: bold; font-size: 1.05rem;
  transition: 0.3s; margin-top: 10px;
}
.btn-submit:hover { background-color: #059669; }
.btn-submit:disabled { background-color: #94a3b8; cursor: not-allowed; }

/* RESPONSIVE */
@media (max-width: 768px) {
  .grid-2 { grid-template-columns: 1fr; gap: 40px; }
  .form-ppdb { padding: 25px; }
  .ppdb-hero h1 { font-size: 1.8rem; }
}
</style>