<template>
  <div class="parent-app">
     <section class="parent-url-item">
       <router-link class="nav-item" to='/'>home页</router-link>
       <router-link class="nav-item" to='/index'>index页</router-link>
       <router-link class="nav-item" to='/childenVue1'>子应用1</router-link>
       <router-link class="nav-item" to='/childenVue2'>子应用2</router-link>
     </section>
     <section class="main-content-box">
        <router-view />
     </section>
     <section id="childenVue1"></section>
     <section id="childenVue2"></section>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  .nav-item{
    margin-right: 12px
  }
</style>
