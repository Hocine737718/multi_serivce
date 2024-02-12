<template>
     <div class="article">
    <span class="article_back">
        <div class="article_header">
            <div class="article_title">
                Formation
            </div>
        </div>
        <div class="article_body" id="article_body">
            <div class="article_content">
                <h2>Introduction</h2>
                <p>GMS dispense une offre de formation spécialisée dans le domaine de l’administration des ressources humaines notamment en droit du travail et de la sécurité sociale à savoir:</p>
                <ul class="article_list">
                    <li>Les contrats de travail: réglementation et rédactions</li>
                    <li>Le temps de travail: détermination et aspects pratiques</li>
                    <li>La rémunération: aspects juridiques et pratiques</li>
                    <li>Les aléas de la relation de travail: suspension et fin de la relation de travail</li>
                    <li>Licenciement: différents types et approche juridique</li>
                    <li>Contentieux sociale:</li>
                    <li>La sécurité sociale: prestations salariés et obligations de l'employeur</li>
                </ul>
                <p>Nous réalisons nos formations selon plusieurs formules:</p>
                <ul class="article_list">
                    <li>Formule one to one, par une formation dédiée à un seul apprenant avec un coaching personnalisé</li>
                    <li>Formule inter-entreprise: en mettant en groupe plusieurs clients</li>
                    <li>Formule intra-entreprise: en formation dans l'entreprise et chez le client</li>
                </ul>
            </div>
        </div>
    </span>
    </div>   
</template>
<script>
import ScrollReveal from 'scrollreveal';
export default {
    name : "FormationView",
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