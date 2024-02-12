<template>
    <div class="article">
    <span class="article_back">
        <div class="article_header">
            <div class="article_title">
                Gestion de la paie
            </div>
        </div>
        <div class="article_body" id="article_body">
            <div class="article_content">
                <h2>Introduction</h2>
                <p>Nous vous proposons une prestation complète de sous-traitance paie complète<br/></p>
                <p>
                    
                    - Etablissement des bulletins de paie conformément aux dispositions légales et conventionnelles<br/>
                    - Traitement des charges sociales périodiques et annuelles dans les délais impartis (télédéclaration)<br/>
                    - Etablissement des déclarations annuelles<br/>
                    - Analyse des données de paies (durée du travail, calcul et suivi des congés payés…)<br/>
                    - Gestion administrative liée aux paies : absences pour maladie, maternité, accident du travail, prêts sociaux, avances sur salaire.<br/>
                </p>
            </div>
        </div>
    </span>
    </div>
</template>
<script>
import ScrollReveal from 'scrollreveal';
export default {
    name:'PayrollView',
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