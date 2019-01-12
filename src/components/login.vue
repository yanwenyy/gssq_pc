<template>
  <div>登录页面</div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "login",
        mounted(){
          console.log(Vue.cookie.get('token'));
        }
    }
</script>

<style scoped>

</style>
