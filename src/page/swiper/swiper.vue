<template>
    <div class="wrapper">
        <swiper :options="swiperOption" >
    
            <swiper-slide v-for="(item,index) in list" :key="item.id">
                <img class="swiper-image" :src="item.imgUrl" >
            </swiper-slide>
            
            
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  data() {
    return {
        swiperOption:{
            pagination: '.swiper-pagination',
            loop:true
        },
    }
  },
  props:{
      list:{
          type:Array,
          default:[]
      }
  }
};
</script>

<style scoped lang="stylus">
    .wrapper >>> .swiper-pagination-bullet-active
        background: #fff
    .wrapper
        overflow hidden
        width 100%
        height 0
        padding-bottom 31.25%
        background-color #eee
        .swiper-image
            width 100%
</style>