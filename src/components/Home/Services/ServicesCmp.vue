<template>
    <div class="home_services">
        <div class="services_header">
            <span>SERVICES</span>
            <h2>Comment pouvons-nous vous aider ?</h2>
        </div>
        <div class="services_cards">
            <CardService :icon="card1.icon" :header="card1.header" :body="card1.body" :footer="card1.footer" />
            <CardService :icon="card2.icon" :header="card2.header" :body="card2.body" :footer="card2.footer" />
            <CardService :icon="card3.icon" :header="card3.header" :body="card3.body" :footer="card3.footer" />
        </div>
    </div>
</template>

<script>
import CardService from '@/components/Home/Services/CardServiceCmp.vue'
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
                    footer:"#"
                  },
            card2:{ icon:"ri-line-chart-line",
                    header:"Audit de l'administration RH",
                    body:"L’audit qu’offre le cabinet Global Management Services, a ces clients a pour but de vérifier la conformité des pratiques liées a l’administration des ressources humaines par rapport aux règles...",
                    footer:"#"
                  },
            card3:{ icon:"ri-macbook-line",
                    header:"Administration RH",
                    body:"Le cabinet Global Management Service, vous propose une gamme complète des prestations dans l’administration des ressources humaines gérées par un service spécialisé dans le domaine...",
                    footer:"#"
                  }
        }
    }
}
</script>