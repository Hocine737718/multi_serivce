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
                <input class="application_input" type="text" v-model="phone" required>
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
                    Joindre CV:<span class="required">&ast;</span>
                </div>
                <span>
                    <div class="application_file">
                        <button @click="select_file">
                            <i class="ri-file-upload-fill"></i>
                            Parcourir
                        </button>
                        <input type="file" id="file_input" @change="handleFileChange($event)" style="display:none;">
                        <small>{{this.filename}}</small>
                    </div>
                    <small>La taille limite pour chaque fichier est de 25 MB</small>
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
        select_file(){
            var file_input = document.getElementById("file_input");
            file_input.click();
        },
        async handleFileChange(event){
            //const maxFiles = 1;
            const maxSizeInBytes = 25 * 1024 * 1024;
            try{
                const fileList = event.target.files;
                if (fileList.length == 1) 
                {
                    this.selected_file=fileList[0];
                    if(this.selected_file.type !== "image/jpeg" && 
                       this.selected_file.type !== "image/png" &&
                       this.selected_file.type !== "image/jpg" &&
                       this.selected_file.type !== "application/pdf" &&
                        this.selected_file.type !== "application/msword" && // For .doc files
                        this.selected_file.type !== "application/vnd.openxmlformats-officedocument.wordprocessingml.document") // For .docx files
                    {
                        Swal.fire({
                            icon: "error",title: "Erreur",text: "Erreur de type !",
                        }); 
                        throw new Error("Erreur de type !");
                    }
                    else if(this.selected_file.size> maxSizeInBytes)
                    {
                        Swal.fire({
                            icon: "error",title: "Erreur",text: "Ne dépasse pas 25 Mo !",
                        }); 
                        throw new Error("Ne dépasse pas 25 Mo !");
                    }
                }
                else if(fileList.length > 1)
                {
                    Swal.fire({
                        icon: "error",title: "Erreur",text: "Séléctionner un seul fichier seulement !",
                    });
                }
            }
            catch (error) {
                this.selected_file="";
                console.error(error);
            }
        },
        action(){
            if(this.name!="" && this.email!="" && this.message!="" && this.phone!="" && this.job!="" && this.entreprise!="" && this.object!="" && this.selected_file!="") 
            {
                var data={name:this.name,email:this.email,phone:this.phone,job:this.job,message:this.message,entreprise:this.entreprise,object:this.object};
                this.$store.dispatch('quote',{data:data,file:this.selected_file});
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