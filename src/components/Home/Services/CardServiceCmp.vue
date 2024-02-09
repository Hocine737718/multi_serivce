<template>
    <div class="services_card">
        <a :href="lien" class="card_icon">
            <i :class="icon"></i>
        </a>
        <div class="card_content">
            <div class="card_content_header">
                 {{header}}
            </div>
            <div class="card_content_body">
                {{body}}
            </div>
            <div class="card_content_footer">
                <a :href="lien">Plus</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardServiceCmp',
    props:['icon','header','body','lien']
}
</script>
