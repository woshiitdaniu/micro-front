<template>
  <div class="hello">
    我是Index页
    <p class="parent-context" v-show="$store.state.fromChilden1Data.context">儿子2说:{{$store.state.fromChilden1Data.context}}</p>
  </div>
</template>

<script>
export default {
  name: 'Index',
  props: {
    msg: String
  },
  mounted(){
    // console.log(window)  
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
