<template>
  <section class="header">
    <div class="avatar"></div>
    <div class="info">
      <img class="brand" src="../assets/imgs/brand/brand@2x.png" alt="" />
      <span class="text">粥品香坊（大运村）</span>
      <div class="time">蜂鸟转送/28分钟送达</div>
      <div class="discount">
        <img src="../assets/imgs/decrease/decrease_1@2x.png" alt="" />
        <span class="">在线支付满28减5，满50减10</span>
      </div>
    </div>
    <div class="count">
      <span class="num">5个</span>
      <span>></span>
    </div>
  </section>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.header {
  height: 2.12rem;
  background-color: #ccc;
  padding-top: 0.48rem;
  display: flex;
  position: relative;
  .avatar {
    width: 1.28rem;
    height: 1.28rem;
    background-color: #000;
    border-radius: 5px;
    margin-left: 0.48rem;
  }
  .info {
    margin-left: 0.32rem;
    .brand {
      margin-top: 2px;
      width: 0.6rem;
      height: 0.36rem;
    }
    .text {
      font-size: 16px;
      color: rgb(255, 255, 255);
      font-weight: bold;
      margin-left: 0.12rem;
    }
    .time {
      margin-top: 0.16rem;
      font-size: 12px;
      color: rgb(255, 255, 255);
      font-weight: 200;
    }
    .discount {
      margin-top: 0.2rem;
      margin-bottom: 0.04rem;
      img {
        width: 0.24rem;
        height: 0.24rem;
        vertical-align: middle;
      }
      span {
        font-size: 10px;
        color: rgb(255, 255, 255);
        font-weight: 200;
      }
    }
  }
  .count {
    width: 0.8rem;
    height: 0.48rem;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    color: rgb(255, 255, 255);
    font-weight: 200;
    position: absolute;
    right: 0.24rem;
    bottom: 0.36rem;
    .num {
      margin-right: 2px;
    }
  }
}
</style>
