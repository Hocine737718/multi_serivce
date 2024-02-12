<template>
    <div class="home_services" id="home_services">
        <div class="services_header">
            <span>SERVICES</span>
            <h2>Comment pouvons-nous vous aider ?</h2>
        </div>
        <div class="services_cards">
            <CardService :icon="card1.icon" :header="card1.header" :body="card1.body" :lien="card1.lien" id="srv_card1"/>
            <CardService :icon="card2.icon" :header="card2.header" :body="card2.body" :lien="card2.lien" id="srv_card2"/>
            <CardService :icon="card3.icon" :header="card3.header" :body="card3.body" :lien="card3.lien" id="srv_card3"/>
        </div>
    </div>
</template>

<script>
import CardService from '@/components/Home/Services/CardServiceCmp.vue'
import ScrollReveal from 'scrollreveal';
export default {
    name: 'ServicesCmp',
    components:{
        CardService
    },
    data(){
        return{
            card1:{ icon:"ri-pencil-fill",
                    header:"Conseil",
                    body:"Le cabinet Global Management Services, met à votre disposition des juristes expérimenté pour vous conseillez et vous accompagnez afin de veiller à votre sécurité judiciaire....",
                    lien:"/article/conseil"
                  },
            card2:{ icon:"ri-line-chart-line",
                    header:"Audit de l'administration RH",
                    body:"L’audit qu’offre le cabinet Global Management Services, a ces clients a pour but de vérifier la conformité des pratiques liées a l’administration des ressources humaines par rapport aux règles...",
                    lien:"/article/audit-rh"
                  },
            card3:{ icon:"ri-macbook-line",
                    header:"Administration RH",
                    body:"Le cabinet Global Management Service, vous propose une gamme complète des prestations dans l’administration des ressources humaines gérées par un service spécialisé dans le domaine...",
                    lien:"/article/admin-rh"
                  }
        }
    },
    mounted(){
        const sr = ScrollReveal({
            origin: 'left',
            distance: '60px',
            duration: 2500,
            delay: 400
        })
        sr.reveal(`#srv_card1`);
        sr.reveal(`#srv_card2`, {delay: 800});
        sr.reveal(`#srv_card3`, {delay: 1200});
    }
}
</script>