<template>
  <div id="app">
    <nav class="navbar">
      <div class="nav-container">
        <router-link to="/" class="nav-logo">SD NEGERI PUCUNG</router-link>
        <ul class="nav-links">
          <li><router-link to="/">Beranda</router-link></li>
          <li><router-link to="/profil">Profil</router-link></li>
          <li><router-link to="/akademik">Akademik</router-link></li>
          <li><router-link to="/kesiswaan">Kesiswaan</router-link></li>
          <li><router-link to="/berita">Berita & Agenda</router-link></li> 
          <li><router-link to="/PPDB">PPDB</router-link></li>
          <li><router-link to="/Kontak">Hubungi Kami / Kontak</router-link></li>
          </ul>
      </div>
    </nav>

    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* --- RESET STYLE DASAR --- */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f8fafc;
  color: #333333;
}

/* --- STYLING NAVBAR --- */
.navbar {
  background-color: #1e3a8a; /* Warna biru tua khas sekolah */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
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

.nav-logo {
  color: #ffffff;
  font-weight: bold;
  font-size: 1.4rem;
  text-decoration: none;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 20px;
}

.nav-links a {
  color: #e2e8f0;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 4px;
  transition: 0.3s;
}

/* Efek tombol menu saat didekati mouse */
.nav-links a:hover {
  background-color: #2563eb;
  color: #ffffff;
}

/* Warna tombol aktif saat halaman tersebut dibuka */
.nav-links a.router-link-active {
  background-color: #f59e0b; /* Warna kuning emas */
  color: #1e3a8a;
  font-weight: bold;
}

/* --- JARAK KONTEN AGAR TIDAK TERTUTUP NAVBAR --- */
.main-content {
  margin-top: 70px; 
}
</style>