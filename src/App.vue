<template>
  <div id="App">
    <router-view/>
    <MainTabbar></MainTabbar>
  </div>
</template>

<script>
  import MainTabbar from "components/content/MainTabbar";
  export default {
    name: "App",
    components: {
      MainTabbar
    }
  }
</script>
<style>
  @import "assets/css/base.css";
</style>
