<template>
    <div class="article">
    <span class="article_back">
        <div class="article_header">
            <div class="article_title">
                Administration des ressources humaines
            </div>
        </div>
        <div class="article_body" id="article_body">
            <div class="article_content">
                <h2>Définition</h2>
                <p>Le cabinet Global Management Service, vous propose une gamme complète des prestations dans l’administration des ressources humaines gérées par un service spécialisé dans le domaine.</p>
                <p>Et en fonction de vos besoins, vous pouvez moduler le coût et le niveau d'externalisation de vos fonctions RH que vous souhaitez mettre en place.</p>
                <ul class="article_list">
                    <li><a href="/article/gestion-personnel">Gestion Du Personel</a></li>
                    <li><a href="/article/gestion-paie">Gestion De La Paie</a></li>
                    <li><a href="/article/correspondance-sociale">Correspondance sociale</a></li>
                    <li><a href="/article/permis-travail">Permis de travail </a></li>
                </ul>
            </div>
        </div>
    </span>
    </div>
</template>
<script>
import ScrollReveal from 'scrollreveal';
export default {
    name:"AdminRhView",

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