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
                Postuler
            </button>
        </div>
        </span>
    </div>
</template>
<script>
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
        select_file(){
            var file_input = document.getElementById("file_input");
            file_input.click();
        },
        async handleFileChange(event){
            try{
                const fileList = event.target.files;
                if (fileList.length > 0) 
                {
                    this.selected_file=fileList[0];
                    //console.log("flg 01");
                    if(this.selected_file.type !== "image/jpeg" && 
                       this.selected_file.type !== "image/png" &&
                       this.selected_file.type !== "image/jpg" &&
                       this.selected_file.type !== "application/pdf" &&
                        this.selected_file.type !== "application/msword" && // For .doc files
                        this.selected_file.type !== "application/vnd.openxmlformats-officedocument.wordprocessingml.document") // For .docx files
                    {
                        throw new Error("Erreur Type Image");
                    }
                }
                else
                {
                    console.log("Aucun fichier sélectionné");
                }
            }
            catch (error) {
                this.selected_file="";
                console.error(error);
            }
        },
        action(){
            if(this.name!="" && this.email!="" && this.message!="" && this.phone!="" && this.job!="" && this.selected_file!="") 
            {
                var data={name:this.name,email:this.email,phone:this.phone,job:this.job,message:this.message};
                this.$store.dispatch('job_application',{data:data,file:this.selected_file});
            }
        }
    }
}
</script>