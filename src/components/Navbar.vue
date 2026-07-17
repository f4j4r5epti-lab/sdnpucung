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

const isMenuOpen = ref(false)
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&display=swap');

/* --- STYLING UTAMA NAVBAR (Tema Memphis Playful) --- */
.navbar {
  background-color: #fffbef; /* Menggunakan warna dasar krem senada dengan layout utama */
  position: fixed; 
  top: 0; left: 0; right: 0;
  height: 80px; /* Sedikit diperlebar agar proporsi garis hitam pas */
  border-bottom: 3px solid #000000; /* Garis pembatas hitam tebal khas Memphis */
  z-index: 1000;
  font-family: 'Plus Jakarta Sans', sans-serif;
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
  color: #000000;
  font-weight: 800;
  font-size: 1.4rem;
  text-decoration: none;
  white-space: nowrap;
  letter-spacing: -0.5px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 12px;
}

.nav-links a {
  color: #000000;
  text-decoration: none;
  font-weight: 700;
  padding: 10px 16px;
  border-radius: 30px; /* Tombol bulat lonjong sesuai tema */
  border: 2px solid transparent;
  transition: all 0.2s ease-in-out;
  font-size: 0.9rem;
}

/* Hover Menu */
.nav-links a:hover {
  background-color: #f5d061; /* Warna kuning hangat di-hover */
  border: 2px solid #000000;
  box-shadow: 2px 2px 0px #000000;
}

/* Penanda Halaman Aktif (Ungu Pastel dengan Border & Bayangan Hitam) */
.nav-links a.router-link-active {
  background-color: #dfb2f4; /* Warna ungu pastel yang pas */
  color: #000000;
  font-weight: bold;
  border: 2px solid #000000;
  box-shadow: 3px 3px 0px #000000;
}

/* Tombol Hubungi Kami / Kontak Spesifik */
.btn-kontak {
  border: 2px solid #000000 !important;
  background-color: #ffffff;
}

/* --- TOMBOL HAMBURGER MOBILE (Hitam) --- */
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
  background-color: #000000; /* Diubah ke warna hitam */
  border-radius: 2px;
  transition: all 0.3s ease-in-out;
}

/* --- RESPONSIVE MOBILE (LAYAR HP & TABLET) --- */
@media (max-width: 968px) {
  .hamburger-btn {
    display: flex; 
  }

  /* Tirai Geser Keluar Menyesuaikan Palet Kuning/Krem */
  .nav-links {
    position: fixed;
    top: 0;
    right: -100%; 
    width: 280px;
    height: 100vh;
    background-color: #fffbef; 
    border-left: 3px solid #000000;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    padding: 0;
    transition: 0.4s cubic-bezier(0.1, 1, 0.1, 1);
    box-shadow: -5px 0 0px rgba(0,0,0,1); /* Bayangan solid */
  }

  .nav-links-active {
    right: 0;
  }

  .nav-links a {
    display: block;
    width: 80%;
    text-align: center;
    padding: 12px 0;
    font-size: 1rem;
  }
  
  .nav-links a.router-link-active {
    box-shadow: 3px 3px 0px #000000 !important;
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