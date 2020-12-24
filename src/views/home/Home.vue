<template>
  <div id="home" >
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :titles="['流行','新款','精选']"
                 ref="tabControl1"
                 @tabClick="tabClick" :class="{showControl:isShowControl}"></tab-control>
    <!--使用swiper插件实现轮播图，并将轮播图封装成子组件，使主页更规范-->
    <better-scroll class="content" ref="scroll" @scroll="showTrue" @pullingUp="loadMore">
      <home-swiper :banners="banners" @getHeight="getImgHeight"></home-swiper>
      <Recommend :recommends="recommends"></Recommend>
      <img-com></img-com>
      <tab-control :titles="['流行','新款','精选']"
                   ref="tabControl2"
                   @tabClick="tabClick"></tab-control>
      <goods-list :goods="goods[currentType].list" @loadRefresh="refresh"></goods-list>
    </better-scroll>
    <back-top @click.native="toTop" v-show="show"></back-top>
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
  import BScroll from "better-scroll";
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
              'pop': {page: 0,list: []},
              'new': {page: 0,list: []},
              'sell': {page: 0,list: []},
          },
          currentType: 'pop',
          show: false,
          offsetTop: 0,
          isShowControl: false,
          saveY: 0
        }
    },
      //调用组件创建完成方法，将获取的数据存到定义的变量中
    created() {
        this.getHomeData()
        this.getGoods('pop')
        this.getGoods('new')
        this.getGoods('sell')
    },
      //切换回组件时，刷新scroll并立马跳转到离开时位置
    activated() {
        this.$refs.scroll.scroll.refresh()
        this.$refs.scroll.toTop(0,this.saveY,0)
      },
      //离开组件时，保存scroll的y
    deactivated(){
        this.saveY = this.$refs.scroll.scroll.y
      },
      methods: {
        /*普通方法*/
          //将组件传出来的方法和值进行操作并同步两个tab的currentIndex
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
              this.$refs.tabControl1.currentIndex = index
              this.$refs.tabControl2.currentIndex = index
          },

          //回到顶部
          toTop(){
              this.$refs.scroll.toTop(0,0,1000)
          },
          //通过监听y轴控制回到顶部按钮显示与否
          //动态判断固定tabcontrol显示与否
          showTrue(position){
              this.show = position.y < -1000
              this.isShowControl = (-position.y) >this.offsetTop
          },
          //实现上拉加载更多，并调用scroll的finishPullUp方法，让下一次上拉加载更多也生效
          loadMore(){
              this.getGoods(this.currentType)
              this.$refs.scroll.scroll.finishPullUp()
          },
          //每次图片加载完成都调用scroll的refresh刷新高度
          refresh(){
             this.debounce(this.$refs.scroll.lessRefresh(),1000)
          },
          debounce(func, wait) {
              let timer = null;
              return function() {
                  if (timer) clearTimeout(timer);
                  timer = setTimeout(() => {
                      func().apply(this,args)
                  }, wait)
              }
          },

          getImgHeight(){
              this.offsetTop = this.$refs.tabControl2.$el.offsetTop
          },

        /*网络请求相关方法*/
        getHomeData(){
            getHome().then(res => {
                this.banners= res.data.banner.list
                this.recommends = res.data.recommend.list
            })
        },
        getGoods(type){
           const page = this.goods[type].page +1
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

  .showControl {
    position: relative;
    margin-top: 44px;
    background-color: #f6f6f6;
    z-index: 9;
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
