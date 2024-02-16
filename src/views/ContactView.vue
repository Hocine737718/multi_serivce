<template>
    <div class="contact">
        <span class="contact_back">
            <div class="contact_data">
                <div class="contact_info">
                    <h3 class="contact_subtitle">Appelez-nous pour un soutien immédiat.</h3>
                    <span  class="contact_description">
                        <i class="ri-phone-line contact_icon"></i>
                        +213(0)23-76-86-36
                    </span>
                </div>
                <div class="contact_info">
                    <h3 class="contact_subtitle">Écrivez-nous par courrier.</h3>
                    <span class="contact_description">
                        <i class="ri-mail-line contact_icon"></i>
                        contact@gms-dz.com
                    </span>
                </div>
                <div class="contact_info">
                    <h3 class="contact_subtitle">Ou bien, vous êtes les bienvenus à notre adresse.</h3>
                    <span class="contact_description">
                        <i class="ri-map-pin-fill"></i>
                        199, Rue de Tripoli Bachdjerrah,
                        <br/>
                        Alger 16000
                    </span>
                </div>
            </div>
            <ContactFormCmp/>
        </span>
        <div class="contact_map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25577.466228252848!2d3.009173510839832!3d36.7421716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e52b9687b7f69%3A0x31404bea59d9c260!2sGlobal%20Management%20Services!5e0!3m2!1sfr!2sdz!4v1708066151450!5m2!1sfr!2sdz" width="600" height="450" style="border:0;" allowfullscreen=""></iframe>
        </div>
    </div>
</template>
<script>
import ContactFormCmp from '@/components/Contact/ContactFormCmp.vue'
export default {
    name:'ContactView',
    components:{ContactFormCmp}
}
</script>