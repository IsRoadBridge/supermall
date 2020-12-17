<template>
  <div id="home" >
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <!--使用swiper插件实现轮播图，并将轮播图封装成子组件，使主页更规范-->
    <home-swiper :banners="banners"></home-swiper>
    <Recommend :recommends="recommends"></Recommend>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import {getHome} from "../../network/home";
  import HomeSwiper from "./childcomponents/HomeSwiper";
  import Recommend from "./childcomponents/Recommend";
  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      Recommend
    },
    data(){
        return {
          banners: [],
          recommends: []
        }
    },
      //调用组件创建完成方法，将获取的数据存到定义的变量中
    created() {
            getHome().then(res => {
                console.log(res.data.banner.list);
                this.banners= res.data.banner.list
                this.recommends = res.data.recommend.list
            })
        }
  }
</script>

<style scoped>


  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
