<script>
import Navbar from './components/Navbar.vue'
export default {
  components: {
    Navbar
  }
}
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
<div>
  <Navbar />
  <router-link to="/about">About</router-link>
  <router-view />
</div>
</template>

<style>
</style>
