<template>
  <div class="listview">
    <listviewTop :playlist="state.playlist"/>
    <playlist :playlist="state.playlist"/>
  </div>
</template>
<script>
import { getMusicContent } from "../api/index.js";
import { reactive, onMounted, onUpdated } from "vue";
import { useRouter, useRoute } from "vue-router";
import listviewTop from "../components/listviewTop.vue";
import playlist from "../components/playlist.vue";
import store from '../store/index.js'
//reactive响应式
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    //state是响应式对象，所以传它
    let state = reactive({ list: [], playlist: { creator: {}, tracks: [] } });
    onMounted(() => {
      let id = router.currentRoute._value.query.id;
      getMusicContent(id).then(res => {
      state.playlist = res.data.playlist;
      console.log(res)
      store.commit('changeplaylist',res.data.playlist.tracks)
      });
      // const ins = getCurrentInstance();setup中使用data中的变量
    });
    return {
      state
    };
  },
  components: {
    listviewTop,
    playlist
  }
};
</script>
<style lang="less" scoped>
.listview {
  display: flex;
  flex-direction: column;
}
</style>

