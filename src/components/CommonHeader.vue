<template>
   <header class="header" :style="{backgroundColor:cur.bgcolor}">
     <span class="header-home" @click="choose">首页</span>
     <span class="header-movie">{{cur.name}}</span>
   </header>
</template>

<script>
export default {
  props:['cur','selectNav'],
  methods:{
    choose(){
      this.selectNav({
        name:'电影',
        path:'/movie',
        bgcolor:'#ff0036'
      })
      this.$router.push('/movie')
    }  
  }
}
</script>
<style scoped lang="scss">
  .header{
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    top: 0;
    left: 0;
    background: #ff0036;
    position: fixed;
    .header-home{
      left: .2rem;
      position: absolute;
    }
    .header-movie{
      left: 50%;
      position: absolute;
    }
  }
</style>
