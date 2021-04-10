import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";

Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.filter('formatDate',(str)=>{
  if(!str) return ''
  let date = new Date(str)
  let time = new Date().getTime() - date.getTime() // 过去的时间 - 上传的时间 = 相差的时间
  if(time < 0){
    return ''
  }else if((time / 1000) < 30){
    return '刚刚'
  }else if((time / 1000) < 60){
    return parseInt(time / 1000) + '秒前'
  }else if((time / 60000) <60){
    return parseInt(time / 60000) + '分钟前'
  }else if((time / 3600000) < 24){
    return parseInt(time / 3600000) + '小时前'
  }else if((time / 86400000) < 31){
    return parseInt(time / 86400000) + '天前'
  }else if((time / 2592000000) < 12){
    return parseInt(time / 2592000000) + '月前'
  }else{
    return parseInt(time / 31536000000) + '年前'
  }
})
 // 处理板块显示的 文字
Vue.filter('tabFormatter',(post)=>{
  if(post.good === true){
    return '精华'
  }else if(post.top === true){
    return '置顶'
  }else if(post.top ===  'ask'){
    return '问答'
  }else if(post.top === 'share'){
    return '分享'
  }else {
    return '招聘'
  }
})