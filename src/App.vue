<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'app',
  components: {
    navbar: NavBar
  }
}
</script>

<style>
@import '~bootstrap/dist/css/bootstrap.min.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
