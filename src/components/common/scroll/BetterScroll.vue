<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
        name: "BetterScroll",
        data(){
            return {
                scroll: null
            }
        },
        //使用vue的$nextTick方法，完成异步加载，防止BScroll不生效
        mounted() {
            this.$nextTick(() => {
                this.scroll = new BScroll(this.$refs.wrapper,{
                 click: true, //设置滚动内部的基本事件的可点击可以响应
                 probeType: 3,  //3表示实时监听滚动位置
                 pullUpLoad: true  //设置到底部可以调用方法
            })
              this.scroll.on('scroll',position =>{
                this.$emit('scroll',position)
              })

              this.scroll.on('pullingUp',() =>{
                this.$emit('pullingUp')
              })
          })
        },
        methods:{
            toTop(x,y){
                this.scroll.scrollTo(x,y,1000)
            },
            lessRefresh(){
                console.log('11333')
                this.scroll.refresh()
            }
        }
    }
</script>

<style scoped>
</style>