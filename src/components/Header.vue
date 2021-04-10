<template>
    <div class="header">
        <router-link :to="{name:'root'}">
            <img src="../assets/cnodejs_light.svg" alt="">
        </router-link>
        <ul class="navRight">
            <router-link :to="{name:'root'}">
                <li><a href="#">首页</a></li>
            </router-link>
            <li><a href="#">新手入门</a></li>
            <li><a href="#">AIP</a></li>
            <li><a href="#">关于</a></li>
            <li><a href="#">注册</a></li>
            <li><a href="#">登录</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    *{
        margin: 0; padding: 0;
        box-sizing: border-box;
    }
    *:before,*:after{
        box-sizing:border-box;
    }
    a{
        text-decoration: none;
        color: rgb(204,204,204);
        font-size: 16px;
        text-shadow: snow;
    }
    ul{
        list-style: none;
    }
    .header{
        height: 50px;
        background-color: rgb(68,68,68);
    }
    img{
        max-width: 120px;
        margin-top: 8px;
        margin-left: 80px;
    }
    .navRight{
        float: right;
    }
    .navRight li{
        line-height: 50px;
        display: inline-block;
        margin-right: 30px;
    
    }
    .navRight a:hover{
        color: rgb(243,207,152);
    }
</style>