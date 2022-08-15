<template>
  <div class="playlist">
    <div class="playlist-Top">
      <div class="left">
        <svg class="icon search" aria-hidden="true">
          <use xlink:href="#icon-bofang"></use>
        </svg>
        <div class="com1">
          <div class="com2">
            <div class="title">播放全部</div>
            <div class="num">(共{{playlist.tracks.length}}首)</div>
          </div>
        </div>
      </div>
      <div class="btn">+收藏({{playlist.subscribedCount}})</div>
    </div>
    <div class="list">
      <div class="listitem" v-for="(item,i) in playlist.tracks" :key="i" >
        <div class="playCount">{{i+1}}</div>
        <div class="playcontent">
          <div class="h4">{{item.name}}</div>
          <div class="author">
            <span class="tag" v-for="(item,i) in playlist.tags" :key="i">{{item}}</span>
            <div class="discription">{{item.al.name}}</div>
          </div>
        </div>
        <div class="playicon"  @click="setPlayindex(i)">
          <svg class="icon play" aria-hidden="true">
            <use xlink:href="#icon-bofang2"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-diandian"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  props: ["playlist"],
  methods: {
    ...mapMutations(['setPlayindex']),
    
  },
};
</script>
<style lang="less" scoped>
.playlist {
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  background-color: #fff;
  width: 7.5rem;
  .playlist-Top {
    position: relative;
    display: flex;
    height: 1.2rem;
    align-items: center;
    width: 7.5rem;
    justify-content: space-between;
    .left {
      width: 6.7rem;
      flex: 1;
      display: flex;
      font-size: 0.4rem;
      padding-left: 0.2rem;
      .icon {
        width: 0.5rem;
        height: 0.5rem;
        font-size: 0.5rem;
      }
      .com1 {
        width: 5.5rem;
        margin-left: 0.3rem;
        display: flex;
        font-size: 0.34rem;
        font-family: "微软雅黑";
        color: #333;
        .com2 {
          display: flex;
          align-items: center;
          .num {
            line-height: 0.3rem;
            font-size: 0.3rem;
            color: rgba(187, 185, 185, 0.664);
          }
        }
      }
    }
    .btn {
      position: absolute;
      right: 0.15rem;
      font-size: 0.27rem;
      color: #fff;
      height: 0.85rem;
      line-height: 0.85rem;
      text-align: center;
      border-radius: 0.4rem;
      width: 2.4rem;
      background-color: #ff4935;
    }
  }
  .list {
    position: relative;
    width: 7.5rem;
    height: 1.2rem;
    .listitem {
      .playCount {
        height: 1.2rem;
        width: 1rem;
        text-align: center;
        line-height: 1.2rem;
        color: rgb(165, 164, 164);
        font-size: 0.36rem;
      }
      background-color: #fff;
      display: flex;
      position: relative;
      .playcontent {
        .h4 {
              width: 5rem;
          padding-top: 0.1rem;
          display: flex;
          align-items: center;
          height: 0.85rem;
          font-size: 0.3rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
      
        }
        .author {
          bottom: 0.1rem;
          position: absolute;
          height: 0.35rem;
          display: flex;
          align-items: center;
          span {
            width: 2.8em;
            text-align: center;
            height: 0.25rem;
            color: rgb(250, 43, 43);
            border-radius: 3px;
            font-size: 0.16rem;
            line-height: 0.2rem;
            border: 0.5px solid #ee8888;
            background-color: #ffd0c5a4;
            margin-right: 0.1rem;
            overflow: hidden;
          }
          .discription {
            color: #c2bdbd;
            height: 0.3rem;
            line-height: 0.3rem;
            font-size: 0.25rem;
            width: 3rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
      .playicon {
        // z-index: -1;
        // position: fixed;
        position: absolute;
        right: 0.25rem;
        height: 1.2rem;
        line-height: 1.2rem;
        text-align: center;
        margin-top: 0.1rem;
        .icon {
          font-size: 0.5rem;
        }
        .play {
          margin-right: 0.2rem;
        }
      }
    }
  }
}
</style>

