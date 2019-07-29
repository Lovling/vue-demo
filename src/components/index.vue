<template>
  <section class="index">
    <div class="menu">
      <ul>
        <li v-for="(item,index) in list"
            :key="index"
            class="item">
          {{item.text}}
        </li>
      </ul>
    </div>
    <div class="con">
      <div class="item"
           v-for="(item,index) in list"
           :key="index">
        <h2 class="tit">{{item.text}}</h2>
        <div class="wrap"
             v-for="(row, i) in item.content"
             :key="i">
          <span>￥{{row.price}}</span>
          <inline-x-number style="display:block;"
                           :min="0"
                           width="50px"
                           button-style="round"></inline-x-number>
        </div>
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
      list: [
        { id: 1,
          text: '热销榜',
          content: [
            { price: '10', word: '哈萨给' },
            { price: '21', word: '二1我' },
            { price: '34', word: '电饭锅' },
            { price: '6', word: '辅导费' },
            { price: '67', word: '似的' },
            { price: '80', word: '下次' }
          ]
        },
        { id: 2,
          text: '单人特色套餐',
          content: [
            { price: '1', word: '无法防守' },
            { price: '5', word: '小程序' }
          ]
        },
        { id: 3,
          text: '特色粥品',
          content: [
            { price: '90', word: '萨法' },
            { price: '65', word: '萨法' },
            { price: '86', word: '萨法' },
            { price: '54', word: '萨法' },
            { price: '78', word: '萨法' },
            { price: '23', word: '萨法' }
          ]
        },
        { id: 4,
          text: '精选热菜',
          content: [
            { price: '2', word: '无法防守' },
            { price: '34', word: '没号码' },
            { price: '21', word: '合格' },
            { price: '66', word: '似的' }
          ]
        },
        { id: 5,
          text: '爽口凉菜',
          content: [
            { price: '44', word: '无法防守' },
            { price: '90', word: '不成熟' },
            { price: '21', word: '不够' }
          ]
        },
        { id: 6,
          text: '半成品',
          content: [
            { price: '65', word: '无法防守' },
            { price: '35', word: '好多个' }
          ]
        },
        { id: 7,
          text: '饭类',
          content: [
            { price: '43', word: '无法防守' },
            { price: '83', word: '让他个' },
            { price: '21', word: 'UI有' }
          ]
        },
        { id: 8,
          text: '面类',
          content: [
            { price: '23', word: '无法防守' },
            { price: '34', word: '留言' }
          ]
        },
        { id: 9,
          text: '其他类',
          content: [
            { price: '22', word: '无法防守' },
            { price: '4', word: '与u' },
            { price: '5', word: '让他' }
          ]
        },
        { id: 10,
          text: '饮料类',
          content: [
            { price: '77', word: '无法防守' },
            { price: '21', word: '十点多' },
            { price: '70', word: '发多少' },
            { price: '24', word: '我去' },
            { price: '66', word: '确认' }
          ]
        }
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
    ul {
      display: flex;
      flex-direction: column;
      padding: 0 0.24rem;
      font-size: 12px;
      color: rgb(24, 20, 20);
      font-weight: 200;
      .item {
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
    .item {
      background-color: #fff;
      .wrap {
        height: 100px;
        font-size: 12px;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
    }
  }
}
</style>
