import { createStore } from "vuex";
export default createStore({
  state: {
    playlist: [
      {
        id: 138164304,
        name: "不会再爱你了3.0",
        al: {
          id: 138164304,
          name: "不会再爱你了3.0",
          pic: 109951166868365440,
          picUrl:
            "http://p4.music.126.net/ajXo6RG2aM8I5yYJuPmUrQ==/109951166868365438.jpg"
        }
      }
    ],
    playlistindex: 0,
    lyric: "",
    currentTime: 0,
    id:0
  },
  getters: {
    lyricContentFn: function(state) {
      //split 把一个字符串分割成字符串数组
      //slice 方法选取基于索引的元素的子集
      let arr = state.lyric.split(/\n/gis).map((item, i, arr) => {
        var min = parseInt(item.slice(1, 3));
        var sec = parseInt(item.slice(4, 6));
        var mil = parseInt(item.slice(7, 10));
        var time = mil + sec * 1000 + min * 1000 * 60;
        return {
          time,
          min,
          mil,
          sec,
          lyric: item.slice(10, item.length).replace(/[\]]*/g, ""),
          item
        };
      });
      //实现拼接组合一个新的对象
      arr.forEach((item, i) => {
        if (i == 0) {
          item.pre = 0;
        } else {
          item.pre = arr[i - 1].time;
        }
      });
      return arr;
    } 
  },
  mutations: {
    changeplaylist: function(state, value) {
      state.playlist = value;
    },
    setPlayindex: function(state, indexvalue) {
      state.playlistindex = indexvalue;
    },
    setLyric(state, value) {
      state.lyric = value;
    },
    setCurrentTime(state, value) {
      state.currentTime = value;
    }
  },
  actions: {
    //异步获取数据然后修改对应方法
    reLyric(content, playload) {
      content.commit("setLyric", playload);
    }
  },
  modules: {
    
  }
});

