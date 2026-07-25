<template>
  <nav class="navbar-glass">
    <div class="nav-container">
      
      <!-- LOGO DENGAN AKSEN GRADIENT -->
      <div class="nav-logo">
        <router-link to="/">
          <span class="logo-icon">🏫</span>
          <span class="logo-text">SD NEGERI <span class="highlight">PUCUNG</span></span>
        </router-link>
      </div>

      <!-- HAMBURGER MENU (MOBILE) -->
      <button 
        class="hamburger-btn" 
        @click="isMenuOpen = !isMenuOpen" 
        :class="{ 'is-active': isMenuOpen }"
        aria-label="Toggle Menu"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <!-- NAVIGATION LINKS -->
      <div class="nav-links" :class="{ 'nav-links-active': isMenuOpen }">
        <router-link to="/" @click="isMenuOpen = false">Beranda</router-link>
        <router-link to="/profil" @click="isMenuOpen = false">Profil</router-link>
        <router-link to="/akademik" @click="isMenuOpen = false">Akademik</router-link>
        <router-link to="/kesiswaan" @click="isMenuOpen = false">Kesiswaan</router-link>
        <router-link to="/berita" @click="isMenuOpen = false">Berita & Agenda</router-link>
        <router-link to="/ppdb" @click="isMenuOpen = false">PPDB</router-link>
        <router-link to="/kontak" @click="isMenuOpen = false" class="btn-kontak">Hubungi Kami</router-link>
      </div>

    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

/* --- NAVBAR GLASSMORPHISM TRANSPARAN --- */
.navbar-glass {
  position: fixed; 
  top: 0; 
  left: 0; 
  right: 0;
  height: 76px;
  /* Background transparan dengan efek buram halus */
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.03);
  z-index: 1000;
  font-family: 'Plus Jakarta Sans', sans-serif;
  transition: all 0.3s ease;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  height: 100%;
}

/* --- LOGO STYLING --- */
.nav-logo a, .nav-logo :deep(a) {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #0f172a;
  font-weight: 800;
  font-size: 1.25rem;
  text-decoration: none;
  white-space: nowrap;
  letter-spacing: -0.3px;
}

.logo-icon {
  font-size: 1.3rem;
}

.logo-text .highlight {
  background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* --- NAV LINKS & HOVER EFFECT --- */
.nav-links {
  display: flex;
  align-items: center;
  gap: 6px;
}

.nav-links a {
  color: #475569;
  text-decoration: none;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 99px;
  transition: all 0.25s ease;
  font-size: 0.9rem;
}

/* Hover Menu */
.nav-links a:hover {
  color: #0f172a;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

/* Penanda Halaman Aktif (Ungu Soft Pill Shape) */
.nav-links a.router-link-active {
  background: #f3e8ff;
  color: #7e22ce;
  font-weight: 700;
}

/* Tombol Aksi Hubungi Kami (Pill Shape Gradient) */
.btn-kontak {
  margin-left: 10px;
  background: #ffffff !important;
  color: #0f172a !important;
  border: 1px solid #e2e8f0 !important;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05) !important;
  font-weight: 700 !important;
}

.btn-kontak:hover {
  background: linear-gradient(135deg, #f3e8ff 0%, #fce7f3 100%) !important;
  color: #a855f7 !important;
  border-color: #f3e8ff !important;
  transform: translateY(-1px);
}

.btn-kontak.router-link-active {
  background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%) !important;
  color: #ffffff !important;
  border: none !important;
  box-shadow: 0 8px 20px rgba(168, 85, 247, 0.25) !important;
}

/* --- HAMBURGER BUTTON (MOBILE) --- */
.hamburger-btn {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 26px;
  height: 18px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
}

.hamburger-btn .bar {
  width: 100%;
  height: 2.5px;
  background-color: #0f172a;
  border-radius: 4px;
  transition: all 0.3s ease;
}

/* --- RESPONSIVE MOBILE --- */
@media (max-width: 968px) {
  .hamburger-btn {
    display: flex; 
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%; 
    width: 280px;
    height: 100vh;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);
    border-left: 1px solid rgba(255, 255, 255, 0.8);
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    padding: 30px;
    transition: 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: -10px 0 30px rgba(0, 0, 0, 0.08);
  }

  .nav-links-active {
    right: 0;
  }

  .nav-links a {
    width: 100%;
    text-align: center;
    padding: 12px 0;
    font-size: 1rem;
  }
  
  .btn-kontak {
    margin-left: 0;
    margin-top: 10px;
  }

  .hamburger-btn.is-active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  
  .hamburger-btn.is-active .bar:nth-child(2) {
    opacity: 0;
  }
  
  .hamburger-btn.is-active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}
</style>