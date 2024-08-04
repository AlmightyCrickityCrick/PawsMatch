<template>
<div>
  <Header 
  @cursor-is-toggled="toggleCursorOn"
  @cursor-not-toggled="toggleCursorOff"
  :isCursorToggled
  />
  <div id="body">
    <RouterView/>
  </div>
  <cursor
  :isCursorToggled
  />
  <Footer
  :isCursorToggled
  />
</div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import cursor from './components/cursor.vue';
</script>

<script>
export default {

  data() {
    return {
      isCursorToggled: Boolean
    }
  },
  methods: {
    toggleCursorOn() {
      this.isCursorToggled = true
    },
    toggleCursorOff() {
      this.isCursorToggled = false
    },
  },
}
</script>

<style scoped>
#body {
  padding-top: 65px;
}
</style>
