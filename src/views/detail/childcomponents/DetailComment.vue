<template>
  <div>
    <p>{{fmtDate.created}}</p>
    <p>{{fmtDate.created | showDate}}</p>
  </div>
</template>

<script>
    export default {
        name: "DetailComment",
        props: {
            fmtDate: Array
        },
        //利用filters过滤，将时间戳格式化为正常时间，一般都有格式化的工具类，这里只是简单示意
        filters: {
            showDate(value){
                const date = new Date(value * 1000)

                return  date.getFullYear()+'-'+date.getMonth()+'-'+date.getDay()
            }
        }
    }
</script>

<style scoped>

</style>