<template>
  <div class="hello">
    <p @click="goParentHome" class="childenvue1-btn">点击跳转到父应用首页</p>
    <p @click="goChilden2Home" class="childenvue1-btn">点击跳转到子应用2首页</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  mounted(){
    console.log(window)
  },
  methods:{
    goParentHome(){
      // 子应用跳父应用指定页面
      history.pushState({id:1},null,'http://localhost:8080/home')
    },
    goChilden2Home(){
      // 子应用1跳子应用2指定页面
      history.pushState({id:1},null,'http://localhost:10001/childenVue2/home')
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .childenvue1-btn{
    padding: 6px;
    border-radius: 6px;
    text-align: center;
    font-size: 13px;
    background: #0c53f5c7;
    color: white;
    width: 200px;
    cursor: pointer;
    margin: 50px auto;
  }
</style>
