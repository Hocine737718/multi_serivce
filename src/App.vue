<template>
  <Navbar/>
  <router-view/>
  <Footer/>
  <ScrollUp/>
</template>

<script>
import Navbar from '@/components/Navbar/NavbarCmp.vue';
import Footer from '@/components/Footer/FooterCmp.vue';
import ScrollUp from '@/components/ScrollUpCmp.vue';
export default {
  components:{Navbar,Footer,ScrollUp}
}
</script>
