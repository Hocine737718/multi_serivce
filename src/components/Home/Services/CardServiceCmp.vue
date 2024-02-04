<template>
    <div class="services_card">
        <div class="card_icon">
            <i :class="icon"></i>
        </div>
        <div class="card_content">
            <div class="card_content_header">
                 {{header}}
            </div>
            <div class="card_content_body">
                {{body}}
            </div>
            <div class="card_content_footer">
                <a :href="footer">Plus</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardServiceCmp',
    props:['icon','header','body','footer']
}
</script>
