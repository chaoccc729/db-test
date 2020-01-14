<template>
  <div class="book">
    <!-- <swipe class="my-swipe">
      <swipe-item v-for="(item,index) in imageslist" :key="index">
        <img :src="item" alt="">
      </swipe-item>
    </swipe> -->
    <slider :img="imageslist"></slider>
  </div>
</template>

<script>
  import 'vue-swipe/dist/vue-swipe.css';
  import { Swipe, SwipeItem } from 'vue-swipe';
  import slider from '@/components/Slider.vue'

  export default {
  data() {
    return {
      imageslist: [
        'http://img1.imgtn.bdimg.com/it/u=3914778076,671176843&fm=26&gp=0.jpg',
        'http://img3.imgtn.bdimg.com/it/u=96956508,555363675&fm=26&gp=0.jpg',
        'http://filesrv.iyunshu.com/c/01082/97875014481661896194-fm.jpg'
      ]
    }
  },
  components: {
    'swipe': Swipe,
    'swipe-item': SwipeItem,
    slider
  },
}
</script>
<style lang="scss">
  .book{
    width: 100%;
    height: 10rem;
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>