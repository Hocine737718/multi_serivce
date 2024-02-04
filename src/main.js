import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/_global.css'
import './assets/css/Navbar/navbar.css'
import './assets/css/Navbar/media_navbar.css'
import './assets/css/Footer/footer.css'
import './assets/css/Footer/media_footer.css'

createApp(App).use(router).mount('#app')
