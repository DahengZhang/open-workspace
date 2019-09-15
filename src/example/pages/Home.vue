<template>
    <div class="example home">
        <attr-item>
            <template slot="label">生产地址</template>
            <template slot="value">江苏 徐州</template>
        </attr-item>
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
