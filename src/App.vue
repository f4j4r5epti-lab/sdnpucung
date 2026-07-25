<template>
  <div class="app-layout">
    
    <!-- 1. DEKORASI BACKGROUND MESH GLOW (Persis Seperti Gambar Referensi) -->
    <div class="background-mesh-layer">
      <div class="mesh-glow glow-cyan-top"></div>
      <div class="mesh-glow glow-yellow-hero"></div>
      <div class="mesh-glow glow-purple-middle"></div>
      <div class="mesh-glow glow-pink-bottom"></div>
      
      <!-- Floting Small Accent Dots (Titik-titik Dekoratif Mengambang) -->
      <span class="dot dot-1"></span>
      <span class="dot dot-2"></span>
      <span class="dot dot-3"></span>
      <span class="dot dot-4"></span>
      <span class="dot dot-5"></span>
    </div>

    <!-- 2. NAVBAR KOMPONEN -->
    <Navbar />

    <!-- 3. KONTEN UTAMA HALAMAN -->
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="page-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- 4. FOOTER MODERN SOFT GLASS -->
    <footer class="footer-modern">
      <div class="footer-container">
        <div class="footer-pill-badge">
          <span>✨ SD NEGERI PUCUNG</span>
        </div>
        <p class="copyright-text">
          &copy; 2026 SD NEGERI PUCUNG. All Rights Reserved.
        </p>
      </div>
    </footer>

  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

/* --- RESET & BASE STYLES --- */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  min-height: 100vh;
  scroll-behavior: smooth;
}

body {
  font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: #f6f8fd; /* Latar dasar terang & lembut */
  color: #1e293b;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

/* --- APP LAYOUT --- */
.app-layout {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
}

/* --- BACKGROUND MESH GLOW (Inspirasi Persis Gambar) --- */
.background-mesh-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}

.mesh-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.6;
}

/* Pendaran Gradien Lembut di Berbagai Sudut */
.glow-cyan-top {
  width: 500px;
  height: 500px;
  background: #a5f3fc;
  top: -100px;
  left: -100px;
}

.glow-yellow-hero {
  width: 550px;
  height: 550px;
  background: #fde047;
  top: 10%;
  right: -100px;
  opacity: 0.5;
}

.glow-purple-middle {
  width: 600px;
  height: 600px;
  background: #ddd6fe;
  top: 45%;
  left: -150px;
}

.glow-pink-bottom {
  width: 500px;
  height: 500px;
  background: #fbcfe8;
  bottom: 5%;
  right: -50px;
}

/* Titik-titik Warna Mengambang (Floating Accent Dots) */
.dot {
  position: absolute;
  border-radius: 50%;
}
.dot-1 { width: 12px; height: 12px; background: #3b82f6; top: 12%; left: 8%; }
.dot-2 { width: 10px; height: 10px; background: #10b981; top: 25%; left: 42%; }
.dot-3 { width: 14px; height: 14px; background: #f59e0b; top: 40%; right: 12%; }
.dot-4 { width: 8px; height: 8px; background: #6366f1; top: 70%; left: 15%; }
.dot-5 { width: 12px; height: 12px; background: #ec4899; bottom: 15%; right: 25%; }

/* --- MAIN CONTENT --- */
.main-content {
  position: relative;
  z-index: 2;
  flex-grow: 1;
  width: 100%;
  padding-top: 80px; /* Ruang untuk Navbar transparan */
}

/* --- FOOTER GLASSMORPHISM --- */
.footer-modern {
  position: relative;
  z-index: 2;
  margin-top: 80px;
  padding: 30px 20px;
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255, 255, 255, 0.7);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.footer-pill-badge {
  background: #ffffff;
  padding: 6px 18px;
  border-radius: 99px;
  font-size: 0.75rem;
  font-weight: 800;
  color: #4f46e5;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.8);
}

.copyright-text {
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 600;
  text-align: center;
}

/* --- ANIMASI TRANSISI HALAMAN HALUS --- */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

/* --- CLASS SHAPE ORGANIK UNTUK DIGUNAKAN DI TIAP HALAMAN --- */
/* (Bisa dipakai di komponen anak seperti Hero Section) */
.blob-shape-yellow {
  background: #facc15;
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
}

.blob-shape-blue {
  background: #60a5fa;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
}

.btn-yellow-rounded {
  background: linear-gradient(135deg, #facc15 0%, #eab308 100%);
  color: #0f172a;
  font-weight: 800;
  border-radius: 99px;
  padding: 14px 32px;
  border: none;
  box-shadow: 0 10px 25px rgba(234, 179, 8, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-yellow-rounded:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 30px rgba(234, 179, 8, 0.45);
}
</style>