<template>
    <div class="home_signup" id="home_signup">
        <h1>Inscrivez vous à la newsletter</h1>
        <form :action="actionURL" method="POST" class="signup_form" >
            <div class="signup_box">
                <i class="ri-mail-fill"></i>
                <input class="signup_input" type="email" name="email" value="" placeholder="Entrer votre adresse e-mail">
                <button class="signup_btn" type="submit" name="button">Valider</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'SignUpCmp',
    props:['baseURL'],
    data(){
        return{
            actionURL:`${this.baseURL}/mail.php`
        }
    }
}
</script>