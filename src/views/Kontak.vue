<template>
  <div class="kontak-container">
    
    <!-- BACKGROUND MESH GLOW FLOATING BALLS -->
    <div class="mesh-background">
      <div class="glow-ball glow-purple-1"></div>
      <div class="glow-ball glow-yellow-1"></div>
      <div class="glow-ball glow-pink-1"></div>
      <div class="glow-ball glow-cyan-1"></div>
    </div>

    <!-- --- 1. HERO SECTION --- -->
    <section class="kontak-hero">
      <div class="container hero-content text-center">
        <div class="top-tag-pill">
          <span class="sparkle">✨</span> HUBUNGI KAMI
        </div>
        <h1 class="hero-title">
          Layanan <span class="gradient-text-vibrant">Informasi</span>
        </h1>
        <p class="hero-subtitle">
          Hubungi layanan administrasi atau kunjungi lokasi SD Negeri Pucung.
        </p>
      </div>
    </section>

    <!-- --- 2. MAIN CONTENT SECTION --- -->
    <section class="section-kontak">
      <div class="container grid-2">
        
        <!-- Kolom Kiri: Informasi Kontak Tata Usaha -->
        <div class="kontak-info">
          <span class="sub-heading badge-purple">TATA USAHA</span>
          <h2 class="section-heading">Kontak Sekolah</h2>
          <div class="heading-line-vibrant"></div>
          
          <p class="kontak-desc">
            Mempunyai pertanyaan terkait dokumen akademik, PPDB, atau administrasi sekolah? Silakan hubungi kami melalui saluran resmi di bawah ini pada jam kerja:
            <br />
            <strong>Senin - Kamis:</strong> 07.00 - 15.00 WIB
            <br />
            <strong>Jumat:</strong> 07.00 - 14.00 WIB
          </p>

          <div class="info-list">
            <div class="info-item-glass">
              <div class="info-icon icon-cyan">📍</div>
              <div class="info-text">
                <h3>Alamat Fisik</h3>
                <p>Pucung, Tamanmartani, Kalasan, Sleman, Kode Pos 53381</p>
              </div>
            </div>

            <div class="info-item-glass">
              <div class="info-icon icon-purple">✉️</div>
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
              <a href="https://instagram.com" target="_blank" rel="noopener" class="sosmed-card-glass instagram">
                <span class="sosmed-icon">📸</span>
                <span>Instagram</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener" class="sosmed-card-glass youtube">
                <span class="sosmed-icon">📺</span>
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Kolom Kanan: Sematan Google Maps Glassmorphism -->
        <div class="kontak-map">
          <div class="map-card-glass">
            <div class="map-header-glass">
              <span>🗺️ Lokasi Presisi Sekolah</span>
            </div>
            <div class="map-wrapper">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.731724146684!2d110.48106627591606!3d-7.711909276400158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5b7c92956f47%3A0xf519dae698d86508!2sSD%20Negeri%20Pucung!5e0!3m2!1sen!2sid!4v1781711703009!5m2!1sen!2sid" 
                width="100%" 
                height="420" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
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
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

/* --- LAYOUT UTAMA & MESH BACKGROUND --- */
.kontak-container {
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: #1e293b;
  position: relative;
  background: #f8fafc;
  overflow-x: hidden;
  min-height: 100vh;
}

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

.glow-purple-1 {
  width: 500px;
  height: 500px;
  background: #a855f7;
  top: 0%;
  left: -10%;
}

.glow-yellow-1 {
  width: 450px;
  height: 450px;
  background: #ffb703;
  top: 25%;
  right: -5%;
}

.glow-pink-1 {
  width: 400px;
  height: 400px;
  background: #ec4899;
  top: 55%;
  left: -5%;
}

.glow-cyan-1 {
  width: 450px;
  height: 450px;
  background: #06b6d4;
  bottom: 5%;
  right: -5%;
}

.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
}

.text-center { text-align: center; }

/* --- HERO SECTION --- */
.kontak-hero {
  position: relative;
  padding: 120px 0 40px 0;
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

.gradient-text-vibrant {
  background: linear-gradient(135deg, #ffb703 0%, #ec4899 50%, #8b5cf6 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.15rem;
  color: #475569;
  max-width: 600px;
  margin: 0 auto;
}

/* --- MAIN CONTENT & GRID --- */
.section-kontak {
  padding: 50px 0 90px 0;
}

.grid-2 {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 50px;
  align-items: flex-start;
}

/* --- BADGES & HEADINGS --- */
.sub-heading {
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  display: inline-block;
  padding: 6px 16px;
  border-radius: 99px;
  margin-bottom: 15px;
}

.badge-purple { background: #f3e8ff; color: #6b21a8; }

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

.kontak-desc {
  color: #475569;
  line-height: 1.7;
  margin-bottom: 30px;
  font-size: 1rem;
}

.kontak-desc strong {
  color: #0f172a;
}

/* --- INFO ITEM GLASSMOPHISM --- */
.info-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
}

.info-item-glass {
  display: flex;
  gap: 20px;
  align-items: center;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  padding: 20px 24px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
}

.info-item-glass:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
}

.info-icon {
  width: 50px;
  height: 50px;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  flex-shrink: 0;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
}

.icon-cyan {
  background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);
  color: #0284c7;
}

.icon-purple {
  background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%);
  color: #9333ea;
}

.info-text h3 {
  margin: 0 0 4px 0;
  color: #0f172a;
  font-size: 1.1rem;
  font-weight: 800;
}

.info-text p {
  margin: 0;
  color: #475569;
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.5;
}

/* --- MEDIA SOSIAL GLASS --- */
.sosmed-section h3 {
  color: #0f172a;
  font-size: 1.2rem;
  font-weight: 800;
  margin-bottom: 16px;
}

.sosmed-links {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.sosmed-card-glass {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.9);
  border-radius: 99px;
  color: #0f172a;
  font-weight: 700;
  text-decoration: none;
  font-size: 0.95rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
}

.sosmed-card-glass:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

.sosmed-card-glass.instagram:hover {
  background: linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%);
  color: #db2777;
  border-color: #fbcfe8;
}

.sosmed-card-glass.youtube:hover {
  background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
  color: #dc2626;
  border-color: #fca5a5;
}

.sosmed-icon {
  font-size: 1.1rem;
}

/* --- SEMATAN GOOGLE MAPS GLASS --- */
.kontak-map {
  position: sticky;
  top: 90px;
}

.map-card-glass {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  padding: 16px;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.05);
}

.map-header-glass {
  padding: 8px 12px 16px 12px;
  font-weight: 800;
  font-size: 0.9rem;
  color: #475569;
  display: flex;
  align-items: center;
  gap: 8px;
}

.map-wrapper {
  border-radius: 20px;
  overflow: hidden;
  line-height: 0;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.05);
}

/* --- RESPONSIVE MEDIA QUERIES --- */
@media (max-width: 992px) {
  .grid-2 {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .kontak-hero {
    padding: 100px 0 30px 0;
  }
  .hero-title {
    font-size: 2.6rem;
  }
  .kontak-map {
    position: static;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.2rem;
  }
  .section-heading {
    font-size: 1.8rem;
  }
  .sosmed-links {
    flex-direction: column;
  }
  .sosmed-card-glass {
    justify-content: center;
  }
  .section-kontak {
    padding: 30px 0 60px 0;
  }
}
</style>