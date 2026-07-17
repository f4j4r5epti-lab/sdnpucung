<template>
  <div class="kontak-container">
    
    <!-- --- 1. HERO SECTION (Kuning Memphis & Ornamen Geometris) --- -->
    <section class="kontak-hero">
      <div class="hero-content">
        <span class="top-tag">HUBUNGI KAMI</span>
        <h1>Layanan Informasi</h1>
        <p>Hubungi layanan administrasi atau kunjungi lokasi SD Negeri Pucung.</p>
      </div>
      <!-- Ornamen Gaya Memphis -->
      <div class="hero-shape shape-circle"></div>
      <div class="hero-shape shape-triangle">▲</div>
      <div class="hero-shape shape-zigzag">⚡</div>
    </section>

    <!-- --- 2. MAIN CONTENT SECTION --- -->
    <section class="section-kontak">
      <div class="container grid-2">
        
        <!-- Kolom Kiri: Informasi Kontak Tata Usaha -->
        <div class="kontak-info">
          <span class="section-tag">Tata Usaha</span>
          <h2>Kontak Sekolah</h2>
          <p class="kontak-desc">
            Mempunyai pertanyaan terkait dokumen akademik, PPDB, atau administrasi sekolah? Silakan hubungi kami melalui saluran resmi di bawah ini pada jam kerja (Senin - Kamis, 07.00 - 15.00 WIB), (Jumat, 07.00 - 14.00)
          </p>

          <div class="info-list">
            <div class="info-item">
              <div class="info-icon icon-biru">📍</div>
              <div class="info-text">
                <h3>Alamat Fisik</h3>
                <p>Pucung, Tamanmartani, Kalasan, Sleman, Kode Pos 53381</p>
              </div>
            </div>

          

            <div class="info-item">
              <div class="info-icon icon-ungu">✉️</div>
              <div class="info-text">
                <h3>Email Resmi</h3>
                <p>sdn.pucung@gmail.com</p>
              </div>
            </div>
          </div>

          <!-- Bagian Media Sosial Resmi -->
          <div class="sosmed-section">
            <h3>Media Sosial Resmi</h3>
            <div class="sosmed-links">
              <a href="https://instagram.com" target="sdnpucung" class="sosmed-card instagram">
                <span>📸 Instagram</span>
              </a>
              <a href="https://youtube.com" target="_blank" class="sosmed-card youtube">
                <span>📺 YouTube</span>
              </a>
             </div>
          </div>
        </div>

        <!-- Kolom Kanan: Sematan Google Maps -->
        <div class="kontak-map">
          <div class="map-wrapper">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.731724146684!2d110.48106627591606!3d-7.711909276400158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5b7c92956f47%3A0xf519dae698d86508!2sSD%20Negeri%20Pucung!5e0!3m2!1sen!2sid!4v1781711703009!5m2!1sen!2sid" 
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
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,800;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

/* --- LAYOUT DASAR & IDENTITY SYSTEM --- */
.kontak-container {
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

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

.grid-2 {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 60px;
  align-items: flex-start;
}

.section-kontak {
  padding: 90px 0;
  background-color: #fffbef;
}

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

/* --- HERO BANNER (Kuning Memphis) --- */
.kontak-hero {
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
.hero-content {
  position: relative;
  z-index: 5;
}
.hero-content h1 { font-size: 3rem; margin: 5px 0 12px 0; }
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

/* --- DETAIL KONTAK (KIRI) --- */
.kontak-info h2 { font-size: 2.5rem; margin: 10px 0 15px 0; }
.kontak-desc { color: #2b2b2b; line-height: 1.6; margin-bottom: 35px; font-weight: 500; }

.info-list {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 45px;
}
.info-item {
  display: flex;
  gap: 20px;
  align-items: center;
  background: #ffffff;
  padding: 16px 20px;
  border: 2px solid #000000;
  border-radius: 16px;
  box-shadow: 4px 4px 0px #000000;
}
.info-icon {
  width: 46px;
  height: 46px;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #000000;
  border-radius: 12px;
  flex-shrink: 0;
  box-shadow: 2px 2px 0px #000000;
}
.icon-biru { background-color: #b5e2fa; }
.icon-kuning { background-color: #f5d061; }
.icon-ungu { background-color: #dfb2f4; }

.info-text h3 {
  margin: 0 0 4px 0;
  color: #000000;
  font-size: 1.2rem;
}
.info-text p {
  margin: 0;
  color: #2b2b2b;
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.5;
}

/* --- SOSIAL MEDIA LINKS --- */
.sosmed-section h3 {
  color: #000000;
  font-size: 1.3rem;
  margin-bottom: 20px;
}
.sosmed-links {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
.sosmed-card {
  display: inline-flex;
  align-items: center;
  padding: 12px 22px;
  border: 2px solid #000000;
  border-radius: 12px;
  color: #000000;
  font-weight: 800;
  text-decoration: none;
  font-size: 0.95rem;
  box-shadow: 4px 4px 0px #000000;
  transition: all 0.1s ease-in-out;
}
.sosmed-card:hover {
  transform: translate(-1px, -1px);
  box-shadow: 5px 5px 0px #000000;
}
.sosmed-card.instagram { background-color: #ffdac1; } /* Pastel Coral */
.sosmed-card.youtube { background-color: #ff9f68; }    /* Pastel Red/Orange */
.sosmed-card.facebook { background-color: #b5e2fa; }   /* Pastel Blue */

/* --- SEMATAN MAPS (KANAN) --- */
.kontak-map {
  background: #ffffff;
  padding: 16px;
  border-radius: 24px;
  border: 3px solid #000000;
  box-shadow: 8px 8px 0px #000000;
}
.map-wrapper {
  border-radius: 14px;
  overflow: hidden;
  border: 2px solid #000000;
  line-height: 0;
}

/* --- RESPONSIVE DESIGN --- */
@media (max-width: 992px) {
  .grid-2 {
    grid-template-columns: 1fr;
    gap: 50px;
  }
  .kontak-map {
    max-width: 600px;
    margin: 0 auto;
    width: 100%;
  }
}
@media (max-width: 768px) {
  .kontak-hero h1 { font-size: 2.2rem; }
  .kontak-info h2 { font-size: 2rem; }
  .sosmed-links { flex-direction: column; }
  .sosmed-card { justify-content: center; }
  .section-kontak { padding: 60px 0; }
}
</style>