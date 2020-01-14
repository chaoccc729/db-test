<template>
  <div class="musiclist">
    <v-touch v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight">
      <img v-if="photodata.length>0" :src="photodata[index].src">
    </v-touch>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})

export default {
  data() {
    return{
      photodata:[],
      index:this.$route.params.index
    }
  },
  components: {
    VueTouch
  },
  created(){
    axios.get('/data/photodata.json')
    .then( (res) => {
      this.photodata = res.data.photoData
      console.log(this.index)
    })
    .catch( (err) => {
      console.log(err);
    })
  },
  methods:{
    onSwipeLeft(){
      
      if(this.index == this.photodata.length-1){
        return
      }
      this.index++
    },
    onSwipeRight(){
      
      if(this.index == 0){
        return
      }
      this.index--
    }
  }
}
</script>

<style lang="scss" scoped>
.musiclist{
  width: 7.5rem;
}
img{
  width: 100%;
}
</style>