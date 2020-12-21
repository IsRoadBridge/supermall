<template>
  <div id="home" >
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <!--使用swiper插件实现轮播图，并将轮播图封装成子组件，使主页更规范-->
    <better-scroll class="content" ref="scroll">
      <home-swiper :banners="banners"></home-swiper>
      <Recommend :recommends="recommends"></Recommend>
      <img-com></img-com>
      <tab-control :titles="['流行','新款','精选']" class="tab-control" @tabClick="tabClick"></tab-control>
      <goods-list :goods="goods[currentType].list"></goods-list>
    </better-scroll>
    <back-top @click.native="toTop"></back-top>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from "../../components/content/tabcontrol/TabControl";
  import GoodsList from "../../components/content/goods/GoodsList";
  import BetterScroll from "../../components/common/scroll/BetterScroll";
  import BackTop from "../../components/common/backtop/BackTop";

  import {getHome,getHomeGoods} from "../../network/home";

  import HomeSwiper from "./childcomponents/HomeSwiper";
  import Recommend from "./childcomponents/Recommend";
  import ImgCom from "./childcomponents/ImgCom";
  export default {
    name: "Home",
    components: {
      NavBar,
      TabControl,
      HomeSwiper,
      Recommend,
      ImgCom,
      GoodsList,
      BetterScroll,
      BackTop
    },
    data(){
        return {
          banners: [],
          recommends: [],
          goods: {
              'pop': {page: 1,list: []},
              'new': {page: 1,list: []},
              'sell': {page: 1,list: []},
          },
          currentType: 'pop'
        }
    },
      //调用组件创建完成方法，将获取的数据存到定义的变量中
    created() {
        this.getHomeData()
        this.getGoods('pop')
        this.getGoods('new')
        this.getGoods('sell')
    },
      methods: {
        /*普通方法*/
          //将组件传出来的方法和值进行操作
          tabClick(index){
              switch (index) {
              case 0 :
                  this.currentType = 'pop'
                  break
              case 1 :
                  this.currentType = 'new'
                  break
              case 2 :
                  this.currentType = 'sell'
                  break
              }
          },

          toTop(){
              console.log('111')
              this.$refs.scroll.toTop(0,0)
          },
        /*网络请求相关方法*/
        getHomeData(){
            getHome().then(res => {
                this.banners= res.data.banner.list
                this.recommends = res.data.recommend.list
            })
        },
        getGoods(type){
           const page = this.goods[type].page
            getHomeGoods(type,page).then(res => {
                this.goods[type].list.push(...res.data.list)
            })
            this.goods[type].page+=1
        }

      }
  }
</script>

<style scoped>
  /*scoped作用域在本组件中，可以让样式只对本组件的id和class生效*/
  #home {
    /*padding-top: 44px; /*设置头部内边距，让轮播图显示完全*/
    height: 100vh; /*vh表示视口单位，这样设置后整个home的高度驾驶页面显示的高度*/
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;  /*设置导航栏固定在头部*/
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control {
    position: sticky; /*在页面内实现跟鼠标粘性粘贴，设置到顶部44px变成固定定位*/
    top: 44px;
    background-color: #f6f6f6;
  }

  .content {
   overflow: hidden;
   position: absolute;/*设置在范围外为相对定位，到指定范围变成绝对定位，此处设置滑动范围在距头部44px，底部49px的区域*/
   top: 44px;
   bottom: 49px;
   left: 0;
   right: 0;
  }
</style>
