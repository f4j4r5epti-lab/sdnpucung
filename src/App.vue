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
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f8fafc;
  color: #333333;
}

.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Memperbaiki typo 'min-h' menjadi 'min-height' agar valid */
  justify-content: space-between;
}

/* --- JARAK KONTEN AGAR TIDAK TERTUTUP NAVBAR --- */
.main-content {
  margin-top: 70px; 
  flex-grow: 1;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
}

/* --- STYLE FOOTER --- */
.footer {
  background-color: #1e3a8a;
  color: #ffffff;
  text-align: center;
  padding: 16px;
  font-size: 0.875rem;
  margin-top: 40px;
}

/* --- ANIMASI TRANSISI HALAMAN (FADE-SLIDE) --- */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(15px); /* Efek meluncur lembut dari bawah saat masuk */
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-15px); /* Efek menghilang naik sedikit saat keluar */
}
</style>