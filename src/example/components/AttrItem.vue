<template>
    <div class="attr-item">
        <span class="attr-label">属性名</span>:
        <span class="attr-value">属性值</span>
    </div>
</template>

<script>
export default {
    name: 'AttrItem'
}
</script>

<style lang="scss">
.attr-item {
    height: 28px;
    line-height: 28px;
    .attr-label {
        display: inline-block;
        width: 80px;
        height: 100%;
        text-align: justify;
        vertical-align: top;
        margin-right: 2px;
        &::after {
            display: inline-block;
            width: 100%;
            content: "";
            height: 0;
        }
    }
    .attr-value {
        margin-left: 5px;
    }
}
</style>
