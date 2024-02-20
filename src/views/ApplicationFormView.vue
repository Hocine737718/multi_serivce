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
                <input class="application_input" type="text" v-model="name" required>
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
                    Fonction:<span class="required">&ast;</span>
                </div>
                <input class="application_input" type="text" v-model="job" required>
            </div>
            <div class="application_box">
                <div class="application_label">
                    Message:<span class="required">&ast;</span>
                </div>
                <textarea class="application_input  textarea" cols="30" rows="10" v-model="message" required></textarea>
            </div>
            <div class="application_box">
                <div class="application_label">
                    Joindre CV:<span class="required">&ast;</span>
                </div>
                <span>
                    <div class="application_file">
                        <button @click="selectFile()">
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
                Postuler
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
            job:"",
            message:"",
            selected_file:""
        }
    },
    computed:{
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
        reset(){
            this.name="";
            this.email="";
            this.phone="";
            this.job="";
            this.message="";
            this.selected_file="";
        },
        action(){
            this.name=this.name.trim();
            this.email=this.email.trim();
            this.phone=this.phone.trim();
            this.message=this.message.trim();
            this.job=this.job.trim();

            if(this.name!="" && validateEmail(this.email)!="" && this.message!="" && validatePhone(this.phone)!="" && this.job!="" && this.selected_file!="") 
            {
                var data={name:this.name,email:this.email,phone:this.phone,job:this.job,message:this.message};
                this.$store.dispatch('job_application',{data:data,file:this.selected_file});
                this.reset();
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
        }
    }
}
</script>