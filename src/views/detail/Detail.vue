<template>
  <div class="detail">
    <detail-nav class="nav"></detail-nav>
    <better-scroll class="content" @scroll="showTrue" ref="scroll">
      <detail-swiper :swiperImages="images"></detail-swiper>
      <detail-goods-info :goods="goods"></detail-goods-info>
      <detail-comment :fmt-date="fmtDate"></detail-comment>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </better-scroll>
    <back-top v-show="show" @click.native="toTop"></back-top>
  </div>
</template>

<script>
    import DetailNav from "./childcomponents/DetailNav";
    import DetailSwiper from "./childcomponents/DetailSwiper";
    import DetailGoodsInfo from "./childcomponents/DetailGoodsInfo";
    import BetterScroll from "../../components/common/scroll/BetterScroll";
    import DetailComment from "./childcomponents/DetailComment";
    import BackTop from "../../components/common/backtop/BackTop";

    import {getDetail,GoodsInfo} from "../../network/detail";

    export default {
        name: "Detail",
        components: {
            DetailNav,
            DetailSwiper,
            DetailGoodsInfo,
            BetterScroll,
            DetailComment,
            BackTop
        },
        data(){
            return {
                id: 0,
                images: [],
                goods: {},
                fmtDate:[],
                show: false
            }
        },
        //获取路由带过来的id
        created() {
            this.id = this.$route.params.id
            getDetail(this.id).then(res =>{
                const  data = res.result
                console.log(data)
                this.images = data.itemInfo.topImages
                this.goods = new GoodsInfo(data.columns,data.itemInfo,data.shopInfo.services)
                this.fmtDate = data.rate.list[0]
                console.log(this.fmtDate);
            })
        },
        methods: {
            //回到顶部
            toTop(){
                this.$refs.scroll.toTop(0,0,1000)
            },
            //通过监听y轴控制回到顶部按钮显示与否
            //动态判断固定tabcontrol显示与否
            showTrue(position){
                this.show = position.y < -500
            }
        }
    }
</script>

<style scoped>

  .nav {
    background-color: white;
  }
  .detail {
    position: relative;
    height: 100vh;
  }
  .content {
    height: calc(100% - 44px); /*给scroll一个高度，让scroll可以滚动*/
    overflow: hidden;
  }
</style>