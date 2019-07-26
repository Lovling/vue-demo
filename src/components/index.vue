<template>
  <section class="index">
    <div class="menu">
      <ul>
        <li  v-for="(item,index) in title" :key="index" class="item">
          {{item.text}}
        </li>
      </ul>
    </div>
    <div class="con"></div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      title: [
        { id: 1, text: '热销榜' },
        { id: 2, text: '单人特色套餐' },
        { id: 3, text: '特色粥品' },
        { id: 4, text: '精选热菜' },
        { id: 5, text: '爽口凉菜' },
        { id: 6, text: '半成品' },
        { id: 7, text: '饭类' },
        { id: 8, text: '面类' }
      ]
    }
  },
  methods: {
    selectItem (item) {
      console.log(item.name)
    },
    clickTitle (title) {
      console.log(title)
    }
  }
}
</script>
<style lang="less" scoped>
.index {
  position: absolute;
  top: 3.48rem;
  bottom: 1.16rem;
  background-color: rgb(88, 73, 73);
  width: 100%;
  display: flex;
  .menu {
    flex: 0 0 1.6rem;
    width: 1.6rem;
    background-color: #f3f5f7;
    overflow: hidden;
    ul{
      height: 100%;
      display: flex;
      flex-direction: column;
      // align-items: center;
      // justify-content: center;
      padding: 0 .24rem;
      font-size: 12px;
      color: rgb(24,20,20);
      font-weight: 200;
      .item{
        flex:1;
        height: 1.08rem;
        // line-height: 1.08rem;
        text-align: center;
        border-bottom: 1px solid #ccc;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .con {
    flex: 1;
  }
}
</style>
