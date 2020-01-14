<template>
  <ul class="footer" :style="{backgroundColor:cur.bgcolor}">
    <li class="footer-list" v-for="(item,index) in navList" :key="index" @click="$emit('choose',item)" >
      <router-link :to="item.path">{{item.name}}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  props:['cur','navList'],
  methods:{
    choose(_item){
      this.bgcolor = _item.bgcolor
    }
  }
}
</script>

<style scoped lang="scss">
  .footer{
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    bottom: 0;
    background: #ff0036;
    position: fixed;
  }
</style>
