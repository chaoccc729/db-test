<template>
  <div class="musiclist">
    <img v-for="(item, index) in photodata" :key="index" :src="item.src" alt="" @click="goDetails(index)">
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      photodata:[],
      index:0
    }
  },
  created(){
    axios.get('data/photodata.json')
    .then( (res) => {
      console.log(res)
      this.photodata = res.data.photoData
    })
    .catch( (err) => {
      console.log(err);
    })
  },
  methods:{
    goDetails(_index){
      this.$router.push(`/photodetails/${_index}`)
    }
  }
}
</script>

<style lang="scss" scoped>
img{
  width: 50%
}
</style>