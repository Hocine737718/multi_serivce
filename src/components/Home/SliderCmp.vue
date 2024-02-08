<template>
    <div class="home_slider" id="home_slider">
        <swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="0"
            navigation
            :pagination="{ clickable: true }"
            loop=true
            grabCursor=true
            @swiper="onSwiper"
            @slideChange="onSlideChange"
        >
            <swiper-slide>
                <div class="slider_article article2">
                    <div class="slider_titles">
                        <div class="slider_first_title">
                            GMS au service de votre business
                        </div>
                        <div class="slider_second_title">
                            Expertise - Disponibilité - Assistance - Solutions
                        </div>
                        <div class="slider_button2">
                            DECOUVREZ GMS
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="slider_article article1">
                    <div class="slider_buttons">
                        <div class="slider_button"><a href="#">Audit gratuit</a></div>
                        <div  class="slider_button"><a href="#">Demandez un devis</a></div>                        
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="slider_article article3">
                    <div class="slider_titles">
                        <div class="slider_first_title">
                            GMS L’EXPERT DE L’ADMINISTRATION RH 
                        </div>
                        <div class="slider_second_title">
                            Assistance Administrative - Assistance Juridique - Audit de Conformité & de Performace
                        </div>
                        <div class="slider_button2">
                            LIRE PLUS
                        </div>
                    </div>
                </div>
            </swiper-slide>            
            ...
        </swiper> 
    </div>   
</template>

<script>
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default {
    name:'SliderCmp',
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y],
      };
    },
}
</script>