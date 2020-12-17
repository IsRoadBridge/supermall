<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image"></img>
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Recommend",
        props: {
            recommends: {
                type: Array,
                default() {
                    return []
                }
            }
        }
    }
</script>

<style scoped>

  .recommend {
    display: flex;
    width: 100%;
    text-align: center;
    border-bottom: 10px solid #eee; /*设置下边框*/
    font-size: 12px;
    padding: 20px 0px 25px 0px;
  }
  .recommend-item {
    flex: 1;
  }
  .recommend-item img {
    width: 70px;
    height: 70px;
  }
</style>