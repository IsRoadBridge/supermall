<template>
  <div class="good-list">
      <div class="good-list-item" v-for="(item,index) in goods" @click="toDetail(index)">
            <img :src="item.show.img" @load="refresh">
        <div class="goods-info">
          <p>{{item.title}}</p>
          <span class="price">{{item.price}}</span>
          <span class="collect">{{item.cfav}}</span>
        </div>
      </div>
  </div>
</template>

<script>
    export default {
        name: "GoodsList",
        props: {
            goods: Array,
            default(){
                return []
            }
        },
        methods: {
            //图片加载完成会调用vue的@load，然后再讲该方法传给父组件
            refresh(){
                this.$emit('loadRefresh')
            },
            //通过路由跳转到指定图片的详情页
            toDetail(index){
                this.$router.push('/detail/'+this.goods[index].iid)
            }
        }
    }
</script>

<style scoped>

  .good-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }

  .good-list-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>