import Vue from 'vue'
import VueRouter from 'vue-router'
import Article from "../components/Article";
import PostList from "../components/PostList";
import UserInof from "../components/UserInof";
import SlideBar from "../components/SlideBar";

Vue.use(VueRouter)


const router = new VueRouter({
  routes:[
      {
          name: 'root',
          path:'/',
          components:{
              main:PostList
          }
      },
      {
          name: 'post_count',
          path:'/topic/:id&author=:name',
          components: {
                  main: Article,
                  slidebar: SlideBar
          }
      },
      {
          name:'user_info',
            path:'/userInof/:name',
          components:{
              main: UserInof
          }
      }
  ]
})

export default router
