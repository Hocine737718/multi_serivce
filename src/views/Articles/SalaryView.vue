<template>
    <div class="article">
    <span class="article_back">
        <div class="article_header">
            <div class="article_title">
                Fiscalité salariale		
            </div>
        </div>
        <div class="article_body" id="article_body">
            <div class="article_content">
                <h2>Définition</h2>
                <p>Le Cabinet GMS assiste ses clients en matière de fiscalité salariale dans une perspective préventive mais également dans le suivi de contentieux relatifs à l’application des impôts sur le revenu et du paiement des taxes de formation et d'apprentissage..</p>
                <p>Ainsi, le Cabinet participe à la définition des politiques de rémunération (rémunération contractuelle, rémunérations collectives, avantages en nature, frais professionnels …) en vue d’optimiser les impôts à payer et réduire ainsi la masse salariale.</p>
            </div>
        </div>
    </span>
    </div>
</template>
<script>
import ScrollReveal from 'scrollreveal';
export default {
    name:"SalaryView",
    mounted(){
        const sr = ScrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 2500,
            delay: 400
        })
        sr.reveal(`.article`);
    }
}
</script>