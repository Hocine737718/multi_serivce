<template>
    <div class="application">
        <span class="application_back">
        <div class="application_header">
            <div class="application_title">
            Demande Devis
            </div>
            <p>
            Veuillez remplir ce formulaire en complétant tous les champs requis. Nous vous contacterons dès que possible.
            </p>
        </div>
        <div class="application_body">
            <div class="application_box">
                <div class="application_label">
                    Entreprise:<span class="required">&ast;</span>
                </div>
                <input class="application_input" type="text" v-model="entreprise" required>
            </div>
            <div class="application_box">
                <div class="application_label">
                    Votre nom:<span class="required">&ast;</span>
                </div>
                <input class="application_input" type="text" v-model="name" required>
            </div>
            <div class="application_box">
                <div class="application_label">
                    Fonction:<span class="required">&ast;</span>
                </div>
                <input class="application_input" type="text" v-model="job" required>
            </div>
            <div class="application_box">
                <div class="application_label">
                    Mail:<span class="required">&ast;</span>
                </div>
                <input class="application_input" type="email" v-model="email" required>
            </div>
            <div class="application_box">
                <div class="application_label">
                    Téléphone:<span class="required">&ast;</span>
                </div>
                <input class="application_input" type="phone" v-model="phone" required>
            </div>
            <div class="application_box">
                <div class="application_label">
                    Message:<span class="required">&ast;</span>
                </div>
                <textarea class="application_input  textarea" cols="30" rows="10" v-model="message" required></textarea>
            </div>
            <div class="application_box">
                <div class="application_label">
                    Objet:<span class="required">&ast;</span>
                </div>
                <div class="application_input select">
                    <div class="select_btn">
                        <span>{{this.selectedObject}}</span>
                        <i class="ri-arrow-drop-down-line"></i>
                    </div>
                    <div class="select_content">
                        <div class="select_search">
                            <i class="ri-search-line"></i>
                            <input spellcheck="false" type="text" placeholder="Rechercher" v-model="this.searchQuery">
                        </div>
                        <ul class="select_options">
                            <li @click="updateName(option)" v-for="option in this.filtredOptions" :key="option">{{ option }}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="application_box">
                <div class="application_label">
                    Joindre un fichier
                </div>
                <span>
                    <div class="application_file">
                        <button @click="selectFile">
                            <i class="ri-file-upload-fill"></i>
                            Parcourir
                        </button>
                        <input type="file" id="file_input" @change="onFileChange($event)" style="display:none;">
                        <small>{{this.filename}}</small>
                    </div>
                    <small>La taille limite pour chaque fichier est de 20 MB</small>
                </span>
            </div>                       
        </div>
        <div class="applcation_footer">
            <button @click="action()">
                Envoyer
            </button>
        </div>
        </span>
    </div>
</template>
<script>
import {select_file,handleFileChange,validateEmail,validatePhone} from '@/assets/js/global.js';
import Swal from 'sweetalert2';
export default {
    name:'ApplicationFormView',
    data(){
        return{
            name:"",
            email:"",
            phone:"",
            entreprise:"",
            job:"",
            message:"",
            selected_file:"",
            object:"",
            options:[
                    "Elaboration et rédaction des différents types de contrats",
                    "Elaboration de tous actes concernant la relation salariale ou relevant du pouvoir disciplinaire de l'employeur",
                    "Suspension du contrat de travail : accident, maladie, etc.",
                    "Faire face ou gérer les modes alternatifs de rupture du contrat de travail",
                    "Ruptures négociées (procédure de rupture conventionnelle, etc.)",
                    "Obligations légales ou conventionnelles de l’employeur (formation, hygiène et sécurité, etc.)",
                    "Relations Collectives de Travail",
                    "Relations avec les interlocuteurs habituels de l’entreprise",
                    "Conseil en Droit de la sécurité sociale",
                    "Conseil en Fiscalité salariale",
                    "Gestion administrative du personnel",
                    "Gestion de la paie et optimisation salariale",
                    "Gestion de la correspondance sociale",
                    "Gestion de la main étrangère",
                    "Rupture du contrat de travail",
                    "Droit du licenciement pour motif économique",
                    "Durée du travail et aménagement de la durée du travail"
                    ],
            searchQuery:""
        }
    },
    computed:{
        selectedObject(){
            if(this.object=="") return "Sélectionner"
            else return this.object;
        },
        filtredOptions(){
            if(this.searchQuery!=="")
            {
                let ops=this.options.filter(item=>item.includes(this.searchQuery));
                if(ops!=null && ops!=[]) return ops;
                else return [];                
            }
            return this.options;
        },
        filename(){
            if(this.selected_file!="") return this.selected_file.name;
            else return "Aucun fichier sélectionné";
        }
    },
    methods:{
        selectFile(){
            select_file("file_input");
        },
        onFileChange(event){
            handleFileChange(event).then((file) => {
                this.selected_file = file;
            });
        },
        async action(){
            this.name=this.name.trim();
            this.email=this.email.trim();
            this.phone=this.phone.trim();
            this.message=this.message.trim();
            this.job=this.job.trim();
            this.entreprise=this.entreprise.trim()

            if(this.name!="" && this.email!="" && this.message!="" && this.phone!="" && this.job!="" && this.entreprise!="" && this.object!="" && this.selected_file!="") 
            {
                var data={name:this.name,email:this.email,phone:this.phone,job:this.job,message:this.message,entreprise:this.entreprise,object:this.object};
                await this.$store.dispatch('quote',{data:data,file:this.selected_file});
                location.reload();
            }
            else if(!validateEmail(this.email))
            {
                Swal.fire({
                    icon: "error",title: "Erreur",text: "Revérifier l'email !",
                });
            }
            else if(!validatePhone(this.phone))
            {
                Swal.fire({
                    icon: "error",title: "Erreur",text: "Revérifier le numéro de téléphone !",
                });
            }
            else
            {
                Swal.fire({
                    icon: "error",title: "Erreur",text: "Réessayer SVP !",
                });
            }
        },
        updateName(option) {
            const select = document.querySelector(".select");
            select.classList.remove("active");
            this.searchQuery = "";
            this.object = option;
            this.options.splice(this.options.indexOf(option),1);
            this.options.unshift(option);
        }      
    },
    mounted(){
        const select = document.querySelector(".select"),
        selectBtn = select.querySelector(".select_btn");
        selectBtn.addEventListener("click", () => select.classList.toggle("active"));
    }
}
</script>