<template>
 <div>
   <swiper class="swiper-style">
     <swiper-item v-for="item in swiperImages">
        <img :src="item">
     </swiper-item>
   </swiper>
 </div>
</template>

<script>
  import {Swiper, SwiperItem} from  'components/common/swiper/index'
    export default {
        name: "DetailSwiper",
        components: {
            Swiper,
            SwiperItem
        },
        props: {
            swiperImages: Array,
            default(){
                return []
            }
        }
    }
</script>

<style scoped>

  .swiper-style {
    height: 300px;
  }
</style>