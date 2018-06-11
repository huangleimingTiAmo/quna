<template>
  <ul class="list">
    <li 
      class="item"
      v-for="item in letters"
      :ref="item"
      @click="handleLetter"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'CityAlphabet',
  props:{
    cities:{
      type:Object,
      default:{}
    }
  },
  data(){
    return {
      touchStatus: false,
      startY:0,
      timer:null
    }
  },
  computed:{
    letters(){
      let letters = []
      for(let i in this.cities){
        letters.push(i)
      }
      return letters
    }
  },
  updated(){
    this.startY = this.$refs['A'][0].offsetTop

  },
  methods:{
    handleLetter(e){
      this.setLetter(e.target.innerText)
    },
    handleTouchStart(){
      this.touchStatus = true
    },
    handleTouchMove(e){
      if(this.touchStatus){
        if(this.timer){//截留函数 
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          // console.log(touchY);
          const index = Math.floor((touchY - this.startY) / 20)
          // console.log(index);
          if (index >= 0 && index < this.letters.length) {
          this.setLetter(this.letters[index]) 
          }
        },20)  
      }
    },
    handleTouchEnd(){
      this.touchStatus = false
    },
    ...mapMutations({
      setLetter:'SET_LETTER'
    })
  }
  
  
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
