<template>
    <div class="article">
    <span class="article_back">
        <div class="article_header">
            <div class="article_title">
                Gestion du personnel	
            </div>
        </div>
        <div class="article_body" id="article_body">
            <div class="article_content">
                <h2>Introduction</h2>
                <p>Nous vous accompagnons de l'arrivée jusqu'au départ de chaque collaborateur<br/>
                   - Démarche administrative du recrutement (ANEM, entreprise de placement privé Agrée)<br/>
                   - Élaboration des différents documents relatifs à l’installation des salariés :<br/></p>
                <ul class="article_list">
                    <li>&nbsp;Promesse d’embauche</li>
                    <li>&nbsp;Contrats de travail</li>
                    <li>&nbsp;PV d’installation</li>
                    <li>&nbsp;Déclaration et demande d’affiliation d’un assure social</li>
                    <li>&nbsp;Démarche administrative relative aux abattements CNAS</li>
                </ul>
                <p>- Élaboration de tout type de documents relatifs à la gestion administrative du personnel</p>
                <ul class="article_list">
                    <li>&nbsp;Notifications, décisions, avenants</li>
                    <li>&nbsp;Demande et titre de congé, récupérations</li>
                    <li>&nbsp;Attestation et certificat de travail</li>
                    <li>&nbsp;Lettres de mise en demeure</li>
                    <li>&nbsp;Tenue des registres légaux</li>
                </ul>
            </div>
        </div>
    </span>
    </div>    
</template>
<script>
import ScrollReveal from 'scrollreveal';
export default {
    name:'PersonnelView',
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