<template>
  <div class="slider">
    <transition-group name="fade" tag="ul" class="slider-wrapper">
      <li class="slider-list" v-for="(item,index) in img" :key="index" v-show="tag == index">
        <img :src="item" alt="">
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data(){
    return{
      tag: 0,
    }
  },
  props:['img'],
  created(){
    setInterval(() => {
      this.tag++
      if(this.tag == this.img.length){
        this.tag = 0
      }
    },2000)
  }
}
</script>

<style scoped lang="scss"> 
  .slider-wrapper{
    width: 100%;
    height: 6rem;
    position: relative;
  }
  .slider-list{
    width: 100%;
    height: 10rem;
    top: 0;
    position: absolute;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .fade-enter{
    transform: translateX(-100%);
  }
  .fade-enter-to{
    transform: translateX(0);
  }
  .fade-enter-active{
    transition: transform 2s;
  }
  .fade-leave{
    transform: translateX(0);
  }
  .fade-leave-to{
    transform: translateX(100%);
  }
  .fade-leave-active{
    transition: transform 2s ease;
  }
</style>
