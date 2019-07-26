<template>
  <section class="index">
    <div class="menu">
      <ul>
        <li  v-for="(item,index) in title" :key="index" class="item">
          {{item.text}}
        </li>
      </ul>
    </div>
    <div class="con">
      <div class="item" v-for="(item,index) in title" :key="index">
        <span>￥{{item.id}}</span>
        <inline-x-number style="display:block;" :min="0" width="50px" button-style="round"></inline-x-number>
      </div>
    </div>
  </section>
</template>

<script>
import { InlineXNumber } from 'vux'
export default {
  components: {
    InlineXNumber
  },
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
        { id: 8, text: '面类' },
        { id: 9, text: '其他类' },
        { id: 10, text: '饮料类' }
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
    overflow: scroll;
    ul{
      display: flex;
      flex-direction: column;
      padding: 0 .24rem;
      font-size: 12px;
      color: rgb(24,20,20);
      font-weight: 200;
      .item{
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
    overflow: scroll;
    .item{
      width: 100%;
      height: 100px;
      background-color: #fff;
      display: flex;
      justify-content: space-around;
    }
  }
}
</style>
