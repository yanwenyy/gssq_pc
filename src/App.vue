<template>
  <transition name="fade">
    <router-view></router-view>
  </transition>
</template>

<script>
export default {
  name: 'App',
  mounted (){

  }
}
</script>

<style>
  @import "../static/css/main.css";
  @import "../static/css/reset.css";
</style>
