<template>
  <div>
    <NavBar>
      <div slot="left" class="nav-img">
        <img src="~assets/img/common/back.svg" @click="back">
      </div>
      <div slot="center" class="nav-text">
        <div v-for="(item,index) in titles" class="text-item"
             :class="{active:currentIndex === index}" @click="btnText(index)">{{item}}</div>
      </div>
    </NavBar>
  </div>
</template>

<script>
  import NavBar from "../../../components/common/navbar/NavBar";
    export default {
        name: "DetailNav",
        components: {
            NavBar
        },
        data(){
            return {
                titles: ['商品','参数','评论','推荐'],
                currentIndex : 0
            }
        },
        methods: {
            btnText(index){
                this.currentIndex = index
            },
            //路由返回
            back(){
                this.$router.back()
            }
        }
    }
</script>

<style scoped>

  .nav-img {
    margin-top: 5px;
  }
  .nav-text {
    display: flex;
    font-size: 12px;
  }

  .text-item {
    flex: 1;
  }
  .active {
    color: #ff5777;
  }
</style>