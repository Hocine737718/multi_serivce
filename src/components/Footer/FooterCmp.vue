<template>
    <footer class="footer">
        <div class="container footer_container">
            <div class="footer_row footer_first_row">
                <div class="footer_col">
                    <h2>GMS-Logo</h2>
                    <div class="footer_socials">
                        <a href="#"><i class="ri-facebook-box-fill"></i></a>
                        <a href="#"><i class="ri-instagram-fill"></i></a>
                        <a href="#"><i class="ri-twitter-fill"></i></a>
                    </div>
                </div>
                <div class="footer_col">
                    <h2>Informations</h2>
                    <div  class="footer_infos">
                        <div  class="footer_info">
                            <i class="ri-home-2-fill"></i>
                            <span>199, Rue de Tripoli Bachdjerrah,<br> Alger 16000 Algérie</span>
                        </div>
                        <div  class="footer_info">
                            <i class="ri-phone-fill"></i>
                            <span>+213(0)23-76-86-36</span>
                        </div>
                        <div  class="footer_info">
                            <i class="ri-mail-fill"></i>
                            <a href="mailto:contact@gms-dz.com">contact@gms-dz.com</a>
                        </div>                        
                    </div>
                </div>
                <div class="footer_col">
                    <h2>Liens Utiles</h2>
                    <div class="footer_links">
                        <a href="#">Droit de travail</a><br>
                        <a href="#">Droit de la sécurité sociale</a><br>
                        <a href="#">Fiscalité salariale </a><br>
                        <a href="#">L'audit de l'administration RH</a><br>
                        <a href="#">Administration des ressources humaines</a><br>
                    </div>
                </div>
                <div class="footer_col">
                    <h2>Raccourcis</h2>
                    <div class="footer_links">
                        <a href="#">Accueil</a><br>
                        <a href="#">Qui sommes nous</a><br>
                        <a href="#">Formations</a><br>
                        <a href="#">Téléchargement</a><br>
                        <a href="#">Contact</a><br>
                    </div>
                </div>
            </div>
            <div class="footer_row">
                <p class="copyright">
                    Copyright ©
                    {{this.year}}
                    Global Management Services
                </p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterCmp',
    data(){
        return{
            year: new Date().getFullYear()
        }
    }
}
</script>