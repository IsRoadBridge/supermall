<template>
  <div class="detail">
    <detail-nav></detail-nav>
    <better-scroll class="content">
      <detail-swiper :swiperImages="images"></detail-swiper>
      <detail-goods-info :goods="goods"></detail-goods-info>
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
  </div>
</template>

<script>
    import DetailNav from "./childcomponents/DetailNav";
    import DetailSwiper from "./childcomponents/DetailSwiper";
    import DetailGoodsInfo from "./childcomponents/DetailGoodsInfo";
    import BetterScroll from "../../components/common/scroll/BetterScroll";

    import {getDetail,GoodsInfo} from "../../network/detail";

    export default {
        name: "Detail",
        components: {
            DetailNav,
            DetailSwiper,
            DetailGoodsInfo,
            BetterScroll
        },
        data(){
            return {
                id: 0,
                images: [],
                goods: {}
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
                console.log(this.goods);
            })
        }
    }
</script>

<style scoped>

  .detail {
    position: relative;
    height: 100vh;
  }
  .content {
    height: calc(100% - 44px); /*给scroll一个高度，让scroll可以滚动*/
  }
</style>