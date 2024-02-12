<template>
    <div class="article">
    <span class="article_back">
        <div class="article_header">
            <div class="article_title">
                Droit de la sécurité sociale
            </div>
        </div>
        <div class="article_body" id="article_body">
            <div class="article_content">
                <h2>Définition</h2>
                <p>Le Cabinet Global Management Services assiste ses clients en matière de Sécurité Sociale dans une perspective préventive mais également dans le suivi de contentieux relatifs à l’application des cotisations sociales.</p>
                <p>Ainsi, le Cabinet Global Management Services participe à la définition des politiques de rémunération (rémunération contractuelle, rémunérations collectives, avantages en nature, frais professionnels …) en vue d’optimiser, sur le plan des charges sociales, non seulement la masse salariale de l’entreprise mais également les revenus de son personnel.</p>
                <p>Le champ d’intervention du Cabinet Global Management Services en la matière concerne les cotisations ou contributions sociales de l’entreprise en validant les pratiques actuelles, suite à un audit, au regard des différents textes ou principes applicables par la CNAS</p>
                <p>Le Cabinet Global Management Services assiste également ses clients dans le cadre de contrôles ou de redressements CNAS.</p>
                <p>En cas de contentieux CNAS, le Cabinet Global Management Services assiste ses clients tout au long de la procédure.</p>
            </div>
        </div>
    </span>
    </div>
</template>
<script>
import ScrollReveal from 'scrollreveal';
export default {
    name:"SocialSecurityLawView",
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