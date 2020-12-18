<template>
  <div class="tab-control">
    <!--通过控制currentIndex与index是否相等来控制文字颜色，再通过点击事件改变currentIndex的值-->
      <div class="tab-control-item" v-for="(item,index) in titles"
           :class="{active: currentIndex === index}" @click="itemClick(index)">
         <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
    export default {
        name: "TabControl",
        props: {
            titles : Array,
            default() {
                return [];
            }
        },
        data(){
            return {
                currentIndex: 0
            }
        },
        methods: {
            itemClick(index){
                this.currentIndex = index
                this.$emit('tabClick',index)
            }
        }
    }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
  }

  .tab-control-item {
    flex: 1; /*每部分设置均等分*/
  }
  .active span {
    color: #ff5777;
    padding: 5px;  /*设置文字内边距*/
    border-bottom: 3px solid #ff5777; /*设置下边框*/
  }
</style>