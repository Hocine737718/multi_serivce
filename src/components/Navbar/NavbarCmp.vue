<template>
<header class="header">
  <nav class="nav container">
    <div class="nav_data">
      <a href="#" class="nav_logo" @click="reload()">
        <img src="../../assets/img/logo.png" alt="Logo">
      </a> 
      <div class="nav_toggle" id="nav-toggle">
        <i class="ri-menu-line nav_burger"></i>
        <i class="ri-close-line nav_close"></i>
      </div>
    </div>

    <div class="nav_menu" id="nav-menu">
      <ul class="nav_list">
        <li>
          <a href="/" class="nav_link">Accueil</a>
        </li>

        <li class="dropdown_item">
          <a href="/qui-somme-nous" class="nav_link">
            Qui sommes-nous <i class="ri-arrow-down-s-line dropdown_arrow"></i>
          </a>
          <ul class="dropdown_menu">
            <li>
              <a href="/qui-somme-nous" class="dropdown_link">
                Présentation
              </a>
            </li>
            <li>
              <a href="/statistiques" class="dropdown_link">
                Statistiques
              </a>
            </li>
          </ul>
        </li>

        <li class="dropdown_item">
          <div class="nav_link">
            Nos préstations <i class="ri-arrow-down-s-line dropdown_arrow"></i>
          </div>
          <ul class="dropdown_menu">
            <li class="dropdown_subitem">
              <a href="/article/conseil" class="dropdown_link">
                Conseil <i class="ri-add-line dropdown_add"></i>
              </a>
              <ul class="dropdown_submenu">
                <li>
                  <a href="/article/droit-travail" class="dropdown_sublink">
                    Droit de travail
                  </a>
                </li>
                <li>
                  <a href="/article/droit-securite-sociale" class="dropdown_sublink">
                    Droit de la sécurité sociale
                  </a>
                </li>
                <li>
                  <a href="/article/fiscalite-salariale" class="dropdown_sublink">
                    Fiscalité salariale
                  </a>
                </li>
                <li>
                  <a href="/article/optimisation-salariale" class="dropdown_sublink">
                    Optimisation salariale
                  </a>
                </li>
              </ul>
            </li>

            <li class="dropdown_subitem">
              <a href="/article/audit-rh" class="dropdown_link">
                Audit de l'administration RH  <i class="ri-add-line dropdown_add"></i>
              </a>
              <ul class="dropdown_submenu">
                <li>
                  <a href="/article/audit-conformite" class="dropdown_sublink">
                    Audit de conformité et d’efficacité
                  </a>
                </li>
              </ul>  
            </li>

            <li class="dropdown_subitem">
              <a href="/article/admin-rh" class="dropdown_link">
                Administration RH  <i class="ri-add-line dropdown_add"></i>
              </a>
              <ul class="dropdown_submenu">
                <li>
                  <a href="/article/gestion-personnel" class="dropdown_sublink">
                    Gestion Du Personel
                  </a>
                </li>
                <li>
                  <a href="/article/gestion-paie" class="dropdown_sublink">
                    Gestion De La Paie
                  </a>
                </li>
                <li>
                  <a href="/article/correspondance-sociale" class="dropdown_sublink">
                    Correspondance sociale
                  </a>
                </li>
                <li>
                  <a href="/article/permis-travail" class="dropdown_sublink">
                    Permis de travail 
                  </a>
                </li>
              </ul> 
            </li>

            <li class="dropdown_subitem">
              <a href="/article/formation" class="dropdown_link">
                Formation 
              </a>
            </li>
          </ul>
        </li>

        <li class="dropdown_item">
          <div class="nav_link">
            Recrutement <i class="ri-arrow-down-s-line dropdown_arrow"></i>
          </div>
          <ul class="dropdown_menu">
            <li>
              <a href="/offres-emploi" class="dropdown_link">
                Offres d'emploi
              </a>
            </li>
            <li>
              <a href="/candidature-spontanee" class="dropdown_link">
                Candidature spontanée
              </a>
            </li>
          </ul>
        </li>

        <li class="dropdown_item">
          <div class="nav_link">
            Téléchargement <i class="ri-arrow-down-s-line dropdown_arrow"></i>
          </div>
          <ul class="dropdown_menu">
            <li>
              <a href="/telechargement/droit-travail" class="dropdown_link">
                Droit de Travail
              </a>
            </li>
            <li>
              <a href="/telechargement/droit-securite-sociale" class="dropdown_link">
                Droit de la securite sociale
              </a>
            </li>
            <li>
              <a href="/telechargement/seminaires" class="dropdown_link">
                Séminaires
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/contact" class="nav_link">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
</header>
</template>

<script>
export default {
  name: 'NavbarCmp',
  methods:{
    reload(){
      location.reload();
    }
  },
  mounted(){
    const showMenu = (toggleId, navId) =>{
      const toggle = document.getElementById(toggleId),nav = document.getElementById(navId);
      toggle.addEventListener('click', () =>{
        nav.classList.toggle('show-menu')
        toggle.classList.toggle('show-icon')
      })
    };
    showMenu('nav-toggle','nav-menu');
  }
}
</script>
