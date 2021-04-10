<template>
    <div class="UserInof">
        <div class="loading" v-if="isLoading">
            <img src="../assets/loading.gif" alt="">
        </div>
        <div class="userInofmation">
            <section>
                <img :src="userinof.avatar_url" >
                <span>{{userinof.loginname}}</span>
                <p>
                    {{userinof.score}}
                </p>
                <p>
                    注册时间：{{userinof.create_at | formatDate}}
                </p>
            </section>
            <div class="replies">
                <p>回复的主题</p>
                <ul>
                    <li v-for="(item, index) in userinof.recent_replies" :key="index">
                        <router-link :to="{
                            name: 'post_count',params:{
                                id: item.id
                            }
                        }">
                        {{item.title}}
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="topics">
                <p>创建主题</p>
                <ul>
                    <li v-for="(item,index) in userinof.recent_topics" :key="index">
                         <router-link :to="{
                             name: 'post_count',params:{
                                 id:item.id
                             }
                         }">
                             {{item.title}}
                         </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserInof",
        data(){
            return{
                isLoading: false,
                userinof: {}
            }
        },
        methods:{
            getData(){
                this.$axios.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
                .then(res=>{
                    this.isLoading = false
                    this.userinof = res.data.data
                })
                .catch(err=>{
                    console.log(err)
                })
            },
        },
        beforeMount(){
            this.isLoading = true
            this.getData()
        }
    }
</script>

<style scoped>
    .userInofmation{
        background: white;
        width:75%;
        /*margin: 10px auto;*/
    }
    .userInofmation section{
        padding: 12px;
    }
    .userInofmation img{
        width: 30px;
    }
    .userInofmation li{
        list-style: none;
    }
    .userInofmation .replies,
    .userInofmation .topics{
        font-size: 0.7rem;
        border-top: 10px #ddd solid;
    }
    .userInofmation > div > p{
        padding: 12px 0 12px 12px;
        backgournd-color: rgba(212,205,205,0.17);
        font-size: 0.75rem;
        margin: 0;
    }
    .userInofmation > div > ul> li{
        padding:4px 0 4px 12px;
        white-space: nowrap;
        font-size: 0.72rem;
        text-overflow: ellipsis;
        line-height: 30px;
        vertical-align: middle;
    }
    .userInofmation >div >ul >li >a{
        color: #094e99;
        text-decoration: none;
    }
</style>