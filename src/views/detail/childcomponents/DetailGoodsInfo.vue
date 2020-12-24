<template>
  <div class="goods-info">
    <div class="title"><b>{{goods.title}}</b></div>
    <div class="price">
      <div class="now-price">¥{{goods.lowNowPrice}}</div>
      <div class="old-price">{{goods.oldPrice}}</div>
      <div class="price-label">{{goods.discountDesc}}</div>
    </div>
    <div class="like">
      <p>{{goods.columns[0]}}</p>
      <p class="like-center">{{goods.columns[1]}}</p>
      <p class="like-right">{{goods.services[0].name}}</p>
    </div>
    <br>
    <hr>
    <div class="safe">
      <div class="safe-left">
        <img :src="goods.services[1].icon">
        <span>{{goods.services[1].name}}</span>
      </div>
      <div class="safe-right">
        <img :src="goods.services[2].icon">
        <span>{{goods.services[2].name}}</span>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
    export default {
        name: "DetailGoodsInfo",
        props: {
            goods: Object,
            default(){
                return {}
            }
        }
    }
</script>

<style scoped>

  .goods-info {
    padding: 10px 5px 0px 5px;
  }
  .title {
  }
  .price {
    display: flex;
    padding-top: 10px;
  }
  .now-price {
    color: #ff5777;
    font-size: 20px;
    padding-right: 5px;
  }
  .old-price {
    color: darkgray;
    padding-top: 4px;
    padding-right: 5px;
    text-decoration: line-through; /*设置文字带删除线效果*/
  }
  .price-label {
    margin-top: -5px;
    font-size: 15px;
    width: 50px;
    height: 23px;
    color: #f6f6f6;
    text-align: center;
    background-color: #ff5777;
    border-radius: 10px; /*设置矩形边框为圆角*/
  }
  .like {
    margin-top: 10px;
    display: flex;
  }
  .like p {
    flex: 1;
    color: darkgray;
    font-size: 12px;
  }
  .like-center {
    padding-left: 50px;
  }
  .like-right {
    padding-left: 50px;
  }
  .safe {
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    text-align: center;
  }

  .safe img {
    width: 15px;
    height: 15px;
  }
  .safe span {
    font-size: 13px;
  }
  .safe-right {
    padding-left: 140px;
  }
</style>