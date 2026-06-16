import { createApp } from 'vue'
import App from './App.vue'      // Titik satu (.) artinya mencari App.vue di folder yang sama
import router from './router'    // Memanggil folder router di sebelahnya

const app = createApp(App)

app.use(router)

app.mount('#app')