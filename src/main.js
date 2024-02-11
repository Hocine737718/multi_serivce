import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import CanvasJSStockChart from '@canvasjs/vue-stockcharts';

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
import './assets/css/About/about.css'
import './assets/css/About/media_about.css'
import './assets/css/Article/article.css'
import './assets/css/Article/media_article.css'
import './assets/css/Statistics/statistics.css'
import './assets/css/Statistics/media_statistics.css'
import './assets/css/ScrollUp/scrollup.css'



createApp(App).use(router).use(CanvasJSStockChart).mount('#app')
