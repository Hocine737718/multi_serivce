<template>
  <NavbarCmp/>
  <router-view/>
</template>

<script>
import NavbarCmp from '@/components/Navbar/NavbarCmp.vue';
export default {
  components:{NavbarCmp}
}
</script>
