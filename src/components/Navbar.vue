<template>
  <nav class="navbar">
    <div class="nav-container">
      
      <div class="nav-logo">
        <router-link to="/">SD NEGERI PUCUNG</router-link>
      </div>

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

      <div class="nav-links" :class="{ 'nav-links-active': isMenuOpen }">
        <router-link to="/" @click="isMenuOpen = false">Beranda</router-link>
        <router-link to="/profil" @click="isMenuOpen = false">Profil</router-link>
        <router-link to="/akademik" @click="isMenuOpen = false">Akademik</router-link>
        <router-link to="/kesiswaan" @click="isMenuOpen = false">Kesiswaan</router-link>
        <router-link to="/berita" @click="isMenuOpen = false">Berita & Agenda</router-link>
        <router-link to="/ppdb" @click="isMenuOpen = false">PPDB</router-link>
        <router-link to="/kontak" @click="isMenuOpen = false" class="btn-kontak">Hubungi Kami / Kontak</router-link>
      </div>

    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

// Sakelar reaktif menggunakan Script Setup modern untuk buka-tutup menu
const isMenuOpen = ref(false)
</script>

<style scoped>
/* --- STYLING UTAMA NAVBAR --- */
.navbar {
  background-color: #1e3a8a;
  position: fixed; /* Tetap menggunakan fixed agar menempel di atas saat di-scroll */
  top: 0; left: 0; right: 0;
  height: 70px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 100%;
}

.nav-logo a, .nav-logo :deep(a) {
  color: #ffffff;
  font-weight: bold;
  font-size: 1.4rem;
  text-decoration: none;
  white-space: nowrap;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 15px;
}

.nav-links a {
  color: #e2e8f0;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 4px;
  transition: 0.3s;
  font-size: 0.95rem;
}

.nav-links a:hover {
  background-color: #2563eb;
  color: #ffffff;
}

/* Penanda halaman aktif menggunakan warna emas elegan khas SD Negeri Pucung */
.nav-links a.router-link-active {
  background-color: #f59e0b;
  color: #1e3a8a;
  font-weight: bold;
}

/* Tombol Kontak Spesifik */
.btn-kontak {
  border: 1px solid #e2e8f0;
}

/* --- TOMBOL HAMBURGER (Disembunyikan di Desktop) --- */
.hamburger-btn {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
}

.hamburger-btn .bar {
  width: 100%;
  height: 3px;
  background-color: white;
  border-radius: 2px;
  transition: all 0.3s ease-in-out;
}

/* --- RESPONSIVE MOBILE (LAYAR HP & TABLET) --- */
@media (max-width: 968px) {
  .hamburger-btn {
    display: flex; /* Aktifkan hamburger di perangkat mobile */
  }

  /* Mengubah Nav Links Menjadi Tirai Geser Keluar dari Sisi Kanan */
  .nav-links {
    position: fixed;
    top: 0;
    right: -100%; /* Tersembunyi penuh di luar kanan layar */
    width: 70%;
    height: 100vh;
    background-color: #0f172a; /* Menggunakan latar gelap eksklusif saat menu mobile terbuka */
    flex-direction: column;
    justify-content: center;
    gap: 25px;
    padding: 0;
    transition: 0.4s cubic-bezier(0.1, 1, 0.1, 1);
    box-shadow: -5px 0 15px rgba(0,0,0,0.2);
  }

  /* Ketika isMenuOpen bernilai true, geser menu masuk ke dalam layar (right: 0) */
  .nav-links-active {
    right: 0;
  }

  .nav-links a {
    display: block;
    width: 80%;
    text-align: center;
    padding: 12px 0;
    font-size: 1.1rem;
  }
  
  .nav-links a.router-link-active {
    color: #1e3a8a !important;
  }

  /* --- ANIMASI TRANSISI HAMBURGER JADI HURUF 'X' --- */
  .hamburger-btn.is-active .bar:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
  }
  
  .hamburger-btn.is-active .bar:nth-child(2) {
    opacity: 0;
  }
  
  .hamburger-btn.is-active .bar:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
  }
}
</style>