<template>
  <div class="hello">
    <div class="cdv2-context" v-show="$store.state.fromParentData.username">我是{{$store.state.fromParentData.username}},我今年{{$store.state.fromParentData.age}}了</div>
    <p @click="goBack" class="childenvue2-btn">返回上一页</p>
    <p @click="goParentHome" class="childenvue2-btn">爸爸我有话跟你说</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  mounted(){
    // console.log(window)//window.formChilden2 重新进入该应用时是存在的
    let fromPdata = this.$store.state.fromParentData
    console.log('fromPdata:'+JSON.stringify(fromPdata) )
  },
  computed:{
    // ...mapState()
  },
  methods:{
    goBack(){
      window.formChilden2 = '测试下沙箱效果'
      // console.log(window)
      // console.log(history)
      // console.log(location)
      history.back()
    },
    goParentHome(){
      this.$store.state.fromParentData.callMe('爸爸假如我考个零蛋你还会爱我吗')
      history.pushState(null,null,'http://localhost:8080/index')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.childenvue2-btn{
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
  .cdv2-context{
    color: red;
    font-size: 18px;
    margin: 13px;
  }
</style>
