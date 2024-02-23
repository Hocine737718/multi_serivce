<template>
    <div class="statistics" id="statistics">
        <span class="statistics_back">
        <div class="statistics_box">
            <div class="statistics_header">
                Nos références
            </div>
            <div class="statistics_body">
                <p>Dans le respect des valeurs et des accords de confidentialité que notre cabinet a signé avec les clients, nous somme dans l’obligation de préserver l’anonymat de nos clients.</p>   
                <References/>
            </div>
        </div>
        <div class="statistics_box">
            <div class="statistics_header">
                GMS EN CHIFFRES
            </div>
            <div class="statistics_body">
                <Numbers />
            </div>
        </div>
        </span>
    </div>
</template>
<script>
import References from '@/components/Statistics/ReferencesCmp.vue';
import Numbers from '@/components/Statistics/NumbersCmp.vue';
import ScrollReveal from 'scrollreveal';
export default {
    name:'StatisticsView',
    components: {
        References, Numbers
    },
    mounted(){
        const sr = ScrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 2500,
            delay: 400
        })
        sr.reveal(`#statistics`);
    }
}

</script>