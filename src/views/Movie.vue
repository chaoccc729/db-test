<template>
  <div class="movie">
    <ul class="movie-wrapper">
      <li class="movie-list" v-for="(item,index) in movieList" :key="index" @click="goDetails(item)">
        <img :src="item.images.small" alt="">
        <div class="movie-info">
          <h4>{{item.title}}</h4>
          <p>演员:
            <span v-for="(ds,index) in item.casts" :key="index">{{ds.name}}</span>
          </p>
          <p>上映时间：{{item.mainland_pubdate}}</p>
          <p>评分：{{item.rating.average}}</p>
        </div>
      </li>
    </ul>
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
        movieList: [],
        loadingStatus:true
      }
    },
    methods:{
      getList(){
        this.loadingStatus = true;
        axios.get(`https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/in_theaters?start=${this.movieList.length}&count=10`)
        .then( (res) => {
          console.log(res);
          this.movieList = [...this.movieList,...res.data.subjects];
          this.loadingStatus = false
        })
        .catch( (err) => {
          console.log(err);
          this.loadingStatus = false
        })
      },
      goDetails(item){
        this.$router.push(`/details/${item.id}`)
      }

    },
    created(){
      this.getList();
      window.onscroll = () =>{
        let top = Math.round(document.documentElement.scrollTop);
        let height = document.documentElement.clientHeight;
        let tall = document.documentElement.scrollHeight;
        console.log(top,height,tall)
        if(tall == top+height){
          this.getList();
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .movie-list{
    display: flex;
    width: 100%;
    img{ 
      width: 2.3rem;
      height: 3rem;
    }
    .movie-info{
      flex-grow: 1;
    }
  }
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