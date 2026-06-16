import { createRouter, createWebHistory } from 'vue-router'

// 1. IMPORT SEMUA KOMPONEN HALAMAN ANDA
import HomeView from '../views/Home.vue'
import ProfilView from '../views/Profil.vue'
import AkademikView from '../views/Akademik.vue'
import KesiswaanView from '../views/Kesiswaan.vue'
import BeritaView from '../views/Berita.vue'
import PPDBView from '../views/PPDB.vue'
import KontakView from '../views/Kontak.vue'

// Import halaman detail berita baru yang menangani Multi-Foto & Slideshow
import BeritaDetailView from '../views/BeritaDetail.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/profil',
      name: 'profil',
      component: ProfilView
    },
    {
      path: '/akademik',
      name: 'akademik',
      component: AkademikView
    },
    {
      path: '/kesiswaan',
      name: 'kesiswaan',
      component: KesiswaanView
    },
    {
      path: '/berita',
      name: 'berita',
      component: BeritaView
    },
    // RUTE BARU: Menangkap ID Berita secara dinamis saat tombol diklik
    {
      path: '/berita/:id',
      name: 'berita-detail',
      component: BeritaDetailView
    },
    {
      path: '/PPDB',
      name: 'PPDB',
      component: PPDBView
    },
    {
      path: '/kontak',
      name: 'kontak',
      component: KontakView
    }
  ]
})

export default router