<template>
    <div class="PostList">
<!--        数据未返回的时候，数据加载完成之前显示-->
        <div class="loading" v-if="isLoading">
            <img src="../assets/loading.gif" alt="">
        </div>
<!--        代表主题帖子列表-->
        <div v-else class="posts">
            <ul>
                <li>
                    <div class="toobar">
                        <span>全部</span>
                        <span>问答</span>
                        <span>分享</span>
                        <span>精华</span>
                        <span>招聘</span>
                    </div>
                </li>
                <li v-for="(post,index) in posts" :key="index">
                    <img :src="post.author.avatar_url" alt="">
                    <span class="allcount">
<!--                        回复量-->
                        <span class="reply_count">{{post.reply_count}}</span>
<!--                        浏览量-->
                        /{{post.visit_count}}
                    </span>
<!--                    帖子的分类-->
                        <span :class="[{put_good:(post.good === true),put_top:(post.top === true),'topiclist_top':(post.good !== true && post.top !==true)}]">
                            <span>
<!--                            判断显示帖子分类-->
                                {{post | tabFormatter}}
                            </span>
                    </span>
<!--                    文章标题 title-->
                    <router-link :to="{name:'post_count',params: {
                        id: post.id,
                        name: post.author.loginname
                    }}">
                        <span>
                            {{post.title}}
                        </span>
                    </router-link>
<!--                  最终回复时间-->
                    <span class="last_reply">
                        {{post.last_reply_at | formatDate}}
                    </span>
                </li>
                <li>
                    <Pagination @handeList="renderList"></Pagination>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Pagination from "./Pagination";
    export default {
        name: "PostList",
        data(){
            return {
                isLoading: false, // 代表数据加载成功之前的动画
                posts:[], // 代表页面的内容列表
                postpage:1
            }
        },
        components:{
            Pagination
        },
        methods:{
            getData(){
                this.$axios.get('https://cnodejs.org/api/v1/topics',{
                    params:{
                        page:this.postpage,
                        limit:20
                    }
                })
                .then(res=>{ // 成功执行
                    this.isLoading = false // 成功加载之后 动画消除
                    this.posts = res.data.data // 获取cnode 里面 data.data 的数据
                    console.log(res)
                })
                .catch(err=>{  // 失败执行
                    console.log(err)
                })
            },
            renderList(value){
             this.postpage = value;
             this.getData()
            }
        },
        beforeMount(){
            this.isLoading = true // 数据加载成功之前 加载动画
            this.getData() // 加载之前获取到数据
        }
    }
</script>
<style scoped>
    .PostList{
        background-color: #e1e1e2;
    }
    .posts{
        margin-top: 10px;
    }
    .PostList img{
        height: 30px;
        width: 30px;
        vertical-align: middle;
    }
    ul {
        list-style: none;
        width: 100%;
        max-width: 1344px;
        margin: 0 auto;
    }
    ul li:not(:first-child){
        padding: 9px;
        font-size: 15px;
        font-family:"Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma, "Hiragino Sans GB", STHeiti, sans-serif !important;
        color: #333;
        border-top: 1px solid #f0f0f0;
        background-color: white;
    }
    li:not(:first-child):hover{
        background: #f5f5f5;
    }
    li span{
        line-height: 30px;
    }
    .allcount{
        width: 70px;
        display: inline-block;
        text-align: center;
        font-size: 12px;
    }
    .reply_count{
        color: #9e78c0;
        font-size: 14px;
    }
    .put_good, .put_top{
        background: #80bd01;
        padding: 2px 4px;
        border-radius: 10px;
        /*-webkit-border-radius: 10px;*/
        font-size: 14px;
        margin-right: 12px;
    }
    .last_reply{
        text-align: right;
        min-width: 50px;
        display: inline-block;
        white-space: nowrap;
        float: right;
        color: #778087;
        font-size: 14px;
    }
    .toobar {
        height: 40px;
        background-color: #f5f5f5
    }
    .toobar span {
        font-size: 14px;
        color: #80bd01;
        line-height: 40px;
        margin: 0 12px;
        cursor: pointer;
    }
    .toobar span:hover{
        color: #9e78c0;
    }
    a{
        text-decoration: none;
        color: black;
    }
    a:hover{
        text-decoration: underline;
    }
    .loading {
        text-align: center;
        padding-top: 300px;
    }
</style>