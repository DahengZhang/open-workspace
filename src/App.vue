<template>
    <div class="app">
        <router-link to="/">home</router-link>
        <router-link to="/about">about</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style lang="scss">
.app {
    color: #cccccc;
}
</style>
