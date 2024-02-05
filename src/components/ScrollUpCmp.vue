<template>
    <a href="#" class="scrollup" id="scrollup"> 
        <i class="ri-arrow-up-fill scrollup_icon"></i>
    </a>
</template>

<script>
import $ from 'jquery';
export default {
    name:"ScrollUpCmp",
    mounted(){
        function scrollUp(){
            const scrollUp = $('#scrollup');
            if(this.scrollY >= 100) scrollUp.addClass('show-scroll'); 
            else scrollUp.removeClass('show-scroll');
        }
        $(window).scroll(scrollUp);
    }
}
</script>