<template>
    <div class="article">
    <span class="article_back">
        <div class="article_header">
            <div class="article_title">
                Conseil
            </div>
        </div>
        <div class="article_body" id="article_body">
            <div class="article_content">
            </div>
        </div>
    </span>
    </div>
</template>
<script>
import ScrollReveal from 'scrollreveal';
export default {
    name:"CounselView",
    mounted(){
        const sr = ScrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 2500,
            delay: 400
        })
        sr.reveal(`.article`);
    }
}
</script>