<template>
    <form :action="actionURL" method="POST" class="contact_form">
        <h2 class="contact_title">
            Contactez-nous
        </h2>
        <div class="contact_inputs">
            <input type="text" class="contact_input" name="name" placeholder="Votre Nom" id="name" required>
            <input type="email" class="contact_input" name="email" placeholder="Email" id="email" required>
        </div>
        <div class="contact_areas">
            <textarea name="message" rows="6" class="contact_input contact_area" id="message" placeholder="Message" required></textarea>
        </div>
        <button type="submit" class="contact_button">
            Envoyer
        </button>
    </form>
</template>
<script>
export default {
  name: "ContactFormCmp",
  data(){
    return{
      actionURL:`/mail.php`
    }
  }    
}
</script>