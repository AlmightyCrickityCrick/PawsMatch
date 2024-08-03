<template>
  <Header />
  <div>
    <RouterView />
  </div>
  <cursor/>
  <Footer />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import cursor from './components/cursor.vue';
</script>

<style scoped>
div {
  padding-top: 65px;
  cursor: none;
}
</style>
