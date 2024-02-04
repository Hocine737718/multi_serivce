<template>
  <div class="home">
    <Services/>
    <SignUp/>
  </div>
</template>

<script>
import Services from '@/components/Home/Services/ServicesCmp.vue'
import SignUp from '@/components/Home/SignUpCmp.vue'

export default {
  name: 'HomeView',
  components: {
    Services,
    SignUp
  }
}
</script>
