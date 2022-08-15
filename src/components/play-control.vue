<template>
  <div class="playcontrolor">
    <div class="playcontrol">
      <div class="left" @click="changeFn()">
        <img :src="playlist[playlistindex].al.picUrl">
        <div class="content">
          <div class="title">{{playlist[playlistindex].al.name}}</div>
          <div class="toggle">滑动可以切换上下首哦</div>
        </div>
      </div>
      <div class="right">
        <span>
          <svg v-if="isPause" class="icon play" aria-hidden="true" @click="playEvent()">
            <use xlink:href="#icon-bofang1"></use>
          </svg>
          <svg v-else class="icon play" aria-hidden="true" @click="playEvent()">
            <use xlink:href="#icon-pauseCircle"></use>
          </svg>
        </span>
        <span>
          <svg class="icon menu" aria-hidden="true">
            <use xlink:href="#icon-gedan"></use>
          </svg>
        </span>
      </div>
    </div>
    <playMusics
      @back="showpage=!showpage"
      :isPause="isPause"
      :playdetail="playlist[playlistindex]"
      v-show="showpage"
      :playEvent="playEvent"
    ></playMusics>
    <audio
      ref="audio"
      :src="`https://music.163.com/song/media/outer/url?id=${this.playlist[this.playlistindex].id}.mp3`"
    ></audio>
  </div>
</template>
<script>
import { getLyric } from "../api/index.js";
import { mapState, mapMutations } from "vuex";
import playMusics from "../components/playMusics.vue";
export default {
  computed: {
    ...mapState(["playlist", "playlistindex"]),
    ...mapMutations(['setCurrentTime'])
  },
  mounted() {},
  updated() {
    getLyric(this.playlist[this.playlistindex].id).then(res => {
      this.$store.dispatch("reLyric", res.data.lrc.lyric);
    });

  },
  methods: {
    UpdataTime() {
      this.$store.state.id = setInterval(() => {
        let num = this.$refs.audio.currentTime
        this.$store.commit('setCurrentTime', num);
         this.$store.getters.lyricContentFn.forEach((item,i) => {
             console.log( this.$refs.audio.currentTime*1000)
          console.log(item.time +" " + item.pre)
        });
      }, 1000);
    },
    playEvent: function() {
      this.isPause = !this.isPause; //改变成true就开始播放
      if (this.isPause == true) {
        this.$refs.audio.muted = true;
        this.$refs.audio.pause();
        clearInterval(this.$store.state.id);
      } else if (this.isPause == false) {
        this.$refs.audio.muted = false;
        this.$refs.audio.play();
        this.UpdataTime();
        // console.log( this.$refs.audio.currentTime)
      }
    },
    changeFn: function() {
      this.showpage = !this.showpage;
    }
  },
  data() {
    return {
      isPause: true, //一开始为falseplay图标显示
      showpage: false,
      id: 0
    };
  },
  components: {
    playMusics
  }
};
</script>
<style lang="less" scoped>
.playcontrolor {
  z-index: 10;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  .playcontrol {
    border-top: 1px solid #ccc;
    width: 7.5rem;
    height: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      margin-left: 0.1rem;
      align-items: center;
      img {
        border-radius: 0.4rem;
        width: 0.8rem;
        height: 0.8rem;
      }
      .content {
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 0.1rem;
        height: 1.2rem;
        text-align: center;
        width: 4.5rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        .title {
          font-size: 0.27rem;
        }
        .toggle {
          margin-top: 3px;
          color: rgb(161, 160, 160);
          font-size: 0.23rem;
        }
      }
    }
    .right {
      width: 1.5rem;
      display: flex;
      margin-right: 0.2rem;
      justify-content: space-between;
      .icon {
        font-size: 0.75rem;
        color: #e6e6e6;
      }
      .play {
        margin-right: 0.1rem;
        font-size: 0.64rem;
      }
      .menu {
        font-size: 0.7rem;
      }
    }
  }
}
</style>

