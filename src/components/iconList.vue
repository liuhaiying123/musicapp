<template>
  <div class="iconList">
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-tuijian"></use>
      </svg>
      <span>每日推荐</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-vipsirenzhuanxiangdingzhiyewukehu"></use>
      </svg>
      <span>私人FM</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gedan"></use>
      </svg>

      <span>歌单</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-paihangbang"></use>
      </svg>
      <span>排行榜</span>
    </div>
  </div>
</template>
<style lang="less" scoped>
.iconList{
  display: flex;
  padding: 0.34rem;
  justify-content: space-between;
  .icon{
    height: 0.8rem;
    width: 0.8rem;
  }
  .iconItem{
    display: flex;
    flex-direction: column;
    text-align: center;
   align-items: center;
   font-size: 0.28rem;
  }
}
</style>
