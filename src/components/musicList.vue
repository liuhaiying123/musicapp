<template>
  <div class="musicList">
    <div class="musicList-Top">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="mlist">
      <!-- swiper-container -->
      <div class="swiper-container" id="d2">
        <div class="swiper-wrapper">
          <router-link :to="{path:'/listview',query:{id:item.id}}" class="swiper-slide" v-for="(item,i) in musicList.musicLists" :key="i">
            <img :src="item.picUrl">
            <div class="name">{{item.name}}</div>

            <div class="count">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-whiteplayCircle"></use>
              </svg>
              <span>{{changeValue(item.playCount)}}</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script scoped>
import Swiper from "swiper";
import "swiper/css/swiper.css";
import "swiper/js/swiper.min.js";
import { getMusicList } from "../api/index.js";
import { reactive, onMounted, onUpdated } from "vue";
export default {
  setup() {
    let musicList = reactive({ musicLists: [] });
    function changeValue(num) {
      let res = 0;
      if (num > 100000000) {
        res = num / 100000000;
        res = res.toFixed(2) + "亿";
      } else if (num > 10000) {
        res = num / 10000;
        res = res.toFixed(2) + "万";
      }
      return res;
    }

    onMounted(() => {
      getMusicList(10).then(res => {
        musicList.musicLists = res.data.result;
      });
    }),
      onUpdated(() => {
        var swiper = new Swiper("#d2", {
          slidesPerView: 3,
          spaceBetween: 10
        });
      });
    return {
      musicList,
      changeValue
    };
  }
};
</script>

   
<style lang="less" scoped>
.musicList {
  width: 7.5rem;
  padding: 0.4rem;
  .musicList-Top {
    display: flex;
    align-content: center;
    justify-content: space-between;
    height: 1rem;
    .title {
      font-size: 0.4rem;
      font-weight: 900;
    }
    .more {
      border: 1px solid #ccc;
      border-radius: 0.1rem;
      padding: 0.08rem;
      font-size: 0.24rem;
      text-align: center;
      height: 0.5rem;
    }
  }
}
.mlist {
  .swiper-container {
    width: 100%;
    height: 3rem;
    .swiper-slide {
      display: flex;
      flex-direction: column;
      position: relative;
      img {
        width: 100%;
        height: auto;
        border-radius: 0.1rem;
      }
      .name {
        height: 0.6rem;
        width: 100%;
        font-size: 0.24rem;
        line-height: 0.4rem;
        text-align: center;
      }
      .count {
        position: absolute;
        right: 0.1rem;
        top: 0.1rem;
        color: rgb(253, 251, 251);
        font-size: 0.2rem;
        display: flex;
        align-items: center;
        .icon {
          font-size: 0.2rem;
          //svg用fill设置颜色
        }
      }
    }
  }
}
</style>
