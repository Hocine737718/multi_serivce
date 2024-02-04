<template>
    <div class="home_signup">
        <form :action="actionURL" method="POST" class="signup_form" >
            <div class="signup_box">
                <i class="ri-mail-fill"></i>
                <input class="signup_input" type="email" name="email" value="" placeholder="Enter your email">
                <button class="signup_btn" type="submit" name="button">Subscribe</button>
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