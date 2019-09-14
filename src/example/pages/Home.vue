<template>
    <div class="example home">
        <attr-item></attr-item>
    </div>
</template>

<script>
import AttrItem from '../components/AttrItem'

export default {
    name: 'exampleHome',
    components: {
        AttrItem
    }
}
</script>

<style lang="scss">
.example.home {
    color: #4c90f7;
}
</style>
