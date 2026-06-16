<template>
  <div class="kontak-container">
    <section class="kontak-hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>Hubungi Kami</h1>
        <p>Hubungi layanan administrasi atau kunjungi lokasi kampus SD Negeri Kota Jaya.</p>
      </div>
    </section>

    <section class="section-kontak">
      <div class="container grid-2">
        
        <div class="kontak-info">
          <span class="section-tag">Layanan Informasi</span>
          <h2>Kontak Tata Usaha</h2>
          <hr class="line-decor" />
          <p class="kontak-desc">
            Mempunyai pertanyaan terkait dokumen akademik, PPDB, atau administrasi sekolah? Silakan hubungi kami melalui saluran resmi di bawah ini pada jam kerja (Senin - Jumat, 07.00 - 14.00 WIB).
          </p>

          <div class="info-list">
            <div class="info-item">
              <div class="info-icon"><i class="fas fa-map-marker-alt"></i></div>
              <div class="info-text">
                <h3>Alamat Fisik</h3>
                <p>Jl. Pendidikan Utama No. 45, Kecamatan Kota Jaya, Kabupaten Jayakarta, Kode Pos 12345</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon"><i class="fas fa-phone-alt"></i></div>
              <div class="info-text">
                <h3>Nomor Telepon / TU</h3>
                <p>(021) 555-1234</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon"><i class="fas fa-envelope"></i></div>
              <div class="info-text">
                <h3>Email Resmi</h3>
                <p>info@sdnkotajaya.sch.id</p>
              </div>
            </div>
          </div>

          <div class="sosmed-section">
            <h3>Media Sosial Resmi</h3>
            <div class="sosmed-links">
              <a href="https://instagram.com" target="_blank" class="sosmed-card instagram">
                <i class="fab fa-instagram"></i> Instagram
              </a>
              <a href="https://youtube.com" target="_blank" class="sosmed-card youtube">
                <i class="fab fa-youtube"></i> YouTube
              </a>
              <a href="https://facebook.com" target="_blank" class="sosmed-card facebook">
                <i class="fab fa-facebook-f"></i> Facebook
              </a>
            </div>
          </div>
        </div>

        <div class="kontak-map">
          <div class="map-wrapper">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56347862248!2d107.57311648757053!3d-6.903444341620448!2m3!1f0!2f0!3f0!3m2!1i1024!2i1026!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a16b4e628e554!2sBandung%2C%20Bandung%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1716800000000!5m2!1sen!2sid" 
              width="100%" 
              height="450" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'KontakView'
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
  grid-template-columns: 1.2fr 1fr;
  gap: 50px;
  align-items: flex-start;
}
.section-kontak {
  padding: 80px 0;
  background-color: #f8fafc;
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
  width: 50px;
  height: 4px;
  background-color: #2563eb;
  border: none;
  margin: 15px 0 25px 0;
}

/* --- HERO BANNER --- */
.kontak-hero {
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
.hero-content { position: relative; z-index: 1; }
.hero-content h1 { font-size: 2.5rem; margin: 0 0 10px 0; }

/* --- DETAIL KONTAK (KIRI) --- */
.kontak-info h2 { color: #1e3a8a; font-size: 2rem; margin: 0; }
.kontak-desc { color: #475569; line-height: 1.6; margin-bottom: 30px; }

.info-list {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 40px;
}
.info-item {
  display: flex;
  gap: 15px;
  align-items: flex-start;
}
.info-icon {
  width: 45px;
  height: 45px;
  background-color: #dbeafe;
  color: #2563eb;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  flex-shrink: 0;
}
.info-text h3 {
  margin: 0 0 5px 0;
  color: #1e3a8a;
  font-size: 1.1rem;
}
.info-text p {
  margin: 0;
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.5;
}

/* --- SOSIAL MEDIA LINKS --- */
.sosmed-section h3 {
  color: #1e3a8a;
  font-size: 1.2rem;
  margin-bottom: 15px;
}
.sosmed-links {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.sosmed-card {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border-radius: 6px;
  color: white;
  font-weight: 600;
  text-decoration: none;
  font-size: 0.9rem;
  transition: transform 0.2s;
}
.sosmed-card:hover {
  transform: translateY(-3px);
}
.sosmed-card.instagram { background-color: #e1306c; }
.sosmed-card.youtube { background-color: #ff0000; }
.sosmed-card.facebook { background-color: #1877f2; }

/* --- SEMATAN MAPS (KANAN) --- */
.kontak-map {
  background: white;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05);
  border: 1px solid #e2e8f0;
}
.map-wrapper {
  border-radius: 8px;
  overflow: hidden;
  line-height: 0; /* Menghilangkan celah kosong kecil di bawah iframe */
}

/* RESPONSIVE DESIGN */
@media (max-width: 992px) {
  .grid-2 {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
@media (max-width: 768px) {
  .kontak-hero h1 { font-size: 2rem; }
  .sosmed-links { flex-direction: column; }
  .sosmed-card { justify-content: center; }
}
</style>