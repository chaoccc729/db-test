<template>
  <div class="details" v-if="tag" >
    <img :src="details.images.medium" alt="">
    
    <p>{{details.original_title}}</p>
    <p>上映日期：{{details.mainland_pubdate}}</p>
    <p>详情介绍：{{details.summary}}</p>

    <div v-show="loadingStatus" id="loading">
      <img src="../assets/image/loading.gif" alt="">
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data(){
      return{
        tag :false,
        details:[],
        loadingStatus:true
      }
    },
    created(){
      axios.get(`https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/subject/${this.$route.params.id}`)
        .then( (res) => {
          console.log(res);
          if(res.status*1 == 200){
            this.tag = true
            this.loadingStatus = false
            this.details = res.data 
          }
        })
        .catch( (err) => {
          console.log(err);
          this.loadingStatus = false
        })
    }
  }
</script>
<style lang="scss">
  #loading{
    display: block;
    width: 2rem;
    height: 2rem;
    top: 40%;
    left: 50%;
    margin-top: -1rem;
    margin-left: -1rem;
    position: fixed;
    img{
      width: 2rem;
      height: 2rem;
    }
  }
</style>