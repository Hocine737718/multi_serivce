<template>
    <div class="statistics">
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
                <Numbers/>
            </div>
        </div>
        </span>
    </div>
</template>
<script>
import References from '@/components/Statistics/ReferencesCmp.vue';
import Numbers from '@/components/Statistics/NumbersCmp.vue';
export default {
    name:'StatisticsView',
    components: {
        References, Numbers
    }, 
}
</script>