<template>
    <div class="example">
        <router-link to="/">home</router-link>
        <router-link to="/about">about</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'example'
}
</script>

<style lang="scss">
.example {
    color: #cccccc;
}
</style>
