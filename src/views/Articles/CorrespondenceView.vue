<template>
     <div class="article">
    <span class="article_back">
        <div class="article_header">
            <div class="article_title">
                Gestion de la correspondance sociale
            </div>
        </div>
        <div class="article_body" id="article_body">
            <div class="article_content">
                <h2>Introduction</h2>
                <p>Nous vous proposons une prestation de gestion complète des relations avec les interlocuteurs externes (CNAS, CNR)<br/></p>
                <p> 
                    - Déclaration et demande d’affiliation d’un assure social (SECU 01) à la CNAS dans les délais prescrits<br/>
                    - Dépôt des dossiers carte CHIFA avec suivi et activation<br/>
                    - Dépôt et suivi des remboursements médicaux, allocations familiales et retrait des bordereaux<br/>
                    - Dépôt et suivi des dossiers de congé de maternité<br/>
                    - Déclaration des arrêts de travail et accidents de travail avec suivi des dossiers (décompte CNAS)<br/>
                    - Assistance, dépôt et suivi des dossiers de départ en retraite<br/>
                </p>
            </div>
        </div>
    </span>
    </div>   
</template>
<script>
import ScrollReveal from 'scrollreveal';
export default {
    name : "CorrespondenceView",
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