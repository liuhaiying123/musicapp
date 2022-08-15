<template>
  <div class="home">
    <top-nav/>
    <swiperzujian/>
    <iconList/>
    <musicList/>
  </div>
</template>
<script>
import topNav from "../components/topNav.vue";
import swiperzujian from "../components/swiperzujian.vue";
import iconList from "../components/iconList.vue";
import musicList from "../components/musicList.vue";
export default {
  name: "Home",
  components: {
  topNav,
    swiperzujian,iconList,musicList
  },
  data() {
    return {};
  }
};
</script>
<style lang="less">
</style>

