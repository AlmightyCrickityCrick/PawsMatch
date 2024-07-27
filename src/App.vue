<template>
  <Header/>
  <div>
    <RouterView />
  </div>
  <Footer/>
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router';
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
</script>

<style scoped>
    div {
      padding-top: 65px;
    }
</style>
<style>

</style>
