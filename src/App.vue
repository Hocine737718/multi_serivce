<template>
  <NavbarCmp/>
  <router-view/>
  <FooterCmp/>
</template>

<script>
import NavbarCmp from '@/components/Navbar/NavbarCmp.vue';
import FooterCmp from '@/components/Footer/FooterCmp.vue';
export default {
  components:{NavbarCmp,FooterCmp}
}
</script>
