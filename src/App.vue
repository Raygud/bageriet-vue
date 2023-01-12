<template>
  <div>
    <CustomNavbar />
    <main>
      <router-view />
    </main>
    <CustomFooter />
  </div>
</template>



<script>

import CustomNavbar from './components/CustomNavbar.vue'
import CustomFooter from './components/CustomFooter.vue'

export default {
  name: 'App',
  components: {
    CustomNavbar,
    CustomFooter
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  color: inherit;
  scroll-behavior: smooth;

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
