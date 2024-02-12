<template>
    <div class="article">
    <span class="article_back">
        <div class="article_header">
            <div class="article_title">
                Permis de travail	
            </div>
        </div>
        <div class="article_body" id="article_body">
            <div class="article_content">
                <h2>Introduction</h2>
                <p>Notre cabinet assure la réalisation de  toutes les démarches administratives de recrutement de la main d'œuvre étrangère conformément à la législation et réglementation en vigueur:</p>
                <h2>Nos prestations :</h2>
                <p>
                    - Obtention d'accord de principe<br/>
                    - Obtention des autorisations temporaire de travail (APT – ATT), de visa et permis de travail<br/>
                    - Obtention de la carte de résident et de la carte de commerçant<br/>
                    - Réalisation des formalités d'obtention des autorisations de transfert de salaire<br/>
                </p>
            </div>
        </div>
    </span>
    </div>
</template>
<script>
import ScrollReveal from 'scrollreveal';
export default {
    name:"WorkPermitView",
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