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
        //使用vue的$nextTick方法
        mounted() {
            this.$nextTick(() => {
                this.scroll = new BScroll(this.$refs.wrapper,{
                 probeType: 3,
                 pullUpLoad: true
            })
            this.scroll.on('pullingUp',() =>{
                console.log('上拉加载更多')
            })
          })
        },
        methods:{
            toTop(x,y){
                this.scroll.scrollTo(x,y,1000)
            }
        }
    }
</script>

<style scoped>
</style>