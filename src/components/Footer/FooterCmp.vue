<template>
    <footer class="footer">
        <div class="container footer_container">
            <div class="footer_row footer_first_row">
                <div class="footer_col">
                    <h2>Sociales</h2>
                    <div class="footer_socials">
                        <a href="https://www.facebook.com/" target="_blank"><i class="ri-facebook-box-fill"></i></a>
                        <a href="https://www.instagram.com/" target="_blank"><i class="ri-instagram-fill"></i></a>
                        <a href="https://twitter.com/" target="_blank"><i class="ri-twitter-x-fill"></i></a>
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
                        <a href="/article/droit-travail">Droit de travail</a><br>
                        <a href="/article/droit-securite-sociale">Droit de la sécurité sociale</a><br>
                        <a href="/article/fiscalite-salariale">Fiscalité salariale </a><br>
                        <a href="/article/audit-rh">L'audit de l'administration RH</a><br>
                    </div>
                </div>
                <div class="footer_col">
                    <h2>Raccourcis</h2>
                    <div class="footer_links">
                        <a href="/">Accueil</a><br>
                        <a href="/qui-somme-nous">Qui sommes nous</a><br>
                        <a href="/article/formation">Formations</a><br>
                        <a href="/contact">Contact</a><br>
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