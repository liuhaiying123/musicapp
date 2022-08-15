<template>
  <div id="nav"> 
    <router-view/><!-- router-view标签是指路由，其实就是指向的意思 -->
    <playcontrol></playcontrol>
  </div>

</template>
<script>
  import playcontrol from './components/play-control.vue';

export default {


  components:{
      playcontrol
    }
}
</script>
<style lang="less">
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "微软雅黑";
}
a {
  text-decoration: none;
  color: #333;
}
</style>

