<template>
  <div id="app">
    <div class="nav">
      <Header></Header>
      <div class="main">
        <router-view name="slidebar"></router-view>
        <router-view name="main"></router-view>
      </div>
    </div>
    
  </div>
</template>
<script>
  import Header from './components/Header'

  export default {
    name:'App',
    components:{
      Header,
 
    }
  }
</script>
<style lang="scss">
  .nav{
    background-color:rgb(225,225,225)
  }
.main{
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
</style>
