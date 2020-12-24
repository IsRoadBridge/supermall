<template>
  <Swiper>
    <SwiperItem v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" @load="getHeight">
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
    import {Swiper, SwiperItem} from 'components/common/swiper/index.js'

    export default {
        name: "HomeSwiper",
        props: {
            banners: Array
        },
        data(){
            return {
                isTrue: false
            }
        },
        components: {
            Swiper,
            SwiperItem
        },
        methods: {
            getHeight(){
                if(!this.isTrue)
                this.$emit('getHeight')
                this.isTrue = true
            }
        }
    }
</script>

<style scoped>

</style>