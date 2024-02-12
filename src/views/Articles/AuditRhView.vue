<template>
    <div class="article">
    <span class="article_back">
        <div class="article_header">
            <div class="article_title">
                L'audit de l'administration RH
            </div>
            <div class="article_nav">
                <a class="article_nav_item" href="/article/audit-conformite">Audit de conformité et d’efficacité</a>
            </div>
        </div>
        <div class="article_body" id="article_body">
            <div class="article_content">
                <h2>Définition</h2>
                <p>L’audit qu’offre le cabinet Global Management Services, a ces clients a pour but de vérifier la conformité des pratiques liées a l’administration des ressources humaines par rapport aux règles légale en vigueur et d'apprécier la cohérence et l'efficacité des procédures et outils mis en place a travers des techniques et référentiels spécifiques et pertinents, permettant d'exprimer une opinion sur les divers écarts éventuels afin de fournir au client des analyses objectives, des appréciations, des actions correctives, des recommandations et des commentaires utiles.</p>
            </div>
        </div>
    </span>
    </div>
</template>
<script>
import ScrollReveal from 'scrollreveal';
export default {
    name:"AuditRhView",
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