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
            lines:[
                { id:  1, title: 'Développeur Web', clicks: 200, link: '/offres/drh' },  
                { id:  2, title: 'Directeur des Ressources Humaines', clicks: 100, link: '/offres/drh' },
            ],
            columns:[ 
                { title: 'ID', field: 'id' },
                { title: 'Titre', field: 'title' },
                { title: 'Clics', field: 'clicks' }
            ]
        }        
    }
}
</script>