<template>
  <nav class="navbar">
    <div class="nav-container">
      
      <!-- SISI KIRI: Tombol Hamburger (Hanya muncul di HP) & Logo -->
      <div class="nav-left-group">
        <!-- Tombol Hamburger -->
        <button class="hamburger-btn" @click="isMenuOpen = !isMenuOpen" aria-label="Toggle Menu">
          <!-- Garis tiga ikon hamburger (X jika terbuka) -->
          <span :class="['bar', { 'rotate-top': isMenuOpen }]"></span>
          <span :class="['bar', { 'fade-out': isMenuOpen }]"></span>
          <span :class="['bar', { 'rotate-bottom': isMenuOpen }]"></span>
        </button>

        <router-link to="/" class="nav-logo">SD NEGERI PUCUNG</router-link>
      </div>

      <!-- SISI KANAN: Menu Navigasi (Bisa menjelma jadi tirai di HP) -->
      <ul :class="['nav-links', { 'nav-active': isMenuOpen }]">
        <li><router-link to="/" @click="isMenuOpen = false">Beranda</router-link></li>
        <li><router-link to="/profil" @click="isMenuOpen = false">Profil</router-link></li>
        <li><router-link to="/akademik" @click="isMenuOpen = false">Akademik</router-link></li>
        <li><router-link to="/kesiswaan" @click="isMenuOpen = false">Kesiswaan</router-link></li>
        <li><router-link to="/berita" @click="isMenuOpen = false">Berita & Agenda</router-link></li> 
        <li><router-link to="/PPDB" @click="isMenuOpen = false">PPDB</router-link></li>
        <li><router-link to="/Kontak" @click="isMenuOpen = false">Hubungi Kami / Kontak</router-link></li>
      </ul>

    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const isMenuOpen = ref(false)
</script>

<style scoped>
.navbar {
  background-color: #1e3a8a;
  position: fixed;
  top: 0; left: 0; right: 0;
  height: 70px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.nav-left-group {
  display: flex;
  align-items: center;
  gap: 15px;
}

.nav-logo {
  color: #ffffff;
  font-weight: bold;
  font-size: 1.4rem;
  text-decoration: none;
  white-space: nowrap;
}

.nav-links {
  display: flex;
  list-style: none;
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

.nav-links a.router-link-active {
  background-color: #f59e0b;
  color: #1e3a8a;
  font-weight: bold;
}

/* --- STYLING TOMBOL HAMBURGER (Sembunyi di Desktop) --- */
.hamburger-btn {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
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
  transition: all 0.3s ease;
  border-radius: 2px;
}

/* --- MEDIA QUERY RESPONSIF (LAYAR HP / TABLET) --- */
@media (max-width: 968px) {
  .hamburger-btn {
    display: flex; /* Muncul di HP */
  }

  /* Mengubah Menu List menjadi Tirai Dropdown dari Atas */
  .nav-links {
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background-color: #1e3a8a;
    flex-direction: column;
    gap: 0;
    padding: 10px 0;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
  }

  /* Ketika hamburger diklik, tirai terbuka */
  .nav-links.nav-active {
    max-height: 400px; 
  }

  .nav-links li {
    width: 100%;
    text-align: left;
  }

  .nav-links a {
    display: block;
    width: 100%;
    padding: 12px 25px;
    border-radius: 0;
  }

  /* Efek Animasi Transisi Tombol Gari Tiga Jadi Silang (X) */
  .rotate-top { transform: translateY(7px) rotate(45deg); }
  .fade-out { opacity: 0; }
  .rotate-bottom { transform: translateY(-8px) rotate(-45deg); }
}
</style>