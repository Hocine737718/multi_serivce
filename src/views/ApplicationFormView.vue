<template>
    <div class="application">
        <span class="application_back">
        <div class="application_header">
            <div class="application_title">
            Formulaire de candidature
            </div>
            <p>
            Veuillez remplir ce formulaire en complétant tous les champs requis. Nous vous contacterons dès que possible.
            </p>
        </div>
        <div class="application_body">
            <div class="application_box">
                <div class="application_label">
                    Nom et Prénom:<span class="required">&ast;</span>
                </div>
                <input class="application_input" type="text"  required>
            </div>
            <div class="application_box">
                <div class="application_label">
                    Mail:<span class="required">&ast;</span>
                </div>
                <input class="application_input" type="text"  required>
            </div>
            <div class="application_box">
                <div class="application_label">
                    Téléphone:<span class="required">&ast;</span>
                </div>
                <input class="application_input" type="text"  required>
            </div>
            <div class="application_box">
                <div class="application_label">
                    Fonction:<span class="required">&ast;</span>
                </div>
                <input class="application_input" type="text"  required>
            </div>
            <div class="application_box">
                <div class="application_label">
                    Message:<span class="required">&ast;</span>
                </div>
                <textarea class="application_input  textarea" cols="30" rows="10" required></textarea>
            </div>
            <div class="application_box">
                <div class="application_label">
                    Joindre CV:<span class="required">&ast;</span>
                </div>
                <span>
                    <button>
                        <i class="ri-file-upload-fill"></i>
                        Parcourir
                    </button>
                    <!--input class="application_input" type="text" required-->
                    <small>La taille limite pour chaque fichier est de 100 MB</small>
                </span>
            </div>                       
        </div>
        <div class="applcation_footer">
            <button>
                Postuler
            </button>
        </div>
        </span>
    </div>
</template>
<script>
export default {
    name:'ApplicationFormView'
}
</script>