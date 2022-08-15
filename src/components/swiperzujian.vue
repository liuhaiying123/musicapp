<template>
  <div>
    <div class="swiper-container" id="d1">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,i) in imgs" :key="i">
          <img :src="item.pic">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
import "swiper/js/swiper.min.js";
import axios from "axios";
export default {
  data: function() {
    return {
      imgs: [
      //因为请求数据中banner是一个对象,img存放在pc属性上
        // {
        //   pic: require("../assets/imag/adpage1.jpg")
        // },
        // { pic: require("../assets/imag/adpage2.jpg") },
        // { pic: require("../assets/imag/adpage3.jpg") },
        //  { pic: require("../assets/imag/adpage3.jpg") }
      ]
    };
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
    async function ff() {
      let res = await axios.get("https://netease-cloud-music-awh6uayok-liuhaiying123.vercel.app/banner?type=2&realIP=116.25.146.177");
      return res;
    }
    ff().then(res => {
      this.imgs = res.data.banners;
    });
  }
};
</script>
<style lang="less">
#d1.swiper-container {
  width: 7.1rem;
  height: 2.8rem;
  border-radius: 0.1rem;
}
.swiper-slide img {
  width: 100%;
}
.swiper-pagination-bullet-active {
  background-color: rgb(179, 178, 177);
}
</style>
