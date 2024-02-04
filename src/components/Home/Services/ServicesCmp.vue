<template>
    <div class="home_services">
        <div class="services_header">
            <span>SERVICES</span>
            <h2>Comment pouvons-nous vous aider ?</h2>
        </div>
        <div class="services_cards">
            <CardService/>
            <CardService/>
            <CardService/>
        </div>
    </div>
</template>

<script>
import CardService from '@/components/Home/Services/CardServiceCmp.vue'
export default {
    name: 'ServicesCmp',
    components:{
        CardService
    }
}
</script>