<template>
    <div class="shop-item-wrapper">
        <shop-goods-wrapper :columns="5" class="shop-item-wrapper-el">
            <shop-goods-item :columns="5" :needHover="true"></shop-goods-item><shop-goods-item :columns="5" v-for="index in 4" :key="index" :needHover="true"></shop-goods-item>
        </shop-goods-wrapper>
    </div>
</template>

<script>
import { ShopGoodsWrapper, ShopGoodsItem } from '@/components/shop-goods-list'

export default {
    name: 'ShopItem',
    components: {
        ShopGoodsWrapper,
        ShopGoodsItem
    }
}
</script>

<style lang="scss">
.shop-item-wrapper {
    .shop-item-wrapper-el {
        width: 100%;
        .shop-item-el {
            width: 100%;
        }
    }
}
</style>