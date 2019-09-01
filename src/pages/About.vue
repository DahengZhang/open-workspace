<template>
    <div class="app about">
        This is App/About
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'appAbout',
    created() {
        console.log(this.$route.params.id)
    }
}
</script>

<style lang="scss">
.app.about {
    color: #999999;
}
</style>
