<template>
<div>
  <Header />
  <div id="body">
    <RouterView />
  </div>
  <cursor/>
  <Footer />
</div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import cursor from './components/cursor.vue';
</script>

<style scoped>
*{
  cursor: none;
}
#body {
  padding-top: 65px;
}
</style>
