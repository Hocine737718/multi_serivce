<template>
    <div class="home_about" id="home_about">
        <span class="about_h_back">
        <div class="about_h_title">
            Qui sommes-nous
        </div>
        <p>
            Le cabinet Global Management Services, Sarl (par abréviation GMS) a été créé en Avril 2010 ; nous comptons plus de 20 salariés et de nombreux consultants externes spécialisés dans l'administration des ressources humaines avec tous ses aspects opérationnels ainsi que le conseil en droit social (droit du travail, sécurité sociale et fiscalité salariale).<br>
            Global Management Services possède les compétences, les ressources et le savoir-faire nécessaires pour relever vos défis en matière d’administration des ressources humaines.
        </p>
        <a href="/qui-somme-nous">Voir plus</a>
        </span>
    </div>
</template>

<script>
import ScrollReveal from 'scrollreveal';
export default {
    name:'AboutCmp',
    mounted(){
        const sr = ScrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 2500,
            delay: 400
        })
        sr.reveal(`#home_about`);
    }
}
</script>