<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page,index) in pages" :key="index">          
                <div class="icon" v-for="item in page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" >            
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                swiperOption: {
                    autoplay: false
                }
            }
        },
        props:{
            iconsList:{
                type:Array,
                default:[]
            }
        },
        computed:{
            pages(){
                const pages = []
                this.iconsList.forEach((item,index)=>{
                    const page = Math.floor(index/8)
                    if(!pages[page]){
                        pages[page] = []
                    }
                    pages[page].push(item)
                })
                return pages
            }
        }
        
    }
</script>
<style lang="stylus">
    @import '~@/assets/styles/mixins.styl'
    .icons
        overflow hidden
        height 0
        padding-bottom 50%
        background-color #eee
        .icon
            position relative
            overflow hidden
            float left
            width 25%
            height 0
            padding-bottom 25%
            .icon-img  
                position absolute
                top 0
                bottom .44rem
                left 0
                right 0
                box-sizing border-box
                padding .1rem
                .icon-img-content
                    height  100%
                    display block
                    margin 0 auto
            .icon-desc
                position absolute
                left 0
                right 0  
                bottom 0
                height .44rem
                line-height .44rem
                text-align center
                color #333
                ellipsis()
</style>

