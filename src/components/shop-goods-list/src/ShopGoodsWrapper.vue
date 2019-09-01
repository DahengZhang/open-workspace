<template>
    <div class="shop-goods-wrapper">
        <div :style="{'background-color': borderTopColor || borderColor}" class="shop-goods-wrapper-border top"></div>
        <div :style="{'background-color': borderRightColor || borderColor}" class="shop-goods-wrapper-border right"></div>
        <div :style="{'background-color': borderBottomColor || borderColor}" class="shop-goods-wrapper-border bottom"></div>
        <div :style="{'background-color': borderLeftColor || borderColor}" class="shop-goods-wrapper-border left"></div>
        <div class="shop-goods-item-wrapper"
        :style="{
            'width': `calc(100% + ${columns / 2 === 2 ? columns + 1 : columns + 2}px)`
        }">
            <slot ref="item"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShopGoodsWrapper',
    props: {
        columns: {
            default: 1,
            type: Number
        },
        borderColor: {
            type: String,
            default: '#ffffff'
        },
        borderTopColor: {
            type: String
        },
        borderRightColor: {
            type: String
        },
        borderBottomColor: {
            type: String
        },
        borderLeftColor: {
            type: String
        }
    }
};
</script>

<style lang="scss">
.shop-goods-wrapper {
    display: inline-block;
    position: relative;
    .shop-goods-wrapper-border {
        position: absolute;
        content: "";
        z-index: 1;
        &.top {
            top: -1px;
            right: -1px;
            left: -1px;
            height: 1px;
        }
        &.right {
            top: 0;
            right: -1px;
            bottom: 0;
            width: 1px;
        }
        &.bottom {
            right: -1px;
            bottom: -1px;
            left: -1px;
            height: 1px;
        }
        &.left {
            top: 0;
            bottom: 0;
            left: -1px;
            width: 1px;
        }
    }
    .shop-goods-item-wrapper {
        margin: -1px 0 0 0;
    }
}
</style>
