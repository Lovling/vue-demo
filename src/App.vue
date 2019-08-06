<template>
  <div id="app">
    <v-header></v-header>
    <info></info>
    <div class="nav">
      <router-link to="/">商品</router-link>
      <router-link to="/comment">评价</router-link>
      <router-link to="/business">商家</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
import header from 'common/header'
import info from 'common/info'

export default {
  components: {
    'v-header': header,
    info
  }
}
</script>
<style lang="less">
@import "assets/less/reset.less";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .nav {
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 14px;
    color: rgb(77, 85, 93);
    text-align: center;
    display: flex;
    justify-content: space-around;
    .router-link-exact-active {
      color: rgb(240, 20, 20);
    }
  }
}
</style>
