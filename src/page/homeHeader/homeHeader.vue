<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont icon-back">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>            
            输入城市/景点
        </div>
        <div class="header-right" @click="toCity">
            {{this.$store.state.city}}
            <span class="iconfont icon-arrow">&#xe64a;</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods:{
        toCity(){
            this.$router.push({
                path:'/city'
            })
        }
    }
};
</script>

<style scoped lang="stylus">
    @import '~styles/varibles.styl'
    .header
        display flex
        line-height .86rem
        background-color $bgColor
        color #fff
        .header-left
            float left
            width .46rem
            .icon-back 
                text-align center
                font-size .4rem
        .header-input
            flex 1
            height .64rem
            line-height .64rem
            margin-top .12rem
            margin-left .2rem
            padding-left .2rem
            background-color #fff
            border-radius .1rem
            color #ccc
            

        .header-right
            float right 
            width 1.24rem
            text-align center
            .icon-arrow
                font-size .24rem

</style>
