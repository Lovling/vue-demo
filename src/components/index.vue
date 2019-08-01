<template>
  <section class="index">
    <div class="menu" ref="menu">
      <ul>
        <li v-for="(item,index)  in list" :key="index" class="item" @click="select(index, $event)"
          :class="{current: currentIndex == index}">
          {{item.text}}
        </li>
      </ul>
    </div>
    <div class="con" ref="con">
      <ul>
        <li class="item item-hook" v-for="(item,index) in list" :key="index">
          <h2 class="tit">{{item.text}}</h2>
          <div class="wrap" v-for="(row, i) in item.content" :key="i">
            <span>￥{{row.price}}</span>
            <inline-x-number style="display:block;" :min="0" width="50px" button-style="round"></inline-x-number>
          </div>
        </li>
      </ul>
    </div>
    <div class="foot">
      <div class="left"></div>
      <div class="right"></div>
    </div>
  </section>
</template>

<script>
import BScroll from 'better-scroll'
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
            { price: '5', word: '小程序' },
            { price: '5', word: '小程序' },
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
      ],
      itemHeight: [],
      scrollY: 0,
      clickEvent: false
    }
  },
  created () {
    this.$nextTick(() => {
      this._initScroll()
      this._getHeight()
    })
  },
  computed: {
    currentIndex () {
      for (let i = 0; i < this.itemHeight.length; i++) {
        let height = this.itemHeight[i]
        let height2 = this.itemHeight[i + 1]
        if (!height2 || (this.scrollY >= height && this.scrollY < height2)) {
          if (this.clickEvent) {
            return i + 1
          } else {
            return i
          }
        }
      }
      return 0
    }
  },
  methods: {
    _initScroll () {
      this.menu = new BScroll(this.$refs.menu, {
        click: true
      })
      this.con = new BScroll(this.$refs.con, {
        probeType: 3
      })
      this.con.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    _getHeight () {
      let items = this.$refs.con.getElementsByClassName('item-hook')
      let height = 0
      this.itemHeight.push(height)
      for (let i = 0; i < items.length; i++) {
        height += items[i].clientHeight
        this.itemHeight.push(height)
      }
    },
    select (index, $event) {
      this.clickEvent = true
      if (!$event._constructed) {
        return null
      } else {
        let conItems = this.$refs.con.getElementsByClassName('item-hook')
        let el = conItems[index]
        this.con.scrollToElement(el, 300)
      }
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
      .current {
        background-color: #fff;
      }
    }
  }
  .con {
    flex: 1;
    overflow: hidden;
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
  .foot{
    width: 100%;
    height: .92rem;
    background-color: #ccc;
    position: fixed;
    bottom: 0;
    display: flex;
  }
  .left{
    flex: 0 0 5.4rem;
    width: 5.4rem;
    height: 100%;
    background-color: #fff;
  }
  .right{
    flex: 1;
    height: 100%;
    width: 2.1rem;
  }
}
</style>
