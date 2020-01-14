<template>
  <div id="app">

    <common-header :navList="navList" :cur="cur"  :selectNav="selectNav"></common-header>

    <div id="app-container">
      <router-view></router-view>
    </div>

    <common-footer :navList="navList"  @choose="selectNav" :cur="cur"></common-footer>

  </div>
</template>

<script>
  import commonHeader from './components/CommonHeader'
  import commonFooter from './components/CommonFooter'
  export default {
    data(){
      return {
        navList:[
          {
            name:'电影',
            path:'/movie',
            bgcolor:'#ff0036'
          },
          {
            name:'音乐',
            path:'/music',
            bgcolor:'#FFD700'
          },
          {
            name:'图书',
            path:'/book',
            bgcolor:'#00FF7F'
          },
          {
            name:'图片',
            path:'/photo',
            bgcolor:'#FF8C00'
          }
        ],
        cur:{
          name:'电影',
          path:'/movie',
          bgcolor:'#ff0036'
        }
    }
  },
  methods:{
    selectNav(_data){
      this.cur = _data
    }
  },
  components: {
    commonHeader,
    commonFooter
  },
  create(){
    this.navList.forEach((item) => {
      if(item.path == this.$route.path){
        console.log(this.$route.path)
        this.cur = item
      }else if(this.$route.path == '/musiclist'){
        this.cur = {
            name:'音乐',
            path:'/music',
            bgcolor:'#FFD700'
        }
      }
    })
  }
}
</script>

<style lang="scss">
#app-container{
  margin: 1rem auto;
}
  #app{
    width: 100%;
  }
  a{
    color: #000000;
  }
  .router-link-active{
    color:#ffffff;
  }
</style>
