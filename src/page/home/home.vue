<template>
    <div class="container">
        <home-header></home-header>
        <swiper :list="swiperList"></swiper>
        <icons :iconsList="iconList"></icons>
        <recommend :list="this.recommendList"></recommend>
        <weekend :list="weekendList"></weekend>
    </div>
</template>

<script>
import HomeHeader from '../homeHeader/homeHeader'
import Swiper from '../swiper/swiper'
import Icons from '../icons/icons'
import Recommend from '../recommend/recommend'
import Weekend from '../weekend/Weekend'

import axios from 'axios'
import {mapState} from 'vuex'
export default {
    data() {
        return {
            lastCity:'',
            swiperList:[],
            iconList:[],
            recommendList:[],
            weekendList:[]
        }
    },
    computed:{
        ...mapState([
            'city'
        ])
    },
    components: {
        HomeHeader,
        Swiper,
        Icons,
        Recommend,
        Weekend     
    },
    created(){
        this.getdata()
        this.lastCity = this.city
    },
    activated(){
        if(this.astCity !== this.city){
            this.lastCity = this.city
            this.getdata()
        }
    },
    methods:{
        getdata(){
            axios.get('api/index.json?city='+this.city)
                .then((res)=>{
                    this.swiperList = res.data.data.swiperList
                    this.iconList = res.data.data.iconList
                    this.recommendList = res.data.data.recommendList
                    this.weekendList = res.data.data.weekendList
                })
        }
    }
};
</script>

<style scoped lang="stylus">
</style>
