<template>
  <div class="app">
    <section>
      <router-link to='/' style="marginRight:12px">home</router-link>
      <router-link to='/hellowWorld'>hellowWorld</router-link>
    </section>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
