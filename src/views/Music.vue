<template>
  <div class="music">
    <img v-for="(item, index) in musiclist" :key="index" :src="item.bg" alt="" @click="goList">
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data(){
      return{
        musiclist: []
      }
    },
    methods: {
      goList() {
        this.$router.push('/musiclist')
      }
    },
    created(){
        axios.get('data/musiclist.json')
        .then( (res) => {
          console.log(res)
          this.musiclist = res.data.albums
        })
        .catch( (err) => {
          console.log(err);
        })
      }
  }
</script>

<style lang="scss">
  .music{
    img{
      width: 50%;
    }
  }
</style>