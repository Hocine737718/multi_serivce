import { createApp} from 'vue'
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
import './assets/css/SignUp/signup.css'
import './assets/css/SignUp/media_signup.css'
import './assets/css/About/about.css'
import './assets/css/About/media_about.css'
import './assets/css/Article/article.css'
import './assets/css/Article/media_article.css'
import './assets/css/Statistics/statistics.css'
import './assets/css/Statistics/media_statistics.css'
import './assets/css/Application/application.css'
import './assets/css/Application/media_application.css'
import './assets/css/Application/select_application.css'
import './assets/css/Offers/offers.css'
import './assets/css/Offers/media_offers.css'
import './assets/css/Contact/contact.css'
import './assets/css/Contact/media_contact.css'
import './assets/css/Error/error.css'
import './assets/css/Error/media_error.css'
import './assets/css/ScrollUp/scrollup.css'
import './assets/css/Swal/swal.css'

import axios from 'axios';
import Swal from 'sweetalert2';

import store from './store'

axios.interceptors.request.use((config) => {
    Swal.fire({
      html: '<div class="loading"></div>',
      showConfirmButton: false,
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      }
    });
    return config;
});
axios.interceptors.response.use(
    (response) => {
      Swal.close();
      return response;
    },
    (error) => {
      Swal.close();
      return Promise.reject(error);
    }
);

createApp(App).use(store).use(router).use(CanvasJSStockChart).mount('#app')
