<template>
  <div>
    <div class="topNav">
      <div class="topleft">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-caidan"></use>
        </svg>
      </div>
      <div class="topmain">
        <span class="navBtn">我的</span>
        <span class="navBtn active">发现</span>
        <span class="navBtn">云村</span>
        <span class="navBtn">视频</span>
      </div>
      <div class="topright">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
      </div>
    </div>
  </div>
</template>
<style socoped lang="less">
.topNav {
  display: flex;
  width: 7.5rem;
  height: 1rem;
  justify-content: space-between;
  align-items: center;
  padding:0 0.2rem; 
  //lang="less"
    .icon{
      width: 0.5rem;
      height: 0.5rem;
  }
  .search{
      width: 0.45rem;
      height: 0.45rem;
  }
}
.topmain{
    width: 5rem;
    display: flex;
    justify-content: space-around;
    .active{
        font-weight: 900;
    }
}
</style>
