<template>
    <div class="signup" id="signup">
        <h1>Inscrivez vous à la newsletter</h1>
        <form @submit.prevent="action" method="POST" class="signup_form" >
            <div class="signup_box">
                <i class="ri-mail-fill"></i>
                <input class="signup_input" type="email" name="email" v-model="this.email" placeholder="Entrer votre adresse e-mail">
                <button class="signup_btn" type="submit" name="button">Valider</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'SignUpCmp',
    data(){
        return{
            email:""
        }
    },
    methods:{
        async action(){
            if(this.email!="") this.$store.dispatch('addToNewsLetter',this.email);
        }
    }
}
</script>