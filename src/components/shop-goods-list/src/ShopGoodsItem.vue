<template>
    <div class="shop-goods-item"
        :class="{'has-hover': needHover}"
        :style="{
            'width': `calc(${ 100 / columns}%)`
        }">
        <div class="shop-goods-item-border top"></div>
        <div class="shop-goods-item-border right"></div>
        <div class="shop-goods-item-border bottom"></div>
        <div class="shop-goods-item-border left"></div>

        <div class="goods-item-container">
            <slot>
                <shop-goods-item-container></shop-goods-item-container>
            </slot>
        </div>
    </div>
</template>

<script>
import ShopGoodsItemContainer from './ShopGoodsItemContainer';

export default {
    name: 'ShopGoodsItem',
    props: {
        columns: {
            type: Number
        },
        needHover: {
            type: Boolean,
            default: false
        }
    },
    components: {
        ShopGoodsItemContainer
    }
};
</script>

<style lang="scss">
.shop-goods-item {
    display: inline-block;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, .04);
    
    margin: 0 0 -1px -1px;
    position: relative;

    .shop-goods-item-border {
        position: absolute;
        content: "";
        background-color: #125DFE;
        z-index: 2;

        display: none;

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
    .goods-item-container {}

    &.has-hover:hover {
        .shop-goods-item-border {
            display: inline-block;
        }
    }
}
</style>
