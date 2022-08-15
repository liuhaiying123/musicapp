<template>
  <div class="listviewTop">
    <img :src="playlist.coverImgUrl" class="bg">
    <div class="listViewTopNav">
      <div class="back" @click="$router.go(-1)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
        <div class="title">歌单</div>
      </div>
      <div class="right">
        <svg class="icon search" aria-hidden="true">
          <use xlink:href="#icon-sousuo1"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-diandiandianshu-copy"></use>
        </svg>
      </div>
    </div>
    <div class="content">
      <div class="contentleft">
        <img :src="playlist.coverImgUrl" class="imag">
        <div class="count">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-whiteplayCircle"></use>
          </svg>
          <span>{{changeValue(playlist.playCount)}}</span>
        </div>
      </div>
      <div class="contentrigh">
        <h4>{{playlist.name}}</h4>
        <div class="author">
          <div class="hearder">
            <img :src="playlist.creator.avatarUrl">
            <span>{{playlist.creator.nickname}}</span>
          </div>
          <div class="discription">{{playlist.description}}</div>
        </div>
      </div>
    </div>
    <div class="iconList">
      <div class="iconitem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-IMliaotian-duihua"></use>
        </svg>
        <span>{{playlist.commentCount}}</span>
      </div>
      <div class="iconitem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
        <span>{{playlist.shareCount}}</span>
      </div>
      <div class="iconitem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiazai"></use>
        </svg>
        <span>下载</span>
      </div>
      <div class="iconitem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-checkbox"></use>
        </svg>
        <span>多选</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["playlist"],
  setup() {
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
    return {
      changeValue
    };
  }
};
</script>
<style lang="less" scoped>
.listviewTop {
  .bg {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
    z-index: -1;
    filter: blur(40px);
  }
  overflow: hidden;
  width: 7.5rem;
  padding: 0 0.4rem;
  height: 6rem;
  font-size: 0.4rem;

  .listViewTopNav {
    padding-top: 0.2rem;
    line-height: 0.7rem;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1rem;
    .back,
    .right {
      display: flex;
      .icon {
        font-size: 0.6rem;
        color: #fff;
      }
      .search {
        margin-right: 0.4rem;
      }
    }
    .back {
      .icon {
        font-size: 0.7rem;
      }
      .title {
        margin-left: 0.4rem;
      }
    }
  }
  .content {
    padding-top: 0.5rem;
    display: flex;
    justify-content: space-between;
    .contentleft {
      position: relative;
      img {
        width: 3rem;
        height: 3rem;
        border-radius: 0.1rem;
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
    .contentrigh {
      position: relative;
      h4 {
        color: #fff;
      }
      width: 3.3rem;
      display: flex;
      flex-direction: column;
      .author {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: flex-start;
        height: 3rem;
        .hearder {
          padding-top: 0.1rem;
          display: flex;
          flex: 1;
          span {
            padding-left: 0.15rem;
            font-size: 0.24rem;
            color: rgb(240, 240, 240);
            line-height: 0.7rem;
          }
          img {
            width: 0.6rem;
            height: 0.6rem;
            border-radius: 0.3rem;
          }
        }
        .discription {
          position: absolute;
          bottom: 0.1rem;
          font-size: 0.24rem;
          color: rgb(209, 209, 209);
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
  .iconList {
    display: flex;
    justify-content: space-between;
    padding: 0 0.3rem;
    padding-top: 0.3rem;
    align-items: center;
    .iconitem {
      display: flex;
      flex-direction: column;
      color: #fff;
      .icon {
        font-size: 0.6rem;
      }
      span {
        padding-top: 0.1rem;
        font-size: 0.24rem;
        line-height: 0.24rem;
        text-align: center;
      }
    }
  }
}
</style>
