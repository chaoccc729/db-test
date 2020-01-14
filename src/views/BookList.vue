<template>
  <div class="book">
    <ul>
      <li class="book-list" v-for="(item,index) in bookList" :key="index">
        <img :src="item.image" alt="">
        <div class="book-info">
          <p>{{item.title}}</p>
          <p>评分：{{item.rating.average}}</p>
          <p>作者:
              <span v-for="(ds,index) in item.author" :key="index">{{ds}}</span>
          </p>
          <p>出版日期：{{item.pubdate}}</p>
          <p>出版社：{{item.publisher}}</p>
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
        bookList: [],
        loadingStatus:true
      }
    },
    methods:{
      getList(){
        this.loadingStatus = true;
        axios.get('https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/book/search?q=我是传奇')
        .then( (res) => {
          console.log(res);
          this.loadingStatus = false;
          this.bookList = [...this.bookList,...res.data.books];
        })
        .catch( (err) => {
          console.log(err);
          this.loadingStatus = false;
        })
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
  .book-list{
    display: flex;
    width: 100%;
    img{ 
      width: 2.3rem;
      height: 3rem;
    }
    .book-info{
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