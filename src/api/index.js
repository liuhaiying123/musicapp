import axios from 'axios';
//获取轮播图API
/*
0: pc
1: android
2: iphone
3: ipad
*/
let localhostUrl ='https://netease-cloud-music-awh6uayok-liuhaiying123.vercel.app'

// let localhostUrl = 'http://localhost:3000'
export async function ff(type = 2) {
  return await axios.get(`${localhostUrl}/banner?type=${type}&realIP=116.25.146.177`);
  }
//获取推荐歌单默认十条数据
export  function getMusicList(limit = 10){
  return  axios.get(`${localhostUrl}/personalized?limit=${limit}&realIP=116.25.146.177`)
}
//获取歌单的详情
export async function getMusicContent(id){
  return await axios.get(`${localhostUrl}/playlist/detail?id=${id}&realIP=116.25.146.177`)
}
//获取歌词的内容
export async function getLyric(id){
  return await axios.get(`${localhostUrl}/lyric?id=${id}&realIP=116.25.146.177`)
}


