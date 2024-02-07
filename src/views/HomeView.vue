<template>
  <div class="home">
    <Slider/>
    <About/>
    <Services/>
  </div>
</template>

<script>
import Services from '@/components/Home/Services/ServicesCmp.vue'
import Slider from '@/components/Home/SliderCmp.vue'
import About from '@/components/Home/AboutCmp.vue'
export default {
  name: 'HomeView',
  components: {
    Slider,
    About,
    Services
  }
}
</script>
