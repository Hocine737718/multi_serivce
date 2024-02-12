<template>
    <div class="article">
    <span class="article_back">
    <div class="article_header">
        <div class="article_title">
            Droit de travail
        </div>
    </div>
    <div class="article_body" id="article_body">
        <div class="article_content" id="article_intro">
            <h2>Introduction</h2>
            <p>Le Cabinet Global Management Services, vous conseille et vous assiste sur tous les aspects du droit de travail qu’ils soient liés à la législation et à la réglementation sociales, ou imposés par les stratégies à mettre en oeuvre dans un contexte amiable.</p>
        </div>

        <div class="article_content" id="article_individual">
            <h2>1.1. Relations Individuelles de Travail</h2>
            <p>- Elaboration et rédaction des différents types de contrats</p>
            <ul class="article_list">
                <li>Contrat de travail a durée déterminée et indéterminée</li>
                <li>Contrat cadre dirigeant</li>
                <li>Contrat de formation</li>
                <li>Contrat de consultant</li>
                <li>Contrat de prêt</li>
                <li>Contrat utilisation véhicule</li>
            </ul>  
            <p>- Elaboration de tous actes concernant la relation salariale ou relevant du pouvoir disciplinaire de l'employeur.<br>
                - Durée du travail et aménagement de la durée du travail.<br>
                - Suspension du contrat de travail : accident, maladie, etc.<br>
                - Rupture du contrat de travail.<br>
                - Droit du licenciement pour motif économique.<br>
                - Faire face ou gérer les modes alternatifs de rupture du contrat de travail.<br>
                - Ruptures négociées (procédure de rupture conventionnelle, etc.<br>
                - Obligations légales ou conventionnelles de l’employeur (formation, hygiène et sécurité, etc.)
            </p>      
        </div>

        <div class="article_content" id="article_collective">
            <h2>1.2. Relations Collectives de Travail</h2>
            <ul class="article_list">
                <li>Relations entre l’employeur et les institutions représentatives du personnel</li>
                <li>Elaboration et rédaction des règlements intérieure selon l’activité de l’entreprise</li>
                <li>Accompagnement dans l’élection et installation du comité de participation</li>
                <li>Elaboration et rédaction des conventions du comité de participation et Règlement intérieur du comité de participation</li>
                <li>Accompagnement dans l’élection et installation des représentants des travailleurs</li>
                <li>Elaboration et rédaction des Procédures disciplinaire</li>
                <li>Convention et accord collectif, (de la négociation à l’enregistrement)</li>
                <li>Accompagnement dans l’installation de la commission HSE</li>
                <li>Accompagnement toute au long de la procédure de départ volontaire Conflits collectifs</li>
            </ul> 
        </div>

        <div class="article_content" id="article_interlocutor">
            <h2>1.3. Relations avec les interlocuteurs habituels de l’entreprise :</h2>
            <p>Médecine du travail, inspection du travail, organisations syndicales, etc.</p>
        </div>
    </div>
    </span>
    </div>
</template>
<script>
import ScrollReveal from 'scrollreveal';
export default {
    name:"WorkLawView",
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