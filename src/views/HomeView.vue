<template>
  <div class="home">
    <Slider/>
    <Services/>
    <SignUp/>
  </div>
</template>

<script>
import Services from '@/components/Home/Services/ServicesCmp.vue'
import Slider from '@/components/Home/SliderCmp.vue'

export default {
  name: 'HomeView',
  components: {
    Slider,
    Services
  }
}
</script>
