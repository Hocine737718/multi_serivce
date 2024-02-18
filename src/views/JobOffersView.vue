<template>
    <div class="offers">
        <span class="offers_back">
        <div class="offers_header">
            OFFRES D'EMPLOI
        </div>
        <OffersTableCmp :lines="lines" :columns="columns"/>
        </span>
    </div>
</template>
<script>
import OffersTableCmp from '@/components/Offers/OffersTableCmp.vue'
export default {
    name:'JobOffrsView',
    components:{OffersTableCmp},
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