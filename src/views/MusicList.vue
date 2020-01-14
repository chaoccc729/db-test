<template>
  <div class="musiclist">
    <aplayer v-if="musicdata.length>0" autoplay
      :music="musicdata[0]"
      :list="musicdata"
      :showLrc='true'
      />
  </div>
</template>

<script>
import axios from 'axios'
import Aplayer from 'vue-aplayer'


export default {
  data() {
    return {
      musicdata: []
    }
  },
  components: {
        Aplayer
  },
  created(){
    axios.get('data/musicdata.json')
    .then( (res) => {
      console.log(res)
      if(res.status*1 == 200){
        let _list = res.data.musicData
        _list.forEach(element => {
          element.artist = element.author
          element.pic = element.musicImgSrc
          element.lrc = 'http://localhost:8081/'+element.lrc
        });
        this.musicdata = _list
      }
    })
    .catch( (err) => {
      console.log(err);
    })
  }
}
</script>

<style lang="scss" scoped>
img{
  width: 5rem;
  height: 5rem;
}
</style>