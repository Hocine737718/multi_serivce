<template>
    <div class="offeres">
        <span class="offeres_back">
        <div class="offeres_header">
            OFFRES D'EMPLOI
        </div>
        <OfferesTableCmp :lines="lines" :columns="columns"/>
        </span>
    </div>
</template>
<script>
import OfferesTableCmp from '@/components/Offeres/OfferesTableCmp.vue'
export default {
    name:'JobOffersView',
    components:{OfferesTableCmp},
    data(){
        return {
            columns:[ 
                { title: 'ID', field: 'id' },
                { title: 'Titre', field: 'title' },
                { title: 'Clics', field: 'clicks' }
            ]
        }        
    },
    computed:{
        lines(){
            return this.$store.state.offers;
        }
    }
}
</script>