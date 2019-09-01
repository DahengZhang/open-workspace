<template>
    <div class="example">
        This is Example
        <shop-goods-wrapper :columns="1" class="shop-goods-list-el">
            <shop-goods-item :columns="1" v-for="(item, index) in 10" :key="index"  class="shop-goods-list-item-el">
                <shop-item></shop-item>
            </shop-goods-item>
        </shop-goods-wrapper>
    </div>
</template>

<script>
import { ShopGoodsWrapper, ShopGoodsItem } from '@/components/shop-goods-list'
import ShopItem from './ShopItem'

export default {
    name: 'example',
    components: {
        ShopGoodsWrapper,
        ShopGoodsItem,
        ShopItem
    }
}
</script>

<style lang="scss">
.example {
    width: 1200px;
    .shop-goods-list-el {
        width: 100%;
        .shop-goods-list-item-el {
            margin-bottom: 20px;
        }
    }
}
</style>
