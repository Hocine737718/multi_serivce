import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//import './assets/css/swiper-bundle.min.css'

import './assets/css/_global.css'
import './assets/css/Navbar/navbar.css'
import './assets/css/Navbar/media_navbar.css'
import './assets/css/Footer/footer.css'
import './assets/css/Footer/media_footer.css'
import './assets/css/Home/home.css'
import './assets/css/Home/media_home.css'
import './assets/css/Home/Slider/slider.css'
import './assets/css/Home/Slider/media_slider.css'
import './assets/css/Home/Services/services.css'
import './assets/css/Home/Services/media_services.css'
import './assets/css/ScrollUp/scrollup.css'

//import './assets/js/swiper-bundle.min.js'
//import './assets/js/slider.js'

createApp(App).use(router).mount('#app')
