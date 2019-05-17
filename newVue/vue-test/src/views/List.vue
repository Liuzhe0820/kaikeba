<template>
    <div>
        <ul>
            <li v-for="(item) in goods" :key="item.id">
                <router-link :to="`/detail/${item.id}`">
                    <span>{{item.text}}</span>
                    <span>{{item.pic}}</span>
                    <button @click='addCart(item)'>加入购物车</button>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
         data() {
            return {
            
            goods: [
                {
                id: 1,
                text: "商品1",
                pic: 9999
                },
                {
                id: 2,
                text: "商品2",
                pic: 19999
                }
            ]
        }
        }
    }
</script>

<style lang="scss" scoped>

</style>