<template>
  <Navbar/>
  <router-view/>
  <SignUp/>
  <Footer/>
  <ScrollUp/>
</template>

<script>
import Navbar from '@/components/Navbar/NavbarCmp.vue';
import SignUp from '@/components/SignUpCmp.vue'
import Footer from '@/components/Footer/FooterCmp.vue';
import ScrollUp from '@/components/ScrollUpCmp.vue';
export default {
  components:{Navbar,SignUp,Footer,ScrollUp},
  beforeMount(){
    this.$store.dispatch('get_offers');
  }
}
</script>
