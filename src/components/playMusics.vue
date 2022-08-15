<template>
  <div class="playMusic">
    <div class="bg" :style="{backgroundImage:`url(${playdetail.al.picUrl})`}"></div>
    <div class="playTop">
      <svg class="icon" aria-hidden="true" @click="$emit('back')">
        <use xlink:href="#icon-zuojiantou"></use>
      </svg>
      <div class="title">
        <p>{{playdetail.al.name}}</p>
      </div>
      <svg class="icon share" aria-hidden="true">
        <use xlink:href="#icon-fenxiang"></use>
      </svg>
    </div>
    <div @click="lyricFn()" class="contentpage">
      <div class="playContent" v-if="!isLyric">
        <img class="needle" src="../assets/imag/needle-ab.png" :class="{active:!isPause}">
        <img class="disc" src="../assets/imag/disc-plus.png" alt>
        <img class="playimg" :src="playdetail.al.picUrl" alt>
      </div>
      <div class="playLyric" v-else ref="playLyrics">
        <p
          :class="{active:(currentTime*1000>=item.pre && currentTime*1000<item.time)}"
          v-for="(item,i) in this.$store.getters.lyricContentFn"
          :key="i"
        >{{item.lyric}}</p>
      </div>
    </div>
    <div class="progress">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shoucang"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiazai1"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-changge"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-pinglun"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gengduo"></use>
      </svg>
    </div>
    <div class="playfooter">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-repeat2"></use>
      </svg>
      <svg class="icon rotatedicon" aria-hidden="true" @click="goPlay(-1)">
        <use xlink:href="#icon-zuojiantou"></use>
      </svg>
      <svg v-if="isPause" class="icon play" aria-hidden="true" @click="playEvent">
        <use xlink:href="#icon-bofang"></use>
      </svg>
      <svg v-else class="icon play" aria-hidden="true" @click="playEvent">
        <use xlink:href="#con-zanting"></use>
      </svg>
      <svg class="icon trans" aria-hidden="true" @click="goPlay(1)">
        <use xlink:href="#icon-youjiantou"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xinzengdaohangliebiao"></use>
      </svg>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: ["playdetail", "isPause", "playEvent"],
  computed: {
    ...mapState(["playlist", "playlistindex", "currentTime",'playlistindex']),
   ...mapMutations(['setPlayindex'])

 },
  data() {
    return {
      isLyric: false
    };
  },
  methods: {
    lyricFn: function() {
      this.isLyric = !this.isLyric;
    },
    goPlay:function(value){
      let num = this.playlistindex + value;
      if(num<0){
        num = this.playlist.length-1;
        // setPlayindex()
        // playlist[playlistindex]
      }else if(num>this.playlist.length){
        num = 0;
      }
      this.$store.commit('setPlayindex',num)
    }
  },
  updated() {
    console.log(this.$store.getters.lyricContentFn);
  },
  mounted() {
    
  },
  watch: {
    //监听DOM元素
    currentTime: function(newValue) {
      let p = document.querySelector('p.active');
      this.$refs.playLyrics.scrollTop = p.offsetTop;
    }
  }
};
</script>
<style lang="less" scoped>
.playMusic {
  position: fixed;
  left: 0;
  top: 0;
  width: 7.5rem;
  height: 100vh;
  background-color: rgb(0, 0, 0);
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 7.5rem;
    height: 100vh;
    background-size: auto 100%;
    background-position: center;
    filter: blur(45px);
    z-index: -1;
  }
  .playTop {
    height: 1.2rem;
    margin-top: 0.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.3rem;
    .title {
      text-align: center;
      color: #fff;
      font-size: 0.38rem;
      font-weight: 800;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 5rem;
      line-height: 1.2rem;
      height: 1.2rem;
      position: relative;
      overflow: hidden;
      p {
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
          white-space: nowrap;
        animation: 7s wordsLoop linear infinite;
        @keyframes wordsLoop {
          0% {
            transform: translateX(2rem);
          }
          100% {
            transform: translateX(-0.1rem);
          }
        }
      }
    }
    .icon {
      color: #fff;
      font-size: 0.7rem;
    }
    .share {
      font-size: 0.6rem;
    }
  }
  .contentpage {
    height: 9.5rem;
    .playContent {
      position: absolute;
      height: 7.5rem;
      top: 1.7rem;
      left: 0;
      .needle.active {
        width: 2.5rem;
        height: auto;
        position: absolute;
        left: 3.7rem;
        z-index: 10;
        transform-origin: 0.3rem 0;
        transform: rotate(18deg);
        transition: all 1s;
      }

      .needle {
        width: 2.5rem;
        height: auto;
        position: absolute;
        left: 3.7rem;
        z-index: 10;
        transform-origin: 0.3rem 0;
        transform: rotate(-6deg);
        transition: all 1s;
      }
      .disc {
        width: 5.5rem;
        height: auto;
        position: absolute;
        left: 1rem;
        top: 3.4rem;
      }
      .playimg {
        width: 3.35rem;
        height: 3.35rem;
        border-radius: 1.5rem;
        position: absolute;
        top: 4.5rem;
        left: 2.1rem;
      }
    }
    .playLyric {
      position: absolute;
      height: 9.5rem;
      top: 2rem;
      left: 0;
      width: 7.5rem;
      padding: 0 0.3rem;
      overflow: scroll;
      p {
        color: #fff;
        font-size: 0.32rem;
        line-height: 0.7rem;
        text-align: center;
      }
      .active {
        color: red;
      }
    }
  }

  .progress,
  .playfooter {
    width: 7.5rem;
    padding: 0 0.3rem;
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    .icon {
      color: #fff;
      font-size: 0.7rem;
    }
  }
  .progress {
    position: absolute;
    bottom: 2.5rem;
    height: 1.2rem;
  }

  .playfooter {
    position: absolute;
    bottom: 0.5rem;
    height: 1.2rem;
    .play {
      font-size: 1.2rem;
    }
    .rotatedicon{
    transform: rotate(-180deg);
    }
  }
}
</style>

