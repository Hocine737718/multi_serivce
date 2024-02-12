<template>
    <div class="article">
    <span class="article_back">
        <div class="article_header">
            <div class="article_title">
                Audit De Conformité Et d’efficacité	
            </div>
        </div>
        <div class="article_body" id="article_body">
            <div class="article_content">
                <h2>Définition</h2>
                <p>c'est un audit de conformité et d'efficacité de l'ensemble du processus de gestion administrative du personnel à savoir :</p>
                <ul class="article_list">
                    <li>Les formalités de recrutement</li>
                    <li>Dossiers administratifs</li>
                    <li>Les contrats de travail</li>
                    <li>Le règlement intérieur</li>
                    <li>La convention collective</li>
                    <li>Les procédures de gestion administratives</li>
                    <li>La rémunération</li>
                    <li>Heure de travail</li>
                    <li>Representation du personel</li>
                    <li>Medecine de travail</li>
                    <li>L'hygiène et sécurité</li>
                </ul> 
                <a class="article_btn" href="/audit">Demandez un audit gratuit</a>           
            </div>
        </div>
    </span>
    </div>
</template>
<script>
import ScrollReveal from 'scrollreveal';
export default {
    name:"AuditComplianceView",
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