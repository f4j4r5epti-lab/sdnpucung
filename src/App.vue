<template>
  <div class="app-layout">
    <Navbar />

    <main class="main-content">
  <router-view v-slot="{ Component }">
    <transition name="page-fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</main>

<footer class="footer">
  &copy; 2026 SD NEGERI PUCUNG. All Rights Reserved.
</footer>
  </div>
</template>

<script setup>
// Mengimpor file Navbar yang baru saja kita buat di folder components
import Navbar from './components/Navbar.vue'
</script>

<style>
/* --- RESET STYLE DASAR & LAYOUT --- */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Font awal Anda */
  background-color: #fffbef; /* Krem hangat khas Memphis */
  color: #333333;
}

.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
}

/* --- JARAK KONTEN (UKURAN TETAP SAMA SEPERTI AWAL) --- */
.main-content {
  margin-top: 70px; 
  flex-grow: 1;
  width: 100%;
  max-width: 1200px; /* Ukuran awal Anda */
  margin-left: auto;
  margin-right: auto;
  padding: 20px; /* Ukuran awal Anda */
}

/* --- STYLE FOOTER PALING BAWAH (DISESUAIKAN KE GAYA MEMPHIS) --- */
.footer {
  background-color: #fffbef; /* Menggunakan warna krem yang sama dengan latar agar menyatu */
  color: #000000; /* Teks hitam tegas */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Font disesuaikan */
  text-align: center;
  padding: 20px 16px; /* Ukuran padding awal Anda */
  font-size: 0.85rem; /* Ukuran font awal Anda */
  font-weight: 600; /* Teks sedikit lebih tebal dan bersih */
  border-top: 3px solid #000000; /* Batas garis hitam tebal khas pop-art retro */
  margin-top: 40px; /* Jarak awal Anda */
}

/* --- ANIMASI TRANSISI HALAMAN (FADE-SLIDE AWAL) --- */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(15px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}
</style>